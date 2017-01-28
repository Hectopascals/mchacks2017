(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACGRbQjYhcininQioiohcjZQhfjhAAj2QAAj1BfjhQBcjZCoinQCnioDYhcQDhhfD2AAMAAAAlzQj2AAjhhfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.white, new cjs.Rectangle(-60.5,-121,121,242), null);


(lib.Top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAC+QgpAAgdgeQgdgcAAgqIAAi0QAAgpAdgdQAdgdApAAIAAAAQApAAAdAdQAeAdAAApIAAC0QAAAqgeAcQgdAegpAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Top, new cjs.Rectangle(-10,-19,20,38), null);


(lib.green = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5DD9B8").s().p("AnWRbQjZhcininQioiohcjZQhfjhAAj2QAAj1BfjhQBcjZCoinQCnioDZhcQDhhfD1AAQD2AADhBfQDZBcCoCoQCnCnBcDZQBfDhAAD1QAAD2hfDhQhcDZinCoQioCnjZBcQjhBfj2AAQj1AAjhhfgAmXvHQi8BQiSCSQiSCShQC8QhSDDAADUQAADVBSDDQBQC9CSCRQCSCSC8BPQDDBTDUAAQDVAADDhTQC9hPCRiSQCSiRBPi9QBTjDAAjVQAAjUhTjDQhPi8iSiSQiRiSi9hQQjDhSjVAAQjUAAjDBSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.green, new cjs.Rectangle(-121,-121,242,242), null);


