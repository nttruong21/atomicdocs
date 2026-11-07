import { useCallback, useState, useSyncExternalStore } from 'react'
import { Card, CardContent } from '@/components/atoms/card'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/atoms/carousel'

const getServerSnapshot = () => 0

export function CarouselDApiDemo() {
  const [api, setApi] = useState<CarouselApi>()

  const subscribe = useCallback(
    (onChange: () => void) => {
      api?.on('select', onChange)
      api?.on('reInit', onChange)
      return () => {
        api?.off('select', onChange)
        api?.off('reInit', onChange)
      }
    },
    [api]
  )

  const getCurrent = useCallback(
    () => (api ? api.selectedScrollSnap() + 1 : 0),
    [api]
  )

  const getCount = useCallback(() => api?.scrollSnapList().length ?? 0, [api])

  const current = useSyncExternalStore(subscribe, getCurrent, getServerSnapshot)
  const count = useSyncExternalStore(subscribe, getCount, getServerSnapshot)

  return (
    <div className='mx-auto max-w-40 sm:max-w-xs'>
      <Carousel className='w-full max-w-xs' setApi={setApi}>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: ignore
            <CarouselItem key={index}>
              <Card className='m-px'>
                <CardContent className='flex aspect-square items-center justify-center p-6'>
                  <span className='text-4xl font-semibold'>{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className='text-muted-foreground py-2 text-center text-sm'>
        Slide {current} of {count}
      </div>
    </div>
  )
}
