# Todo list front-end app with React JS  

This is a simple Todo App built using React.  
My individual coding project.  

Created using class components in order to receive a clearer understanding of class components before turning to the in-depth study of functional components.  

## Installation

You can use the project on Netlify: https://katereshko-react-to-do-list.netlify.app/  
Or, in the project directory, you can run:  

`npm start`  

Runs the app in the development mode.\  

## File structure  

The public directory contains files that will be read by your browser while you're developing the app; the most important of these is index.html. React injects your code into this file so that your browser can run it. 

src directory - contains all the following files and folders  

assets directory - contains the main styles file App.css and the 'Pictures' folder (it contains all background pictures' files)    
App.css - main styles file
Pictures directory - contains all pictures' files  

components directory - contains all React components  
App.js - the main component  
Header.js - contains the main header  
ToDoList.js - contains the todo list block itself with its logic
License.js - contains the bottom where the pictures' license is mentioned  
Pictures.js - contains the background images  

## User side  

In order to use the app, open it via Netlify using the link in the very beginning  
To add a new item to the list, type the text in the input field and press Enter key / click the "Add" button  
When the task is done, click on the relevant item, and it will be crossed (or click it again in order to withdraw the crossing).  
When the todo list is not needed anymore, press the "Delete" button, and the list will be cleared.  
Right after that you can use the tool again and create a new todo list.  

## Logic side  

The main logic is described in the ToDoList.js file (ToDoList component).  

A class component is created and the initial state is set: **userInput** and **toDoList** values are empty.  
The render() function then renders HTML to the web page. The todo list is rendered as a <form> element, and the future todo list items are going to be displayed as <li> elements of a <ul> list.   

When the user types anything in the input field, the _onChange_ event handler gets triggered, which leads to the call of **addNewTask()**. The **setState()** is called then and the **userInput** value changes to the value that is currently entered by the user. As the value attribute makes the input value equal to the current state's **userInput** value (this.state.userInput), it also becomes equal to the currently entered value.  

When the "Add" button/Enter key is clicked, the _onClick_ event handler gets triggered, which leads to the call of **addItem()**.  
It creates the **toDoArray** array, which is equal to the current state's **toDoList** array (and is initially empty).  
The input's value is pushed to this new array, and the state is renewed using _setState()_ method. So the value of **toDoList** array gets equal to the latest value of **toDoArray* which contains the pushed input value already. Then the page is rendered with the new state and the new element of the array are shown on the page as one of the listed elements.  

The _onSubmit()_ event handler attached to the form submission event comes into operation when the form is submitted, i.e. the user clicks Enter key or "Add" button, and the page is not being reloaded due to preventDefault() method.  


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
      <div className="form_wrapper">
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
      </div>
    )
  }
}

