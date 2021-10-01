const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");  // to require stuff from date.js     
//the thing which we will get after requiring date.js will the stuff which will be exporting

const app = express();

let regularItems = ["Book Tickets"];
let workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))


app.get("/", function(req,res){

    let day = date.getDate();    // console.log(date) will simply give getDate(or other function bind to export of this module 
    // (check date.js)) so to invoke the function which we want to use we are using date.getDate()

    res.render("list", {listTitle: day, newListItems: regularItems});  //list is the name of ejs file
                                 // in simple language "ListTitle: day" means we are assigning day to ListTitle for rendering on ejs(or home page)

})

app.post("/",function(req,res){

    let item = req.body.newItem;        //this is to get newItem from form
   // console.log(req.body.list)

    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work")
    } else {
        regularItems.push(item);   //this is to push item in regularItems array
        res.redirect("/");  //this to redirect to home route
    }
    
})


app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListItems: workItems})
})


app.get("/about", function(req, res){
    res.render("about");
})


app.listen(3000, function(){
    console.log("Server started on port 3000");
})