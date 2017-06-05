import React from 'react';
import CopyrightBar from './CopyrightBar';
import { PDFTag } from './tags/LabelTags';
import {
  GithubTag,
  EmailTag,
  LinkedinTag
} from './tags/IconTags';

class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <div className="about-me center">
          <h1>Luke Wassink</h1>
          <section>
            I love solving difficult, abstract problems.
            Previously I worked as a research mathematician.
            Now I bring the same analytical mindset and the same ability to see both the big picture and the details of a project at the same time to bear on my work as a software developer.
            I enjoy the challenge of disentangling an intricate code base or a complicated algorithm.
            I also enjoy learning new technologies and new languages.
            Currently I work with JavaScript, React.js, Ruby, Rails, and Scala.
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
            <GithubTag />
            <EmailTag />
            <LinkedinTag />
          </section>
        </div>
        <CopyrightBar fixed={true} />
      </div>
    )
  }
}

export default AboutMe;
