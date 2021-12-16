<template>
  
    <table>
      <thead>
        <tr>
          <th>Энергия</th>
          <th>Потребность</th>
        </tr>
      </thead>
      <tbody>
        <tr >
          <td>Калорийность </td>
          <td>{{ calories }} ккал</td>
        </tr>
      </tbody>      
    </table>
    <table>
      <thead>
        <tr>
          <th>Витамины</th>
          <th>Потребность</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in vitamins" :key="row.id">
        <td>{{ row.name }}</td>
        <td v-if="pregnant && pregnant !== '0'">{{ row.category[type].age[age].stage[pregnant].count }} </td>
        <td v-else>{{ row.category[type].age[age].count }}</td>
      </tr>
      </tbody>      
    </table>
    <table>
      <thead>
        <tr>
          <th>Минералы</th>
          <th>Потребность</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in minerals" :key="row.id">
        <td>{{ row.name }}</td>
        <td v-if="pregnant && pregnant !== '0'">{{ row.category[type].age[age].stage[pregnant].count }} </td>
        <td v-else>{{ row.category[type].age[age].count }}</td>
      </tr>
      </tbody>      
    </table>

    
    
 
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
    const vitamins = computed(() => store.getters.getVitamins())
    const minerals = computed(() => store.getters.getMinerals())
    const type = computed(() => store.getters.getSelectedType())
    const age = computed(() => store.getters.getSelectedAge())
    const pregnant = computed(() => store.getters.getSelectedPregnant())
    const calories = computed(() => store.getters.getCalories())

     watch(() => {
       console.log()
    }) 
    
    return {
     vitamins, 
     minerals,
     type, 
     age, 
     pregnant,
     calories
    }

  }
}
</script>

<style scoped>

  table tr td:first-child {
    width: 70%;
  }
  table {
    margin-bottom: 20px;
    margin-top: 10px;
  }

  table thead th {
    font-size: 20px;
  }

  td, th {
    padding: 4px 5px;
  }
 
</style>