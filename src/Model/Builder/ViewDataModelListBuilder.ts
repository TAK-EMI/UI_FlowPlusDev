import ViewDataModel from '../../ViewModel/ViewDataModel';
import Point from '../../Geometory/Point';
import ViewHeaderModel from '../../ViewModel/ViewHeaderModel';
import ViewBodyModel from '../../ViewModel/ViewBodyModel';
import ViewActionModel from '../../ViewModel/ViewActionModel';
import ViewItemModel from '../../ViewModel/ViewItemModel';
import ViewTextModel from '../../ViewModel/ViewTextModel';
import Utility from '../../Utility';
import Rect from '../../Geometory/Rect';
import Size from '../../Geometory/Size';
import SettingDataInterface, {
	ViewDataInterface,
	ViewItemInterface,
	ViewActionInterface,
} from '../../Interface/SettingDataInterface';

export default class ViewDataModelListBuilder {
	private viewList: { [key: string]: ViewDataModel };
	constructor(src: SettingDataInterface) {
		let pos = Point.Zero;
		const margin = 10;

		this.viewList = Object.fromEntries(
			Object.entries(src).map(([key, view]) => {
				const model = this.buildViewDataModel(pos, view);
				pos = pos.add(pos.X + margin + model.Width, pos.Y);

				return [key, model];
			})
		);

		return;
	}
	get ViewList(): { [key: string]: ViewDataModel } {
		return this.viewList;
	}

	buildViewDataModel(pos: Point, obj: ViewDataInterface): ViewDataModel {
		const header = this.buildViewHeaderModel(pos, obj.id ?? '', obj.title ?? '');
		const body = this.buildViewBodyModel(
			new Point(pos.X, pos.Y + header.Height),
			obj.items ?? null,
			obj.actions ?? null
		);

		const view = new ViewDataModel(header, body);
		view.Position = pos;
		view.Width = header.Width = body.Width = Math.max(100, Math.max(header.Width, body.Width));
		view.Height = header.Height + body.Height;

		return view;
	}
	buildViewHeaderModel(pos: Point, idStr: string, titleStr: string): ViewHeaderModel {
		const id = this.buildViewTextModel(pos, idStr);
		const title = this.buildViewTextModel(new Point(pos.X, pos.Y + id.Height), titleStr);

		const header = new ViewHeaderModel(id, title);

		header.Position = id.Position;
		header.Width = Math.max(id.Width, title.Width);
		header.Height = id.Height + title.Height;

		return header;
	}
	buildViewBodyModel(
		pos: Point,
		items: { [key: string]: ViewItemInterface } | null,
		acts: { [key: string]: ViewActionInterface } | null
	): ViewBodyModel {
		const itemList = this.buildViewItemModelList(pos, items);
		const itemRawList = itemList && Object.entries(itemList).map(([, item]) => item);
		const itemWidth = itemRawList?.map((item) => item.Width).reduce((a, b) => Math.max(a, b)) || 0;
		const itemHeight = itemRawList?.map((item) => item.Height).reduce((a, b) => a + b) || 0;

		const actList = this.buildViewActionModelList(new Point(pos.X, pos.Y + itemHeight), acts);
		const actRawList = actList && Object.entries(actList).map(([, act]) => act);
		const actWidth = actRawList?.map((act) => act.Width).reduce((a, b) => Math.max(a, b)) || 0;
		const actHeigh = actRawList?.map((act) => act.Height).reduce((a, b) => a + b) || 0;

		const maxWidth = Math.max(itemWidth, actWidth);
		const itemRect = new Rect(pos, new Size(maxWidth, itemHeight));
		const actRect = new Rect(pos, new Size(maxWidth, actHeigh));

		const model = new ViewBodyModel(itemList, actList, itemRect, actRect);
		model.Position = pos;
		model.Width = maxWidth;
		model.Height = itemHeight + actHeigh;

		return model;
	}
	buildViewActionModelList(
		pos: Point,
		acts: { [key: string]: ViewActionInterface } | null
	): { [key: string]: ViewActionModel } | null {
		if (acts == null) {
			return null;
		}

		let p = pos;
		const list = Object.fromEntries(
			Object.entries(acts).map(([key, act]) => {
				const item: string = act.item;
				const event: string = act.event;
				const next: string = act.next ?? '';

				const labelStr = `${event} by ${item} to ${next}`;
				const label = new ViewTextModel(labelStr);
				label.Position = p;
				label.Size = Utility.calcStringSize(labelStr);

				const model = new ViewActionModel(item, event, next, label);
				model.Position = label.Position;
				model.Size = label.Size;

				p = p.add(0, model.Height);
				return [key, model];
			})
		);

		return list;
	}
	buildViewItemModelList(
		pos: Point,
		items: { [key: string]: ViewItemInterface } | null
	): { [key: string]: ViewItemModel } | null {
		if (items == null) {
			return null;
		}

		let p = pos;
		const list: { [key: string]: ViewItemModel } = Object.fromEntries(
			Object.entries(items).map(([key, item]) => {
				const type: string = item.type;
				const text: string = item.text;
				const labelStr = `+ ${text}: ${type}`;
				const label = new ViewTextModel(labelStr);
				label.Position = p;
				label.Size = Utility.calcStringSize(labelStr);

				const model = new ViewItemModel(type, text, label);
				model.Position = label.Position;
				model.Size = label.Size;

				p = p.add(0, model.Height);
				return [key, model];
			})
		);

		return list;
	}
	buildViewTextModel(pos: Point, str: string): ViewTextModel {
		const model = new ViewTextModel(str);
		model.Position = pos;
		model.Size = Utility.calcStringSize(str);

		return model;
	}
}
