A Node.js wrapper for the handwriting.io API.

This API allows you to generate a PNG or PDF of handwritten text.

Requirements:
Sign up for an account at https://handwriting.io
Generate api key and secret


### Installation

```sh
npm install handwriting.io
```

### Initialization:

```sh
var Hw = require('handwriting.io');
var hw = new Hw({apiKey: 'yourkey', apiSecret: 'yoursecret'});
```

### Methods:

#### Get Available Handwritings

```sh
hw.getAllHandwritings(function(err, handwritings){
	if (err)
		return console.log(err);

	console.log('hws', handwritings);
});
```

#### Get Individual Handwriting:

```sh
hw.getHandwriting('some id', function(err, handwriting){
	if (err)
		return console.log(err);

	console.log('hws', handwriting);
});
```

#### Generate Png from text:

```sh
var opts = {
	handwriting_color: '#000000',
	handwriting_id: '2D5QW0F80001',
	handwriting_size: '20px',
	height: 'auto',
	line_spacing: '1.2',
	text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
	width: '504px'
};

hw.getPng(opts, function(err, image){
	if (err)
		return console.log(err);

	console.log('img', image); //image binary data
});
```

#### Generate Pdf from text:

```sh
opts = {
	handwriting_color: '#000000',
	handwriting_id: '2D5QW0F80001',
	handwriting_size: '20pt',
	height: '7in',
	line_spacing: '1.2',
	text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
	width: '5in'
};

hw.getPdf(opts, function(err, pdf){
	if (err)
		return console.log(err);

	console.log('pdf', pdf); //pdf binary data
});
```


### Tests:

```sh
npm test
```