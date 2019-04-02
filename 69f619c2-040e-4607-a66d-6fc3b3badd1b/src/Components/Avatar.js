
import React from 'react';

import * as style from './Components.less';

export default function Avatar (props) {

	return (
		<div className={style.Avatar}>
			<img src={props.avatar} alt={props.name.first}/>
			<div>
				<div className={style.name}>{props.name.first} {props.name.last}</div>
				<div className={style.subtext}>{props.title}</div>
			</div>
		</div>
	);
}
