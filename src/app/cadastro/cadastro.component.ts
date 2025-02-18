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
        await firstValueFrom(this.http.post(this.apiUrl, userData));
        alert('Usuário cadastrado com sucesso!');
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

  
  async onUpdate(form: any) {
    if (form.valid) {
      const userId = form.value.id;
      const updatedData = {
        nome: form.value.nome,
        email: form.value.email,
        senha: form.value.senha
      };

      try {
        await firstValueFrom(this.http.put(`${this.apiUrl}/${userId}`, updatedData));
        alert('Usuário atualizado com sucesso!');
        form.reset();
      } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao atualizar usuário!');
      }
    }
  }

  
  async onUpdatePassword(userId: number, novaSenha: string) {
    try {
      await firstValueFrom(this.http.patch(`${this.apiUrl}/${userId}`, { senha: novaSenha }));
      alert('Senha atualizada com sucesso!');
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao atualizar senha!');
    }
  }

  
  async onDelete(form: any) {
    if (form.valid) {
      const userId = form.value.id;

      try {
        await firstValueFrom(this.http.delete(`${this.apiUrl}/${userId}`));
        alert('Usuário excluído com sucesso!');
        form.reset();
      } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao excluir usuário!');
      }
    }
  }
}
