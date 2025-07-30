import {
  type CustomisableDecorationImageProps,
  DecorationImage,
} from '@/components/decoration-image/DecorationImage'

export default function AusaDecorationImage(
  props: CustomisableDecorationImageProps,
) {
  return <DecorationImage alt="" src="/static/icons/ausa.svg" {...props} />
}
