import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { selectAllThumbnails, fetchThumbnails } from './thumbnailsSlice'
import styles from './Thumbnails.module.css'

const Thumbnail = ({ thumbnail }) => (
  <div>
    <img
      className={styles.thumbnail}
      alt={thumbnail.longTitle}
      src={thumbnail.webImage.url}
    />
    <div className={styles.titleContainer}>{thumbnail.title}</div>
    <div className={styles.subTitleContainer}>
      {thumbnail.longTitle.split(',').slice(-2).join(',')}
    </div>
  </div>
)

const Thumbnails = () => {
  const dispatch = useDispatch()
  const thumbnails = useSelector(selectAllThumbnails)
  const thumbnailsStatus = useSelector((state: any) => state.thumbnails.status)

  useEffect(() => {
    if (thumbnailsStatus === 'idle') {
      dispatch(fetchThumbnails())
    }
  }, [thumbnailsStatus, dispatch])

  if (thumbnailsStatus === 'succeeded') {
    return (
      <div className={styles.container}>
        <div className={styles.column}>
          {thumbnails.slice(0, 3).map((thumbnail: any) => (
            <Thumbnail key={thumbnail.id} thumbnail={thumbnail} />
          ))}
        </div>

        <div className={styles.column}>
          {thumbnails.slice(3, 6).map((thumbnail: any) => (
            <Thumbnail key={thumbnail.id} thumbnail={thumbnail} />
          ))}
        </div>

        <div className={styles.column}>
          {thumbnails.slice(6, 8).map((thumbnail: any) => (
            <Thumbnail key={thumbnail.id} thumbnail={thumbnail} />
          ))}
        </div>

        <div className={styles.column}>
          {thumbnails.slice(8).map((thumbnail: any) => (
            <Thumbnail key={thumbnail.id} thumbnail={thumbnail} />
          ))}
        </div>
      </div>
    )
  } else {
    return <div>Loading</div>
  }
}

export default Thumbnails
