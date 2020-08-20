import ViewDataModelListBuilder from './Builder/ViewDataModelListBuilder';
import ViewDataModel from '../ViewModel/ViewDataModel';
import SettingDataInterface from '../Interface/SettingDataInterface';

export default class SettingDataModel {
	private viewlist: { [key: string]: ViewDataModel };
	static Load(json: string): SettingDataModel {
		const data: SettingDataInterface = JSON.parse(json) as SettingDataInterface;
		return new SettingDataModel(data);
	}

	constructor(obj: SettingDataInterface) {
		const builder: ViewDataModelListBuilder = new ViewDataModelListBuilder(obj);
		this.viewlist = builder.ViewList;
	}

	get ViewKeyList(): string[] {
		return Object.keys(this.viewlist);
	}

	getView(key: string): ViewDataModel {
		return this.viewlist[key];
	}
}
