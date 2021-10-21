import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Comic } from '../comics/comic.interface';

@Component({
  selector: 'app-card-favorite',
  templateUrl: './card-favorite.component.html',
  styleUrls: ['./card-favorite.component.css']
})
export class CardFavoriteComponent implements OnInit {

  @Input() comic!: Comic;
  @Output() ondelete: EventEmitter<number> = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
    console.log(this.comic)
  }

  delete(id: number) {
    this.ondelete.emit(id);
  }

}
