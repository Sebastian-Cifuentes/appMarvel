import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Character } from '../character/character.interface';
import { CharactersService } from '../character/characters.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() onresults: EventEmitter<Character[]> = new EventEmitter();


  constructor(
    private readonly characterService: CharactersService
  ) { }

  ngOnInit(): void {
  }

  search( event: any ) {
    const { value } = event.target;
    this.characterService.searchSortCharacters(value)
      .subscribe(resp => {
        this.onresults.emit(resp)
      })
  }

}
