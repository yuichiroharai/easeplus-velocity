/*
 * Ease+ for Velocity.js v1.2.2
 * v1.0
 *
 * Copyright (c) 2015 Yuichiroh Arai
 * Released under the MIT license
 * http://opensource.org/licenses/mit-license.php
 *
 *
 *
 * All easing functions from TweenJS
 * http://createjs.com/
 *
 * Copyright (c) 2011-2015 gskinner.com, inc.
 * Released under the MIT license
 * http://opensource.org/licenses/mit-license.php
 *
 */
(function ($) {

	if (!$ || !($.Velocity) || !($.Velocity.Easings)) return;

	var easings = $.Velocity.Easings;
	$.easeplus = easings;

	// -------------------- back
	easings.getBackIn = function(amount) {
		return function(t) {
			return t*t*((amount+1)*t-amount);
		}
	};
	easings.getBackOut = function(amount) {
		return function(t) {
			return (--t*t*((amount+1)*t + amount) + 1);
		}
	};
	easings.getBackInOut = function(amount) {
		amount*=1.525;
		return function(t) {
			if ((t*=2)<1) return 0.5*(t*t*((amount+1)*t-amount));
			return 0.5*((t-=2)*t*((amount+1)*t+amount)+2);
		}
	};

	easings.backIn = easings.getBackIn(1.7);
	easings.backOut = easings.getBackOut(1.7);
	easings.backInOut = easings.getBackInOut(1.7);

	easings.addBackIn = function(name, amount) {
		easings[name] = easings.getBackIn(amount);
	};
	easings.removeBackIn = function(name) {
		delete easings[name];
	};

	easings.addBackOut = function(name, amount) {
		easings[name] = easings.getBackOut(amount);
	};
	easings.removeBackOut = function(name) {
		delete easings[name];
	};

	easings.addBackInOut = function(name, amount) {
		easings[name] = easings.getBackInOut(amount);
	};
	easings.removeBackInOut = function(name) {
		delete easings[name];
	};





	// -------------------- elastic
	easings.getElasticIn = function(amplitude,period) {
		var pi2 = Math.PI*2;
		return function(t) {
			if (t==0 || t==1) return t;
			var s = period/pi2*Math.asin(1/amplitude);
			return -(amplitude*Math.pow(2,10*(t-=1))*Math.sin((t-s)*pi2/period));
		}
	};
	easings.getElasticOut = function(amplitude,period) {
		var pi2 = Math.PI*2;
		return function(t) {
			if (t==0 || t==1) return t;
			var s = period/pi2 * Math.asin(1/amplitude);
			return (amplitude*Math.pow(2,-10*t)*Math.sin((t-s)*pi2/period )+1);
		}
	};
	easings.getElasticInOut = function(amplitude,period) {
		var pi2 = Math.PI*2;
		return function(t) {
			var s = period/pi2 * Math.asin(1/amplitude);
			if ((t*=2)<1) return -0.5*(amplitude*Math.pow(2,10*(t-=1))*Math.sin( (t-s)*pi2/period ));
			return amplitude*Math.pow(2,-10*(t-=1))*Math.sin((t-s)*pi2/period)*0.5+1;
		}
	};

	easings.elasticIn = easings.getElasticIn(1,0.3);
	easings.elasticOut = easings.getElasticOut(1,0.3);
	easings.elasticInOut = easings.getElasticInOut(1,0.3*1.5);

	easings.addElasticIn = function(name, amplitude, period) {
		easings[name] = easings.getElasticIn(amplitude, period);
	};
	easings.removeElasticIn = function(name) {
		delete easings[name];
	};

	easings.addElasticOut = function(name, amplitude, period) {
		easings[name] = easings.getElasticOut(amplitude, period);
	};
	easings.removeElasticOut = function(name) {
		delete easings[name];
	};

	easings.addElasticInOut = function(name, amplitude, period) {
		easings[name] = easings.getElasticInOut(amplitude, period);
	};
	easings.removeElasticInOut = function(name) {
		delete easings[name];
	};





	// -------------------- bounce
	easings.bounceIn = function(t) {
		return 1-easings.bounceOut(1-t);
	};
	easings.bounceOut = function(t) {
		if (t < 1/2.75) {
			return (7.5625*t*t);
		} else if (t < 2/2.75) {
			return (7.5625*(t-=1.5/2.75)*t+0.75);
		} else if (t < 2.5/2.75) {
			return (7.5625*(t-=2.25/2.75)*t+0.9375);
		} else {
			return (7.5625*(t-=2.625/2.75)*t +0.984375);
		}
	};
	easings.bounceInOut = function(t) {
		if (t<0.5) return easings.bounceIn (t*2) * .5;
		return easings.bounceOut(t*2-1)*0.5+0.5;
	};



})(window.jQuery);