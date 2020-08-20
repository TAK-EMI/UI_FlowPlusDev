export interface ViewItemInterface {
	type: string;
	text: string;
}

export interface ViewActionInterface {
	item: string;
	event: string;
	next?: string;
}

export interface ViewDataInterface {
	id: string;
	title: string;
	items?: {
		[key: string]: ViewItemInterface;
	};
	actions?: {
		[key: string]: ViewActionInterface;
	};
}

export default interface SettingDataInterface {
	[key: string]: ViewDataInterface;
}
