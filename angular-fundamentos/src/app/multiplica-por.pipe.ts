import { Pipe, PipeTransform } from '@angular/core';

@Pipe({   //decorador de Pipe
  name: 'multiplicaPor'
})
export class MultiplicaPorPipe implements PipeTransform {

  transform(value: number, multiplicador: number): unknown {
    return value * multiplicador;
  }

}
