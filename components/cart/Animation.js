import React from 'react';

import Lottie from 'react-lottie';
import animationData from '../../lotties/add-to-cart.json';

export default function Animation( props ) {
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="cart-animation">
      <Lottie
        options={defaultOptions}
        height={26}
        width={28}
        isStopped={!props.isStopped}
      />
    </div>
  );
}
