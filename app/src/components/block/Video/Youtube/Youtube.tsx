import { VideoProps } from '../Video'

interface YoutubeProps extends VideoProps {}

const Youtube = ({ url, ...props }: YoutubeProps) => {
    return (
        <iframe
            className='aspect-video w-full rounded-[inherit]'
            src={url}
            title={url}
        ></iframe>
    )
}

export default Youtube
