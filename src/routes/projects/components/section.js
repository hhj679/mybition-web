import React from 'react';
import PropTypes from 'prop-types';
import styles from './section.less';
import { Card, Icon } from 'antd';

function Section ({ title, projects, addBtn, hiddenBtn, type }) {
  let cards = [];
  let hidden = null;
  if (projects!= undefined && projects.length > 0) {
  	projects.forEach((project, index) => {
  		const imgUrl = "url(" + project.img + ")";
		cards.push(
			<li className={styles.item} key={project.id}>
				<Card className={styles.card} style={{backgroundImage:imgUrl}}>
					<div className={styles.card_header}>
						<div className={styles.card_header_top}>
							<span className={styles.card_header_top_name} title={project.name}>{project.name}</span>
							<span className={styles.card_header_top_hidden}>
								<Icon type="edit" />
								<Icon type="star-o" />
							</span>
						</div>
						<div className={styles.card_header_bottom}></div>
					</div>
					<div className={styles.card_footer}></div>
					<div className={styles.card_shadow}></div>
				</Card>
			</li>
		)
	})
  } else if(type == 'archive') {
  	cards = (
  		<div className={styles.portal_placeholder}>
  			<img alt="暂无归档的项目" src="https://dn-st.teambition.net/teambition/images/layers@2x.247eeacd.png"/>
  			<div className={styles.portal_placeholder_text}>
  				<span>暂无归档的项目</span>
  			</div>
  		</div>
  	)
  }

  if(addBtn) {
  	cards.push(
	  	<li className={styles.item} key={"add0001"}>
			<Card className={[styles.add_card, styles.card]}>
				<a className={styles.add_card_button}>
					<Icon type="plus-circle" />
					<span className={styles.add_card_text}>创建新项目</span>
				</a>
			</Card>
		</li>
	)
  }

  if(hiddenBtn) {
  	hidden = (<a>隐藏</a>)
  }
  
  return (<div className={styles.component}>
    <div className={styles.header}>
      <div className={styles.header_left}>
      	<div className={styles.header_left_title}>
      		<span>{title}</span>
      	</div>
      	<div className={styles.header_left_toolbar}>{hidden}</div>
      </div>
      <div className={styles.header_right}></div>
    </div>
   	<ul className={styles.grid_componets}>
   		{cards}
   	</ul>
  </div>)
}

Section.propTypes = {
  title: PropTypes.string,
  projects: PropTypes.array
}

export default Section
