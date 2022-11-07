import { Pipe, PipeTransform} from '@angular/core'
import { __values } from 'tslib'

@Pipe({name : 'capitalize'})

export class CapitalizePipe implements PipeTransform{
    transform(value: any){
        if(value){
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    }
}