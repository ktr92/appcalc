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
        <tr >
          <td>Белки </td>
          <td>{{ proteins }} г</td>
        </tr>
        <tr >
          <td>Жиры </td>
          <td>{{ fats }} г</td>
        </tr>
        <tr >
          <td>Углеводы </td>
          <td>{{ carbohydrates }} г</td>
        </tr>
         <tr >
          <td>Пищевые волокна </td>
          <td>{{ volokna }} г</td>
        </tr>        
        <tr >
          <td>МНЖК </td>
          <td>{{ mnjk }} г</td>
        </tr>
        <tr >
          <td>ПНЖК </td>
          <td>{{ pnjk[0] }} - {{ pnjk[1] }} г</td>
        </tr>
        <tr >
          <td>Омега-6 </td>
          <td>{{ omega6[0] }} - {{ omega6[1] }} г</td>
        </tr>
        <tr >
          <td>Омега-3 </td>
          <td>{{ omega3[0] }} - {{ omega3[1] }} г</td>
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
        <td v-if="pregnant && pregnant !== '0'">{{ row.category[type].stage[pregnant].count }} </td>
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
        <td v-if="pregnant && pregnant !== '0'">{{ row.category[type].stage[pregnant].count }} </td>
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
    const proteins = computed(() => store.getters.getProteins())
    const fats = computed(() => store.getters.getFats())
    const carbohydrates = computed(() => store.getters.getCarbohydrates())
    const volokna = computed(() => store.getters.getVolokna())
    const pnjk = computed(() => store.getters.getPNJK())
    const mnjk = computed(() => store.getters.getMNJK())
    const omega3 = computed(() => store.getters.getOmega3())
    const omega6 = computed(() => store.getters.getOmega6())
    const lipides = computed(() => store.getters.getLipides())

     watch(() => {
       console.log()
    }) 
    
    return {
     vitamins, 
     minerals,
     type, 
     age, 
     pregnant,
     calories,
     proteins,
     fats,
     carbohydrates,
     volokna,
     mnjk,
     pnjk,
     omega3,
     omega6,
     lipides
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