import { getEmbedUrlFromYoutubeUrl, Youtube } from '@tiptap/extension-youtube'
import {
  mergeAttributes,
  NodeViewWrapper,
  type ReactNodeViewProps,
  ReactNodeViewRenderer,
  useCurrentEditor,
} from '@tiptap/react'
import {
  AlignLeftIcon,
  ChevronDownIcon,
  MoveHorizontalIcon,
  TrashIcon,
} from 'lucide-react'
import {
  type CSSProperties,
  type IframeHTMLAttributes,
  useRef,
  useState,
} from 'react'
import { Button } from '@/components/atoms/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/atoms/dropdown-menu'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/atoms/popover'
import { Separator } from '@/components/atoms/separator'
import { Skeleton } from '@/components/atoms/skeleton'
import { cn } from '@/utils/ui'
import {
  type Alignment,
  alignments,
  containerClassNamePerAlignment,
} from './lib/alignment'
import { nodeMinWidth } from './lib/base'

type YoutubeAttributes = IframeHTMLAttributes<HTMLIFrameElement> & {
  alignment: Alignment
  containerStyle: CSSProperties
}

const widthSizes: string[] = ['25%', '50%', '75%', '100%']

function YoutubeComponent(props: ReactNodeViewProps<HTMLImageElement>) {
  const { node, updateAttributes, deleteNode } = props
  const { alignment, containerStyle, ...youtubeAttributes } =
    node.attrs as YoutubeAttributes

  const { editor } = useCurrentEditor()

  const containerRef = useRef<HTMLDivElement>(null)
  const [src] = useState(
    () =>
      getEmbedUrlFromYoutubeUrl({
        nocookie: true,
        url: youtubeAttributes.src as string,
      }) ?? undefined
  )
  const [loaded, setLoaded] = useState(false)
  const [openPopover, setOpenPopover] = useState(false)

  function loadVideo() {
    setLoaded(true)
  }

  function changeAlignment(newAlignment: Alignment) {
    updateAttributes({
      alignment: newAlignment,
    })

    if (newAlignment === 'justify') {
      updateAttributes({
        containerStyle: {
          ...containerStyle,
          width: '100%',
        },
        width: containerRef.current?.clientWidth,
      })
    }

    // Focus editor
    editor?.commands.focus()
  }

  function changeWidthSize(size: string) {
    updateAttributes({
      containerStyle: {
        ...containerStyle,
        width: size,
      },
    })
    editor?.commands.focus()
  }

  function deleteVideo() {
    deleteNode()
    editor?.commands.focus()
  }

  return (
    <NodeViewWrapper data-drag-handle>
      <div
        className={cn('flex', containerClassNamePerAlignment[alignment])}
        ref={containerRef}
      >
        <Popover onOpenChange={setOpenPopover} open={openPopover}>
          <PopoverTrigger
            className={cn(
              'group relative aspect-video rounded-md border p-6 transition-all',
              {
                'border-primary': openPopover,
                'pointer-events-auto opacity-100': loaded,
              }
            )}
            style={containerStyle}
          >
            {!loaded && (
              <Skeleton className='pointer-events-none absolute inset-0 rounded-md' />
            )}

            <iframe
              sandbox='allow-same-origin'
              allowFullScreen={false}
              className='size-full rounded-md object-contain'
              height={youtubeAttributes.height}
              onLoad={loadVideo}
              src={src}
              title='custom-youtube-extension'
              width={youtubeAttributes.width}
            />
          </PopoverTrigger>

          <PopoverContent className='space-y-4' side='top'>
            <div className='flex gap-2'>
              {/* Alignment */}
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button variant='outline'>
                      <AlignLeftIcon />
                      <ChevronDownIcon />
                    </Button>
                  }
                />

                <DropdownMenuContent>
                  {alignments.map((alignmentOption) => (
                    <DropdownMenuItem
                      className={cn({
                        'bg-accent': alignment === alignmentOption.value,
                      })}
                      key={alignmentOption.value}
                      onClick={() => changeAlignment(alignmentOption.value)}
                    >
                      <alignmentOption.icon />
                      <span>{alignmentOption.label}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Separator className='h-10' orientation='vertical' />

              {/* Width size */}
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button variant='outline'>
                      <MoveHorizontalIcon />
                      <ChevronDownIcon />
                    </Button>
                  }
                />

                <DropdownMenuContent>
                  {widthSizes.map((size) => (
                    <DropdownMenuItem
                      className={cn({
                        'bg-accent': containerStyle.width === size,
                      })}
                      key={size}
                      onClick={() => changeWidthSize(size)}
                    >
                      {size}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Separator className='h-10' orientation='vertical' />

              {/* Trash */}
              <Button onClick={deleteVideo} size='icon' variant='outline'>
                <TrashIcon />
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </NodeViewWrapper>
  )
}

const CustomYoutubeExtension = Youtube.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      alignment: {
        default: 'center',
      },
      containerStyle: {
        default: {
          width: `${nodeMinWidth}px`,
        },
      },
    }
  },
  addNodeView() {
    return ReactNodeViewRenderer(YoutubeComponent)
  },
  renderHTML({ HTMLAttributes }) {
    const { alignment, containerStyle, ...youtubeAttributes } =
      HTMLAttributes as YoutubeAttributes

    const embedUrl = getEmbedUrlFromYoutubeUrl({
      allowFullscreen: this.options.allowFullscreen,
      autoplay: this.options.autoplay,
      ccLanguage: this.options.ccLanguage,
      ccLoadPolicy: this.options.ccLoadPolicy,
      controls: this.options.controls,
      disableKBcontrols: this.options.disableKBcontrols,
      enableIFrameApi: this.options.enableIFrameApi,
      endTime: this.options.endTime,
      interfaceLanguage: this.options.interfaceLanguage,
      ivLoadPolicy: this.options.ivLoadPolicy,
      loop: this.options.loop,
      modestBranding: this.options.modestBranding,
      nocookie: this.options.nocookie,
      origin: this.options.origin,
      playlist: this.options.playlist,
      progressBarColor: this.options.progressBarColor,
      rel: this.options.rel,
      startAt: HTMLAttributes.start || 0,
      url: HTMLAttributes.src,
    })

    if (embedUrl) {
      youtubeAttributes.src = embedUrl
    }

    return [
      'div',
      {
        class: cn('flex', containerClassNamePerAlignment[alignment]),
      },
      [
        'div',
        {
          class: 'aspect-video',
          style: Object.entries(containerStyle)
            .map(([key, value]) => `${key}: ${value}`)
            .join(';'),
        },
        [
          'iframe',
          {
            ...mergeAttributes(
              this.options.HTMLAttributes,
              {
                allowfullscreen: this.options.allowFullscreen,
                autoplay: this.options.autoplay,
                ccLanguage: this.options.ccLanguage,
                ccLoadPolicy: this.options.ccLoadPolicy,
                disableKBcontrols: this.options.disableKBcontrols,
                enableIFrameApi: this.options.enableIFrameApi,
                endTime: this.options.endTime,
                height: this.options.height,
                interfaceLanguage: this.options.interfaceLanguage,
                ivLoadPolicy: this.options.ivLoadPolicy,
                loop: this.options.loop,
                modestBranding: this.options.modestBranding,
                origin: this.options.origin,
                playlist: this.options.playlist,
                progressBarColor: this.options.progressBarColor,
                rel: this.options.rel,
                width: this.options.width,
              },
              youtubeAttributes
            ),
            class: 'size-full rounded-md object-contain',
          },
        ],
      ],
    ]
  },
})

export default CustomYoutubeExtension
