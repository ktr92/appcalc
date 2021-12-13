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
            @change="recalc"
            >
          <span>{{ item.label }}</span>
        </label>
       
      </div><!-- /.radiogroup -->

      <div class="input-field col s12" v-show="isWomen">
        <select v-model="isPregnant" @change="recalc">
          <option value="0" selected>Нет</option>
          <option value="1">Беременность (1-я половина)</option>
          <option value="2">Беременность (2-я половина)</option>
          <option value="3">Грудное вскармливание (1-6 мес.)</option>
          <option value="4">Грудное вскармливание (7-12 мес.)</option>
        </select>
        <label>Беременность</label>
      </div>

      <p class="range-field">
        <label>Укажите возраст</label>
        <input type="range" min="18" max="99" 
           v-model="inputAge"
          @input="recalc"
         />
      </p>

      <p class="range-field">
        <label>Укажите ваш рост (см)</label>
        <input type="range" min="100" max="250" 
           v-model="inputHeight"
          @input="reformula"
         />
      </p>

       <p class="range-field">
        <label>Укажите ваш вес (кг)</label>
        <input type="range" min="25" max="250" 
           v-model="inputWeight"
          @input="reformula"
         />
      </p>

      <div class="input-field col s12">
        <select v-model="inputActivity" @change="reformula">
          <option value="1.2" >Минимальная активность</option>
          <option value="1.375">Слабая активность</option>
          <option value="1.55" selected>Средняя активность</option>
          <option value="1.725">Высокая активность</option>
          <option value="1.9">Экстра-активность</option>
        </select>
        <label>Уровень активности</label>
      </div>


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
    const valid = true
    const store = useStore()
    const types = store.getters.getType
    let inputType = ref('men')
    let inputAge = ref(33)
    let isPregnant = ref("0")
    let inputHeight = ref(170)
    let inputWeight = ref(60)
    let inputActivity = ref(1.55)
    
    const recalc = () => {
      if (inputType.value == "men") {
          isPregnant.value = "0"
        }
        store.commit('calc', {
          type: inputType.value,
          age: inputAge.value,
          pregnant: isPregnant.value
        }) 
    }

    const reformula = () => {
        store.commit('formula', {
          type: inputType.value,
          height: inputHeight.value,
          weight: inputWeight.value,
          age: inputAge.value,
          activity: inputActivity.value
        }) 
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
       console.log(isPregnant.value)
      
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
      types, 
      inputType, 
      inputAge, 
      isWomen, 
      isPregnant, 
      recalc, 
      reformula,
      inputWeight,
      inputHeight,
      inputActivity
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
