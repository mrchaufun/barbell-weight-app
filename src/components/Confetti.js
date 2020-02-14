import React from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';

const Confetti = () => {
    return (
        <ConfettiCannon count={200} origin={{x: -10, y: 0}} />
    )
}

export default Confetti;