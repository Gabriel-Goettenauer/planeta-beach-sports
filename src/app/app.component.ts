import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RaquetesBeachTennisComponent } from "./raquetes-beach-tennis/raquetes-beach-tennis.component";
import { RaquetesPadleComponent } from "./raquetes-padle/raquetes-padle.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RaquetesBeachTennisComponent, RaquetesPadleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'raquetes';
}
