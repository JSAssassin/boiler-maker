// routes/puppies.js
const router = require("express").Router();

// matches GET requests to /api/puppies/
router.get("/", function(req, res, next) {
  res.send("Hello World!");
});
// matches POST requests to /api/puppies/
router.post("/", function(req, res, next) {
  res.send(req.body);
});
// matches PUT requests to /api/puppies/:puppyId
router.put("/:puppyId", function(req, res, next) {});
// matches DELETE requests to /api/puppies/:puppyId
router.delete("/:puppyId", function(req, res, next) {});

module.exports = router;
