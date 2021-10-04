class PrintEditionItem {
    name;
    releaseDate;
    pagesCount;
    type;

    constructor(name, releaseDate, pagesCount, state, type) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5
        return this.state
    }

    set state(item) {
        if (item < 0) {
            this._state = 0
        } else if (item > 100) {
            this._state = 100
        } else {
            this._state = item
        }
    }

    get state() {
        return this._state
    }

}
class Magazine extends PrintEditionItem {
    type
    constructor(name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type)
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    author
    type
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type)
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    type
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type)
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    type
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type)
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    type
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type)
        this.type = 'detective';
    }
}