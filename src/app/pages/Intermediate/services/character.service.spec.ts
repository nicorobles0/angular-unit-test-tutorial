import { TestBed } from '@angular/core/testing';
import { CharacterService } from './character.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Character, CharactersList } from '@interfaces/character.interface';

describe('CharacterService', () => {
  // Variable de del tipo de nuetro servicio
  let service: CharacterService;
  // Instacia controlador http (importar el de pruebas)
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // Importar el módulo de pruebas
      imports: [HttpClientTestingModule],
    });
    // Iyectamos el servicio en nuestra variable
    service = TestBed.inject(CharacterService);
    // Inyectamos el controlador en nuesta variable http mock
    httpMock = TestBed.inject(HttpTestingController);
  });
  // Verificamos despues de cada prueba si es que queda alguna petición abierta para limpiarla
  // Importante hacer esto cuando se testean metodos que hacen llamados a enlaces externos.
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
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        },
        {
          id: 1,
          name: 'Rick Sanchez',
          status: 'Alive',
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
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
    request.flush(request);
    // Comprobamos que el llamado sea del tipo indicado
    expect(request.request.method).toBe('GET');
  });

  // xit y xdescribe omiten las funciones al ejecutar las pruebas.
  xit('should be get 404 found', (done: DoneFn) => {
    // service.getCharacterList('charactera').subscribe({
    //   error({ status }) {
    //     expect(status === 404).toBeTrue();
    //     done();
    //   },
    // });
  });
});
