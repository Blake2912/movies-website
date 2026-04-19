import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getMovies(pageNumber: number = 1, limit: number = 10): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/movies?page=${pageNumber}&limit=${limit}`);
  }
}
