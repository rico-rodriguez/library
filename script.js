let myLibrary = [];

class Book {
  constructor(bookName, author, pages, read) {
    this.bookName = bookName
    this.author = author
    this.pages = pages
    this.read = read
  }
  sayResult() {
    if (this.read === true) {
      return console.log(`${this.bookName} by ${this.author}, ${this.pages} pages. Book has been read.`)
    } else if (this.read === false) {
      console.log(`${this.bookName} by ${this.author}, ${this.pages} pages. Book has NOT been read.`)
    }
  }
}
  const book1 = new Book("PeterPan", "mikeJ", "293", false);
  const book2 = new Book("James and the Giant Peach", "JG wentworth", "877", true);


    console.log(book1.sayResult())

function addBooks() {
  
}