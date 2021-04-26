import React from 'react'

export interface ChildrenReact {
  children: React.ReactChild | React.ReactChildren
}

export interface IconsProps {
  index?: number
  name: string
  img: string
  url?: string
}

export interface Link {
  name: string
  link: string
}

export interface NavProps {
  array?: IconsProps[]
}

export interface CardStyledProps {
  bg?: string
  color?: string
  border?: string
  position?: string
  width?: number | string
  height?: number | string
  column?: number
  flexDir?: string
  fontSize?: number
  left?: number
  bottom?: string
  borderRadius?: string
}
export interface ContainerProps {
  rowGap?: number
  columnGap?: number
  position?: string
  column?: number
  autoFlow?: string
  row?: number
  columnSize?: string
  rowSize?: string
}

export interface ColumnArticleProps {
  area: number[]
}

export interface AvailableProps {
  area: number[]
  title: string
}

export interface FooterProps {
  start?: number
  end?: number
  row?: number
}

export interface ButtonProps {
  bg?: string
  border?: string
  color?: string
  width?: number
  height?: number
  fontSize: number
  borderRadius?: number
}

export interface GridProps {
  row?: number
  col?: number
  position?: string
}

export interface BreadCrumbProps {
  fontSize?: number
}