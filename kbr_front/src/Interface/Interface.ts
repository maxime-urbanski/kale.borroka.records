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
