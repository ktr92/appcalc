<template>
 
    <form>
      <div class="radiogroup">
        <div class="radiogroup__item"  v-for="item in types" :key="item" >
           <input 
              class="with-gap"
              name="inputType"
              :id="item.type"
              type="radio"  
              :value="item.type" 
              v-model="inputType"
              @change="recalcformula"
              >
          <label :for="item.type">
            <span>{{ item.label }}</span>
          </label>
        </div><!-- /.radiogroup__ -->
       
      </div><!-- /.radiogroup -->

      <div class="input-field col s12" v-show="isWomen">
        <select v-model="isPregnant" @change="recalcformula">
          <option value="0" selected>Нет</option>
          <option value="1">Беременность (1-я половина)</option>
          <option value="2">Беременность (2-я половина)</option>
          <option value="3">Грудное вскармливание (1-6 мес.)</option>
          <option value="4">Грудное вскармливание (7-12 мес.)</option>
        </select>
        <label>Беременность</label>
      </div>

    <!--   <p class="range-field">
        <label>Укажите возраст</label>
        <input type="range" min="18" max="99" 
           v-model="inputAge"
          @input="recalcformula"
         />
      </p> -->

      <div class="range">
        <label for="" >Укажите возраст</label>
            <Slider class="slider-large"
              :lazy="false"
              :min="18"
              tooltipPosition="bottom"
              v-model="inputAge" 
              @update="recalcformula"
            />
      </div>

      <div class="range">
        <label for="">Укажите рост</label>
        <Slider class="slider-large"
        :lazy="false"  
         tooltipPosition="bottom"
        v-model="inputHeight" 
        :min="110"
        :max="230"
        @update="recalcformula"/>
      </div>
    
       <div class="range">
        <label for="">Укажите вес</label>
        <Slider class="slider-large"
        :lazy="false"  
        tooltipPosition="bottom"
        v-model="inputWeight" 
        :min="30"
        :max="190"
        @update="recalcformula"/>
      </div>
      
      <div class="form-group" v-show="0">
        
        <label for="">Укажите цель</label>
        <div class="radiogroup">
          
          <div class="radiogroup__item"  v-for="item in target" :key="item.id" >
            <input 
                class="with-gap"
                name="inputTarget"
                :id="item.id"
                type="radio"  
                :value="item.kef" 
                v-model="inputTarget"
                @change="reformula"
                >
            <label :for="item.id">
              <span>{{ item.name }}</span>
            </label>
          </div><!-- /.radiogroup__ -->
        
        </div><!-- /.radiogroup -->
      </div><!-- /.form-group -->


      <div class="form-group">
        
        <label for="">Укажите вашу повседневную активность</label>
        <div class="radiogroup">
          
          <div class="radiogroup__item"  v-for="item in activity" :key="item" >
            <input 
                class="with-gap"
                name="inputActivity"
                :id="item.id"
                type="radio"  
                :value="item.value" 
                v-model="inputActivity"
                @change="reformula"
                
                >
            <label :for="item.id">
              <span>{{ item.name }}</span>
            </label>
          </div><!-- /.radiogroup__ -->
        
        </div><!-- /.radiogroup -->
      </div><!-- /.form-group -->


    </form>

</template>

<script>
import { useStore } from "vuex";
import { onMounted, onUpdated, ref, computed, watch } from "vue";
import M from 'materialize-css'
import Slider from '@vueform/slider'
import "@vueform/slider/themes/default.css"

export default {
  name: 'Form',
  components: {
    Slider
  },
   setup() {
    const valid = true
    const store = useStore()
    const types = store.getters.getType
    let inputType = ref('men')
    let inputAge = ref(40)
    let isPregnant = ref("0")
    let inputHeight = ref(170)
    let inputWeight = ref(60)
    let inputActivity = ref(1.55)
    let inputTarget = ref([0.3, 0.3, 0.4])
    const activity = computed(() => store.getters.getActivity())
    const target = computed(() => store.getters.getTarget())
    const volokna = computed(() => store.getters.getVolokna())

    const test = () => {
      console.log('test')
    }

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
      if (inputType.value == "men") {
          isPregnant.value = "0"
        }
        store.commit('formula', {
          type: inputType.value,
          height: inputHeight.value,
          weight: inputWeight.value,
          age: inputAge.value,
          activity: inputActivity.value,
          target: inputTarget.value
        }) 
        

    }


    const recalcformula = () => {
       if (inputType.value == "men") {
          isPregnant.value = "0"
        }

       

        
       store.commit('calc', {
          type: inputType.value,
          age: inputAge.value,
          pregnant: isPregnant.value
        }) 

        store.commit('formula', {
          type: inputType.value,
          height: inputHeight.value,
          weight: inputWeight.value,
          age: inputAge.value,
          activity: inputActivity.value,
          target: inputTarget.value
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


   
    onUpdated(() => {
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems);
    })
    
    onMounted(() => {
  
      M.AutoInit()
  /*     var array_of_dom_elements = document.querySelectorAll("input[type=range]");
      M.Range.init(array_of_dom_elements); */
      
      store.commit('calc', {
        type: inputType.value,
        age: inputAge.value,
        pregnant: isPregnant.value
      }) 

      store.commit('formula', {
        type: inputType.value,
        height: inputHeight.value,
        weight: inputWeight.value,
        age: inputAge.value,
        activity: inputActivity.value,
       target: inputTarget.value
      }) 
   
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
      inputActivity,
      recalcformula,
      activity,
      inputTarget,
      target,
      volokna,
      test
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
.input-field.col.s12 {
    padding-left: 0;
}
.input-field.col label {
    left: 0;
    font-size: 1.4rem;
    font-weight: 400;
    top: -36px;
}
p.range-field label {
  font-size: 1rem;
}
.radiogroup {
    margin-bottom: 20px;
}
.radiogroup label {
    margin-right: 30px;
}
form > * {
  margin-bottom: 30px;
}

input[type=range]::-webkit-slider-thumb {
    background-color: red;
  }
  input[type=range]::-moz-range-thumb {
    background-color: red;
  }
  input[type=range]::-ms-thumb {
    background-color: red;
  }

  /***** These are to edit the thumb and the text inside the thumb *****/
  input[type=range] + .thumb {
    background-color: #dedede;
  }
  input[type=range] + .thumb.active .value {
    color: red;
  }

  .range {
    margin-bottom: 35px;
  }

  .range label {
        font-size: 1.3rem;
    margin-bottom: 10px;
    display: block;
  }

.form-group {
    margin-bottom: 30px;
  }

  .form-group label {
        font-size: 1.3rem;
    margin-bottom: 10px;
    display: block;
  }

  /*
  Hide radio button (the round disc)
  we will use just the label to create pushbutton effect
*/
input[type=radio] {
    display:none; 
    margin:10px;
}

/*
  Change the look'n'feel of labels (which are adjacent to radiobuttons).
  Add some margin, padding to label
*/
input[type=radio] + label {
    display:inline-block;
    margin:-2px;
    padding: 8px 20px;
    background-color: #e7e7e7;
    border-color: #ddd;
    font-size: 16px;
    cursor: pointer;
    color: #585858;
    margin-right: 5px;
}
/*
 Change background color for label next to checked radio button
 to make it look like highlighted button
*/
input[type=radio]:checked + label { 
   background-image: none;
    background-color: #10b981;
    color: #fff;
     border-color: #10b981
}

.radiogroup {
    display: flex;
}



.slider-large {
 --slider-handle-width: 25px;
 --slider-handle-height: 25px;
}
</style>
