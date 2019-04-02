
import React, { useState } from 'react';

import * as style from './Components.less';
import Avatar from './Avatar'
import MenuBar from './MenuBar'
import FilesList from './FilesList'

export default function MemberInfo (props) {
	const [selectedItem, updateSelectedItem] = useState('files');
	return (
		<div className={style.MemberList}>
			<Avatar
				avatar={props.selectedMember.avatar}
				name={props.selectedMember.name}
				title={props.selectedMember.title}

			/>
			<MenuBar
				selectedItem={selectedItem}
				updateSelectedItem={updateSelectedItem}
			/>
			<FilesList
				files={props.files}
				selectedItem={selectedItem}
			/>
		</div>
	);
}
