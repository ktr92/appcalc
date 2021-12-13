<template>
   <div class="container">
    <table>
      <tr v-for="row in res" :key="row.id">
        <td>{{ row.name }}</td>
        <td v-if="pregnant && pregnant != '0'">P {{ row.category[type].age[age].stage[pregnant].count }} </td>
        <td v-else>{{ row.category[type].age[age].count }}</td>
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
    const pregnant = computed(() => store.getters.getSelectedPregnant())

     watch(() => {
       console.log()
    }) 

    
    return {
     res, 
     type, 
     age, 
     pregnant
    }

  }
}
</script>

<style>
  
</style>