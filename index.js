const express = require("express");
const app = express();
const MongoClient = require('mongodb').MongoClient;
var MongoId = require('mongodb').ObjectID;
var db;

app.use('/', express.static('chest'));
app.use(express.json());       
app.use(express.urlencoded({ extended: true })); 
/*var bodyParser = require('body-parser')
app.use( bodyParser.json() );      
app.use(bodyParser.urlencoded({ extended: true }));*/ 

books = [
    {id:1, title: 'Do Androids Dream of Electric Sheep', author: 'Philip K. Dick', genre: 'Sci-fi', date: '1968'},
    {id:2, title: 'Dune', author: 'Frank Herbert', genre: 'Sci-fi', date: '1965'},
    {id:3, title: '1984', author: 'George Orwell', genre: 'Dystopia', date: '1949'},
    {id:4, title: 'Foundation', author: 'Isaac Asimov', genre: 'Sci-fi', date: '1942'},
    {id:5, title: 'Starship Troopers', author: 'Robert A. Heinlein', genre: 'Sci-fi', date: '1959'}
];

app.post('/rest/v1/login', function(request, response){
    var user = request.body;
    if(user.username == 'david@gmail.com' && user.password == '486'){
      response.send(false)
    }else{
      response.send(true);
    }
  });

/*Rest is not working with MongoDB, nothing happens*/
app.post('/rest/v1/books', function(request, response) {
    db.collection('books').save(request.body, (err, result) => {
        if(err) return console.log(err)
        response.send('OK');
        console.log("Number of documents inserted: " + result.insertedCount);
    })
});

app.get('/rest/v1/books', function(request, response){
    db.collection('books').find().toArray((err, books) => {
      if (err) return console.log(err);
      response.setHeader('Content-Type', 'application/json');
      response.send(books);
    })
});
      
         
MongoClient.connect('mongodb://localhost:27017/BookDatabase', (err, database) => {
    if(err) return console.log(err);
    db = database;
    
    db.collection("books").insertMany(books, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
    });

    db.collection("books").find({}).toArray(function(err, books) {
        if (err) throw err;
        //console.log(books);
        db.close();
    });
    
    app.listen(3000, () => console.log("Listening on port 3000!"))
})