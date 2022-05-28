import logo from './logo.svg';
import './App.css';
import {auth} from './firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {Map} from './components/Map';

function App() {
  const signInWithGoogle = ()=> {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((re)=>{
      console.log(re);
    })
    .catch((err)=>{
      console.log(err);
    })
  
  }
  return (
    <div className="App">
      <div className ="content">
        <h1>
          OpenSpace 
        </h1>
        <button onClick ={signInWithGoogle}>
          Login!
        </button>
        <Map />
        </div> 
    </div>
  );
}

export default App;
