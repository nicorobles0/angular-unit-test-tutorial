import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Character, CharactersList } from '@interfaces/character.interface';
@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }
  /**
   * 
   * @returns Observable with characters list
   */
  getCharacterList( page: string ): Observable<Character[]>{
    return this.http.get<CharactersList>(`https://rickandmortyapi.com/api/${page}`).pipe(
      //tap( console.log ),
      map( ( resp: CharactersList ): Character[] =>  resp.results ));
  }
  
}
