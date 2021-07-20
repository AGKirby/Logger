exports.info = (msg) => {
	console.log(`${new Date().toISOString()} - INFO: ${msg}`);
};

exports.warn = (msg) => {
	console.log(`${new Date().toISOString()} - WARN: ${msg}`);
};

exports.error = (msg) => {
	console.log(`${new Date().toISOString()} - ERROR: ${msg}`);
};

exports.debug = (msg) => {
	console.log(`${new Date().toISOString()} - DEBUG: ${msg}`);
};
