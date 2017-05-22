import React from 'react';
import CopyrightBar from './CopyrightBar';
import PDFTag from './tags/PDFTag';

class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <div className="about-me center">
          <h1>Luke Wassink</h1>
          <section>
            I am a full-stack web developer.
            I work with Javascript, React, and Redux on the frontend.
            On the backend I use Ruby on Rails, Node.js, and Nginx.
            I also work with Scala.
          </section>
          <section>
            <label>Education:</label>
            <ul>
              <li>
                B.S. in Physics and Mathematics
              </li>
              <li>
                Ph.D. in Mathematics
              </li>
              <li className="last">
                App Academy coding bootcamp
              </li>
            </ul>
          </section>
          <section>
            <label>Skills:</label>
              <p>
                Ruby, Javascript, Scala, SQL, Rails, React, Redux
              </p>
          </section>
          <section>
            <PDFTag
            label="R&eacute;sum&eacute;"
            url="/assets/luke-wassink-resume.pdf"
            />
            <PDFTag
            label="Doctoral thesis"
            url="/assets/luke-wassink-thesis.pdf"
            />
          </section>
        </div>
        <CopyrightBar fixed={true} />
      </div>
    )
  }
}

export default AboutMe;
