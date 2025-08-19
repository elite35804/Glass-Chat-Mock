export default function BackgroundPattern() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-10 overflow-hidden"
    >
      <div className="absolute -top-1/4 -left-1/4 h-[60vh] w-[60vw] rounded-full bg-gradient-to-br from-fuchsia-500/40 via-purple-500/30 to-indigo-500/20 blur-3xl [filter:saturate(120%)] [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]" />
      <div className="absolute -top-1/3 right-[-10%] h-[55vh] w-[55vw] rounded-full bg-gradient-to-br from-cyan-400/40 via-sky-500/30 to-emerald-400/20 blur-3xl [filter:saturate(120%)] [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]" />
      <div className="absolute bottom-[-20%] left-1/3 h-[65vh] w-[65vw] rounded-full bg-gradient-to-tr from-rose-500/40 via-orange-400/30 to-yellow-300/20 blur-3xl [filter:saturate(120%)] [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]" />

      <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:24px_24px]" />
    </div>
  );
}
