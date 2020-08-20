export default class Point {
	static get Zero(): Point {
		return new Point(0, 0);
	}

	private x: number;
	private y: number;
	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	get X(): number {
		return this.x;
	}
	get Y(): number {
		return this.y;
	}

	add(x: number, y: number): Point {
		return new Point(this.X + x, this.Y + y);
	}
	addPoint(p: Point): Point {
		return new Point(this.X + p.X, this.Y + p.Y);
	}
}
