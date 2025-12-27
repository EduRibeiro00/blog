import Backlink from "@/components/custom/backlink"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6 p-8">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold">404</h1>
          <h2 className="text-2xl font-semibold text-muted-foreground">Hmm... it seems like this page does not exist.</h2>
        </div>
        <Backlink href="/" text="Back to main page" />
      </div>
    </div>
  )
}
