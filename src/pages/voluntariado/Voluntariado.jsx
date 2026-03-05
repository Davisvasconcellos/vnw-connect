import s from '../../pages/styles.module.scss'
import InfoCard from "../../components/infoCard/infoCard"

export const Voluntariado = () => {
  return (
    <main className={s.main}>
      <h1>Voluntariado</h1>
      <section>
          <article>
            <InfoCard
              img="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2940&auto=format&fit=crop"
              alt="Pessoas separando lixo reciclável em caixas coloridas"
              title="Mutirão de reciclagem"
              description="Coletar materiais recicláveis e orientar sobre descarte consciente."
              buttonText="Quero participar"
            />
          </article>

          <article>
            <InfoCard
              img="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2940&auto=format&fit=crop"
              alt="Jovens aprendendo programação em sala de aula com computadores"
              title="Aulas de Tecnologia"
              description="Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital."
              buttonText="Quero participar"
            />
          </article>
    
          <article>
            <InfoCard
              img="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2875&auto=format&fit=crop"
              alt="Pessoas praticando exercícios físicos em grupo"
              title="Esporte e Inclusão"
              description="Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens."
              buttonText="Quero participar"
            />
          </article>
      </section>
    </main>
  )
}

export default Voluntariado
