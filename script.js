let info
  
  class Book {
    constructor(name, author, pages, read) {

        this.name = name
        this.author = author
        this.pages = pages
        this.read = read

        this.info = name + " by " + author + ", " + pages + " pages, " + "have been read."




    }
}
  const book1 = new Book("PeterPan", "mikeJ", "293", "yes");

  console.log(book1.info)
  