import React from 'react';
import NavBar from './NavBar';
import CopyrightBar from './CopyrightBar';

class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="about-me center">
          <h1>Luke Wassink</h1>
          <section>
            I am a full-stack web developer living in the East Bay.
            I work with Javascript, React, and Redux on the frontend.
            On the backend I have used Ruby on Rails, express server, and the Scala library Akka HTTP.
          </section>
          <section>
            <label>resume:</label>
            <a href="/assets/luke-wassink-resume.pdf">pdf</a>
          </section>
          <section className="group">
            <label>school:</label>
            <ul>
              <li>
                B.S. in Physics and Mathematics
              </li>
              <li>
                Ph.D. in Mathematics
              </li>
              <li className="last">
                Web development coding bootcamp
              </li>
            </ul>
          </section>
          <section>
            <label>skills:</label>
              <p>
                Ruby, Javascript, Scala, SQL, Rails, React, Redux
              </p>
          </section>
        </div>
        <CopyrightBar />
      </div>
    )
  }
}

export default AboutMe;
