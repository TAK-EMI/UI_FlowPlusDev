import BaseModel from './BaseModel';
import ViewItemModel from './ViewItemModel';
import ViewActionModel from './ViewActionModel';
import Rect from '../Geometory/Rect';

export default class ViewBodyModel extends BaseModel {
	private items: { [key: string]: ViewItemModel } | null;
	private actions: { [key: string]: ViewActionModel } | null;
	private itemsRect: Rect;
	private actionsRect: Rect;

	private itemKeyList: string[] | null;
	private actionKeyList: string[] | null;
	constructor(
		items: { [key: string]: ViewItemModel } | null,
		actions: { [key: string]: ViewActionModel } | null,
		iRect: Rect,
		aRect: Rect
	) {
		super();
		this.items = items;
		this.actions = actions;
		this.itemsRect = iRect;
		this.actionsRect = aRect;

		this.itemKeyList = items && Object.entries(items).map(([key]) => key);
		this.actionKeyList = actions && Object.entries(actions).map(([key]) => key);
	}

	get ItemListBoundingRect(): Rect {
		return this.itemsRect;
	}
	get ActionListBoundingRect(): Rect {
		return this.actionsRect;
	}

	// リストのキーを取得
	// key = null: 最初のキーを返す
	// key = 存在するキー: 次のキーを返す
	// key = 最後のキー or 存在しないキー: nullを返す
	ItemKey(key: string | null = null): string | null {
		const list = this.itemKeyList;
		if (!key) {
			return (list && list[0]) || null;
		}

		return (list && list[list.indexOf(key) + 1]) || null;
	}
	ActionKey(key: string | null = null): string | null {
		const list = this.actionKeyList;
		if (!key) {
			return (list && list[0]) || null;
		}

		return (list && list[list.indexOf(key) + 1]) || null;
	}

	getItem(key: string): ViewItemModel | null {
		return (this.items && this.items[key]) ?? null;
	}
	getAction(key: string): ViewActionModel | null {
		return (this.actions && this.actions[key]) ?? null;
	}
}
