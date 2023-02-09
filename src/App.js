import { useState } from 'react';
import './App.css';
import Discussions from './Components/Discussions';
import Input from './Components/Input';


function App() {
  const [update, setUpdate] = useState(true);
  const handleUpdate = () => {
    setUpdate(!update);
  }
  return (
    <div className="App">
      {/* h1 myagora states */}
      <h1>My agora States</h1>
      {/* 입력 폼 */}
      <Input handleUpdate={handleUpdate}/>
      <Discussions update={update}/>
    </div>
  );
}

export default App;
