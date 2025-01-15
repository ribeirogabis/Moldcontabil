import Image from 'next/image'
import { ComponentProps } from 'react'

type SummaryItemPropsType = {
  title: string
  value: number
  iconSrc: ComponentProps<typeof Image>['src']
}

export const SummaryItem = ({
  title,
  value,
  iconSrc,
}: SummaryItemPropsType) => {
  return (
    <div className="flex flex-col gap-2 flex-1 justify-between">
      <div className="flex justify-between items-start gap-2">
        <div className="flex flex-col flex-1">
          <p className="text-sm">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        <Image alt={title} width={64} height={64} src={iconSrc} />
      </div>
      <div className="flex flex-col gap-1">
        <span>Meta</span>
        <div className="w-full h-2 bg-green-600 rounded-lg" />
      </div>
    </div>
  )
}
