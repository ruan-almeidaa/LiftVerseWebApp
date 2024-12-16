import { Routes } from '@angular/router';
import { CadastroComponent } from './pages/Usuario/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/Usuario/login/login.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'cadastro', component:CadastroComponent}

];
