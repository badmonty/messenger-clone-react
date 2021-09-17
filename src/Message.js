import React, {forwardRef} from 'react'
import './Message.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


//forwardref is a higher order function
const Message = forwardRef(({message , username}, ref) => {
        
      const isUser = username === message.username;



    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`} >
             <Card className={isUser ? "message__userCard" : "message__guestCard"} > 
             {/* classname with curly bracket allow the JSX in the function and backtick allow to write the javascript in the curls  */}
              {/* if there is a user then shows the userCard otherwise guestcard */}
              <CardContent>
                 <Typography color="white" variant="h5" component="h2" >


                 {!isUser  && `${message.username || 'Unknown User'} :`} {message.message}
                  </Typography>
                  
               </CardContent>
              
             </Card>
        </div>
    )
})

export default Message
