import { useState } from "react";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";
import ArrayList from "./components/ArrayList";
import UpdateArray from "./components/UpdateArray";
import Form from "./components/Form/Form";
import Form2 from "./components/Form/Form2";
import Form3 from "./components/Form/Form3";

function App() {
  const [items, setItems] = useState([
    { id: 1, title: "I love Apple!" },
    { id: 2, title: "I love Orange!" },
    { id: 3, title: "I love Strawbery!" },
    { id: 4, title: "I love Cherry!" },
  ]);
  return (
    <>
      <h1>Hello Kitty</h1>
      {/* <ColorBox />
      <TodoList /> */}
      {/* <ArrayList
        itemLists={items.map(({ id, title }) => ({ [id]: title }))}
        onClear={() => setItems([])}
        removeOneItem={() => setItems((items) => [...items.slice(0, -1)])}
      /> */}
      <br />
      <br />
      {/* <UpdateArray /> */}
      <br />
      <br />
      {/* <Form /> */}
      <br />
      <br />
      <Form2 />

      <br />
      <br />
      <Form3 />
    </>
  );
}

export default App;
