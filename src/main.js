// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

const chatApi = new ChatApi(); // eslint-disable-line
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<app :chat-api="chatApi" />',
  components: { App },
  data() {
    return {
      chatApi,
    };
  },
});
