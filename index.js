const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const MongoClient = require('mongodb').MongoClient;

var MongoId = require('mongodb').ObjectID;
var db;


app.use('/', express.static('chest'));
app.use(bodyparser.json());       
app.use(bodyparser.urlencoded({ extended: true })); 


var books = [
    {id:1, title: 'Do Androids Dream of Electric Sheep', author: 'Philip K. Dick', genre: 'Sci-fi', date: '1968'},
    {id:2, title: 'Dune', author: 'Frank Herbert', genre: 'Sci-fi', date: '1965'},
    {id:3, title: '1984', author: 'George Orwell', genre: 'Dystopia', date: '1949'},
    {id:4, title: 'Foundation', author: 'Isaac Asimov', genre: 'Sci-fi', date: '1942'},
    {id:5, title: 'Starship Troopers', author: 'Robert A. Heinlein', genre: 'Sci-fi', date: '1959'}
];

app.post('/rest/v1/books', function(request, response) {
    db.collection('books').save(request.body, (err, result) => {
        if(err) return console.log(err)
        response.send('OK');
        console.log("Number of documents inserted: " + res.insertedCount);
    })
});
/*
var myobj = [
        { name: 'John', address: 'Highway 71'},
        { name: 'Peter', address: 'Lowstreet 4'},
        { name: 'Amy', address: 'Apple st 652'},
        { name: 'Hannah', address: 'Mountain 21'},
        { name: 'Michael', address: 'Valley 345'},
        { name: 'Sandy', address: 'Ocean blvd 2'},
        { name: 'Betty', address: 'Green Grass 1'},
        { name: 'Richard', address: 'Sky st 331'},
        { name: 'Susan', address: 'One way 98'},
        { name: 'Vicky', address: 'Yellow Garden 2'},
        { name: 'Ben', address: 'Park Lane 38'},
        { name: 'William', address: 'Central st 954'},
        { name: 'Chuck', address: 'Main Road 989'},
        { name: 'Viola', address: 'Sideway 1633'}
      ];
*/      
      
    
MongoClient.connect('mongodb://localhost:27017/BookDatabase', (err, database) => {
    if(err) return console.log(err);
    db = database;
    
    
    
    
    app.listen(3000, () => console.log("Listening on port 3000!"))
})