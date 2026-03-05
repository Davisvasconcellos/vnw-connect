import s from '../../pages/styles.module.scss'
import InfoCard from "../../components/InfoCard/InfoCard2";

export const Mentoria = () => {
  return (
    <main className={s.main}>
      <h1>Mentoria</h1>
      <section>
          <article>
            <InfoCard
              img="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop"
              alt="Pessoas em uma reunião de negócios discutindo documentos"
              title="Mentoria de Carreira e Emprego"
              description="Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho."
              buttonText="Quero participar"
            />
          </article>

          <article>
            <InfoCard
              img="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop"
              alt="Grupo de pessoas diversas trabalhando juntas em um escritório moderno"
              title="Compartilhe Experiência"
              description="Oriente jovens e profissionais iniciantes em sua área."
              buttonText="Quero participar"
            />
          </article>
    
          <article>
            <InfoCard
              img="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2787&auto=format&fit=crop"
              alt="Duas mulheres conversando e analisando informações em um laptop"
              title="Acompanhamento"
              description="Participe como guia em jornadas de aprendizado e desenvolvimento."
              buttonText="Quero participar"
            />
          </article>
      </section>
    </main>
  )
}

export default Mentoria
