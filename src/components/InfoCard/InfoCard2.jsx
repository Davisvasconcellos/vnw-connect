import s from './InfoCard.module.scss'

export const InfoCard2 = ({ img, alt, title, description, buttonText }) => {
  return (
    <div className={s.article}>
      <img src={img} alt={alt} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button>{buttonText}</button>
    </div>
  )
}

export default InfoCard2
