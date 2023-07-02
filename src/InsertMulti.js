const mongoose = require("mongoose");

// Database ko Nodejs/Expressjs se connect karna
mongoose
  .connect("mongodb://127.0.0.1:27017/mydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection successful...."))
  .catch((err) => console.log(err));

// Schema

// A mongoose schema defines the structres of the document, default values ,  validators, etc.

// Database me jo documents insert karne hai uska structure
const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    retquired: true,
  },
  ctype: String,
  lectures: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

// A mongoose model is a wrapper on the Mongoose schema.
// Moogoose model provides an interface to the database for creating,
// querying , updating, deleting records, etc.

//Collection creation with the help of model
const Playlist = new mongoose.model("Playlist", playlistSchema);

// Create Document or Insert single document
const createDocument = async () => {
  try {
    // 1st document
    const jsPlaylist = new Playlist({
      name: "JS",
      ctype: "Front End",
      lectures: 150,
      author: "Youtube",
      active: true,
    });

     // 2nd document
    const mongoPlaylist = new Playlist({
      name: "Mongo DB",
      ctype: "Database",
      lectures: 10,
      author: "Youtube",
      active: true,
    });

     // 3rd document
    const mongoosePlaylist = new Playlist({
      name: "Mongo DB",
      ctype: "Database",
      lectures: 10,
      author: "Youtube",
      active: true,
    });

     // 4th document
    const expressPlaylist = new Playlist({
      name: "Express JS",
      ctype: "Back End",
      lectures: 20,
      author: "Youtube",
      active: true,
    });


    const result = await Playlist.insertMany([jsPlaylist, mongoPlaylist, mongoosePlaylist,expressPlaylist]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

createDocument();

// Insert multiple documents
