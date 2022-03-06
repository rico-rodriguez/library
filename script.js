let myLibrary = [];
class Book {
  constructor(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }
  sayResult() {
    if (this.read === true) {
      return console.log(`${this.title} by ${this.author}, ${this.pages} pages. Book has been read.`)
    } else if (this.read === false) {
      console.log(`${this.title} by ${this.author}, ${this.pages} pages. Book has NOT been read.`)
    }
  }
}
  const Book0 = new Book("PeterPan", "mikeJ","293","No")


    console.log(Book0.sayResult())

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
    displayBook()
  }
} 
//Push example book into Array
myLibrary.push(["Call Sign Chaos", 'James Mattis', '1775', 'Yes']);

function displayBook() {
  for (let i = 0; i < myLibrary.length; i++) { 
  //If form is filled out, create a div in the right section with Tailwind styling applied and variable text filled out.
  tag = document.createElement("div"); 
}


  tag.className = 
  'div relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 rounded-lg';
  tag.innerHTML = 
  `
  <h4 id="bookCard" class="text-xl font-medium text-gray-700">
  <span class="absolute top-0 bottom-0 right-3 px-4 py-3">
  <svg type="button" onclick="" class="removeButton absolute fill-current h-4 w-4 text-black-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
</span>
<p class="text-center text-xl, font-bold">Book title:</p><hr><p class="text-center">${title}</p><hr>
<p class="text-center text-xl, font-bold">Author name:</p><hr> <p class="text-center">${author}</p><hr>
<p class="text-center text-xl, font-bold">Pages:</p><p class="text-center">${pages}</p><hr>
<p class="text-center text-center text-xl, font-bold">Read:</p><p class="changeRead text-center" id="changeRead">`
if (read === "Yes") {
  tag.innerHTML += `<button style="margin-top: 0px;" class="changeReadButton bg-blue-500 hover:bg-blue-700 text-white py-0 px-10 rounded font-medium text-xl m-0 mt-0">Yes</button></p>
  </h4>`
} else if (read ==="No") {
  tag.innerHTML += `<button style="margin-top: 0px;" class="changeReadButton bg-blue-500 hover:bg-blue-700 text-white py-0 px-10 rounded font-medium text-xl m-0 mt-0">No</button></p>
  </h4>`
};
  myLibrary.push([title, author, pages, read])
  document.getElementById('bookList').appendChild(tag);
  alertBox.classList.add("hidden");
}

// --------------------------------------------------------
//UTILITY FUNCTIONS BELOW THIS LINE -----------------------------------------------------------

//Change read status on dynamicly created cards
$(document).on("click", ".changeReadButton", function() {
  const p = $(this).parent().children('.changeReadButton');
    p.text(p.text() === 'Yes' ? 'No' : 'Yes')
});

//Closing the alert box
function closeButton() {
  alertBox = document.getElementById("alertBox");
  alertBox.classList.toggle("hidden");
}
// Add DYNAMIC click event to class .deleteItem
$(document).on("click", ".removeButton", function() {
  // Move up DOM tree until first incidence of .item-wrapper and remove
  $(this).closest(".div").remove();
});

//Smooth scroll to anchor tag
$('a').click(function(){
  $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top
  }, 1000);
  return false;
});

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}