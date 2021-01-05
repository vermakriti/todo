import React, {useState} from 'react';
import './style.css';
import TodoList from './TodoList';

const App = () =>{

    const [inputList,setInputList]=useState("");

    const intemEvent = (event)=>{
        setInputList(event.target.value);
    }

    const[item,setItem]=useState([]);

    const listOfItem=()=>{
        setItem((oldVal)=>{
            return [...oldVal,inputList];
        });
        setInputList("");

    };

    const deleteItem=(id)=>{
        setItem((oldVal)=>{
            return oldVal.filter((arrEle,index)=>{
                return index!== id;
            });
        });
    };

    return (
      <>
        <div>
          <div className="main_div">
              <br/>
              <h1 > Todo List</h1>
              <br/>
              <input typr="text" placeholder="Add a item" 
                value={inputList}
               onChange={intemEvent}/>
              <button onClick={listOfItem} id="b1">+</button> 
              <ol>
                  {item.map((itemVal,index)=>{
                      return <TodoList 
                      key={index}
                      id={index}
                      text={itemVal}
                      onSelect={deleteItem}  
                      />
                  })}

              </ol>
          </div>
        </div>
      </>
    )
};

export default App;
