const myLibrary = [];

const Book = function(title, author, pages, read){
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
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

bookButton.addEventListener("click", () => {
	dialog.showModal();
})

const Hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

addBookToLibrary(Hobbit);

console.log(Hobbit.info());