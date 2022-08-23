import  { Photo } from "../models/photo"

const photoAPIUrl = "http://localhost:5001/photos/"

export async function updateLike(photoId: string): Promise<number>{

    //PATCH/ photo/{PHOTO_ID} with a body of {likes:1}

 const fetchPhotos = await fetch(photoAPIUrl+photoId,{
        method:"PATCH",
        headers:{"context-type":"application/json"},
        body: JSON.stringify({ likes:1 })
    })
    const photo: Photo = await fetchPhotos.json()
    const newLikes: number =photo.likes || 0
    return newLikes + 1
}


export async function getPhotos(): Promise<Photo[]> {
    try{
    const fetchPhotos = await fetch(photoAPIUrl)
    const photoList: Photo[] = await fetchPhotos.json()
    return photoList
} catch(err){
    console.error(err)
    return [] // we have crashed BUT we can return an empty array
}

//     fetch("https://live.floridajs.com/photos")
//    .then(res => res.json())
//    .then((data:Photo[])=>{
//       setPhotos(data)
//    })
}



