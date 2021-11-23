import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'conversor'
})

export class conversorPipe implements PipeTransform{
  transform(one:any,two:any){
    let valueone=parseInt(one);
    let valuetwo=parseInt(two);
    return 'La multiplicacion de: ' +valueone+ ' * ' + valuetwo +' = ' + (valuetwo*valueone);

  }
}
