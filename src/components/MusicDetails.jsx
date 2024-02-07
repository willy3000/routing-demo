import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";

export default function MusicDetails({ music }) {
  const [details, setDetails] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  console.log(params.id);

  const getMusicDetails = () => {
    const details = music.find((song) => {
      return song.id.toString() === params.id.toString();
    });
    console.log("details", details);
    setDetails(details);
  };

  useEffect(() => {
    getMusicDetails();
  }, []);

  return (
    <div className="details-container">
    
    <div className="song-details-container">
      <p>{`name: ${details?.name}`}</p>
      <p>{`artist: ${details?.artist}`}</p>
      <p>{`genre: ${details?.genre}`}</p>
    </div>
    <button onClick={() => navigate("/mymusic")}>back</button>
    </div>
  );
}
