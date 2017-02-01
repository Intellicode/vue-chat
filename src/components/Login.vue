<template>
  <div class="login">
    <h1>Welcome to Sytac chat!</h1>
    <h2>Please log in</h2>
    <button @click="onPress">Sign in</button>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    props: ['onPress'],
  };
</script>

<style scoped>
  .login {
    margin: 100px auto;
    width: 500px;
  }

  .login button {
    border: 1px solid #ddd;
    font-size: 18px;
    background-color: #f3f3f3;
    padding: 10px;
    margin: 10px;
  }
</style>
