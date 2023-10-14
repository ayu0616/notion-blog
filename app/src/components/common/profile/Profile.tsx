import Image from 'next/image'
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'

import BulletedList from '../..//block/bulletedList/BulletedList'
import BulletedListItem from '../..//block/bulletedList/BulletedListItem'
import ImageBase from '../ImageBase'

interface ProfileProps {}

const Profile = ({ ...props }: ProfileProps) => {
    const snsIcons = [
        {
            name: 'atcoder',
            icon: (
                <Image
                    src='https://img.atcoder.jp/assets/top/img/logo_bk.svg'
                    alt='atcoder'
                    width={16}
                    height={16}
                />
            ),
            link: 'https://atcoder.jp/users/ayu0616',
            className:
                'bg-gray-200 text-white hover:bg-gray-100 outline-gray-300',
        },
        {
            name: 'github',
            icon: <FaGithub></FaGithub>,
            link: 'https://github.com/ayu0616',
            className:
                'bg-gray-600 text-white hover:bg-gray-500 outline-gray-700',
        },
        {
            name: 'twitter',
            icon: <FaTwitter></FaTwitter>,
            link: 'https://twitter.com/hassaku_0616',
            className:
                'bg-blue-500 text-white hover:bg-blue-400 outline-blue-600',
        },
        {
            name: 'instagram',
            icon: <FaInstagram></FaInstagram>,
            link: 'https://instagram.com/hassaku_0616',
            className:
                'bg-pink-500 text-white hover:bg-pink-400 outline-pink-600',
        },
        {
            name: 'threads',
            icon: (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='1em'
                    viewBox='0 0 448 512'
                    fill='currentColor'
                >
                    {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                    <path d='M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z' />
                </svg>
            ),
            link: 'https://threads.net/@hassaku_0616',
            className:
                'bg-gray-600 text-white hover:bg-gray-500 outline-gray-700',
        },
    ]

    const age = () => {
        const today = new Date()
        const birthday = new Date(2002, 6, 16)
        const age = today.getFullYear() - birthday.getFullYear()
        const m = today.getMonth() - birthday.getMonth()
        if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
            return age - 1
        }
        return age
    }

    return (
        <div className='mx-auto w-fit max-w-full space-y-4 rounded-md border p-4'>
            <ImageBase
                src='/profile_icon.png'
                alt='著者のアイコン'
                className='mx-auto h-24 w-24 rounded-full'
            ></ImageBase>
            <h4 className='text-center'>はっさく</h4>
            <BulletedList>
                <BulletedListItem>
                    <span>{`2002年生まれ（${age()}歳）`}</span>
                </BulletedListItem>
                <BulletedListItem>
                    <span>京都大学経済学部3回生</span>
                </BulletedListItem>
                <BulletedListItem>
                    <span>趣味</span>
                    <BulletedList>
                        <BulletedListItem>
                            <span>旅行</span>
                        </BulletedListItem>
                        <BulletedListItem>
                            <span>競技プログラミング</span>
                        </BulletedListItem>
                    </BulletedList>
                </BulletedListItem>
            </BulletedList>
            <div className='space-y-2'>
                <h5>SNSアカウント</h5>
                <div className='flex justify-center gap-2'>
                    {snsIcons.map((snsIcon) => {
                        return (
                            <a
                                key={snsIcon.name}
                                href={snsIcon.link}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <div
                                    className={[
                                        'flex aspect-square h-8 w-8 items-center justify-center rounded-full p-2 outline outline-offset-[-2px]',
                                        snsIcon.className,
                                    ].join(' ')}
                                >
                                    {snsIcon.icon}
                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Profile
