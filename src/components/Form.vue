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
            >
          <span>{{ item.label }}</span>
        </label>
       
      </div><!-- /.radiogroup -->
    </form>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { onMounted, onUpdated, ref, computed } from "vue";
import M from 'materialize-css'


export default {
  name: 'Form',
   setup() {
    const valid = true
    const store = useStore()
    const types = store.getters.getType
    let inputType = ref('men')

    const currentType = computed({
      get() {
        return store.getters.getSelectedType()
      },
      set(inputType) {
         store.commit('calcResults', inputType)
      }
    })
    
  

    onUpdated(() => {
     console.log(store.getters.getSelectedType())
    })
    
    onMounted(() => {
      M.AutoInit()
    })

    return {
      types,currentType,inputType
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
