import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
  constructor( private http: HttpClient ) { 
    console.log('Servicio Spotify listo!!!');
    
   }

   getQuery( query:string ){

     const url = `https://api.spotify.com/v1/${query}`;

     const headers = new HttpHeaders({
       'Authorization': 'Bearer BQBJBy2luaWlwlz63elKpc_4Pf9ksBYr-C4QT2fbbo-GChhKnowcM-_e4lEILcsBNR0t_sW1iZFXPG8tWQQ'
     });

     return this.http.get(url, { headers });

   }

  //Recupera las Novedades de Spotify
  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
               .pipe( map(data => data['albums'].items ));
  }

  //Recupera los Artistas que son ingresados en la barra del Search
  getArtistas( termino:string ){
    
     return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
                .pipe(map( data => data['artists'].items ));

   }
  
  //Recupera el Artista seleccionado, ya sea cuando selecciono desde el Home o desde el Search
  getArtista(id: string) {

    return this.getQuery(`artists/${id}`);

  }

  //Temas más escuchados
  getTopTracks(id: string) {

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(map(data => data['tracks']));

  }

}
