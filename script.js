const myLibrary = [];

const Book = function(title, author, pages, read){
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read ? "read" : "unread";
	this.info = function(){
		let information = this.title + " by " + this.author + ", " + this.pages + ", ";
		if (!read) {
			information += "not read yet";
		}
		return information;
	}
}

const table = document.querySelector("table");
const displayBooks = function(){
	let newEntry = table.insertRow();
	let newBook = myLibrary.at(-1);
	newEntry.insertCell().textContent = newBook.title;
	newEntry.insertCell().textContent = newBook.author;
	newEntry.insertCell().textContent = newBook.pages;
	newEntry.insertCell().textContent = newBook.read;
}

const addBookToLibrary = function(book){
	myLibrary.push(book);
	displayBooks();
}

const bookButton = document.querySelector(".addBook");
const dialog = document.querySelector("dialog");
const submitter = document.querySelector(".submit");
const form = document.querySelector("form");

submitter.addEventListener("click", (e) => {
	e.preventDefault();
	let newBook = []
	elements = Array.from(form.elements);
	for (let x of elements){
		if (x.name === "read") {
			newBook.push(x.checked);
		} else if (x.checkValidity()) {
			newBook.push(x.value);
		} else {
			return;
		}
	}
	newBook = new Book(...newBook)
	addBookToLibrary(newBook)
})

bookButton.addEventListener("click", () => {
	dialog.showModal();
})

const Hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

addBookToLibrary(Hobbit);