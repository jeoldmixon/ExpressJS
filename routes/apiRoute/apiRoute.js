// api to GET / POST / Delete / specific ID
// UUID

//Express 
const router = require('express').Router();
//Notes Route
const notesRoute = require('../noteTakerRoute');
// route file
router.use(noteTakerRoute);
//export
module.exports = router;