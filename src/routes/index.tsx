import { createFileRoute, Link } from '@tanstack/react-router'
import { HomeLayout } from 'fumadocs-ui/layouts/home'
import { baseOptions } from '@/lib/layout.shared'
import { appName } from '@/lib/shared'

export const Route = createFileRoute('/')({
  component: Home,
})

function NavTitle() {
  return (
    <Link to='/' className='inline-flex items-center gap-2.5 font-semibold'>
      <svg
        fill='none'
        height='43'
        viewBox='0 0 35 43'
        width='35'
        xmlns='http://www.w3.org/2000/svg'
        className='w-5'
      >
        <path d='M0 2H35' stroke='oklch(0.985 0 0)' stroke-width='4' />
        <path d='M0 40.5518H35' stroke='oklch(0.985 0 0)' stroke-width='4' />
        <path
          d='M21.4375 2L7 20.8276L21.4375 41'
          stroke='oklch(0.985 0 0)'
          stroke-width='4'
        />
      </svg>
      <div>{appName}</div>
    </Link>
  )
}

function Home() {
  return (
    <HomeLayout
      {...baseOptions}
      slots={{
        navTitle: NavTitle,
      }}
    >
      <div className='flex flex-1 flex-col justify-center px-4 py-8 text-center'>
        <h1 className='mb-4 text-xl font-medium'>
          Fumadocs on Tanstack Start.
        </h1>
        <Link
          to='/docs/$'
          params={{
            _splat: '',
          }}
          className='bg-fd-primary text-fd-primary-foreground mx-auto rounded-lg px-3 py-2 text-sm font-medium'
        >
          Open Docs
        </Link>
      </div>
    </HomeLayout>
  )
}
