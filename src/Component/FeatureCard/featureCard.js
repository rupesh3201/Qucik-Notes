import React from 'react'
import './featureCard.css'
function FeatureCard({featureImg, featureDisc}) {
  return (
    <div>
    <div className='Features_card'>
        <img src={featureImg} className='Features_Logo'></img>
        <p className='Features_Dispt'>{featureDisc} </p>
      </div>
      </div>
  )
}

export default FeatureCard