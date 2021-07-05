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
  link?: string
  url?: string
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
  bottom?: number
  borderRadius?: string
}

export interface AvailableProps {
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
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  xxl?: number
  position?: string
  autoFlow?: string
  mb?: number
}

export interface BreadCrumbProps {
  fontSize?: number
  links: string[]
}

export interface PictureProps {
  width: number
  mR?: number
  mL?: number
  mT?: number
  mB?: number
  borderRadius: number
}

export interface ArticleProps {
  fontSize?: number
}

export interface ArticleDetailProps {
  quantity: number
  i?: number
}

export interface TextProps {
  color?: string
  fontSize?: number
}

export interface ContainerFlexProps {
  flexDirection?: string
  alignItems?: string
  justifyContent?: string
}

export interface HRProps {
  margin?: number
  color?: string
}

export interface AlbumProps {
  Album: {
    name: string
    folder: string
    kbrProd: boolean
    Artist: {
      name: string
    }
  }
  Price: { price: number }
  Format: { name: string }
}
