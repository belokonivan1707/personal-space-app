import { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { ProcessedPostData, ArticlesStoreTypes } from 'store/articles/types';
import Post from 'pages/articles/components/post/post';

const PostsContainer = () => {
  const posts = useSelector<ArticlesStoreTypes, ProcessedPostData[]>(store => store.articlesStore.usersData.processed);
  const observer = useRef<IntersectionObserver | any>(null);

  // const lastItemRef: any = useCallback((node: any) => {
  //   // console.log(node);
  //   // if (loading) return

  //   if (observer.current) observer.current.disconnect();

  //   observer.current = new IntersectionObserver(entries => {
  //     if (entries[0].isIntersecting) {
  //       console.log('visible');
  //     }
  //   });
  //   if (node) observer.current.observe(node);
  // }, []);

  const [countPosts, setCountPosts] = useState({ from: 0, to: 5 });
  const { from, to } = countPosts;

  return (
    <div>
      <h1>posts container</h1>
      {posts.slice(from, to).map((post, index) => {
        if (posts.length === index + 1) {
          // return <Post ref={lastItemRef} key={post.id} post={post} />;
        }
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
};

export default PostsContainer;
