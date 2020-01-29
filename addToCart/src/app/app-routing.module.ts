import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductlistComponent } from './views/productlist/productlist.component';
import { AddtocartComponent } from './views/addtocart/addtocart.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'products', pathMatch: 'full'},
    {
      path: 'products', component: ProductlistComponent
    },
    {
      path: 'cart', component: AddtocartComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
