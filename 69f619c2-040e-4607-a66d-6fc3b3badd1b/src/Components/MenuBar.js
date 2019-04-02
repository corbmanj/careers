
import React from 'react';

import * as style from './Components.less';

export default function Member (props) {

	return (
		<div className={style.MenuBar}>
			<span className={style.selected}>recent files</span><span>recent commits</span><span>recent issues</span>
		</div>
	);
}
