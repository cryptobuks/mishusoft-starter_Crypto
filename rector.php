<?php

declare(strict_types=1);

use Rector\DowngradePhp80;
use Rector\Core\Configuration\Option;
use Rector\Core\ValueObject\PhpVersion;
use Rector\Set\ValueObject\SetList;
use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;

return static function (ContainerConfigurator $containerConfigurator): void {
    $requiredDirectories = [__DIR__ . '/bootstrap', __DIR__ . '/Framework'];
    $parameters = $containerConfigurator->parameters();

    // paths to autoload
    $parameters->set(Option::AUTOLOAD_PATHS, $requiredDirectories);
    // paths to refactor; solid alternative to Cli arguments
    $parameters->set(Option::PATHS, $requiredDirectories);
    // is your PHP version different from the one your refactor to?
    // [default: your PHP version], uses PHP_VERSION_ID format
    $parameters->set(Option::PHP_VERSION_FEATURES, PhpVersion::PHP_80);
    // Path to phpstan with extensions, that PHPSTan in Rector uses to determine types
    $parameters->set(Option::PHPSTAN_FOR_RECTOR_PATH, getcwd() . '/phpstan.neon');

    // Define what rule sets will be applied
    $containerConfigurator->import(SetList::DEAD_CODE);
    $containerConfigurator->import(SetList::CODE_QUALITY);

    // get services (needed for register a single rule)
    $services = $containerConfigurator->services();

    //Down grade from php 8.0
    $services->set(DowngradePhp80\Rector\Class_\DowngradeAttributeToAnnotationRector::class);
    $services->set(DowngradePhp80\Rector\ClassConstFetch\DowngradeClassOnObjectToGetClassRector::class);
    $services->set(DowngradePhp80\Rector\Expression\DowngradeMatchToSwitchRector::class);
    $services->set(DowngradePhp80\Rector\FunctionLike\DowngradeMixedTypeDeclarationRector::class);
    $services->set(DowngradePhp80\Rector\MethodCall\DowngradeNamedArgumentRector::class);
    $services->set(DowngradePhp80\Rector\Catch_\DowngradeNonCapturingCatchesRector::class);
    $services->set(DowngradePhp80\Rector\FunctionLike\DowngradeUnionTypeDeclarationRector::class);
    $services->set(DowngradePhp80\Rector\NullsafeMethodCall\DowngradeNullsafeToTernaryOperatorRector::class);
    $services->set(DowngradePhp80\Rector\StaticCall\DowngradePhpTokenRector::class);
    $services->set(DowngradePhp80\Rector\Class_\DowngradePropertyPromotionRector::class);
    $services->set(DowngradePhp80\Rector\ClassMethod\DowngradeStaticTypeDeclarationRector::class);
    $services->set(DowngradePhp80\Rector\FuncCall\DowngradeStrContainsRector::class);
    $services->set(DowngradePhp80\Rector\FuncCall\DowngradeStrEndsWithRector::class);
    $services->set(DowngradePhp80\Rector\FuncCall\DowngradeStrStartsWithRector::class);
    $services->set(DowngradePhp80\Rector\Expression\DowngradeThrowExprRector::class);
    $services->set(DowngradePhp80\Rector\Property\DowngradeUnionTypeTypedPropertyRector::class);
};
