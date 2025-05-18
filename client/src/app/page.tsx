import ButtonComponent from './components/button/Button'
import TextBoxComponent from './components/text-box/TextBox'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/components/accordion/Accordion'

const Home = () => {
  return (
    <div>
      <div className="m-4 flex gap-2 pt-20">
        <TextBoxComponent theme="primary" border={true} text="example text" />
        <TextBoxComponent theme="secondary" border={true} text="example text" />
        <TextBoxComponent theme="ghost" border={true} text="example text" />
        <TextBoxComponent theme="warning" border={true} text="example text" />
        <TextBoxComponent theme="error" border={true} text="example text" />
        <ButtonComponent theme="primary" border={true} />
        <ButtonComponent theme="primary" border={false} />
        <ButtonComponent theme="secondary" border={true} />
        <ButtonComponent theme="secondary" border={false} />
        <ButtonComponent theme="warning" border={true} />
        <ButtonComponent theme="ghost" border={true} />
        <ButtonComponent theme="error" border={true} />
        <ButtonComponent theme="primary-out" border={true} />
        <ButtonComponent theme="secondary-out" border={true} />
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>


      </div>
      <div className="p-10">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus ultricies est, nec ultricies nisi. Praesent purus nibh, tincidunt sed turpis sit amet, suscipit ultricies velit. Curabitur consequat nunc at augue condimentum, at dictum urna luctus. Integer id feugiat tortor. Nulla eget pulvinar erat. Morbi id mi a massa egestas auctor. Sed finibus interdum lorem et iaculis. Morbi porttitor orci quis erat lobortis, ac lacinia quam volutpat. Praesent non lectus pulvinar, vehicula felis non, consectetur neque. Phasellus ultrices sed quam quis bibendum. Etiam laoreet dictum mauris, porta feugiat neque semper quis. Phasellus mattis orci lectus, a pharetra tellus luctus eu. Suspendisse hendrerit nisi lacinia enim vulputate imperdiet. Pellentesque eu congue mauris. Ut viverra, ante ut maximus interdum, magna libero molestie sem, feugiat congue sapien metus in eros. Pellentesque urna ex, luctus non hendrerit sed, posuere sit amet dui.

          Phasellus venenatis non lorem sit amet pellentesque. Nulla eleifend, dolor non commodo euismod, urna felis malesuada risus, eget auctor diam sem id leo. Duis egestas libero vitae dui lacinia, ut consequat turpis elementum. In et euismod dolor, vitae eleifend mauris. Phasellus nec est vitae justo fringilla consequat ac at nisl. Vivamus id tempor tortor, id fermentum nisi. Nulla pharetra massa risus, a iaculis mi auctor id. Duis molestie condimentum ex eget viverra. Integer posuere cursus erat non congue.

          Vivamus et tortor eget diam scelerisque mattis. Mauris diam sem, cursus eget tincidunt sed, auctor nec urna. Nunc lobortis mattis tincidunt. Maecenas sit amet enim velit. Suspendisse in magna vitae ex ornare efficitur. In hac habitasse platea dictumst. Morbi feugiat vehicula enim, at iaculis nisl. Etiam tempus vitae justo non pharetra. Praesent pellentesque eros quam, nec pharetra est tincidunt et. Interdum et malesuada fames ac ante ipsum primis in faucibus.

          Donec imperdiet tempor venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc sit amet eros metus. Vivamus blandit, nisl eu bibendum pretium, mi enim consequat enim, a finibus ex turpis a ligula. Nunc hendrerit scelerisque feugiat. Phasellus porttitor massa in dui consectetur sagittis. Vivamus augue lacus, consequat sit amet libero luctus, placerat commodo erat. Nunc non magna sed quam vulputate dignissim at quis quam. Mauris eu orci arcu.

          Vivamus vulputate id neque at dictum. Nunc a egestas felis, eu faucibus turpis. Aliquam eget ex scelerisque, luctus dui laoreet, volutpat dolor. Fusce nisl massa, facilisis vitae placerat eget, accumsan quis eros. Nam congue eleifend urna, vitae lacinia purus fermentum sed. Vestibulum lobortis, sapien non semper pellentesque, lacus justo rhoncus orci, in rhoncus libero metus vel felis. Morbi ligula purus, ornare vel scelerisque quis, cursus eu enim. Pellentesque eget gravida mauris, eget venenatis quam. Vestibulum a sollicitudin ante. Donec tempus ullamcorper urna. Mauris tempus orci id pulvinar semper. Nulla vel rutrum mi. Duis commodo diam et elit viverra commodo.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus ultricies est, nec ultricies nisi. Praesent purus nibh, tincidunt sed turpis sit amet, suscipit ultricies velit. Curabitur consequat nunc at augue condimentum, at dictum urna luctus. Integer id feugiat tortor. Nulla eget pulvinar erat. Morbi id mi a massa egestas auctor. Sed finibus interdum lorem et iaculis. Morbi porttitor orci quis erat lobortis, ac lacinia quam volutpat. Praesent non lectus pulvinar, vehicula felis non, consectetur neque. Phasellus ultrices sed quam quis bibendum. Etiam laoreet dictum mauris, porta feugiat neque semper quis. Phasellus mattis orci lectus, a pharetra tellus luctus eu. Suspendisse hendrerit nisi lacinia enim vulputate imperdiet. Pellentesque eu congue mauris. Ut viverra, ante ut maximus interdum, magna libero molestie sem, feugiat congue sapien metus in eros. Pellentesque urna ex, luctus non hendrerit sed, posuere sit amet dui.

          Phasellus venenatis non lorem sit amet pellentesque. Nulla eleifend, dolor non commodo euismod, urna felis malesuada risus, eget auctor diam sem id leo. Duis egestas libero vitae dui lacinia, ut consequat turpis elementum. In et euismod dolor, vitae eleifend mauris. Phasellus nec est vitae justo fringilla consequat ac at nisl. Vivamus id tempor tortor, id fermentum nisi. Nulla pharetra massa risus, a iaculis mi auctor id. Duis molestie condimentum ex eget viverra. Integer posuere cursus erat non congue.

          Vivamus et tortor eget diam scelerisque mattis. Mauris diam sem, cursus eget tincidunt sed, auctor nec urna. Nunc lobortis mattis tincidunt. Maecenas sit amet enim velit. Suspendisse in magna vitae ex ornare efficitur. In hac habitasse platea dictumst. Morbi feugiat vehicula enim, at iaculis nisl. Etiam tempus vitae justo non pharetra. Praesent pellentesque eros quam, nec pharetra est tincidunt et. Interdum et malesuada fames ac ante ipsum primis in faucibus.

          Donec imperdiet tempor venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc sit amet eros metus. Vivamus blandit, nisl eu bibendum pretium, mi enim consequat enim, a finibus ex turpis a ligula. Nunc hendrerit scelerisque feugiat. Phasellus porttitor massa in dui consectetur sagittis. Vivamus augue lacus, consequat sit amet libero luctus, placerat commodo erat. Nunc non magna sed quam vulputate dignissim at quis quam. Mauris eu orci arcu.

          Vivamus vulputate id neque at dictum. Nunc a egestas felis, eu faucibus turpis. Aliquam eget ex scelerisque, luctus dui laoreet, volutpat dolor. Fusce nisl massa, facilisis vitae placerat eget, accumsan quis eros. Nam congue eleifend urna, vitae lacinia purus fermentum sed. Vestibulum lobortis, sapien non semper pellentesque, lacus justo rhoncus orci, in rhoncus libero metus vel felis. Morbi ligula purus, ornare vel scelerisque quis, cursus eu enim. Pellentesque eget gravida mauris, eget venenatis quam. Vestibulum a sollicitudin ante. Donec tempus ullamcorper urna. Mauris tempus orci id pulvinar semper. Nulla vel rutrum mi. Duis commodo diam et elit viverra commodo.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus ultricies est, nec ultricies nisi. Praesent purus nibh, tincidunt sed turpis sit amet, suscipit ultricies velit. Curabitur consequat nunc at augue condimentum, at dictum urna luctus. Integer id feugiat tortor. Nulla eget pulvinar erat. Morbi id mi a massa egestas auctor. Sed finibus interdum lorem et iaculis. Morbi porttitor orci quis erat lobortis, ac lacinia quam volutpat. Praesent non lectus pulvinar, vehicula felis non, consectetur neque. Phasellus ultrices sed quam quis bibendum. Etiam laoreet dictum mauris, porta feugiat neque semper quis. Phasellus mattis orci lectus, a pharetra tellus luctus eu. Suspendisse hendrerit nisi lacinia enim vulputate imperdiet. Pellentesque eu congue mauris. Ut viverra, ante ut maximus interdum, magna libero molestie sem, feugiat congue sapien metus in eros. Pellentesque urna ex, luctus non hendrerit sed, posuere sit amet dui.

          Phasellus venenatis non lorem sit amet pellentesque. Nulla eleifend, dolor non commodo euismod, urna felis malesuada risus, eget auctor diam sem id leo. Duis egestas libero vitae dui lacinia, ut consequat turpis elementum. In et euismod dolor, vitae eleifend mauris. Phasellus nec est vitae justo fringilla consequat ac at nisl. Vivamus id tempor tortor, id fermentum nisi. Nulla pharetra massa risus, a iaculis mi auctor id. Duis molestie condimentum ex eget viverra. Integer posuere cursus erat non congue.

          Vivamus et tortor eget diam scelerisque mattis. Mauris diam sem, cursus eget tincidunt sed, auctor nec urna. Nunc lobortis mattis tincidunt. Maecenas sit amet enim velit. Suspendisse in magna vitae ex ornare efficitur. In hac habitasse platea dictumst. Morbi feugiat vehicula enim, at iaculis nisl. Etiam tempus vitae justo non pharetra. Praesent pellentesque eros quam, nec pharetra est tincidunt et. Interdum et malesuada fames ac ante ipsum primis in faucibus.

          Donec imperdiet tempor venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc sit amet eros metus. Vivamus blandit, nisl eu bibendum pretium, mi enim consequat enim, a finibus ex turpis a ligula. Nunc hendrerit scelerisque feugiat. Phasellus porttitor massa in dui consectetur sagittis. Vivamus augue lacus, consequat sit amet libero luctus, placerat commodo erat. Nunc non magna sed quam vulputate dignissim at quis quam. Mauris eu orci arcu.

          Vivamus vulputate id neque at dictum. Nunc a egestas felis, eu faucibus turpis. Aliquam eget ex scelerisque, luctus dui laoreet, volutpat dolor. Fusce nisl massa, facilisis vitae placerat eget, accumsan quis eros. Nam congue eleifend urna, vitae lacinia purus fermentum sed. Vestibulum lobortis, sapien non semper pellentesque, lacus justo rhoncus orci, in rhoncus libero metus vel felis. Morbi ligula purus, ornare vel scelerisque quis, cursus eu enim. Pellentesque eget gravida mauris, eget venenatis quam. Vestibulum a sollicitudin ante. Donec tempus ullamcorper urna. Mauris tempus orci id pulvinar semper. Nulla vel rutrum mi. Duis commodo diam et elit viverra commodo.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus ultricies est, nec ultricies nisi. Praesent purus nibh, tincidunt sed turpis sit amet, suscipit ultricies velit. Curabitur consequat nunc at augue condimentum, at dictum urna luctus. Integer id feugiat tortor. Nulla eget pulvinar erat. Morbi id mi a massa egestas auctor. Sed finibus interdum lorem et iaculis. Morbi porttitor orci quis erat lobortis, ac lacinia quam volutpat. Praesent non lectus pulvinar, vehicula felis non, consectetur neque. Phasellus ultrices sed quam quis bibendum. Etiam laoreet dictum mauris, porta feugiat neque semper quis. Phasellus mattis orci lectus, a pharetra tellus luctus eu. Suspendisse hendrerit nisi lacinia enim vulputate imperdiet. Pellentesque eu congue mauris. Ut viverra, ante ut maximus interdum, magna libero molestie sem, feugiat congue sapien metus in eros. Pellentesque urna ex, luctus non hendrerit sed, posuere sit amet dui.

          Phasellus venenatis non lorem sit amet pellentesque. Nulla eleifend, dolor non commodo euismod, urna felis malesuada risus, eget auctor diam sem id leo. Duis egestas libero vitae dui lacinia, ut consequat turpis elementum. In et euismod dolor, vitae eleifend mauris. Phasellus nec est vitae justo fringilla consequat ac at nisl. Vivamus id tempor tortor, id fermentum nisi. Nulla pharetra massa risus, a iaculis mi auctor id. Duis molestie condimentum ex eget viverra. Integer posuere cursus erat non congue.

          Vivamus et tortor eget diam scelerisque mattis. Mauris diam sem, cursus eget tincidunt sed, auctor nec urna. Nunc lobortis mattis tincidunt. Maecenas sit amet enim velit. Suspendisse in magna vitae ex ornare efficitur. In hac habitasse platea dictumst. Morbi feugiat vehicula enim, at iaculis nisl. Etiam tempus vitae justo non pharetra. Praesent pellentesque eros quam, nec pharetra est tincidunt et. Interdum et malesuada fames ac ante ipsum primis in faucibus.

          Donec imperdiet tempor venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc sit amet eros metus. Vivamus blandit, nisl eu bibendum pretium, mi enim consequat enim, a finibus ex turpis a ligula. Nunc hendrerit scelerisque feugiat. Phasellus porttitor massa in dui consectetur sagittis. Vivamus augue lacus, consequat sit amet libero luctus, placerat commodo erat. Nunc non magna sed quam vulputate dignissim at quis quam. Mauris eu orci arcu.

          Vivamus vulputate id neque at dictum. Nunc a egestas felis, eu faucibus turpis. Aliquam eget ex scelerisque, luctus dui laoreet, volutpat dolor. Fusce nisl massa, facilisis vitae placerat eget, accumsan quis eros. Nam congue eleifend urna, vitae lacinia purus fermentum sed. Vestibulum lobortis, sapien non semper pellentesque, lacus justo rhoncus orci, in rhoncus libero metus vel felis. Morbi ligula purus, ornare vel scelerisque quis, cursus eu enim. Pellentesque eget gravida mauris, eget venenatis quam. Vestibulum a sollicitudin ante. Donec tempus ullamcorper urna. Mauris tempus orci id pulvinar semper. Nulla vel rutrum mi. Duis commodo diam et elit viverra commodo.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus ultricies est, nec ultricies nisi. Praesent purus nibh, tincidunt sed turpis sit amet, suscipit ultricies velit. Curabitur consequat nunc at augue condimentum, at dictum urna luctus. Integer id feugiat tortor. Nulla eget pulvinar erat. Morbi id mi a massa egestas auctor. Sed finibus interdum lorem et iaculis. Morbi porttitor orci quis erat lobortis, ac lacinia quam volutpat. Praesent non lectus pulvinar, vehicula felis non, consectetur neque. Phasellus ultrices sed quam quis bibendum. Etiam laoreet dictum mauris, porta feugiat neque semper quis. Phasellus mattis orci lectus, a pharetra tellus luctus eu. Suspendisse hendrerit nisi lacinia enim vulputate imperdiet. Pellentesque eu congue mauris. Ut viverra, ante ut maximus interdum, magna libero molestie sem, feugiat congue sapien metus in eros. Pellentesque urna ex, luctus non hendrerit sed, posuere sit amet dui.

          Phasellus venenatis non lorem sit amet pellentesque. Nulla eleifend, dolor non commodo euismod, urna felis malesuada risus, eget auctor diam sem id leo. Duis egestas libero vitae dui lacinia, ut consequat turpis elementum. In et euismod dolor, vitae eleifend mauris. Phasellus nec est vitae justo fringilla consequat ac at nisl. Vivamus id tempor tortor, id fermentum nisi. Nulla pharetra massa risus, a iaculis mi auctor id. Duis molestie condimentum ex eget viverra. Integer posuere cursus erat non congue.

          Vivamus et tortor eget diam scelerisque mattis. Mauris diam sem, cursus eget tincidunt sed, auctor nec urna. Nunc lobortis mattis tincidunt. Maecenas sit amet enim velit. Suspendisse in magna vitae ex ornare efficitur. In hac habitasse platea dictumst. Morbi feugiat vehicula enim, at iaculis nisl. Etiam tempus vitae justo non pharetra. Praesent pellentesque eros quam, nec pharetra est tincidunt et. Interdum et malesuada fames ac ante ipsum primis in faucibus.

          Donec imperdiet tempor venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc sit amet eros metus. Vivamus blandit, nisl eu bibendum pretium, mi enim consequat enim, a finibus ex turpis a ligula. Nunc hendrerit scelerisque feugiat. Phasellus porttitor massa in dui consectetur sagittis. Vivamus augue lacus, consequat sit amet libero luctus, placerat commodo erat. Nunc non magna sed quam vulputate dignissim at quis quam. Mauris eu orci arcu.

          Vivamus vulputate id neque at dictum. Nunc a egestas felis, eu faucibus turpis. Aliquam eget ex scelerisque, luctus dui laoreet, volutpat dolor. Fusce nisl massa, facilisis vitae placerat eget, accumsan quis eros. Nam congue eleifend urna, vitae lacinia purus fermentum sed. Vestibulum lobortis, sapien non semper pellentesque, lacus justo rhoncus orci, in rhoncus libero metus vel felis. Morbi ligula purus, ornare vel scelerisque quis, cursus eu enim. Pellentesque eget gravida mauris, eget venenatis quam. Vestibulum a sollicitudin ante. Donec tempus ullamcorper urna. Mauris tempus orci id pulvinar semper. Nulla vel rutrum mi. Duis commodo diam et elit viverra commodo.
        </p>
      </div>

    </div>



  )
}
export default Home
