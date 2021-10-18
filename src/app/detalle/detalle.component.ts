import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
  providers: [PostsService]
})
export class DetalleComponent implements OnInit {

  post: any;

  constructor(public _route: ActivatedRoute,
    public _postservices: PostsService) { 
      this.consultarAPI();
  }

  ngOnInit(): void {
    
  }

  consultarAPI(){
    this._route.params.subscribe(params => {
      let _id = params['id'].toString();
      this._postservices.getPostById(_id).subscribe(datos =>{
        this.post = datos;
      });
    });
  }

}
