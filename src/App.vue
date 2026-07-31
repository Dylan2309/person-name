<template>
  <v-app>
    <v-main>
      <v-container style="max-width: 640px">
        <v-card >
          <v-card-title>Person Details</v-card-title>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import { createEmptyPerson } from './types/person';
  const person = reactive(createEmptyPerson());
  // is the popup visible?
  const showSaveMessage = ref(false);

  function addChild(): void {
    person.children.push({firstName: '', lastName: ''});
  }

  // removing child at specific place
  // splice(index, 1) means starting at 'index', remove 1
  function removeChild(index: number): void {
    person.children.splice(index, 1);
  }

</script>
