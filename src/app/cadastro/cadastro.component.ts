import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  apiUrl = 'http://localhost:3000/usuarios'; 

  async onSubmit(form: any) {
    if (form.valid) {
      const userData = {
        nome: form.value.nome,
        email: form.value.email,
        senha: form.value.senha,
      };

      try {
        const response = await fetch(this.apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });

        if (!response.ok) {
          throw new Error('Erro ao cadastrar usuário');
        }

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
        
        const response = await fetch(`${this.apiUrl}?email=${form.value.email}`);
        const users = await response.json();

        
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
