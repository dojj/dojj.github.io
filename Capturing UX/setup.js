function setupConfig() {
	var endpoint = 'https://lrs.adlnet.gov/xapi/';
	var user = 'xapi-tools';
	var password = 'xapi-tools';

	var conf = {
		"endpoint" : endpoint,
		"auth" : "Basic " + toBase64(user + ":" + password),
	};

	ADL.XAPIWrapper.changeConfig(conf);
}


// Configure xAPIWrapper and save credentials
setupConfig();

// Create a statement
var stmt = new ADL.XAPIStatement();

// Add 'experienced Captivate button tutorial' to the statement
stmt.verb = new ADL.XAPIStatement.Verb('http://adlnet.gov/expapi/verbs/experienced', 'experienced');
stmt.object = new ADL.XAPIStatement.Activity('http://www.willchinda.com/blog/2015/10/14/xapi-captivate-part-1/', 'Captivate button tutorial');

