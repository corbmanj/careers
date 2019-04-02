
import React from 'react';

import * as style from './Components.less';
import TeamList from './TeamList'

export default function Breadcrumb (props) {

	return (
		<div className={style.Breadcrumb}>
			Teams
			<i className="fas fa-angle-right"></i>
			<TeamList 
				selectedTeamId={props.selectedTeamId}
				teams={props.teams}
				updateSelectedTeam={props.updateSelectedTeam}
			/>
		</div>
	);
}
