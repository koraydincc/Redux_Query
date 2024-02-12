import React from 'react'

function PhotoListItem({photo}) {
    console.log(photo)
  return (
    <div>
      <img src={photo.url} alt="" />
    </div>
  )
}

export default PhotoListItem
