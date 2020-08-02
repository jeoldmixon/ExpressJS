// needs fs
const fs = require("fs");
// needs path
const path = require("path");
//notes array
let notesArray = require("../db/db.json");
// create note
function createNote(note) {
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(notesArray, null, 2)
    );
    return note;
}
// delete note
//router
function deleteNote(data) {
    //explore UUID for this to delete from array
    //filter through array & find id === remove that id

    notesArray = notesArray.filter((note) => note.id !== data);
    // check out createNote for how to update the db (hint: it might be very similar if not the same.  Just make sure logically)
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(notesArray, null, 2)
    );
    return notesArray;
}

module.exports = { createNote, deleteNote };