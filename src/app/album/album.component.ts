import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  albums :Album[]=[];
  error:string="";
  newAlbum: Album = new Album;

  constructor(private albumService :AlbumService) { }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(){
    var req=this.albumService.getAlbums();
    req.subscribe(albms=>this.albums=albms,err=>this.error=err);
  }
  addAlbum(){
    var req=this.albumService.addAlbum(this.newAlbum);
    req.subscribe(albm=>this.albums.push(albm),err=>this.error=err);
  }
  updateAlbum(){
    var req=this.albumService.updateAlbum(this.newAlbum);
    //req.subscribe(albm=>this.albums.push(albm),err=>this.error=err);
    console.log(this.newAlbum,'diii');
  }
  
  deleteAlbum(id: number) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.albumService.deleteAlbum(id).subscribe(data => {
        this.getAlbums()
      })
    }
  } 

}
