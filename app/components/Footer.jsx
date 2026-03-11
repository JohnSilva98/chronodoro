export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center font-light text-sm bg-[var(--gradient-dark)]">
        <a className="mb-2 mt-1 text-[var(--text-primary)] hover:underline" href="">Entenda como funciona a técnica de pomodoro</a>
        <a className="text-[var(--text-primary)] hover:underline" href="/">Chronodoro &copy; {new Date().getFullYear()}</a>
    </footer>
  )
}