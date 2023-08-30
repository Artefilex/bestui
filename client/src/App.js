import Sidebar from "./mainComponent/nav/Sidebar";
import Location from "./mainComponent/nav/Location";

function App(){
  return (
    <div className="App">
      <Sidebar/>
      <div className="location">
      <Location/> 
      </div>
  </div>
  );
}

export default App;
