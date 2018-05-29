import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent{
  
  artista: any = {};
  topTracks: any[] = [];

  loadingArtista: boolean;
  

  constructor( private activatedRouter : ActivatedRoute,
               private serviceSpotify : SpotifyService ) { 
    
    this.loadingArtista = true;

    this.activatedRouter.params.subscribe(params => {
      //console.log(params['id']);
      this.getArtista(params['id']);

      this.getTopTracks(params['id']);
      
    })

   }

   getArtista( id:string ){
    
     this.loadingArtista = true;

    this.serviceSpotify.getArtista( id ).subscribe( artista =>{
      console.log(artista);
      
      this.artista = artista;

      this.loadingArtista = false;

    } )

   }

  getTopTracks( id: string ){

    this.serviceSpotify.getTopTracks(id).subscribe( tracks =>{
      console.log( tracks );

      this.topTracks = tracks;

    } )



  }


}
