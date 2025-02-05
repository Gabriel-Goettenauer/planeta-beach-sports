import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importa o RouterModule

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule], // Adiciona o RouterModule
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  nome = 'Planeta Beach';

  exibirMensagem() {
    alert('Bem-vindo ao Planeta Beach!');
  }

  entrar() {
    alert('Bem vindo a sua conta');
  }
}
