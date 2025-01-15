import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const SupportPage = () => {
  return (
    <div className="flex gap-4 p-8">
      <div className="flex-1 flex flex-col gap-2">
        <p className="text-3xl font-bold">Suporte</p>
        <p className="font-bold">
          Please fill out the form below to send us an email.
        </p>
        <p className="mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>E-mail: hello@reallygreatsite.com</p>
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="E-mail" />
        <Input type="text" placeholder="Subject" />
        <Textarea placeholder="Message" rows={6} />
        <Button className="self-end">Submit</Button>
      </div>
    </div>
  )
}

export default SupportPage
