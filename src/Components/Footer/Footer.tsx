import './Footer.module.scss';

type FooterProps = {
    children: React.ReactNode
}

export function Footer(props : FooterProps) {
  return (
    <footer className='footer'>{props.children}</footer>
  );
}


