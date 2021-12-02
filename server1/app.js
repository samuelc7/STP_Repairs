const express = require("express");

//Express app 
const app = express();

// Register View engine
app.set("view engine", "ejs");


// Listen for request
app.listen(3000);

// Domain root (Home Page)
app.get("/", (req, res) => {
    res.render("index", {title: "Home"});
});

// About Page
app.get("/about-us", (req, res) => {
    res.render("about", {title: "About"});
});

// Contact Us Page
app.get("/contact-us", (req, res) => {
    res.render("contact-us", {title: "Contact Us"});
});

// Previous Fixes / Gallery page
app.get("/previous-fixes-gallery", (req, res) => {
    const images = [
        {title: "image1", source: "./views/images/IMG_8133.jpg"},
    ]
    res.render("previous-fixes-gallery", {title: "Gallery", images});
})

// Reviews Page
app.get("/reviews", (req, res) => {
    //TODO: dynamically put the reviews in from database
    res.render("reviews", {title: "Reviews"})
})

// 404
app.use((req, res) => {
    res.status(404).render("404", {title: "404"});
});