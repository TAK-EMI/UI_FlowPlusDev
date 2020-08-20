export default class Size {
	private w: number;
	private h: number;
	constructor(w: number, h: number) {
		this.w = w;
		this.h = h;
	}

	get W(): number {
		return this.w;
	}
	get Width(): number {
		return this.w;
	}
	get H(): number {
		return this.h;
	}
	get Height(): number {
		return this.h;
	}
}
