import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comic } from '../../components/comics/comic.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() favorites: Comic[] = [];
  @Output() ondelete: EventEmitter<number> = new EventEmitter(); 


  constructor() { }

  ngOnInit(): void {
  }

  delete(id: number) {
    this.ondelete.emit(id)
  }

}
