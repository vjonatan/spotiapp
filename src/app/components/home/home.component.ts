import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent{
  
  nuevasCanciones: any [] = [];
  loading: boolean;
  
  constructor( private serviceSpotify: SpotifyService ) {
    this.loading = true;
    this.serviceSpotify.getNewReleases().subscribe((data:any) =>{
      this.nuevasCanciones = data;
      this.loading = false;
    });

   }
}
