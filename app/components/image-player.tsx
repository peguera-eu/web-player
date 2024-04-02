import { Content } from '../helpers/types';
import './player.css'
type PlayerProps ={
  content: Content;
}

export default function ImagePlayer({content}: PlayerProps) {

  const path = `http://localhost:3000/media/${content.file_name}`

  return (
    <>
      {/* Content title */}
      <div className="row">
        <div className="col-12 text-center">
          <h1>{`${content.title}`}</h1>
          <h2>{`${content.subtitle}, ${content.release_year}`}</h2>
        </div>
      </div>
      {/* The Content itself */}
      <div className="col-10 offset-1 text-center media-box">
        {/* The content's media */}
        <div className='image-wrapper'>
          <img className='img-fluid media-box' src={path} />
        </div>
      </div>
      {/* Content metadata */}
      <div className="row">
        <div className="col-12 text-center metadata">
          <h2>Artist: {content.author_name}</h2>
          <h3>Technique: {content.technique}</h3>
        </div>
      </div>
    </>
  )
}