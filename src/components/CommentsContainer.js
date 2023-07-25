import React from "react";

const commentsData = [
  {
    name: "Harsh Khulbe",
    text: "Lorem ipsum dolor sit amet, consrtetur adip",
    replies: [
      {
        name: "Harsh Khulbe",
        text: "Lorem ipsum dolor sit amet, consrtetur adip",
      },
      {
        name: "Harsh Khulbe",
        text: "Lorem ipsum dolor sit amet, consrtetur adip",
      },
    ],
  },
  {
    name: "Harsh Khulbe",
    text: "Lorem ipsum dolor sit amet, consrtetur adip",
    replies: [
      {
        name: "Harsh Khulbe",
        text: "Lorem ipsum dolor sit amet, consrtetur adip",
        replies: [
          {
            name: "Harsh Khulbe",
            text: "Lorem ipsum dolor sit amet, consrtetur adip",
          },
          {
            name: "Harsh Khulbe",
            text: "Lorem ipsum dolor sit amet, consrtetur adip",
          },
          {
            name: "Harsh Khulbe",
            text: "Lorem ipsum dolor sit amet, consrtetur adip",
          },
        ],
      },
      {
        name: "Harsh Khulbe",
        text: "Lorem ipsum dolor sit amet, consrtetur adip",
      },
      {
        name: "Harsh Khulbe",
        text: "Lorem ipsum dolor sit amet, consrtetur adip",
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-lg bg-stone-300 p-2 rounded-md my-3">
      <i class="fa-solid fa-user p-2"></i>

      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  if (!Array.isArray(comments)) {
    return null; // Handle non-array case here
  }
  return comments.map((comment, index) => (
    <div className="w-[800px]" key={index}>
      <Comment data={comment} />
      {comment.replies &&
        comment.replies.length > 0 && ( // Check if replies exist and have length
          <div className="pl-5 border border-l-black ml-5">
            <CommentsList comments={comment.replies} />
          </div>
        )}
      {/* <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div> */}
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
