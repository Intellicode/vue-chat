<template>
  <chat
    v-if="user"
    :onSignOut="onSignOut"
    :messages="messages"
    :users="users"
    :onSend="onSend">
  </chat>
  <login v-else
    :onPress="onSignIn">
  </login>
</template>

<script>
import Chat from './components/Chat';
import Login from './components/Login';

export default {
  name: 'app',
  props: ['chatApi'],
  created() {
    this.chatApi.onAuth((user) => {
      if (user) {
        this.subscribe();
        this.user = user;
        this.subscribed = true;
      } else {
        this.unSubscribe();
        this.user = null;
        this.messages = [];
        this.subscribed = false;
      }
    });
  },
  computed: {
    isSignedIn() {
      return this.chatApi.isSignedIn();
    },
  },
  methods: {
    subscribe() {
      if (!this.subscribed) {
        this.subscribeToMessages();
        this.subscribeToUsers();
      }
    },
    unSubscribe() {
      if (this.subscribed) {
        this.onMessage.unSubscribe();
        this.onUserChanges.unSubscribe();
      }
    },
    subscribeToMessages() {
      this.onMessage = this.chatApi.onMessage((payload) => {
        const message = payload.val();
        this.messages.push(message);
      });
    },
    subscribeToUsers() {
      this.onUserChanges = this.chatApi.onUserChanges((payload) => {
        const user = payload.val();
        const users = { ...this.users };
        users[user.userName] = user;
        this.users = users;
      });
    },
    onSignIn() {
      this.chatApi.signIn();
    },
    onSignOut() {
      this.chatApi.signOut();
    },
    onSend(message) {
      this.chatApi.post(this.user, message);
    },
  },
  data() {
    return {
      messages: [],
      users: {},
      user: null,
    };
  },
  components: {
    Chat,
    Login,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  overflow: hidden;
  height: 100%;
  font-family: helvetica, sans-serif;
  font-size: 18px;
}

body {
  height: 100%;
  overflow: auto;
}

#root {
  height: 100%;
}
</style>
