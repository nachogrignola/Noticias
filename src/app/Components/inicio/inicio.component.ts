import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  @Output() parametros = new EventEmitter<any>();

  paisSeleccionado = 'de';

  categoriaSeleccionada = 'business';

  paises : any[] = [
  {name:'Alemania', value:'de'},
  {name:'Brasil', value:'br'},
  {name:'Francia', value:'fr'},
  {name:'China', value:'cn'},
  {name:'EEUU', value:'us'},
  {name:'Portugal', value: 'pt'},
  {name:'Italia', value:'it'},
  {name:'Japon', value:'jp'},
  {name:'Singapore', value:'sg'}
  ]

  categorias : any [] = [
    {name:'Negocios', value: 'business'},
    {name:'Entretenimiento', value: 'entertainment'},
    {name:'General', value: 'general'},
    {name:'Salud', value: 'health'},
    {name:'Deportes', value: 'sports'},
    {name:'Tecnologia', value: 'technology'}
  ]
        
  /* paises para agregar [ro,rs,ru,sa,se,sg,si,sk,th,tr,tw,ua,us,ve,za]
  ,'ar','at','au','be','bg','br','ca','ch','cn','co','cu',
  'cz','de','eg','fr','gb','gr','hk','hu','id','ie','il','in','it','jp','kr','lt',
  'lv','ma','mx','my','ng','nl','no','nz','ph','pl','pt']*/

  constructor() { }

  ngOnInit(): void {

  }


  buscarNoticias(){

    const PARAMETROS = { categoria : this.categoriaSeleccionada,
                          pais : this.paisSeleccionado};

    this.parametros.emit(PARAMETROS);

  }

  

}
