import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../components/character/characters.service';
import { Character } from '../../components/character/character.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  characters: Character[] =[];

  constructor(
    private readonly characterService: CharactersService
  ) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.characterService.getCharacters()
      .subscribe(results => {
        this.characters = results;
      })
  }

  resultsFound(results: Character[]) {
    this.characters = results;
  }

}
