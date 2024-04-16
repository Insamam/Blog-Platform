const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const multer = require('multer');
const path = require("path");
const cookieParser = require('cookie-parser');
const postRoute = require('./routes/posts');

// Load environment variables
dotenv.config();

// Connect to MongoDB
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected successfully");
    } catch (err) {
        console.error('Database connection error:', err);
        process.exit(1); // Exit with failure
    }
}

// Middlewares
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());
app.use("/api/posts", postRoute);

// Image upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.img);
    }
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("Image has been uploaded successfully!");
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    connectDb();
    console.log(`Server is running on port ${PORT}`);
});





/* const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const multer = require('multer');
const path = require("path");
const cookieParser = require('cookie-parser');
const postRoute = require('./routes/posts');

// Load environment variables
dotenv.config();

// Connect to MongoDB
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected successfully");
    } catch (err) {
        console.error('Database connection error:', err);
        process.exit(1); // Exit with failure
    }
}
 */
// Middlewares
/* app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());
app.use("/api/posts", postRoute); */




//----------------------------------------------------------------
// Image upload
/* const storage = multer.diskStorage({
    destination: (req, file, fn) => {
        fn(null, "images");
    },
    filename: (req, file, fn) => {
        fn(null, req.body.img);
        //fn(null, "ai.jpg")
    }
}); */
//----------------------------------------------------------------


/* const storage = multer.diskStorage({
    destination: (req, file, fn) => {
        fn(null, "images");
    }, */

    //----------------------------------------------------------------
    /* filename: (req, file, fn) => {
        const timestamp = Date.now();
        const extension = path.extname(file.originalname);
        const uniqueFilename = `${timestamp}${extension}`;
        fn(null, uniqueFilename);
    } */

    //================================================================
    /* filename: (req, file, fn) => {
        fn(null, req.body.img);
        //fn(null, "ai.jpg")
    }
});
 */
/* 
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("Image has been uploaded successfully!");
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT
app.listen(PORT, () => {
    connectDb();
    console.log(`Server is running on port ${PORT}`);
});
 */