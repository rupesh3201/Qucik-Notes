import React from 'react'
import './home.css'
import shield from '../../Assets/shield (1).png'
import easy from '../../Assets/easy.png'
import Stress from '../../Assets/stress.png'
import FeatureCard from '../../Component/FeatureCard/featureCard'
const Features = [
  {
    featureImg:shield,
    featureDisc:"notes will be securely stored in browser local storage "

  }, 
  {
    featureImg:easy,
    featureDisc:"easy to use, life-time access "


  },
  {

  }
]
function Home() {
  return (
    <div>
    <div>
      <h1 className='Heading'> <span></span>Qucik <span></span>Notes 📝 </h1>
      <h4 className='SubHeading'>“ Start where<span>  you </span>are. Use what <span> you  </span> have.  Do what<span>  you  </span>can🥷🏻” </h4>
    </div>
    <div>
      <h3 className='whyquciknotes'> Why Quick Notes ? </h3>
      <div className='Feaures_container'>
        <FeatureCard />
        <FeatureCard/>
        <FeatureCard featureImg={Stress} featureDisc="use your brain to think, not to remember  "/>
      </div>
    </div>
    <div className='Button_container'>
      < button className='action_btn' > Add Notes ✏️ </button>
      < button className='action_btn' > Views Notes📄</button>
    </div>
    </div>
 
  )
}

export default Home