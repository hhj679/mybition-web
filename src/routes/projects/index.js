import React from 'react';
import { connect } from 'dva';
import styles from './index.css';
import Section from './components/section.js'

function Projects() {
  const myProjectsProps = {
  	title: '我拥有的项目',
  	projects: [{
  		id: '000000001',
  		name: '教育',
  		img: 'https://mailimg.teambition.com/logos/cover-education.jpg'
  	}, {
  		id: '000000002',
  		name: '熟悉Mybetion',
  		img: 'https://mailimg.teambition.com/logos/cover-other.jpg'
  	}],
  	addBtn: true
  }

  const archiveProjectsProps = {
  	title: '已归档的项目',
  	projects: [],
  	hiddenBtn: true,
  	type: 'archive'
  }
  return (
    <div className={styles.portal_component}>
      <Section {...myProjectsProps}></Section>
      <Section {...archiveProjectsProps}></Section>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Projects);
