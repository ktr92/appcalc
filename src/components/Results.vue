<template>
   <div class="container">
    <table>
      <tr v-for="row in res" :key="row.id">
        <td>{{ row.name }}</td>
        <td>{{ row.category[type].age[age].count }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { useStore } from "vuex";
import {reactive, ref, computed, watch} from 'vue'
import Form from './Form.vue'

export default {
  name: 'Results',
  components: {
    Form 
  },
  setup() {
    const store = useStore()
    const res = computed(() => store.getters.getResults())
    const type = computed(() => store.getters.getSelectedType())
    const age = computed(() => store.getters.getSelectedAge())
    

     watch(() => {
       console.log(age.value)
    }) 

    
    return {
     res, type, age
    }

  }
}
</script>

<style>
  
</style>