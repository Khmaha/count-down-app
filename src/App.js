import { useEffect, useState } from 'react';
import './App.scss';
import Counter from './components/Counter/Counter'
import SocialMedia from './components/SocialMedia/SocialMedia'
function App() {
  const [counter, setCounter] = useState({
    days: new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate(),
    hours: new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours(),
    minutes: new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes(),
    seconds: new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds()

  })
  useEffect(() => {
    setTimeout(() => {
      setCounter((prevState) => ({
        days: new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate(),
        hours: new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours(),
        minutes: new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes(),
        seconds: new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds()
      }))
    }, 1000)
  })



  return (
    <div className="App">
      <Counter counter={counter}></Counter>
      <SocialMedia></SocialMedia>
    </div>
  );
}

export default App;
