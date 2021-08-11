import './App.css';
import {useState} from 'react';
import Circle from './circle';

function App() {
  const [count,setcount] = useState([
    {
      id: "red",
      count: 0,
    },
    {
      id: "orange",
      count: 0,
    },
    {
      id: "blue",
      count: 0,
    }
  ])
  let increament = (id) =>
  {
    let arrayindex = count.findIndex(obj => obj.id === id);
    count[arrayindex].count++;
    setcount([...count]);
  }
  let reset = () =>
  {
    count.forEach(ele => ele.count = 0);
    setcount([...count]);
  }
  return (
    <div className="row">
      {
        count.map((obj)=>{
          return <Circle data={obj} handleclick={increament}></Circle>
        })
      }
    <div>  
    <button type="button" className="btn btn-secondary" onClick={reset}>Reset</button>
    </div>
    </div>      
  );
}

export default App;
