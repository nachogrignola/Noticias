import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioNoticiaService {


  constructor(private http: HttpClient) { }


  getNoticias(parametros: any): Observable<any>{
    
    /*const URL = 'https://bing-news-search1.p.rapidapi.com/news?mkt=en-US&cc='+parametros.pais+'&category='+parametros.categoria;
    const headers= new HttpHeaders({
      'x-bingapis-sdk': 'true',
      'x-rapidapi-key': 'bab6152019msh02322e8b80ce287p1bed57jsnf2d0d3c080fa',
      'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com'
    })*/


    const URL = 'https://gnews.io/api/v4/top-headlines?&topic='+parametros.categoria+
                '&country='+parametros.pais+'&token=44d6efa09bd2615d9ad8f1c8b37ce4f0'

    return this.http.get(URL);


  }

}
