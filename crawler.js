var casper = require('casper').create();

casper.start('https://app.brazenconnect.com/cc/#!login', function() {
	this.echo("GET Brazen Login Page")
});

casper.waitForResource('https://d3baouhk8hzvtq.cloudfront.net/images/logos/company/brazen/brazen_cc_with_white_text_201_50.png', function() {
    this.echo("Login using username and password");
    this.evaluate(function(){
        document.getElementById("loginEmail").value="burak.yilmaz@anbean.co";
        document.getElementById("loginPassword").value="Bu300321";
        document.querySelector("#gwtDiv > div > div:nth-child(4) > div.clearfix.login-area > div.login-panel.fadeInRight > div.login-form > div:nth-child(3) > button").click();
    });
});

casper.then(function() {
	this.echo("Wait 10 seconds...");
	this.wait(10000, function() {
        this.echo("Waited 10 seconds.");
    });
});

casper.thenOpen("https://app.brazenconnect.com/cc/#!eventDownloads;eventCode=Gj50y", function() {
	this.echo("GET Downloads page and wait 10 seconds...");
	this.wait(10000, function() {
		this.echo("Waited 10 seconds.");
	});
});

casper.then(function() {
	this.echo("Download file..")
	var elementSelector = '#gwtDiv > div:nth-child(1) > div > div.page.double-top-nav.left-center > div:nth-child(3) > div > div > div > div.content.report-downloads-block > fieldset > div:nth-child(1) > a';
	var url = this.getElementAttribute(elementSelector, 'href');
	this.download(url, 'data.csv');
});

casper.run(function() {
	this.echo("Done.").exit();
});