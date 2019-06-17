# MyReads Project

This project is the first project for the [Udacity React Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019) 

## Project Description
This project is a book tracking application that allows you to manage your books. The application consists of three bookshelves namely: 
1. Want to read
1. Currently reading
1. Read

The application allows you to search for books and then assign them to one of the above bookshelves. You can also move books fromone shelf to another or remove them from the shelf entirely.

The front-end makes use of the Udacity Books API which has limited search terms. To see a list of accepted search terms, please see [SEARCH_TERMS.md](SEARCH_TERMS.md)

To get started using this application:

* clone this repository 
* install all project dependencies with `npm install`
* start the development server with `npm start`

## Backend Server

For interest, the section below describes the BooksApi that this application is using.

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query, maxResults)
```

* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
