import { TestBed } from '@angular/core/testing';
import { CharacterService } from './character.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Character, CharactersList } from '@interfaces/character.interface';

describe('CharacterService', () => {
  let service: CharacterService;
  // Instacia controlador http pero de pruebas
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CharacterService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  // Verificamos despues de cada prueba si es que queda alguna petición abierta para limpiarla
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be return list by results', () => {
    // Mock Respuesta tal cual la da el servidor
    const Resp: CharactersList = {
      info: {
        count: 826,
        pages: 42,
        next: 'https://rickandmortyapi.com/api/character?page=2',
        prev: null,
      },
      results: [
        {
          id: 1,
          name: 'Rick Sanchez',
          status: 'Alive',
          species: 'Human',
          type: '',
          gender: 'Male',
          origin: {
            name: 'Earth (C-137)',
            url: 'https://rickandmortyapi.com/api/location/1',
          },
          location: {
            name: 'Citadel of Ricks',
            url: 'https://rickandmortyapi.com/api/location/3',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          episode: ['https://rickandmortyapi.com/api/episode/1'],
          url: 'https://rickandmortyapi.com/api/character/1',
          created: '2017-11-04T18:48:46.250Z',
        },
        {
          id: 1,
          name: 'Rick Sanchez',
          status: 'Alive',
          species: 'Human',
          type: '',
          gender: 'Male',
          origin: {
            name: 'Earth (C-137)',
            url: 'https://rickandmortyapi.com/api/location/1',
          },
          location: {
            name: 'Citadel of Ricks',
            url: 'https://rickandmortyapi.com/api/location/3',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          episode: ['https://rickandmortyapi.com/api/episode/1'],
          url: 'https://rickandmortyapi.com/api/character/1',
          created: '2017-11-04T18:48:46.250Z',
        },
      ],
    };
    // Mock de respuesta esperada
    const expecResp: Character[] = Resp.results;
    // Subscripción al método get
    service.getCharacterList('character').subscribe({
      next(results) {
        // evaluación de resultados
        expect(results).toHaveSize(2);
        expect(results).toEqual(expecResp);
      },
    });
    // Creamos un espera a que se haga un llamado sobre una url específica
    const request = httpMock.expectOne(
      'https://rickandmortyapi.com/api/character'
    );
    expect(request.request.method).toBe('GET');
    // Inyectamos respuesta al llamar una request específica
    request.flush(Resp);
  });

  it('should be call getCharacterList By GET method ', () => {
    // Nos suscribimos al servicio
    service.getCharacterList('character').subscribe();
    // Creamos un escuchador en la url específica de nuestro servicio
    const request = httpMock.expectOne(
      'https://rickandmortyapi.com/api/character'
    );
    // Comprobamos que el llamado sea del tipo indicado
    expect(request.request.method).toBe('GET');
  });

  // xit y xdescribe omiten las funciones al ejecutar las pruebas.
  xit('should be get 404 found', (done: DoneFn) => {
    service.getCharacterList('charactera').subscribe({
      error({ status }) {
        expect(status === 404).toBeTrue();
        done();
      },
    });
  });
});
