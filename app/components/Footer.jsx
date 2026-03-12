export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center font-light text-sm bg-[var(--gradient-dark)] ">
        <a className="mb-2  text-[var(--text-primary)] hover:underline cursor-pointer text-center" href="/about">Entenda como funciona a <span className="text-[var(--primary-green-light)] font-semibold">técnica de pomodoro</span></a>
        <a className="text-[var(--text-primary)] hover:underline" href="/">Chronodoro &copy; {new Date().getFullYear()}</a>
    </footer>
  )
}