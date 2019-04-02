
import React from 'react';

import * as style from './Components.less';

export default function MenuBar (props) {
	const itemList = ['files', 'commits', 'issues']
	const itemSpans = itemList.map((item, index) => {
		const spanStyle = item === props.selectedItem ? style.selected : null
		return (
			<span
				key={index}
				className={spanStyle}
				onClick={() => props.updateSelectedItem(item)}
			>
				recent {item}
			</span>
		)
	})
	return (
		<div className={style.MenuBar}>
			{itemSpans}
		</div>
	);
}
