import { Component, OnInit } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';
import { PersonasService } from './personas.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Listado De Personas';
  personas: Persona[] = [];//[new Persona('Micaela', 'Chaintiou')]; // new Persona('Laura', 'Juarez')]; //Array para agregar personas

  constructor(private loggingService:LoggingService,
              private personaService: PersonasService){

  }
  ngOnInit(): void {
    this.personas = this.personaService.personas;
  }

  /*personaAgregada(persona:Persona){
   this.loggingService.enviarMensajeAConsola("Agregamos al arreglo la nueva persona:" + persona.nombre);
  this.personas.push(persona);
  this.personaService.agregarPersona(persona);

  }*/
}


