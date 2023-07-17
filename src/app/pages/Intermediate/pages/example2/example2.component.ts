import { Component } from '@angular/core';
import { Character } from '../../../../shared/interfaces/character.interface';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css'],
})
export class Example2Component {
  character: Character = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  };
  characterId?: number;

  setcharacterID(characterID: number) {
    this.characterId = characterID;
  }
}
