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
}

export interface FooterProps {
  start?: number
  end?: number
  row?: number
}
