import Typewriter from 'typewriter-effect'
import styles from './blogDesc.module.scss'

const blog_description = () => {
  return (
    <main className={styles.blogDescContainer}>
      <section className={styles.typewriterSection}>
        <h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('It depends.')
                .pauseFor(3500)
                .deleteAll()
                .pauseFor(3000)
                .typeString('It happens.')
                .pauseFor(3500)
                .deleteAll()
                .start()
            }}
            options={{ loop: true }}
          />
        </h1>
      </section>
      <section>Section 2</section>
      <section>Section 3</section>
    </main>
  )
}

export default blog_description
