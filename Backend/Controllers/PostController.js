const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);
const Posts = mongoose.model("posts");

// funkcija za rutu baze "/"
exports.baseRoute = async (req, res) => {
  res.send("Server pokrenut");
};

// funkcija za uzimanje posta na rutu "/getPosts"
exports.getPosts = async (req, res) => {
  const posts = await Posts.find();
  res.json(posts);
};

// fukncija za kreiranje posta
exports.createPost = async (req, res) => {
  // mongodb funkcija za pamcenje
  await new Posts(req.body).save((err, data) => {
    if (err) {
      // ukoliko postoji greska, ispsisace se sledeca poruka
      res.status(500).json({
        message:
          "Nesto nije u redu, pokusajte kasnije.",
      });
    } else {
      // ukoliko ne postoji greska, ispisuje se sledeca poruka
      res.status(200).json({
        message: "Citat kreiran",
        data,
      });
    }
  });
};

// fukncija za dobijanje jednog posta
exports.getSinglePost = async (req, res) => {

  let postID = req.params.id;

  await Posts.findById({ _id: postID }, (err, data) => {
    if (err) {
      res.status(500).json({
        message:
          "Nesto nije u redu, pokusajte kasnije.",
      });
    } else {
      console.log(data);      
      res.status(200).json({
        message: "Citat pronadjen",
        data
      });
    }
  });
};

// funkcija za azuriranje posta
exports.updatePost = async (req, res) => {
  //postID.
  let postID = req.params.id;

  await Posts.findByIdAndUpdate({_id: postID}, {$set : req.body}, (err, data) => {
    if (err) {
      res.status(500).json({
        message:
          "Nesto nije u redu, pokusajte kasnije.",
      });
    } else {
      res.status(200).json({
        message: "Citat azuriran",
        data,
      });
    }
  });
}

// funkcija za brisanje posta iz baze podataka
exports.deletePost = async (req, res) => {
  let postID = req.params.id;

  await Posts.deleteOne({ _id: postID }, (err, data) => {
    if (err) {
      res.status(500).json({
        message:
          "Nesto nije u redu, pokusajte kasnije.",
      });
    } else {
      res.status(200).json({
        message: "Citat obrisan"
      });
    }
  });
};
