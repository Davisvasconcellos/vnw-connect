import s from '../../pages/styles.module.scss'
import InfoCard from "../../components/InfoCard/InfoCard";

export const Doacao = () => {
  return (
    <main className={s.main}>
      <h1>Doação</h1>
      <section>
        <article>
          <InfoCard
              img="https://plus.unsplash.com/premium_photo-1683140538884-07fb31428ca6?q=80&w=2940&auto=format&fit=crop"
              alt="Pessoas organizando caixas de alimentos para doação"
              title="Instituto Grande Família"
              description="Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade."
              buttonText="Quero Doar"
          />
        </article>

        <article>
          <InfoCard
              img="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2946&auto=format&fit=crop"
              alt="Livros empilhados representando educação"
              title="Projeto Futuro na Escola"
              description="Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura."
              buttonText="Quero Doar"
          />
        </article>
    
        <article>
          <InfoCard
              img="https://images.unsplash.com/photo-1531297461136-82lw8w2390a8?q=80&w=2681&auto=format&fit=crop"
              alt="Mãos trabalhando em um computador, representando inclusão digital"
              title="Instituto Conecta Jovem"
              description="Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital e novas oportunidades."
              buttonText="Quero Doar"
          />
        </article>
      </section>
    </main>
  )
}

export default Doacao
