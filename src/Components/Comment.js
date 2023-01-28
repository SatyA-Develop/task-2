import './Comment.css'
import comnt from './data'

const Comment = () => {
  return (
    <div className='comment'>
      {
        comnt.map(({index,avtar,time,name, message})=>{
        return(
            <div key={index} className="comment-data">
                 
                    <div className="imgcls">
                    <img src={avtar} alt="profile" />
                    </div>
                
            <div className="comment-data-post">
                <div className="c-about">
                    <span>{name}</span>
                    <span>{time}</span>
                </div>
                <div className="c-message">
                    <p>{message}</p>
                </div>
            </div>
            </div>
        )
        })
      }
    </div>
  )
}

export default Comment