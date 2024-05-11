import { useInView } from 'react-intersection-observer';
import profile from '../assets/images/1.png';

export default function About() {
  const { ref: myRef, inView: isImgVisible } = useInView({
    triggerOnce: true,
    rootMargin: '-50px',
  });

  return (
    <section className="section-about" id="about">
      <div className="about container">
        <div className="about__content">
          <img
            ref={myRef}
            src={profile}
            className={`about__img ${isImgVisible ? 'about-img--visible' : 'about-img--hidden'}`}
            alt="Profile picture of Aykın Sancaklı"
          ></img>

          <div className="about__text">
            <span className="subheading">about.</span>
            <h2 className="heading-secondary">
              I&apos;m a front end developer based in Istanbul, Turkey.
            </h2>
            <div className="about__description">
              <p>
                Since taking an elective course in UI/UX design during my third
                year of engineering, I&apos;ve been enjoying creating websites
                and front-end web applications. When I&apos;m not pushing
                pixels, you&apos;ll find me cooking, playing guitar, or working
                out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
