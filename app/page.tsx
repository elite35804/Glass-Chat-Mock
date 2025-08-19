import BackgroundPattern from "@/components/BackgroundPattern";
import ChatPanel from "@/components/ChatPanel";

export default function Home() {
  return (
    <div className="min-h-dvh bg-black text-white">
      <BackgroundPattern />
      <main className="mx-auto flex min-h-dvh max-w-5xl flex-col items-center justify-center gap-8 px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-center text-2xl font-semibold tracking-tight text-white/90 sm:text-3xl">
          Glass Chat
        </h1>
        <p className="max-w-2xl text-center text-sm text-white/80">
          A minimal chat UI mockup with glassmorphism background. No backend
          hooked up — purely static interactions.
        </p>
        <ChatPanel />
      </main>
    </div>
  );
}
