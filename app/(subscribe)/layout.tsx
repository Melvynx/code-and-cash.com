import Header from '@/components/ui/header'

export default function SubscribeLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <>
      <Header nav={false} />

      <main className="grow">

          {children}

      </main>
    </>
  )
}
