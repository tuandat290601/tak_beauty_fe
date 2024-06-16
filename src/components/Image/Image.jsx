import React, { useState } from 'react'

const Image = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);

  function onLoad() {
    setIsLoading(false)
  }

  return (
    <>
      <img
        alt={alt}
        src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
        style={{ display: isLoading ? "block" : "none", objectFit: "cover", width: "100%", height: "100%" }}
      />
      <img
        alt={alt}
        src={src}
        style={{ display: isLoading ? "none" : "block", objectFit: "cover", width: "100%", height: "100%" }}
        onLoad={onLoad}
      />
    </>
  );
}


export default Image