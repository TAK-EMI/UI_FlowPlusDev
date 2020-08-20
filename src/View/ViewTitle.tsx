import React from 'react';
import ViewTextModel from '../ViewModel/ViewTextModel';

interface ViewTitleProps {
	model: ViewTextModel;
}

export default class ViewTitle extends React.Component<ViewTitleProps> {
	get model(): ViewTextModel {
		return this.props.model;
	}
	render(): JSX.Element {
		return (
			<g className="view_title">
				<text x={this.model.X} y={this.model.Y} dominantBaseline={this.model.DominantBaseLine}>
					{this.model.Text}
				</text>
			</g>
		);
	}
}
