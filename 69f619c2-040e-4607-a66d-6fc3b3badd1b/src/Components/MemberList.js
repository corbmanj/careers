
import React from 'react';

import * as style from './Components.less';
import Member from './Member'

export default function MemberList (props) {
		const memberList = props.members.map(member => {
			return (
				<Member
					key={member.id}
					memberObj={member}
					isSelected={member.id === props.selectedMemberId}
					updateSelectedMember={props.updateSelectedMember}
				/>
			)
		})
		return (
            <div className={style.MemberList}>
				<ul>{memberList}</ul>
            </div>
		);
}
