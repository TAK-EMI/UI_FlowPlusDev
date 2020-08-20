import React from 'react';
import ViewTextModel from '../ViewModel/ViewTextModel';

interface ViewIDProps {
	model: ViewTextModel;
}

export default class ViewID extends React.Component<ViewIDProps> {
	get model(): ViewTextModel {
		return this.props.model;
	}

	render(): JSX.Element {
		return (
			<g className="view_id">
				<text x={this.model.X} y={this.model.Y} dominantBaseline={this.model.DominantBaseLine}>
					{this.model.Text}
				</text>
			</g>
		);
	}
}
