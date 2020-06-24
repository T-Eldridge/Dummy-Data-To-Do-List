// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.
let elementColor = ""
let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
  }]

  let list = () =>{
    document.getElementById()
  }

  const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
  }

  const logTodos = () => {
    console.log(arrayOfTodos)
  }

  const populateTodos = () => {

     let list = document.getElementById("todo-list")

     
     for (let i=0; i < arrayOfTodos.length; i++){
      let newLi = document.createElement('LI')
      let newH1 = document.createElement('H1')
      let newH2 = document.createElement('H2')
      let newH3 = document.createElement('H3')
      let newH4 = document.createElement('H4')
     
     let userID = document.createTextNode(arrayOfTodos[i].userId)
     newH1.appendChild(userID)

     let id = document.createTextNode(arrayOfTodos[i].id)
     newH2.appendChild(id)
     
     let title = document.createTextNode(arrayOfTodos[i].title)
     newH3.appendChild(title)

     let complete = document.createTextNode(arrayOfTodos[i].completed)
     newH4.appendChild(complete)
     
     newLi.appendChild(newH1)
     newLi.appendChild(newH2)
     newLi.appendChild(newH3)
     newLi.appendChild(newH4)
     list.appendChild(newLi)

     
     
     console.log(elementColor)

     if(arrayOfTodos[i].completed === true){
       elementColor = "green"
     } else {
      elementColor = "red"
     }
     newLi.style.color = elementColor
  }
  }

 // turn text red



  // // show id
  // let userID = document.createTextNode(arrayOfTodos[i].id)
  // Li.appendChild(userID)
  // list.appendChild(Li)

  // // show title
  // let userID = document.createTextNode(arrayOfTodos[i].title)
  // Li.appendChild(userID)
  // list.appendChild(Li)
  // // show completed
  // let userID = document.createTextNode(arrayOfTodos[i].completed)
  // Li.appendChild(userID)
  // list.appendChild(Li)

  