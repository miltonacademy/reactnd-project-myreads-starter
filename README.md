# MyReads Application

This application collects a list of books, allows a user to assign those books to a shelf (such as read, currently reading, etc.) and add new books fetched from an API, and assign those new books to a shelf.

# Installation

This application requires a number of dependencies which are specified in the package.json file. To install the necessary dependencies, navigate to the root directory "reactnd-project-myreads-starter", and run the following terminal command:

npm install

# Running the Application

After installation of the necessary dependencies, the application can be launched by running this terminal command on the root directory:

npm start

# Application Usage

Books are sorted into shelves. An initial set of books will be loaded. To change the "shelf" of a book, click the lower-right button on each book image, and use the select menu to change.

To add a new book, click the + icon in the lower-right area of the main page. This will take you to a search interface. Search for a book. Initially, only the terms listed in the "SEARCH_TERMS.md" file will provide results. After searching for a term and receiving results, a book can be assigned to a shelf. After adding a new book or books through this method, clicking the arrow button in the top-left will return you to the main page, and the newly added books should be displayed. Choosing "none" as the bookshelf will remove a book from the main page.
