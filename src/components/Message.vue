<template>
  <li class="message">
    <span>{{message.userName}} <small>{{time}}</small></span>
    <p>{{message.message}}</p>
  </li>
</template>

<script>
  import leftPad from 'left-pad';

  export default {
    props: [
      'message',
    ],
    computed: {
      time() {
        const time = new Date(this.message.timestamp);
        return `${time.getHours()}:${leftPad(time.getMinutes(), 2, '0')}`;
      },
    },
    name: 'Message',
  };
</script>

<style scoped>
  .message span {
    font-weight: bold;
  }

  .message small {
    font-size: 10px;
    color: #999;
    font-weight: normal;
  }
</style>
