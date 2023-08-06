import React,{useState} from "react";

function App() {

  let [item,setItem] = useState("")
  const [toDOListItems,setToDoList] = useState([])

  function handleChange(event){
    const item = event.target.value;
    setItem(item);
  }
  
  function addItem(){
    setToDoList(prevItems=>{
      const ItemsArray = item.split(" ");
      item="";
      ItemsArray.forEach(eachItem=>{
        item =item + eachItem[0].toUpperCase() + eachItem.slice(1,eachItem.length)+" ";
      })
      item = item.trim();
      if(prevItems.includes(item)){
        return [...prevItems]
      }
      return [...prevItems,item];
    })
    setItem("")
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={item} />
        <button onClick={item!==""&&addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {toDOListItems.map(item=>{
            return <li>{item}</li>
          })}
          
        </ul>
      </div>
    </div>
  );
}

export default App;
