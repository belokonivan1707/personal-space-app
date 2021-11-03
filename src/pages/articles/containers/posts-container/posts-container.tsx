import { useSelector } from 'react-redux';
import Post from 'pages/articles/components/post/post';
import { PostsCommentsData, ArticlesStoreTypes } from 'store/articles/types';

const PostsContainer = () => {
  const postsCommentsUsers = useSelector<ArticlesStoreTypes, PostsCommentsData>(store => store.articlesStore.usersData);

  const { posts, comments, users } = postsCommentsUsers;

  

  return (
    <div>
      <h1>posts container</h1>
    </div>
  );
};

export default PostsContainer;
