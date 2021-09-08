import { useState } from 'react';
import './App.css';
import Expenses from './component/Expenses';
import NewExpense from './component/NewExpense/NewExpense';

const INITIAL_DATA = [
  {
    id:'1',
    title: 'Car Insurance',
    amount: 298.56,
    date:new Date(2020, 7, 14)
  },
  {
    id:'2',
    title: 'Bike Insurance',
    amount: 158.56,
    date:new Date(2021, 3, 28)
  },
  {
    id:'3',
    title: 'House EMI',
    amount: 2298.56,
    date:new Date(2022, 4, 21)
  },
]

function App() {

  const [expense, setExpense] = useState(INITIAL_DATA)
  
  const addNewData = (newData) => {
    setExpense((prev)=>{
      return [newData, ...prev]
    });
    console.log("NewData", newData);
  }
  return (
    <div className="App">
        <NewExpense getData={addNewData}/>
        <Expenses expense={expense}/> 

    </div>
  );
}

export default App;
