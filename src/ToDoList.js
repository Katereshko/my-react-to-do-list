import { Component } from "react";

export class ToDoList extends Component{
  constructor(){
    super();
    this.state = {
      userInput: "", //значение input пока пустое
      toDoList: [] //массив дел пока пустой
    }
  }

  addNewTask(e){
    this.setState({userInput: e});
    console.log(e)
  }

  addItem(input){
    if (input === ''){
      alert('please enter text');
    } else{
    //по первому нажатию на кнопку создается массив, его раньше не было
    let toDoArray = this.state.toDoList;
    toDoArray.push(input);
    this.setState({toDoList: toDoArray, userInput: ""});
    //чтобы видеть в консоли, как выглядит сейчас массив-дублер
    console.log(toDoArray);
    }
  }

  crossedWord(event){
    const listElement = event.target;
    listElement.classList.toggle('crossed');
  }

  deleteItem(){
    let toDoArray = this.state.toDoList;
    //точно так же как в addItem в начале
    //только там мы следующим децтсвием добавляем элемент в массив, а здесь мы будем массив опустошать:
    toDoArray = [];
    this.setState({toDoList: toDoArray})
  }

  onFormSubmit(e){
    e.preventDefault();
  }

  render(){
    return(
      <form onSubmit = {this.onFormSubmit}> 
        <input type="text" placeholder="to do next" 
        value = {this.state.userInput}
        onChange = {(e) => {this.addNewTask(e.target.value)}}
        />
        <button onClick={() => this.addItem(this.state.userInput)}>
          Add
        </button>
        <ul>
          {this.state.toDoList.map ( (item, index) => (<li onClick={this.crossedWord} key={index}>{item}</li>)
          )}
        </ul>
        <button onClick={() => this.deleteItem()}>
          Delete
        </button>
      </form>
    )
  }
}

