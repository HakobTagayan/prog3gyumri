// var obj = {
//     "first_name": "Vardan",
//     "last_name": "Hovsepyan",
//     "age": 13,
//     "tumo_student": true,
//     sayHello() {
//         console.log("Hello");
//     }
 
//  }
//  console.log(obj);
//  console.log(obj.first_name);
//  obj.sayHello();
// var os = require("os");
// var message = "The platform is ";

// function main(){
//    console.log(message + os.platform());
// }
// main();
// var express = require("express");
// var app = express();

// app.get("/", function(req, res){
//    res.send("<h1>Hello world</h1>");
// });
// app.get("/hakob", function(req, res){
//     res.send("<h1>Hello hakob</h1>");
//  });
// app.get("/name/:name", function(req, res){
//    var name = req.params.name;
//    res.send("<h1>Hello " + name +"</h1>");
// });

//stex sksvuma google link dnely
// app.get("/hhh/:poxos", function(req, res){
//     res.redirect('http://google.com');
//  });
//  app.get("/search/:kkk", function(req, res){
//      var val = req.params.kkk
//     res.redirect('http://google.com/search?q=' + val);
//  });
//  app.get("/*/", function(req, res){
//     res.send("<h1>Hello " +404+"</h1>");
// });
// app.listen(3000, function(){
//    console.log("Example is running on port 3000");
// });

//stex galisa programming2 -i run anely localhostov 

// var express = require("express");
// var app = express();

// app.use(express.static("ProjectGOTL"));

// app.get("/", function(req, res){
//    res.redirect("ProjectGOTL");
// });

// app.listen(3000, function(){
//    console.log("Example is running on port 3000");
// });



// FS


// var fs = require('fs');

// function main(){
//    var file  = "hello.txt";
//    //appenFileSync avelacnum e erkrord parametry vorpes text 1-in parametri failum
//    fs.appendFileSync(file, "Hello world\n");
// }
// main();




// var fs = require('fs');
// var dummyText = "Apple yep";

// function main() {
//    fs.writeFileSync("dummytext.txt", dummyText);
//    var text = fs.readFileSync("dummytext.txt").toString();
//    console.log(dummyText == text);
//    console.log(text);
//    fs.writeFileSync("dummytext.txt",
//        text.replace("yep", "Microsoft")
//    );
// }
// main();


// var obj = { name: "John", age: 30, city: "New York" };

// var fs = require('fs');

// function main(){
//    var file  = "obj.json";
//    var myJSON = JSON.stringify(obj);
//    //appenFileSync avelacnum e erkrord parametry vorpes text 1-in parametri failum
//    fs.appendFileSync(file, myJSON);
// }
// main();


