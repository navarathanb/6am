import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import {shopType} from './shopType';

@Injectable()
export class shopService{
    private file = 'app/shop.json';
    constructor(private http: Http){} 

    getRecords(): Observable<shopType[]>{
       return this.http.get(this.file).map((response:Response)=><shopType[]> response.json()).
        do(data => console.log(JSON.stringify(data))).
        catch(this.errorFun);
    }
    private errorFun(error: Response){
        console.error(error);
        return Observable.throw(error.json().error());
    }

}

// response = function(shopType){
//  resopnskdj
// }