import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() pags: any[] = [];
  @Output() onchangepag: EventEmitter<number> = new EventEmitter();

  paginatorsCopy: any[] = [];
  paginators: number[] = [];
  valuePag: number = 0;
  pagCurrent: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.setPaginators();
  }

  change(value: number) {
    this.pagCurrent = value;
    this.valuePag = (value*10)-10;
    this.onchangepag.emit(this.valuePag);
    if ( value > (this.paginatorsCopy.length - 4) ) {
      return;
    }
    this.paginators = this.paginatorsCopy.slice();
    this.paginators = this.paginators.splice(value-1, 5);
  }

  setPaginators() {
    let cont = 1;
    for ( const p of this.pags ) {
        this.paginators.push(cont);
        cont ++;
    }
    this.paginatorsCopy = this.paginators.slice();
    this.paginators = this.paginators.splice(0, 5);
  }

  chnagePag( value: number, type: string ) {
    const pagFirst = this.paginators[0];

    if ( type === 'previous' && pagFirst-1 !== 0) {
      console.log(pagFirst, this.pagCurrent)
      if ( pagFirst === this.pagCurrent ) {
        this.paginators = this.paginatorsCopy.slice();
        this.paginators = this.paginators.splice(pagFirst-2, 5);
      }
      this.valuePag += value;
      this.onchangepag.emit(this.valuePag);
      this.pagCurrent+= -1;
    } else if ( type === 'next' && pagFirst+1 !== 0 ) {
      if ( pagFirst > (this.paginatorsCopy.length - 5)) {
        return;
      }
      this.paginators = this.paginatorsCopy.slice();
      this.paginators = this.paginators.splice(pagFirst, 5);
      this.valuePag += value;
      this.onchangepag.emit(this.valuePag);
    }
  }

}
