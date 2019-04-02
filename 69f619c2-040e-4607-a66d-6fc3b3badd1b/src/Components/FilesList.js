
import React from 'react';

import * as style from './Components.less';

export default function FileList (props) {
	let fileList = []
	// file, commit, and issue info is all stored in files array
	// determine which info to display based on selected menu item
	switch (props.selectedItem) {
		case 'commits':
			fileList = props.files.map(file => {
				return <li key={file.id}>sha: {file.commit.hash} (v {file.version})</li>
			})
			break
		case 'issues':
			fileList = props.files.map(file => {
				return <li key={file.id}>Issue ID: {file.id}</li>
			})
			break
		case 'files':
		default:
			fileList = props.files.map(file => {
				return <li key={file.id}>{file.file} ({file.type})</li>
			})
	}

	return (
		<div className={style.FileList}>
			<ul>{fileList}</ul>
		</div>
	);
}
