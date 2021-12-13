<template>
  <div class="container">
    <form>
      <div class="radiogroup">
        <label v-for="item in types" :key="item" :for="item.type">
          <input 
            class="with-gap"
            name="inputType"
            :id="item.type"
            type="radio"  
            :value="item.type" 
            v-model="inputType"
            @change="changeType"
            >
          <span>{{ item.label }}</span>
        </label>
       
      </div><!-- /.radiogroup -->

      <div class="input-field col s12" v-if="isWomen">
        <select v-model="isPregnant" @change="changePregnant">
          <option value="0" selected>Нет</option>
          <option value="1">Беременность (1-я половина)</option>
          <option value="2">Беременность (2-я половина)</option>
          <option value="3">Грудное вскармливание (1-6 мес.)</option>
          <option value="4">Грудное вскармливание (7-12 мес.)</option>
        </select>
        <label>Беременность</label>
      </div>

      <p class="range-field">
        <label for="test">Укажите возраст</label>
        <input type="range" min="18" max="99" 
           v-model="inputAge"
          @input="changeAge"
         />
      </p>
    </form>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { onMounted, onUpdated, ref, computed, watch } from "vue";
import M from 'materialize-css'



export default {
  name: 'Form',
  components: {
    
  },
   setup() {
    const marks = [18, 30, 50, 70, 90]
    const valid = true
    const store = useStore()
    const types = store.getters.getType
    let inputType = ref('men')
    let inputAge = ref(33)
    let isPregnant = ref(null) 

    const changeType = () => {
      isPregnant.value = '0'
      store.commit('calcResultsPregnant', isPregnant.value) 
      store.commit('calcResults', inputType.value)
    }
    const changeAge = () => {
      store.commit('calcResultsPregnant', isPregnant.value) 
      store.commit('calcResultsAge', inputAge.value) 
    }
    const changePregnant = () => {
      store.commit('calcResultsPregnant', isPregnant.value) 
    }

    const isWomen = computed(() => store.getters.getIsWomen())

    /* const currentType = computed({
      get() {
        return store.getters.getSelectedType()
      },
      set(inputType) {
         store.commit('calcResults', inputType.value)
      }
    })
     */


    watch(() => {
       console.log()
      
    }) 

    onUpdated(() => {
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems);
    })
    
    onMounted(() => {
      M.AutoInit()
      var array_of_dom_elements = document.querySelectorAll("input[type=range]");
      M.Range.init(array_of_dom_elements);
   
    })

    return {
      types, changeType, inputType, changeAge, marks, inputAge, isWomen, isPregnant, changePregnant
    }
  },
  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
