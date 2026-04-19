import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Movie, MovieSchema } from 'src/schemas/movies/movies.schema';

@Module({
  providers: [MoviesService],
  controllers: [MoviesController],
  imports: [
    MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }]),
  ],
})
export class MoviesModule {}
