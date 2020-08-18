import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Hello: React.FunctionComponent<{compiler: string, framework: string}> = (props) => {
	return (
		<div>
			<div>{props.compiler}</div>
			<div>{props.framework}</div>
		</div>
	)
}
Hello.propTypes = {
	compiler: PropTypes.string.isRequired,
	framework: PropTypes.string.isRequired
}

ReactDOM.render(
	<Hello compiler="TypeScript" framework="React" />,
	document.getElementById("root")
);
