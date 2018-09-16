import React, { Component } from "react";
import "./icofonts.css";
import "./Resume.scss";

class Resume extends Component {

  skillLevel(level) {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < level) {
        stars.push(<span className="full-slide" key={i} />);
      } else {
        stars.push(<span className="empty-slide" key={i} />);
      }
    }
    return (
      <span className="slider">
        {stars.map(elem => {
          return elem;
        })}
      </span>
    );
  }
  getMiscSection(props) {
    if(props.miscSection) {
      return (<section>{props.miscSection}</section>);
    } else {
      return null;
    }
  }
  render() {
    return (
      <div
        id="react-resume-component"
      >
        <div id="about">
          <div>
            <div id="profile-image">
              <img src={this.props.profileImage} />
            </div>
            <div>
              <h2>
                <span className="icon icon-info" />
                About {this.props.firstName}
              </h2>
              <p>{this.props.summary}</p>
            </div>
            <div id="contact">
              <h2>
                <span className="icon icon-quill" />
                Contact
              </h2>
              <div>
                <span className="icon icon-mail3" />
                {this.props.email}
              </div>
              <div>
                <span className="icon icon-phone" />
                {this.props.tel}
              </div>
              <div>
                <span className="icon icon-home" />
                {this.props.address}
              </div>
              <div>
                <span className="icon icon-linkedin" />
                {this.props.linkedInAccount}
              </div>
              <div>
                <span className="icon icon-github" />
                {this.props.githubAccount}
              </div>
            </div>
          </div>
        </div>
        <div id="main">
          <h1>{this.props.name}</h1>
          <h3 id="profession">{this.props.profession}</h3>

          <section>
            <h2>
              <span className="icon icon-terminal" />
              Experience
            </h2>
            {this.props.experiences.map(job => {
              return (
                <div className="subsection" key={job.company + job.title}>
                  <h3>
                    {job.title}
                    <span id="company">{job.company}</span>
                    <span>{job.period}</span>
                  </h3>
                  <div className="description">{job.description}</div>
                </div>
              );
            })}
          </section>
          <section>
            <h2>
              <span className="icon icon-library" />
              Education
            </h2>
            {this.props.education.map(school => {
              return (
                <div
                  className="subsection"
                  key={school.school + school.department}
                >
                  <h3>
                    {school.degree}
                    <span>{school.period}</span>
                  </h3>
                  <p className="description">
                    {school.school + ", " + school.department + "."}
                  </p>
                </div>
              );
            })}
          </section>
          <section>
            <h2>
              <span className="icon icon-magic-wand" />
              Skills
            </h2>
            <div id="skills-content">
              {this.props.skills.map(skill => {
                return (
                  <div className="skill" key={skill.name}>
                    <span className="skillName">{skill.name}</span>
                    {this.skillLevel(skill.level)}
                  </div>
                );
              })}
            </div>
          </section>
          {this.getMiscSection(this.props)}
        </div>
      </div>
    );
  }
}

export default Resume;
