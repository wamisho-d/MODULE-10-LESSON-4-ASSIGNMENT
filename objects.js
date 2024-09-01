// Question 1 Task 1: Create a constructor function for the Book object with properties for title, author, and pages.
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// Task 2: Implement a method within the Book object to display book information.
Book.prototype.displayInfo = function() {
    return `Title: ${this.title}, Author: ${this.author}, Pages:${this.pages }`;
};

// Task 3:  Create an array to store book objects and implement functions to add new books and search for books by title or author.
const library =[];

function addBook(title, author, pages) {
    const newBook = new Book(title, author, pages);
    library.push(newBook);

}

function searchBooks(query) {
    return library.filter(book =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())

    );
}

// Task 4: Create functions that utilize the filter method to filter out books that contain more than 100 pages and the map method to add "Title: " and "Author: " to the book's title and author properties respectably.
// filter books that have more than 100 pages
function filterBooksByPageCount() {
    return library.map(book => ({
        title: `Title: ${book.title}`,
        auhtor: `Author: ${book.author}`,
        pages: book.pages

    }));
}

// Example Useage
addBook("The Great Gatsby", "F. Scott Fitzgerald", 170);
addBook("To Kill a Mockingbird", "Harper Lee", 291);
addBook("The Litle Prince", "Antoine de Saint-Exupery", 86);

console.log(searchBooks("great")); // Searches for books with "great" in title or author
console.log(filterBooksByPageCount()); // Filters books with <= 100 pages
console.log(formatBookProperties()); // Formats book properties
console.log(library[0].displayInfo()); // Displays information for the first book
