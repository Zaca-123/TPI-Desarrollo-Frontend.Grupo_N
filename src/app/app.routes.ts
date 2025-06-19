import { Routes } from '@angular/router';
import { TemplateComponent } from './pages/template/template.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdmRestaurant } from './pages/adm-restaurant/adm-restaurant';
import { AdmMenu } from './pages/adm-menu/adm-menu';
import { AdmProduct } from './pages/adm-product/adm-product';
import { Restaurants } from './pages/restaurants/restaurants';
import { Products } from './pages/products/products';
import { Menus } from './pages/menus/menus';
import { EditProduct } from './pages/edit-product/edit-product';
import { EditRestaurant } from './pages/edit-restaurant/edit-restaurant';
import { EditMenu } from './pages/edit-menu/edit-menu';
import { AddRestaurant } from './pages/add-restaurant/add-restaurant'; 
import { Register } from './register/register'; 

export const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'adm-restaurant', component: AdmRestaurant },
  { path: 'adm-product', component: AdmProduct },
  { path: 'adm-menu', component: AdmMenu },
  { path: 'restaurants', component: Restaurants },
  { path: 'products', component: Products },
  { path: 'menus', component: Menus },
  { path: 'edit-product', component: EditProduct },
  { path: 'edit-restaurant', component: EditRestaurant },
  { path: 'edit-menu', component: EditMenu },
  {path: 'add-restaurant', component: AddRestaurant},
  {path: 'register', component: Register}

];
