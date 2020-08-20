import React from 'react';
import ViewDataModel from '../ViewModel/ViewDataModel';
import ViewHeader from './ViewHeader';
import ViewBody from './ViewBody';

interface ViewProps {
	key: string;
	model: ViewDataModel;
}

export default class View extends React.Component<ViewProps> {
	get model(): ViewDataModel {
		return this.props.model;
	}

	get x(): number {
		return this.model.X;
	}
	get y(): number {
		return this.model.Y;
	}
	get width(): number {
		return this.model.Width;
	}
	get height(): number {
		return this.model.Height;
	}
	render(): JSX.Element {
		return (
			<g className="view">
				<rect x={this.x} y={this.y} width={this.width} height={this.height} fill="none" stroke="#000"></rect>
				<ViewHeader model={this.model.Header} />
				<ViewBody model={this.model.Body} />
			</g>
		);
	}
}
