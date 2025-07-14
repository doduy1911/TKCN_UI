"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'

const ImageGallery = ({ data }) => {
   const [currentImage, setCurrentImage] = useState(null)

   useEffect(() => {
      // Get current day
      const currentDate = new Date()
      const day = currentDate.getDate()
      const month = currentDate.getMonth() + 1
      const year = currentDate.getFullYear()
      const currentDay = day + '/' + month + '/' + year

      // Find the suitable image based on the current date.
      const matchingImage = data && data.find((item) => {
         const itemDate = new Date(item.date)
         const itemDay = itemDate.getDate()
         const itemMonth = itemDate.getMonth() + 1
         const itemYear = itemDate.getFullYear()

         const formattedItemDate = itemDay + '/' + itemMonth + '/' + itemYear
         return formattedItemDate === currentDay

      })

      // If no image is found for the current date, retrieve the image from the nearest date in the past.
      const closestImage = data && data.reduce((closest, item) => {
         const itemDate = new Date(item.date)
         return itemDate <= currentDate && itemDate > new Date(closest.date) ? item : closest
      }, data[0])

      setCurrentImage(matchingImage || closestImage)
   }, [data])

   return currentImage?.url ? <Image
      src={currentImage?.url}
      alt={`Banner for ${currentImage ? currentImage.date : "default"}`}
      width={0}
      height={0}
      sizes="100vw"
      className=" h-[70px] md:h-[100px] w-full object-cover rounded-[5px]"
   /> : null;
}

export default ImageGallery
