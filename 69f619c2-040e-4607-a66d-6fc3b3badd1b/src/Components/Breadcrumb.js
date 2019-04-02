
import React, { Component } from 'react';

import * as style from './Components.less';
import TeamList from './TeamList'

class Breadcrumb extends Component {
	constructor(props) {
		super(props)
		this.state = {
			teams: [{"id":"e65a26fb-18f6-483f-8e49-190a06d86210","name":"Front-End"},
			{"id":"df99ea14-f6b4-4900-8b1b-ca803071d09d","name":"Platform"},
			{"id":"2db83ffe-03aa-4cdf-bdea-69ef1a6bb928","name":"Data"},
			{"id":"96287cfa-7296-4e4a-b3cc-e22d65eec84c","name":"Customer Success"},
			{"id":"889dfa77-f339-4322-888a-079e7933bb4a","name":"Ops & Support"}]
		}
	}

	render() {
		// const teamList = this.state.teams.map(team => {
		// 	return <option key={team.id} value={team.name}>{team.name}</option>
		// })
		return (
			<div className={style.Breadcrumb}>
				Teams
				<i className="fas fa-angle-right"></i>
				<TeamList 
					selectedTeamId={this.props.selectedTeamId}
					teams={this.state.teams}
					updateSelectedTeam={this.props.updateSelectedTeam}
				/>
			</div>
		);
	}
}

export default Breadcrumb;
