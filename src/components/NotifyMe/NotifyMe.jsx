import React, { useRef } from "react";
import "./NotifyMe.css";

export const NotifyMe = () => {
  const inputRef = useRef(null);

  const onCloseNotifyMe = () => {
    document.getElementById("checkbox").checked = false;
  };

  const onFocusInput = () => {
    console.log("inputRef.current", inputRef.current);
    inputRef.current.focus();
  };

  return (
    <>
      <input
        className="c-checkbox"
        type="checkbox"
        id="checkbox"
        onChange={() => onFocusInput()}
      />
      <div className="c-formContainer">
        <form className="c-form" action="">
          <input
            ref={inputRef}
            className="c-form__input"
            placeholder="E-mail"
            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
            required
            // onBlur={() => onCloseNotifyMe()}
          />
          <label className="c-form__buttonLabel" htmlFor="checkbox">
            <button className="c-form__button" type="button">
              Send
            </button>
          </label>
          <label
            className="c-form__toggle"
            htmlFor="checkbox"
            data-title="Notify me"
          ></label>
        </form>
      </div>
    </>
  );
};
