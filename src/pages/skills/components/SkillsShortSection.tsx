import React, { FunctionComponent } from 'react';
import Link from 'next/link';

import skillGroups from '../skills.json';

import styles from './SkillsShortSection.module.scss';

const flatSkills = skillGroups.flatMap((skillGroup) => skillGroup.short);
const middleSkill = flatSkills[Math.ceil(flatSkills.length / 2)];
const middleSkillGroupIndex = skillGroups.findIndex((skillGroup) =>
  skillGroup.short.find((skill) => skill === middleSkill),
);

const firstHalfSkills = skillGroups.slice(0, middleSkillGroupIndex);
const secondHalfSkills = skillGroups.slice(middleSkillGroupIndex);

type SkillsListProps = {
  skills: typeof skillGroups;
};

const SkillsList: FunctionComponent<SkillsListProps> = ({ skills }) => {
  return (
    <ul>
      {skills.map((skillGroup) => (
        <Link
          href={`/skills#${encodeURIComponent(skillGroup.long.title)}`}
          key={skillGroup.long.title}
        >
          <a className={styles.skillGroup}>
            {skillGroup.short.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </a>
        </Link>
      ))}
    </ul>
  );
};

const SkillsShortSection = () => {
  return (
    <section>
      <h1>Skills</h1>
      <p>
        <em>
          You can click on each group of skills to know more about my
          experience.
        </em>
      </p>
      <div className={styles.skillsList}>
        <div className={styles.skillsSection}>
          <SkillsList skills={firstHalfSkills} />
        </div>
        <div className={styles.skillsSection}>
          <SkillsList skills={secondHalfSkills} />
        </div>
      </div>
    </section>
  );
};

export default SkillsShortSection;
