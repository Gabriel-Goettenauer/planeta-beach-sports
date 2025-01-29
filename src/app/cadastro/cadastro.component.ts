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
  onSubmit(form: any) {
    if (form.valid) {
      const userData = {
        nome: form.value.nome,
        email: form.value.email,
        senha: form.value.senha,
      };
      localStorage.setItem('user', JSON.stringify(userData));
      alert('Usuário cadastrado com sucesso!');
      form.reset();
    }
  }

  onLogin(form: any) {
    if (form.valid) {
      alert('Login realizado com sucesso!');
      form.reset();
    }
  }
}
