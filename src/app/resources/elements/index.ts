import { PLATFORM } from 'aurelia-framework';

export function configure(aurelia): void {
  aurelia
		.globalResources([
      PLATFORM.moduleName('./calendar/calendar.element'),
      PLATFORM.moduleName('./calendar-cell/calendar-cell.element')
    ]);
}
