import PropTypes from 'prop-types'
import Lottie from 'lottie-react'
import animationData from '../../animations/success.json'
import './SuccessMsg.css'

export default function SuccessMsg({ msg }) {
    return (
        <div className='success-msg-container'>
            {msg && <Lottie
                className='success-icon'
                animationData={animationData}
                loop={true}
                style={{width: 25, height: 25}}
            />}
            <h3>{msg}</h3>
        </div>
    )
}

SuccessMsg.propTypes = {
    msg: PropTypes.string
}