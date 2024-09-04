import { BookType } from './book-type';

export type Book = Novel | Medicine;

export interface Novel {
    type: 'novel';
    title: string;
    bestseller: boolean;
}

export interface Medicine {
    type: 'medicine';
    title: string;
    links: number;
}

type BookTypeUnion = BookType.NOVEL | BookType.MEDICINE;
