
import React from 'react';

import * as style from './Components.less';

export default function FileList (props) {
	const fileList = props.files.map(file => {
		return <li key={file.id}>{file.file} ({file.type})</li>
	})
	return (
		<div className={style.FileList}>
			<ul>{fileList}</ul>
		</div>
	);
}
