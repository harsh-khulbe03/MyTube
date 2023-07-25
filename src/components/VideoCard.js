import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="w-80 m-3">
      <img
        className="rounded-xl w-80 h-56"
        alt="thumbnail"
        src={thumbnails.medium.url}
      />
      <ul className="mx-3 my-2">
        <li className="font-bold text-md">{title}</li>
        <li className="text-zinc-800 text-md">{channelTitle}</li>
        <li className="text-zinc-800 text-md">
          {Math.floor(statistics.viewCount / 1000)}K views
        </li>
        <li></li>
      </ul>
    </div>
  );
};

export default VideoCard;
