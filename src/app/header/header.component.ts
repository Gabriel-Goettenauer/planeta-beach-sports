import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
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
