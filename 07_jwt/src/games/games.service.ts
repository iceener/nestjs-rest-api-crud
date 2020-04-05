import { Injectable } from '@nestjs/common';
import { Game } from '../game';
import { Games } from '../games';

@Injectable()
export class GamesService {
  private readonly games: Games = {
    1: {
      id: 1,
      title: 'Witcher 3',
      description: 'Gra action RPG, stanowiąca trzecią część przygód Geralta z Rivii. Podobnie jak we wcześniejszych odsłonach cyklu, Wiedźmin 3: Dziki Gon bazuje na motywach twórczości literackiej Andrzeja Sapkowskiego, jednak nie jest bezpośrednią adaptacją żadnej z jego książek.',
      cover: 'https://cdn.gracza.pl/galeria/gry13/grupy/544003500.jpg',
    },
    2: {
      id: 2,
      title: 'Overwatch',
      description: 'Opracowana przez studio Blizzard sieciowa strzelanina FPS, stanowiąca pierwszą produkcję tego gatunku w dorobku twórców tak kultowych serii, jak Diablo, Warcraft czy Starcraft.',
      cover: 'https://cdn.gracza.pl/galeria/gry13/grupy/16118.jpg',
    },
    3: {
      id: 3,
      title: 'DiRT Rally 2.0',
      description: 'DiRT Rally 2.0 to kolejna odsłona bestsellerowego cyklu wyścigowego, umożliwiającego branie udziału w rajdach samochodowych. Gra została przygotowana przez przez brytyjskie studio Codemasters, rozwijające serię od momentu jej powstania.',
      cover: 'https://cdn.gracza.pl/galeria/gry13/grupy/157976125.jpg',
    },
  };

  findAll(): Games {
    return this.games;
  }

  create(newGame: Game) {
    const id = Date.now();
    this.games[id] = { ...newGame, id };
  }

  find(id: number): Game {
    const game: Game = this.games[id];
    if (!game) throw new Error('No games found.');
    
    return game;
  }

  update(game: Game) {
    if (!this.games[game.id]) throw new Error('No game found.');
    
    this.games[game.id] = game;
  }

  delete(id: number) {
    const game: Game = this.games[id];
    if (!game) throw new Error('No game found.');

    delete this.games[id];
  }
}
