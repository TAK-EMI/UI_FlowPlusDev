import BaseModel from './BaseModel';
import ViewTextModel from './ViewTextModel';

export default class ViewActionModel extends BaseModel {
	private item: string;
	private event: string;
	private next: string;

	private label: ViewTextModel;
	constructor(item: string, event: string, next: string, label: ViewTextModel) {
		super();

		this.item = item;
		this.event = event;
		this.next = next;

		this.label = label;
	}

	get Label(): ViewTextModel {
		return this.label;
	}
}
