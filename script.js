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
	if (table.tBodies[0]) table.tBodies[0].remove();
	table.createTBody();
	const tbody = table.tBodies[0];
	let index = 0;
	for (const book of myLibrary) {
		const newEntry = tbody.insertRow();
		const delCell = newEntry.insertCell();
		const delButton = document.createElement("button");
		delButton.setAttribute("type", "button");
		delButton.textContent = "Remove";
		delButton.savedIndex = index;

		delButton.addEventListener("click", function() {
			myLibrary.splice(this.savedIndex, 1);
			this.parentElement.parentElement.remove();
		})

		delCell.appendChild(delButton);
		newEntry.insertCell().textContent = book.title;
		newEntry.insertCell().textContent = book.author;
		newEntry.insertCell().textContent = book.pages;
		
		const readCell = newEntry.insertCell();
		readCell.textContent = book.read;
		const readCheckbox = document.createElement("input");
		readCheckbox.savedIndex = index;
		readCheckbox.setAttribute("type", "checkbox");
		readCheckbox.checked = book.read == "read" ? true : false;

		readCheckbox.addEventListener("change", function() {
			if (this.previousSibling.textContent == "read"){
				this.previousSibling.textContent = "unread";
				myLibrary[this.savedIndex].read = "unread";
			} else {
				this.previousSibling.textContent = "read";
				myLibrary[this.savedIndex].read = "read";
			}
		})

		readCell.appendChild(readCheckbox);

		index++;
	};
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
	let newBook = [];
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
	newBook = new Book(...newBook);
	addBookToLibrary(newBook);
})

bookButton.addEventListener("click", () => {
	dialog.showModal();
})

const Hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);

addBookToLibrary(Hobbit);