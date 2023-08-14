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
  const div = document.createElement("div");
  const formField = document.createElement("form");
  const titleInput = document.createElement("input");
  const authorInput = document.createElement("input");
  const numberInput = document.createElement("input");
  const radioButtonDiv = document.createElement("div");
  const submitButton = document.createElement("button");
  const radioButtonText = document.createElement("p");
  const checkBoxInput = document.createElement("input");

  body.appendChild(formContainer);
  formContainer.appendChild(formField);
  formField.appendChild(div);
  div.appendChild(titleInput);
  div.appendChild(authorInput);
  div.appendChild(numberInput);
  div.appendChild(radioButtonDiv);
  radioButtonDiv.appendChild(radioButtonText);
  radioButtonDiv.appendChild(checkBoxInput);
  div.appendChild(submitButton);

  titleInput.placeholder = "Title...";
  titleInput.type = "text";
  titleInput.setAttribute("name", "title");
  authorInput.placeholder = "Author...";
  authorInput.type = "text";
  authorInput.setAttribute("name", "author");
  formContainer.className = "form-container";
  formField.className = "form";
  numberInput.type = "number";
  numberInput.setAttribute("name", "number");
  checkBoxInput.type = "checkbox";
  radioButtonText.innerText = "Have you read it?";
  radioButtonDiv.className = "check-box-div";
  submitButton.className = "submit-button";
  submitButton.innerText = "Submit";

  console.log(body);
});
