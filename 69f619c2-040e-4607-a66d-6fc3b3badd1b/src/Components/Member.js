
import React from 'react';

import * as style from './Components.less';

export default function Member (props) {

	return (
		<div className={style.Member}>
			<div className={style.name}>{props.memberObj.name.first} {props.memberObj.name.last}</div>
			<div className={style.subtext}>{props.memberObj.location.city}, {props.memberObj.location.state}</div>
		</div>
	);
}
