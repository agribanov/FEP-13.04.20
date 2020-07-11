$(function () {
    const URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers';

    let notes = [];
    const noteTemplate = $('#noteTemplate').html();
    const $field = $('#field');
    const dialog = $('#dialog-form').dialog({
        autoOpen: false,
        height: 400,
        width: 350,
        modal: true,
        buttons: {
            'Create Note': addNote,
            Cancel: function () {
                dialog.dialog('close');
            },
        },
        close: function () {
            form[0].reset();
        },
    });
    const form = dialog.find('form').on('submit', onFormSubmit);

    $('#addNoteBtn').on('click', () => dialog.dialog('open'));
    $field.on('click', '.delete-note', onDeleteNoteClick);
    $field.on('focusout', '.edit-note-control', onNoteFocusout);

    init();

    function init() {
        getNotes();
    }

    function getNotes() {
        fetch(URL)
            .then((res) => res.json())
            .then(setNotes)
            .then(renderNotes);
    }

    function setNotes(data) {
        return (notes = data);
    }

    function renderNotes(notes) {
        notes.forEach(renderNote);
    }

    function onFormSubmit(event) {
        event.preventDefault();
        addNote();
    }

    function onDeleteNoteClick() {
        const $note = $(this).closest('.note');
        const noteId = $note.data('id');

        deleteNoteElement(noteId);

        deleteNote(noteId);
    }

    function onNoteFocusout() {
        const $el = $(this);
        const $note = $el.closest('.note');
        const noteId = $note.data('id');

        changeNote(noteId, { description: $el.val() });
    }

    function deleteNoteElement(id) {
        console.log('deleteNoteElement', id, $(`.note[data-id="${id}"]`));
        const $note = $(`.note[data-id="${id}"]`);
        $note.remove();
    }

    function addNote() {
        const note = {
            x: 50,
            y: 50,
            width: 100,
            height: 250,
        };

        form.serializeArray().forEach((v) => (note[v.name] = v.value));
        createNote(note);

        dialog.dialog('close');
    }

    function deleteNote(id) {
        notes = notes.filter((note) => note.id !== id);
        deleteNote(id);
    }

    function renderNote(note) {
        const $note = $(
            noteTemplate
                .replace('{{id}}', note.id)
                .replace('{{title}}', '#' + note.id)
                .replace('{{description}}', note.description)
        ).css({
            left: note.x,
            top: note.y,
            width: note.width,
            height: note.height,
        });
        $field.append($note);

        $note
            .draggable({
                handle: 'h5',
                stop: function (e, ui) {
                    changeNote(note.id, {
                        x: ui.position.left,
                        y: ui.position.top,
                    });
                },
            })
            .resizable({
                stop: function (e, ui) {
                    changeNote(note.id, ui.size);
                },
            });
    }

    function changeNote(id, changes) {
        const note = { ...notes.find((item) => item.id == id), ...changes };
        notes = notes.map((item) => (item.id != id ? item : note));

        console.log(id, note, changes);

        updateNote(note);
    }

    function createNote(note) {
        return fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        })
            .then((res) => res.json())
            .then((data) => {
                notes.push(data);
                renderNote(data);
            });
    }

    function updateNote(note) {
        return fetch(URL + '/' + note.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        });
    }

    function deleteNote(id) {
        return fetch(URL + '/' + id, {
            method: 'DELETE',
        });
    }
});
