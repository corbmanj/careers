
import React, { Component } from 'react'

import * as style from './Containers.less'
import Breadcrumb from '../Components/Breadcrumb'
import MemberList from '../Components/MemberList'
import MemberInfo from '../Components/MemberInfo'
import { callApi } from '../lib'

class Teams extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: true
		}
	}

	componentDidMount () {
		callApi('5c9d99d133000056003f2385')
			.then(teamsResponse => {
				callApi(`5ca00c403300006e00a87dba?team=${teamsResponse.data[0].id}`)
					.then(membersResponse => {
						callApi(`5c9d99b13300005b003f2382?employee=${membersResponse.data[0].id}`)
							.then(filesResponse => {
								this.setState({
									teams: teamsResponse.data,
									selectedTeamId: teamsResponse.data[0].id,
									members: membersResponse.data,
									selectedMemberId: membersResponse.data[0].id,
									files: filesResponse.data,
									loading: false
								})
							})
					})
			})
	}

	updateSelectedTeam = (teamId) => {
		callApi(`5ca00c403300006e00a87dba?team=${teamId}`)
			.then(membersResponse => {
				callApi(`5c9d99b13300005b003f2382?employee=${membersResponse.data[0].id}`)
						.then(filesResponse => {
							this.setState({
								selectedTeamId: teamId,
								members: membersResponse.data,
								selectedMemberId: membersResponse.data[0].id,
								files: filesResponse.data
							})
						})
			})
	}

	updateSelectedMember = (id) => {
		callApi(`5c9d99b13300005b003f2382?employee=${id}`)
			.then(filesResponse => {
				this.setState({
					files: filesResponse.data,
					selectedMemberId: id
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
