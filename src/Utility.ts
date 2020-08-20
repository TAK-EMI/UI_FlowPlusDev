import Size from './Geometory/Size';

export default class Utility {
	static calcStringSize(text: string): Size {
		const classname = `hidden_${text}`;

		const span = document.createElement('span');
		span.innerText = text;
		span.style.visibility = 'hidden';
		span.className = classname;
		document.body.appendChild(span);

		// offsetWidthができたらすぐに消す
		setTimeout(() => {
			document.body.removeChild(span);
		}, 0);

		return new Size(span.offsetWidth || 0, span.offsetHeight || 0);
	}
}
