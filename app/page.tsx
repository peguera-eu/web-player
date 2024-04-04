'use client'
import { ReactElement, useEffect, useState } from "react";
import io from 'socket.io-client'
import { Content } from "./helpers/types";
import ImagePlayer from "./components/image-player";
import VideoPlayer from "./components/video-player";

export default function Home() {
  const [currentContent, setCurrentContent] = useState<Content>();

  //Page Initial setup
  useEffect(() => {
    const socket = io('http://localhost:3000');

    console.log('called useeffect');
    //Connect to websocket, read from it and set content
    socket.on('content', (message) => {
      console.log(message);
      setCurrentContent(message);
    });
  });

  //Conditional renders
  let currentContentPlayer: ReactElement;
  if (currentContent?.kind === "IMAGE") {
    currentContentPlayer = <ImagePlayer content={currentContent} />;
  } else if(currentContent?.kind === "VIDEO"){
    currentContentPlayer = <VideoPlayer content={currentContent}/>;
  } else {
    currentContentPlayer = <h1>Waiting for content from controller</h1>
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <main className="col-6 offset-3 player text-center">
          {currentContentPlayer}
        </main>
      </div>
    </div>
  );
}
