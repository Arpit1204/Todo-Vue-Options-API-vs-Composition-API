<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h3>You have {{ todosCount }} Todos!</h3>
    <div>
      <input
        @keyup.enter="addTodo"
        v-model="newTodo"
        type="text"
        placeholder="Add a Todos"
      />
    </div>
    <div>
      <ul v-for="(todo, index) in todos" :key="todo.id">
        <li>
          <span>{{ todo.name }}</span>
          <button @click="deleteTodo(index)">X</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";

export default {
  setup() {
    let newTodo = ref("");
    let matchedWord = ref(null);
    let todos = ref([
      {
        id: 1,
        name: "One",
      },
      {
        id: 1,
        name: "Two",
      },
      {
        id: 1,
        name: "Three",
      },
    ]);

    const swearWords = ["Idiot", "Murder", "Sucide", "Kill"];

    const addTodo = () => {
      let newTodoObj = {
        id: Date.now(),
        name: newTodo.value,
      };
      if (newTodo.value) {
        todos.value.push(newTodoObj);
      }
      newTodo.value = "";
    };

    const deleteTodo = (elt) => {
      todos.value.splice(elt, 1);
    };

    const todosCount = computed(() => {
      return todos.value.length;
    });

    watch(newTodo, (e) => {
      console.log(e);
      for (let i = 0; i < swearWords.length; i++) {
        if (newTodo.value.toLowerCase().includes(swearWords[i].toLowerCase())) {
          matchedWord.value = swearWords[i];
          newTodo.value = "";
          alert("Bad Word Detected 🚨 " + `"${matchedWord.value}"` + " !!!!");
        }
      }
    });
    return {
      newTodo,
      todos,
      swearWords,
      addTodo,
      deleteTodo,
      todosCount,
    };
  },
};
</script>


<style>
ul {
  list-style: none;
  padding: 0;
  width: 200px;
  margin: 20px auto 0;
}

li {
  border: 1px solid;
  display: flex;
  margin-bottom: 10px;
  align-items: center;
}

li span {
  flex-grow: 1;
}
</style>