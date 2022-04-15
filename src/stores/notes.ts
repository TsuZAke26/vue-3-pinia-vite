import { defineStore } from 'pinia';

import type { INote } from '@/types/INote';

export const useStoreNotes = defineStore('notes', {
  state: () => {
    return {
      notes: [
        {
          id: 'id1',
          text: 'Lorem ipsum dolor is common placecholder text',
        },
      ],
    };
  },
  getters: {
    getNoteById: (state) => {
      return (id: string) => state.notes.find((note) => note.id === id);
    },
    noteCount: (state) => {
      return state.notes.length;
    },
    totalCharacterCount: (state) => {
      return state.notes.reduce(
        (previousValue, currentNote) => previousValue + currentNote.text.length,
        0
      );
    },
  },
  actions: {
    addNote(note: INote) {
      this.notes.unshift(note);
    },
    editNote(editedNote: INote) {
      const existingNoteIndex = this.notes.findIndex(
        (note) => note.id === editedNote.id
      );

      if (existingNoteIndex !== -1) {
        this.notes.splice(existingNoteIndex, 1, editedNote);
      }
    },
    deleteNote(id: string) {
      this.notes = this.notes.filter((note) => note.id !== id);
    },
  },
});
