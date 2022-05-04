import { memo } from "react";
import { InlineStyle } from "./components/InlineStyle";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChildArea = memo(({ open, close }) => {
  //再レンダリング最適化①　memo()で囲む
  console.log("ChildAreaがレンダリングされた");
  // const data = [...Array(2000).keys()];
  // data.forEach(() => {
  //   console.log("...");
  // });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={close}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
