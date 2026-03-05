import s from "./paginaInicial.module.scss"
import hands from "../../assets/images/hands.png"

const PaginaInicial = () => {
  return (
    <main className={s.main}>
      <section className={s.heroContent}>
        <h1>Projetos Sociais <br /> que transformam</h1>
        <p>Conectamos sua empresa com projetos sociais impactantes. <br /> Juntos, criamos mudanças reais na comunidade.</p>
        
        <button className={s.ctaButton}>Cadastrar Empresa <span className={s.arrow}>→</span></button>
        
        <section className={s.stats}>
          <div className={s.statItem}>
            <h2>500+</h2>
            <h3>Empresas Voluntárias</h3>
          </div>
          <div className={s.statItem}>
            <h2>1.2K+</h2>
            <h3>Projetos Realizados</h3>
          </div>
          <div className={s.statItem}>
            <h2>50K+</h2>
            <h3>Vidas Impactadas</h3>
          </div>
        </section>
      </section>
      
      <div className={s.heroImage}>
        <img src={hands} alt="Mãos segurando o globo terrestre com recortes de pessoas, representando união e responsabilidade social" />
      </div>
    </main>
  )
}

export default PaginaInicial
