import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import SettingDataModel from './Model/SettingDataModel';

const Hello: React.FunctionComponent<{
	compiler: string;
	framework: string;
}> = (props) => {
	return (
		<div>
			<div>{props.compiler}</div>
			<div>{props.framework}</div>
		</div>
	);
};
Hello.propTypes = {
	compiler: PropTypes.string.isRequired,
	framework: PropTypes.string.isRequired,
};

console.log(
	SettingDataModel.Load(
		JSON.stringify({
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
		})
	)
);

ReactDOM.render(<Hello compiler="TypeScript" framework="React" />, document.getElementById('root'));
