import "../assets/font.css"
import TiltedCard from '../ux/Card'
const Pages2 = () => {
  return (
    <div className='flex h-auto'>
        <div className='flex flex-col-reverse justify-evenly md:flex-row-reverse items-center gap-10'>
            <div className='md:w-[50%]'>
                <h1 className='font-[Monserrat]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sit saepe ab quae similique iste veritatis officiis, nisi a. Quaerat, est autem! Impedit veritatis itaque amet deserunt mollitia suscipit!</h1>
                <button className='btn-primary mt-9 btn-soft btn'>Download CV</button>
                </div>
                <div className='w-auto'>
        <TiltedCard
imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
altText="Kendrick Lamar - GNX Album Cover"
captionText="Kendrick Lamar - GNX"
containerHeight="300px"
containerWidth="300px"
imageHeight="300px"
imageWidth="300px"
rotateAmplitude={12}
scaleOnHover={1.2}
showMobileWarning={false}
showTooltip={true}
displayOverlayContent={true}
overlayContent={
  <p className="tilted-card-demo-text">
    Kendrick Lamar - GNX
  </p>
}
/>
                </div>
        </div>
    </div>
  )
}

export default Pages2