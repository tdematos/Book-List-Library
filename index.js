let myLibrary = [];

//creates book obj
class book {
  constructor(title, author, numberOfPages, read) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
  }
}

const harryPotter = new book("Harry Potter", "J.K Rowling", 356, true);
const LordOfTheRings = new book("Lord of The Rings", "Frodo", 1396, false);
const ThinkAndGrowRich = new book(
  "Think and Grow Rich",
  "Napolean Hill",
  144,
  true
);

//a function that adds book to library when called
function addBookToLibrary(book) {
  myLibrary.push(book);
}

addBookToLibrary(ThinkAndGrowRich);
addBookToLibrary(harryPotter);
addBookToLibrary(LordOfTheRings);

//a function that loops through array and displays books
function displayBook(array) {
  for (let i = 0; i < array.length; i++) {
    return array[i];
  }
}

displayBook(myLibrary);

//create a new book button that lets users add inputs in a form field
const body = document.querySelector(".body");
const addBooksButton = document.querySelector(".add");

addBooksButton.addEventListener("click", function () {
  const formContainer = document.createElement("div");
  const formField = document.createElement("form");

  body.appendChild(formContainer);
  formContainer.appendChild(formField);

  console.log(body);
});
