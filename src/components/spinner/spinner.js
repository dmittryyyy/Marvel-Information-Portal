import loadingGif from './loading.gif';

const Spinner = () => {
  return (
    <img style={{
      display: 'block', width: '550px', height: '260px',
      objectFit: 'contsin', margin: '0 auto'
    }} src={loadingGif} alt="Error" />
  )
}

export default Spinner;