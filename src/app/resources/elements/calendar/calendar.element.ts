import { autoinject } from 'aurelia-framework';
import { RegistryService } from './../../../services/registry.service';

import _ from 'lodash';

@autoinject
export class CalendarCustomElement {
  public hours!: any;
  public days!: any;
  public isLoaded: Boolean = false;

  constructor(private registryService: RegistryService) { }

  public attached(): void {
    this.hours = _.range(24);
    this.days = _.range(1, 32).map((day) => ('Oct ' + day));
    this.isLoaded = false;
  }

  public load(): void {
    this.isLoaded = true;
  }

  public searchAll(): void {
    this.registryService.searchAllCells();
  }

  public dayHeaderClicked(): void {
    alert('dayHeaderClicked()');
  }

}
