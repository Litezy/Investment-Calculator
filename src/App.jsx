import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 5000,
    annualInvestment: 2000,
    expectedReturn: 6,
    duration: 10
})
const HandleChange = (identifier, newValue) => {
    setUserInput({
        ...userInput,
        [identifier]: + newValue
    })
}
 const Tableshow = userInput.duration >= 1
  return (
    <>
     <Header/>
     <UserInput
     userInput={userInput} onChangeInput={HandleChange}/>
    {!Tableshow && <p className="center">Pls enter a valid duratin number</p>}
    {Tableshow &&  <Results input={userInput}/>}
    </>
  )
}

export default App
