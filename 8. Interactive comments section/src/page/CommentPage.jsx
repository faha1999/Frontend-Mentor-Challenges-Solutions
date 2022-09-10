import React, { useState } from 'react';
import { AddComment } from '../components/AddComment';
import { Comment } from '../components/Comment';
import { EditComment } from '../components/EditComment';
import { Reply } from '../components/Reply';
import { nanoid } from 'nanoid';
import dataJSON from '../data.json';

export const CommentPage = () => {
  const [commentText, setCommentText] = useState('');
  const [editText, setEditText] = useState('');
  const [model, setModel] = useState(false);
  const [data, setData] = useState(dataJSON);
  const [addReply, setAddReply] = useState(false);
  const [editComment, setEditComment] = useState(false);
  const [removeComment, setRemoveComment] = useState(false);
  const [deleteThis, setDeleteThis] = useState('');

  function handleTextarea(e) {
    setCommentText(e.target.value);
  }

  function handleDelete(e, state) {
    if (removeComment === state) {
      setDeleteThis(e);
      setModel(true);
    } else {
      deleteComment(deleteThis);
    }
  }
  function handleEdit(e) {
    setEditComment((prevData) => !prevData);
    setData((prevData) => {
      return {
        ...prevData,
        comments: prevData.comments.map((comment) => {
          return comment.id === e.id
            ? { ...comment, edit: !editComment }
            : {
                ...comment,
                replies: comment.replies.map((commentReply) => {
                  return commentReply.id === e.id
                    ? { ...commentReply, edit: !editComment }
                    : commentReply;
                }),
              };
        }),
      };
    });
  }

  function handleReply(e) {
    setAddReply((prevData) => !prevData);
    setData((prevData) => {
      return {
        ...prevData,
        comments: prevData.comments.map((comment) => {
          return comment.id === e.id
            ? { ...comment, reply: !addReply }
            : {
                ...comment,
                replies: comment.replies.map((commentReply) => {
                  return commentReply.id === e.id
                    ? { ...commentReply, reply: !addReply }
                    : commentReply;
                }),
              };
        }),
      };
    });
  }

  function addComment() {
    const time = new Date().toDateString().split(' ');
    setData((prevData) => {
      return {
        ...prevData,
        comments: [
          ...prevData.comments,
          {
            id: nanoid(),
            content: commentText,
            createdAt: `${time[1]} ${time[2]}`,
            score: 0,
            user: {
              image: {
                png: './images/avatars/image-juliusomo.png',
                webp: './images/avatars/image-juliusomo.webp',
              },
              username: 'juliusomo',
            },
            replies: [],
          },
        ],
      };
    });
    setCommentText('');
  }

  function updateEdit(e, text) {
    setData((prevData) => {
      return {
        ...prevData,
        comments: prevData.comments.map((comment) => {
          const editThis = comment.replies.filter((reply) => {
            if (comment.id === e.id) {
              return {
                ...comment,
                ...(comment.edit = false),
                ...(comment.content = text),
              };
            } else if (reply.id === e.id) {
              return {
                ...comment,
                ...(reply.edit = false),
                ...(reply.content = text),
              };
            }
          });
          if (editThis.length > 1 === true) {
            return comment;
          } else {
            return {
              ...comment,
              ...(comment.edit = false),
              ...(comment.content = text),
            };
          }
        }),
      };
    });
    handleEdit(e);
  }

  function createReply(e) {
    const time = new Date().toDateString().split(' ');
    handleReply(e);

    setData((prevData) => {
      return {
        ...prevData,
        comments: prevData.comments.map((comment) => {
          return comment.id === e.id
            ? {
                ...comment,
                ...(comment.reply = true),
                ...comment.replies.push({
                  id: nanoid(),
                  content: commentText,
                  createdAt: `${time[1]} ${time[2]}`,
                  score: 0,
                  replyingTo: e.user.username,
                  user: {
                    image: {
                      png: './images/avatars/image-juliusomo.png',
                      webp: './images/avatars/image-juliusomo.webp',
                    },
                    username: 'juliusomo',
                  },
                  replies: [],
                }),
              }
            : comment;
        }),
      };
    });
    setAddReply(false);
  }

  function deleteComment(e) {
    //searching for the exact comment or reply that is selected to be delete.
    //if the ID don't match the ID of the selected comment then it will not be deleted
    const filterComment = data.comments
      .filter((item) => {
        return item.id !== e.id;
      })
      .filter((i) => {
        //Filter the replies for each comment to look if the current user want to delete his reply
        const replies = i.replies.filter((reply) => {
          return reply.id !== e.id;
        });
        //After filtering each reply to look if the ID match the selected ID we will return the replies into each comment.
        return (i.replies = replies);
      });

    setData((prevData) => {
      return {
        ...prevData,
        comments: filterComment,
      };
    });
    setModel(false);
  }

  const currentUserImg = data.currentUser.image.png;
  const comments = data.comments.map((comment) => {
    return (
      <>
        {!comment.edit && (
          <Comment
            counter={comment.score}
            content={comment.content}
            createdAt={comment.createdAt}
            username={comment.user.username}
            currentUser={comment.user.username === data.currentUser.username}
            image={comment.user.image.png}
            handleDelete={() => handleDelete(comment, false)}
            handleEdit={() => handleEdit(comment)}
            handleReply={() => handleReply(comment)}
          />
        )}
        {comment.reply === true && (
          <AddComment
            textarea_placeholder={'Reply'}
            handleTextarea={handleTextarea}
            comment={''}
            handleComment={() => createReply(comment)}
            currentUser={currentUserImg}
            sendButton={'Reply'}
          />
        )}
        {comment.edit === true && (
          <EditComment
            counter={comment.score}
            content={comment.content}
            createdAt={comment.createdAt}
            username={comment.user.username}
            image={comment.user.image.png}
            handleDelete={() => handleDelete(comment, false)}
            handleEdit={() => handleEdit(comment)}
            handleReply={() => handleReply(comment)}
            updateEdit={(text) => updateEdit(comment, text)}
            textarea_placeholder={'edit'}
            textarea_value={comment.content}
            handleTextarea={handleTextarea}
            comment={editText}
            handleComment={() => addComment()}
            currentUser={currentUserImg}
            sendButton={'Update'}
          />
        )}
        {comment.replies.length >= 1 ? (
          <>
            {comment.replies.map((reply) => {
              return (
                <>
                  {!reply.edit && (
                    <Reply
                      replyingTo={reply.replyingTo}
                      counter={reply.score}
                      content={reply.content}
                      createdAt={reply.createdAt}
                      username={reply.user.username}
                      image={reply.user.image.png}
                      currentUser={
                        reply.user.username === data.currentUser.username
                      }
                      handleDelete={() => handleDelete(reply, false)}
                      handleEdit={() => handleEdit(reply)}
                      handleReply={() => handleReply(reply)}
                    />
                  )}
                  {reply.reply === true && (
                    <AddComment
                      textarea_placeholder={'Reply'}
                      handleTextarea={handleTextarea}
                      comment={commentText}
                      handleComment={() => createReply(reply)}
                      currentUser={currentUserImg}
                      sendButton={'Reply'}
                    />
                  )}
                  {reply.edit === true && (
                    <EditComment
                      counter={reply.score}
                      content={reply.content}
                      createdAt={reply.createdAt}
                      username={reply.user.username}
                      image={reply.user.image.png}
                      handleDelete={() => handleDelete(reply, false)}
                      handleEdit={() => handleEdit(reply)}
                      handleReply={() => handleReply(reply)}
                      updateEdit={(text) => updateEdit(reply, text)}
                      textarea_placeholder={'edit'}
                      textarea_value={reply.content}
                      handleTextarea={handleTextarea}
                      comment={editText}
                      handleComment={() => addComment()}
                      currentUser={currentUserImg}
                      sendButton={'Update'}
                    />
                  )}
                </>
              );
            })}
          </>
        ) : (
          ''
        )}
      </>
    );
  });
  return (
    <>
      <div className="commentPage">
        {comments}
        {model && (
          <div className="model-div">
            <dialog open={model} id="model">
              <h2>Delete comment</h2>
              <p>
                Are you sure you want to delete this comment? This will remove
                the comment and can't be undone.
              </p>
              <div className="flex">
                <button className="cancel" onClick={() => setModel(false)}>
                  No, cancel
                </button>
                <button
                  className="delete"
                  onClick={() => handleDelete('', true)}
                >
                  Yes, Delete
                </button>
              </div>
            </dialog>
          </div>
        )}
        <AddComment
          textarea_placeholder={'Add a comment..'}
          handleTextarea={handleTextarea}
          comment={''}
          textarea_value={commentText}
          handleComment={() => addComment()}
          currentUser={currentUserImg}
          sendButton={'Send'}
        />
      </div>
    </>
  );
};
