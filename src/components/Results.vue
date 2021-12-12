<template>
  <div>
    <table>
      <tr v-for="row in res" :key="row.id">
        <td>{{ row.name }}</td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
import { useStore } from "vuex";
import {reactive, ref, computed} from 'vue'
import Form from './Form.vue'

export default {
  name: 'Results',
  components: {
    Form 
  },
  setup() {
    const store = useStore()
    const res = computed(() => store.getters.getResults())
    return {
     res
    }

  }
}
</script>

<style>

</style>