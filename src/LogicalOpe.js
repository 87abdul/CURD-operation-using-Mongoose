const mongoose = require("mongoose");

// Database ko Nodejs/Expressjs se connect karna
mongoose.connect("mongodb://127.0.0.1:27017/mydb", {useNewUrlParser:true, useUnifiedTopology:true}).then(()=>console.log("Connection successful....")).catch((err)=> console.log(err));


// Schema

// A mongoose schema defines the structres of the document, default values ,  validators, etc.

 // Database me jo documents insert karne hai uska structure
    const playlistSchema = new mongoose.Schema({
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


  
  // A mongoose model is a wrapper on the Mongoose schema.
  // Moogoose model provides an interface to the database for creating,
  // querying , updating, deleting records, etc.


    //Collection creation with the help of model
    const Playlist = new mongoose.model("Playlist", playlistSchema);

    // Create Document or Insert single document
        const createDocument = async () => {
        
        //     try{
        //         // 2nd document
        //      const reactPlaylist = new Playlist({
        //          name : "Node JS",
        //          ctype : "Back End",
        //          lectures : 20,
        //          author : "Youtube",
        //          active : true
        //  })

        //     //  const result = await reactPlaylist.save();
        //     // console.log(result);
        //     // }catch(err){
        //     //     console.log(err);
        //     // }
        // }

        // getDocument();

        const getDocument = async()=>{
            // const result = await Playlist.find({lectures : 10}).select({name : 1});
            const result = await Playlist.find({lectures : {$gt :10}}).select({name : 1});
            console.log(result);
        }
    };

        getDocument();


//   Name             // Description
// $eq
                    // Matches values that are equal to a specified value.
// $gt
                    // Matches values that are greater than a specified value.
// $gte
                    // Matches values that are greater than or equal to a specified value.
// $in
                    // Matches any of the values specified in an array.
// $lt
                    // Matches values that are less than a specified value.
// $lte
                    // Matches values that are less than or equal to a specified value.
// $ne
                    // Matches all values that are not equal to a specified value.
// $nin
                    // Matches none of the values specified in an array.