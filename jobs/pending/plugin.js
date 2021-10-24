import serialize from "../../sources/Utils/plugins/copy-advanced-webpack-plugin/src/utils/serialize-javascript";
import { version } from "../../sources/Utils/plugins/copy-advanced-webpack-plugin/package.json";
import normalizePath from "../../sources/Utils/plugins/copy-advanced-webpack-plugin/src/utils/normalize-path";

compiler.hooks.thisCompilation.tap(pluginName, (compilation) => {
  const logger = compilation.getLogger(pluginFullName);
  const cache = compilation.getCache(pluginWebpackName);

  compilation.hooks.afterProcessAssets.tap(
    {
      name: pluginFullName,
      stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL,
    },
    async () => {
      logger.log("starting to add additional assets...");
      const assetMap = new Map();
      await Promise.all(
        this.patterns.map((item, index) =>
          limit(async () => {
            let assets;

            try {
              assets = await CopyAdvancedPlugin.runPattern(
                compiler,
                compilation,
                logger,
                cache,
                item,
                index
              );
            } catch (error) {
              compilation.errors.push(error);
              return;
            }

            if (assets && assets.length > 0) {
              if (item.transformAll) {
                if (typeof item.to === "undefined") {
                  compilation.errors.push(
                    new Error(
                      `Invalid "pattern.to" for the "pattern.from": "${item.from}" and "pattern.transformAll" function . The "to" option must be specified.`
                    )
                  );

                  return;
                }

                assets.sort((a, b) =>
                  a.absoluteFilename > b.absoluteFilename
                    ? 1
                    : a.absoluteFilename < b.absoluteFilename
                    ? -1
                    : 0
                );

                const mergedEtag =
                  assets.length === 1
                    ? cache.getLazyHashedEtag(assets[0].source.buffer())
                    : assets.reduce((accumulator, asset, i) => {
                        // eslint-disable-next-line no-param-reassign
                        accumulator = cache.mergeEtags(
                          i === 1
                            ? cache.getLazyHashedEtag(
                                accumulator.source.buffer()
                              )
                            : accumulator,
                          cache.getLazyHashedEtag(asset.source.buffer())
                        );

                        return accumulator;
                      });

                const cacheKeys = `transformAll | ${serialize({
                  version,
                  from: item.from,
                  to: item.to,
                  transformAll: item.transformAll,
                })}`;
                const eTag = cache.getLazyHashedEtag(mergedEtag);
                const cacheItem = cache.getItemCache(cacheKeys, eTag);
                let transformedAsset = await cacheItem.getPromise();

                if (!transformedAsset) {
                  transformedAsset = {
                    filename: item.to,
                  };

                  try {
                    transformedAsset.data = await item.transformAll(
                      assets.map((asset) => {
                        return {
                          data: asset.source.buffer(),
                          sourceFilename: asset.sourceFilename,
                          absoluteFilename: asset.absoluteFilename,
                        };
                      })
                    );
                  } catch (error) {
                    compilation.errors.push(error);

                    return;
                  }

                  if (template.test(item.to)) {
                    const contentHash = CopyAdvancedPlugin.getContentHash(
                      compiler,
                      compilation,
                      transformedAsset.data
                    );

                    const { path: interpolatedFilename, info: assetInfo } =
                      compilation.getPathWithInfo(normalizePath(item.to), {
                        contentHash,
                        chunk: {
                          hash: contentHash,
                          contentHash,
                        },
                      });

                    transformedAsset.filename = interpolatedFilename;
                    transformedAsset.info = assetInfo;
                  }

                  const { RawSource } = compiler.webpack.sources;

                  transformedAsset.source = new RawSource(
                    transformedAsset.data
                  );
                  transformedAsset.force = item.force;

                  await cacheItem.storePromise(transformedAsset);
                }

                assets = [transformedAsset];
              }

              const priority = item.priority || 0;

              if (!assetMap.has(priority)) {
                assetMap.set(priority, []);
              }

              assetMap.get(priority).push(...assets);
            }
          })
        )
      );
      const assets = [...assetMap.entries()].sort((a, b) => a[0] - b[0]);
      // Avoid writing assets inside `p-limit`, because it creates concurrency.
      // It could potentially lead to an error - 'Multiple assets emit different content to the same filename'
      assets
        .reduce((acc, val) => acc.concat(val[1]), [])
        .filter(Boolean)
        .forEach((asset) => {
          const { absoluteFilename, sourceFilename, filename, source, force } =
            asset;

          const existingAsset = compilation.getAsset(filename);

          if (existingAsset) {
            if (force) {
              const info = {
                copied: true,
                sourceFilename,
              };

              logger.log(
                `force updating '${filename}' from '${absoluteFilename}' to compilation assets,
                                        because it already exists...`
              );

              compilation.updateAsset(filename, source, {
                ...info,
                ...asset.info,
              });

              logger.log(
                `force updated '${filename}' from '${absoluteFilename}' to compilation assets,
                                        because it already exists`
              );

              return;
            }

            logger.log(
              `skip adding '${filename}' from '${absoluteFilename}' to compilation assets,
                                    because it already exists`
            );

            return;
          }

          const info = { copied: true, sourceFilename };

          logger.log(
            `writing '${filename}' from '${absoluteFilename}' to compilation assets...`
          );

          compilation.emitAsset(filename, source, {
            ...info,
            ...asset.info,
          });

          logger.log(
            `written '${filename}' from '${absoluteFilename}' to compilation assets`
          );
        });
      logger.log("finished to adding additional assets");
    }
  );

  if (compilation.hooks.statsPrinter) {
    compilation.hooks.statsPrinter.tap(pluginName, (stats) => {
      stats.hooks.print
        .for("asset.info.copied")
        .tap(pluginFullName, (copied, { green, formatFlag }) =>
          // eslint-disable-next-line no-undefined
          copied ? green(formatFlag("copied")) : undefined
        );
    });
  }
});
