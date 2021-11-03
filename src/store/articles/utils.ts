import { UsersCommentsData, UsersPostsData, UsersData } from './types';

export const combinePostsCommentsUsers = (
  comments: UsersCommentsData[],
  posts: UsersPostsData[],
  users: UsersData[]
) => {
  const test = posts.map(post => {
    return {
      ...post,
      // user:
      comments: comments.filter(comment => comment.postId === post.id),
    };
  });

  return [];
};
