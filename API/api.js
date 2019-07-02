const router = require("express").Router();
const db = require("../models");


const dummyData = {
  phrase: "hello mate"
};

router.get("/test", function(req, res){
  res.json(dummyData);
})

// router.get("/login", function(req, res){
//   console.log("hello you have reached me");
// })

router.post("/login", function (req, res) {
const username = req.body.username;
const pw = req.body.password;
console.log(username, pw);

  db.User.create({
    username: username,
    password: pw
  }).then(newUser => 
    res.json(newUser))
});

router.post("/post", function (req, res){
  const title = req.body.title;
  const body = req.body.body;
  const date = req.body.date;
  db.Posts.create({
      post: body,
      title: title,
      date: date
  }).then(newPost => 
    res.json(newPost))
});

module.exports = router;
