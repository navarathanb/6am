import { Component } from '@angular/core';
import {shopType} from './shopType';
import { shopService } from './shop.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  selector: 'my-app',
  templateUrl: `app/app.component.html`,
  providers : [shopService]
  
})
export class AppComponent  { 
  name: string= 'Navarathan'; 
  status:boolean = true;
  students: any[] = [
    {"name":"james","email":"james@gmail.com","mobile":12321312,"id":100,"path":"app/img/1.jpg","date":new Date()},
    {"name":"vimal","email":"vimal@gmail.com","mobile":98098098,"id":101,"path":"app/img/2.jpg","date":new Date(1988,1,4)},
    {"name":"kishore","email":"kishore@gmail.com","mobile":87687687687,"id":102,"path":"app/img/3.jpg","date":new Date()},
    {"name":"suresh","email":"suresh@gmail.com","mobile":987987978,"id":103,"path":"app/img/4.jpg","date":new Date()},
    {"name":"ramu","email":"ramu@gmail.com","mobile":87587568,"id":104,"path":"app/img/5.jpg","date":new Date()}

  ];

  products:shopType[];
  constructor(private productClass : shopService){}

  ngOnInit(): any{
    this.productClass.getRecords().subscribe(products => this.products = products);
    return this.products;
  }


}


// directives : 
//   *NgIf
//   *NgFor