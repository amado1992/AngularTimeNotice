import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {
  city;
noticias;
tiempos = [];
roles;
message = "";
  constructor(public appServiceInjector: AuthService) { }

  ngOnInit(): void {
    this.roles = localStorage.getItem('roles');

    if (this.roles != "administrador"){
this.message = "Este usuario no esta autorizado a ver este contenido"
    }

    this.getNoticias();
    this.getTiempos();
  }

  getNoticias() {

    this.appServiceInjector.getNoticias()
    .subscribe(noticia => {
     
      this.noticias = noticia;
      this.noticias = this.noticias.articles

      });
  }

  getTiempos() {

    this.appServiceInjector.getTiempos()
    .subscribe(tiempo => {
     
      this.tiempos = tiempo.list;
      this.city = tiempo.city.country;
      //this.tiempos = this.noticias.city
      console.log("TTT", this.tiempos)

      });
  }
}
