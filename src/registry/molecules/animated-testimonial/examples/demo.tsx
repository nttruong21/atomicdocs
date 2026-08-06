import {
  AnimatedTestimonial,
  AnimatedTestimonialCanopy,
  AnimatedTestimonialCard,
} from '@/components/molecules/animated-testimonial'

export function AnimatedTextDemo() {
  return (
    <AnimatedTestimonial>
      <AnimatedTestimonialCanopy
        className='py-4'
        isApplyMask
        isPauseOnHover
        maskClassName='rounded-md'
      >
        {Array.from({ length: 20 }).map((_, index) => (
          <AnimatedTestimonialCard
            className='bg-primary text-primary-foreground flex size-20 items-center justify-center rounded-md'

            key={index}
          >
            {index + 1}
          </AnimatedTestimonialCard>
        ))}
      </AnimatedTestimonialCanopy>
    </AnimatedTestimonial>
  )
}
