import { Link } from '@tanstack/react-router'
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import { appName, githubRepoUrl } from './shared'

export const baseOptions: BaseLayoutProps = {
  githubUrl: githubRepoUrl,
  slots: {
    navTitle: NavTitle,
  },
}

function NavTitle() {
  return (
    <Link
      to='/'
      className='me-auto inline-flex items-center gap-2.5 text-base font-semibold [&+button]:mb-0 [&+button]:size-8 [&+button]:self-center [&+button]:p-0'
    >
      <svg
        fill='none'
        height='43'
        viewBox='0 0 35 43'
        width='35'
        xmlns='http://www.w3.org/2000/svg'
        className='w-5'
      >
        <path d='M0 2H35' stroke='oklch(0.985 0 0)' strokeWidth='4' />
        <path d='M0 40.5518H35' stroke='oklch(0.985 0 0)' strokeWidth='4' />
        <path
          d='M21.4375 2L7 20.8276L21.4375 41'
          stroke='oklch(0.985 0 0)'
          strokeWidth='4'
        />
      </svg>
      <div>{appName}</div>
    </Link>
  )
}
