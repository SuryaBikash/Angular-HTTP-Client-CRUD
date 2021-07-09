import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Album } from './album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  allAlbumUrl = "http://localhost:8080/album/viewAllAlbum";
  createAlbumUrl="http://localhost:8080/album/createAlbum";
  updateUrl="http://localhost:8080/album/updateAlbum";
  deleteUrl="http://localhost:8080/album/deleteAlbum";

  constructor(private http:HttpClient) { }

  getAlbums() : Observable<Album[]>{
    return this.http.get<Album[]>(this.allAlbumUrl)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
  addAlbum(albm:Album) : Observable<Album>{
    return this.http.post<Album>(this.createAlbumUrl,albm)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
  updateAlbum(albm:Album){
    const url='${this.updateUrl}/${id}';
    console.log("bjj",url);
    // return this.http.put<Album>(url,albm)
    // .pipe(
    //   retry(2),
    //   catchError(this.handleError)
    // );
  }
  deleteAlbum(id:number):Observable<{}>{
    const url='${this.deleteUrl}/${id}';
    return this.http.delete<Album>(url)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
  handleError(handleError: HttpErrorResponse){
    return throwError('Something going wrong...Please try again');
  }
}


