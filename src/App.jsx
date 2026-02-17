// import Card from "./components/Card";


// function App() {
//   return (
//     <div style={{ display: "flex" }}>
//       <Card
//         name="inshal"
//         job="student"
//         image="https://www.deadgoodbooks.co.uk/wp-content/uploads/2022/02/First-Look-Reacher-1024x682.png"
//         age="18"
//         isstudent="yes"
//       />

//       <Card
//         name="inshal"
//         job="student"
//         image="https://www.deadgoodbooks.co.uk/wp-content/uploads/2022/02/First-Look-Reacher-1024x682.png"
//         age="19"
//         isstudent="no"
//       />

//       <Card
//         name="inshal"
//         job="student"
//         image="https://www.deadgoodbooks.co.uk/wp-content/uploads/2022/02/First-Look-Reacher-1024x682.png"
//         age="0202020"
//         isstudent="perhaps"
//       />




//     </div>
//   );
// }

// export default App;



import { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed!");
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      Click Me
    </button>
  );
}





