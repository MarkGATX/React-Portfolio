import animate from 'createjs'

var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;

      function init() {
        canvas = document.getElementById("canvas");
        anim_container = document.getElementById("animation_container");
        dom_overlay_container = document.getElementById("dom_overlay_container");
        var comp=AdobeAn.getComposition("F15B08081EC66A4580C4FA61AB570BE6");
        var lib=comp.getLibrary();
        var loader = new createjs.LoadQueue(false);
        loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
        loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
        var lib=comp.getLibrary();
        loader.loadManifest(lib.properties.manifest);
      }
      function handleFileLoad(evt, comp) {
        var images=comp.getImages();	
        if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
      }
      function handleComplete(evt,comp) {
        //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
        var lib=comp.getLibrary();
        var ss=comp.getSpriteSheet();
        var queue = evt.target;
        var ssMetadata = lib.ssMetadata;
        for(let i=0; i<ssMetadata.length; i++) {
          ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
        }
        exportRoot = new lib.coffeecupanimation400();
        stage = new lib.Stage(canvas);	
        //Registers the "tick" event listener.
        fnStartAnimation = function() {
          stage.addChild(exportRoot);
          createjs.Ticker.framerate = lib.properties.fps;
          createjs.Ticker.addEventListener("tick", stage);
        }	    
        //Code to support hidpi screens and responsive scaling.
        AdobeAn.makeResponsive(true,'both',false,1,[canvas,anim_container,dom_overlay_container]);	
        AdobeAn.compositionLoaded(lib.properties.id);
        fnStartAnimation();
      }

