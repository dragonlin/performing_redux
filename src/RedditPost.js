import React from 'react';
import styles from './RedditPost.css'
import moment from 'moment'

export default (props) => {
  console.log(props)
  return <div className="redditPostContainer">
    <a href="http://google.com">{props.title}</a>
    <div className="redditPostBottomContainer">
      <p className="comments">{props.comments} Comments</p>
      <p>Submitted {moment(props.submitted).fromNow()}</p>
      <p>{props.userName}</p>
    </div>
  </div>
}
