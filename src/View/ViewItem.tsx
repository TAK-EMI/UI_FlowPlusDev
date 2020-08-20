import React from 'react';
import ViewItemModel from '../ViewModel/ViewItemModel';

interface ViewItemProps {
	model: ViewItemModel;
}

export default class ViewItem extends React.Component<ViewItemProps> {
	get model(): ViewItemModel {
		return this.props.model;
	}
	render(): JSX.Element {
		return (
			<text x={this.model.X} y={this.model.Y} dominantBaseline={this.model.Label.DominantBaseLine}>
				{this.model.Label.Text}
			</text>
		);
	}
}
