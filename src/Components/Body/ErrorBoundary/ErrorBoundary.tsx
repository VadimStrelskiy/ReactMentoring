import './ErrorBoundary.scss'

type ErrorBoundaryProps = {
    children: React.ReactNode
}

export default function ErrorBoundary(props: ErrorBoundaryProps) {
    const ErrorText = () => (
        <h2>
            Oops, something went wrong... We are doing our best to fix the issue.
        </h2>
    )

    let isOk = true;
    return <>{isOk ? props.children : <ErrorText/>}</>
}