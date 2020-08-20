import BaseModel from './BaseModel';
import ViewTextModel from './ViewTextModel';

export default class ViewItemModel extends BaseModel {
	private type: string;
	private text: string;
	private label: ViewTextModel;
	constructor(type: string, text: string, label: ViewTextModel) {
		super();

		this.type = type;
		this.text = text;

		this.label = label;
	}

	get Label(): ViewTextModel {
		return this.label;
	}
}
