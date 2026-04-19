import { Component, signal } from '@angular/core';
import { MoviesCard } from '../movies-card/movies-card';
import { Movie } from '../models/movie.model';
import { Api } from '../services/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies',
  imports: [MoviesCard, CommonModule],
  standalone: true,
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies {
  movies: Movie[] = [];

  constructor(private api: Api) {}

  ngOnInit() {
    this.api.getMovies().subscribe((res) => {
      this.movies = res.data;
    });
  }
}
