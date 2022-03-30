import { useSinglePrismicDocument, PrismicRichText } from "@prismicio/react";
import { useStyles } from "./about-styles";

function About() {
  const [skills] = useSinglePrismicDocument("skills");
  const [education] = useSinglePrismicDocument("education");
  const [experience] = useSinglePrismicDocument("experience");

  const classes = useStyles();
  return (
    <section className={classes.about} id="about">
      <h2>About me</h2>
      <div className={classes.content}>
        {skills && (
          <div className={classes.section}>
            <h3>{skills.data.skills_header[0].text}</h3>
            <PrismicRichText field={skills.data.skills_content} />
          </div>
        )}
        {education && (
          <div className={classes.section}>
            <h3>{education.data.education_header[0].text}</h3>
            <PrismicRichText field={education.data.education_content} />
          </div>
        )}
        {experience && (
          <div className={classes.section}>
            <h3>{experience.data.experience_header[0].text}</h3>
            <PrismicRichText field={experience.data.experience_content} />
          </div>
        )}
      </div>
    </section>
  );
}

export default About;
