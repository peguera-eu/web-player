'use client'
import { ReactElement, useEffect, useState } from "react";
import { Content } from "./helpers/types";
import ImagePlayer from "./components/image-player";
import VideoPlayer from "./components/video-player";

export default function Home() {
  const [currentContent, setCurrentContent] = useState<Content>();

  //Page Initial setup

  useEffect(() => {
    const sse = new EventSource(`//localhost:3000/contents/events`, {});
    function getRealtimeData(data: Content) {
      setCurrentContent(data);
    }
    sse.onmessage = e => getRealtimeData(JSON.parse(e.data));
    sse.onerror = () => {
      sse.close();
    }
    return () => {
      sse.close();
    };
  });

  //Conditional renders
  let currentContentPlayer: ReactElement;
  if (currentContent?.kind === "IMAGE") {
    currentContentPlayer = <ImagePlayer content={currentContent} />;
  } else if (currentContent?.kind === "VIDEO") {
    currentContentPlayer = <VideoPlayer content={currentContent} />;
  } else {
    currentContentPlayer = <h1>Waiting for content from controller</h1>
  }

  return (
    <div className="container-fluid fullscreen">
      <div className="row align-items-center">
        <main className="col-8 offset-2 player text-center align-self-center">
          {currentContentPlayer}
        </main>
      </div>
    </div>
  );
}
