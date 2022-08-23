import Typewriter from 'typewriter-effect'

const blog_description = () => {
  return (
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
  )
}

export default blog_description
