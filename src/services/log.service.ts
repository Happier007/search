import { NEVER, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({providedIn: "root"})
export class LogService {

    constructor() {
    }

    log(data: any): Observable<void> {
        console.log('data', data);
        return NEVER;
    }

}
