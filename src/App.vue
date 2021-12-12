<template>
  <div>
    <main>
      <Form />
      <Results />
    </main>
  </div>
</template>

<script>
import Form from './components/Form.vue'
import { useStore } from "vuex";
import Results from './components/Results.vue';

export default {
  name: 'App',  
  components: {
    Form,
    Results,
  },
  setup() {
    const store = useStore()
  }
}
</script>
