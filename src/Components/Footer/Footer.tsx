import './Footer.scss'

type FooterProps = {
    children: React.ReactNode
}

export default function Footer(props : FooterProps) {
    return(
        <footer>{props.children}</footer>
    )
  }


