module.exports = function check(str, bracketsConfig) {

	let length = str.length;

	for (let i = 0; i < length / 2; i++) {
		removePair();
		if (str.length == 0) return true;
	}

	return false;

	function removePair() {
		for (let i = 0; i < str.length; i++) {

			for (let j = 0; j < bracketsConfig.length; j++) {

				if (str.length == 0) {
						return;
				}

				if ((str[i] == bracketsConfig[j][0]) && (str[i + 1] == bracketsConfig[j][1])) {
					if (str.length == 2) {
						str = '';
						return;
					}
					
					str = str.slice(0, i) + str.slice(i + 2);
				}
			}
		}
	}
};
