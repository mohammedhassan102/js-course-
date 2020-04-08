function hello(){
    alert('hi')
}
var title = document.getElementById("title");
var author = document.getElementById("author");
var isbn = document.getElementById("isbn");
var bookList = [];

function myBooks(){


var books = {
    bookName : title.value,
    bookWriter : author.value,
    bookIsbn : isbn.value,
    

}
bookList.push(books);
console.log(bookList);
displayBooks()
}
function displayBooks(){
    var bookContainer = ""
    for (var i = 0 ; i<bookList.length ; i++){

        bookContainer+= `<tr>
        <td>`+bookList[i].bookName+`</td>
        <td>`+bookList[i].bookWriter+`</td>
        <td>`+bookList[i].bookIsbn+`</td>
        </tr>`
    }
    document.getElementById('tableBody').innerHTML = bookContainer;
}
