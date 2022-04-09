import errorGif from './error.gif'

const ErrorMessage = () => {
    return (
        <img style={{display:'block', width: '550px', height: '260px',
    objectFit:'contsin', margin: '0 auto'}} src={errorGif} alt="Error" />
    )
}

export default ErrorMessage;