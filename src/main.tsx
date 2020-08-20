import React from 'react';
import ReactDOM from 'react-dom';
import SettingDataModel from './Model/SettingDataModel';
import Views from './View/Views';

const jsonStr = JSON.stringify({
	SampleView: {
		id: 'ID0001',
		title: 'サンプル画面',
		items: {
			Btn01: {
				type: 'Button',
				text: 'Button01',
			},
			Btn02: {
				type: 'Button',
				text: 'Button02',
			},
			Btn03: {
				type: 'Button',
				text: 'Button03',
			},
		},
		actions: {
			act01: {
				item: 'Button01',
				event: 'touchUpInside',
				next: 'ID0002',
			},
		},
	},
	SubView: {
		id: 'ID0002',
		title: 'サブ画面',
	},
});

ReactDOM.render(
	//<Hello compiler="TypeScript" framework="React" />
	<Views x={0} y={0} data={SettingDataModel.Load(jsonStr)} />,
	document.getElementById('root')
);
