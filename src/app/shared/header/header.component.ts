import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Character } from '../../components/character/character.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() onresults: EventEmitter<Character[]> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  search(results: Character[]) {
    this.onresults.emit(results);
  }

}
