fetch("https://www.googleapis.com/books/v1/volumes?q=Sins+of+the+father")
.then(response => response.json())
.then(book => console.log(book))