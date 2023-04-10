export default function ChildValue(props) {
  return (
    <div>
      <h1>{props.counterValue}</h1>
      <button onClick={() => props.callbackFunc(25)}>Set Value To 25</button>
    </div>
  );
}
