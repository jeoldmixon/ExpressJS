// needs fs
const fs = require('fs');
// needs path
const path = require('path');
// create note
function createNote(body, notesArray) {
    var note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, 'db/db.json'),
        JSON.stringify({ note: notesArray }, null, 2));
    return note;
};
// delete note
function deleteNote(index, notesArray) {
    //explore UUID for this to delete from array
};
//Index of note object
function indexID(id, notesArray) {
    // filter array??
    // return index value??
    return index;
};