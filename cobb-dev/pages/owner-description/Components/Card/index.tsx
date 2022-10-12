import styles from './card.module.scss';

interface IInfoType {
  info: {
    title: string;
    desc: string;
  };
}

const Card = ({ info }: IInfoType) => {
  return (
    <div className={styles.cardContainer}>
      <h1>{info.title}</h1>
      <div />
      <p>{info.desc}</p>
    </div>
  );
};

export default Card;
