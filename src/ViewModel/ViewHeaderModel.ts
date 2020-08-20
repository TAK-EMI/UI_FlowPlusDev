import BaseModel from './BaseModel';
import ViewTextModel from './ViewTextModel';

export default class ViewHeaderModel extends BaseModel {
	private id: ViewTextModel;
	private title: ViewTextModel;
	constructor(id: ViewTextModel, title: ViewTextModel) {
		super();

		this.id = id;
		this.title = title;
	}

	get ID(): ViewTextModel {
		return this.id;
	}
	get Title(): ViewTextModel {
		return this.title;
	}
}
