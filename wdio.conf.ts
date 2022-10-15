import 'expect-webdriverio';
import { ConsoleReporter } from '@serenity-js/console-reporter';
import { ArtifactArchiver, StreamReporter } from '@serenity-js/core';
import { SerenityBDDReporter } from '@serenity-js/serenity-bdd';
import { Photographer, TakePhotosBeforeAndAfterInteractions, TakePhotosOfFailures, Wait, WebdriverIOConfig } from '@serenity-js/webdriverio';
import * as fs from 'fs';

import { Actors } from '././test';

export const config: WebdriverIOConfig = {
    logLevel: 'warn',
    framework: '@serenity-js/webdriverio',
    serenity: {
        actors: new Actors(),
        runner: 'cucumber',
        crew: [
            ArtifactArchiver.storingArtifactsAt(process.cwd(), 'target/site/serenity'),
            new StreamReporter(fs.createWriteStream('events.ndjson')),
            ConsoleReporter.forDarkTerminals(),
            new SerenityBDDReporter(),
            Photographer.whoWill(TakePhotosOfFailures)
        ]
    },
    specs: [
        './features/**/form_authentication.feature'
    ],
    cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: [
            './features/support/*.ts',
            './features/step-definitions/*.ts'
        ],
        // <string[]> (type[:path]) specify native Cucumber.js output format, if needed. Optionally supply PATH to redirect formatter output (repeatable)
        format: [ ],
        // <string> (name) specify the profile to use
        profile: '',
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string[] | string> (expression) only execute the features or scenarios with tags matching the expression
        //tags: ["@testApi"],
        tags: [
             'not @ignore' 
            //'@FE-UWS'
        ],
        //tags: ['@testFE-UWS'],
        // <number> timeout for step definitions
        timeout: 20000,
        // <boolean> Fail if there are any undefined or pending steps.
    },
    capabilities: [{
        browserName: 'chrome',
        acceptInsecureCerts: true,
        maxInstances:1,
        'goog:chromeOptions': {
            args: [
                //'--headless',
                '--disable-infobars',
                '--no-sandbox',
                '--disable-gpu',
                //'--start-maximized'
                '--window-size=1900,1024',
            ]  // run in headless mode on the CI server,
        }
    }],

    //baseUrl: 'https://test-workforce.furycloud.io/login',
    baseUrl: 'https://the-internet.herokuapp.com/',

    // Default timeout for all waitFor* commands.
    //waitforTimeout: 60000,
};
