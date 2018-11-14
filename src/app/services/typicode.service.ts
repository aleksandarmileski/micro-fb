import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../data/photo.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypicodeService {

  URL = 'http://jsonplaceholder.typicode.com';
  startPhoto = 0;
  limitPhoto = 10;

  constructor(private http: HttpClient) { }

  fetchPhotos(start = this.startPhoto, limit = this.limitPhoto): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.URL}/photos`, { params: { '_start': start.toString(), '_limit': limit.toString() } })
  }

  fetchPhoto(id): Observable<Photo> {
    return this.http.get<Photo>(`${this.URL}/photos/${id}`)
  }

  createPhoto(photo: Photo): Observable<Photo> {
    return this.http.post<Photo>(`${this.URL}/photos`, photo)
  }

  updatePhoto(photo: Photo): Observable<Photo> {
    return this.http.put<Photo>(`${this.URL}/photos/${photo.id}`, photo)
  }

  deletePhoto(id) {
    return this.http.delete(`${this.URL}/photos/${id}`, { observe: 'response' })
  }
}
