import React from 'react';
import ViewHeaderModel from '../ViewModel/ViewHeaderModel';
import ViewID from './ViewID';
import ViewTitle from './ViewTitle';

interface ViewHeaderProps {
	model: ViewHeaderModel;
}

export default class ViewHeader extends React.Component<ViewHeaderProps> {
	get model(): ViewHeaderModel {
		return this.props.model;
	}

	render(): JSX.Element {
		return (
			<g className="view_header">
				<rect
					x={this.model.X}
					y={this.model.Y}
					width={this.model.Width}
					height={this.model.Height}
					fill="none"
					stroke="#000"
				/>
				<ViewID model={this.model.ID} />
				<ViewTitle model={this.model.Title} />
			</g>
		);
	}
}
