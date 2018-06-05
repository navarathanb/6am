import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
    selector : 'my-app',
    templateUrl : './category.component.html'
})

export class AppCategory{
    constructor(private route: Router){}
    prod(){
        this.route.navigate(['/products']);
    }
}