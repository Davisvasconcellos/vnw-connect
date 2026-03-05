import s from '../../pages/styles.module.scss'
import InfoCard from "../../components/InfoCard/InfoCard2";

export const Eventosep = () => {
  return (
    <main className={s.main}>
      <h1>Eventos</h1>
      <section>
          <article>
            <InfoCard
              img="https://images.unsplash.com/photo-1544531320-dadbed29130d?q=80&w=2940&auto=format&fit=crop"
              alt="Grupo de jovens sentados em roda participando de uma atividade"
              title="Empoderando Jovens para o Futuro"
              description={<>Atividade: Palestra motivacional sobre liderança jovem e transformação social.<br/><br/>Impacto: Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades.</>}
              buttonText="Quero Participar"
            />
          </article>

          <article>
            <InfoCard
              img="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2942&auto=format&fit=crop"
              alt="Grupo diverso de pessoas usando computadores e aprendendo tecnologia"
              title="Tecnologia que Transforma"
              description={<>Atividade: Workshop de introdução à programação e inovação digital.<br/><br/>Impacto: Preparar jovens para o mercado de trabalho através da tecnologia.</>}
              buttonText="Quero Participar"
            />
          </article>
    
          <article>
            <InfoCard
              img="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2874&auto=format&fit=crop"
              alt="Mulher em entrevista de emprego ou orientação de carreira"
              title="Carreira e Primeiro Emprego"
              description={<>Atividade: Palestra com profissionais de RH sobre como preparar currículo, entrevistas e postura no mercado.<br/><br/>Impacto: Ajudar jovens a conquistar oportunidades de trabalho.</>}
              buttonText="Quero Participar"
            />
          </article>
      </section>
    </main>
  )
}

export default Eventosep
