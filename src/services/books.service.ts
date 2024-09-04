import { Injectable } from '@angular/core';
import { Book } from '../model';
import { delay, Observable, of } from 'rxjs';

@Injectable({providedIn: "root"})
export class BooksService {
    private books: Book[] = [
        {
            type: 'novel',
            title: 'The Great Gatsby',
            bestseller: true,
        },
        {
            type: 'medicine',
            title: "Gray's Anatomy",
            links: 25,
        },
        {
            type: 'novel',
            title: 'Pride and Prejudice',
            bestseller: true,
        },
        {
            type: 'medicine',
            title: 'The Merck Manual of Diagnosis and Therapy',
            links: 3,
        },
        {
            type: 'novel',
            title: 'To Kill a Mockingbird',
            bestseller: true,
        },
        {
            type: 'medicine',
            title: 'The Immortal Life of Henrietta Lacks',
            links: 8,
        },
        {
            type: 'novel',
            title: '1984',
            bestseller: false,
        },
        {
            type: 'medicine',
            title: 'The Emperor of All Maladies',
            links: 30,
        },
        {
            type: 'novel',
            title: 'The Catcher in the Rye',
            bestseller: false,
        },
        {
            type: 'medicine',
            title: 'The Diagnostic and Statistical Manual of Mental Disorders',
            links: 31,
        },
        {
            type: 'novel',
            title: 'The Lord of the Rings',
            bestseller: false,
        },
        {
            type: 'medicine',
            title: 'Principles of Pharmacology',
            links: 16,
        },
        {
            type: 'novel',
            title: 'Moby-Dick',
            bestseller: false,
        },
        {
            type: 'medicine',
            title: 'The Oxford Handbook of Clinical Medicine',
            links: 24,
        },
        {
            type: 'novel',
            title: "Harry Potter and the Philosopher's Stone",
            bestseller: true,
        },
    ];

    constructor() {
    }

    getBooks(search = ''): Observable<Book[]> {
        if (!search) {
            return of(this.books);
        }
        return of(
            this.books.filter((book) => {
                return book.title.toLowerCase().indexOf(search.toLowerCase()) >= 0;
            })
        ).pipe(delay(1000 * Math.random()));
    }
}
