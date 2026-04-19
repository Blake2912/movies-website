import { Component, Input } from '@angular/core';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movies-card',
  imports: [],
  templateUrl: './movies-card.html',
  styleUrl: './movies-card.css',
})
export class MoviesCard {
  @Input() movie!: Movie; // receive from parent
  genres: string = '';
  languages: string = '';

  ngOnInit() {
    this.genres = this.movie.genres.join(',');
    this.languages = this.movie.languages.join(',');
  }

  ngOnUpdate() {
    this.genres = this.movie.genres.join(',');
    this.languages = this.movie.languages.join(',');
  }
}
