import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'

interface ProfileProps {}

const Profile = ({ ...props }: ProfileProps) => {
    const snsIcons = [
        {
            name: 'twitter',
            icon: <FaTwitter></FaTwitter>,
            link: 'https://twitter.com/hassaku_0616',
            color: 'bg-blue-500 text-white hover:bg-blue-400',
        },
        {
            name: 'instagram',
            icon: <FaInstagram></FaInstagram>,
            link: 'https://instagram.com/hassaku_0616',
            color: 'bg-pink-500 text-white hover:bg-pink-400',
        },
        {
            name: 'github',
            icon: <FaGithub></FaGithub>,
            link: 'https://github.com/ayu0616',
            color: 'bg-gray-600 text-white hover:bg-gray-500',
        },
    ]
    return (
        <div>
            <h4>はっさく</h4>
            <div className='flex'>
                {snsIcons.map((snsIcon) => {
                    return (
                        <a
                            key={snsIcon.name}
                            href={snsIcon.link}
                            target='_blank'
                            rel='noreferrer'
                            className='mr-2'
                        >
                            <div
                                className={['rounded-full p-2', snsIcon.color].join(
                                    ' ',
                                )}
                            >
                                {snsIcon.icon}
                            </div>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default Profile
