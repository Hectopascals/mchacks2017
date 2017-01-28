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



(lib.RecordButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhjAAIDHAA");
	this.shape.setTransform(0,29.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAAhPIAACf");
	this.shape_1.setTransform(0,21.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(3,1,1).p("AifhSIAAClIE/AAIAAil");
	this.shape_2.setTransform(0,5.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAC+QgpAAgdgeQgdgcAAgqIAAi0QAAgpAdgdQAdgdApAAIAAAAQApAAAdAdQAeAdAAApIAAC0QAAAqgeAcQgdAegpAAg");
	this.shape_3.setTransform(0,-12);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(3).p("AMgAAQAACjg/CVQg8CPhvBvQhvBviPA8QiVA/ijAAQiiAAiVg/QiPg8hvhvQhvhvg8iPQg/iVAAijQAAiiA/iVQA8iPBvhvQBvhvCPg8QCVg/CiAAQCjAACVA/QCPA8BvBvQBvBvA8CPQA/CVAACig");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D94141").s().p("AmjPjQjChSiViWQiWiVhSjCQhVjJAAjbQAAjaBVjJQBSjCCWiVQCViWDChSQDJhVDaAAQDbAADJBVQDCBSCVCWQCWCVBSDCQBVDJAADaQAADbhVDJQhSDCiWCVQiVCWjCBSQjJBVjbAAQjaAAjJhVg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-108,216,216);


// stage content:
(lib.RecordingButton = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.RecordButton();
	this.instance.parent = this;
	this.instance.setTransform(108,108,0.033,0.033);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.33,scaleY:0.33},0).wait(1).to({scaleX:0.53,scaleY:0.53},0).wait(1).to({scaleX:0.67,scaleY:0.67},0).wait(1).to({scaleX:0.78,scaleY:0.78},0).wait(1).to({scaleX:0.86,scaleY:0.86},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(212.4,212.4,7.3,7.3);
// library properties:
lib.properties = {
	width: 216,
	height: 216,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;