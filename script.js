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
  
  const Hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
  console.log(Hobbit.info());