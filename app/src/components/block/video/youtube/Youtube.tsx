import { VideoProps } from '../Video'

interface YoutubeProps extends VideoProps {}

const Youtube = ({ url, ...props }: YoutubeProps) => {
    return (
        <iframe
            title={url}
            className='aspect-video w-full rounded-[inherit]'
            src={url}
        ></iframe>
    )
}

export default Youtube
