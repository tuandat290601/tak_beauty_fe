import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Image = ({src, alt}) => {
  return (
    <LazyLoadImage src={src} alt={alt} placeholderSrc='https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='/>
  )
}

export default Image