$(document).ready(function () {

	// -------------------------------------------------- back
	// backOut
	$("input.backOut").click(function(){
		$(".backOut span")
			.velocity("stop")
			.velocity({ translateX:0 }, 0)
			.velocity({ translateX:300 }, { queue:false, duration:400, easing:"easeOutBack", delay:100 })
	});

	// backIn
	$("input.backIn").click(function(){
		$(".backIn span")
			.velocity("stop")
			.velocity({ translateX:0 }, 0)
			.velocity({ translateX:300 }, { queue:false, duration:400, easing:"easeInBack", delay:100 })
	});

	// backInOut
	$("input.backInOut").click(function(){
		$(".backInOut span")
			.velocity("stop")
			.velocity({ translateX:0 }, 0)
			.velocity({ translateX:300 }, { queue:false, duration:400, easing:"easeInOutBack", delay:100 })
	});



	// -------------------------------------------------- elastic
	// elasticOut
	$("input.elasticOut").click(function(){
		$(".elasticOut span")
			.velocity("stop")
			.velocity({ translateX:0 }, 0)
			.velocity({ translateX:300 }, { queue:false, duration:800, easing:"easeOutElastic", delay:100 })
	});

	// elasticIn
	$("input.elasticIn").click(function(){
		$(".elasticIn span")
			.velocity("stop")
			.velocity({ translateX:0 }, 0)
			.velocity({ translateX:300 }, { queue:false, duration:800, easing:"easeInElastic", delay:100 })
	});

	// elasticInOut
	$("input.elasticInOut").click(function(){
		$(".elasticInOut span")
			.velocity("stop")
			.velocity({ translateX:0 }, 0)
			.velocity({ translateX:300 }, { queue:false, duration:800, easing:"easeInOutElastic", delay:100 })
	});


	// -------------------------------------------------- bounce
	// bounceOut
	$("input.bounceOut").click(function(){
		$(".bounceOut span")
			.velocity("stop")
			.velocity({ translateX:0 }, 0)
			.velocity({ translateX:300 }, { queue:false, duration:800, easing:"easeOutBounce", delay:100 })
	});

	// bounceIn
	$("input.bounceIn").click(function(){
		$(".bounceIn span")
			.velocity("stop")
			.velocity({ translateX:0 }, 0)
			.velocity({ translateX:300 }, { queue:false, duration:800, easing:"easeInBounce", delay:100 })
	});

	// bounceInOut
	$("input.bounceInOut").click(function(){
		$(".bounceInOut span")
			.velocity("stop")
			.velocity({ translateX:0 }, 0)
			.velocity({ translateX:300 }, { queue:false, duration:800, easing:"easeInOutBounce", delay:100 })
	});


	// -------------------------------------------------- customBackOut
	// customBackOut
	$("input.customBackOut").click(function(){
		$.easeplus.addBackOut("customBackOut", 4.0);
		//$.easeplus.removeBackOut("customBackOut");
		$(".customBackOut span")
			.velocity("stop")
			.velocity({ translateX:0 }, 0)
			.velocity({ translateX:300 }, { queue:false, duration:400, easing:"customBackOut", delay:100 });
	});

	// customBackIn
	$("input.customBackIn").click(function(){
		$.easeplus.addBackIn("customBackIn", 4.0);
		//$.easeplus.removeBackIn("customBackIn");
		$(".customBackIn span")
			.velocity("stop")
			.velocity({ translateX:0 }, 0)
			.velocity({ translateX:300 }, { queue:false, duration:400, easing:"customBackIn", delay:100 });
	});

	// customBackInOut
	$("input.customBackInOut").click(function(){
		$.easeplus.addBackInOut("customBackInOut", 4.0);
		//$.easeplus.removeBackInOut("customBackInOut");
		$(".customBackInOut span")
			.velocity("stop")
			.velocity({ translateX:0 }, 0)
			.velocity({ translateX:300 }, { queue:false, duration:400, easing:"customBackInOut", delay:100 });
	});


	// -------------------------------------------------- customElasticOut
	// customElasticOut
	$("input.customElasticOut").click(function(){
		$.easeplus.addElasticOut("customElasticOut", 3, 0.3);
		//$.easeplus.removeElasticOut("customElasticOut");
		$(".customElasticOut span")
			.velocity("stop")
			.velocity({ translateX:0 }, 0)
			.velocity({ translateX:300 }, { queue:false, duration:800, easing:"customElasticOut", delay:100 });
	});

	// customElasticIn
	$("input.customElasticIn").click(function(){
		$.easeplus.addElasticIn("customElasticIn", 3, 0.3);
		//$.easeplus.removeElasticIn("customElasticIn");
		$(".customElasticIn span")
			.velocity("stop")
			.velocity({ translateX:0 }, 0)
			.velocity({ translateX:300 }, { queue:false, duration:800, easing:"customElasticIn", delay:100 });
	});

	// customElasticInOut
	$("input.customElasticInOut").click(function(){
		$.easeplus.addElasticInOut("customElasticInOut", 3, 0.3*1.5);
		//$.easeplus.removeElasticInOut("customElasticInOut");
		$(".customElasticInOut span")
			.velocity("stop")
			.velocity({ translateX:0 }, 0)
			.velocity({ translateX:300 }, { queue:false, duration:800, easing:"customElasticInOut", delay:100 });
	});

	// alias
	$("input.alias").click(function(){
		$(".alias span")
			.velocity("stop")
			.velocity({ translateX:0 }, 0)
			.velocity({ translateX:300 }, { queue:false, duration:600, easing:$("select.ease").val(), delay:100 })
	});
});