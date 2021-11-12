import { UsersCommentsData, UsersPostsData, UsersData } from './types';

export const combinePostsCommentsUsers = (
  comments: UsersCommentsData[],
  posts: UsersPostsData[],
  users: UsersData[]
) => {
  if (comments.length && posts.length && users.length) {
    const processedPostsData = posts.map(post => {
      return {
        ...post,
        user: users.find(user => user.id === post.userId),
        comments: comments.filter(comment => comment.postId === post.id),
      };
    });

    return processedPostsData;
  }

  return [];
};
