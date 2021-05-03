import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Image from 'next/image'

import { selectAllThumbnails, fetchThumbnails } from './thumbnailsSlice'
import styles from './Thumbnails.module.css'

const Thumbnails = () => {
  const dispatch = useDispatch()
  const thumbnails = useSelector(selectAllThumbnails)
  const thumbnailsStatus = useSelector((state: any) => state.thumbnails.status)

  useEffect(() => {
    if (thumbnailsStatus === 'idle') {
      dispatch(fetchThumbnails())
    }
  }, [thumbnailsStatus, dispatch])

  console.log(thumbnails)
  return (
    <div className={styles.container}>
      {thumbnails.map((thumbnail: any) => (
        <div key={thumbnail.id} className={styles.thumbnail}>
          <Image
            alt={thumbnail.longTitle}
            src={thumbnail.webImage.url}
            width={500}
            height={500}
          />
          <div>{thumbnail.title}</div>
        </div>
      ))}
    </div>
  )
}

export default Thumbnails
