<template>
  <button @click="increment(3)">เพิ่มค่าขึ้น</button>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods:{
    ...mapActions(['increment'])
  }

}
</script>

<style>

</style>