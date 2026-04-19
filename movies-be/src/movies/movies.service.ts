import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Movie, MovieDocument } from 'src/schemas/movies/movies.schema';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel(Movie.name)
    private movieModel: Model<MovieDocument>,
  ) {}

  async findAllMovies(page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;

    const [movies, total] = await Promise.all([
      this.movieModel
        .find(
          {},
          {
            title: 1,
            genres: 1,
            poster: 1,
            languages: 1,
          },
        )
        .skip(skip)
        .limit(limit)
        .lean(),
      this.movieModel.countDocuments(),
    ]);

    return {
      data: movies,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }
}
