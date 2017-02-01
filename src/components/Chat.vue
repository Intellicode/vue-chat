  <template>
    <div class="chat">
        <header>
          <h1>#Sytac</h1>
          <button @click="onSignOut">Sign out</button>
        </header>
        <main>
          <section>
            <MessageList :messages="messages" />
            <MessageInput :onSend="onSend" />
          </section>
          <aside>
            <UserList :users="users" />
          </aside>
        </main>
    </div>
  </template>

<script>
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import UserList from './UserList';

export default {
  name: 'Chat',
  updated() {
    document.querySelectorAll('.messages')[0].scrollTop = 10000000; // eslint-disable-line
  },
  props: [
    'onSignOut',
    'onSend',
    'messages',
    'users',
  ],
  components: {
    MessageList,
    MessageInput,
    UserList,
  },
};
</script>

<style scoped>
  .chat {
    height: 100%;
  }

  header {
    position: fixed;
    height: 40px;
    padding: 10px;
    background: white;
    width: 100%;
    border-bottom: solid 1px #ddd;
    display: flex;
    flex-direction: row;
  }

  header h1 {
    font-size: 20px;
    margin-right: 10px;
  }

  main {
    padding-top: 40px;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
  }

  section {
    flex: 1;
    display: flex;
    height: 100%;
    flex-direction: column;
  }

  aside {
    width: 200px;
  }
</style>
