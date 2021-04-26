import styled from 'styled-components'
import {
  BreadCrumbProps,
  ButtonProps,
  ColumnArticleProps,
  ContainerProps,
  GridProps,
} from '../Interface/Interface'

export const Title1 = styled.h1`
  font-family: 'Ye Olde Oak';
  font-size: 6em;
  font-weight: 100;
  margin: 0;
  text-align: center;
`
export const Title2 = styled.h2`
  font-family: 'Soviet Program';
  font-size: 3em;
  font-weight: 100;
  margin: 0 10px;
  text-align: center;
`
export const Title3 = styled.h3`
  color: #d9534f;
  font-size: 1.5em;
  font-weight: 600;
  margin: 20px 0 5px 0;
`
export const Title4 = styled.h4`
  color: white;
  font-size: 1.2em;
  font-weight: 600;
  margin: 20px 0 5px 0;

  &:hover {
    color: #d9534f;
  }
`

export const Icon = styled.img`
  height: 30px;
  margin: 10px;
  width: 30px;
`

export const HR = styled.hr`
  border: 5px solid red;
  width: 75%;
`

export const BanLogo = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: center;
  padding: 300px 0 200px;
  width: 100wv;
`

export const Container = styled.div.attrs(
  ({ column, row, rowGap, columnGap, autoFlow, rowSize, columnSize }: ContainerProps) => ({
    autoFlow: autoFlow || 'row',
    column: column || 3,
    columnGap: columnGap || 20,
    columnSize: columnSize || '1fr',
    row: row || 'auto-fill',
    rowGap: rowGap || 50,
    rowSize: rowSize || 'auto',
  })
)<{ fluid?: boolean }>`
  max-width: ${({ fluid }) => (fluid ? '1200px' : '100%')};
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(${({ column }) => column}, ${({ columnSize }) => columnSize});
  grid-template-rows: repeat(${({ row }) => row}, ${({ rowSize }) => rowSize});
  column-gap: ${({ columnGap }) => `${columnGap}px`};
  row-gap: ${({ rowGap }) => `${rowGap}px`};
  grid-auto-flow: ${({ autoFlow }) => autoFlow};

  & > div {
    display: grid;
  }
`
export const ColumnArticle = styled.div.attrs(({ area }: ColumnArticleProps) => ({
  area: area || [1, 1, 7, 2],
}))`
  grid-area: ${({ area }) => `${area[0]} / ${area[1]} / ${area[2]} / ${area[3]}`};
`

export const Button = styled.div.attrs(
  ({ bg, border, color, width, height, fontSize, borderRadius }: ButtonProps) => ({
    bg: bg || '#b14542',
    border: border || '2px solid #d9534f',
    color: color || '#b14542',
    width: width || 80,
    height: height || 35,
    fontSize: fontSize || 15,
    borderRadius: borderRadius || 3,
  })
)`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
  background-color: ${({ bg }) => bg};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  font-weight: 500;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const BreadCrumb = styled.ul`
  list-style: none;

  & > li {
    display: inline-block;
    &:before {
      padding: 0 15px;
      content: '>';
    }
  }
`

export const BreadCrumbItem = styled.li.attrs(({ fontSize }: BreadCrumbProps) => ({
  fontSize: fontSize || 20,
}))<{ disable?: boolean }>`
  font-size: ${({ fontSize }) => fontSize}px;
  font-family: Gobold;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${({ disable, theme }) => (disable ? '#6c757d' : theme.red)};

  &:first-of-type:before {
    content: '';
    padding: 0;
  }
`
export const Row = styled.div.attrs(({ row, position }: GridProps) => ({
  row: row || 1,
  position: position || 'start',
}))`
  grid-row: span ${({ row }) => row};
  justify-items: ${({ position }) => position};
`
export const Column = styled.div.attrs(({ col }: GridProps) => ({
  col: col || 3,
}))`
  grid-column: span ${({ col }) => col};
`
