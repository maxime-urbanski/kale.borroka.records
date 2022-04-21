import React, { ReactElement, useState } from 'react'
import {
  Carousel,
  CarouselContainer,
  CarouselItem,
  ChevronActionNext,
  ChevronActionPrevious,
} from '../../styles/slider'
import Chevron from '../Layout/Svg/chevron'
import ArticleDetail from '../DetailArticle/ArticleDetail'
import Tracklist from '../DetailArticle/Tracklist'

interface ElementToSlide {
  title: string
  component: ReactElement<JSX.Element>
}

const Slider = (props): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const data: ElementToSlide[] = [
    {
      title: 'coucou',
      component: <ArticleDetail {...props} />,
    },
    {
      title: 'Tracklist',
      component: <Tracklist {...props} />,
    },
  ]

  const next = (): void => {
    setCurrentIndex(currentIndex + 1)
    if (currentIndex >= data.length - 1) {
      setCurrentIndex(0)
    }
  }

  const previous = (): void => {
    setCurrentIndex(currentIndex - 1)
    if (0 >= currentIndex) {
      setCurrentIndex(data.length - 1)
    }
  }

  const translateX = `translateX(-${currentIndex * 100}%)`

  return (
    <Carousel>
      <ChevronActionPrevious onClick={previous}>
        <Chevron />
      </ChevronActionPrevious>
      <CarouselContainer style={{ transform: translateX }}>
        {data.map(({ component }, index) => (
          <CarouselItem key={index}>{component}</CarouselItem>
        ))}
      </CarouselContainer>
      <ChevronActionNext onClick={next}>
        <Chevron />
      </ChevronActionNext>
    </Carousel>
  )
}

export default Slider
