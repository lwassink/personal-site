import React from 'react';
import NavBar from './NavBar';

class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="about-me center">
          <h1>Luke Wassink</h1>
          <section>
            I am a full-stack web developer living in the east bay.
            I work with Javascript, React, and Redux on the frontend.
            I have used Ruby on Rails as well as the Scala library Akka HTTP on the backend.
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
      </div>
    )
  }
}

export default AboutMe;
