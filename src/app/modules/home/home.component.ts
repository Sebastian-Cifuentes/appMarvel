import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../components/character/characters.service';
import { Character } from '../../components/character/character.interface';
import { Comic } from '../../components/comics/comic.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  characters: Character[] =[];
  copyCharacters: Character[] =[];
  favorites: Comic[] = [];
  cutCharacters: any[] = [];

  constructor(
    private readonly characterService: CharactersService
  ) { }

  ngOnInit(): void {
    this.getCharacters();
    this.favorites = JSON.parse(localStorage.getItem('favorites')!);
  }

  getCharacters() {
    this.characterService.getCharacters()
      .subscribe(results => {
        this.copyCharacters = results;
        this.characters = results;
        this.characters = this.characters.slice(0, 10);
        this.cutCharacter();
      })
  }

  resultsFound(results: Character[]) {
    this.copyCharacters = results;
    this.characters = results;
    this.characters = this.characters.slice(0, 10);
    this.cutCharacter();
  }

  addFavorite(comic: Comic) {
    const isComic = this.favorites.find(c => c.id === comic.id);
    if (!isComic) {
      this.favorites.push(comic);
    };
    localStorage.setItem('favorites', JSON.stringify(this.favorites))
  }

  deleteFavorite(id: number) {
    this.favorites = this.favorites.filter(c => c.id !== id);
    localStorage.setItem('favorites', JSON.stringify(this.favorites))
  }

  cutCharacter() {
    this.cutCharacters = [];
    let characters = this.copyCharacters.slice();
    for ( let i = 0; characters.length > 0; i++ ) {
      const value = characters.splice(0, 10);
      this.cutCharacters.push(value);
    }
  }

  setCharacters(value: number) {
    this.characters = this.copyCharacters.slice();
    this.characters = this.characters.splice(value, 10);
  }

}
