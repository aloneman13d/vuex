<template>
  <button @click="increment">เพิ่มค่าขึ้น</button>
</template>

<script>

export default {
  methods:{
    increment(){
      this.$store.dispatch('increment',3)
    }
  }

}
</script>

<style>

</style>