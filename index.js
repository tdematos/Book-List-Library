let myLibrary = [];

function Book(title, author, numberOfPages, read) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.read = read;
}

const harryPotter = new Book("Harry Potter", "J.K Rowling", 356, true);

function addBookToLibrary(book) {
  myLibrary.push(book);
}

addBookToLibrary(harryPotter);

console.log(myLibrary);
