import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const heroes = [
      {id : 11, name: 'Mr.Nice'},
      {id : 12, name: 'Naruto'},
      {id : 13, name: 'Sasuke'},
      {id : 14, name: 'Sakura'},
      {id : 15, name: 'Jiraya'},
      {id : 16, name: 'Madara'},
      {id : 17, name: 'Sunade'},
      {id : 18, name: 'Earth'},
      {id : 19, name: 'Jupitar'},
      {id : 20, name: 'Saturn'}
    ];
    return {heroes};
  }

  genId(heroes : Hero[]) : number {
    return heroes.length > 0 ? Math.max (...heroes.map(hero => hero.id))+1 : 11;
  }
}
