import React from 'react'

const Videobackground = () => {
    return (
        <div className='overflow-x-hidden'>
            <iframe className='w-full aspect-video'height={"700px"} src="https://www.youtube.com/embed/_pBVTLsk8uE?si=_HwOB-IPN6u4ITDJ&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
}

export default Videobackground
