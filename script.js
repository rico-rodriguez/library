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
let tag;
let text;
let x;
function sendInfo() {
  //Dont allow form submission if fields are empty. (prevent useless blank DIV's)
  x = document.getElementById("title").value;
  y = document.getElementById("author").value;
  z = document.getElementById("pages").value;
  alertBox = document.getElementById("alertBox");
  if (x == "" || y == "" || z == "") {
    alertBox.classList.remove("hidden");
      return false;
  } else {
  //If form is filled out, create a div in the right section with Tailwind styling applied and variable text filled out.
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
  alertBox.classList.add("hidden");

}
}
//close the alert when pressing the 'x' button
function closeButton() {
  alertBox = document.getElementById("alertBox");
  alertBox.classList.toggle("hidden");
} 
// Upload Image

var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};