import React, { Fragment } from 'react';

// import styles from './PostList.scss';
import classNames from 'classnames/bind';
import PostPreview from '/PostPreview';
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';

// const cx = classNames.bind(styles);

// const PostList = ({ isAuthenticated, posts }) => {
const PostList = ({posts }) => {
  if (posts === undefined) {
    return null;
  }

  const postList = posts.map((post) => {
    return (
      <div key={post.get("id")}>
        <div className='post'>
          <PostPreview post={post} />
        </div>
      </div>
    )
  });

  return (
    <Fragment>
      isAuthenticated 
      {postList}
    </Fragment>
  )
};

export default PostList;