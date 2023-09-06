import Youtube from './youtube/Youtube'

export interface VideoProps {
    url: string
}

const Video = ({ url, ...props }: VideoProps) => {
    if (url.startsWith('https://www.youtube.com/')) {
        return <Youtube url={url} />
    }
    return <div></div>
}

export default Video
