import { Controller, Get, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  @Get()
  findAll(@Query('page') page: string, @Query('limit') limit: string) {
    return this.moviesService.findAllMovies(Number(page), Number(limit));
  }
}
