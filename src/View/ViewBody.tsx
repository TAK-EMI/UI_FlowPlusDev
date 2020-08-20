import React from 'react';
import ViewBodyModel from '../ViewModel/ViewBodyModel';
import ViewItem from './ViewItem';
import ViewAction from './ViewAction';

interface ViewBodyProps {
	model: ViewBodyModel;
}

export default class ViewBody extends React.Component<ViewBodyProps> {
	get model(): ViewBodyModel {
		return this.props.model;
	}

	renderItems(): JSX.Element {
		const model = this.model;

		let key: string | null = null;

		const list = [];
		while ((key = model.ItemKey(key))) {
			const item = model.getItem(key);
			item && list.push(<ViewItem model={item} />);
		}

		const rect = model.ItemListBoundingRect;
		return (
			<g className="view_items">
				<rect x={rect.X} y={rect.Y} width={rect.Width} height={rect.Height} fill="none" stroke="#000" />
				{list}
			</g>
		);
	}
	renderActions(): JSX.Element {
		const model = this.model;
		let key: string | null = null;

		const list = [];
		while ((key = model.ActionKey(key))) {
			const act = model.getAction(key);
			act && list.push(<ViewAction model={act} />);
		}

		return <g className="view_items">{list}</g>;
	}
	render(): JSX.Element {
		return (
			<g className="view_body">
				{this.model.hasItems() && this.renderItems()}
				{this.model.hasActions() && this.renderActions()}
			</g>
		);
	}
}
