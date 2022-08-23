import React, { useEffect, useState } from "react"
import { Photo } from "../models/photo"
import PhotoView from "../components/PhotoView"
import "./Feed.css"



function Feed() {
//  keep tract of an array of type "Photo" from model above
   const [photos,setPhotos] = useState<Photo[]>([])
   // pull the ig-clone-backend photos from localhost:5001
  useEffect(() => {
   fetch( "http://localhost:5001/photos")
   .then(res => res.json())
   .then((data:Photo[])=>{
      setPhotos(data)
   })
  }, [])

  return (
    <>
      <h1> The feed </h1>
      <p>
         {photos.map((photo:Photo)=>{
            return <PhotoView key={photo._id} photo={photo} setPhotos={setPhotos}/>
            // return <div><img src={photo.photoUrl}/></div>
         })}
      </p>
    </>
  )
}

export default Feed
