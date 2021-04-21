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
  text?: string
  border?: string
  position?: string
  width?: string
  height?: string
}
