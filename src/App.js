import './App.css';
import {useState , useEffect} from 'react';
import { FormControl , Input} from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


 
function App() {
    //below is the react hook . a power function of code
     const [input, setInput] = useState('');  //state is the short term memory created . it keep track of input given by the user
    //  bellow state uses the part to store the value in it 
    const [messages , setMessages] = useState([]);
    const [username , setUsername] = useState (''); //it use show the username who typed the message 

    //useState = variable declaration in the react app
    //useEffect = it runs the code based on condition

    useEffect(() => {
       db
       .collection('messages') 
       .orderBy('timestamp' , 'desc') 
       .onSnapshot(snapshot => {
          setMessages(snapshot.docs.map(doc => ({id:doc.id , message: doc.data()})))
       })
    }, [])

    useEffect(() => {
         // insted of storing in a variable just const user just u have to call the username and set their variable
        setUsername(prompt('please enter your username'))
       
    }, [] )//condition //if [] is empty the use effect run ones during the first load of the code

     const sendMessage = (event) => {
         event.preventDefault(); // disable to take refreshing the page
        // (...message)  the es6 snippets is used so the all the current message is present plus it inclde the input the new message 
        db.collection('messages').add({
           message: input,
           username: username,
           timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
      //   setMessages([...messages , { username: username, text: input }])
        setInput('');  //to clear the input after sending the message
     }

  return (
    <div className="App">
       <img className="messenger__logo" src="https://www.logo.wine/a/logo/Facebook_Messenger/Facebook_Messenger-Logo.wine.svg" alt=""/>
       <h1>hello people</h1>
       <h2> hey {username} !!</h2>

       <form className="app__form">
       <FormControl className= "app__formcontrol">
          <Input className="app__input" placeholder='Enter a message ...' value={input}  onChange={event => setInput(event.target.value)} /> 
          
          <IconButton className="app__iconButton"
          disabled={!input} //disable the button when input is empty 
          variant="contained" //makes the button as container
           color="primary"    // in material ui the button is blue in primary and red in secondary
           type='submit'    //to set their type 
           onClick={sendMessage} >
             <SendIcon />
             </IconButton>
        {/* onClick iniciate the props function */}
         {/* onClick event handler enables you to call a function and trigger an action when a user clicks an element */}
      </FormControl>
      
         </form>

       <FlipMove>
       {
           messages.map(({id ,message})=> (
              <Message key={id} username={username} message={message} />
           ))// map is an element to return html element
        }
       </FlipMove>

       

    </div>
  ) }

export default App;
