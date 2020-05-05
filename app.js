var express=require("express");
    app=express();
    request = require('request');

app.set("view engine","ejs");
app.use(express.static("public"));



app.get("/",function(req,res){
    // recipes/search?query=cheese&number=2&apiKey=63aeb4de7413499fb1bbf04ff8d72868
    var murl="https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences"
    request(murl, function (error, response, body) {
        if(!error  ) 
        {
            var parsebody=JSON.parse(body);
            var onebody=parsebody.paid;
            // console.log(onebody.city)

          res.render("result",{onebody:onebody}); // Print the HTML for the Google homepage.
        //   res.send(parsebody);
      
        }
        });  

   
});

app.listen(process.env.PORT||3000,function(){
    console.log("Food recipe server started !!!")
});





