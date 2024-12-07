<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

use craft\config\GeneralConfig;
use craft\helpers\App;

return GeneralConfig::create()
    // The URI segment Craft should look for when determining if the current request should route to the control panel rather than the front-end website.
    ->cpTrigger(App::env('CP_TRIGGER') ?: 'admin')
    
    // The default language the control panel should use for users who haven’t set a preferred language yet.
    ->defaultCpLanguage('en-GB')
    
    // The default amount of time tokens can be used before expiring.
    ->defaultTokenDuration('P1W')
    
    // The default day new users should have set as their Week Start Day.
    ->defaultWeekStartDay(1)

    // Whether the GraphQL API should be enabled.
    ->enableGql(false)
    
    // Whether generated URLs should omit index.php (e.g. http://my-project.tld/path instead of http://my-project.tld/index.php/path)
    ->omitScriptNameInUrls()
    
    // The amount of time content preview tokens can be used before expiring.
    ->previewTokenDuration('P1W')
    
    // Whether Single section entries should be preloaded for Twig templates.
    ->preloadSingles()
    
    // Whether the system should run in Dev Mode https://craftcms.com/support/dev-mode
    ->devMode(App::env('DEV_MODE') ?? false)

    // Whether admins should be allowed to make administrative changes to the system.
    ->allowAdminChanges(App::env('ALLOW_ADMIN_CHANGES') ?? false)
    
    // Whether front end requests should respond with X-Robots-Tag: none HTTP headers, indicating that pages should not be indexed, and links on the page should not be followed, by web crawlers.
    ->disallowRobots(App::env('DISALLOW_ROBOTS') ?? false)
    
    // Whether Craft should allow system and plugin updates in the control panel, and plugin installation from the Plugin Store. This setting will automatically be disabled if allowAdminChanges is disabled.
    ->allowUpdates(App::env('ALLOW_UPDATES') ?? false)
    
    // When true, Craft will always return a successful response in the “forgot password” flow, making it difficult to enumerate users.
    ->preventUserEnumeration()

    // enable fuzzy search
    ->defaultSearchTermOptions([
        'subLeft' => true,
        'subRight' => true,
    ])
    
    // Any custom Yii aliases(https://www.yiiframework.com/doc/guide/2.0/en/concept-aliases) that should be defined for every request.
    ->aliases([
        '@web' => rtrim(APP::env('PRIMARY_SITE_URL'), '/'),
        '@webroot' => dirname(__DIR__) . '/web',
    ])
;