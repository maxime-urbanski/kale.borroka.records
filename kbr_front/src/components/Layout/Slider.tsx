import React,{useState, useEffect} from 'react';
import { ArticleName } from '../../../src/styles/album'
import { SliderContainer, ChevronAction } from '../../../src/styles/slider'
import Chevron from '../Layout/Svg/chevron'
import RowOneColumn from '../Layout/RowOneColumn'
import ArticleDetail from '../DetailArticle/ArticleDetail';
import Tracklist from '../DetailArticle/Tracklist';

const Slider = (props) => {
  const [currentIndex, setCurrentIndex ] = useState(0)

  const data = [
    {
      title: "coucou",
      component: <ArticleDetail {...props}/>
    },
    {
      title: "Tracklist",
      component: <Tracklist {...props} />,
    }
  ];

  const next = () => {
    setCurrentIndex(currentIndex + 1)

    if (currentIndex  >= data.length -1) {
      setCurrentIndex(0)
    }
  }

  const previous = () => {
    setCurrentIndex(currentIndex - 1)

    if (currentIndex <= 0) {
      setCurrentIndex(data.length - 1)
    }
  }


  useEffect(() => {
  },[currentIndex, data.length])

  return (
    <>
      <RowOneColumn mb={20} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
        <ArticleName fontSize={35}>{props.Album.fullName}</ArticleName>
      </RowOneColumn>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <ChevronAction onClick={previous} reverse>
          <Chevron />
        </ChevronAction>
        {
          [data[currentIndex]].map(({component }, index) => (
            <div key={index}>
              {component}
            </div>
          ))
        }
        <ChevronAction onClick={next}>
          <Chevron/>
        </ChevronAction>
      </div>
    </>
  )
}

export default Slider;
