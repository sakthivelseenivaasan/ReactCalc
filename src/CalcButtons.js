import { useState } from "react";

const CalcButtons = () => {
  const [text, setText] = useState(0);
  const [total, setTotal] = useState(0);
  const addText = (event) => {
    setText(event.target.value);
  };
  const add = () => {
    setTotal(total + parseInt(text));
    console.log(total);
  };
  const subtract = () => {
    setTotal(total - parseInt(text));
    console.log(total);
  };
  return (
    <div>
      <input type="text" value={text} />
      <div className="row">
        <input
          type="button"
          className="calcBtn"
          value="1"
          onClick={(event) => addText(event)}
        />
        <input
          type="button"
          className="calcBtn"
          value="2"
          onClick={(event) => addText(event)}
        />
        <input
          type="button"
          className="calcBtn"
          value="3"
          onClick={(event) => addText(event)}
        />
      </div>
      <div className="row">
        <input
          type="button"
          className="calcBtn"
          value="4"
          onClick={(event) => addText(event)}
        />
        <input
          type="button"
          className="calcBtn"
          value="5"
          onClick={(event) => addText(event)}
        />
        <input
          type="button"
          className="calcBtn"
          value="6"
          onClick={(event) => addText(event)}
        />
      </div>
      <div className="row">
        <input
          type="button"
          className="calcBtn"
          value="7"
          onClick={(event) => addText(event)}
        />
        <input
          type="button"
          className="calcBtn"
          value="8"
          onClick={(event) => addText(event)}
        />
        <input
          type="button"
          className="calcBtn"
          value="9"
          onClick={(event) => addText(event)}
        />
      </div>
      <div className="row">
        <input
          type="button"
          className="calcBtn"
          value="+"
          onClick={(event) => add(event)}
        />
        <input
          type="button"
          className="calcBtn"
          value="0"
          onClick={(event) => addText(event)}
        />
        <input
          type="button"
          className="calcBtn"
          value="-"
          onClick={(event) => subtract(event)}
        />
      </div>
    </div>
  );
};

export default CalcButtons;
