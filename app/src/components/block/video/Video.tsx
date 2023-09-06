import Youtube from './youtube/Youtube'

export interface VideoProps {
    url: string
}

const VideoInner = ({ url, ...props }: VideoProps) => {
    if (url.startsWith('https://www.youtube.com/')) {
        return <Youtube url={url} />
    }
    return <div></div>
}

const Video = ({ url, ...props }: VideoProps) => {
    return (
        <div className='rounded-md drop-shadow-md'>
            <VideoInner {...props} url={url} />
        </div>
    )
}

export default Video
