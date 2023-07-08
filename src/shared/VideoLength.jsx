import React from 'react'
import moment from "moment"
const VideoLength = ({time}) => {
const videLengthInSexonds = moment()
.startOf("day")
.seconds(time)
.format("H:mm:ss")
  return (
    <div className='absolute bottom-2 right-2 bg-black px-2 py-1 text-white text-xs rounded-md'>
     {videLengthInSexonds}
    </div>
  )
}

export default VideoLength
