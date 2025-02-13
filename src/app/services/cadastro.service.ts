import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private apiUrl = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {}

  
  cadastrarUsuario(usuario: any): Observable<any> {
    return this.http.post(this.apiUrl, usuario); 
  }
}
