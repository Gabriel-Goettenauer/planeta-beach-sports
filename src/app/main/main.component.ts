import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule], 
})
export class MainComponent {
  produtos = [
    { id: 1, nome: 'Raquete Beach Tennis BAZOOKA 6.0', preco: 2559.00, imagem: '/assets/raka1.svg' },
    { id: 2, nome: 'Raquete Beach Tennis PRO X', preco: 2000.00, imagem: '/assets/raka2.svg' },
    { id: 3, nome: 'Raquete Beach Tennis SUPERLITE', preco: 1500.00, imagem: '/assets/raka4.svg' },
  ];

  constructor(private router: Router) {}

  verMais(categoria: string): void {
    this.router.navigate(['/produtos'], { queryParams: { categoria } });
  }
}