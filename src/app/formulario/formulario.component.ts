//import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [LoggingService]
})
export class FormularioComponent {
  //@Output() personaCreada= new EventEmitter<Persona>();

  nombreInput:string = '';
  apellidoInput:string = '';
  //personas: any;
  /*@ViewChild('nombreInput') nombre:ElementRef;
  @ViewChild('apellidoInput') apellido:ElementRef;*/

  constructor(private loggingService:LoggingService, private personasService:PersonasService){
  this.personasService.saludar.subscribe((indice:number) => alert("El indice es: " + indice));
  }

 /* agregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    //this.personas.push(persona1); //Agrega
    this.personaCreada.emit(persona1); //Se recibe desde el elemento padre
  } De esta forma es si uso event Biding*/

  //agregarPersona(nombreInput:HTMLInputElement,apellidoInput:HTMLInputElement){
    //let persona1 = new Persona(nombreInput.value, apellidoInput.value); Es con refeencias locales
    agregarPersona(){
      let persona1 = new Persona(this.nombreInput, this.apellidoInput);
      //let persona1 = new Persona(this.nombre.nativeElement.value, this.apellido.nativeElement.value); //Se usa para recuperar el valor de la plantilla cuando se usa view child
      /*this.loggingService.enviarMensajeAConsola("Enviamos persona:" + persona1.nombre + "apellido: " + persona1.apellido);
      this.personaCreada.emit(persona1);*/
      this.personasService.agregarPersona(persona1);
  }


}
