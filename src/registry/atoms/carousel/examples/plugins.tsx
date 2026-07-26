import autoplay from 'embla-carousel-autoplay'
import { useState } from 'react'
import { Card, CardContent } from '@/components/atoms/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/atoms/carousel'

export function CarouselPlugin() {
  const [plugin] = useState(autoplay({ delay: 2000, stopOnInteraction: true }))

  return (
    <Carousel
      className='w-full max-w-40 sm:max-w-xs'
      onMouseEnter={() => plugin.stop()}
      onMouseLeave={() => plugin.reset()}
      plugins={[plugin]}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: ignore
          <CarouselItem key={index}>
            <div className='p-1'>
              <Card>
                <CardContent className='flex aspect-square items-center justify-center p-6'>
                  <span className='text-4xl font-semibold'>{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
