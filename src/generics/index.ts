/**
 * Generics are reuseable peices of code that works with multiple types
 */

export class Book {

}

export class Magazine {

}

export class BookSelf {
    private books: Book[] = [];

    addBook(book: Book){
        this.books.push(book);
    }

    getBook(index: number): Book{
        return this.books[index];
    }
}

export class MagazineSelf {
    private magazines: Magazine[] = [];

    addMagazine(Magazine: Magazine){
        this.magazines.push(Magazine);
    }

    getMagazine(index: number): Magazine{
        return this.magazines[index];
    }
}


export class Self<T> {
    private magazines: T[] = [];

    addMagazine(Magazine: T){
        this.magazines.push(Magazine);
    }

    getMagazine(index: number): T{
        return this.magazines[index];
    }
}

