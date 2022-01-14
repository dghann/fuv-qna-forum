import React, { Fragment } from 'react';

// import styles from './PostPreview.scss';
import classNames from 'classnames/bind';
import moment from 'moment';
import renderHTML from 'react-render-html';
import { Link } from 'react-router-dom'


// const cx = classNames.bind(styles);


const PostPreview = ({ post }) => {
  if (post === undefined) {
    return null;
  }
  let postContent = post.get("content");
  if (postContent.length > 150) {
    postContent = postContent.substring(0, 150) + '...';
  }

  return (
    <Fragment>
      <div className="postHeader">
        <div className="postInfor">
          {post.get("userName")}
          <span> {`  `} </span>
          {post.get("createdDate")}
        </div>
        <h5 className="postTitle">
          <Link to={"/posts/" + post.get("id")}>{post.get("title")}</Link>
        </h5>
      </div>
      <div className='postContent'>{renderHTML(postContent)}</div>
    </Fragment>
  )
};

export default PostPreview;