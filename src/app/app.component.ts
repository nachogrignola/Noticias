import { error } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { ServicioNoticiaService } from './Servicios/servicio-noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listadoNoticias : any = [];


  error : boolean = false;
  loading : boolean = false;

  title = 'noticias';

constructor(private _noticiaServicio: ServicioNoticiaService){

}

  buscarNoticias(parametros: any){

    this.loading = true;
    this.listadoNoticias = [];

    setTimeout(() => {
    this._noticiaServicio.getNoticias(parametros).subscribe( data => {
      this.loading = false;
      this.listadoNoticias = data.articles;
    }, error => {
      this.loading = false;
      this.error = true;
    });
    
    }, 2000);

    this.error = false;

  }

}
