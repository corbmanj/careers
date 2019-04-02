
import React, { Component } from 'react';

import * as style from './Components.less';

class TeamList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			listOpen: false
		}
	}

	toggleList = () => {
		this.setState(prevState => { return {listOpen: !prevState.listOpen} })
	}

	handleSelect = (ev) => {
		this.setState({listOpen: false})
		this.props.updateSelectedTeam(ev.target.id)
	}

	render() {
		const filteredTeamList = this.props.teams.filter(team => team.id !== this.props.selectedTeamId)
		const teamList = filteredTeamList.map(team => {
			return (
				<li
					key={team.id}
					id={team.id}
					onClick={this.handleSelect}
				>
					{team.name}
				</li>
			)
		})
		const selectedTeam = this.props.teams.filter(team => team.id === this.props.selectedTeamId)[0]
		return (
			<span className={style.TeamsList}>
    			<div onClick={this.toggleList}>
        			<div>{selectedTeam.name}
						{this.state.listOpen
							? <i className="fas fa-caret-up"></i>
							: <i className="fas fa-caret-down"></i>
						}
					</div>
				</div>
     			{this.state.listOpen && <ul>
       			{teamList}
      			</ul>}
    		</span>
		);
	}
}

export default TeamList;
