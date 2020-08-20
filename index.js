'use strict';
module.exports = function (arn) {
	return /^arn:(aws|aws-us-gov|aws-cn):sns:[a-z]{2}-[a-z]+-[0-9]:[0-9]{12}:[a-zA-Z0-9_-]{1,256}$/gm.test(arn);
};
