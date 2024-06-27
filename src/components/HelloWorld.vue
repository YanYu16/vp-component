<template>
  <div class="hello">
    <el-input v-filter-emoji="value" v-model="value" />
    <div>{{ value }}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      value: 'Hello 😊 World! 🌍'
    }
  },
  mounted() {
    console.log('Component mounted!')
  }
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
