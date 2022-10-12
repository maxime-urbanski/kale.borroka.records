import styled from 'styled-components'
import { ButtonProps, ContainerFlexProps, GridProps, HRProps } from '../Interface/Interface'

export const Title1 = styled.h1`
  font-family: 'Ye Olde Oak', serif;
  font-weight: 100;
  margin: 0;
  text-align: center;

  @media (min-width: ${({ theme }) => `${theme.xs}px`}) {
    font-size: 3em;
  }

  @media (min-width: ${({ theme }) => `${theme.sm}px`}) {
    font-size: 4em;
  }

  @media (min-width: ${({ theme }) => `${theme.md}px`}) {
    font-size: 5em;
  }

  @media (min-width: ${({ theme }) => `${theme.lg}px`}) {
    font-size: 6em;
  }
`
export const Title2 = styled.h2`
  font-family: 'Soviet Program', serif;
  font-weight: 100;
  margin: 0 10px;
  text-align: center;

  @media (min-width: ${({ theme }) => `${theme.xs}px`}) {
    font-size: 1.5em;
  }

  @media (min-width: ${({ theme }) => `${theme.sm}px`}) {
    font-size: 2em;
  }

  @media (min-width: ${({ theme }) => `${theme.md}px`}) {
    font-size: 2.5em;
  }
  @media (min-width: ${({ theme }) => `${theme.lg}px`}) {
    font-size: 3em;
  }
`
export const Title3 = styled.h3`
  color: #d9534f;
  font-size: 28px;
  font-family: Gobold, sans-serif;
  font-weight: 600;
  margin: 0;
  text-align: center;
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
  margin: 10px;
  width: 30px;

  @media (max-width: 991px) {
    margin: 0;
  }
`
export const HR = styled.hr.attrs(({ margin, color }: HRProps) => ({
  margin: margin || 30,
  color: color || 'red',
}))`
  border-top: 1px solid ${({ theme, color }) => theme[color]};
  width: 50%;
  margin: ${({ margin }) => margin}px auto;
`
export const BanLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 0;
  width: 100%;
`
export const Container = styled.div<{ fluid?: boolean }>`
  width: ${({ fluid }) => (fluid ? 'auto' : '100%')};
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${({ theme }) => `${theme.xs}px`}) {
    width: 100%;
  }

  @media (min-width: ${({ theme }) => `${theme.sm}px`}) {
    width: 540px;
  }

  @media (min-width: ${({ theme }) => `${theme.md}px`}) {
    width: 720px;
  }
  @media (min-width: ${({ theme }) => `${theme.lg}px`}) {
    width: 960px;
  }
  @media (min-width: ${({ theme }) => `${theme.xl}px`}) {
    width: 1140px;
  }
  @media (min-width: ${({ theme }) => `${theme.xxl}px`}) {
    width: 1320px;
  }
`
export const Button = styled.div.attrs(
  ({ bg, border, color, width, height, fontSize, borderRadius }: ButtonProps) => ({
    bg: bg || '#b14542',
    border: border || '2px solid #d9534f',
    color: color || 'white',
    width: width || 80,
    height: height || 35,
    fontSize: fontSize || 15,
    borderRadius: borderRadius || 3,
  })
)`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
  border: ${({ border }) => border};
  background-color: ${({ theme, bg }) => theme[bg]};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  font-weight: 500;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
export const Row = styled.div.attrs(({ position, autoFlow, mb }: GridProps) => ({
  position: position || 'center',
  autoFlow: autoFlow || 'row',
  mb: mb || 20,
}))`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  justify-items: ${({ position }) => position};
  column-gap: 20px;
  row-gap: 50px;
  grid-auto-flow: ${({ autoFlow }) => autoFlow};
  margin-bottom: ${({ mb }) => (0 === mb ? mb : `${mb}px`)};

  @media (min-width: ${({ theme }) => theme.xs}) {
    grid-auto-flow: column;
  }
`
export const Column = styled.div.attrs(({ xs, sm, md, lg, xl, xxl }: GridProps) => ({
  xs: xs || 12,
  sm: sm || 12,
  md: md || 12,
  lg: lg || 12,
  xl: xl || 12,
  xxl: xxl || 12,
}))`
  margin: 0;
  width: 100%;

  @media (min-width: ${({ theme }) => `${theme.xs}px`}) {
    grid-column: span ${({ xs }) => xs};
  }

  @media (min-width: ${({ theme }) => `${theme.sm}px`}) {
    grid-column: span ${({ sm }) => sm};
  }

  @media (min-width: ${({ theme }) => `${theme.md}px`}) {
    grid-column: span ${({ md }) => md};
  }
  @media (min-width: ${({ theme }) => `${theme.lg}px`}) {
    grid-column: span ${({ lg }) => lg};
  }
  @media (min-width: ${({ theme }) => `${theme.xl}px`}) {
    grid-column: span ${({ xl }) => xl};
  }
  @media (min-width: ${({ theme }) => `${theme.xxl}px`}) {
    grid-column: span ${({ xxl }) => xxl};
  }
`
export const Pagination = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  & > li {
    display: inline-block;
  }
`
export const PaginationItem = styled.li`
  margin: 20px;
  padding: 0;
`

export const ContainerFlex = styled.div.attrs(
  ({ flexDirection, justifyContent, alignItems }: ContainerFlexProps) => ({
    alignItems: alignItems || 'center',
    flexDirection: flexDirection || 'row',
    justifyContent: justifyContent || 'center',
  })
)`
  display: flex;
  align-items: ${({ alignItems }) => alignItems};
  width: 100%;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
`
export const Input = styled.input`
  width: 350px;
  height: 60px;
  font-size: 20px;
  padding: 10px;
  margin: 20px;

  @media (max-width: 991px) {
    width: 280px;
  }
`
