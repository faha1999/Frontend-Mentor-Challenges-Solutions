import React from 'react';

export const AddComment = (props) => {
  return (
    <>
      <div className="addComment">
        <img className="authorLogo hide" src={props.currentUser} />
        <textarea
          placeholder={props.textarea_placeholder}
          value={props.textarea_value}
          onInput={props.handleTextarea}
        >
          {props.comment}
        </textarea>
        <div className="sendInfo">
          <img className="authorLogo show" src={props.currentUser} />
          <button onClick={props.handleComment} className="send-btn">
            {props.sendButton}
          </button>
        </div>
      </div>
    </>
  );
};
