import ComponentC from "./ComponentC";

function ComponentB() {
  return (
    <div className="box">
      <h1 >Component B</h1>
      {/* <h2>{`Hello ${props.user}`}</h2> */}
      <ComponentC />
    </div>
  );
}
export default ComponentB;
