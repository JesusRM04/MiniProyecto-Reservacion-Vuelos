import { Component } from '@angular/core';
import { RandomUserServiceService } from '../random-user-service.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-acercaempresa',
  templateUrl: './acercaempresa.component.html',
  styleUrls: ['./acercaempresa.component.css']
})
export class AcercaempresaComponent {
  
  data:any;

  constructor(private apiDatosService: RandomUserServiceService) { }

  ngOnInit() {
    this.recuperarDatos();
  }

  recuperarDatos() {

    //opcion1
    this.apiDatosService.retornar().subscribe(
      (result:any) => {
        this.data = result;
        console.log(this.data);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error");
        } else {
          console.log("Server-side error");
        }
      }
    );

    //opcion2 
    /*this.apiDatosService.retornar().subscribe({
      next: (v) => {this.data=v; console.log(v)},
      error: (e) => console.error(e),})
    */ 
  }
}
