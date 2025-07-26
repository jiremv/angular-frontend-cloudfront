import { Routes } from '@angular/router';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';
import { FormularioProductoComponent } from './pages/formulario-producto/formulario-producto.component';

export const routes: Routes = [
  { path: '', component: ListaProductosComponent },
  { path: 'nuevo', component: FormularioProductoComponent },
  { path: 'editar/:id', component: FormularioProductoComponent },
  { path: '**', redirectTo: '' }
];