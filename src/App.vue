<template>
  <v-app>
    <v-main>
      <v-container style="max-width: 640px">
        <v-card >
          <v-card-title>Person Details</v-card-title>
          <v-card-text>
            <v-field v-model="person.firstName" label="First Name" />
            <v-field v-model="person.lastName" label="Last Name" />

            <div>Address</div>
            <v-text-field v-model="person.address.street" label="Street" />
            <v-text-field v-model="person.address.city" label="City" />
            <v-text-field v-model="person.address.city" label="Country" />

            <div>Children</div>
            <v-btn @click="addChild">Add Child</v-btn>
            <!-- v-for repeats it for each entry -->
            <div v-for="(child, index) in person.children" :key="index">
              <v-text-field v-model="child.firstName" label="First Name" />
              <v-text-field v-model="child.lastName" label="Last Name" />
              <v-btn @click="removeChild(index)">Remove Child</v-btn>
            </div>

            <!-- saving to console... hopefully -->
            <v-btn @click="savePerson">Save</v-btn>
          </v-card-text>
        </v-card>

        <v-snackbar v-model="showSavedMessage" :timeout="3000">
          Person saved — see the browser console for the JSON payload.
        </v-snackbar>
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

  function savePerson(): void {
    console.log('Saving person:', JSON.stringify(person, null, 2))
    showSavedMessage.value = true
  }
</script>
