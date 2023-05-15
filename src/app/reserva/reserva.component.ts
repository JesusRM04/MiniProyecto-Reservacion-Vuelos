import { Component } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent {
  horarios: string[]=[
    "08:00 a.m",
    "08:30 a.m",
    "09:00 a.m",
    "09:30 a.m",
    "10:00 a.m",
    "10:30 a.m",
    "11:00 a.m",
    "11:30 a.m",
    "12:00 p.m",
    "12:30 p.m",
    "01:00 p.m",
    "01:30 p.m",
    "02:00 p.m",
    "02:30 p.m",
    "03:00 p.m",
    "03:30 p.m",
    "04:00 p.m",
    "04:30 p.m",
    "05:00 p.m",
    "05:30 p.m",
    "06:00 p.m",
    "06:30 p.m",
    "07:00 p.m",
    "07:30 p.m",
    "08:00 p.m",
    "08:30 p.m",
    "09:00 p.m",
    "09:30 p.m",
    "10:00 p.m",
    "10:30 p.m",
    "11:00 p.m",
    "11:30 p.m",
    "12:00 a.m",
  ]

  name:string="";
  email:string="";
  fecha:Date=myDate;
  horario:string="";

  datos: any[]=[];

  constructor(private localStorageService: LocalStorageService) {
    const formData = this.localStorageService.getItem('formData');
    
    
    
  }

  ngOnInit() {
    const formData = localStorage.getItem('formData');
    if(formData!=null){
      this.datos = JSON.parse(formData);
    }
  }

 

  personas: MiObjeto[] = [];

  agregarPersona(name: string, email: string, fecha:Date, horario:string) {

   
      const persona: MiObjeto = {name, email, fecha, horario};
      this.personas.push(persona);
      localStorage.setItem('formData', JSON.stringify(this.personas));
      
  }
}

const myDate = new Date();
interface MiObjeto {
  name: string;
  email: string;
  fecha: Date;
  horario:string;
}
