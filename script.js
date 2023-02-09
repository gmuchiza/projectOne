fetch("https://www.googleapis.com/books/v1/volumes?q=Harry+Potter")
.then(response => response.json())
.then(book => console.log(book))





