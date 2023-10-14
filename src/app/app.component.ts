import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio_programacion';


  tiempo: number = 0;
  altura: number = 0;
  gravedad: number = 0;
  velocidad: number = 0;
  readonlyInput: boolean = true;



  calcularAltura(){
    const tiempoSegundos = this.tiempo * 60;
this.altura = (this.gravedad * (tiempoSegundos ** 2)) / 2;
this.altura = Math.round(this.altura * 100) / 100;
  }

  calcularVelocidad() {
    const tiempoSegundos = this.tiempo * 60;
    this.velocidad = this.gravedad * tiempoSegundos;
    this.velocidad = Math.round(this.velocidad * 100) / 100;
  }
}




