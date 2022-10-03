import { Component } from '@angular/core';
import { Persona } from './persona.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado De Personas';
  personas: Persona[] = [new Persona('Micaela', 'Chaintiou')]; // new Persona('Laura', 'Juarez')]; //Array para agregar personas

  personaAgregada(persona:Persona){
  this.personas.push(persona);
  }
}