(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"coffee_cup_400_atlas_1", frames: [[0,0,398,581],[0,583,367,241],[0,826,378,62],[0,890,420,18],[0,910,409,18]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Image = function() {
	this.initialize(ss["coffee_cup_400_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_0 = function() {
	this.initialize(ss["coffee_cup_400_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image_1 = function() {
	this.initialize(ss["coffee_cup_400_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image_2 = function() {
	this.initialize(ss["coffee_cup_400_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Image_3 = function() {
	this.initialize(ss["coffee_cup_400_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.cupwithliner = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Image_0();
	this.instance.setTransform(11.3,108.65,0.7214,0.7214);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,0,0,4).p("EgUYArKQBsAVC5AfQDoAjCwARQFLAhFLgBQDUAADegRQDogSDBgeQBngPCRgcQA7gLBOgSQADgZABgNMAJthV8IALAAQAvgDAAggQAAgZgZgLIgYgGIjSgJQh+gFj8gIQlAgLlAgEQlEgFlEgBQn9AAnTAKQjGAEmOAMQkeAKiLAHQgMAAgMAGQgZALAAAZQAAAUARAJQAMAGASAAIALAAMAJtBV8QgCAPAEAYg");
	this.shape.setTransform(143.8793,209.6437,0.7214,0.7214);

	this.instance_1 = new lib.Image();
	this.instance_1.setTransform(-0.05,0,0.7214,0.7214);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-0.4,288.59999999999997,420.09999999999997);


(lib.coffeelid = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Image_3();
	this.instance.setTransform(4,40.15,0.7213,0.7213);

	this.instance_1 = new lib.Image_2();
	this.instance_1.setTransform(0,49.6,0.7213,0.7213);

	this.instance_2 = new lib.Image_1();
	this.instance_2.setTransform(14.9,-0.1,0.7213,0.7213);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.1,303,62.7);


// stage content:
(lib.coffeecupanimation400 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.coffeelid("synched",0);
	this.instance.setTransform(68.2,59.5,0.2,0.2,0,0,0,303,63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:303.2,regY:62.7,rotation:6.4266,x:73.55,y:60.95},0).wait(1).to({regX:303.4,regY:62.9,rotation:12.855,x:78.9,y:62.45},0).wait(1).to({regX:303.1,regY:63,rotation:19.2824,x:84.2,y:64.6},0).wait(1).to({regX:303.2,regY:62.6,rotation:25.7107,x:89.55,y:66.7},0).wait(1).to({regX:303.4,regY:62.8,rotation:32.1379,x:94.85,y:68.9},0).wait(1).to({regX:303.2,regY:62.6,rotation:38.569,x:98.55,y:70.75},0).wait(1).to({regX:303.4,rotation:44.9969,x:104.35,y:68.65},0).wait(1).to({rotation:51.4249,x:110.55,y:67.75},0).wait(1).to({regX:303.5,rotation:57.8598,x:116.9,y:67.2},0).wait(1).to({regX:303.2,regY:62.5,rotation:64.2835,x:123.35,y:66.85},0).wait(1).to({regY:62.4,rotation:70.7135,x:129.95,y:66.7},0).wait(1).to({regY:62.3,rotation:77.1407,x:136.8,y:66.65},0).wait(1).to({regY:62.6,rotation:83.569,x:144,y:66.9},0).wait(1).to({rotation:89.9956,x:151.25,y:67.35},0).wait(1).to({regY:62.5,rotation:96.4179,x:158.55,y:68.05},0).wait(1).to({regX:303,rotation:102.8465,x:165.9,y:69},0).wait(1).to({regX:302.9,rotation:109.2768,x:173.3,y:70.3},0).wait(1).to({regX:303.1,rotation:115.7086,x:180.7,y:71.95},0).wait(1).to({regX:302.9,rotation:122.1342,x:188.2,y:73.95},0).wait(1).to({regX:303.1,rotation:128.5629,x:195.7,y:76.4},0).wait(1).to({regX:303.2,rotation:134.9907,x:203.3,y:79.3},0).wait(1).to({regX:302.9,rotation:141.4214,x:211,y:82.75},0).wait(1).to({regY:62.6,rotation:147.8487,x:218.75,y:86.85},0).wait(1).to({regY:62.4,rotation:154.2776,x:226.7,y:91.7},0).wait(1).to({regX:303.1,regY:62.6,rotation:160.7038,x:234.6,y:97.6},0).wait(1).to({regX:302.9,regY:62.5,rotation:167.1355,x:242.8,y:104.7},0).wait(1).to({regY:62.6,rotation:173.5647,x:251.25,y:113.8},0).wait(1).to({regX:302.8,rotation:179.9913,x:260.3,y:127.2},0).wait(1).to({regX:302.9,regY:62.5,rotation:181.1891,x:262.05,y:126.45},0).wait(1).to({regY:62.4,rotation:182.3919,x:263.85,y:125.75},0).wait(1).to({regX:303.1,regY:62.6,rotation:183.5913,x:265.6,y:125},0).wait(1).to({regX:302.8,rotation:184.7967,x:268.3,y:124.3},0).wait(1).to({regX:302.7,regY:62.5,rotation:185.9955,x:271,y:123.55},0).wait(1).to({regX:302.8,rotation:180.6601,x:274.1,y:125.15},0).wait(1).to({regX:302.7,regY:62.6,rotation:175.326,x:277.2,y:126.75},0).wait(1).to({regX:302.9,regY:62.4,rotation:177.6606,x:277.6},0).wait(1).to({regX:302.8,regY:62.6,rotation:179.9956,x:277.95},0).wait(1).to({x:278.35},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer_1
	this.instance_1 = new lib.cupwithliner("synched",0);
	this.instance_1.setTransform(56.75,137.6,0.2,0.2,0,0,0,238,409.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:238.2,regY:409.9,rotation:4.1962,x:56.8,y:137.65},0).wait(1).to({regX:238,regY:409.8,rotation:8.3756,x:56.75,y:137.7},0).wait(1).to({regX:238.1,regY:409.9,rotation:12.5326,x:56.8},0).wait(1).to({regY:409.8,rotation:16.6444,y:137.75},0).wait(1).to({regX:238.2,regY:410,rotation:20.5893,x:56.75,y:137.8},0).wait(1).to({regX:238.1,regY:409.9,rotation:22.5166},0).wait(1).to({regX:238,rotation:24.0539,y:137.85},0).wait(1).to({regX:238.1,regY:409.8,rotation:25.435,y:137.9},0).wait(1).to({rotation:26.6765},0).wait(1).to({regX:238,regY:409.9,rotation:27.7539,y:137.95},0).wait(1).to({regX:238.2,regY:409.8,rotation:28.5969,y:138},0).wait(1).to({regX:238,rotation:28.9998,y:138.1},0).wait(1).to({rotation:28.1802},0).wait(1).to({regY:409.9,rotation:26.0567},0).wait(1).to({regX:238.1,rotation:22.938,y:138.15},0).wait(1).to({rotation:18.9907,x:56.7,y:138.2},0).wait(1).to({regX:238,regY:409.8,rotation:14.2854,x:56.75},0).wait(1).to({regX:237.9,regY:409.9,rotation:8.7508,y:138.25},0).wait(1).to({regX:238,regY:410,rotation:1.1104},0).wait(1).to({regY:409.8,rotation:-2.0944,y:137.65},0).wait(1).to({regX:238.3,regY:409.9,rotation:-3.5521,x:56.8,y:137.05},0).wait(1).to({regX:238,rotation:-4.6609,x:56.75,y:136.45},0).wait(1).to({regY:410.1,rotation:-5.517,y:135.85},0).wait(1).to({regY:409.9,rotation:-5.996,y:135.2},0).wait(1).to({regX:238.1,rotation:-5.3147,x:56.8,y:135.95},0).wait(1).to({regX:238,regY:409.8,rotation:-3.8193,x:56.75,y:136.7},0).wait(1).to({regX:238.1,rotation:-1.8671,y:137.45},0).wait(1).to({regX:238,regY:409.9,rotation:0.4415,y:138.15},0).wait(1).to({regX:237.9,rotation:1.6833,y:138.2},0).wait(1).to({regX:238,rotation:2.8559,y:138.15},0).wait(1).to({regX:238.3,rotation:3.9153,x:56.8,y:138.2},0).wait(1).to({regX:238.1,rotation:4.6257,x:56.75},0).wait(1).to({regX:237.9,rotation:3.7228},0).wait(1).to({regX:237.8,regY:410,rotation:2.1907,x:56.7},0).wait(1).to({regX:237.9,regY:409.9,rotation:0.4022,x:56.75},0).wait(1).to({regX:238.1,rotation:-1.3947,y:137.8},0).wait(1).to({regX:237.9,regY:409.7,rotation:-2.313,y:137.4},0).wait(1).to({regX:238.2,regY:409.9,rotation:-1.1585,y:137.8},0).wait(1).to({rotation:0.3847,x:56.8,y:138.15},0).wait(1).to({regY:409.8,rotation:-0.3628,y:138},0).wait(1).to({regY:409.9,rotation:-1.093,x:56.75,y:137.8},0).wait(1).to({regY:409.8,rotation:-0.4284,x:56.8,y:138},0).wait(1).to({regY:409.9,rotation:0.3847,y:138.15},0).wait(1).to({rotation:0.3847},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#764832").s().p("AiTAyQg8gvAAhCQAAhDB1BKQB0BIA0gyQAzg0AqgIQAqgIgGA2QgGA2g8AtQg8AuhUAAQhVAAg7gvg");
	this.shape.setTransform(77.0572,70.8988);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#764832").s().p("AisAzQg8gvAAhCQAAhCB1BJQB0BJA6goQA6gqBEgaQBEgagdA8QgdA6hFAwQhGAwhUAAQhUAAg8gvg");
	this.shape_1.setTransform(79.5209,70.7047);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#764832").s().p("Ai8BAQg8gvAAhCQAAhCB1BJQB1BJA6g5QA7g6BbgUQBbgUg8AvQg8Aug+BHQg/BHhUAAQhUAAg8gvg");
	this.shape_2.setTransform(84.5921,71.7265);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#764832").s().p("AjpBNQg7gvAAhBQAAhDBzBLQB0BKAJhHQAJhJDJgFQDJgGhiAsQhiAshXAjQhWAkhSAlQgjAQgfAAQgpAAgigbg");
	this.shape_3.setTransform(89.506,70.8672);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#764832").s().p("AjeB+QhegaCcgPQgKAsgPAGIglgJgAAOiBQGSAgkEAwQkDAvgPgJQgPgKgMAqQjyi3GRAhg");
	this.shape_4.setTransform(101.6632,73.4305);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#764832").s().p("AkHCFQhegaCdgPQgLAsgOAGIgmgJgAi2iLQE1AXCuAxQA1AigcgBIgqgBQj/ANg7AHQg9AGhTAXQk+iwE2AXg");
	this.shape_5.setTransform(105.719,72.7174);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#764832").s().p("AkoB9QhegaCdgPQgLAsgOAGIgmgJgAgIiCQDWAQBQAiQAkAQAJATQAIATg6gDIgugCQjbgJgyAHQg3AIhIAfQihigE6AYg");
	this.shape_6.setTransform(109.0098,73.5249);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#764832").s().p("AlNCHQhegbCcgPQgKAtgPAGIglgJgADNAEQjAgbhdgMQhdgMggA+QiXirEDAPQDHALAyAPQBCAVAfAUQABgEAMAOIAKALQA9AjgEABQgEABAnAeQAQANgbAAQgjAAhxgXg");
	this.shape_7.setTransform(112.7942,72.59);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#764832").s().p("AlqCCQhegaCcgPQgKAsgPAGIglgJgACwAAQi6g8hlgNQhlgOgWBiQhrijD7APQD5AQAZALQAZAMALAUQABgEAMAOIAKALQBrBGgFAGQgGAGAzA2QAPAQgMAAQgcAAi9hfg");
	this.shape_8.setTransform(115.6797,73.037);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#764832").s().p("AGACgQgjgWgbgLQg1gWhegvIgugWIgpgXQjJhjhRgWQhdgahBAcQhsg+EAAbQEAAcAfAqQAfAqAmgDIAxAXQAogHANAOQAGAFANAVQA2AkAaAUQAfAaAUAWQAhAggNAEQgEACgGAAQgMAAgSgGgAmoiRQgOgNAxgHQAPAegUAGQgRgDgNgNg");
	this.shape_9.setTransform(124.8009,75.2529);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#764832").s().p("AFJC2QgahiA8AgQBKBMAeAyQAJAQgKAAQgWAAhzhMgADjBjIgDgDIAAgDQgDgIgKgEQgugwhSgnIgEgCIgqgVIgogWQjLhkhRgXQhcgZg1gLQh5gYEBAcQEAAbAfAqQAeAqBJgEIAEAHIABABIAFAJQACAEArgMIACgBIgBACQgCACAAAEQABAEAEAGIAMAOIACABIAIALIAHAGIAOALIAHAFIACABQAkAYAUAPIABABQAfAaBCBEQg7ghAZBjQgxgVgxg4gAm+jmQgGgHAhgUQAPAegUAGQgRgDgFgGg");
	this.shape_10.setTransform(133.7131,81.1587);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#764832").s().p("AE8DBIADgEQALAHAKgHQAIADAHgLQArAYAJA8QADATgIAAQgRAAhFhbgAElC9QgqgpgPgEQgPgEAEgNQAEgNhog+QASAmgxghIgGgFIg/gsIgXgPQgFgDgMgXQgsgGgTgKQirhThJgUQhcgaAIAAQgMgiCsAcQCrAbAfAqQAeAnAiAAIAEAAIAaAMQAmgFAMAMQACAOALAFIAgAHQgGACAGAKQBBAdAbAOQAeAPgQgDQgggHAHAIQARAOAOAOIAlAlQgGADAjAsQAgAog0AAIgKAAgAmVjvQgCgMACggQBbAvguAFIgSABQgZAAgCgJg");
	this.shape_11.setTransform(142.5269,84.3625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#764832").s().p("AExDBIACgFQAKAGAcgGQgHABAFgIIAIAFQAqAhAVBNQAHAZgHAAQgSAAhbiAgAEbCpQgpgogQgWQgNgSABAAIhjg4QgFABgIAAQgMAAgOALQgEAJgXgSQgWgTgSgVIgSgYQgFgEAFAgQgbgwgOgGIgPgGQgOgEgJgEQirhThIgUQhdgaAIAAQgMgiC9AsQC8AsAPAaQAPAaARgCIATgCIAZAMQAmgGAMANQACAOAMAFIAfAHQgGACAGAKQBCAeAQAEQARAEgVgDQgWgCAZAWIAfAcIAmAmQgHACAmA2QAbAlgbAAQgMAAgVgHgAi6kUQgDgMACggQBcAvAeBNQh3hEgCgMg");
	this.shape_12.setTransform(150.0842,93.6912);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#764832").s().p("AEkCSIACgEQALAGAcgGQgHABAFgIIAIAFQApAhAWBMQAHAagIAAQgRAAhciBgAEnBsQgpgpgPgWQgOgSACAAQgKgFhZgyQgGABAJApQAJAqg4gbQhIgngEgoQgFgngBgBQgDgEgeACQAHgSgOgGQgJgEgGgCQgOgEgJgEQiqhThJgUQhdgaAIAAQgMgiC9AsQC8AsAQAaQAPAaAQgCIATgCIAaAMQAmgGAMANQACAOALAFIAfAHQgGACAHAKQBBAeARAEQAQAEgVgCQgVgDAYAXIAgAcIAlAlQgGACAlA2QAbAmgbAAQgLAAgWgHgADniHQh3hEgCgMQgCgMACggQA/AmAnAaQANAZgCgRQA8AqgJAJQgFAFgMAAQgKAAgQgEg");
	this.shape_13.setTransform(159.3155,109.3905);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#764832").s().p("ACoD0IAAgEIAAgCIAAgBQgKg2ABhkQANBIAfAFQgBgPABgJQACgRAHAAIAFAHIAWAeQAhArgJAmIAAABIgBACIgBAEQgJAYgaAXQgNAKgKAAQgYAAgLg5gADZA+QgpAJgOgsQgMgkgBgHQABAyhkhsQgGABgHAAQgGAAgigJQg9AagFgnQgEgogBAAQgFgEgeABQAHgSgNgFQgKgFgGgCQgOgEgIgEQhdgthAgaQighWDiA1QDiA2giANQgiAOARgCIATgCIAaAMQAlgFAMAMQACAOALAFIAgAHQgGACAGAKQgfgMA1AYQA1AYgQgCQgQgCAlAZQBaA2gFABQCVBxgHA/QgCATgQAAQgjAAhrhjgAhCAXQgLgGgFgEQgFgFAAgHQAAgFAFgOQAFgPAGgBQAHgCAKAMQAKALALABQAMABgRAUQgNAPgKAAIgFgBgADDibQh3hEgCgMQgCgMACghQAvAdB2BbQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgFAFgLAAQgLAAgQgEg");
	this.shape_14.setTransform(179.4246,119.1959);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#764832").s().p("AiZDEQAOgjAMgaIACgEIABgCIABgBQAag1ATgEQAdgHAGACQAGABAZgBQAKgFAGACIASAFIABAAIAGAHIgCgBQAAAAABAAQAAABABAAQAAAAAAAAQABAAAAAAQAtARAuAkIABABIABACIAGAEIANAMQA4AzjGA7QhBATgnAAQhPAAAehQgACWCcIAHgVIABgEIAAgCIABgBQAGgjgRgZIgRgaQgOgOgbgQQgagOgbgJQgcgJgJARQhXgBgEgnQgEgngBgBQgFgEgeABQAHgSgOgFIgPgHQgOgDgKgLQgLgMhAgRQhBgRgPgvQgyguB8AjQB8AiAnASQAnARgJAHQgJAIACgBIAaANQAmgGALANQACANALAGIAgAHQgGABAGALQAmAbgHADQgIADARAAQAQgBAYAYIAgAcIAqArQArAbBTA+IAGAFIABABIACACIAEAEQAbAehXAAQgwAAhTgJgAA8ixQhphNgFgLQgEgMAiADQBlAIgbAVQAMAZgCgSQA5AugWAVQgKAJgJAAQgLAAgJgPg");
	this.shape_15.setTransform(200.8645,130.0917);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#764832").s().p("AkMChQAehOAXgeIAEgEIACgCIABgBQAIgIAHgCQAdgHAGACQAGABAZgBQAKgFAHACIASAFIABAAIAHAHQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAIADABIAOAGIADABIADACIAKAEIAXAOQgEgHgBgHIAAgEIABgCIAAgBQADgXAjggQgnARgHgJQgHgKgkAQQg/gagFgnQgEgngBgBQgFgEgeABQAIgSgOgFQgKgFAHAJQAHAJgxgQQgxgPgLgKQgKgKhGgwQgNgoBjASQBiATAPAaQAPAZARgCIATgBIAaAMQAmgGAMANQACANALAGIAgAHQgGABAGALQBAAdARAEQARAFgWgDQgVgDAZAYIAfAcQAIAICwBAIACABIAEACIAMAEIBZAhQhPgWgzgLIgYgEIgJgCIgHgBQgkgFgNAFIgCABIgDACQgCACgBACQgBAFAGAJQAmA1hHgXQhOADgEggQgEgggQApQgXAJgPgDQAQANASAQQA4AzjGA7QhBATgnAAQhQAAAfhQgABvhCQgog3gMgTQgLgTA4AfQgVgwA2A8QgDgJAPAUQAsAGgEAUQgDAOgqAAQgOAAgTgBg");
	this.shape_16.setTransform(214.8492,138.2965);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#764832").s().p("Ak0CSQAuh3AdgHQAdgGAGABQAGACAZgCQAKgEAHACIASAFIABAAIAHAGQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAgBIADACQAaAJAbARQgOgXAegiIAEgEIACgCIABgBIAMgMQgoATgHgLQgGgIgdAMIgCABIgEACIgCABIgxADQi0AMALgMQACgCAGgCIAEgCIADgBIASgFQAlgKAVgIQDIggi8gxQgOgKAFgIQgKgCgZgHQgxgQgLgKQgKgKARgSQgBgaA4gBQA3AAAJAXQAIAXARgCIATgCIAaAMQAmgGAMANQACAOALAFIAgAHQgGACAGAKQBAAeARAEQARAEgWgCQgVgDAZAXIC0A5IADABIAFACIAOAEQBZAbANACQAaAFgIAqQkEhIAmA1QAmA2hHgXQhOACgEggQgEgggPAqQgXAIgQgDQARANASAQQA3AzjGA7QhBAUgnAAQhPAAAehQgAClhKQg6gwgMgSQgMgTAdACQAGgUA2A8QgCgIAPATQAsAGgDAlQgBAPgMAAQgPAAghgag");
	this.shape_17.setTransform(220.6328,144.264);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#764832").s().p("AjeB6QAth4AdgFQAdgHAGACQAGACAZgCQAKgFAIACIARAFIABAAIAHAGQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAgBQAbAKAZARQgRgcAzgvIABgBIgBABQgmARgIgKQgGgKgkARIh0AIQnUC+FCjUIAHgFIACgBIACgBQA4glBQgyQgOgJgGgHQABgDgZgIQgxgPgKgKQgLgKBCAGIA9AIQAYADAMAPQANAJAKgDQAKgDAKgaQAmgGAQAxQgCgXAMAGQAIABAWASQA4AwAWgEQAVgFB9AtQAVgSgKgZQgSgoAGgEQAHgUA2A8QgCgJAOATQBQAQgEAgIgBABIAAABIgCAFIgEAIQgTAbgjgJQA/AUAMACQAZAEgIAqQkEhIAmA1QAmA2hHgYQhOADgEggQgEgfgQApQgXAIgQgDQARANASAQQA4AzjFA7QhCATgnAAQhPAAAfhPg");
	this.shape_18.setTransform(214.0624,148.5248);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#764832").s().p("AiiB0QAuh2AdgGQAdgHAGACQAFABAagBQAJgFAIACIARAFIABAAIAGAHIAAAAIABAAQAaAJAbARQgSgcA1gwQgoASgHgKQgHgKgkARIhzAIQosDhEUj8IA1gTQATgpiPAQQh1ANCNgjIASgFIAGgBIAFgBIAugLQDxg4AZADQAYACAMAPQANAJAJgDQAKgCAOgJQAigXAZAgQAKABCMAqIACAAIgCABIADABIAOAFIAvAMIAMgMIAFgFIACgBIACgBIAagSQBbALAuAHIAGABIAJABIAWAFQAkAKiYgEIAJAKQBiAUgeArQgSAbgjgJQA/ATALADQAaAFgIApQkEhIAmA1QAlA1hHgXQhOADgEggQgEgfgPAoQgYAJgQgDQASANARAQQA5AzjGA7QhBATgnAAQhQAAAfhQgAERhWQgGgFAAgHIgRgBQgQAAAnANg");
	this.shape_19.setTransform(210.6579,156.1064);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#764832").s().p("AiiB0QAuh2AdgGQAdgHAGACQAGABAZgBQAKgFAHACIARAFIABAAIAGAHIgCgBQAAAAABABQAAAAABAAQAAAAAAAAQABAAAAAAQAaAJAbARQgSgcA1gwQgoASgHgKQgHgKgkARIhzAIQosDhEUj8IA1gTQAUgpiQAQQiPAQDyg4IBzgaIAVgFIAHgBIAFgBQBngWAPACQAYACAMAPIAEADIACABIADABQAHADAHgCIADgBIAEgBIACgBIAOgIQAhgXAaAfIAAABIAHABIARAFICAAlQgLABBKASQALgQAjgVQFKAmkPgHIAIAKQBiAUgeArQgSAbgjgJQA/ATALADQAaAFgIApQkEhIAmA1QAmA1hIgXQhOADgDggQgEgfgQAoQgYAJgQgDQASANASAQQA4AzjGA7QhBATgnAAQhQAAAfhQgAERhWQgGgFABgHIgRgBQgRAAAnANg");
	this.shape_20.setTransform(212.6191,160.5057);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},7).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[]},1).wait(24));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(176.6,76.4,162.29999999999998,103.79999999999998);
// library properties:
lib.properties = {
	id: 'F15B08081EC66A4580C4FA61AB570BE6',
	width: 353,
	height: 140,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"../images/coffee_cup_400_atlas_1.png", id:"coffee_cup_400_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F15B08081EC66A4580C4FA61AB570BE6'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		createjs.stage.scaleX = pRatio*sRatio;			
		createjs.stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		createjs.stage.tickOnUpdate = false;            
		createjs.stage.update();            
		createjs.stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = createjs.stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;