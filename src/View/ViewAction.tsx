import React from 'react';
import ViewActionModel from '../ViewModel/ViewActionModel';

interface ViewActionProps {
	model: ViewActionModel;
}

export default class ViewAction extends React.Component<ViewActionProps> {
	get model(): ViewActionModel {
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
