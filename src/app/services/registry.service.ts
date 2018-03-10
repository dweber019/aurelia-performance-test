export class RegistryService {

  public cells: any;

  constructor() {
    this.cells = [];
  }

  public addCell(cell): void {
    this.cells.push(cell);
  }

  public searchAllCells(): void {
    for (let i = 0; i < this.cells.length; i++) {
      this.cells[i].cellClicked();
    }
  }

}
