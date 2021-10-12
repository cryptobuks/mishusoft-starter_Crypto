<?php

declare(strict_types=1);

use Rector\Core\Configuration\Option;
use Rector\Core\ValueObject\PhpVersion;
use Rector\Php74\Rector\Property\TypedPropertyRector;
use Rector\Set\ValueObject\SetList;
use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;

return static function (ContainerConfigurator $containerConfigurator): void {

    // get parameters
    $parameters = $containerConfigurator->parameters();

    // paths to refactor; solid alternative to CLI arguments
    $parameters->set(Option::PATHS, [__DIR__ . '/bootstrap', __DIR__ . '/Framework']);

    // is your PHP version different from the one your refactor to?
    // [default: your PHP version], uses PHP_VERSION_ID format
    $parameters->set(Option::PHP_VERSION_FEATURES, PhpVersion::PHP_80);

    // Define what rule sets will be applied
    $containerConfigurator->import(SetList::DEAD_CODE);
    $containerConfigurator->import(SetList::CODE_QUALITY);

    // get services (needed for register a single rule)
    $services = $containerConfigurator->services();

    // register a single rule
    $services->set(TypedPropertyRector::class);
    //Extra benefits
//    $services->set(\Rector\Order\Rector\Class_\OrderPrivateMethodsByUseRector::class);
//    $services->set(\Rector\Php80\Rector\Ternary\GetDebugTypeRector::class);
//    $services->set(\Rector\Php80\Rector\Catch_\RemoveUnusedVariableInCatchRector::class);
//    $services->set(\Rector\Php80\Rector\NotIdentical\StrContainsRector::class);
//    $services->set(\Rector\Php80\Rector\Identical\StrStartsWithRector::class);
//    $services->set(\Rector\Php80\Rector\Identical\StrEndsWithRector::class);

    //DowngradePhp80
    $services->set(\Rector\DowngradePhp80\Rector\Class_\DowngradeAttributeToAnnotationRector::class);
    $services->set(\Rector\DowngradePhp80\Rector\ClassConstFetch\DowngradeClassOnObjectToGetClassRector::class);
    $services->set(\Rector\DowngradePhp80\Rector\Expression\DowngradeMatchToSwitchRector::class);
    $services->set(\Rector\DowngradePhp80\Rector\FunctionLike\DowngradeMixedTypeDeclarationRector::class);
    $services->set(\Rector\DowngradePhp80\Rector\MethodCall\DowngradeNamedArgumentRector::class);
    $services->set(\Rector\DowngradePhp80\Rector\Catch_\DowngradeNonCapturingCatchesRector::class);
    $services->set(\Rector\DowngradePhp80\Rector\FunctionLike\DowngradeUnionTypeDeclarationRector::class);
    $services->set(\Rector\DowngradePhp80\Rector\NullsafeMethodCall\DowngradeNullsafeToTernaryOperatorRector::class);
    $services->set(\Rector\DowngradePhp80\Rector\StaticCall\DowngradePhpTokenRector::class);
    $services->set(\Rector\DowngradePhp80\Rector\Class_\DowngradePropertyPromotionRector::class);
    $services->set(\Rector\DowngradePhp80\Rector\ClassMethod\DowngradeStaticTypeDeclarationRector::class);
    $services->set(\Rector\DowngradePhp80\Rector\FuncCall\DowngradeStrContainsRector::class);
    $services->set(\Rector\DowngradePhp80\Rector\FuncCall\DowngradeStrEndsWithRector::class);
    $services->set(\Rector\DowngradePhp80\Rector\FuncCall\DowngradeStrStartsWithRector::class);
    $services->set(\Rector\DowngradePhp80\Rector\Expression\DowngradeThrowExprRector::class);
    $services->set(\Rector\DowngradePhp80\Rector\Property\DowngradeUnionTypeTypedPropertyRector::class);

    // Path to phpstan with extensions, that PHPSTan in Rector uses to determine types
    $parameters->set(Option::PHPSTAN_FOR_RECTOR_PATH, getcwd() . '/phpstan.neon');
};
