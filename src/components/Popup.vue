<template>
    <v-dialog max-width="600px" v-model="dialog" class="popup-wrapper">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="success"
          v-bind="attrs"
          v-on="on"
          small
        >
         Add New Project
        </v-btn>
      </template>
      <v-card class="popup">
        <v-card-title>
          <h4>Add a New Project</h4>
        </v-card-title>
        <v-card-text class="white--text">
          <v-form class="px-3" ref="form">
            <v-text-field dark label="title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
            <v-textarea dark class="textarea" label="Information" v-model="content" prepend-icon="mdi-pen" :rules="inputRulesTextarea"></v-textarea>
            
            <v-menu>
              <template v-slot:activator="{on, attrs}">
                <v-text-field
                  :rules="inputRules"
                  dark
                  :value="due"
                  v-model="due"
                  label="Due date" 
                  prepend-icon="mdi-calendar-range"
                  v-bind="attrs"
                  v-on="on"
                  class="text-field"
                ></v-text-field>
              </template>
              <v-date-picker v-model="due" scrollable></v-date-picker>
            </v-menu>
            
            <v-btn class="success mx-0 mt-3" @click="submit" :loading="loading">Add project</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
</template>
<script>
import db from '@/fb'

export default {
  data() {
    return {
      title: '',
      content: '',
      due: '',
      inputRules: [
        v => v.length >= 3 || "Minimum length is 3 characters"
      ],
      inputRulesTextarea: [
        v => v.length >= 15 || "Minimum length is 15 characters"
      ],
      loading: false,
      dialog: false
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const project = {
          title: this.title,
          content: this.content,
          due: this.due,
          person: 'Peremitin',
          status: 'ongoing'
        }
        db.collection('projects')
        .add(project)
        .then(() => {
          this.title = null;
          this.content = null;
          this.due = null;
          this.loading = false;
          this.dialog = false;
          this.$emit('addedTask');
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/styles/var.scss';

.v-dialog .v-card.popup {
  position: relative;
  background-color: transparent;
  color: rgb(255, 255, 255);
}
.v-dialog .v-card.popup::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: $backdropFilter;
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid rgba(209, 213, 219, 0.3);
  color: rgb(255, 255, 255);
  z-index: -1;
}
</style>