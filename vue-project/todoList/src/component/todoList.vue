<template>
    <div id="wrap">
        <div id="title">My TodoList</div>
        <div id="input">
          <input type="text" v-model="msg" @keydown="keydownSubmit($event)" class="text">
          <input type="button" @click='submit()' value="添加" class="submit">
        </div>
      <div id="todo-list">
          <div id="todo">
            <h2>进行中</h2>
            <ul>
              <li v-for='(item,key) in items' v-if='!item.checked'>
                <input type="checkbox" v-model='item.checked'>
                {{item.msg}}
                <input type="button" @click='delTodo(key)' class='cancel' value="X">
              </li>
            </ul>
          </div>
          <div id="done">
            <h2>已完成</h2>
            <ul>
              <li v-for='(item,key) in items'v-if='item.checked'>
                <input type="checkbox" v-model='item.checked'>
                {{item.msg}}
                <input type="button" @click='delTodo(key)' class='cancel' value="X">
              </li>
            </ul>
          </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "todoList",
        data(){
          return  {
            msg:"",
            items:[],
          }
        },
        methods:{
            submit(){
              this.items.push({
                msg:this.msg ,
                checked: false});
              this.msg='';
            },
            keydownSubmit(e){
              if(e.keyCode===13)
                this.submit();
            },
            delTodo(key){
              this.items.pop(key,1);
            }
        }

    }
</script>

<style  scoped>
    #title{
        width:100%;
        height:36px;
        background-color: #333;
        color: #fff;
        font-size: 20px;
        line-height: 30px;
        text-align: center;
    }
    #input {
      width: 350px;
      margin: 10px auto;
      font-size: 24px;
    }
    #input .text{
      width: 300px;
      height: 30px;
      vertical-align: middle;
      box-sizing: border-box;
    }
    #input .submit{
      height: 30px;
      padding: 0 5px;
      vertical-align: middle;
    }
    #todo-list{
      width: 600px;
      margin: 10px auto;
    }
    #todo{
      width: 100%;
    }
    #todo-list h2{
      width: 100%;
      height: 30px;
      margin-bottom:5px;
      background-color: #eee;
      border-left: 5px solid green;
      line-height: 30px;
      text-indent: 1em;
    }
  li{
    padding-left:20px;
  }
  input.cancel{
    width: 18px;
    height:18px;
    /*font-size: 20px;*/
    text-align: center  ;
  }
  
</style>
