import BaseModel from './BaseModel';

export default class ViewTextModel extends BaseModel {
	private dominantBaseline = 'text-before-edge';
	private text: string;
	constructor(str = '') {
		super();
		this.text = str;
	}

	get Text(): string {
		return this.text;
	}
	get DominantBaseLine(): string {
		return this.dominantBaseline;
	}
}
