import styles from './ErrorView.module.scss';

export function ErrorView() {
  return (
    <h2 className={styles.error}>
        Oops, something went wrong...
        We are doing our best to fix the issue.
    </h2>
  );
}
