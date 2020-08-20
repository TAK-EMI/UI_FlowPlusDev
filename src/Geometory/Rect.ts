import Point from './Point';
import Size from './Size';

export default class Rect {
	static Set(x: number, y: number, w: number, h: number): Rect {
		return new Rect(new Point(x, y), new Size(w, h));
	}

	private position: Point;
	private size: Size;
	constructor(pos: Point, size: Size) {
		this.position = pos;
		this.size = size;
		return;
	}

	// TODO: ValueObject化する。
	get Size(): Size {
		return this.size;
	}
	set Size(value: Size) {
		this.size = value;
	}
	get Position(): Point {
		return this.position;
	}
	set Position(value: Point) {
		this.position = value;
	}

	get Width(): number {
		return this.Size.Width;
	}
	set Width(value: number) {
		this.Size = new Size(value, this.Height);
	}
	get Height(): number {
		return this.Size.Height;
	}
	set Height(value: number) {
		this.Size = new Size(this.Width, value);
	}

	get X(): number {
		return this.Position.X;
	}
	set X(value: number) {
		this.Position = new Point(value, this.Y);
	}
	get Y(): number {
		return this.Position.Y;
	}
	set Y(value: number) {
		this.Position = new Point(this.X, value);
	}
}
