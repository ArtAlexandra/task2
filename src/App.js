import React, {useState} from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState()
  const [Tasks, setTasks] = useState([])
  const [deletedTask, setDeletedTask] = useState([])
  const [see, setSee] = useState(false)

  const PushTask = (e)=>{
    e.preventDefault()
    setTasks([...Tasks, task])
    e.target.reset()
  }
  const DeleteF =(t)=>{
    setDeletedTask([...deletedTask, t])
    setTasks(Tasks.filter(ts => ts !== t));
    console.log(deletedTask)
  }
 



  const AddT =(t)=>{
   setTasks([...Tasks, t])
   setDeletedTask(deletedTask.filter(ts => ts !== t));
  }

  
 
  return (
    <div className="App">
      <form onSubmit={(e)=>PushTask(e)}>
     <input type="text" onChange={(e)=>setTask(e.target.value)} placeholder='введите задачу'/>
     <button type="submit">Создать</button>
     </form>
    
{deletedTask.length ?  <button onClick={(e)=>setSee(!see)}>Посмотреть карзину</button> : null}
    
     {Tasks.map((t, i)=>{
      return(
        <div key={i} className='Todo'>
       <p key={i}>{t}</p>
       <input type="checkbox" onClick={(e)=>DeleteF(t)}/>
       </div>
      )
     })}

     {see && deletedTask.length?<>
     <h1>Корзина</h1>
      {deletedTask.map((t, i)=>{
      return(
        <div key={i} className='Todo'>
       <p key={i}>{t}</p>
       <input type="checkbox" onClick={(e)=>AddT(t)}/>
       </div>
      )
     })}
     </> : null}
    </div>
  );
}

export default App;
