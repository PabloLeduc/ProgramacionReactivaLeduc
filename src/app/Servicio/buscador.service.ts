import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, pipe } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BuscadorService {

  constructor(private http: HttpClient) { }
BuscaPeticion(BuscaTexto: string): Observable<any>{
return this.http.get('https://api.jikan.moe/v4/anime', {
  params: {
    q: BuscaTexto
  }
}).pipe(
map((value: any) => value.data)
)
}

}
