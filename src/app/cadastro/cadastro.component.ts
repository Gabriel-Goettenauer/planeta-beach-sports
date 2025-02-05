import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule], 
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  apiUrl = 'http://localhost:3000/usuarios'; 

  constructor(private http: HttpClient) {}

  async onSubmit(form: any) {
    if (form.valid) {
      const userData = {
        nome: form.value.nome,
        email: form.value.email,
        senha: form.value.senha,
      };

      try {
        // Convertendo Observable para Promise
        await firstValueFrom(this.http.post(this.apiUrl, userData));

        alert('Usuário cadastrado com sucesso!!');
        form.reset();
      } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao cadastrar usuário!');
      }
    }
  }

  async onLogin(form: any) {
    if (form.valid) {
      try {
        // Convertendo Observable para Promise
        const users: any = await firstValueFrom(this.http.get(`${this.apiUrl}?email=${form.value.email}`));

        if (users.length > 0 && users[0].senha === form.value.senha) {
          alert('Login realizado com sucesso!');
        } else {
          alert('E-mail ou senha inválidos.');
        }
      } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao realizar login.');
      }

      form.reset();
    }
  }
}
