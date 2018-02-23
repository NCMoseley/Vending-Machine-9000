module.exports = function(start, end, jumpLength) {
	if (start < 0 || end < 0 || jumpLength <= 0) {
		return 0;
	}
	if (isNaN(start) || isNaN(end) || isNaN(jumpLength)) {
		return NaN;
	} else {
		const i = (end - start) / jumpLength;
		return i;
	}
};
