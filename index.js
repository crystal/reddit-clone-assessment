var express = require("express"),
	app = express(),
	methodOverride = require("method-override"),
	morgan = require("morgan"),
	bodyParser = require("body-parser"),
	usersRouter = require("./routes/users");
	postsRouter = require("./routes/posts");



app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));

app.get("/", function(req, res){
	res.render("statics/home")
});

// Routes
app.use("/users", usersRouter);
app.use("/posts", postsRouter);



app.listen(3000, function(){
  console.log("Server is listening on port 3000");
});
