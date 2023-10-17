# Todo list front-end app with React JS  

This is a simple Todo App built using React.  
My individual coding project.  

Created using class components in order to receive a clearer understanding of class components before turning to the in-depth study of functional components.  

## Installation

You can use this project on Netlify: https://katereshko-react-to-do-list.netlify.app/  
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
The render() function renders HTML to the web page. The todo list is rendered as a ***form*** element, and the future todo list items are going to be displayed as ***li*** elements of a ***ul*** list.

In this case we deal with a controlled component. The React component's state defines the input value, which means that the component renders the form in response to the user's input. The value attribute is set for input, so _this.state.userInput_  will be always displayed in the input field.  

When the user types anything in the input field, the _onChange_ event handler gets triggered, which leads to the call of **addNewText()**. The **setState()** is called then and the **userInput** value changes to the value that is currently entered by the user. So every time the user types anything in the input field, **addNewText()** is called which updates the component's state, and the value in the input field also updates as the user is typing.  

When the "Add" button/Enter key is clicked, the _onClick_ event handler gets triggered, which leads to the call of **addItem()**.  
It creates the **toDoArray** array, which works with the current state's **toDoList** array (and is initially empty).  
The input's value is pushed to this new array, and then the state is updated using _setState()_ method. So the value of **toDoList** array gets equal to the latest value of **toDoArray** which contains the pushed input value already. Then the page is rendered again using the latest state and the _map()_ method, as the result the new element of the array is displayed on the page as one of the listed (***li***) elements.

The _onSubmit()_ event handler attached to the form submission event comes into operation when the form is submitted, i.e. the user clicks Enter key or "Add" button, and the page is not being reloaded due to preventDefault() method.  

Every ***li*** element also has an _onClick_ event handler which  allows to assign _.crossed_ class to this element or to withdraw it by one click (**crossedWord()** id called), as a result the item displays as crossed and vice versa.  

Finally, the "Delete" button allows to delete the whole list (to empty the relevant array). When the "Delete" button is clicked, the _onClick_ event handler gets triggered, which leads to the call of **deleteItem()**. It updates the **toDoArray** with the current state's **toDoList**, then empties the **toDoArray** and updates the state using _setState()_ and making the **toDoList** equal to the **toDoArray**, so it also gets empty and the page is rendered again without the list on it.  

**Thanks for your time exploring my project!**

**EKATERINA TERESHKO
ekaterina.tereshko.me@gmail.com**
