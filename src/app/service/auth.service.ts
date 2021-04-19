import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoginDto } from '../dto/loginDto';
import { TrazaDto } from '../dto/trazaDto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = "https://localhost:44316/api/";
  constructor(private http: HttpClient) { }

  /** GET heroes from the server */
/*getHeroes(): Observable<Hero[]> {
  return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
}*/

/*getNoticias(): Observable<any> {
  return this.http.get<any>(this.baseUrl)
    .pipe(
      tap(_ => console.log('Recuperar noticias')),
      catchError(this.handleError<any>('getNoticias', []))
    );
}*/

getNoticias(): Observable<any> {
  return this.http.get<any>(this.baseUrl + "Noticia")
    .pipe(
      tap(_ => console.log('Recuperar noticias')),
      catchError(this.handleError<any>('getNoticias', []))
    );
}

getTiempos(): Observable<any> {
  return this.http.get<any>(this.baseUrl + "Tiempo")
    .pipe(
      tap(_ => console.log('Recuperar tiempos')),
      catchError(this.handleError<any>('getTiempos', []))
    );
}

login(loginDto: LoginDto): Observable<any> {
  return this.http.post<LoginDto>(this.baseUrl + "AuthManagement/Login", loginDto)
  .pipe(
    tap((data: LoginDto) => console.log('login')),
    catchError(this.handleError<LoginDto>('login'))
  );
}

postTraza(trazaDto: TrazaDto): Observable<any> {
  return this.http.post<TrazaDto>(this.baseUrl + "Traza", trazaDto)
  .pipe(
    tap((data: TrazaDto) => console.log('traza')),
    catchError(this.handleError<TrazaDto>('postTraza'))
  );
}

getTrazas(): Observable<any> {
  return this.http.get<any>(this.baseUrl + "Traza")
    .pipe(
      tap(_ => console.log('Recuperar trazas')),
      catchError(this.handleError<any>('getTrazas', []))
    );
}

private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

 
}
