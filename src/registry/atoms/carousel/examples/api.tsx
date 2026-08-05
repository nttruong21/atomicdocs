import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/atoms/card'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/atoms/carousel'

export function CarouselDApiDemo() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    // oxlint-disable-next-line react/react-compiler
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })

    return () => {
      api.destroy()
    }
  }, [api])

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
