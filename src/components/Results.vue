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
          <td :class="{greentext: isMore, redtext: isLess}">{{ calories }} ккал</td>
        </tr>
        <tr >
          <td>Белки </td>
          <td :class="{greentext: isMore, redtext: isLess}">{{ proteins }} г</td>
        </tr>
        <tr >
          <td>Жиры </td>
          <td :class="{greentext: isMore, redtext: isLess}">{{ fats }} г</td>
        </tr>
        <tr >
          <td>Углеводы </td>
          <td :class="{greentext: isMore, redtext: isLess}">{{ carbohydrates }} г</td>
        </tr>
         <tr >
          <td>Пищевые волокна </td>
          <td>{{ volokna }} г</td>
        </tr>        
        <tr >
          <td>МНЖК </td>
          <td :class="{greentext: isMore, redtext: isLess}">{{ mnjk }} г</td>
        </tr>
        <tr >
          <td>ПНЖК </td>
          <td :class="{greentext: isMore, redtext: isLess}">{{ pnjk[0] }} - {{ pnjk[1] }} г</td>
        </tr>
        <tr >
          <td>Омега-6 </td>
          <td :class="{greentext: isMore, redtext: isLess}">{{ omega6[0] }} - {{ omega6[1] }} г</td>
        </tr>
        <tr >
          <td>Омега-3 </td>
          <td :class="{greentext: isMore, redtext: isLess}">{{ omega3[0] }} - {{ omega3[1] }} г</td>
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
import { mapGetters, useStore } from "vuex";
import {reactive, ref, computed, watch, onMounted} from 'vue'
import Form from './Form.vue'

export default {
  
  name: 'Results',
  emits: ['anyChanges'],
  components: {
    Form 
  },
  setup(props, { emit }) {
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

    const isMore = ref(false)
    const isLess = ref(false)


     watch(
      () => calories.value,
       (newValue,  oldValue) => {
       if (newValue > oldValue) {
          isMore.value = true
          isLess.value = false
        }
        else if (newValue < oldValue) {
          isMore.value = false
          isLess.value = true
        }
        else {
          isMore.value = false
          isLess.value = false
        } 
        emit('anyChanges')
      }
    )

    onMounted(() => {
    /*   console.log('mounted') */
        
      isMore.value = false
      isLess.value = false
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
     lipides,
     isLess,
     isMore,
    }

  }
}
</script>

<style scoped>

  .bordered {
     box-shadow: 0 0 5px 0px #10b981;
  }

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

  .greentext {
    color:  #10b981;
    font-weight: bold;
  }

  .redtext {
    color: #ff7d7d;
    font-weight: bold;
  }
 
</style>