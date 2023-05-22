import './App.css';
import Guides from './data/guides.json';
import DayCell from './components/DayCell/DayCell';

function App() {

  const days = Object.values(Guides).map((guide,index)=>{
    return {
      ...guide,
      day: index + 1
    }
  })

  return (
    <div className="app">
      <div className="days-grid">
        {days.map(day=>{
          return (
            <DayCell
              data={day}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
