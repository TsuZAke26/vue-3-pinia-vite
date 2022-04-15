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
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStoreNotes } from '@/stores/notes';

const storeNotes = useStoreNotes();
</script>
