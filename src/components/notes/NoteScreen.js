import React from "react";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
        />
        <textarea
          placeholder="What happened today"
          className="notes__textarea"
        />
        <div className="notes__image">
          <img
            src="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_960_720.jpg"
            alt="imagen"
          />
        </div>
      </div>
    </div>
  );
};

export default NoteScreen;
