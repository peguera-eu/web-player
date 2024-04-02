import { Content } from '../helpers/types';
import './player.css'
type PlayerProps ={
  content: Content;
}

export default function VideoPlayer({content}: PlayerProps) {
  const path = `http://localhost:3000/media/${content.file_name}`;

  return (
    <>
      {/* Content title */}
      <div className='row'>
        <div className='col-12 text-center'>
          <h1>{`${content.title}`}</h1>
          <h2>{`${content.subtitle}, ${content.release_year}`}</h2>
        </div>
      </div>
      {/* The Content itself */}
      <div className='row content-row'>
        <div className='col-10 offset-1 text-center media-box'>
          {/* The content's media */}
          <video
            id='video'
            autoPlay muted
            className='img-fluid'
            src={path} />
        </div>
      </div>
      {/* Content metadata */}
      <div className='row'>
        <div className='col-12 text-center metadata'>
          <h2>Artist: {content.author_name}</h2>
          <h3>Technique: {content.technique}</h3>
        </div>
      </div>
    </>
  )
}