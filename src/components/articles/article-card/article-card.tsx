import styles from './styles.module.css';

interface Props {
  article: {
    id: number;
    title: string;
    date: string;
    body: string[];
  };
}

const ArticlesCard = ({ article }: Props) => {
  const { title, date, body } = article;
  return (
    <div className={styles.card}>
      <div>
        <h3>{title}</h3>
        <p>{date}</p>
      </div>
      <div>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default ArticlesCard;