(lib.Bottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhjAAIDHAA");
	this.shape.setTransform(0.5,16.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAAhPIAACf");
	this.shape_1.setTransform(0.5,8.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(3,1,1).p("AifhSIAAClIE/AAIAAil");
	this.shape_2.setTransform(0,-8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Bottom, new cjs.Rectangle(-17.5,-17.7,35,35.5), null);


(lib.Back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3).p("AMgAAQAACjg/CVQg8CPhvBvQhvBviPA8QiVA/ijAAQiiAAiVg/QiPg8hvhvQhvhvg8iPQg/iVAAijQAAiiA/iVQA8iPBvhvQBvhvCPg8QCVg/CiAAQCjAACVA/QCPA8BvBvQBvBvA8CPQA/CVAACig");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D94141").s().p("AmjPjQjChSiViWQiWiVhSjCQhVjJAAjbQAAjaBVjJQBSjCCWiVQCViWDChSQDJhVDaAAQDbAADJBVQDCBSCVCWQCWCVBSDCQBVDJAADaQAADbhVDJQhSDCiWCVQiVCWjCBSQjJBVjbAAQjaAAjJhVg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Back, new cjs.Rectangle(-108,-108,216,216), null);


// stage content:
(lib.Countdown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// CountDown
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAFElIAAoGIg8AAIAAgnIBvgbIAAJIg");
	this.shape.setTransform(118.4,119.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AirEnIAAgqICiitQAbgcAbggQAagfARgkQARglABgqQgBgugRgbQgRgbgcgLQgcgLgeABQgiAAglAOQgkAPgiAaIAAgyQAOgMAXgMQAYgMAbgIQAcgIAbAAQAxAAAnATQAnATAXAkQAWAkABA1QgBAygUApQgSAogbAgQgZAggWAWIibCiIEYAAIAAAvg");
	this.shape_1.setTransform(120.1,118.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhrEYQgpgPgagWIAAgyQAbAYAmAPQAmAQAxAAQBBAAAoglQAoglABhGQAAg9gkglQgjgkg/gBQgbAAgVAJQgVAIgTAQIgXgaIDXjfIkLAAIAAgvIFVAAIAAAdIi6C/QA2gDAsAVQArAVAaApQAaApAAA6QAAA7gbArQgZAqgtAXQgsAXg3AAQguAAgogPg");
	this.shape_2.setTransform(121,120.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA9EkIAAiYIkVAAIAAghIErmOIAdAAIAAGEIBoAAIAAArIhoAAIAACYgAieBhIDbAAIAAkjg");
	this.shape_3.setTransform(121.1,119.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhsEYQgpgPgZgWIAAgyQAaAYAmAPQAnAQAxAAQBBAAAogmQAogmABhFQAAg9giglQghgjg/gBQgnAAgeARQgeASgWAkIgbgMIAAlCIEyAAIAAAvIkCAAIAADVQAXgVAdgKQAfgKAbAAQAvAAAmAVQAnAVAXAnQAXAoABA5QgBA7gaArQgaArgsAXQgsAYg3AAQguAAgpgPg");
	this.shape_4.setTransform(121.4,120.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag/EjQgigNgdgeQgdgegSg0QgTg1AAhRQAAhmAahLQAbhLA0gpQA0goBNgBQAlABAfAJQAhAJASANIAAA0QgWgPgfgLQgfgLgiAAQg7ABgmAbQgkAcgTAqQgTArgHAuQgGAugBAmQASglApgZQAogaA5gBQA0AAAoAYQAoAYAYApQAXArAAA5QAAA3gaAqQgaApgqAYQgqAYg0AAIgDABQgfAAgigMgAg/gMQgfAQgUAeQgUAeAAAoQAAAwASAiQATAjAfASQAeATAkAAQA/AAAmgmQAngmABhCQAAgqgQghQgQghgegSQgfgTgrAAQgkAAggARg");
	this.shape_5.setTransform(121.6,119.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhoEgQAMg4AXhBQAXhAAbhAQAag/Abg5QAbg4AXgrQAXgpAMgTIksAAIAAgvIFqAAIAAAeQgPAWgYAsQgYAtgdA7QgcA6gcBBQgbBBgUBBQgWBBgKA5g");
	this.shape_6.setTransform(120.4,119.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhlEZQgugVgbgmQgbglgBgzQAChDAlgqQAlgoA8gPQgxgQgagkQgbgiAAgwQABgoAXgfQAXgfAmgSQAngRAsAAQAtAAAmARQAmASAXAfQAXAfABAoQgBAwgZAiQgaAkgwAQQAnAKAeAUQAeAXASAiQARAhABAsQgBAzgbAlQgbAmguAVQguAVg4AAQg4AAgtgVgAhJALQgiAQgUAdQgUAdgBAqQABAnATAdQAUAdAiAQQAhARApAAQApAAAhgRQAigQAUgdQAUgdABgnQgBgqgUgdQgVgdghgQQgigQgoAAQgoAAghAQgAg5j2QgbAMgPAYQgQAXAAAfQAAAeAQAXQAQAYAaANQAaAOAfABQAfgBAagOQAagNAQgYQAPgXABgeQgBgfgPgXQgPgYgbgMQgZgMggAAQgfAAgaAMg");
	this.shape_7.setTransform(121,119.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhuElQgggJgSgOIAAgzQAWAPAfALQAfAKAiABQA8gBAkgbQAlgcATgrQATgqAHguQAHgvAAglQgSAlgpAZQgoAag5ABQg0AAgogYQgogYgYgpQgXgrAAg5QABg3AZgqQAagqAqgXQAqgYA0AAQAhgBAjAMQAiANAdAeQAeAeARA0QATA1AABRQAABmgbBLQgaBLg0ApQg1AohMABQglgBgggJgAhkjbQgnAmgBBCQAAAqAQAhQAQAhAeASQAfATArAAQAjAAAhgRQAggQATgeQAUgeABgpQgBgvgSgiQgTgjgfgTQgegSglAAQg+AAgmAmg");
	this.shape_8.setTransform(120.5,119.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhqELQgwglgchDQgbhEgBhfQABheAbhEQAchEAwgjQAvgkA7AAQA8AAAwAkQAvAjAcBEQAcBEAABeQAABfgcBEQgcBDgvAlQgwAjg8AAQg7AAgvgjgAhRjiQgjAegVA6QgUA5AABRQAABSAUA6QAVA4AjAfQAkAeAtAAQAuAAAkgeQAjgfAVg4QAUg6AAhSQAAhRgUg5QgVg6gjgeQgkgdguAAQgtAAgkAdg");
	this.shape_9.setTransform(133.1,119.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape,p:{x:118.4}}]},10).to({state:[{t:this.shape_1}]},25).to({state:[{t:this.shape_2}]},24).to({state:[{t:this.shape_3}]},24).to({state:[{t:this.shape_4}]},24).to({state:[{t:this.shape_5}]},24).to({state:[{t:this.shape_6}]},24).to({state:[{t:this.shape_7}]},23).to({state:[{t:this.shape_8}]},25).to({state:[{t:this.shape,p:{x:92.5}},{t:this.shape_9}]},24).wait(23));

	// Bottom
	this.instance = new lib.Bottom();
	this.instance.parent = this;
	this.instance.setTransform(121,134.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.59},0).wait(1).to({scaleX:0.19},0).wait(1).to({scaleX:0.22,skewY:180},0).wait(1).to({scaleX:0.63},0).wait(1).to({scaleX:1.03},0).wait(1).to({scaleX:0.81,y:130.8},0).wait(1).to({scaleX:0.58,y:127.3},0).wait(1).to({scaleX:0.35,y:123.8},0).wait(1).to({scaleX:0.13,y:120.4},0).to({_off:true},1).wait(240));

	// Top
	this.instance_1 = new lib.Top();
	this.instance_1.parent = this;
	this.instance_1.setTransform(121,109);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:0.96},0).wait(1).to({scaleX:0.93},0).wait(1).to({scaleX:0.89},0).wait(1).to({scaleX:0.85},0).wait(1).to({scaleX:0.7,y:111.1},0).wait(1).to({scaleX:0.55,y:113.2},0).wait(1).to({scaleX:0.4,y:115.4},0).wait(1).to({scaleX:0.25,y:117.5},0).wait(1).to({scaleX:0.1,y:119.6},0).to({_off:true},1).wait(240));

	// Back
	this.instance_2 = new lib.Back();
	this.instance_2.parent = this;
	this.instance_2.setTransform(121,121);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(250));

	// Layer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5DD9B8").s().p("ApcQaQDVAADDhTQC9hPCQiSQCRiRBRi9QBSjDAAjVQAAjUhSjDQhRi8iRiSQiQiSi9hQQjDhSjVAAIAAigQD2AADhBfQDYBcCoCoQCnCnBcDZQBfDhAAD1QAAD2hfDhQhcDZinCoQioCnjYBcQjhBfj2AAg");
	this.shape_10.setTransform(181.5,121);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(107).to({_off:false},0).wait(143));

	// Layer 20
	this.instance_3 = new lib.white();
	this.instance_3.parent = this;
	this.instance_3.setTransform(121,121,1,1,180,0,0,60.5,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).wait(1).to({regX:0,rotation:181.9,x:181.5,y:123},0).wait(1).to({rotation:183.7,x:181.4,y:124.9},0).wait(1).to({rotation:185.6,x:181.2,y:126.9},0).wait(1).to({rotation:187.4,x:181,y:128.8},0).wait(1).to({rotation:189.3,x:180.7,y:130.8},0).wait(1).to({rotation:191.1,x:180.4,y:132.7},0).wait(1).to({rotation:193,x:180,y:134.6},0).wait(1).to({rotation:194.8,x:179.5,y:136.5},0).wait(1).to({rotation:196.7,x:178.9,y:138.4},0).wait(1).to({rotation:198.6,x:178.4,y:140.3},0).wait(1).to({rotation:200.4,x:177.7,y:142.1},0).wait(1).to({rotation:202.3,x:177,y:143.9},0).wait(1).to({rotation:204.1,x:176.2,y:145.7},0).wait(1).to({rotation:206,x:175.4,y:147.5},0).wait(1).to({rotation:207.8,x:174.5,y:149.2},0).wait(1).to({rotation:209.7,x:173.6,y:151},0).wait(1).to({rotation:211.5,x:172.6,y:152.7},0).wait(1).to({rotation:213.4,x:171.5,y:154.3},0).wait(1).to({rotation:215.3,x:170.4,y:155.9},0).wait(1).to({rotation:217.1,x:169.2,y:157.5},0).wait(1).to({rotation:219,x:168,y:159},0).wait(1).to({rotation:220.8,x:166.8,y:160.6},0).wait(1).to({rotation:222.7,x:165.5,y:162},0).wait(1).to({rotation:224.5,x:164.1,y:163.4},0).wait(1).to({rotation:226.4,x:162.7,y:164.8},0).wait(1).to({rotation:228.2,x:161.3,y:166.1},0).wait(1).to({rotation:230.1,x:159.8,y:167.4},0).wait(1).to({rotation:232,x:158.3,y:168.6},0).wait(1).to({rotation:233.8,x:156.7,y:169.8},0).wait(1).to({rotation:235.7,x:155.1,y:171},0).wait(1).to({rotation:237.5,x:153.5,y:172},0).wait(1).to({rotation:239.4,x:151.8,y:173.1},0).wait(1).to({rotation:241.2,x:150.1,y:174},0).wait(1).to({rotation:243.1,x:148.4,y:175},0).wait(1).to({rotation:244.9,x:146.6,y:175.8},0).wait(1).to({rotation:246.8,x:144.8,y:176.6},0).wait(1).to({rotation:248.7,x:143,y:177.4},0).wait(1).to({rotation:250.5,x:141.2,y:178},0).wait(1).to({rotation:252.4,x:139.3,y:178.7},0).wait(1).to({rotation:254.2,x:137.4,y:179.2},0).wait(1).to({rotation:256.1,x:135.6,y:179.7},0).wait(1).to({rotation:257.9,x:133.6,y:180.2},0).wait(1).to({rotation:259.8,x:131.7,y:180.5},0).wait(1).to({rotation:261.6,x:129.8,y:180.9},0).wait(1).to({rotation:263.5,x:127.8,y:181.1},0).wait(1).to({rotation:265.4,x:125.9,y:181.3},0).wait(1).to({rotation:267.2,x:123.9,y:181.4},0).wait(1).to({rotation:269.1,x:122,y:181.5},0).wait(1).to({rotation:270.9,x:120},0).wait(1).to({rotation:272.8,x:118.1,y:181.4},0).wait(1).to({rotation:274.6,x:116.1,y:181.3},0).wait(1).to({rotation:276.5,x:114.2,y:181.1},0).wait(1).to({rotation:278.4,x:112.2,y:180.9},0).wait(1).to({rotation:280.2,x:110.3,y:180.5},0).wait(1).to({rotation:282.1,x:108.4,y:180.2},0).wait(1).to({rotation:283.9,x:106.4,y:179.7},0).wait(1).to({rotation:285.8,x:104.6,y:179.2},0).wait(1).to({rotation:287.6,x:102.7,y:178.7},0).wait(1).to({rotation:289.5,x:100.8,y:178},0).wait(1).to({rotation:291.3,x:99,y:177.4},0).wait(1).to({rotation:293.2,x:97.2,y:176.6},0).wait(1).to({rotation:295.1,x:95.4,y:175.8},0).wait(1).to({rotation:296.9,x:93.6,y:175},0).wait(1).to({rotation:298.8,x:91.9,y:174},0).wait(1).to({rotation:300.6,x:90.2,y:173.1},0).wait(1).to({rotation:302.5,x:88.5,y:172},0).wait(1).to({rotation:304.3,x:86.9,y:171},0).wait(1).to({rotation:306.2,x:85.3,y:169.8},0).wait(1).to({rotation:308,x:83.7,y:168.6},0).wait(1).to({rotation:309.9,x:82.2,y:167.4},0).wait(1).to({rotation:311.8,x:80.7,y:166.1},0).wait(1).to({rotation:313.6,x:79.3,y:164.8},0).wait(1).to({rotation:315.5,x:77.9,y:163.4},0).wait(1).to({rotation:317.3,x:76.5,y:162},0).wait(1).to({rotation:319.2,x:75.2,y:160.6},0).wait(1).to({rotation:321,x:74,y:159},0).wait(1).to({rotation:322.9,x:72.8,y:157.5},0).wait(1).to({rotation:324.7,x:71.6,y:155.9},0).wait(1).to({rotation:326.6,x:70.5,y:154.3},0).wait(1).to({rotation:328.5,x:69.4,y:152.7},0).wait(1).to({rotation:330.3,x:68.4,y:151},0).wait(1).to({rotation:332.2,x:67.5,y:149.2},0).wait(1).to({rotation:334,x:66.6,y:147.5},0).wait(1).to({rotation:335.9,x:65.8,y:145.7},0).wait(1).to({rotation:337.7,x:65,y:143.9},0).wait(1).to({rotation:339.6,x:64.3,y:142.1},0).wait(1).to({rotation:341.4,x:63.6,y:140.3},0).wait(1).to({rotation:343.3,x:63.1,y:138.4},0).wait(1).to({rotation:345.2,x:62.5,y:136.5},0).wait(1).to({rotation:347,x:62,y:134.6},0).wait(1).to({rotation:348.9,x:61.6,y:132.7},0).wait(1).to({rotation:350.7,x:61.3,y:130.8},0).wait(1).to({rotation:352.6,x:61,y:128.8},0).wait(1).to({rotation:354.4,x:60.8,y:126.9},0).wait(1).to({rotation:356.3,x:60.6,y:124.9},0).wait(1).to({rotation:358.1,x:60.5,y:123},0).wait(1).to({rotation:360,y:121},0).to({_off:true},1).wait(142));

	// Layer 18
	this.instance_4 = new lib.white();
	this.instance_4.parent = this;
	this.instance_4.setTransform(121,121,1,1,0,0,0,60.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(108).to({regX:0,rotation:1.3,x:60.5,y:119.7},0).wait(1).to({rotation:2.5,x:60.6,y:118.3},0).wait(1).to({rotation:3.8,y:117},0).wait(1).to({rotation:5.1,x:60.7,y:115.7},0).wait(1).to({rotation:6.3,x:60.9,y:114.3},0).wait(1).to({rotation:7.6,x:61,y:113},0).wait(1).to({rotation:8.9,x:61.2,y:111.7},0).wait(1).to({rotation:10.1,x:61.4,y:110.3},0).wait(1).to({rotation:11.4,x:61.7,y:109},0).wait(1).to({rotation:12.7,x:62,y:107.7},0).wait(1).to({rotation:13.9,x:62.3,y:106.4},0).wait(1).to({rotation:15.2,x:62.6,y:105.1},0).wait(1).to({rotation:16.5,x:63,y:103.8},0).wait(1).to({rotation:17.7,x:63.4,y:102.6},0).wait(1).to({rotation:19,x:63.8,y:101.3},0).wait(1).to({rotation:20.3,x:64.3,y:100},0).wait(1).to({rotation:21.5,x:64.7,y:98.8},0).wait(1).to({rotation:22.8,x:65.2,y:97.5},0).wait(1).to({rotation:24.1,x:65.8,y:96.3},0).wait(1).to({rotation:25.4,x:66.3,y:95.1},0).wait(1).to({rotation:26.6,x:66.9,y:93.9},0).wait(1).to({rotation:27.9,x:67.5,y:92.7},0).wait(1).to({rotation:29.2,x:68.2,y:91.5},0).wait(1).to({rotation:30.4,x:68.8,y:90.4},0).wait(1).to({rotation:31.7,x:69.5,y:89.2},0).wait(1).to({rotation:33,x:70.2,y:88.1},0).wait(1).to({rotation:34.2,x:71,y:87},0).wait(1).to({rotation:35.5,x:71.7,y:85.9},0).wait(1).to({rotation:36.8,x:72.5,y:84.8},0).wait(1).to({rotation:38,x:73.3,y:83.7},0).wait(1).to({rotation:39.3,x:74.2,y:82.7},0).wait(1).to({rotation:40.6,x:75,y:81.7},0).wait(1).to({rotation:41.8,x:75.9,y:80.7},0).wait(1).to({rotation:43.1,x:76.8,y:79.7},0).wait(1).to({rotation:44.4,x:77.7,y:78.7},0).wait(1).to({rotation:45.6,x:78.7,y:77.7},0).wait(1).to({rotation:46.9,x:79.7,y:76.8},0).wait(1).to({rotation:48.2,x:80.7,y:75.9},0).wait(1).to({rotation:49.4,x:81.7,y:75},0).wait(1).to({rotation:50.7,x:82.7,y:74.2},0).wait(1).to({rotation:52,x:83.7,y:73.3},0).wait(1).to({rotation:53.2,x:84.8,y:72.5},0).wait(1).to({rotation:54.5,x:85.9,y:71.7},0).wait(1).to({rotation:55.8,x:87,y:71},0).wait(1).to({rotation:57,x:88.1,y:70.2},0).wait(1).to({rotation:58.3,x:89.2,y:69.5},0).wait(1).to({rotation:59.6,x:90.4,y:68.8},0).wait(1).to({rotation:60.8,x:91.5,y:68.2},0).wait(1).to({rotation:62.1,x:92.7,y:67.5},0).wait(1).to({rotation:63.4,x:93.9,y:66.9},0).wait(1).to({rotation:64.6,x:95.1,y:66.3},0).wait(1).to({rotation:65.9,x:96.3,y:65.8},0).wait(1).to({rotation:67.2,x:97.5,y:65.2},0).wait(1).to({rotation:68.5,x:98.8,y:64.7},0).wait(1).to({rotation:69.7,x:100,y:64.3},0).wait(1).to({rotation:71,x:101.3,y:63.8},0).wait(1).to({rotation:72.3,x:102.6,y:63.4},0).wait(1).to({rotation:73.5,x:103.8,y:63},0).wait(1).to({rotation:74.8,x:105.1,y:62.6},0).wait(1).to({rotation:76.1,x:106.4,y:62.3},0).wait(1).to({rotation:77.3,x:107.7,y:62},0).wait(1).to({rotation:78.6,x:109,y:61.7},0).wait(1).to({rotation:79.9,x:110.3,y:61.4},0).wait(1).to({rotation:81.1,x:111.7,y:61.2},0).wait(1).to({rotation:82.4,x:113,y:61},0).wait(1).to({rotation:83.7,x:114.3,y:60.9},0).wait(1).to({rotation:84.9,x:115.7,y:60.7},0).wait(1).to({rotation:86.2,x:117,y:60.6},0).wait(1).to({rotation:87.5,x:118.3},0).wait(1).to({rotation:88.7,x:119.7,y:60.5},0).wait(1).to({rotation:90,x:121},0).wait(1).to({rotation:91.3,x:122.3},0).wait(1).to({rotation:92.5,x:123.7,y:60.6},0).wait(1).to({rotation:93.8,x:125},0).wait(1).to({rotation:95.1,x:126.3,y:60.7},0).wait(1).to({rotation:96.3,x:127.7,y:60.9},0).wait(1).to({rotation:97.6,x:129,y:61},0).wait(1).to({rotation:98.9,x:130.3,y:61.2},0).wait(1).to({rotation:100.1,x:131.7,y:61.4},0).wait(1).to({rotation:101.4,x:133,y:61.7},0).wait(1).to({rotation:102.7,x:134.3,y:62},0).wait(1).to({rotation:103.9,x:135.6,y:62.3},0).wait(1).to({rotation:105.2,x:136.9,y:62.6},0).wait(1).to({rotation:106.5,x:138.2,y:63},0).wait(1).to({rotation:107.7,x:139.4,y:63.4},0).wait(1).to({rotation:109,x:140.7,y:63.8},0).wait(1).to({rotation:110.3,x:142,y:64.3},0).wait(1).to({rotation:111.5,x:143.2,y:64.7},0).wait(1).to({rotation:112.8,x:144.5,y:65.2},0).wait(1).to({rotation:114.1,x:145.7,y:65.8},0).wait(1).to({rotation:115.4,x:146.9,y:66.3},0).wait(1).to({rotation:116.6,x:148.1,y:66.9},0).wait(1).to({rotation:117.9,x:149.3,y:67.5},0).wait(1).to({rotation:119.2,x:150.5,y:68.2},0).wait(1).to({rotation:120.4,x:151.6,y:68.8},0).wait(1).to({rotation:121.7,x:152.8,y:69.5},0).wait(1).to({rotation:123,x:153.9,y:70.2},0).wait(1).to({rotation:124.2,x:155,y:71},0).wait(1).to({rotation:125.5,x:156.1,y:71.7},0).wait(1).to({rotation:126.8,x:157.2,y:72.5},0).wait(1).to({rotation:128,x:158.3,y:73.3},0).wait(1).to({rotation:129.3,x:159.3,y:74.2},0).wait(1).to({rotation:130.6,x:160.3,y:75},0).wait(1).to({rotation:131.8,x:161.3,y:75.9},0).wait(1).to({rotation:133.1,x:162.3,y:76.8},0).wait(1).to({rotation:134.4,x:163.3,y:77.7},0).wait(1).to({rotation:135.6,x:164.3,y:78.7},0).wait(1).to({rotation:136.9,x:165.2,y:79.7},0).wait(1).to({rotation:138.2,x:166.1,y:80.7},0).wait(1).to({rotation:139.4,x:167,y:81.7},0).wait(1).to({rotation:140.7,x:167.8,y:82.7},0).wait(1).to({rotation:142,x:168.7,y:83.7},0).wait(1).to({rotation:143.2,x:169.5,y:84.8},0).wait(1).to({rotation:144.5,x:170.3,y:85.9},0).wait(1).to({rotation:145.8,x:171,y:87},0).wait(1).to({rotation:147,x:171.8,y:88.1},0).wait(1).to({rotation:148.3,x:172.5,y:89.2},0).wait(1).to({rotation:149.6,x:173.2,y:90.4},0).wait(1).to({rotation:150.8,x:173.8,y:91.5},0).wait(1).to({rotation:152.1,x:174.5,y:92.7},0).wait(1).to({rotation:153.4,x:175.1,y:93.9},0).wait(1).to({rotation:154.6,x:175.7,y:95.1},0).wait(1).to({rotation:155.9,x:176.2,y:96.3},0).wait(1).to({rotation:157.2,x:176.8,y:97.5},0).wait(1).to({rotation:158.5,x:177.3,y:98.8},0).wait(1).to({rotation:159.7,x:177.7,y:100},0).wait(1).to({rotation:161,x:178.2,y:101.3},0).wait(1).to({rotation:162.3,x:178.6,y:102.6},0).wait(1).to({rotation:163.5,x:179,y:103.8},0).wait(1).to({rotation:164.8,x:179.4,y:105.1},0).wait(1).to({rotation:166.1,x:179.7,y:106.4},0).wait(1).to({rotation:167.3,x:180,y:107.7},0).wait(1).to({rotation:168.6,x:180.3,y:109},0).wait(1).to({rotation:169.9,x:180.6,y:110.3},0).wait(1).to({rotation:171.1,x:180.8,y:111.7},0).wait(1).to({rotation:172.4,x:181,y:113},0).wait(1).to({rotation:173.7,x:181.1,y:114.3},0).wait(1).to({rotation:174.9,x:181.3,y:115.7},0).wait(1).to({rotation:176.2,x:181.4,y:117},0).wait(1).to({rotation:177.5,y:118.3},0).wait(1).to({rotation:178.7,x:181.5,y:119.7},0).wait(1).to({rotation:180,y:121},0).wait(1));

	// Layer 19
	this.instance_5 = new lib.green();
	this.instance_5.parent = this;
	this.instance_5.setTransform(121,121);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).wait(240));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(121,121,229,242);
// library properties:
lib.properties = {
	width: 242,
	height: 242,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;