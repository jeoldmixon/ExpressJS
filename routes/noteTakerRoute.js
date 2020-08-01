//Express
const router = require('express').Router();
//UUID
import { v4 as uuidv4 } from 'uuid';
// DB JSON
const { notes } = require('../db/db.json');
// to create or delete a note
const { createNote, deleteNote } = require('../lib/noteTaker');
// fetch db
router.get('/notes', (req, res) => {
    var results = notes;
    res.json(results);
});
//delte note
router.delete('/notes/:id', (req, res) => {
    var results = notes;
    //index find and destroy
    const index = findByID(req.params.uuid, notes);
    if (index == true) {
        deleteNote(index, notes);
        res.json(results);
    } else {
        res.sendStatus(404);
    }
});
//need to push into notes array
router.post('/notes', (req, res) => {
    //UUID
    var noteIndexID = notes.uuid.v4([]);
    //create note
    const note = createNote(req.body, notes);
});
//export
module.exports = router;