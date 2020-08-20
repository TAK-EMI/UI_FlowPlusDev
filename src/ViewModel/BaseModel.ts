import Rect from '../Geometory/Rect';
import Size from '../Geometory/Size';
import Point from '../Geometory/Point';

export default class BaseModel extends Rect {
	// TODO: RectのValueObject化に対応する。

	constructor(pos = Point.Zero, size = new Size(100, 100)) {
		super(pos, size);
	}
}
