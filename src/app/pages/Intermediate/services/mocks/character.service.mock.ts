import { Character } from '@interfaces/character.interface';
import { Observable, of } from 'rxjs';

export class CharacterServiceMock {
  getCharacterList(page: string): Observable<Character[]> {
    return of([
      {
        id: 1,
        name: 'Rick Sanchez',
        status: 'Alive',
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      },
      {
        id: 2,
        name: 'Rick Sanchez',
        status: 'Alive',
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      },
    ]);
  }
}
