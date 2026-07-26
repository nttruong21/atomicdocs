import { createFileRoute, Link } from '@tanstack/react-router'
import { HomeLayout } from 'fumadocs-ui/layouts/home'
import { Button } from '@/components/atoms/button'
import { baseOptions } from '@/lib/layout.shared'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <HomeLayout
      {...baseOptions}
      links={[
        {
          type: 'custom',
          children: (
            <Link
              to='/docs/$'
              params={{
                _splat: 'documentation/introduction',
              }}
              className='text-fd-muted-foreground hover:text-fd-foreground'
            >
              Documentation
            </Link>
          ),
        },
        {
          type: 'custom',
          children: (
            <Link
              to='/docs/$'
              params={{
                _splat: 'atoms/accordion',
              }}
              className='text-fd-muted-foreground hover:text-fd-foreground ml-4'
            >
              Components
            </Link>
          ),
        },
      ]}
    >
      <div className='mx-auto flex max-w-xl flex-1 flex-col justify-center gap-4 p-8 text-center'>
        <h1 className='text-4xl font-semibold'>Atomic registry</h1>
        <p className='text-base'>
          A set of beautifully designed components that you can customize,
          extend, and build on with Shadcn/ui and Base UI. Start here then make
          it your own. Open Source. Open Code.
        </p>
        <div className='flex items-center justify-center gap-2'>
          <Button
            nativeButton={false}
            render={
              <Link
                to='/docs/$'
                params={{
                  _splat: 'documentation/introduction',
                }}
              >
                Get started
              </Link>
            }
          />

          <Button
            variant='ghost'
            nativeButton={false}
            render={
              <Link
                to='/docs/$'
                params={{
                  _splat: 'atoms/accordion',
                }}
              >
                View components
              </Link>
            }
          />
        </div>
      </div>
    </HomeLayout>
  )
}
