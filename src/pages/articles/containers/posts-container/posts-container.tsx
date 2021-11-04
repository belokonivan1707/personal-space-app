import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { ProcessedPostData, ArticlesStoreTypes } from 'store/articles/types';
// import Post from 'pages/articles/components/post/post';
import style from './style.module.css';

function useOnScreen(option: any) {
  const [visible, setVisible] = useState(false);
  const ref: any = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, option);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, option]);

  return [ref, visible];
}

const PostsContainer = () => {
  const posts = useSelector<ArticlesStoreTypes, ProcessedPostData[]>(store => store.articlesStore.usersData.processed);

  const [ref, visible] = useOnScreen({ threshold: 1.0 });

  // console.log(visible);

  const [countPosts, setCountPosts] = useState({ from: 0, to: 5 });
  const { from, to } = countPosts;

  useEffect(() => {
    if (visible) {
      setCountPosts(() => ({ ...countPosts, to: to + 5 }));
      console.log('work');
    }
  }, [visible]);

  console.log(to);

  return (
    <div>
      <h1>posts container</h1>
      {posts.slice(from, to).map((post, index) => {
        if (to === index + 1) {
          return (
            <div className={style.test_post} ref={ref} key={post.id}>
              last item
            </div>
          );
        }
        return (
          <div className={style.test_post} key={post.id}>
            {post.id}
          </div>
        );
      })}
    </div>
  );
};

export default PostsContainer;
