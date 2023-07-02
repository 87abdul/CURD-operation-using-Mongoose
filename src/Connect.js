const mongoose = require("mongoose");

// Database ko Nodejs/Expressjs se connect karna
mongoose.connect("mongodb://127.0.0.1:27017/mydb", {useNewUrlParser:true, useUnifiedTopology:true}).then(()=>console.log("Connection successful....")).catch((err)=> console.log(err));

