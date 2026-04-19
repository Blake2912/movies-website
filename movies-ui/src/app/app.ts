import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Movies } from './movies/movies';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Movies, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('movies-ui');
}
