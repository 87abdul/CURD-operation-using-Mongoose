const mongoose = require("mongoose");

mongoose.connect("mongodb://127:27017/mydb", {useNewUrlParser:true, useUnifiedTopology:true}).then(()=>console.log("Connection successful....")).catch((err)=> console.log(err));


// Schema

// A mongoose schema defines the structres of the document, default values ,  validators, etc.

    const CourseSchema = new mongoose.Schema({
        name : {
            type: String,
            retquired : true
        },
        ctype : String,
        lectures : Number,
        author : String,
        active : Boolean,
        date : {
            type : Date,
            default : Date.now
        }
    })
