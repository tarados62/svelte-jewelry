/**
 *
 * @param {string} value
 * @returns {boolean}
 */
export function isValidEmail(value) {
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return emailRegex.test(value);
}

/**
 *
 * @param {string} value
 * @returns {null | string}
 */
export function validateEmail(value) {
	if (isValidEmail(value)) {
		return null;
	}
	return 'Enter valid email';
}

/**
 *
 * @param {string} value
 * @returns {null | string}
 */
export function validateName(value) {
	const valueClean = value.trim();
	if (valueClean.length == 0) {
		return 'Name shoude not be empty';
	}
	if (valueClean.length > 128) {
		return 'Name is too long';
	}
	return null;
}
