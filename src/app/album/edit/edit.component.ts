import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from 'src/app/album';
import { AlbumService } from 'src/app/album.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  album: Album = new Album;
  router: any;
  constructor(router:Router, private route:ActivatedRoute, private albumService:AlbumService) { }
  
  ngOnInit(): void {
    
  }
  onSubmit(form:NgForm){
   
    this.router.navigateByUrl.updateAlbum(); 
  }

}
