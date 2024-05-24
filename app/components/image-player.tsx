import { Content } from '../helpers/types';
import './player.css'
type PlayerProps ={
  content: Content;
}

export default function ImagePlayer({content}: PlayerProps) {

  const path = `http://localhost:3000/media/${content.file_name}`

  return (
    <>
      {/* The Content itself */}
      <div className="col-12 text-center media-box">
        {/* The content's media */}
        <div className='image-wrapper'>
          <img id="image" className='img-fluid media-box' src={path} />
        </div>
      </div>
    </>
  )
}