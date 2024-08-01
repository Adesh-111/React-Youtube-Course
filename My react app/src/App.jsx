import Card from "./Card"
import Button from "./Button"
import Student from "./Student"

function App() {
  return (
    <>
      <Student name="Adesh" age="19" isStudent ={true} />
      <Student name="Abin" age="19" isStudent ={true} />
      <Student name="Devi" age="40" isStudent ={false} />
      <Student />
    </>

  )
}

export default App
