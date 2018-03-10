import { autoinject } from 'aurelia-framework';

import { LogManager, Logger} from './services/logger.service';

@autoinject
export class AppViewModel {

  private logger: Logger;

  constructor( ) {
    this.logger = LogManager.getLogger('AppViewModel');
    this.logger.debug('Initialized');
  }

}
