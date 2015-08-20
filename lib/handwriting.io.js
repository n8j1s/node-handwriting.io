(function(){

	var request = require('request');
	var qs = require('qs');

	exports = module.exports = function(token){

		if (!token || !token.apiKey || !token.apiSecret)
			throw 'No token defined';

		var getUrl = function(url){
			return 'https://api.handwriting.io/' + url;
		}

		var handwritingRequest = function(url, next){

			var parseResponse = function(err, res, body){
				if (err){
					return next(err);
				}

				if (res.statusCode === 429){
					return next('Rate limit exceeded');
				}

				if (res.statusCode !== 200){
					return next('Incorrect response status: ' + res.statusCode + ' res: ' + JSON.stringify(res));
				}

				if (res.headers['content-type'] && res.headers['content-type'].indexOf('json') !== -1){
					try{
						return next(null, JSON.parse(body));
					}
					catch(e){
						return next(e);
					}
				}
				else
				{
					return next(null, body);
				}
			};

			return request({
				uri: getUrl(url),
				auth:{
					user: token.apiKey,
					password: token.apiSecret
				}
			}, function(error, response, body){
				return parseResponse(error, response, body);
			});
		};

		var parseOpts = function(opts){
			return qs.stringify(opts);
		};

		return {

			getAllHandwritings: function(next){
				return handwritingRequest('handwritings', next);
			},

			getHandwriting: function(id, next){
				return handwritingRequest('handwritings/' + id, next);
			},

			getPng: function(opts, next){
				opts = parseOpts(opts);
				return handwritingRequest('render/png?' + opts, next);
			},

			getPdf: function(opts, next){
				opts = parseOpts(opts);
				return handwritingRequest('render/pdf?' + opts, next);
			}

		};

	};

}).call(this);

