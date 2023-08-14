'use client'

import { useParams } from 'next/navigation'

export default () => {
    const params = useParams()
    const slug = params?.slug ?? ''
    return <div>{slug}</div>
}
