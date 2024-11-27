import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  produtoId: number | null = null;
  produto: any = null;

  produtos = [
    { id: 1, nome: 'Raquete Beach Tennis BAZOOKA 6.0', preco: 2559.0, imagem: '/assets/raka1.svg' },
    { id: 2, nome: 'Raquete Beach Tennis PRO 8.0', preco: 2759.0, imagem: '/assets/raka2.svg' },
    { id: 3, nome: 'Raquete Beach Tennis ELITE 10.0', preco: 2959.0, imagem: '/assets/raka3.svg' },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Pega o ID da URL
    if (id) {
      this.produtoId = id;
      this.produto = this.produtos.find(p => p.id === this.produtoId);
    }
  }
}
