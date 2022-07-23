import styles from './Footer.module.scss';

type FooterProps = {
    children: React.ReactNode
}

export function Footer(props : FooterProps) {
  return (
    <footer className={styles.footer}>{props.children}</footer>
  );
}


