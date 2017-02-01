<template>
  <input
    id="message"
    placeholder="Say hello!"
    v-model="message"
    @keydown.enter="onKeyDown"
    type="text"
  />
</template>

<script>
  export default {
    name: 'MessageInput',
    props: ['onSend'],
    methods: {
      onKeyDown() {
        if (this.message) {
          this.onSend(this.message);
          this.message = '';
        }
      },
    },
    data() {
      return {
        message: '',
      };
    },
  };
</script>

<style scoped>
  input {
    margin: 10px;
    padding: 10px;
    font-size: 18px;
  }
</style>
