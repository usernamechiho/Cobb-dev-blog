import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import styles from './blogDescription.module.scss';

const blog_description = () => {
  return (
    <div className={styles.blogDescContainer}>
      <section className={styles.imageContainer}>
        <Image src='/imgs/Home.png' alt='Cobb Home' className={styles.home} layout='fill' />
      </section>

      <section className={styles.typewriter}>
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
              .start();
          }}
          options={{ loop: true }}
        />
      </section>

      <section className={styles.descriptionContainer}>
        <p>
          At first, I used various blog platforms on the internet to write down my learnings. In time, I was bored with
          it. Using blog platforms, all I did was make an account, name a blog and make postings. Though I was able to
          create a blog and have people visiting my posts, I started thinking of having a privately owned blog.
        </p>
        <p>
          I was not trying to build the best blog platform. It is all about interests and needs. I solely plan, design,
          build and deploy Cobb-dev. My blog might not provide better services compared to other blog platforms. But
          having a self-controlled blog feels different.
        </p>
        <p>
          I made my blog to document my journey as a developer. When I write what I know and inform others, it will also
          make me better at the thing I write about. Because if I am teaching someone I must understand stuff. Moreover,
          there is no correct answer in Coding. Every written code can't remain static and used in different situations.
          It depends on how we use it, when to use it and where to use it.
        </p>
        <p>
          Blogging is like keeping a diary. That way I can transcribe what I know and what I don’t. And if I am feeling
          lost and I don’t remember what I did before to solve a problem of the same matter, I can go through my blog
          and find the solution by myself. A real-time saver instead of scrolling through Google and StackOverflow.
        </p>
      </section>
    </div>
  );
};

export default blog_description;
