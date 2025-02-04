import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private apiUrl = 'http://localhost:3000/usuarios'; // URL do JSON Server

  constructor(private http: HttpClient) {}

  // Função para cadastrar o usuário
  cadastrarUsuario(usuario: any): Observable<any> {
    return this.http.post(this.apiUrl, usuario);  // Envia o usuário para o servidor
  }
}
