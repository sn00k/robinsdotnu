import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faArrowDown,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faJsSquare,
  faVuejs,
  faReact,
  faLinux,
  faDocker,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import hackermanImage from "../public/hackerman.gif";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const contentRef = useRef(null);

  const handleLoad = () => setLoaded(true);

  const executeScroll = (e) => {
    e.preventDefault();
    contentRef.current.scrollIntoView();
  };

  return (
    <div>
      <section className="hero">
        {!loaded && (
          <div>
            <p>
              <FontAwesomeIcon icon={faCircleNotch} size="3x" width="48" spin />
            </p>
          </div>
        )}
        <div className={loaded ? "fullscreen-gif" : ""}>
          <Image
            src={hackermanImage}
            layout="fill"
            alt="Hackerman montage gif"
            onLoadingComplete={handleLoad}
          />
        </div>
        {loaded && (
          <div className="arrow bounce">
            <a href="#" onClick={executeScroll}>
              <FontAwesomeIcon icon={faArrowDown} size="2x" width="28" />
            </a>
          </div>
        )}
      </section>
      <div className="content" ref={contentRef}>
        <article className="description">
          <h1>Hi, I'm Robin!</h1>
          <h3>Full Stack Software Developer from Sweden.</h3>
          <p>Here are some of the tools that I'd like to work more with</p>
          <ul className="brands">
            <li>
              <FontAwesomeIcon icon={faJsSquare} size="2x" width="28" />
              <span className="sr-only">Javascript</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faVuejs} size="2x" width="28" />
              <span className="sr-only">Vue.js</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faReact} size="2x" width="32" />
              <span className="sr-only">React.js</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faDocker} size="2x" width="40" />
              <span className="sr-only">PHP</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faLinux} size="2x" width="28" />
              <span className="sr-only">Docker</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faApple} size="2x" width="24" />
              <span className="sr-only">Apple</span>
            </li>
          </ul>
          <p>
            Passionate about programming, technology, football, beer and this
            list is getting too long. Why don't you get in touch with me so we
            can talk more?
          </p>
        </article>
        <section className="contact">
          <a href="mailto:hello@robins.nu">
            <FontAwesomeIcon icon={faEnvelope} size="2x" width="32" />
          </a>
          <a
            href="https://www.linkedin.com/in/robin-nilsson-5248a64b"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" width="28" />
          </a>
          <a href="https://github.com/sn00k" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" width="32" />
          </a>
        </section>
      </div>
    </div>
  );
}
