<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Note Count:</td>
          <td>{{ storeNotes.noteCount }}</td>
        </tr>
        <tr>
          <td>Total Character Count:</td>
          <td>{{ storeNotes.totalCharacterCount }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <input
    v-model="userThoughtsText"
    class="input"
    maxlength="50"
    placeholder="Do you like Noteballs?"
    type="text"
    v-autofocus
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStoreNotes } from '@/stores/notes';
import { vAutofocus } from '@/directives/vAutofocus';

const storeNotes = useStoreNotes();

const userThoughtsText = ref('');
</script>
