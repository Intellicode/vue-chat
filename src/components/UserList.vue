<template>
  <ul class="users">
    <user v-for="item in userList" v-bind:user="item"  />
  </ul>
</template>

<script>
  import User from './User';

  export default {
    name: 'UserList',
    props: ['users'],
    computed: {
      userList() {
        return Object.keys(this.users).map(user => this.users[user]);
      },
    },
    components: {
      User,
    },
  };
</script>

<style scoped>
  .users {
    padding: 10px;
    margin: 0;
    list-style: none;
  }
</style>
