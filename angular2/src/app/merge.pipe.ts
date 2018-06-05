import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name : 'merge'
})

export class MergePipe implements PipeTransform{
    transform(name1 : string, name2:string):string{

        return name1.toUpperCase()+name2
    }
}