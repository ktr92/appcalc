<template>
  <div class="row">
    <div class="col s6 m6 l4" 
      v-for="supp in supps" :key="supp.id"
      v-show="(supp.who == type) && (+supp.ageTo >= +age) && (+supp.ageFrom <= +age) && (+supp.activity <= +activity)">
      <div class="card">
        <a :href="supp.url" target="_blank">
          <div class="card-image">
          <img :src="supp.img">
          <span class="card-title">{{ supp.name }}</span>
          
        </div>
        <div class="card-content">
          <p>{{ supp.description }}</p>
        </div>
        <div class="card-link">
          <span class="btn-floating halfway-fab waves-effect waves-light red">Заказать на iHerb</span>
        </div>
      </a>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { reactive, ref, computed, watch } from 'vue'

export default {
  setup() {
    const store = useStore()
    
    const type = computed(() => store.getters.getSelectedType())
    const supps = computed(() => store.getters.getAllSupplements())
    const age = computed(() => store.getters.getCurrentAge())
    const pregnant = computed(() => store.getters.getSelectedPregnant())
    const activity = computed(() => store.getters.getCurrentActivity())


    return {
      supps,
      type,
      age,
      activity
    }
  }
}
</script>

<style scoped>
.card {
  height: 100%;
  padding-bottom: 40px;
  
}
.col.s6.m6.l4 {
  margin-left: 0;
  margin-bottom: 20px;
}
.card-link {
  text-align: center;
}
.card .card-image img {
  height: initial;
    max-width: 145px;
    margin: 10px auto;
    top: 10px;
}
.card .card-image .card-title {
  position: inherit;
 color: #000;
    font-size: 13px;
    font-weight: 500;
    text-align: left;
    display: block;
    padding: 5px 14px;
    line-height: 1.2;
}
.btn-floating {
  background-color: #10b981 !important;
  border-radius: 8px !important;
  position: initial !important;
  margin: 0 auto 0 auto;
  display: inline-block;
  width: max-content;
  padding: 0 24px;
}
.card .card-content {
  padding: 5px 14px;
}
.card:hover {
      box-shadow: 0 2px 26px   0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);
}

.card .card-content p {
    margin: 0;
    font-size: 13px;
    line-height: 1.2;
      color: #959595;
}

.card-link {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    margin: auto;
}
</style>
