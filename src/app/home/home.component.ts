import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PostsService]
})
export class HomeComponent implements OnInit {

  listPosts: any[] = [];

  constructor(public _postservices: PostsService) { 
  }

  ngOnInit(): void {
    this.consultarAPI();
  }

  consultarAPI(){
    this._postservices.getPost().subscribe(datos =>{
      this.listPosts = datos.slice(0,3);
    });
  }

}
