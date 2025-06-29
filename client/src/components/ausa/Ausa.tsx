import {
  DecorationImage,
  type CustomisableDecorationImageProps,
} from '@/components/decoration-image/DecorationImage'

export default function AusaDecorationImage(
  props: CustomisableDecorationImageProps,
) {
  return <DecorationImage src="/static/icons/ausa.svg" alt="" {...props} />
}
