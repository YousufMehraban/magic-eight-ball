import React, {useState} from "react";
import './EightBall.css'


const answers = [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ]



const EightBall = ()=>{
    function randIndex(){
        return Math.floor(Math.random()*answers.length)
    } 
    const [question, setQuestion] = useState('Think of a Question')
    const [color, setColor] = useState('black')
    const [counter, setCounter] = useState(0)
    const answer = answers[randIndex()]
    
    function colorHandler(){
         setQuestion(answer.msg)
         setColor(answer.color)
         setCounter(counter + 1)

    }

    function reset(){
        setQuestion('Think of a Question')
        setColor('black')
        setCounter(0)
    }

    return(
        <div>
            <h4 
            className="magicBall" onClick={()=> colorHandler()}
             style={{backgroundColor:color}}
             >
                {question}
             </h4>
             <h4> Question count: {counter}</h4>
             <button onClick={()=> reset()} >Reset</button>
          
        </div>
    )
}


export default EightBall;

