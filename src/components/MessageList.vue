<template>
  <ul class="messages">
     <Message v-for="item in messages" v-bind:message="item" />
  </ul>
</template>

<script>
  import Message from './Message';

  export default {
    name: 'MessageList',
    props: ['messages'],
    components: {
      Message,
    },
  };
</script>

<style scoped>
  ul {
    padding: 10px;
    flex: 1 1 auto;
    overflow-y: auto;
    min-height: 0;
  }
</style>
