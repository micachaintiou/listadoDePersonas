import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() personaCreada= new EventEmitter<Persona>();

  //nombreInput:string = '';
  //apellidoInput:string = '';
  //personas: any;

 /* agregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    //this.personas.push(persona1); //Agrega
    this.personaCreada.emit(persona1); //Se recibe desde el elemento padre
  } De esta forma es si uso event Biding*/

  agregarPersona(nombreInput:HTMLInputElement,apellidoInput:HTMLInputElement){
    let persona1 = new Persona(nombreInput.value, apellidoInput.value);
    this.personaCreada.emit(persona1);
  }


}