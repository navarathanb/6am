import { Component } from '@angular/core';
import {Products} from './products';
@Component({
    selector : 'my-app',
    templateUrl : './products.component.html'
})

export class AppProducts{
   
    data = new Products("ELectroncis",100);
    email:string ="james@gmail.com";
    chnge(){
        this.email = "rajesh@gmail.com";
    }
    
}
