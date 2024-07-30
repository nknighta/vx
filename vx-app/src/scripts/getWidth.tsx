import React, { useEffect, useState } from 'react'

export const getWindowWidth = () => {
  const [width, setWidth] = useState<number>(0)
  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth)
    })
  }, [width])
  return width
}

export const getWindowHight = () => {
  const [height, setHeight] = useState<number>(0);
  useEffect(() => {
    setHeight(window.innerHeight)
    window.addEventListener('resize', () => {
      setHeight(window.innerHeight)
    })
  }, [height])
  return height
}