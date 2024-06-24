import imageMobile from '../assets/images/image-web-3-mobile.jpg'
import imageDesktop from '../assets/images/image-web-3-desktop.jpg'

const MainArticle = () => {
  return (
    <section className='mb-12'>
      <picture>
        <source media="(max-width: 640px)" srcSet={imageMobile} />
        <source media="(min-width: 640px)" srcSet={imageDesktop} />
        <img src={imageMobile} alt="Foto del artículo principal" />
      </picture>
      <div className='sm:flex'>
        <h2 className='flex-1 text-[40px] font-bold sm:text-[58px] leading-none py-6'>The Bright Future of Web 3.0?</h2>
        <div className='flex-1 pt-9'>
          <p className='text-[13px] mb-10 sm:text-[15px]'>
            We dive into the next evolution of the web that claims to put
            the power of the platforms back into the hands of the people.
            But is it really fulfilling its promise?
          </p>
          <button className='bg-SoftRed text-white px-6 py-3 w-[185px] h-[48px] uppercas hover:bg-VeryDarkBlue'>Read more</button>
        </div>
      </div>
    </section>
  )
}

export default MainArticle