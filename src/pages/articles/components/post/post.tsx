import { ProcessedPostData } from 'store/articles/types';
import style from './styles.module.css';

interface Props {
  post: ProcessedPostData;
}

const Post = ({ post }: Props) => {
  // console.log(window.document.body.scrollHeight);

  const { id } = post;
  return (
    <div className={style.card}>
      <h1>{id}</h1>
    </div>
  );
};

export default Post;
