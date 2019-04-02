
import React, { Component } from 'react';

import * as style from './Components.less';
import Avatar from './Avatar'
import MenuBar from './MenuBar'
import FilesList from './FilesList'

class MemberInfo extends Component {
	constructor(props) {
		super(props)
		this.state = {
			files: [{"id":"c3362c78-2785-45f1-bc24-236df42661e2","file":"Curae.js","type":"text/javascript","version":"4.4.7","commit":{"hash":"8c7ff9074f3606896852f1acbe7a09bec500024c4e8f6fb2f4c63e4f5d3fd24e","source":"BitBucket"}},
			{"id":"629951f1-fe54-4ff7-93a3-c1627fbf5703","file":"Massa.js","type":"application/ecmascript","version":"0.3.0","commit":{"hash":"d17eec8b687dd5e9dc5c90f37e2d0eb156ac1e93571bf54123399026f90a6841","source":"GitHub"}},
			{"id":"24c8e5ad-0cb6-4a69-bb79-9badac24cfbf","file":"RisusDapibusAugue.js","type":"text/javascript","version":"3.46","commit":{"hash":"6a1f6f53816012bf4f232a8c64eb43d0a8ffd4694ba17bed221ff81e1a9ca9ba","source":"Git"}},
			{"id":"5508d8b7-ecad-4c5c-b790-b33643475d87","file":"InConsequat.java","type":"text/x-java-source","version":"0.1.4","commit":{"hash":"15c80c55463cac88147a39521bbad1c636a1d2de63d5dc148d6dc51a5b26d4ea","source":"GitLab"}},
			{"id":"02f20b27-71fc-419a-b2fc-e8cdf82cf774","file":"DuiVelNisl.js","type":"text/ecmascript","version":"0.6.6","commit":{"hash":"a1712ce6ad9d4f853577dc01fec93147a67ac737348e7725dd54b61009c85c14","source":"GitHub"}}]
		}
	}

	render() {
		// const selectedMember = this.state.members.filter(member => member.id === this.props.selectedMember)[0]
		// const memberList = this.props.members.map(member => {
		// 	return <Member key={member.id} memberObj={member} isSelected={member.id === this.props.selectedMemberId}/>
		// })
		return (
            <div className={style.MemberList}>
				<Avatar
					avatar={this.props.selectedMember.avatar}
					name={this.props.selectedMember.name}
					title={this.props.selectedMember.title}

				/>
				<MenuBar />
				<FilesList files={this.state.files} />
            </div>
		);
	}
}

export default MemberInfo;
