import BaseModel from './BaseModel';
import ViewHeaderModel from './ViewHeaderModel';
import ViewBodyModel from './ViewBodyModel';

export default class ViewDataModel extends BaseModel {
	private header: ViewHeaderModel;
	private body: ViewBodyModel;
	constructor(header: ViewHeaderModel, body: ViewBodyModel) {
		super();

		this.header = header;
		this.body = body;
	}

	get Header(): ViewHeaderModel {
		return this.header;
	}
	get Body(): ViewBodyModel {
		return this.body;
	}
}
