import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { GamesService } from './games.service';
import { Games } from '../games';
import { Game } from '../game';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get()
  async index(): Promise<Games> {
    return this.gamesService.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: number): Promise<Game> {
    return this.gamesService.find(id);
  }

  @Post()
  create(@Body() game: Game) {
    this.gamesService.create(game);
  }

  @Put()
  update(@Body() game: Game) {
    this.gamesService.update(game);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    this.gamesService.delete(id);
  }
}
