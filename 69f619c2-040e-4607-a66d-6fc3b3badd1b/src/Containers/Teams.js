
import React, { Component } from 'react'

import * as style from './Containers.less'
import Breadcrumb from '../Components/Breadcrumb'
import MemberList from '../Components/MemberList'
import MemberInfo from '../Components/MemberInfo'
import { getTeams, getMembers, getFiles } from '../lib'

class Teams extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: true
		}
	}

	componentDidMount () {
		getTeams().then(teams => {
			this.updateSelectedTeam(teams.data[0].id)
			this.setState({
				teams: teams.data,
				selectedTeamId: teams.data[0].id	
			})
		})
	}

	updateSelectedTeam = (teamId) => {
		getMembers(teamId).then(members => {
			this.setState({
				selectedTeamId: teamId,
				members: members.data,
			})
			this.updateSelectedMember(members.data[0].id)
		})
	}

	updateSelectedMember = (id) => {
		getFiles(id).then(files => {
			this.setState({
				files: files.data,
				selectedMemberId: id,
				// we may need a better solution than putting the loading: false in the last API call
				// react does not guaruntee the order it calls nestsed setStates
				loading: false
			})
		})
	}

	render() {
		// render a loading spinner until there is enough data to display at least the breadcrumbs
		if (!this.state.loading) {
			const selectedMember = this.state.members.find(member => member.id === this.state.selectedMemberId)
			return (
				<div>
					<Breadcrumb teams={this.state.teams} selectedTeamId={this.state.selectedTeamId} updateSelectedTeam={this.updateSelectedTeam}/>
					<div className={style.Teams}>
						<div className={style.memberList}>
							<MemberList
								members={this.state.members}
								selectedMemberId={this.state.selectedMemberId}
								updateSelectedMember={this.updateSelectedMember}
							/>
						</div>
						<div className={style.memberInfo}>
							<MemberInfo selectedMember={selectedMember} files={this.state.files}/>
						</div>
					</div>
				</div>
			);
		} else { return <div>Loading</div> }
	}
}

export default Teams;
