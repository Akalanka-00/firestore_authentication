import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword}  from 'firebase/auth'
import {initializeApp} from "firebase/app"

import './App.css'
function App() {

  function getLogin(event){
    event.preventDefault();
    console.log(event.target.email.value);
    console.log(event.target.password.value);

    const firebaseConfig = {
      apiKey: "AIzaSyAjvcnASfb1c8LDCE-3tMGjaqsHeOJgXH0",
      authDomain: "login-firebase-11add.firebaseapp.com",
      projectId: "login-firebase-11add",
      storageBucket: "login-firebase-11add.appspot.com",
      messagingSenderId: "86436364563",
      appId: "1:86436364563:web:8354f09bb0276545279ae6",
      measurementId: "G-2VXZ9ENVNJ"
    };

    const firebaseApp = initializeApp(firebaseConfig);

    const auth = getAuth(firebaseApp);
    signInWithEmailAndPassword(auth,event.target.email.value, event.target.password.value).then((userCredential)=>{
      alert('Login Successful');
      console.log(userCredential.user);
    }).catch((error)=>{ 
      const errorCode = error.code;
      const errorMsg = error.message;
      console.log(errorMsg);
      alert("Incorrect username & password");
    })
  }

  function signUp(event){
    event.preventDefault();

    const firebaseConfig = {
      apiKey: "AIzaSyAjvcnASfb1c8LDCE-3tMGjaqsHeOJgXH0",
      authDomain: "login-firebase-11add.firebaseapp.com",
      projectId: "login-firebase-11add",
      storageBucket: "login-firebase-11add.appspot.com",
      messagingSenderId: "86436364563",
      appId: "1:86436364563:web:8354f09bb0276545279ae6",
      measurementId: "G-2VXZ9ENVNJ"
    };

    const firebaseApp = initializeApp(firebaseConfig);

    const auth = getAuth(firebaseApp);
    createUserWithEmailAndPassword(auth,event.target.email.value, event.target.password.value).then(userCredential=>{
      const user = userCredential.user;
      console.log(user);
      alert("User created");
    }).catch((error)=>{ 
      const errorMsg = error.message;
      console.log(errorMsg);
      alert("Account create failed");
    })
  }
  return (
    <div className="App">
     <div className='app-contaier'>
      <h1>Login</h1>
     <form id="myform" method='post' onSubmit={getLogin}>
        <div className='form-group'>
          <label>Email</label>
          <input type= "email" className = "form-control" name = "email" placeholder = "Enter your email"></input>
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input type= "password" className = "form-control" name = "password" placeholder = "Enter your password"></input>
        </div>
        <div className='form-group'>
          <input type= "submit" className = "btn btn-primary" value= "submit"></input>
        </div>
      </form>
      <br/>
      <br/>

      <h1>SignUp</h1>

      <form id="myform" method='post' onSubmit={signUp}>
        <div className='form-group'>
          <label>Email</label>
          <input type= "email" className = "form-control" name = "email" placeholder = "Enter your email"></input>
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input type= "password" className = "form-control" name = "password" placeholder = "Enter your password"></input>
        </div>
        <div className='form-group'>
          <input type= "submit" className = "btn btn-primary" value= "submit"></input>
        </div>
      </form>
     </div>
    </div>
  );
}

export default App;
