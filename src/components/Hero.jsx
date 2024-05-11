import { useEffect, useState } from 'react';
import { ReactComponent as LinkedinLogo } from '../assets/icons/LinkedinLogo.svg';
import { ReactComponent as GithubLogo } from '../assets/icons/GithubLogo.svg';
import waving from '../assets/images/waving.png';

const skillIcons = [
  {
    img: 'https://skillicons.dev/icons?i=html,css',
    id: 1,
  },
  {
    img: 'https://skillicons.dev/icons?i=js,react',
    id: 2,
  },
  {
    img: 'https://skillicons.dev/icons?i=tailwind,scss',
    id: 3,
  },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    // Update URL when component mounts
    window.history.replaceState(null, null, '/');

    // Add event listener for load event to scroll to top after page reloads
    const handleLoad = () => {
      window.scrollTo(0, 0); // Scroll to top after page reloads
    };

    window.addEventListener('load', handleLoad);

    // Cleanup event listener when the component unmounts
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 1600);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const timeoutId1 = setTimeout(() => setIsLoading(true), 750);
    const timeoutId2 = setTimeout(() => setIsLoading(false), 1600);

    return () => {
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
    };
  }, []);

  return (
    <section className="section-hero" id="home">
      {isLoading && (
        <div className="loader-box">
          <div className="loader"></div>
          <span>Developer Loading...</span>
        </div>
      )}

      <div className="hero">
        <div className="hero__text-box">
          <h1
            className={`heading-primary ${isVisible ? 'text-visible' : 'text-hidden'}`}
          >
            Front End React Developer{' '}
            <span>
              <img className="waving" src={waving} alt="waving emoji" />
            </span>
          </h1>
          <p
            className={`hero__description ${isVisible ? 'text-visible' : 'text-hidden'}`}
          >
            Hi, I&apos;m Aykın Sancaklı. A passionate Front end React Developer
            based in Istanbul, Turkey.
          </p>
          <span
            className={`hero__links ${isVisible ? 'text-visible' : 'text-hidden'}`}
          >
            <a
              aria-label="linkedin"
              href="https://www.linkedin.com/in/aykin-sancakli/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinLogo className="linkedin-icon" />
            </a>
            <a
              aria-label="github"
              href="https://github.com/aykinsancakli"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubLogo className="github-icon" />
            </a>
          </span>

          <div
            className={`skills ${isVisible ? 'skills-visible' : 'skills-hidden'}`}
          >
            <p>
              Tech Stack <span>&nbsp;</span>
            </p>
            <div className="logos">
              <ul>
                {skillIcons.map((icon) => (
                  <li key={icon.id}>
                    <img src={icon.img} alt="skill-icon"></img>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`hero__img-box ${isVisible ? 'img-visible' : 'img-hidden'}`}
        >
          &nbsp;
        </div>
      </div>
    </section>
  );
}
