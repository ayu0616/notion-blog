import { ReactNode, useEffect, useRef } from 'react'

interface ModalProps {
    children: ReactNode
    show?: boolean
    setShow?: (show: boolean) => void
}

const Modal = ({ children, show, setShow, ...props }: ModalProps) => {
    const container = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (container.current) {
            container.current.style.display = show ? 'flex' : 'none'
        }
    }, [show])

    const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === container.current) {
            setShow && setShow(false)
        }
    }
    return (
        <div
            className='fixed left-0 top-0 h-[100dvh] w-[100dvw] items-center justify-center bg-black/25'
            ref={container}
            onClick={closeModal}
        >
            <div className='max-h-[90%] max-w-[90%] overflow-y-auto rounded-md bg-white'>
                {children}
            </div>
        </div>
    )
}

export default Modal