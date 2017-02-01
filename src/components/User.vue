<template>
  <li :class="status">
    {{user.userName}}
  </li>
</template>

<script>
  export default {
    name: 'User',
    props: [
      'user',
    ],
    computed: {
      status() {
        return this.user.lastOnline > Date.now() - (60 * 1000) ? 'online' : 'offline';
      },
    },
  };
</script>

<style scoped>
  li.online:before {
    content: "• ";
    color: green;
  }
</style>
