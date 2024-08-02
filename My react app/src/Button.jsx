
function Button() {



  const handleClick = (event) =>{
    event.target.textContent ="Clicked 🥵"
  }

  // const handleClick2 =(name) => console.log(`${name} Why are Clicking me`)

  return (
    <button onDoubleClick={(event) => handleClick(event)} >Click me 🐣</button>
  );
}

export default Button;