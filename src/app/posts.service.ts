import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {}

  getPost(): Observable<any> {
    return this.http.get('http://localhost:3000/cursos');
  }

  getPostById(id: number): Observable<any> {
    return this.http.get('http://localhost:3000/cursos/'+id);
  }
}
