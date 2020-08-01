//Express
const router = require('express').Router();
// DB JSON
const { notes } = require('../db/db.json');
// to create or delete a note
const { createNote, deleteNote } = require('../lib/noteTaker');
// fetch db
router.get('/notes', (req, res) => {
    var results = notes;
    res.json(results);
});
//need to push into notes array
router.post('/notes', (req, res) => {
    //UUID
    const note = createNote(req.body, notes);
});
//export
module.exports = router;