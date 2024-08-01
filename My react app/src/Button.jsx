
function Button() {
const styles ={
    backgroundColor: "rgb(69, 121, 139)",
    color: "white",
    padding: "10px 20px",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "15px",
    border: "0px",
    borderRadius: "10px",
    cursor: "pointer",

}

  return (
    <button style={styles}>Clickme</button>
  );
}

export default Button;