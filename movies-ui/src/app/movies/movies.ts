import { Component, signal } from '@angular/core';
import { MoviesCard } from '../movies-card/movies-card';

@Component({
  selector: 'app-movies',
  imports: [MoviesCard],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies {}
