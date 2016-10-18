import { Injectable } from '@angular/core';
import {Hero} from "./hero";
import {HEROES} from "./mock-heroes";

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHero(id:Number): Promise<Hero> {
        return this.getHeroes().then((heroes) => {
            return Promise.resolve(heroes.find(hero => hero.id === id))
        })
    }
}
