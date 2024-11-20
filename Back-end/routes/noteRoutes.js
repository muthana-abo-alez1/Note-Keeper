const express = require('express');
const { createNote, getNotes, updateNote, deleteNote ,getNoteById ,searchNotes} = require('../controllers/noteController');
const router = express.Router();

router.post('/', createNote);

router.get('/', getNotes);

router.put('/:id', updateNote);

router.delete('/:id', deleteNote);

router.get('/search', searchNotes);

router.get('/:id', getNoteById);



module.exports = router;
