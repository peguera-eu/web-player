import { Content } from '../helpers/types';
import './player.css'
type PlayerProps ={
  content: Content;
}

export default function VideoPlayer({content}: PlayerProps) {
  const path = `http://localhost:3000/media/${content.file_name}`;

  return (
    <>
      {/* The Content itself */}
      <div className='row content-row'>
        <div className='col-12 text-center media-box'>
          {/* The content's media */}
          <video
            id='video'
            autoPlay muted
            className='img-fluid'
            src={path} />
        </div>
      </div>
    </>
  )
}