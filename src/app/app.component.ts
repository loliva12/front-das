import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true, // Configura también AppComponent como standalone
  imports: [ProductListComponent], // Importa el componente
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'GRILLAPRODUCTOS';
}
