import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, finalize, startWith, switchMap, tap } from 'rxjs';

import { BookType } from '../model';
import { BooksService } from '../services';
import { LogService } from '../services';
import { FibonacciPipe } from '../pipes';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, FibonacciPipe],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    private readonly booksService = inject(BooksService);
    private readonly logService = inject(LogService);

    protected readonly searchCtrl = new FormControl<string>('');
    protected readonly BookType = BookType;
    loading = false;

    books$ = this.searchCtrl.valueChanges.pipe(
        startWith(''),
        debounceTime(300),
        distinctUntilChanged()
    ).pipe(
        tap(() => this.loading = true),
        tap((search) => this.logService.log(search)),
        switchMap((search) => {
            return this.booksService.getBooks(search || '').pipe(
                finalize(() => this.loading = false)
            )
        })
    )
}
