import styled from 'styled-components'

export const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const ChevronAction = styled.div<{ reverse?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: background-color .3s ease-in;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(14, 31, 53, 0.12), 
              0 4px 8px rgba(14, 31, 53, 0.08);
  &:hover {
    background-color: ${({theme}) => theme.red};

    > svg path {
      fill: ${({theme}) => theme.white};
      transition: fill .3s ease-in;
    }
  }

  > svg {
    width: 24px;
    height: 24px;
    transform: ${({reverse}) => (reverse ? 'rotate(180deg)' : '')};

    path {
      fill: ${({theme}) => theme.yellow};
      transition: fill .3s ease-in;
    }
  }
`
