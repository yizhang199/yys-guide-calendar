import './App.css';
import Guides from './data/guides.json';
import DayCell from './components/DayCell';

const weeks = [
  '星期一',
  '星期二',
  '星期三',
  '星期四',
  '星期五',
  '星期六',
  '星期日',
];

function App() {
  return (
    <div className="app">
      <div className="calendar">
        {/* {weeks.map((week) => (
          <div key={week} className="week-header">
            {week}
          </div>
        ))} */}
        {Array.from({ length: 3 }).map((_, rowIndex) => {
          return Array.from({ length: 7 }).map((_, colIndex) => {
            return (
              <div key={`row-${rowIndex}-col-${colIndex}`}>
                <DayCell
                  data={Guides[rowIndex * 7 + colIndex - 1]}
                  day={rowIndex * 7 + colIndex - 2}
                />
              </div>
            );
          });
        })}
      </div>
    </div>
  );
}

export default App;
