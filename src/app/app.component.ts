import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from './pages/Usuario/login/login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LiftVerseApp';
}
