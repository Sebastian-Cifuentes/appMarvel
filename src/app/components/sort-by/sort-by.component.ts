import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CharactersService } from '../character/characters.service';
import { Character } from '../character/character.interface';

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.css']
})
export class SortByComponent implements OnInit {

  @Output() onresultssort: EventEmitter<Character[]> = new EventEmitter()

  constructor(
    private readonly charactersService: CharactersService
  ) { }

  ngOnInit(): void {
  }

  change( event: any ) {
    const { value } = event.target;
    this.charactersService.searchSortCharacters('', value)
      .subscribe(res => this.onresultssort.emit(res))
  }

}
