import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../character/character.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ComicsService } from '../comics/comics.service';
import { Comic } from '../comics/comic.interface';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.css']
})
export class CardCharacterComponent implements OnInit {

  @Input() character!: Character;
  comic!: Comic;

  constructor(
    private readonly comicService: ComicsService,
    private readonly modal: NgbModal
  ) { }

  ngOnInit(): void {
  }

  openModal(content: any) {
    this.modal.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' });
  }

  getComic( url: string, content: any ) {
    this.comicService.getComicSingle(url)
      .subscribe(res => {
        this.comic = res[0];
        console.log(this.comic)
        this.openModal(content);
      })
  }

}
