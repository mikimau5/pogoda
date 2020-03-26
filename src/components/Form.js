import React from "react";

const Form = props => {
  return (
    <div>
      {" "}
      <form onSubmit={props.submit}>
        <input
          type="text"
          value={props.value}
          placeholder="Wpisz miasto"
          onChange={props.change}
        />{" "}
        <div>
          <label>
            <input
              type="radio"
              id="oneDay"
              name="option"
              value="oneDay"
              onChange={props.choose}
            />
            24h
          </label>
          <label>
            {" "}
            <input
              type="radio"
              id="threeDays"
              name="option"
              value="threeDays"
              onChange={props.choose}
            />
            72h
          </label>
        </div>
        <button> Wyszukaj miasta </button>{" "}
      </form>{" "}
    </div>
  );
};

export default Form;
