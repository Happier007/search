import { fibonacci } from '../util/fibonacci';
import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../model/book';

@Pipe({standalone: true, name: 'fibonacci'})
export class FibonacciPipe implements PipeTransform{
    transform(value: Book): number {
        if ('links' in value) {
            return fibonacci(value.links);
        }

        return 0;
    }
}
