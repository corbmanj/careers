
import React, { Component } from 'react';

import * as style from './Components.less';
import Member from './Member'

class MemberList extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	render() {
		// const selectedMember = this.state.members.filter(member => member.id === this.props.selectedMember)[0]
		const memberList = this.props.members.map(member => {
			return (
				<Member
					key={member.id}
					memberObj={member}
					isSelected={member.id === this.props.selectedMemberId}
				/>
			)
		})
		return (
            <div className={style.MemberList}>
				<ul>{memberList}</ul>
            </div>
		);
	}
}

export default MemberList;
