import './Comments.css'
import Comment from './Comment'
import comnt from './data'

const Comments = () => {
  return (
    <div className='comments-main'>
        <h1> {comnt.length} Comments</h1>
        <Comment/>
    </div>
  )
}

export default Comments