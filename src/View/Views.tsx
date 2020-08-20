import React from 'react';
import SettingDataModel from '../Model/SettingDataModel';
import View from './View';

interface ViewsProps {
	x: number;
	y: number;
	data: SettingDataModel;
}

export default class Views extends React.Component<ViewsProps> {
	get data(): SettingDataModel {
		return this.props.data;
	}

	render(): JSX.Element {
		console.log(this.data);

		return (
			<svg className="canvas" xmlns="http://www.w3.org/2000/svg">
				{this.data.ViewKeyList.map((key) => {
					return <View key={key} model={this.data.getView(key)} />;
				})}
			</svg>
		);
	}
}
