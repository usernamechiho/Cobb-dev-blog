import styles from './modal.module.scss';

interface IChildrenProps {
  children: JSX.Element | JSX.Element[];
}

function Modal({ children }: IChildrenProps) {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>{children}</div>
    </div>
  );
}

export default Modal;
