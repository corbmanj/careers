
import React from 'react';

import * as style from './Components.less';

export default function FileList (props) {
	let fileList = []
	let headerRow = <tr><td>File Name</td><td>File Type</td><td>Version</td></tr>
	// file, commit, and issue info is all stored in files array
	// determine which info to display based on selected menu item
	switch (props.selectedItem) {
		case 'commits':
			headerRow = <tr><td>Commit Hash</td><td>Source</td><td>Version</td></tr>
			fileList = props.files.map(file => {
				// only display short sha, matches git rev-parse --short
				const shortSHA = file.commit.hash.substring(0,8)
				return <tr key={file.id}><td>{shortSHA}</td><td>{file.commit.source}</td><td>v {file.version}</td></tr>
			})
			break
		case 'issues':
			headerRow = <tr><td>Issue ID</td><td>Version</td></tr>
			fileList = props.files.map(file => {
				return <tr key={file.id}><td>{file.id}</td><td>{file.version}</td></tr>
			})
			break
		case 'files':
		default:
		fileList = props.files.map(file => {
				return (
					<tr key = {file.id}><td>{file.file}</td><td>{file.type}</td><td>{file.version}</td></tr>
				)
			})
	}

	return (
		<div className={style.FileList}>
			<table>
				<thead>{headerRow}</thead>
				<tbody>{fileList}</tbody>
			</table>
		</div>
	);
}
