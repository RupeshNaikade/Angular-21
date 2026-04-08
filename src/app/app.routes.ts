import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    },
    {
        path: 'login',
        loadComponent: () => import('./auth/login-component/login-component').then(m => m.LoginComponent)
    },
    {
        path: 'product',
        loadComponent: () => import('./product/product.component/product.component').then(m => m.ProductComponent)
    },
    {
        path: 'cart',
        loadComponent: () => import('./cart/cart.component/cart.component').then(m => m.CartComponent)
    },
    {
        path: 'product-details',
        loadComponent: () => import('./product/product-details-component/product-details-component').then(m => m.ProductDetailsComponent)
    }


];
