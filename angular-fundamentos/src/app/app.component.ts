import { Component } from '@angular/core';

@Component({  //decorador da classe AppComponent(abaixo)
  selector: 'app-root',
  templateUrl: './app.component.html',//url
  styleUrl: './app.component.css'     //Estilos da pg
})
export class AppComponent {
  title = 'angular-fundamentos';
}
