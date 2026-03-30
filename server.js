const express = require('express');
const cors = require('cors');
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const session = require('express-session');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 } //1 h
}));


app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/uploads", express.static("uploads"));

app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Social Media App is running");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

