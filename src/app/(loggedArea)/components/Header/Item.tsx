'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

type ItemProps = {
  href: string
}

export const Item = ({ href, children }: PropsWithChildren<ItemProps>) => {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      className={twMerge(
        'text-lg uppercase',
        pathname.startsWith(href) ? 'font-extrabold' : '',
      )}
    >
      {children}
    </Link>
  )
}
