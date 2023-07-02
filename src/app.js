const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/mydb", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connection successful...."))
  .catch((err) => console.log(err));



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


    // A Mongoose mmodel is a wrapper on the Mongoose schema.
    // A Mongoose schema defines the structure of the document, default values, validators, etc., whereas a Mongoose model provides an interface to the database for creating , querrying , updating, deleting records, etc.


    // collection creation

    const CourseList = new mongoose.model("CourseList" , CourseSchema);

    // Creatino and insertion of document


    const createDocument = async() =>{
        try{
            const reactCourseList = new CourseList({    
                name : " Node JS",
                ctype: "Back End",
                lecture : 50, 
                author : "Youtube",
                active : true
                
        })

        // we will wait for the the collection to be saved after that we will store it into t the result and the momwnt we got result it will be shown at console
            const result = await reactCourseList.save();
            console.log(result);

        }catch(err){
            console.log(err);
        }
    }

    createDocument();



