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

    // Get info from HTML form    
let title
let author
let pages
let bookBtn
let read
    bookBtn = document.getElementById("submit")
    bookBtn.addEventListener('click', getFormInfo);
function getFormInfo() {
  console.log(document.getElementById("title").value)
  title = document.getElementById("title").value;
  author = document.getElementById("author").value;
  pages = document.getElementById("pages").value;
  read = document.querySelector('input[name="read"]:checked').value;

  sendInfo()
}

// Send form info to a card and reset the info
let tag
let text
let x
function sendInfo() {
  x = document.getElementById("title").value;
  if (x == "") {
      return false;
  } else {
  tag = document.createElement("div");
  tag.className = 'relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 rounded-lg';

  tag.innerHTML = 
  `
  <h4 id="book1" class="text-xl font-medium text-gray-700">
  Book title: ${title} <br> 
  Author name: ${author} <br>
  Pages: ${pages} <br>
  Read: ${read}
  </h4>

  `;
  document.getElementById('bookList').appendChild(tag);
  // document.getElementById("book1").innerHTML = `Book title: ${title}`;
}
}
