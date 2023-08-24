let myLibrary = [];
const body = document.querySelector(".body");

//creates book obj
function Book(title, author, numberOfPages, read) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.read = read;
}

Book.prototype.changeButtonColor = function (button) {
  if (button.style.backgroundColor === "greenyellow") {
    button.style.backgroundColor = "red";
    button.innerText = "Not Read";
  } else {
    button.style.backgroundColor = "greenyellow";
    button.innerText = "Read";
  }
};

//a function that adds book to library when called
function addBookToLibrary(book) {
  const checkBox = document.querySelector(".check-box");
  book.read = checkBox.checked;

  myLibrary.push(book);
}

//a function that loops through array and displays books
function displayBook(array) {
  const bookContainer = document.createElement("div");
  const titleOutput = document.createElement("div");
  const authorOutput = document.createElement("div");
  const pageNumberOutput = document.createElement("div");
  const readButton = document.createElement("button");
  const removeButton = document.createElement("button");

  body.appendChild(bookContainer);
  bookContainer.appendChild(titleOutput);
  titleOutput.innerText = "title";
  titleOutput.className = "title-section";
  bookContainer.appendChild(authorOutput);
  authorOutput.innerText = "Author";
  authorOutput.className = "author-section";
  bookContainer.appendChild(pageNumberOutput);
  pageNumberOutput.innerText = 5;
  pageNumberOutput.className = "page-number-section";
  bookContainer.appendChild(readButton);
  readButton.className = "read-button";
  readButton.innerText = "Read";
  bookContainer.appendChild(removeButton);
  removeButton.innerText = "remove";

  bookContainer.className = "book-container";
  readButton.className = "read-button";

  removeButton.className = "remove-button";

  readButton.addEventListener("click", function () {
    const bookIndex = Array.from(bookContainer.parentNode.children).indexOf(
      bookContainer
    );

    myLibrary[bookIndex].changeButtonColor(this);
  });

  removeButton.addEventListener("click", function () {
    bookContainer.remove();
  });

  for (let i = 0; i < array.length; i++) {
    titleOutput.innerText = array[i].title;
    authorOutput.innerText = array[i].author;
    pageNumberOutput.innerText = array[i].numberOfPages;

    const readButton = bookContainer.querySelector(".read-button");
    if (array[i].read) {
      readButton.style.backgroundColor = "greenyellow";
      readButton.innerText = "Read";
    } else {
      readButton.style.backgroundColor = "red";
      readButton.innerText = "Not Read";
    }
  }
}

//create a new book button that lets users add inputs in a form field
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
  const modalDiv = document.createElement("div");

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
  checkBoxInput.className = "check-box";
  radioButtonText.innerText = "Have you read it?";
  radioButtonDiv.className = "check-box-div";
  submitButton.className = "submit-button";
  submitButton.innerText = "Submit";

  submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    const checkBox = document.querySelector(".check-box");

    const newBook = new Book(
      titleInput.value,
      authorInput.value,
      numberInput.value,
      checkBox.checked
    );

    addBookToLibrary(newBook);
    displayBook(myLibrary);
    formContainer.remove();
  });
});

console.log(myLibrary);
