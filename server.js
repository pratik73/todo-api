// create server
const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const app = express();

//Connect Database
connectDB();

// const http = require('http');
// const server = http.createServer((req,res) => {
//     res.end("I received your request");
// });

// //listen on port
// server.listen(5002,()=>{
//     console.log('Listening...')
// });

//  app.get('/', (req,res) => {
//      res.send('API running')
//  });

// Init Middleware
app.use(express.json());

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/todo", require("./routes/api/todo"));

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

//mongodb+srv://dheepika:<password>@cluster0.mhivv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
