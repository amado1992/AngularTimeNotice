import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrazaDto } from 'src/app/dto/trazaDto';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-traza',
  templateUrl: './traza.component.html',
  styleUrls: ['./traza.component.css']
})
export class TrazaComponent implements OnInit {
  notice?: any = {};
  noticeId;
  noticias;
  roles;
  message = "";
    constructor(public appServiceInjector: AuthService,
      private route: ActivatedRoute) { 
        this.notice = {}
      }
  
    ngOnInit(): void {
      this.noticeId = this.route.snapshot.paramMap.get('id');

      this.roles = localStorage.getItem('roles');
  
      if (this.roles != "administrador"){
  this.message = "Este usuario no esta autorizado a ver este contenido"
      }
  
      this.getNoticias();
    }
  
    getNoticias() {
  
      this.appServiceInjector.getNoticias()
      .subscribe(noticia => {
       
        this.noticias = noticia;
        this.noticias = this.noticias.articles
  this.notice = this.noticias.find(notice => notice.title == this.noticeId)
//Add traza
let email = localStorage.getItem('email')
  const traza = new TrazaDto()
  traza.urlNotice = this.notice?.url 
  traza.emailUser = email;
  this.appServiceInjector.postTraza(traza)
  .subscribe(traza => {
    });
        });
    }
}
