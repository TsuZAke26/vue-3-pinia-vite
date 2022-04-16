import { watch } from 'vue';

function useWatchCharacters(value: any, maxLength: number = 100) {
  watch(value, (newValue) => {
    console.log(newValue.length);
    if (newValue.length === maxLength) {
      alert("You've reached the maximum number of characters");
    }
  });
}

export { useWatchCharacters };
