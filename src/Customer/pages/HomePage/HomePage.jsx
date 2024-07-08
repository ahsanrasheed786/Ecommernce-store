import React from 'react'
import MainCarousel from '../../Component/Home Carousel/MainCarousel'
import HomeSectionCarousel from '../../Component/Home Carousel/HomeSectionCarousel'
import { mens_kurta } from '../../../Data/Mens/Kurta'

const HomePage = () => {
  return (
    <>
<main>
<MainCarousel/>


<section className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
    <HomeSectionCarousel data={mens_kurta} SectionName="Men's Kurta"/>
    <HomeSectionCarousel data={mens_kurta} SectionName="Women's Kurta"/>

</section>
</main>

    </>
  )
}

export default HomePage