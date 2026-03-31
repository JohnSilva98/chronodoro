"use client"

import { Clock, Coffee, Target, Brain } from 'lucide-react'

const About = () => {
  return (
    <div className="flex justify-center">
      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-[var(--bg-dark-1)] rounded-lg p-6 mb-6 border border-[var(--border-light)]">
          <h2 className="text-[var(--text-primary)] text-2xl font-bold mb-4 flex items-center gap-2">
            <Clock size={28} className="text-[var(--primary-green-light)]" />
            O que é a Técnica Pomodoro?
          </h2>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-4">
            A Técnica Pomodoro é um método de gerenciamento de tempo desenvolvido por Francesco Cirillo no final dos anos 1980. 
            O nome vem do "timer de cozinha" em formato de tomate que Cirillo usava durante seus estudos universitários.
          </p>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            A técnica divide o trabalho em intervalos focados de 25 minutos, separados por pequenas pausas. 
            Essa abordagem ajuda a manter a concentração, reduzir a fadiga mental e aumentar a produtividade.
          </p>
        </div>

        <div className="bg-[var(--bg-dark-1)] rounded-lg p-6 mb-6 border border-[var(--border-light)]">
          <h2 className="text-[var(--text-primary)] text-2xl font-bold mb-4 flex items-center gap-2">
            <Target size={28} className="text-[var(--primary-green-light)]" />
            Como Funciona
          </h2>
          <ol className="space-y-3">
            <li className="text-[var(--text-secondary)] text-lg">
              <span className="text-[var(--primary-green-light)] font-semibold">1.</span> Escolha uma tarefa para completar
            </li>
            <li className="text-[var(--text-secondary)] text-lg">
              <span className="text-[var(--primary-green-light)] font-semibold">2.</span> Configure o timer para 25 minutos
            </li>
            <li className="text-[var(--text-secondary)] text-lg">
              <span className="text-[var(--primary-green-light)] font-semibold">3.</span> Trabalhe na tarefa até o timer tocar
            </li>
            <li className="text-[var(--text-secondary)] text-lg">
              <span className="text-[var(--primary-green-light)] font-semibold">4.</span> Faça uma pausa curta de 5 minutos
            </li>
            <li className="text-[var(--text-secondary)] text-lg">
              <span className="text-[var(--primary-green-light)] font-semibold">5.</span> Após 4 ciclos, faça uma pausa longa de 15-30 minutos
            </li>
          </ol>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-[var(--bg-dark-1)] rounded-lg p-6 border border-[var(--border-light)]">
            <h3 className="text-[var(--text-primary)] text-xl font-bold mb-3 flex items-center gap-2">
              <Brain size={24} className="text-[var(--primary-green-light)]" />
              Benefícios
            </h3>
            <ul className="space-y-2 text-[var(--text-secondary)]">
              <li>• Melhora a concentração e foco</li>
              <li>• Reduz a procrastinação</li>
              <li>• Aumenta a produtividade</li>
              <li>• Previne o esgotamento mental</li>
              <li>• Desenvolve disciplina e hábito</li>
            </ul>
          </div>

          <div className="bg-[var(--bg-dark-1)] rounded-lg p-6 border border-[var(--border-light)]">
            <h3 className="text-[var(--text-primary)] text-xl font-bold mb-3 flex items-center gap-2">
              <Coffee size={24} className="text-[var(--primary-green-light)]" />
              Dicas de Uso
            </h3>
            <ul className="space-y-2 text-[var(--text-secondary)]">
              <li>• Elimine distrações durante os ciclos</li>
              <li>• Use as pausas para descansar realmente</li>
              <li>• Ajuste os tempos conforme sua necessidade</li>
              <li>• Seja consistente com a técnica</li>
              <li>• Combine com outras técnicas produtivas</li>
            </ul>
          </div>
        </div>

        <div className="bg-[var(--bg-dark-1)] rounded-lg p-6 border border-[var(--border-light)]">
          <h3 className="text-[var(--text-primary)] text-xl font-bold mb-3">Por que usar o Chronodoro?</h3>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            O Chronodoro foi desenvolvido para facilitar sua aplicação da Técnica Pomodoro. 
            Com uma interface simples e intuitiva, você pode focar no que realmente importa: 
            completar suas tarefas com mais eficiência e menos estresse.
          </p>
        </div>
      </main>
    </div>
  )
}

export default About