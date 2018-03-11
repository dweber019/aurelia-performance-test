/// <reference types="aurelia-loader-webpack/src/webpack-hot-interface"/>
/**
 * Import the main sass file for all the styles
 */
import '../scss/main.scss';

/**
 * Aurelia imports
 */
import { Aurelia, PLATFORM } from 'aurelia-framework';

import * as Bluebird from 'bluebird';
// remove out if you don't want a Promise polyfill (remove also from webpack.config.js)
Bluebird.config({ warnings: { wForgottenReturn: false } });

/**
 * Aurelia configruation
 */
export async function configure(aurelia: Aurelia): Promise<void> {
  aurelia.use
    .defaultBindingLanguage()
    .defaultResources()
    .feature(PLATFORM.moduleName('resources/elements/index'));

  await aurelia.start();
  await aurelia.setRoot(PLATFORM.moduleName('app.vm'));
}
