<template>
  <article class="md:container md:mx-auto bg-slate-600">
    <header>
      <h1>ทดลองใช้ vuex</h1>
    </header>
    <section>
      <div>ค่าใน stor state count {{ getCounter }}</div>
      <buttonCounter/>
    </section>
  </article>
</template>

<script>
import buttonCounterVue from '@/components/buttonCounter.vue';
import { mapGetters } from 'vuex';
export default {
    components:{
        buttonCounter:buttonCounterVue
    },
    computed:{
      ...mapGetters('counterMod',['getCounter'])
    }
}
</script>

<style>

</style>