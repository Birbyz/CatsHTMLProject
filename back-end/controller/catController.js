let express = require('express')
let router = express.Router();

const catService = require('../service/catService');

// Create
router.post("/cats", (req, res) => {
    let newcat = catService.addcat(req.body);
    res.status(200).send(newcat);
  });
  
// Read One
router.get("/cats/:id", (req, res) => {
  const catsList = readJSONFile();
  // Fill in your code here
});

// Read All
router.get("/cats", (req, res) => {    //  req = request; res = response
  const catsList = catService.getAllcats();
  if (catsList!==undefined && catsList.length!==0) {
      res.status(200).send(catsList);
  } else {
      res.status(204).send('No cat found!');
  }
});

// Update
router.put("/cats/:id", (req, res) => {
  let foundcat = catService.updatecat(req.params.id, req.body.name, req.body.img);
  if (foundcat!==null) res.status(200).send(foundcat);
  else res.status(204).send('No cat found');
});
  
// Delete
router.delete("/cats/:id", (req, res) => {
    let foundcat = catService.removecat(req.params.id);
    if (foundcat!==null) res.status(200).send(foundcat);
    else res.status(204).send('No cat found');
});
  

module.exports = router;