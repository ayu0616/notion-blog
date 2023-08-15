import { BlockType } from '@/type/page/block/block'

interface BlockProps {
    blockType: BlockType
}

const Block = ({ blockType, ...props }: BlockProps) => {
    switch (blockType) {
    }
}

export default Block
