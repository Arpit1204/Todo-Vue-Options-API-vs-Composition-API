<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h3>You have {{todosCount}} Todos!</h3>
    <div>
      <input
      @keyup.enter="addTodo"
        v-model="newTodo"
        type="text" 
        placeholder="Add a Todos">
    </div>
    <div>
      <ul v-for="(todo, index) in todos" :key="todo.id">
        <li>
          <span>{{todo.name}}</span>
          <button @click="deleteTodo(index)">X</button>
        </li>
        </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data(){
    return{
      newTodo:'',
      matchedWord:null,
      todos:[
        {
          id:1,
          name:'One'
        },
        {
          id:1,
          name:'Two'
        },
        {
          id:1,
          name:'Three'
        }
      ], 
      
      swearWords:['Idiot', 'Murder', 'Sucide' , 'Kill' ]
    }
  },
  methods:{
    addTodo(){
      let newTodoObj = {
        id:Date.now(),
        name:this.newTodo
      }
      if(this.newTodo){

        this.todos.push(newTodoObj)
      }
      this.newTodo = '';
    }, 
    deleteTodo(elt){
      this.todos.splice(elt, 1)
    }
  },
   computed:{
    todosCount(){
      return this.todos.length
    }
  }, 
  watch :{
    newTodo(newvalue){
      console.log(newvalue);
      for(let i=0; i<this.swearWords.length; i++){
        if(this.newTodo.toLowerCase().includes(this.swearWords[i].toLowerCase())){
          this.matchedWord = this.swearWords[i]
          this.newTodo = ''
        alert('Bad Word Detected 🚨 ' + `"${this.matchedWord}"` + ' !!!!')
        }
      }
      
        
        
      // }
    }
  }
  
}
</script>


  <style>
  ul{
    list-style: none;
    padding: 0;
    width: 200px;
    margin: 20px auto 0;
  }
  li{
    border: 1px solid;
    display: flex;
    margin-bottom: 10px;
    align-items: center;
  }
   li span{
    flex-grow: 1;
   }
  
  </style>