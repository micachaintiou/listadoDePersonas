import { EventEmitter, Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService{
  //personas: Persona[] = [new Persona('Micaela', 'Chaintiou')];
  personas: Persona[] = []; //Ahora se va a encargar el metodo obtenerPersonas

  saludar = new EventEmitter<number>();

  constructor(private loggingService: LoggingService,
              private dataServices : DataServices
  ){}

  setPersonas(personas: Persona[]){
    
  }

  obtenerPersonas(){
    return this.dataServices.cargarPersonas();
  }

  agregarPersona(persona:Persona){
    this.loggingService.enviarMensajeAConsola("agregamos personas:" + persona.nombre);
  this.personas.push(persona);
  this.dataServices.guardarPersonas(this.personas);
  }

  encontrarPersona(index: number){
    let persona: Persona = this.personas[index];
    return persona;
  }

  modificarPersona(index: number, persona:Persona){
    let persona1 = this.personas[index];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
  }

  eliminarPersona(index:number){
    this.personas.splice(index,1);
  }

}
