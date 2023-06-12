import React from "react";
import "./Write-note.css";

const WriteNote = () => {
  return (

    <dialog id="wr-note">
                          <span
                            className="material-symbols-outlined"
                            style={{
                              float: "right",
                              color: "orange",
                              position: "absolute",
                              top: "30px",
                              right: "29px",
                              fontWeight: "900",
                              transform: "scale(1.2)",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              const profile = document.getElementById('wr-note');
                              profile.close();
                            }}
                          >
                            close
                          </span>


    <section className="wr-note-container">
      <div className="heading">
        <img
          className="heading__img"
          src="https://d29fhpw069ctt2.cloudfront.net/icon/image/37822/preview.svg"
          alt=""
        />
        <h1 className="heading__title">Write a Note</h1>
      </div>
      <form className="form">
        <div>
            <div className="note-inputs">
          <label className="form__label" htmlFor="todo">
            ~ Babysitter Name:
          </label>
          <input
            style={{width:"220px"}}
            className="form__input"
            type="text"
            id="todo"
            name="to-do"
            size={20}
            required
          />
          </div>
          <div className="note-inputs">
          <label className="form__label" htmlFor="todo">
            ~ Note: 
          </label>
          <textarea
            style={{width:"82%"}}
            className="form__input"
            type="text"
            id="todo"
            name="to-do"
            size={30}
            required
          />
          </div>
          <br />
          <button
            className="button"
            onClick={(eo) => {
              eo.preventDefault();
            }}
          >
            <span>Submit</span>
          </button>
        </div>
      </form>
    </section>
    </dialog>

  );
};

export default WriteNote;
