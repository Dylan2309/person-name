<template>
  <v-app>
    <v-main class="bg-grey-lighten-4">
      <v-container style="max-width: 640px">
        <v-card >
          <v-card-title>Person Details</v-card-title>
          <v-card-text>
            <v-text-field v-model="person.firstName" label="First Name" />
            <v-text-field v-model="person.lastName" label="Last Name" />

            <div class="text-subtitle-1 mt-4 mb-2">Address</div>
            <v-text-field v-model="person.address.street" label="Street" />
            <v-text-field v-model="person.address.city" label="City" />
            <v-text-field v-model="person.address.country" label="Country" />

            <!-- ref for buttons https://vuetifyjs.com/en/components/buttons/#ripple-->
            <div class="text-subtitle-1 mt-4 mb-2">Children</div>
            <v-btn color="success" variant="flat" @click="addChild">Add Child</v-btn>
            <!-- v-for repeats it for each entry -->
            <div v-for="(child, index) in person.children" :key="index">
              <v-text-field v-model="child.firstName" label="First Name" />
              <v-text-field v-model="child.lastName" label="Last Name" />
              <v-btn color="error" variant="flat" @click="removeChild(index)">Remove Child</v-btn>
            </div>
          </v-card-text>
          <v-card-actions class="justify-center">
            <!-- saving to console... hopefully -->
            <v-btn color="primary" variant="elevated" size="large" block @click="savePerson">Save</v-btn>
          </v-card-actions>
        </v-card>

        <!-- snackbar is a popup message - https://vuetifyjs.com/en/components/snackbars/#prepend-icon-->
        <v-snackbar v-model="showSavedMessage" :timeout="3000" prepend-icon="mdi-check-circle" color="success">
          Person Saved
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
  const showSavedMessage = ref(false);

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
