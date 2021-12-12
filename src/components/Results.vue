<template>
  <div>
    <table>
      <tr v-for="row in res" :key="row.id">
        <td>{{ row.name }}</td>
        <td>{{ row.category[type].count }}</td>
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
    const type = computed(() => store.getters.getSelectedType())
    const res = computed(() => store.getters.getResults())
    return {
     res, type
    }

  }
}
</script>

<style>

</style>