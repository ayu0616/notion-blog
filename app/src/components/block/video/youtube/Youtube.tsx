import { VideoProps } from '../Video'

interface YoutubeProps extends VideoProps {}

const Youtube = ({ url, ...props }: YoutubeProps) => {
    return <iframe className='aspect-video w-full' src={url}></iframe>
}

export default Youtube
