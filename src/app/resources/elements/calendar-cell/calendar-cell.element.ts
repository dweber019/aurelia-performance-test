import { bindable, bindingMode, autoinject } from 'aurelia-framework';
import { RegistryService } from './../../../services/registry.service';

function randomMilliseconds(): number {
  return Math.floor(Math.random() * 500);
}

@autoinject
export class CalendarCellCustomElement {

  @bindable({ defaultBindingMode: bindingMode.oneWay }) public hour!: number;
  @bindable({ defaultBindingMode: bindingMode.oneWay }) public day!: number;

  public status: any;

  constructor(private registryService: RegistryService) {
    this.status = {
      isSearching: false,
      searchResults: {
        options: undefined
      }
    };

    this.registryService.addCell(this);
  }

  public get classes(): string {
    let tmp = this.status.isSearching ? 'searching ' : '';
    if (this.status.searchResults.options > 3) {
      return `${tmp}goodresults`;
    } else if (this.status.searchResults.options >= 1 && this.status.searchResults.options <= 3) {
      return `${tmp}weakresults`;
    }
    return `${tmp}badresults`;
  }

  public cellClicked(): void {
    let alreadySearching = this.status.isSearching;
    this.status.searchResults.options = undefined;
    this.status.isSearching = !alreadySearching;

    if (!alreadySearching) {
      // Simulate an AJAX request:
      this.status.isSearching = true;

      setTimeout(() => {
        this.status.isSearching = false;
        this.status.searchResults.options = Math.floor(Math.random() * 5);
      }, randomMilliseconds());
    }
  }

  public get showTime(): boolean {
    return !this.status.isSearching && this.status.searchResults.options === undefined;
  }

  public get showSearchResults(): boolean {
    return !this.status.isSearching && this.status.searchResults.options !== undefined;
  }

  public get isSearching(): boolean {
    return this.status.isSearching;
  }

}
