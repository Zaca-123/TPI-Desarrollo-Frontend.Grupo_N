import { Routes } from '@angular/router';
import { TemplateComponent } from './pages/template/template.component';
import { LoginComponent } from './pages/login/login.component';
import { AdmRestaurant } from './pages/adm-restaurant/adm-restaurant';
import { AdmMenu } from './pages/adm-menu/adm-menu';
import { AdmProduct } from './pages/adm-product/adm-product';
import { Restaurants } from './pages/restaurants/restaurants';
import { Menus } from './pages/menus/menus';
import { EditRestaurant } from './pages/edit-restaurant/edit-restaurant';
import { Register } from './pages/register/register';
import { Home } from './pages/home/home';

import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard'; 

export const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [{ path: '', component: Home }],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: Register },
  { path: 'restaurants', component: Restaurants },
  { path: 'menus', component: Menus },
  { path: 'home', component: Home },

  { path: 'edit-restaurant', 
    component: EditRestaurant, 
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['admin'] }
   },  
  {
    path: 'adm-restaurant',
    component: AdmRestaurant,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['admin'] },
  },
  {
    path: 'adm-product',
    component: AdmProduct,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['admin'] },
  },
  {
    path: 'adm-menu',
    component: AdmMenu,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['admin'] },
  },
  {
    path: 'add-restaurant',
    loadComponent: () =>
      import('./pages/add-restaurant/add-restaurant').then((m) => m.AddRestaurant),
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['admin'] },
  },

];
