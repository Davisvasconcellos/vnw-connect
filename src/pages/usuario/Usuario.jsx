import s from './usuario.module.scss'
import { MdOutlinePlace, MdAlternateEmail, MdCalendarMonth } from "react-icons/md";


export const Usuario = () => {
  return (
    <main className={s.main}>
      <section className={s.card}>
        <div className={s.profileImageContainer}>
            <img src="https://lh3.googleusercontent.com/ogw/AF2bZyhb6d75IX4bZt427JYRAbLVRVnTesOp_AOGJpiB_Tee0VY=s32-c-mo" alt="Foto de perfil de Davis Vasconcellos" />
        </div>
        
        <div className={s.content}>
          <div className={s.header}>
            <h1>Davis Vasconcellos</h1>
            <span className={s.status}>Voluntário Ativo</span>
          </div>
          
          <p className={s.bio}>Apaixonado por fazer a diferença na comunidade. Acredito que pequenas ações podem transformar vidas e estou sempre em busca de novas oportunidades para ajudar.</p>

          <ul className={s.contactInfo}>
            <li>
                <MdOutlinePlace size={20} /> 
                <span>Salvador, BA</span>
            </li>
            <li>
                <MdAlternateEmail size={20} />
                <span>davisvasconcellos@gmail.com</span>
            </li>
            <li>
                <MdCalendarMonth size={20} />
                <span>Membro desde Janeiro 2022</span>
            </li>
          </ul>

          <div className={s.tags}>
            <span>Educação</span>
            <span>Meio Ambiente</span>
            <span>Assistência Social</span>
            <span>Design</span>
          </div>
        </div>
    
      </section>
    </main>
  )
}

export default Usuario
