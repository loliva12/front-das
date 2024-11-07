import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  standalone: true, // Configura como standalone
  imports: [CommonModule], // Importa CommonModule si lo necesitas
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  productTypes: string[] = ['Lácteos', 'Panadería', 'Huevos']; // Categorías

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.filteredProducts = data; 
    });
  }

  filterByType(type: string): void {
    this.filteredProducts = this.products.filter(product => product.type === type);
  }

  clearFilter(): void {
    this.filteredProducts = this.products;
  }
}