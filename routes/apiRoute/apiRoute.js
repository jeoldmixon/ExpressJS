// api to GET / POST / Delete / specific ID
//UUID
import { v4 as uuidv4 } from 'uuid';
//Express 
const router = require('express').Router();
//Notes Route
const notesRoute = require('../noteTakerRoute');
// route file
router.use(noteTakerRoute);
//export
module.exports = router;