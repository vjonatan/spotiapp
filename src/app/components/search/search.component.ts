import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent{

  artistas:any [] = [];
  loading : boolean;

  constructor( private spotifyService:SpotifyService ) { }

  buscar( termino:string ){
    console.log(termino);
    this.loading = true;

    this.spotifyService.getArtistas( termino ).subscribe((data:any) =>{
      //console.log(data.artists.items)

      this.artistas = data;
      this.loading = false;

    })

  }

}
