import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Nova Bot</h1>
      <p>Dein All-in-One Discord Bot mit Casino, Economy, Moderation & mehr.</p>
      <a href="/invite" className={styles.cta}>Bot einladen</a>
    </section>
  )
}