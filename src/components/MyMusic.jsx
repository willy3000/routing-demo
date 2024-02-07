import React from "react";
import { useNavigate } from "react-router";


export default function MyMusic({music}) {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/mymusic/${id}`);
  };

  return (
    <div>
      {music.map((song) => {
        return (
          <div
            className="song-container"
            onClick={() => handleNavigate(song.id)}
          >
            <p>{song.name}</p>
            <p>{song.artist}</p>
          </div>
        );
      })}
    </div>
  );
}
