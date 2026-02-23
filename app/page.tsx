import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            v0 SDK Monorepo
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A monorepo containing SDKs for interacting with the v0 Platform API to create and manage AI-powered chat conversations, projects, integrations, and more.
          </p>
          <div className="mt-10 flex items-center justify-center gap-6">
            <Link
              href="https://v0.dev/docs"
              className="rounded-md bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Documentation
            </Link>
            <Link
              href="https://github.com/vercel/v0-sdk"
              className="text-sm font-semibold leading-6 text-foreground hover:opacity-90"
            >
              View on GitHub <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-bold text-foreground mb-8">Packages</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-card-foreground">v0-sdk</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                TypeScript SDK for the v0 Platform API
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-card-foreground">@v0-sdk/react</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                React components for rendering v0 Platform API content
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-card-foreground">@v0-sdk/ai-tools</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                AI SDK tools for the v0 Platform API
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-card-foreground">create-v0-sdk-app</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Create v0 SDK-powered apps with one command
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-bold text-foreground mb-8">Examples</h2>
          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
            <a
              href="https://clone-demo.v0-sdk.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border bg-card p-6 hover:border-foreground transition-colors"
            >
              <h3 className="text-lg font-semibold text-card-foreground">v0-clone</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Full-featured v0 clone with authentication, database, and AI Elements
              </p>
              <span className="mt-4 inline-block text-sm text-foreground">View demo →</span>
            </a>
            <a
              href="https://simple-demo.v0-sdk.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border bg-card p-6 hover:border-foreground transition-colors"
            >
              <h3 className="text-lg font-semibold text-card-foreground">simple-v0</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                The simplest way to use v0. Just prompt and see your app generated instantly
              </p>
              <span className="mt-4 inline-block text-sm text-foreground">View demo →</span>
            </a>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-card-foreground">classic-v0</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Classic v0 interface clone with clean, minimalist design
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
