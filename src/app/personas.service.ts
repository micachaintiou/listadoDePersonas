import { Persona } from "./persona.model";

export class PersonasService{
  personas: Persona[] = [new Persona('Micaela', 'Chaintiou')];

  agregarPersona(persona:Persona){
  this.personas.push(persona);
  }

}
