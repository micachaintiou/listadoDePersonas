import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataServices{
  constructor(private httpClient:HttpClient){}

  cargarPersonas(){
    return this.httpClient.get('https://listado-personas-9f148-default-rtdb.firebaseio.com/datos.json') //Recupera informacion de la base de datos
  }

  //Guardar personas
  guardarPersonas(personas: Persona[]){
    //this.httpClient.post('https://listado-personas-9f148-default-rtdb.firebaseio.com/datos.json', personas)
              //post sirve para enviar inf al servidor a la base de datos para que se guarde la informacion
              this.httpClient.put('https://listado-personas-9f148-default-rtdb.firebaseio.com/datos.json', personas) //put sirve para reemplazar la inf
  .subscribe(
    response => console.log("Resultado guardar Personas" + response),
  error => console.log("Error al guardar Personas:" + error)
  )
  ;
  }
}
