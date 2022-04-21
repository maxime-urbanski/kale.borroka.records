import styled from 'styled-components'

export const Carousel = styled.div`
  display: flex;
  align-items: center;
  overflow-x: hidden;
  border: 1px solid red;
  clear: both;
  position: relative;
`

export const CarouselContainer = styled.div`
  white-space: nowrap;
  transition: transform .5s ease-in-out;
`
export const CarouselItem = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const ChevronAction = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: background-color 0.3s ease-in;
  cursor: pointer !important;
  box-shadow: 0 1px 4px rgba(14, 31, 53, 0.12), 0 4px 8px rgba(14, 31, 53, 0.08);
  z-index: 10;
  background-color: ${({ theme }) => theme.white};
  
  > svg {
    width: 24px;
    height: 24px;
    path {
      fill: ${({ theme }) => theme.yellow};
      transition: fill 0.3s ease-in;
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.red};

    > svg {
      path {
        fill: ${({ theme }) => theme.white};
      }
    }
  }
`

export const ChevronActionPrevious = styled(ChevronAction)`
  left: 20px;

  > svg {
    transform: rotate(180deg);
  }
`

export const ChevronActionNext = styled(ChevronAction)`
  right: 20px;
`
