import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto.model';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule,  MatSelectModule,
  MatFormFieldModule],
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent implements OnInit {
  productos: Producto[] = [];
  displayedColumns: string[] = ['productoId', 'nombre', 'categoria', 'precio', 'fechaCreacion', 'acciones'];

  constructor(private service: ProductoService, private router: Router) {}

  ngOnInit(): void {
    this.service.listar().subscribe(data => this.productos = data);
  }

  editar(id: string | number | undefined): void {
    if (id !== undefined && id !== null) {
      this.router.navigate(['/editar', id]);
    } else {
      console.error('ID no válido para editar:', id);
    }
  }

  eliminar(id: string | number | undefined): void {
    if (id !== undefined && id !== null) {
      const confirmar = window.confirm(`¿Realmente desea eliminar el producto: ${id} ?`);
      if (confirmar) {
        this.service.eliminar(String(id)).subscribe(() => {
          this.productos = this.productos.filter(p => p.productoId !== id);
        });
      }
    } else {
      console.error('ID no válido para eliminar:', id);
    }
  }

  nuevo(): void {
    this.router.navigate(['/nuevo']);
  }

  abrirRepositorio(url: string): void {
    window.open(url, '_blank');
  }

}