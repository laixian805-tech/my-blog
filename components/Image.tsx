import NextImage, { ImageProps } from 'next/image'
import { withSitePath } from '@/lib/sitePath'

const Image = ({ src, ...rest }: ImageProps) => {
  const resolvedSrc = typeof src === 'string' ? withSitePath(src) : src
  return <NextImage src={resolvedSrc} {...rest} />
}

export default Image
