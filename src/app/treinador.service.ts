import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Treinador } from '@angular/cli/bin/angular-pokemon/src/treinador';
import { Observable } from '@angular/cli/bin/angular-pokemon/node_modules/rxjs';



@Injectable({
  providedIn: 'root'
})
export class TreinadorService {

  private treinadorUrl = 'http://localhost:8080/train';  

  constructor(
    private http: HttpClient  ) { }

getTreinador (): Observable<Treinador[]> {
  return this.http.get<Treinador[]>(this.treinadorUrl)
  }

PostTreinador(treinador : Treinador): Observable<Treinador>{
  return this.http.post<Treinador>('http://localhost:8080/train',treinador)
}
deleteTreinador(id : number){
  return this.http.delete<Treinador>('http://localhost:8080/train/delete/' + id)
}

updateTreinador(id: number, treinador: Treinador): Observable<void>{
  return this.http.put<void>('http://localhost:8080/train/atualiza' + id,treinador)

}

}
