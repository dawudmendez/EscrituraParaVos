import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
  providers: [PostsService]
})
export class CatalogoComponent implements OnInit {

  listPosts: any[] = [];

  constructor(public _postservices: PostsService) { 
  }

  ngOnInit(): void {
    this.consultarAPI();
  }

  consultarAPI(){
    this._postservices.getPost().subscribe(datos =>{
      this.listPosts = datos;
    });
  }

}
