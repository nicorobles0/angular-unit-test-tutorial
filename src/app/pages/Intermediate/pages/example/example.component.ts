import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Character } from '@interfaces/character.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  characters: Character[] = [];
  subscrition?: Subscription;
  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.getCharacterList('character');
  }

  getCharacterList(page: string) {
    this.subscrition = this.characterService.getCharacterList(page).subscribe({
      next: (results ) => {
        this.characters = results;
      }
    });
  }
}
