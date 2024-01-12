import { UserButton } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className='flex flex-col gap-y-4'>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}
