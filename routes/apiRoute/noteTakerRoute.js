//Express
const router = require('express').Router();
// path
const path = require('path');
//UUID
const { v4: uuidv4 } = require('uuid');
// db
let notesArray = require('../../db/db.json');
// to create or delete a note
const { createNote, deleteNote, indexID } = require('../../lib/noteTaker');
// fetch db
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../db/db.json'));
});
//delte note
router.delete('/notes/:id', (req, res) => {
    //index find and destroy

    const note = deleteNote(req.params.id)
    res.json(note);
});
//need to push into notes array
router.post('/notes', (req, res) => {
    //UUID
    req.body.id = uuidv4();
    //create note
    const note = createNote(req.body);
    res.json(note)

});
//export
module.exports = router;