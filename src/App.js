import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import { InlineStyle } from "./components/InlineStyle";
import "./styles.css";

export default function App() {
  console.log("App");

  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const onChangeText = (e) => {
    setText(e.target.value);
  };
  const onClickOpen = () => setOpen(!open);
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);
  //再レンダリング最適化②　useCallback()で囲む 第2引数に配列記述できる

  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);
  //再レンダリング最適化③　useMemo()で囲む 第2引数に配列記述できる

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} close={onClickClose} />
      <InlineStyle />
    </div>
  );
}
