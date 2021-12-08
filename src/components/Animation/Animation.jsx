import React from 'react'
import Lottie from 'lottie-web'
import animationData from './animation_data'

const Animation = () => {
  React.useEffect(() => {
    Lottie.loadAnimation({
      container: document.querySelector('.jsAnimation'),
      animationData,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      rendererSettings: {
        progressiveLoad: false,
        preserveAspectRatio: 'xMidYMid slice',
      },
      assetsPath: '../Animation/',
    })
  }, [])

  return (
    <section className="Section u-noPaddedBottom u-bg-jobs-bastille">
      <div className="Section-content">
        <div className="AnimationWrapper AnimationWrapper--jobs u-bg-jobs-bastille">
          <div className="jsAnimation"></div>
        </div>
      </div>
    </section>
  )
}

export default Animation
