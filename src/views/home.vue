<template>
  <article class="md:container md:mx-auto bg-slate-600">
    <header>
      <h1>ทดลองใช้ vuex</h1>
    </header>
    <section>
      <div>ค่าใน stor state count {{ $store.getters.getCounter }}</div>
      <buttonCounter/>
    </section>
  </article>
</template>

<script>
import buttonCounterVue from '@/components/buttonCounter.vue';
export default {
    components:{
        buttonCounter:buttonCounterVue
    }
}
</script>

<style>

</style>