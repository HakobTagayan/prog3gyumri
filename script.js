// operation system
// var os = require("os");
// var message = "The platform is ";

// function main(){
//    console.log(message + os.platform());
// }

// main();

//MODULE EXPRESS WICH RETURN A FUNCTION AND HAVE METHODS LIKE GET POST PUT DELETE

var express = require("express");
var app = express();


// app.get("/", function(req, res){
//    res.send("Hello world");
// });

// app.listen(3000, function(){
//    console.log("Example is running on port 3000");
// });


// app.get("/", function(req, res){
//    res.send("<h1>Hello Gyumri</h1>");
// });
// app.get("/hakob", function(req, res){
//     res.send("<h1>Hello hakob</h1>");
//  });
//  app.get("/name/:name", function(req, res){
//     var name = req.params.name;
//     res.send("<h1>Hello " + name +"</h1>");
//  });
 

//stex sksvuma google link dnely


// app.get("/hhh/:poxos", function(req, res){
//     res.redirect('http://google.com');
//  });
//  app.get("/search/:kkk", function(req, res){
//      var val = req.params.kkk
//     res.redirect('http://google.com/search?q=' + val);
//  });
//  app.get("/*/", function(req, res){
//     res.send("<h1>Error " + 404 + "</h1>");
// });
// app.listen(3000, function(){
//    console.log("Example is running on port 3000");
// });

//stex galisa programming2 -i run anely localhostov 

// var express = require("express");
// var app = express();

// app.use(express.static("Inharitance_Prog3"));

// app.get("/hakob", function(req, res){
//    res.redirect("Inharitance_Prog3");
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


