(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"2Chineese_atlas_1", frames: [[0,0,1902,1323]]},
		{name:"2Chineese_atlas_2", frames: [[0,0,1386,1660]]},
		{name:"2Chineese_atlas_3", frames: [[0,0,1076,1648]]},
		{name:"2Chineese_atlas_4", frames: [[0,0,1552,1066]]},
		{name:"2Chineese_atlas_5", frames: [[0,0,1564,1054]]},
		{name:"2Chineese_atlas_6", frames: [[0,1111,1716,674],[0,0,1142,1109]]},
		{name:"2Chineese_atlas_7", frames: [[0,0,1160,965],[0,967,1160,965]]},
		{name:"2Chineese_atlas_8", frames: [[0,0,1160,965],[0,967,1160,965]]},
		{name:"2Chineese_atlas_9", frames: [[0,0,1160,965],[0,967,1160,965]]},
		{name:"2Chineese_atlas_10", frames: [[0,0,1160,965],[0,967,1160,965]]},
		{name:"2Chineese_atlas_11", frames: [[0,0,1160,965],[0,967,1280,853]]},
		{name:"2Chineese_atlas_12", frames: [[0,855,1155,945],[0,0,1280,853]]},
		{name:"2Chineese_atlas_13", frames: [[0,0,1155,945],[0,947,1155,945]]},
		{name:"2Chineese_atlas_14", frames: [[0,0,1121,897],[0,899,1121,896]]},
		{name:"2Chineese_atlas_15", frames: [[0,806,941,915],[1086,0,941,916],[0,0,1084,804]]},
		{name:"2Chineese_atlas_16", frames: [[0,746,1140,738],[0,0,1144,744]]},
		{name:"2Chineese_atlas_17", frames: [[1059,0,950,698],[0,1370,926,673],[0,665,926,703],[0,0,1057,663],[928,700,640,960]]},
		{name:"2Chineese_atlas_18", frames: [[0,0,926,626],[928,0,789,717],[0,628,789,717],[791,719,789,717],[0,1438,1451,386]]},
		{name:"2Chineese_atlas_19", frames: [[0,0,832,673],[834,0,774,717],[0,675,774,717],[776,719,774,717]]},
		{name:"2Chineese_atlas_20", frames: [[0,0,774,717],[776,0,774,717],[0,719,774,717],[0,1574,1307,412],[776,719,640,853]]},
		{name:"2Chineese_atlas_21", frames: [[1303,695,665,647],[0,1300,665,647],[667,1344,665,647],[1334,1344,665,647],[0,767,883,531],[661,0,640,706],[0,0,659,765],[1303,0,640,693]]},
		{name:"2Chineese_atlas_22", frames: [[0,0,875,479],[877,0,640,640],[0,481,640,640],[0,1123,640,640],[642,642,640,640],[642,1284,640,640],[1284,642,640,640],[1284,1284,640,640]]},
		{name:"2Chineese_atlas_23", frames: [[0,0,640,640],[0,642,640,640],[0,1284,640,640],[642,0,640,640],[1284,0,640,640],[642,642,640,640],[642,1284,640,640],[1284,642,640,640],[1284,1284,640,640]]},
		{name:"2Chineese_atlas_24", frames: [[0,0,640,640],[0,642,640,640],[0,1284,640,640],[642,0,640,640],[1284,0,640,640],[642,642,640,640],[642,1284,640,640],[1284,642,640,640],[1284,1284,640,640]]},
		{name:"2Chineese_atlas_25", frames: [[0,0,640,640],[0,642,640,640],[0,1284,640,640],[642,0,640,640],[1284,0,640,640],[642,642,640,640],[642,1284,640,640],[1284,642,640,640],[1284,1284,640,640]]},
		{name:"2Chineese_atlas_26", frames: [[1541,0,410,895],[0,1308,1779,177],[0,938,890,368],[638,0,901,420],[642,1487,600,503],[638,422,640,514],[0,1487,640,480],[1244,1487,600,501],[0,0,636,640]]},
		{name:"2Chineese_atlas_27", frames: [[0,495,685,413],[602,0,685,413],[687,415,685,413],[1289,0,685,413],[687,830,685,413],[0,910,685,413],[687,1245,685,413],[1374,415,640,427],[1374,844,640,427],[1374,1273,640,427],[0,0,600,493],[0,1325,600,467]]},
		{name:"2Chineese_atlas_28", frames: [[858,1283,503,523],[1363,1259,503,511],[1284,855,640,402],[642,857,640,424],[0,1287,427,640],[429,1287,427,640],[0,0,640,427],[642,429,640,426],[642,0,640,427],[1284,0,640,427],[0,429,640,427],[0,858,640,427],[1284,429,640,424]]},
		{name:"2Chineese_atlas_29", frames: [[905,1636,468,379],[0,1078,426,471],[430,1636,473,398],[1117,0,618,372],[0,544,454,532],[0,0,457,542],[1102,578,606,353],[459,0,656,372],[456,578,644,333],[860,1115,1114,172],[860,1289,1114,172],[456,933,1113,180],[860,1463,1114,171],[459,374,1167,202],[0,1551,428,463],[430,1115,428,463]]},
		{name:"2Chineese_atlas_30", frames: [[0,0,1114,158],[0,160,1114,158],[0,320,1114,158],[0,480,1114,158],[0,640,1114,158],[0,800,1114,158],[0,960,1114,158],[0,1120,1114,158],[0,1280,1114,158],[0,1440,1114,158],[0,1600,1114,158],[0,1760,1114,158]]},
		{name:"2Chineese_atlas_31", frames: [[1116,0,407,363],[342,675,409,365],[451,313,431,360],[1443,1684,406,339],[1525,0,413,345],[0,313,449,360],[0,1684,479,288],[481,1684,479,288],[0,675,340,458],[0,1604,1809,78],[0,160,1114,151],[0,0,1114,158],[962,1684,479,288],[753,1034,1035,126],[753,901,1036,131],[333,1162,1035,126],[884,365,1035,132],[333,1290,1035,126],[884,499,1035,132],[333,1418,1035,126],[884,633,1035,132],[753,767,1035,132],[0,1135,331,467]]},
		{name:"2Chineese_atlas_32", frames: [[0,1405,218,380],[1410,1615,218,380],[698,1616,218,380],[220,1618,218,380],[440,1618,218,380],[579,509,346,179],[1043,1615,365,291],[1474,0,504,251],[1474,253,504,251],[0,256,504,251],[506,256,504,251],[1012,295,353,182],[1012,506,577,214],[0,509,577,214],[579,722,577,214],[1158,722,577,214],[1043,1278,727,154],[1043,1434,594,179],[1630,1738,348,169],[1037,0,435,293],[1737,506,292,326],[698,1278,343,336],[702,938,347,338],[1051,938,347,338],[1400,938,347,338],[0,1065,347,338],[0,725,349,338],[349,1278,347,338],[351,938,349,338],[1639,1434,352,302],[1749,834,277,309],[0,0,1035,126],[0,128,1035,126]]},
		{name:"2Chineese_atlas_33", frames: [[1981,198,46,21],[1999,811,47,15],[1785,1259,95,60],[1408,328,55,60],[150,747,55,60],[150,809,55,60],[150,871,55,60],[710,1132,55,60],[1850,1342,55,60],[1341,1383,55,60],[1398,1383,55,60],[1455,1383,55,60],[1907,1386,55,60],[1964,1386,55,60],[0,1392,55,60],[57,1392,55,60],[114,1392,55,60],[171,1392,55,60],[228,1392,55,57],[285,1392,55,57],[342,1392,55,57],[1055,913,47,36],[1136,688,206,171],[1344,688,38,22],[1104,913,56,30],[360,724,70,36],[1654,391,37,26],[658,856,27,22],[995,913,58,37],[1494,840,160,160],[1656,960,160,160],[1818,960,160,160],[150,961,160,160],[312,1084,129,130],[210,582,259,140],[0,171,369,155],[371,171,369,155],[742,171,369,155],[1113,171,369,155],[658,780,83,74],[1686,1259,97,62],[1980,1044,63,76],[76,1260,63,76],[434,1266,63,76],[499,1266,63,76],[564,1266,63,76],[629,1266,63,76],[872,1305,63,76],[937,1305,63,76],[1002,1305,63,76],[1067,1305,63,76],[1132,1305,63,76],[1197,1305,63,76],[1262,1305,63,76],[1327,1305,63,76],[1392,1305,63,76],[1457,1305,63,76],[1785,1321,63,76],[845,562,61,82],[845,646,61,82],[1980,960,61,82],[1981,113,62,83],[312,964,173,118],[487,964,173,118],[662,964,173,118],[1384,1002,173,118],[1960,1252,61,81],[196,1257,61,81],[1882,1259,61,81],[371,1216,61,82],[1494,715,141,119],[0,984,141,119],[969,1031,141,119],[1112,1031,141,119],[196,1123,87,132],[443,1132,87,132],[532,1132,87,132],[621,1132,87,132],[1687,1122,89,135],[1778,1122,89,135],[1869,1122,89,135],[105,1123,89,135],[1344,715,148,235],[210,724,148,235],[845,733,148,235],[0,747,148,235],[1579,1253,105,77],[1947,225,75,177],[1704,171,27,45],[1885,420,145,245],[1462,952,27,45],[1638,593,145,245],[1960,1122,85,128],[749,780,89,141],[1785,836,252,122],[1945,1335,81,49],[360,885,387,77],[995,952,387,77],[872,1291,677,12],[1384,952,76,44],[1750,0,229,223],[0,328,1406,34],[1785,667,212,167],[2029,198,4,67],[0,0,348,169],[76,1344,445,10],[0,1356,445,10],[1999,667,35,95],[1981,0,63,111],[432,724,35,29],[1199,913,34,28],[1235,913,34,28],[1162,913,35,29],[2035,198,13,11],[1733,171,15,12],[1733,185,15,12],[1733,199,15,12],[2024,267,15,12],[2024,281,15,12],[2024,295,15,12],[2024,309,15,12],[893,1152,89,126],[1656,840,121,118],[0,1105,103,129],[796,1222,74,113],[984,1152,89,126],[770,1102,121,118],[1582,1122,103,129],[0,1236,74,113],[1407,1170,84,119],[1559,1002,89,118],[1493,1170,84,119],[1166,1170,117,88],[285,1216,84,119],[1075,1152,89,118],[1999,764,45,45],[710,1222,84,119],[1255,1031,118,88],[893,1102,45,45],[360,768,296,115],[1785,593,90,71],[1704,225,241,193],[1142,364,254,162],[1142,528,246,158],[1654,420,229,171],[471,580,194,186],[675,562,168,216],[243,364,215,216],[1484,171,218,218],[460,364,213,214],[0,559,208,186],[908,560,226,171],[1390,555,246,158],[1398,391,254,162],[0,364,241,193],[675,364,231,196],[908,364,232,194],[995,865,325,46],[443,1084,325,46],[1255,1122,325,46],[350,0,348,169],[700,0,348,169],[0,1368,445,10],[0,1380,445,10],[1050,0,348,169],[1400,0,348,169],[447,1383,445,10],[894,1383,445,10],[1686,1323,68,70],[995,733,130,130],[1522,1332,68,70],[837,970,130,130],[1285,1170,120,85],[1592,1332,72,64]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
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



(lib.CachedBmp_836 = function() {
	this.initialize(img.CachedBmp_836);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3845,905);


(lib.CachedBmp_835 = function() {
	this.initialize(img.CachedBmp_835);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3844,905);


(lib.CachedBmp_834 = function() {
	this.initialize(ss["2Chineese_atlas_14"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_833 = function() {
	this.initialize(ss["2Chineese_atlas_14"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_832 = function() {
	this.initialize(ss["2Chineese_atlas_32"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_831 = function() {
	this.initialize(ss["2Chineese_atlas_32"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_830 = function() {
	this.initialize(ss["2Chineese_atlas_32"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_829 = function() {
	this.initialize(ss["2Chineese_atlas_32"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_828 = function() {
	this.initialize(ss["2Chineese_atlas_32"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_827 = function() {
	this.initialize(ss["2Chineese_atlas_31"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_826 = function() {
	this.initialize(ss["2Chineese_atlas_31"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_825 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_824 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_823 = function() {
	this.initialize(ss["2Chineese_atlas_29"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_822 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_821 = function() {
	this.initialize(ss["2Chineese_atlas_32"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_820 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_819 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_818 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_817 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_816 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_815 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_814 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_813 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_812 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_811 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_810 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_809 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_808 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_807 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_806 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_805 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_804 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_803 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_802 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_801 = function() {
	this.initialize(ss["2Chineese_atlas_29"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_800 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_799 = function() {
	this.initialize(ss["2Chineese_atlas_32"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_798 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_797 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_796 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_795 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_794 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_793 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_792 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_790 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_788 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_786 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_791 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_784 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_783 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_782 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_781 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_780 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_779 = function() {
	this.initialize(ss["2Chineese_atlas_32"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_778 = function() {
	this.initialize(ss["2Chineese_atlas_32"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_777 = function() {
	this.initialize(ss["2Chineese_atlas_32"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_776 = function() {
	this.initialize(ss["2Chineese_atlas_32"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_775 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_774 = function() {
	this.initialize(ss["2Chineese_atlas_31"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_773 = function() {
	this.initialize(ss["2Chineese_atlas_31"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_772 = function() {
	this.initialize(ss["2Chineese_atlas_31"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_771 = function() {
	this.initialize(ss["2Chineese_atlas_29"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_770 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_769 = function() {
	this.initialize(ss["2Chineese_atlas_32"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_768 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_767 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_766 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_765 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_764 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_763 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_762 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_761 = function() {
	this.initialize(ss["2Chineese_atlas_31"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_760 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_759 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_758 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_757 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_756 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_755 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_754 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_753 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_752 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_751 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_750 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_749 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_748 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_747 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_746 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_745 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_744 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_743 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_742 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_741 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_740 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_739 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_738 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_737 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_736 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_735 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_734 = function() {
	this.initialize(ss["2Chineese_atlas_32"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_733 = function() {
	this.initialize(ss["2Chineese_atlas_32"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_732 = function() {
	this.initialize(ss["2Chineese_atlas_32"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_731 = function() {
	this.initialize(ss["2Chineese_atlas_32"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_730 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_729 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_728 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_727 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_726 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_725 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_724 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_723 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_722 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_721 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_720 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_719 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_718 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_717 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_716 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_715 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_714 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_713 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_712 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_711 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_710 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_709 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_708 = function() {
	this.initialize(img.CachedBmp_708);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3066,567);


(lib.CachedBmp_707 = function() {
	this.initialize(img.CachedBmp_707);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3072,28);


(lib.CachedBmp_706 = function() {
	this.initialize(ss["2Chineese_atlas_31"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_704 = function() {
	this.initialize(img.CachedBmp_704);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3954,844);


(lib.CachedBmp_703 = function() {
	this.initialize(img.CachedBmp_703);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3840,1020);


(lib.CachedBmp_702 = function() {
	this.initialize(img.CachedBmp_702);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2757,437);


(lib.CachedBmp_701 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_700 = function() {
	this.initialize(img.CachedBmp_700);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2416,365);


(lib.CachedBmp_699 = function() {
	this.initialize(img.CachedBmp_699);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3065,567);


(lib.CachedBmp_698 = function() {
	this.initialize(img.CachedBmp_698);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3747,28);


(lib.CachedBmp_697 = function() {
	this.initialize(ss["2Chineese_atlas_31"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_695 = function() {
	this.initialize(img.CachedBmp_695);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2757,437);


(lib.CachedBmp_694 = function() {
	this.initialize(img.CachedBmp_694);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3954,844);


(lib.CachedBmp_693 = function() {
	this.initialize(img.CachedBmp_693);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3840,1020);


(lib.CachedBmp_692 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_691 = function() {
	this.initialize(ss["2Chineese_atlas_32"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_866 = function() {
	this.initialize(ss["2Chineese_atlas_22"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_865 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_688 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_687 = function() {
	this.initialize(ss["2Chineese_atlas_19"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_864 = function() {
	this.initialize(ss["2Chineese_atlas_32"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_685 = function() {
	this.initialize(ss["2Chineese_atlas_31"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_684 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_683 = function() {
	this.initialize(ss["2Chineese_atlas_26"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_682 = function() {
	this.initialize(ss["2Chineese_atlas_29"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_681 = function() {
	this.initialize(img.CachedBmp_681);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3861,752);


(lib.CachedBmp_680 = function() {
	this.initialize(img.CachedBmp_680);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3476,429);


(lib.CachedBmp_679 = function() {
	this.initialize(img.CachedBmp_679);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3954,844);


(lib.CachedBmp_678 = function() {
	this.initialize(img.CachedBmp_678);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3840,1020);


(lib.CachedBmp_677 = function() {
	this.initialize(ss["2Chineese_atlas_31"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_676 = function() {
	this.initialize(ss["2Chineese_atlas_26"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_675 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_674 = function() {
	this.initialize(ss["2Chineese_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_673 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_672 = function() {
	this.initialize(img.CachedBmp_672);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1386,2911);


(lib.CachedBmp_671 = function() {
	this.initialize(img.CachedBmp_671);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3764,526);


(lib.CachedBmp_669 = function() {
	this.initialize(ss["2Chineese_atlas_21"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_667 = function() {
	this.initialize(ss["2Chineese_atlas_28"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_666 = function() {
	this.initialize(ss["2Chineese_atlas_28"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_665 = function() {
	this.initialize(img.CachedBmp_665);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1368,2911);


(lib.CachedBmp_664 = function() {
	this.initialize(img.CachedBmp_664);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1389,2911);


(lib.CachedBmp_663 = function() {
	this.initialize(img.CachedBmp_663);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3764,526);


(lib.CachedBmp_670 = function() {
	this.initialize(img.CachedBmp_670);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3975,696);


(lib.CachedBmp_661 = function() {
	this.initialize(ss["2Chineese_atlas_21"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_659 = function() {
	this.initialize(ss["2Chineese_atlas_21"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_668 = function() {
	this.initialize(ss["2Chineese_atlas_21"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_657 = function() {
	this.initialize(img.CachedBmp_657);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3198,792);


(lib.CachedBmp_656 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_655 = function() {
	this.initialize(ss["2Chineese_atlas_32"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_654 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_653 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_651 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_649 = function() {
	this.initialize(ss["2Chineese_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_648 = function() {
	this.initialize(ss["2Chineese_atlas_12"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_647 = function() {
	this.initialize(ss["2Chineese_atlas_7"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_646 = function() {
	this.initialize(ss["2Chineese_atlas_13"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_645 = function() {
	this.initialize(ss["2Chineese_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_644 = function() {
	this.initialize(ss["2Chineese_atlas_13"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_643 = function() {
	this.initialize(ss["2Chineese_atlas_8"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_642 = function() {
	this.initialize(ss["2Chineese_atlas_9"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_641 = function() {
	this.initialize(ss["2Chineese_atlas_9"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_640 = function() {
	this.initialize(ss["2Chineese_atlas_10"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_639 = function() {
	this.initialize(ss["2Chineese_atlas_10"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_638 = function() {
	this.initialize(ss["2Chineese_atlas_11"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_637 = function() {
	this.initialize(ss["2Chineese_atlas_16"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_636 = function() {
	this.initialize(ss["2Chineese_atlas_17"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_635 = function() {
	this.initialize(ss["2Chineese_atlas_17"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_634 = function() {
	this.initialize(ss["2Chineese_atlas_18"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_633 = function() {
	this.initialize(ss["2Chineese_atlas_17"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_632 = function() {
	this.initialize(ss["2Chineese_atlas_29"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_631 = function() {
	this.initialize(ss["2Chineese_atlas_29"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_630 = function() {
	this.initialize(ss["2Chineese_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_629 = function() {
	this.initialize(ss["2Chineese_atlas_32"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_628 = function() {
	this.initialize(ss["2Chineese_atlas_29"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_627 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_626 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_625 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_624 = function() {
	this.initialize(ss["2Chineese_atlas_32"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_623 = function() {
	this.initialize(ss["2Chineese_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_622 = function() {
	this.initialize(ss["2Chineese_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_621 = function() {
	this.initialize(img.CachedBmp_621);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3001,701);


(lib.CachedBmp_620 = function() {
	this.initialize(img.CachedBmp_620);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4032,1079);


(lib.CachedBmp_619 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_618 = function() {
	this.initialize(img.CachedBmp_618);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3001,701);


(lib.CachedBmp_616 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_615 = function() {
	this.initialize(img.CachedBmp_615);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3001,701);


(lib.CachedBmp_613 = function() {
	this.initialize(img.CachedBmp_613);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3001,701);


(lib.CachedBmp_611 = function() {
	this.initialize(img.CachedBmp_611);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3001,701);


(lib.CachedBmp_609 = function() {
	this.initialize(img.CachedBmp_609);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3001,701);


(lib.CachedBmp_607 = function() {
	this.initialize(img.CachedBmp_607);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3001,701);


(lib.CachedBmp_605 = function() {
	this.initialize(img.CachedBmp_605);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3001,701);


(lib.CachedBmp_617 = function() {
	this.initialize(img.CachedBmp_617);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4032,740);


(lib.CachedBmp_603 = function() {
	this.initialize(img.CachedBmp_603);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3747,126);


(lib.CachedBmp_602 = function() {
	this.initialize(img.CachedBmp_602);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3747,126);


(lib.CachedBmp_601 = function() {
	this.initialize(img.CachedBmp_601);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3747,87);


(lib.CachedBmp_600 = function() {
	this.initialize(img.CachedBmp_600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3747,30);


(lib.CachedBmp_599 = function() {
	this.initialize(img.CachedBmp_599);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3747,30);


(lib.CachedBmp_598 = function() {
	this.initialize(img.CachedBmp_598);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3747,30);


(lib.CachedBmp_597 = function() {
	this.initialize(img.CachedBmp_597);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3747,31);


(lib.CachedBmp_596 = function() {
	this.initialize(img.CachedBmp_596);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3747,31);


(lib.CachedBmp_595 = function() {
	this.initialize(img.CachedBmp_595);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3747,31);


(lib.CachedBmp_594 = function() {
	this.initialize(img.CachedBmp_594);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3747,31);


(lib.CachedBmp_593 = function() {
	this.initialize(img.CachedBmp_593);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3747,31);


(lib.CachedBmp_592 = function() {
	this.initialize(ss["2Chineese_atlas_32"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_591 = function() {
	this.initialize(ss["2Chineese_atlas_15"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_590 = function() {
	this.initialize(ss["2Chineese_atlas_15"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_589 = function() {
	this.initialize(ss["2Chineese_atlas_32"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_588 = function() {
	this.initialize(ss["2Chineese_atlas_32"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_587 = function() {
	this.initialize(ss["2Chineese_atlas_32"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_586 = function() {
	this.initialize(ss["2Chineese_atlas_32"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_585 = function() {
	this.initialize(ss["2Chineese_atlas_32"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_584 = function() {
	this.initialize(ss["2Chineese_atlas_32"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_583 = function() {
	this.initialize(ss["2Chineese_atlas_32"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_582 = function() {
	this.initialize(ss["2Chineese_atlas_29"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_581 = function() {
	this.initialize(img.CachedBmp_581);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4100,752);


(lib.CachedBmp_580 = function() {
	this.initialize(ss["2Chineese_atlas_21"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_579 = function() {
	this.initialize(img.CachedBmp_579);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5517,1075);


(lib.CachedBmp_578 = function() {
	this.initialize(ss["2Chineese_atlas_27"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_576 = function() {
	this.initialize(ss["2Chineese_atlas_27"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_574 = function() {
	this.initialize(ss["2Chineese_atlas_27"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_572 = function() {
	this.initialize(ss["2Chineese_atlas_27"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_570 = function() {
	this.initialize(ss["2Chineese_atlas_27"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_568 = function() {
	this.initialize(ss["2Chineese_atlas_27"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_566 = function() {
	this.initialize(ss["2Chineese_atlas_27"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_577 = function() {
	this.initialize(img.CachedBmp_577);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4284,835);


(lib.CachedBmp_564 = function() {
	this.initialize(img.CachedBmp_564);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3476,414);


(lib.CachedBmp_563 = function() {
	this.initialize(img.CachedBmp_563);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4967,591);


(lib.CachedBmp_562 = function() {
	this.initialize(img.CachedBmp_562);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3856,476);


(lib.CachedBmp_561 = function() {
	this.initialize(img.CachedBmp_561);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3856,476);


(lib.CachedBmp_560 = function() {
	this.initialize(img.CachedBmp_560);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3856,476);


(lib.CachedBmp_559 = function() {
	this.initialize(img.CachedBmp_559);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3856,476);


(lib.CachedBmp_558 = function() {
	this.initialize(img.CachedBmp_558);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3856,476);


(lib.CachedBmp_557 = function() {
	this.initialize(img.CachedBmp_557);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3856,476);


(lib.CachedBmp_556 = function() {
	this.initialize(img.CachedBmp_556);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3856,476);


(lib.CachedBmp_555 = function() {
	this.initialize(img.CachedBmp_555);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4098,875);


(lib.CachedBmp_554 = function() {
	this.initialize(img.CachedBmp_554);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3980,1057);


(lib.CachedBmp_553 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_552 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_551 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_550 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_549 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_548 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_547 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_546 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_545 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_544 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_543 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_542 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_541 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_540 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_539 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_538 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_537 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_536 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_534 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_532 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_530 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_528 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_526 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_533 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_524 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_522 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_535 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_520 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_519 = function() {
	this.initialize(ss["2Chineese_atlas_19"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_518 = function() {
	this.initialize(ss["2Chineese_atlas_19"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_517 = function() {
	this.initialize(ss["2Chineese_atlas_19"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_516 = function() {
	this.initialize(ss["2Chineese_atlas_20"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_515 = function() {
	this.initialize(ss["2Chineese_atlas_18"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_514 = function() {
	this.initialize(ss["2Chineese_atlas_18"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_513 = function() {
	this.initialize(ss["2Chineese_atlas_18"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_512 = function() {
	this.initialize(ss["2Chineese_atlas_20"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_511 = function() {
	this.initialize(ss["2Chineese_atlas_20"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_510 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_509 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_508 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_507 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_506 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_505 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_504 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_503 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_502 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_501 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_500 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(150);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_499 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(151);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_498 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(152);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_497 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(153);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_496 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(154);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_495 = function() {
	this.initialize(ss["2Chineese_atlas_29"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_494 = function() {
	this.initialize(ss["2Chineese_atlas_18"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_493 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(155);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_492 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(156);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_490 = function() {
	this.initialize(img.CachedBmp_490);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4926,351);


(lib.CachedBmp_491 = function() {
	this.initialize(img.CachedBmp_491);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3913,279);


(lib.CachedBmp_488 = function() {
	this.initialize(ss["2Chineese_atlas_26"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_487 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(157);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_486 = function() {
	this.initialize(ss["2Chineese_atlas_30"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_485 = function() {
	this.initialize(ss["2Chineese_atlas_30"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_484 = function() {
	this.initialize(ss["2Chineese_atlas_30"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_483 = function() {
	this.initialize(ss["2Chineese_atlas_30"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_482 = function() {
	this.initialize(ss["2Chineese_atlas_30"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_481 = function() {
	this.initialize(ss["2Chineese_atlas_30"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_480 = function() {
	this.initialize(ss["2Chineese_atlas_30"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_479 = function() {
	this.initialize(ss["2Chineese_atlas_30"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_478 = function() {
	this.initialize(ss["2Chineese_atlas_30"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_477 = function() {
	this.initialize(ss["2Chineese_atlas_30"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_476 = function() {
	this.initialize(ss["2Chineese_atlas_30"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_475 = function() {
	this.initialize(ss["2Chineese_atlas_30"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_474 = function() {
	this.initialize(ss["2Chineese_atlas_29"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_473 = function() {
	this.initialize(ss["2Chineese_atlas_29"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_472 = function() {
	this.initialize(ss["2Chineese_atlas_31"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_471 = function() {
	this.initialize(ss["2Chineese_atlas_29"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_470 = function() {
	this.initialize(ss["2Chineese_atlas_29"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_469 = function() {
	this.initialize(ss["2Chineese_atlas_31"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_468 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(158);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_467 = function() {
	this.initialize(ss["2Chineese_atlas_20"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_466 = function() {
	this.initialize(ss["2Chineese_atlas_32"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_465 = function() {
	this.initialize(ss["2Chineese_atlas_32"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_464 = function() {
	this.initialize(ss["2Chineese_atlas_29"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_463 = function() {
	this.initialize(ss["2Chineese_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_462 = function() {
	this.initialize(img.CachedBmp_462);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3216,3397);


(lib.CachedBmp_461 = function() {
	this.initialize(ss["2Chineese_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_460 = function() {
	this.initialize(img.CachedBmp_460);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4636,1995);


(lib.CachedBmp_459 = function() {
	this.initialize(img.CachedBmp_459);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3913,2202);


(lib.CachedBmp_458 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(159);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_457 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(160);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_456 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(161);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_455 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(162);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_453 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(163);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_451 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(164);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_450 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(165);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_449 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(166);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_652 = function() {
	this.initialize(ss["2Chineese_atlas_29"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_447 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(167);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_650 = function() {
	this.initialize(ss["2Chineese_atlas_29"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_445 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(168);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_444 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(169);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_443 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(170);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_442 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(171);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_441 = function() {
	this.initialize(ss["2Chineese_atlas_31"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_705 = function() {
	this.initialize(img.CachedBmp_705);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2993,583);


(lib.CachedBmp_439 = function() {
	this.initialize(img.CachedBmp_439);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2757,436);


(lib.CachedBmp_438 = function() {
	this.initialize(img.CachedBmp_438);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3113,664);


(lib.CachedBmp_437 = function() {
	this.initialize(img.CachedBmp_437);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3023,803);


(lib.CachedBmp_436 = function() {
	this.initialize(ss["2Chineese_atlas_31"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_435 = function() {
	this.initialize(ss["2Chineese_atlas_31"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_434 = function() {
	this.initialize(ss["2Chineese_atlas_31"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_433 = function() {
	this.initialize(ss["2Chineese_atlas_31"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_432 = function() {
	this.initialize(ss["2Chineese_atlas_31"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_431 = function() {
	this.initialize(ss["2Chineese_atlas_31"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_430 = function() {
	this.initialize(ss["2Chineese_atlas_31"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_429 = function() {
	this.initialize(ss["2Chineese_atlas_31"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_428 = function() {
	this.initialize(ss["2Chineese_atlas_32"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_427 = function() {
	this.initialize(ss["2Chineese_atlas_31"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_426 = function() {
	this.initialize(ss["2Chineese_atlas_32"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_425 = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(172);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_424 = function() {
	this.initialize(img.CachedBmp_424);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3892,458);


(lib.CachedBmp_423 = function() {
	this.initialize(img.CachedBmp_423);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4089,677);


(lib.CachedBmp_422 = function() {
	this.initialize(img.CachedBmp_422);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3849,28);


(lib.CachedBmp_421 = function() {
	this.initialize(ss["2Chineese_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_420 = function() {
	this.initialize(ss["2Chineese_atlas_26"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_419 = function() {
	this.initialize(img.CachedBmp_419);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2251,137);


(lib.alcedinidae = function() {
	this.initialize(ss["2Chineese_atlas_11"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.autumn = function() {
	this.initialize(ss["2Chineese_atlas_26"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.cheese = function() {
	this.initialize(ss["2Chineese_atlas_21"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.chinaFlag = function() {
	this.initialize(ss["2Chineese_atlas_17"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.chinesePeople = function() {
	this.initialize(ss["2Chineese_atlas_27"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.chineseWall = function() {
	this.initialize(ss["2Chineese_atlas_27"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.confetti_0 = function() {
	this.initialize(ss["2Chineese_atlas_22"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.confetti_1 = function() {
	this.initialize(ss["2Chineese_atlas_22"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.confetti_10 = function() {
	this.initialize(ss["2Chineese_atlas_22"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.confetti_11 = function() {
	this.initialize(ss["2Chineese_atlas_22"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.confetti_12 = function() {
	this.initialize(ss["2Chineese_atlas_22"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.confetti_13 = function() {
	this.initialize(ss["2Chineese_atlas_22"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.confetti_14 = function() {
	this.initialize(ss["2Chineese_atlas_22"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.confetti_15 = function() {
	this.initialize(ss["2Chineese_atlas_23"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.confetti_16 = function() {
	this.initialize(ss["2Chineese_atlas_23"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.confetti_17 = function() {
	this.initialize(ss["2Chineese_atlas_23"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.confetti_18 = function() {
	this.initialize(ss["2Chineese_atlas_23"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.confetti_19 = function() {
	this.initialize(ss["2Chineese_atlas_23"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.confetti_2 = function() {
	this.initialize(ss["2Chineese_atlas_23"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.confetti_20 = function() {
	this.initialize(ss["2Chineese_atlas_23"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.confetti_21 = function() {
	this.initialize(ss["2Chineese_atlas_23"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.confetti_22 = function() {
	this.initialize(ss["2Chineese_atlas_23"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.confetti_23 = function() {
	this.initialize(ss["2Chineese_atlas_24"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.confetti_24 = function() {
	this.initialize(ss["2Chineese_atlas_24"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.confetti_25 = function() {
	this.initialize(ss["2Chineese_atlas_24"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.confetti_26 = function() {
	this.initialize(ss["2Chineese_atlas_24"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.confetti_27 = function() {
	this.initialize(ss["2Chineese_atlas_24"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.confetti_28 = function() {
	this.initialize(ss["2Chineese_atlas_24"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.confetti_29 = function() {
	this.initialize(ss["2Chineese_atlas_24"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.confetti_3 = function() {
	this.initialize(ss["2Chineese_atlas_24"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.confetti_30 = function() {
	this.initialize(ss["2Chineese_atlas_24"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.confetti_31 = function() {
	this.initialize(ss["2Chineese_atlas_25"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.confetti_32 = function() {
	this.initialize(ss["2Chineese_atlas_25"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.confetti_33 = function() {
	this.initialize(ss["2Chineese_atlas_25"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.confetti_4 = function() {
	this.initialize(ss["2Chineese_atlas_25"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.confetti_5 = function() {
	this.initialize(ss["2Chineese_atlas_25"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.confetti_6 = function() {
	this.initialize(ss["2Chineese_atlas_25"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.confetti_7 = function() {
	this.initialize(ss["2Chineese_atlas_25"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.confetti_8 = function() {
	this.initialize(ss["2Chineese_atlas_25"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.confetti_9 = function() {
	this.initialize(ss["2Chineese_atlas_25"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.dimSum = function() {
	this.initialize(ss["2Chineese_atlas_28"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dragon = function() {
	this.initialize(ss["2Chineese_atlas_28"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ear = function() {
	this.initialize(ss["2Chineese_atlas_21"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.eye = function() {
	this.initialize(ss["2Chineese_atlas_15"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.groundsel = function() {
	this.initialize(ss["2Chineese_atlas_31"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.theGoosePagoda = function() {
	this.initialize(ss["2Chineese_atlas_28"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.HotPepper = function() {
	this.initialize(ss["2Chineese_atlas_26"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.leshan = function() {
	this.initialize(ss["2Chineese_atlas_28"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.magnifire = function() {
	this.initialize(ss["2Chineese_atlas_33"]);
	this.gotoAndStop(173);
}).prototype = p = new cjs.Sprite();



(lib.motacilla = function() {
	this.initialize(ss["2Chineese_atlas_27"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.mountFuji = function() {
	this.initialize(ss["2Chineese_atlas_16"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pandaBear = function() {
	this.initialize(ss["2Chineese_atlas_28"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.passer = function() {
	this.initialize(ss["2Chineese_atlas_26"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.pelecanus = function() {
	this.initialize(ss["2Chineese_atlas_28"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.psittacula = function() {
	this.initialize(ss["2Chineese_atlas_28"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.rat = function() {
	this.initialize(ss["2Chineese_atlas_28"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.rice = function() {
	this.initialize(ss["2Chineese_atlas_17"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.snake = function() {
	this.initialize(ss["2Chineese_atlas_21"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.spring = function() {
	this.initialize(ss["2Chineese_atlas_27"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.summer = function() {
	this.initialize(ss["2Chineese_atlas_26"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.sun = function() {
	this.initialize(ss["2Chineese_atlas_26"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.sunflower = function() {
	this.initialize(ss["2Chineese_atlas_20"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.taracota = function() {
	this.initialize(ss["2Chineese_atlas_28"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.templeOfHeaven = function() {
	this.initialize(ss["2Chineese_atlas_28"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.turtle = function() {
	this.initialize(ss["2Chineese_atlas_28"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.upupa = function() {
	this.initialize(ss["2Chineese_atlas_12"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.winter = function() {
	this.initialize(ss["2Chineese_atlas_27"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Wall_broken = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_631();
	this.instance.setTransform(51.95,-103.65,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Wall_broken, new cjs.Rectangle(52,-103.6,152.3,180.6), null);


(lib.wall_6 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_637();
	this.instance.setTransform(43.05,71.4,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wall_6, new cjs.Rectangle(43.1,71.4,380,245.99999999999997), null);


(lib.wall_5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_636();
	this.instance.setTransform(74.35,65.4,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wall_5, new cjs.Rectangle(74.4,65.4,316.6,232.70000000000002), null);


(lib.wall_4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_635();
	this.instance.setTransform(77.7,59.5,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wall_4, new cjs.Rectangle(77.7,59.5,308.7,224.39999999999998), null);


(lib.wall_3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_633();
	this.instance.setTransform(77.7,49.75,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wall_3, new cjs.Rectangle(77.7,49.8,308.7,234.3), null);


(lib.wall_2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_634();
	this.instance.setTransform(77.7,63.1,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wall_2, new cjs.Rectangle(77.7,63.1,308.7,208.70000000000002), null);


(lib.wall_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_632();
	this.instance.setTransform(0,0,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wall_1, new cjs.Rectangle(0,0,151.4,177.4), null);


(lib.wall_0 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_630();
	this.instance.setTransform(0,0,0.1883,0.1883);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wall_0, new cjs.Rectangle(0,0,261,312.5), null);


(lib.mainWall = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// newGrayBricks_svg
	this.instance = new lib.CachedBmp_833();
	this.instance.setTransform(-7.6,-5.8,0.3333,0.3333);

	this.instance_1 = new lib.CachedBmp_834();
	this.instance_1.setTransform(-7.9,-6.45,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.9,-6.4,374,299.29999999999995);


(lib.floorGradient = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#402F26","#905438","#DCD4B2"],[0,0.549,1],-1.3,135,1.1,-133.7).s().p("EhlMARdIAA89QAcgGAogIQBUgQCLgVICQgVIM+hcIAogEUAeIgCvAwqgAiUAqEgAdAiyADIQK4A/I1BOQEAAjCPAZIAcAFIAAc9g");
	this.shape.setTransform(647.7,111.7164);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.floorGradient, new cjs.Rectangle(0,0,1295.4,223.5), null);


(lib.flag = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// flag
	this.instance = new lib.CachedBmp_828();
	this.instance.setTransform(-35.9,-61.5,0.3333,0.3333);

	this.instance_1 = new lib.CachedBmp_829();
	this.instance_1.setTransform(-35.9,-61.5,0.3333,0.3333);

	this.instance_2 = new lib.CachedBmp_830();
	this.instance_2.setTransform(-35.9,-61.5,0.3333,0.3333);

	this.instance_3 = new lib.CachedBmp_831();
	this.instance_3.setTransform(-35.9,-61.5,0.3333,0.3333);

	this.instance_4 = new lib.CachedBmp_832();
	this.instance_4.setTransform(-35.9,-61.5,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.9,-61.5,72.69999999999999,126.7);


(lib.confetti = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.confetti_0();

	this.instance_1 = new lib.confetti_1();

	this.instance_2 = new lib.confetti_2();

	this.instance_3 = new lib.confetti_3();

	this.instance_4 = new lib.confetti_4();

	this.instance_5 = new lib.confetti_5();

	this.instance_6 = new lib.confetti_6();

	this.instance_7 = new lib.confetti_7();

	this.instance_8 = new lib.confetti_8();

	this.instance_9 = new lib.confetti_9();

	this.instance_10 = new lib.confetti_10();

	this.instance_11 = new lib.confetti_11();

	this.instance_12 = new lib.confetti_12();

	this.instance_13 = new lib.confetti_13();

	this.instance_14 = new lib.confetti_14();

	this.instance_15 = new lib.confetti_15();

	this.instance_16 = new lib.confetti_16();

	this.instance_17 = new lib.confetti_17();

	this.instance_18 = new lib.confetti_18();

	this.instance_19 = new lib.confetti_19();

	this.instance_20 = new lib.confetti_20();

	this.instance_21 = new lib.confetti_21();

	this.instance_22 = new lib.confetti_22();

	this.instance_23 = new lib.confetti_23();

	this.instance_24 = new lib.confetti_24();

	this.instance_25 = new lib.confetti_25();

	this.instance_26 = new lib.confetti_26();

	this.instance_27 = new lib.confetti_27();

	this.instance_28 = new lib.confetti_28();

	this.instance_29 = new lib.confetti_29();

	this.instance_30 = new lib.confetti_30();

	this.instance_31 = new lib.confetti_31();

	this.instance_32 = new lib.confetti_32();

	this.instance_33 = new lib.confetti_33();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},2).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_17}]},2).to({state:[{t:this.instance_18}]},2).to({state:[{t:this.instance_19}]},2).to({state:[{t:this.instance_20}]},2).to({state:[{t:this.instance_21}]},2).to({state:[{t:this.instance_22}]},2).to({state:[{t:this.instance_23}]},2).to({state:[{t:this.instance_24}]},2).to({state:[{t:this.instance_25}]},2).to({state:[{t:this.instance_26}]},2).to({state:[{t:this.instance_27}]},2).to({state:[{t:this.instance_28}]},2).to({state:[{t:this.instance_29}]},2).to({state:[{t:this.instance_30}]},2).to({state:[{t:this.instance_31}]},2).to({state:[{t:this.instance_32}]},2).to({state:[{t:this.instance_33}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.Gray_woman = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_823();
	this.instance.setTransform(10.15,0,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Gray_woman, new cjs.Rectangle(10.2,0,156,126.4), null);


(lib.woman_faceSide = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_827();
	this.instance.setTransform(0,0,0.2206,0.2206);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.woman_faceSide, new cjs.Rectangle(0,0,89.8,80.1), null);


(lib.woman_face = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_826();
	this.instance.setTransform(0,0,0.2194,0.2194);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.woman_face, new cjs.Rectangle(0,0,89.8,80.1), null);


(lib.mouuth_woman_smiling = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_825();
	this.instance.setTransform(0.05,-1,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouuth_woman_smiling, new cjs.Rectangle(0.1,-1,15.3,7), null);


(lib.mouuth_woman_sad = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_824();
	this.instance.setTransform(0,1,0.3316,0.3316);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouuth_woman_sad, new cjs.Rectangle(0,1,15.6,5), null);


(lib.staticWoman = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_666();
	this.instance.setTransform(0,0,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.staticWoman, new cjs.Rectangle(0,0,167.7,170.4), null);


(lib.staticOrangeWoman = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// orangeWoman_svg
	this.instance = new lib.CachedBmp_623();
	this.instance.setTransform(0,0,0.1549,0.1549);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.staticOrangeWoman, new cjs.Rectangle(0,0,240.4,165.2), null);


(lib.stone_7 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_798();
	this.instance.setTransform(0,0,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stone_7, new cjs.Rectangle(0,0,12.7,7.4), null);


(lib.stone_6 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_794();
	this.instance.setTransform(1,3,0.2792,0.2792);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stone_6, new cjs.Rectangle(1,3,7.6,6.199999999999999), null);


(lib.stone_5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_795();
	this.instance.setTransform(0,0,0.3273,0.3273);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stone_5, new cjs.Rectangle(0,0,12.1,8.5), null);


(lib.stone_4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_796();
	this.instance.setTransform(0,0,0.3273,0.3273);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stone_4, new cjs.Rectangle(0,0,22.9,11.8), null);


(lib.stone_3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_793();
	this.instance.setTransform(0,0,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stone_3, new cjs.Rectangle(0,0,19.4,12.4), null);


(lib.stone_2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_802();
	this.instance.setTransform(0,0,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stone_2, new cjs.Rectangle(0,0,15.7,12), null);


(lib.stone_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_797();
	this.instance.setTransform(0,0,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stone_1, new cjs.Rectangle(0,0,18.7,10), null);


(lib.wheel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgCAHIAFC8AgDgCIABAJAgDgCIABAJAgIjCIAFDAIi8AFAgDgCIAAAAADAgJIjDAH");
	this.shape.setTransform(24.75,24.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.instance = new lib.CachedBmp_786();
	this.instance.setTransform(0,0,0.3081,0.3081);

	this.instance_1 = new lib.CachedBmp_791();
	this.instance_1.setTransform(5.05,4.4,0.3081,0.3081);

	this.instance_2 = new lib.CachedBmp_788();
	this.instance_2.setTransform(0,0,0.3081,0.3081);

	this.instance_3 = new lib.CachedBmp_790();
	this.instance_3.setTransform(0,0,0.3081,0.3081);

	this.instance_4 = new lib.CachedBmp_792();
	this.instance_4.setTransform(0,0,0.3081,0.3081);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance_2}]},1).to({state:[{t:this.instance_1},{t:this.instance_3}]},1).to({state:[{t:this.instance_1},{t:this.instance_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.3,49.3);


(lib.frame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_776();
	this.instance.setTransform(4.55,2.2,0.3326,0.3326);

	this.instance_1 = new lib.CachedBmp_777();
	this.instance_1.setTransform(4.55,2.15,0.3326,0.3326);

	this.instance_2 = new lib.CachedBmp_778();
	this.instance_2.setTransform(4.55,2.15,0.3326,0.3326);

	this.instance_3 = new lib.CachedBmp_779();
	this.instance_3.setTransform(4.55,2.15,0.3326,0.3326);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.6,2.2,167.6,83.5);


(lib.crate = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_780();
	this.instance.setTransform(0,0,0.3326,0.3326);

	this.instance_1 = new lib.CachedBmp_781();
	this.instance_1.setTransform(0,0,0.3326,0.3326);

	this.instance_2 = new lib.CachedBmp_782();
	this.instance_2.setTransform(0,0,0.3326,0.3326);

	this.instance_3 = new lib.CachedBmp_783();
	this.instance_3.setTransform(0,0,0.3326,0.3326);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,122.7,51.6);


(lib.MasterAfraidFace = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_624();
	this.instance.setTransform(0,0,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MasterAfraidFace, new cjs.Rectangle(0,0,97.4,108.7), null);


(lib.Sleeve_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEECE4").s().p("AhLBUQgHgkAEgpQACgIBOhEIBPhDIgHCMQAAABgTA5QgbA8gtANQgIACgHAAQghAAgKg1g");
	this.shape.setTransform(8.0406,13.7418);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Sleeve_2, new cjs.Rectangle(0,0,16.1,27.5), null);


(lib.Sleeve_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEECE4").s().p("AgCCLQgrgTgTg/IgKg8QABgBAMiLQCJCWgBAOQgBApgMAjQgRAvgdAAQgJAAgJgFg");
	this.shape.setTransform(7.5251,14.4097);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Sleeve_1, new cjs.Rectangle(0,0,15.1,28.8), null);


(lib.RightSleeve = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_626();
	this.instance.setTransform(0,0,0.2399,0.2399);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RightSleeve, new cjs.Rectangle(0,0,15.1,26.7), null);


(lib.Palm_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_799();
	this.instance.setTransform(-0.1,0,0.0319,0.0319);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Palm_1, new cjs.Rectangle(-0.1,0,11.7,9.3), null);


(lib.OpenHand2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_629();
	this.instance.setTransform(0,0,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.OpenHand2, new cjs.Rectangle(0,0,145,97.7), null);


(lib.OpenHand = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_628();
	this.instance.setTransform(-27.65,-15.95,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.OpenHand, new cjs.Rectangle(-27.6,-15.9,202,117.60000000000001), null);


(lib.Master_stick = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_627();
	this.instance.setTransform(0,0,0.2399,0.2399);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Master_stick, new cjs.Rectangle(0,0,8.4,22.8), null);


(lib.Master_face = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_462();
	this.instance.setTransform(0,0,0.0319,0.0319);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Master_face, new cjs.Rectangle(0,0,102.6,108.4), null);


(lib.Master_body = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_461();
	this.instance.setTransform(0,0,0.0319,0.0319);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Master_body, new cjs.Rectangle(0,0,34.4,52.6), null);


(lib.HappyFaceMaster = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_801();
	this.instance.setTransform(0,0,0.2279,0.2279);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HappyFaceMaster, new cjs.Rectangle(0,0,97.1,107.4), null);


(lib.hand_2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_800();
	this.instance.setTransform(0,0,0.1093,0.1093);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hand_2, new cjs.Rectangle(0,0,22.5,18.7), null);


(lib.arm_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCC6A8").s().p("AAmA9IhjhrIAUgTIBiBrQAKAKgKAJQgFAFgFAAQgFAAgEgFg");
	this.shape.setTransform(6.2064,6.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arm_1, new cjs.Rectangle(0,0,12.4,13.3), null);


(lib.staticMan = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_667();
	this.instance.setTransform(0,0,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.staticMan, new cjs.Rectangle(0,0,167.7,174.4), null);


(lib.staticblueMan = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// blueMan_svg
	this.instance = new lib.CachedBmp_622();
	this.instance.setTransform(0,0,0.1459,0.1459);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.staticblueMan, new cjs.Rectangle(0,0,228.2,153.8), null);


(lib.smallSones = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_709();
	this.instance.setTransform(0,0,0.2265,0.2265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.smallSones, new cjs.Rectangle(0,0,18.4,11.1), null);


(lib.rightLegOverTime = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_711();
	this.instance.setTransform(-0.6,-5.1,0.1327,0.1327);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rightLegOverTime, new cjs.Rectangle(-0.6,-5.1,11.799999999999999,18.7), null);


(lib.legs = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_710();
	this.instance.setTransform(-1.8,-1.85,0.2265,0.2265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.legs, new cjs.Rectangle(-1.8,-1.8,57.099999999999994,27.6), null);


(lib.leftLegOverTime = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_712();
	this.instance.setTransform(-0.55,-3.65,0.1333,0.1333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.leftLegOverTime, new cjs.Rectangle(-0.5,-3.6,11.3,17), null);


(lib.AngryMouth1 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8A188").s().p("AACAeIgLgJQgIgFgGgCQgKgCgJACQgQAEgEAAQgNAAgBgOQAAgFACgCQAKgMAYgHIAZgGQAkgEAwAIIAAAAQAEACAEABIgGAFIgKgBIgbgDQgjgDgaAGIgBAAQgPADgJAFIgMAIIgDACIAAADQAAAGAHAAIAPgDQAHgCAGAAQAKAAAMAGIASAMQADACgDAEQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgDAAg");
	this.shape.setTransform(7.675,3.0371);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.AngryMouth1, new cjs.Rectangle(0,0,15.4,6.1), null);


(lib.Gray_man = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_771();
	this.instance.setTransform(4.8,0,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Gray_man, new cjs.Rectangle(4.8,0,157.7,132.7), null);


(lib.Nose = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_775();
	this.instance.setTransform(0,0,0.215,0.215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Nose, new cjs.Rectangle(0,0,17.9,15.9), null);


(lib.mouth_man_smiling = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8A087").s().p("AATANQgBgNgLgHQgOgIgMALQgBAAAAAAQAAABgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAPgLAQAIQANAJABAPQAAABAAAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape.setTransform(19.555,1.5859);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8A087").s().p("AhfAnQgEAAABgEQACgEAEAAQAaAEAZgBQApgDAhgSQAlgSAUgiIAAAAQADgEADADQAEABgCAEQgMAUgRAPQggAcgsAKQgXAEgYAAQgUAAgVgDg");
	this.shape_1.setTransform(9.8514,5.8934);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth_man_smiling, new cjs.Rectangle(0,0,21.9,10.2), null);


(lib.mouth_man_sad = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8A087").s().p("AATANQgBgNgLgHQgOgIgMALQgBAAAAAAQAAABgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAPgLAQAIQANAJABAPQAAABAAAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape.setTransform(19.555,8.5141,1,1,0,180,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8A087").s().p("AhfAnQgEAAABgEQACgEAEAAQAaAEAZgBQApgDAhgSQAlgSAUgiIAAAAQADgEADADQAEABgCAEQgMAUgRAPQggAcgsAKQgXAEgYAAQgUAAgVgDg");
	this.shape_1.setTransform(9.8514,4.2066,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth_man_sad, new cjs.Rectangle(0,0,21.9,10.1), null);


(lib.rightLeg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_747();
	this.instance.setTransform(-0.6,-2.35,0.1924,0.1924);

	this.instance_1 = new lib.CachedBmp_748();
	this.instance_1.setTransform(-0.55,-2.3,0.1924,0.1924);

	this.instance_2 = new lib.CachedBmp_749();
	this.instance_2.setTransform(-0.55,-2.3,0.1924,0.1924);

	this.instance_3 = new lib.CachedBmp_750();
	this.instance_3.setTransform(-0.55,-2.3,0.1924,0.1924);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,-2.3,12,15.899999999999999);


(lib.rightHand = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_743();
	this.instance.setTransform(0,0,0.2024,0.2024);

	this.instance_1 = new lib.CachedBmp_744();
	this.instance_1.setTransform(0,0,0.2024,0.2024);

	this.instance_2 = new lib.CachedBmp_745();
	this.instance_2.setTransform(0,0,0.2024,0.2024);

	this.instance_3 = new lib.CachedBmp_746();
	this.instance_3.setTransform(0,0,0.2024,0.2024);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,23.9);


(lib.leftLeg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_739();
	this.instance.setTransform(-0.55,-2.35,0.1927,0.1927);

	this.instance_1 = new lib.CachedBmp_740();
	this.instance_1.setTransform(-0.6,-2.35,0.1927,0.1927);

	this.instance_2 = new lib.CachedBmp_741();
	this.instance_2.setTransform(-0.6,-2.35,0.1927,0.1927);

	this.instance_3 = new lib.CachedBmp_742();
	this.instance_3.setTransform(-0.6,-2.35,0.1927,0.1927);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,-2.3,11.799999999999999,15.8);


(lib.leftHand = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_735();
	this.instance.setTransform(0,0,0.215,0.215);

	this.instance_1 = new lib.CachedBmp_736();
	this.instance_1.setTransform(0,0,0.215,0.215);

	this.instance_2 = new lib.CachedBmp_737();
	this.instance_2.setTransform(0,0,0.215,0.215);

	this.instance_3 = new lib.CachedBmp_738();
	this.instance_3.setTransform(0,0,0.215,0.215);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.3,25.6);


(lib.hat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_731();
	this.instance.setTransform(0,0,0.215,0.215);

	this.instance_1 = new lib.CachedBmp_732();
	this.instance_1.setTransform(0,0,0.215,0.215);

	this.instance_2 = new lib.CachedBmp_733();
	this.instance_2.setTransform(0,0,0.215,0.215);

	this.instance_3 = new lib.CachedBmp_734();
	this.instance_3.setTransform(0,0,0.215,0.215);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124.1,46);


(lib.handOpenRight = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_727();
	this.instance.setTransform(0,0,0.2851,0.2851);

	this.instance_1 = new lib.CachedBmp_728();
	this.instance_1.setTransform(0,0,0.2851,0.2851);

	this.instance_2 = new lib.CachedBmp_729();
	this.instance_2.setTransform(0,0,0.2851,0.2851);

	this.instance_3 = new lib.CachedBmp_730();
	this.instance_3.setTransform(0,0,0.2851,0.2851);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.8,37.7);


(lib.handOpenLeft = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_723();
	this.instance.setTransform(0,0,0.2781,0.2781);

	this.instance_1 = new lib.CachedBmp_724();
	this.instance_1.setTransform(0,0,0.2781,0.2781);

	this.instance_2 = new lib.CachedBmp_725();
	this.instance_2.setTransform(0,0,0.2781,0.2781);

	this.instance_3 = new lib.CachedBmp_726();
	this.instance_3.setTransform(0,0,0.2781,0.2781);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.8,37.6);


(lib.body = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_719();
	this.instance.setTransform(0,0,0.215,0.215);

	this.instance_1 = new lib.CachedBmp_720();
	this.instance_1.setTransform(0,0,0.215,0.215);

	this.instance_2 = new lib.CachedBmp_721();
	this.instance_2.setTransform(0,0,0.215,0.215);

	this.instance_3 = new lib.CachedBmp_722();
	this.instance_3.setTransform(0,0,0.215,0.215);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31.8,50.5);


(lib.upperLamps = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_718();
	this.instance.setTransform(0,15.95,0.3333,0.3333);

	this.instance_1 = new lib.CachedBmp_717();
	this.instance_1.setTransform(4.95,-0.45,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.upperLamps, new cjs.Rectangle(0,-0.4,35,59), null);


(lib.subjectLamp = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AC040D").ss(0.4,1,0,4).p("AgLhnIAADBAAYhnIAADBAAjhnIAACvAAAhnIAADPAAMhnIAADPAgWhnIAACvAgihnIAACh");
	this.shape.setTransform(70.775,78.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#723500").ss(1,0,0,4).p("AAAieIAAE9");
	this.shape_1.setTransform(70.8,15.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF995F").s().p("AAjAjIgLAAIgMAAIgMAAIgLAAIgLAAIgMAAIg7AAIAAhFIC7AAIAABFg");
	this.shape_2.setTransform(70.775,64.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFF08E","#FFB384"],[0,1],-33.1,29.9,29.6,-20.5).s().p("ABeCUIi7AAIo0AAQgVAAgPgOQgOgPAAgVIAAjDQAAgVAOgPQAPgOAVAAIKRAAIKSAAQAUAAAPAOQAPAPAAAVIAADDQAAAVgPAPQgPAOgUAAg");
	this.shape_3.setTransform(70.8,46.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.subjectLamp, new cjs.Rectangle(0,-1,141.6,91.3), null);


(lib.soundIcon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A92216").ss(2,1,2).p("ABMhnIiXDP");
	this.shape.setTransform(9.275,7.625);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A92216").s().p("AAGBNIgrgnIgfAAQgJAAgGgGQgGgHAAgIIAAghQAAgJAGgGQAGgGAJAAIAfAAIArgnQAEgDADAAIACAAIAFABQAIADAAAJIAACFQAAAFgDAEQgEADgGABQgFAAgEgDgABCA4IAAAAQgGgEADgGQANgVAAgZQAAgXgNgWIgBgEQAAgHAIAAQAFAAABAEQAOAaAAAaQAAAdgOAZIAAAAQgCAEgDAAIgFgCgAAtAhQgCgCgBgDQgBgDABgCQAMgXgMgWIgBgDQAAgHAHAAQAFAAACAFQANAbgNAdQgDAFgDAAIgEgBg");
	this.shape_1.setTransform(9.025,8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3.7,18.1,22.7);


(lib.lampButtonQuestionMark = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// button
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A82115").s().p("AgRBKQgHgGAAgJQAAgJAHgGQAGgHAJAAQAIAAAHAHQAGAGAAAJQAAAJgGAGQgHAGgIAAQgJAAgGgGgAgNAcQgDAAgCgCQgDgDAAgDIAAgDQAAgNAJgHQAFgFALgHQAPgIAAgIQAAgHgHgEQgGgFgHAAQgSAAgIAPQgFAFgFgDIgOgKQgFgEADgGQAJgOAOgIQAPgHAPAAQAVAAARAOQARAOAAAUQAAAVgTAMQgUANAAADIAAACQAAADgCADQgDACgDAAg");
	this.shape.setTransform(24.0438,40.3484);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#AC040D").ss(0.4,1,0,4).p("AAUhZIAACmAAehZIAACXAAKhZIAACzAgdhZIAACKAgJhZIAACmAgThZIAACXAAAhZIAACz");
	this.shape_1.setTransform(24.075,71.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.3).p("AgMiyIAAAAQAEAAAGAAIAFAAQABAAAAAAIACAAIACAAQBAACAvAyQAxA0AABKQAABKgxA1QgiAkgrAMQgSAEgTABIgJAAQgTgBgSgEQgrgMgigkQgxg1AAhKQAAhKAxg0QAugyBAgCIAAAAQACgBACAAIAHAAIABABQAtACAfAyQAiA1AABJQAABKgiA0QgaApgiAKIgBAAQgGABgGABIgCAAIgKAAQgBAAAAAAIgCAAQgFgBgFgBQgjgJgbgqQghg0AAhKQAAhJAhg1QAggyAugCAgMiyQACAAACAAAAGiyQAEAAADAAQAnAHAdAtQAiA0AABKQAABKgiA1QgZAnggAKQgDABgDABQgFAAgGABAgRCyQgIgBgHgBQgwgKgmgoQgxg0AAhKQAAhJAxg1QAtgvA9gFAgRCyQgDgBgDgBQgggKgZgnQgig1AAhKQAAhKAig0QAdgtAngHAANiyQA9AFAsAvQAxA1AABJQAABKgxA0QglAogwAKQgHABgIABQgGABgHABAgICzQgFgBgEAAAgEC0QgHgBgGgB");
	this.shape_2.setTransform(24.075,40.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#723500").ss(1,0,0,4).p("AAAhcIAAC5");
	this.shape_3.setTransform(24.05,8.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF995F").s().p("AAFACIAAAAgAgEACIgNgCIgGAAIAGAAIgPgBIAPABIANACQgTAAgSgDIAJAAIAJABIAFAAIASAAIATAAIABAAIAEAAIAJgBIAJAAQgSADgTAAIANgCIgNACgAAFABIACAAIALgBIgLABIAMgBIgMABIgCAAIgKAAIgBAAIgCAAIgKgBIAKABIACAAIABAAIAKAAgAgIABIgJgBIAJABgAASAAIAPgBIgPABIAGAAIgGAAIAAAAgAAHABIAAAAgAASAAIAAAAg");
	this.shape_4.setTransform(24.075,57.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9734").s().p("AAeDeIgKAAIgKAAIgKAAIgJAAIgKAAIgKAAIgzAAIAAg4QATAFAUACQASAEATABIAJAAQATgBASgEQAUgCATgFIAAA4gAAIi0IgCAAIgCAAIgBgBIgHAAIgEABIAAAAQgmABgiAIIAAgyIBQAAIBRAAIAAAyQgigIgngBg");
	this.shape_5.setTransform(24.075,40.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFB384","#FFEC8B"],[0,1],2.9,-16.6,-4.3,22.7).s().p("AAACyIgSAAQgjgJgbgpQghg0AAhLQAAhJAhg0QAggzAugCQguACggAzQghA0AABJQAABLAhA0QAbApAjAJIgFAAQgggKgZgnQgig1AAhLQAAhJAig1QAdgtAngGQgnAGgdAtQgiA1AABJQAABLAiA1QAZAnAgAKIgJgBQgwgKgmgnQgxg0AAhLQAAhJAxg0QAtgvA9gFIAAAAIAAAAQg9AFgtAvQgxA0AABJQAABLAxA0QAmAnAwAKIgJgBQgrgLgigkQgxg1AAhLQAAhJAxg1QAugxBAgDIAAAAIAEAAIAHAAIABAAIgBAAIgFAAIAFAAIABAAQAtADAfAyQAiA0AABJQAABLgiA0QgaApgiAJIgBAAIgTAAgAgMiwIAKgBIgKABIAEgBIgEABIAAAAgAAUCyQAigJAagpQAig0AAhLQAAhJgig0QgfgygtgDIACAAIACAAQAnABAiAIQAyANAoAeIADACQBEA0AABHQAABIhEA0IgDACQgoAegyANQgTAFgUACQArgLAigkQAxg1AAhLQAAhJgxg1QgvgxhAgDQBAADAvAxQAxA1AABJQAABLgxA1QgiAkgrALIgJABQAwgKAlgnQAxg0AAhLQAAhJgxg0Qgsgvg9gFQAnAGAdAtQAiA1AABJQAABLgiA1QgZAnggAKIgEAAIAAAAgAANiwIgHgBIAHABgABRCBQAig1AAhLQAAhJgig1QgdgtgngGQA9AFAsAvQAxA0AABJQAABLgxA0QglAngwAKIgJABQAggKAZgngAAhCxIAAAAgAhQCpQgygNgpgeQgWgRgQgSIgIgMQgYgkAAgrQAAgqAYgkIAIgLQAQgTAWgRQApgeAygNQAigIAmgBQhAADguAxQgxA1AABJQAABLAxA1QAiAkArALQgUgCgTgFgAgMiwIAAAAgAAEixg");
	this.shape_6.setTransform(24.075,39.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(0.3).p("AgRCyQgIgBgHgBQgwgKgmgoQgOgPgKgQQgZgqAAg1QAAhJAxg1QADgDADgDIAKgJQAIgGAHgFIATgLQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBQALgEAMgDQAAgBABAAQABAAABgBQABAAAAAAQABAAABAAQAKgDAKAAQACgBABAAIAAAAQAEAAAGAAIAFAAQABAAAAAAIACAAIACAAQAvACAmAbQANAKANANQAxA0AABKQAAA1gZAqQgKARgOAPQgiAkgrAMQgSAEgTABIgJAAQgTgBgSgEQgrgMgigkQgOgPgKgRQgZgqAAg1QAAhKAxg0QAMgNAOgKQAlgbAvgCIAAAAQACgBACAAIAHAAIABABQAhACAZAbQAKAKAIANQAiA1AABJQAAASgCARQgEAcgJAZQgBADgBAEQgEAJgFAJQgCAFgDAFQgCACgBABQgaApgiAKIgBAAQgGABgGABIgCAAIgKAAQgBAAAAAAIgCAAQgFgBgFgBQgjgJgbgqQAAAAgBgBQAAgBgBgBAgMiyQACAAACAAAAGiyQAEAAADAAQABAAABABQABAAABAAQAVACATAHQABABABAAQAAAAABAAIAYANQAHAEAGAFIAQAOQADACACADQAxA1AABJQAAA1gZAqQgKAQgOAPQglAogwAKQgHABgIABQgFAAgGABAgRCyQgDgBgDgBQgggKgZgnQgBgBAAAAQgBgBAAAAQgIgOgHgQQgRgqAAg1QAAhKAig0QAIgNAKgKQAWgYAcgFAhxALQAAgFAAgGQAAhJAhg1QAJgNAJgKQAagcAigBAA/iVQAJAKAJANQAiA0AABKQAAAGAAAHQgBABAAACQAAAGgBAFABSB+QgBAAAAABQgZAnggAKQgDABgDABQgGABgHABAgICzQgFgBgEAAAgEC0QgHgBgGgB");
	this.shape_7.setTransform(24.075,40.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FF8051","#FFC67A"],[0,1],2.9,-16.6,-4.3,22.7).s().p("AAACyIgSAAQgjgJgbgqIgBgBIgBgBIgLgWIgDgHIgEgKIgNhKIAAgLQAAhJAhg0QAJgOAJgKQAagcAigBIAFAAIABAAQAhACAZAbQAKAKAIAOQAiA0AABJQAAASgCARIABgIIABgLIAAgDIABgNQAAhJgig1QgJgNgJgKQgWgXgagFIABAAQAWACATAHIACABIABAAIAYANIAIAFIAFAEIAQAOIAFAGQAxA0AABJQAAA1gZAqQgKARgOAOQglAogwAKIgJABQAggKAZgoIABgBQAJgPAGgQIABgCIABgFQAJgYAEgdQgEAdgJAYIgCAHIgJASIgFAKIgDADQgaAqgiAJIgBAAIgTAAgAggCxQgwgKgmgoQgOgOgKgRQgZgqAAg1QAAhJAxg0IAGgHIAKgJIALgIIAFgDIASgKIABgBIABAAIABgBIABAAQALgFAMgDIABgBIACAAIABAAIACgBIAVgDIACgBQgcAFgXAYQgJAKgIANQgiA1AABJQAAA1ARAqQAHAQAIAOIABABIABABQAZAoAgAKIgJgBgAB3CAQAOgPAKgRQAZgqAAg1QAAhJgxg1QgNgNgNgKQgmgbgvgCQAnABAiAIQAcAHAZANQAUAKARANIADACQBEAzAABIQAAA2glAqQgNAPgSANIgDACQgoAegyANQgTAFgUACQArgLAiglgAhQCpQgygNgpgeQgTgOgOgQIgFgFIgIgMQgYgkAAgrQAAgqAYgkIAIgLQAQgTAWgRQASgNAUgKQAZgNAcgHQAigIAmgBQgvACglAbQgOAKgMANQgxA1AABJQAAA1AZAqQAKARAOAPQAiAlArALQgUgCgTgFg");
	this.shape_8.setTransform(24.075,39.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF995F").s().p("AAFACIAAAAgAgEACIgNgCIgGAAIAGAAIgPgBIAPABIANACQgTAAgSgDIAJAAIAJABIAFAAIAKABIgJgBIAJABIACAAIABAAIAKAAIACAAIgCAAIgKAAIgBAAIgCAAIgKgBIASAAIATAAIABAAIAEAAIAJgBIgPABIAGAAIgGAAIgLABIAMgBIgMABIALgBIgNACgAASAAIAPgBIAJAAQgSADgTAAIANgCgAAHABIAAAAgAASAAIAAAAg");
	this.shape_9.setTransform(24.075,57.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FFB384","#FFEC8B"],[0,1],2.9,-16.6,-4.3,22.7).s().p("AgXCyQgggKgZgnIgBgCIgBgBQgIgOgHgQQgRgqAAg1QAAhJAig1QAIgNAJgKQAXgYAcgEIAAAAIAAAAIgCAAIgVADIgCABIgBAAIgCABIgBAAQgMADgLAFIgBAAIgBABIgBAAIgBABIgSAKIgQALIgKAJIgGAHQgxA0AABJQAAA1AZAqQAKARAOAPQAmAnAwAKIgJgBQgrgLgigkQgOgQgKgRQgZgqAAg1QAAhJAxg1QAMgNAOgKQAlgbAvgCIgEABIAEgBIAAAAIAEAAIAHAAIABAAIgBAAIgFAAIgKABIAKgBQgiACgaAbQgJAKgJAOQghA0AABJIAAAMIANBKIAEAJIADAHIALAWIABABIABACQAbApAjAJIgFAAgABQCAIADgEIAFgKIAJgSIACgGIgBAEIgBACQgGAQgJAPIgBACQgZAnggAKIgEAAQAigJAagpgAB2CAQAOgPAKgRQAZgqAAg1QAAhJgxg0IgFgGIgQgOIgNgJIgYgMIgBgBIgCAAQgTgIgWgCIgBAAIgCAAIgHgBIACAAQAvACAmAbQANAKANANQAxA1AABJQAAA1gZAqQgKARgOAQQgiAkgrALIgJABQAwgKAlgngAByABQAAhJgig0QgIgOgKgKQgZgbghgCIACAAIAHABIACAAQAaAFAWAXQAJAKAJANQAiA1AABJIgBAOIAAACIgBAMIgBAHQACgRAAgSgAAGixgAgCixIAAAAg");
	this.shape_10.setTransform(24.075,39.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_10},{t:this.shape_5},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_1},{t:this.shape_3},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-1.5,48.4,82.9);


(lib.lampButtonPause = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// button
	this.instance = new lib.CachedBmp_714();
	this.instance.setTransform(19.2,31.35,0.3333,0.3333);

	this.instance_1 = new lib.CachedBmp_713();
	this.instance_1.setTransform(-0.1,-0.95,0.3333,0.3333);

	this.instance_2 = new lib.CachedBmp_716();
	this.instance_2.setTransform(19.2,31.35,0.3333,0.3333);

	this.instance_3 = new lib.CachedBmp_715();
	this.instance_3.setTransform(-0.1,-0.95,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-0.9,48.4,81.60000000000001);


(lib.startLotteryBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_2
	this.text = new cjs.Text("הגרל את עוגיות המזל", "normal 600 23px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 238;
	this.text.parent = this;
	this.text.setTransform(-0.05,-12.5);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF3CE").s().p("AYxF6QgNgNAAgSIuvmPQgNAqgiAhQg4A3hOAAI9/AAQhOAAg4g3Qg4g3AAhPIAAhaQAAhOA4g4QA4g4BOAAId/AAQBOAAA4A4QA4A4AABOIAABaIgBAPIO7GUQALgGANAAQATAAAOANQANANAAATQAAASgNANQgOAOgTAAQgSAAgNgOg");
	this.shape.setTransform(51.2,15.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEDD0").s().p("AYxF6QgNgNAAgSIuvmPQgNAqgiAhQg4A3hOAAI9/AAQhOAAg4g3Qg4g3AAhPIAAhaQAAhOA4g4QA4g4BOAAId/AAQBOAAA4A4QA4A4AABOIAABaIgBAPIO7GUQALgGANAAQATAAAOANQANANAAATQAAASgNANQgOAOgTAAQgSAAgNgOg");
	this.shape_1.setTransform(51.2,15.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,-23.5,338.4,78.4);


(lib.purpleBtn = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7F405D").ss(1,1,1).p("AC1AAQAABLg2A1QgEAEgFAEQgVATgYALQgiAPgnAAQgnAAghgPQgZgLgUgTQgFgEgFgEQgngngKgzQgBgFgBgEQAAgCAAgCQgCgMAAgNQAAgMACgMQAAgCAAgCQABgFABgEQAKgzAngnQAwgwBCgEQAHgBAGAAQAHAAAHABQBCAEAvAwQA2A1AABKg");
	this.shape.setTransform(18.075,18.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9B5B76").s().p("AhICmQgZgLgUgTIgKgIQgngngKgzIgCgJIAAgEQgCgMAAgNQAAgMACgMIAAgEIACgJQAKgzAngnQAwgwBCgEIANgBIAOABQBCAEAvAwQA2A1AABKQAABLg2A1IgJAIQgVATgYALQgiAPgnAAQgnAAghgPg");
	this.shape_1.setTransform(18.075,18.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.purpleBtn, new cjs.Rectangle(-1,-1,38.2,38.2), null);


(lib.playAgainBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// text
	this.text = new cjs.Text("שחקו שוב", "normal 400 23px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 112;
	this.text.parent = this;
	this.text.setTransform(1.5,-12.55);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2));

	// button
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDF3D2").s().p("AoCDrQhPAAg4g4Qg3g3AAhPIAAhZQAAhPA3g4QA4g3BPAAIQFAAQBPAAA4A3QA3A4AABPIAABZQAABPg3A3Qg4A4hPAAg");
	this.shape.setTransform(0,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDEDD3").s().p("AoCDrQhPAAg4g4Qg3g3AAhPIAAhZQAAhPA3g4QA4g3BPAAIQFAAQBPAAA4A3QA3A4AABPIAABZQAABPg3A3Qg4A4hPAAg");
	this.shape_1.setTransform(0,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.5,-23.7,141,47);


(lib.orangeBtn = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9B321E").ss(1,1,1).p("AC1AAQAABLg2A1QgEAEgFAEQgVATgYALQgiAPgnAAQgnAAghgPQgZgLgUgTQgFgEgFgEQgngngKgzQgBgFgBgEQAAgCAAgCQgCgMAAgNQAAgMACgMQAAgCAAgCQABgFABgEQAKgzAngnQAwgwBCgEQAHgBAGAAQAHAAAHABQBCAEAvAwQA2A1AABKg");
	this.shape.setTransform(18.075,18.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2532E").s().p("AhICmQgZgLgUgTIgKgIQgngngKgzIgCgJIAAgEQgCgMAAgNQAAgMACgMIAAgEIACgJQAKgzAngnQAwgwBCgEIANgBIAOABQBCAEAvAwQA2A1AABKQAABLg2A1IgJAIQgVATgYALQgiAPgnAAQgnAAghgPg");
	this.shape_1.setTransform(18.075,18.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.orangeBtn, new cjs.Rectangle(-1,-1,38.2,38.2), null);


(lib.nextTurnFromTimeIsOver = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_2
	this.text = new cjs.Text("המשך לתור הבא", "normal 400 23px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 163;
	this.text.parent = this;
	this.text.setTransform(0,-12.9);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2));

	// button
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF3CE").s().p("AsIDrQg/AAgtg4Qgtg3AAhPIAAhZQAAhPAtg3QAtg4A/AAIYRAAQA/AAAtA4QAtA3AABPIAABZQAABPgtA3QgtA4g/AAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEDD0").s().p("AsIDrQg/AAgtg4Qgtg3AAhPIAAhZQAAhPAtg3QAtg4A/AAIYRAAQA/AAAtA4QAtA3AABPIAABZQAABPgtA3QgtA4g/AAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93,-23.5,186,49.5);


(lib.nextTurnButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// text
	this.text = new cjs.Text("המשך לתור הבא", "normal 400 23px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 204;
	this.text.parent = this;
	this.text.setTransform(-1,-12.75);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2));

	// button
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF3CE").s().p("Au/DrQhOAAg4g4Qg4g3AAhPIAAhZQAAhPA4g3QA4g4BOAAId/AAQBOAAA4A4QA4A3AABPIAABZQAABPg4A3Qg4A4hOAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEDD0").s().p("Au/DrQhOAAg4g4Qg4g3AAhPIAAhZQAAhPA4g3QA4g4BOAAId/AAQBOAAA4A4QA4A3AABPIAABZQAABPg4A3Qg4A4hOAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-23.5,230,47);


(lib.nextToChoosingCharacter = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// text
	this.text = new cjs.Text("המשך לבחירת דמות", "normal 400 23px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 216;
	this.text.parent = this;
	this.text.setTransform(0,-10.8);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({color:"#838383"},0).wait(1));

	// btn
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF3CE").s().p("Au/DrQhOAAg4g4Qg4g3AAhPIAAhZQAAhPA4g3QA4g4BOAAId/AAQBOAAA4A4QA4A3AABPIAABZQAABPg4A3Qg4A4hOAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEDD0").s().p("Au/DrQhOAAg4g4Qg4g3AAhPIAAhZQAAhPA4g3QA4g4BOAAId/AAQBOAAA4A4QA4A3AABPIAABZQAABPg4A3Qg4A4hOAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DBDBDB").s().p("Au/DrQhOAAg4g4Qg4g3AAhPIAAhZQAAhPA4g3QA4g4BOAAId/AAQBOAAA4A4QA4A3AABPIAABZQAABPg4A3Qg4A4hOAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-23.5,230,48.6);


(lib.greenBtn = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#18706E").ss(1,1,1).p("AC1AAQAABLg2A1QgEAEgFAEQgVATgYALQgiAPgnAAQgnAAghgPQgZgLgUgTQgFgEgFgEQgrgrgIg4QgCgOAAgPQAAgOACgOQAIg5ArgqQAwgwBCgEQAHgBAGAAQAHAAAHABQBCAEAvAwQA2A1AABKg");
	this.shape.setTransform(18.075,18.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#25A09B").s().p("AhICmQgZgLgUgTIgKgIQgrgrgIg4QgCgOAAgPQAAgOACgOQAIg5ArgqQAwgwBCgEIANgBIAOABQBCAEAvAwQA2A1AABKQAABLg2A1IgJAIQgVATgYALQgiAPgnAAQgnAAghgPg");
	this.shape_1.setTransform(18.075,18.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.greenBtn, new cjs.Rectangle(-1,-1,38.2,38.2), null);


(lib.exitBtn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_443();
	this.instance.setTransform(10.25,10,0.3333,0.3333);

	this.instance_1 = new lib.CachedBmp_442();
	this.instance_1.setTransform(0,0,0.3333,0.3333);

	this.instance_2 = new lib.CachedBmp_445();
	this.instance_2.setTransform(10.25,10,0.3333,0.3333);

	this.instance_3 = new lib.CachedBmp_444();
	this.instance_3.setTransform(0,0,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.4,43.4);


(lib.enterToSelectedGame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// text
	this.text = new cjs.Text("כניסה", "normal 400 23px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 107;
	this.text.parent = this;
	this.text.setTransform(-6.25,-10.3);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({color:"#838383"},0).wait(1));

	// button
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF3CE").s().p("An2CiQgpAAgegmQgdgmAAg3IAAg9QAAg2AdgnQAegnApAAIPuAAQApAAAcAnQAeAnAAA2IAAA9QAAA3geAmQgcAmgpAAg");
	this.shape.setTransform(-5.75,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDEDD3").s().p("An2CiQgpAAgegmQgdgmAAg3IAAg9QAAg2AdgnQAegnApAAIPuAAQApAAAcAnQAeAnAAA2IAAA9QAAA3geAmQgcAmgpAAg");
	this.shape_1.setTransform(-5.75,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("An2CiQgpAAgegmQgdgmAAg3IAAg9QAAg2AdgnQAegnApAAIPuAAQApAAAcAnQAeAnAAA2IAAA9QAAA3geAmQgcAmgpAAg");
	this.shape_2.setTransform(-5.75,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-14.7,120.6,36.5);


(lib.endGameBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// text
	this.text = new cjs.Text("סיום", "normal 400 23px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 112;
	this.text.parent = this;
	this.text.setTransform(-0.75,-10.3);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2));

	// button
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDF3D2").s().p("AoCDrQhPAAg4g4Qg3g3AAhPIAAhZQAAhPA3g4QA4g3BPAAIQFAAQBPAAA4A3QA3A4AABPIAABZQAABPg3A3Qg4A4hPAAg");
	this.shape.setTransform(0,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDEDD3").s().p("AoCDrQhPAAg4g4Qg3g3AAhPIAAhZQAAhPA3g4QA4g3BPAAIQFAAQBPAAA4A3QA3A4AABPIAABZQAABPg3A3Qg4A4hPAAg");
	this.shape_1.setTransform(0,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.5,-23.7,141,47);


(lib.continueToStartGame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// text
	this.text = new cjs.Text("המשך", "normal 400 23px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 107;
	this.text.parent = this;
	this.text.setTransform(61.75,13.25);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2));

	// button
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDF3D2").s().p("AmFDuQhTgBg7g7Qg6g6AAhTIAAhJQAAhTA6g7QA7g7BTABIMLAAQBTgBA6A7QA7A7AABTIAABJQAABTg7A6Qg6A7hTABg");
	this.shape.setTransform(61.4955,24.7424,1.042,1.042);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEDD0").s().p("AmVD4QhXgBg9g9Qg9g9AAhWIAAhNQAAhWA9g9QA9g+BXAAIMrAAQBXAAA8A+QA+A9AABWIAABNQAABWg+A9Qg8A9hXABg");
	this.shape_1.setTransform(61.5,24.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,123,49.5);


(lib.continuePlaying = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// text
	this.text = new cjs.Text("המשך במשחק", "normal 400 23px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 163;
	this.text.parent = this;
	this.text.setTransform(0.5,-11.8);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2));

	// button
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF3CE").s().p("AsIDrQg/AAgtg4Qgtg3AAhPIAAhZQAAhPAtg3QAtg4A/AAIYRAAQA/AAAtA4QAtA3AABPIAABZQAABPgtA3QgtA4g/AAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEDD0").s().p("AsIDrQg/AAgtg4Qgtg3AAhPIAAhZQAAhPAtg3QAtg4A/AAIYRAAQA/AAAtA4QAtA3AABPIAABZQAABPgtA3QgtA4g/AAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93,-23.5,186,50.6);


(lib.confirmBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// text
	this.text = new cjs.Text("אישור", "normal 400 23px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 87;
	this.text.parent = this;
	this.text.setTransform(0,-11.8);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2));

	// button
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDF3D2").s().p("AoCDrQhPAAg4g4Qg3g3AAhPIAAhZQAAhPA3g4QA4g3BPAAIQFAAQBPAAA4A3QA3A4AABPIAABZQAABPg3A3Qg4A4hPAAg");
	this.shape.setTransform(0,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDEDD3").s().p("AoCDrQhPAAg4g4Qg3g3AAhPIAAhZQAAhPA3g4QA4g3BPAAIQFAAQBPAAA4A3QA3A4AABPIAABZQAABPg3A3Qg4A4hPAAg");
	this.shape_1.setTransform(0,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.5,-23.7,141,47);


(lib.blueBtn = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#314052").ss(1,1,1).p("AC1AAQAABLg2A1QgEAEgFAEQgVATgYALQgiAPgnAAQgnAAghgPQgZgLgUgTQgFgEgFgEQgrgrgIg4QAAgCAAgCQgCgMAAgNQAAgMACgMQAAgCAAgCQAIg5ArgqQAighAqgMQASgGAUgBQAHgBAGAAQAHAAAHABQBCAEAvAwQAoAnAKAzQAEASAAATg");
	this.shape.setTransform(18.075,18.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3E5469").s().p("AhICmQgZgLgUgTIgKgIQgrgrgIg4IAAgEQgCgMAAgNQAAgMACgMIAAgEQAIg5ArgqQAighAqgMQASgGAUgBIANgBIAOABQBCAEAvAwQAoAnAKAzQAEASAAATQAABLg2A1IgJAIQgVATgYALQgiAPgnAAQgnAAghgPg");
	this.shape_1.setTransform(18.075,18.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blueBtn, new cjs.Rectangle(-1,-1,38.2,38.2), null);


(lib.nearBackground = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timer
	this.timerText = new cjs.Text("", "normal 400 18px 'Assistant'");
	this.timerText.name = "timerText";
	this.timerText.textAlign = "center";
	this.timerText.lineHeight = 23;
	this.timerText.lineWidth = 22;
	this.timerText.parent = this;
	this.timerText.setTransform(653.15,-19.5);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.timerText);
	}

	this.timeline.addTween(cjs.Tween.get(this.timerText).wait(1));

	// Clock
	this.instance = new lib.CachedBmp_673();
	this.instance.setTransform(618.3,-34.9,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// text_box
	this.questionText = new cjs.Text("", "normal 400 20px 'Assistant'");
	this.questionText.name = "questionText";
	this.questionText.textAlign = "right";
	this.questionText.lineHeight = 26;
	this.questionText.lineWidth = 460;
	this.questionText.parent = this;
	this.questionText.setTransform(878.25,55.65);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.questionText);
	}

	this.timeline.addTween(cjs.Tween.get(this.questionText).wait(1));

	// Gate
	this.instance_1 = new lib.CachedBmp_675();
	this.instance_1.setTransform(419.85,134.15,0.3333,0.3333);

	this.instance_2 = new lib.CachedBmp_674();
	this.instance_2.setTransform(367.75,3.15,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Lamps_on_gate
	this.instance_3 = new lib.CachedBmp_677();
	this.instance_3.setTransform(352.25,40.35,0.3333,0.3333);

	this.instance_4 = new lib.CachedBmp_676();
	this.instance_4.setTransform(357.25,23.8,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// Ground
	this.instance_5 = new lib.CachedBmp_679();
	this.instance_5.setTransform(0,243.55,0.3333,0.3333);

	this.instance_6 = new lib.CachedBmp_678();
	this.instance_6.setTransform(15.7,203,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// Trees
	this.instance_7 = new lib.CachedBmp_680();
	this.instance_7.setTransform(69.5,106.05,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Green_mountains
	this.instance_8 = new lib.CachedBmp_682();
	this.instance_8.setTransform(1069.9,172.55,0.3333,0.3333);

	this.instance_9 = new lib.CachedBmp_681();
	this.instance_9.setTransform(13.75,46.95,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(1));

	// mask_wall (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAk7AQUIAAmoIhSovIBSkKIAAp1IAohyIBLhfIOrAAIBhBLIAAEMIBPCAIhPCpIh8GzIB8DGIg+CAIA+B6IA3I0g");
	mask.setTransform(359.2628,20.1928);

	// wall
	this.instance_10 = new lib.CachedBmp_683();
	this.instance_10.setTransform(590.75,-133.8,0.3333,0.3333);

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// pagoda
	this.instance_11 = new lib.CachedBmp_684();
	this.instance_11.setTransform(617.95,-157.85,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nearBackground, new cjs.Rectangle(0,-157.8,1318,700.8), null);


(lib.farBackground = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// birds
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.286)").s().p("EgnpAG7IAAABQgFgMgLgGQgXgOgiAYQgeATAGgKQAPgTAUgKQAlgUAcAiQAcgiAmAUQAUAKAPATQAEAHgcgQQghgYgYAOIgQASQgCAFgCAAQgBAAgCgGgEgtbADUQgGgLgKgFQgXgOgiAYQgcASAEgJQAPgTAUgKQAlgUAcAhQAcghAmAUQAUAKAPATQADAGgLgGIgQgJQghgYgYAOIgQARIgCAEIgCABQgCAAgBgGgEgoYACjQgHgGgFgHQgagggaAHIgVAMIgBAAIgCADQgEACAAgIQgBgLgJgJQgTgUgnANQgHADgLACQgMADAFgFQATgOAXgFQApgIARAoQAkgZAfAdQARAQAJAWQAAAAAAABQAAABAAAAQAAAAgBAAQAAABAAAAQgCAAgFgFgEAubgEHIgEgCQg1glglAVQgLAHgJALIgGALQgDAKgEgGIgCgFIgBABQgHgSgTgLQgkgVg2AlQguAfAJgRQAXgdAhgRQA7gdArA0QAsg0A7AdQALAGALAIQASANAPATQADAGgDAAQgGAAgbgSgEAkbgFJIAFgLQANgcAXgUQAwgtA4AmQAcg/BBANQAjAHAfAWQAIAIgUgEQgOgDgOgFQg9gUgdAeQgPAPgCASQAAANgGgFIgEgEIAAAAQgMgPgVgFQgpgKgqAyIgLANIgIAIQgIAHgDAAQgDAAACgEg");
	this.shape.setTransform(629.1975,79.1972);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// clouds
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.208)").s().p("EhelAOhIlYh8IAAnOQCngXCLAJQC/AMBvBIQCeBnCiB2QBRA7AxAmQALgJATgNQAlgaAmgQQB5g0BSA+QBCAxBDA4QA4AnB3AqQCmA7CuASQj/A3lRAaQiyAOigAAQm6AAkqhqgEBROAOdQFdh2CChLQCDhMCMgTQBGgKAsAGQBQiFB1hiQA/g0BMghIAAHxQkzBXp/BIQjHAXjRASIipAOgEAs5AO1IjlgUIEagWQExgWB1AAQBPAADIgXQDlgaEBgrQK2h0HbilQExhrFKieQD2h2DriGIAADCQmzC9p+DpQtME0vrAkQh5AEh2AAQi7AAizgKgEA7yAHUQDUg0BlgvQCchKCBhwIAshuQAchFBdgVQAvgLApADQBphuBSiEQA3hZDAgYQBhgNBVAGIAVgsQAdg3Arg8QCJjBDcikQBfhJB2gkIGXAAIAjALIAANVQjpB6i0BNQmMCqvxChQk/AzlXArQjTAbhUAJIDLgsgEhHHAHHQzmgBpQlGIAAkAQFJDAHdCiQH1CsN3AOQG8AHFXgcQh/AQjNAQQmVAgmCAAIgMAAgEhcLgADQkniLjLiQIAArsIS1AAQDDBPArCAQAwCQAZC4QAMBcADA/IAvgZQA6gdA4gRQCyg3BZBTQCIB/BfCeIAYgNQAegPAegFQBggQA+BSQBjCDAhAhIA3gYQBHgTBTAVQBSAUDWAOQBsAHBaADQnpBCpOARQiaAFiPAAQu3AAm6jQgEA6+AAGQGCibDniBQC7hoE+kAQDPinDpjPIDbAAQpCI/s7FYQkEBrj+BIIjTA1IFdiFgAcMA6QBYgGBTgLQELgjB1hLQCJhZBZglQBWgkAyAIQBCALAsALIAIgTQAMgWATgTQA8g8BuAAQBuAABjAFIBNAGQgBgNAEgUQAHgnAVghQBFhoC5AAQCVAADMADQCTAABTgOQBSgOB5hHQA8gkAsghQiMB5jmCJQnOETnFBSQnGBRowAhQiuALimAEIiCACgEgjlgE7Qq3gumxhnQlJhOmsjBQkmiEktinIH9AAQI+FmQkDlQISBzGfArQkFgClbgYg");
	this.shape_1.setTransform(640.225,103.4898);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// far_mountains
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(153,153,153,0.149)").s().p("EhHvAYrMgvDgAXIgpxaIgJgFQiUhNCXhHQDEiKD7ihQHzlFEOh8QA9grBYgHIAZgBQBJgHA6AXQBXAkBABvIBNALQBRAVAcAvQAuBNAaATQApAdAugxQA7g9BOAOQBOANAUBKQAIAdAbg+QAohoAfhEQCDkfCngjIC/AUQDNAdBMAxQBjA/AdAAQAoAAAwhTQAbguA/g7QBDhABMgtQDBh1BkBOIAQAMQASAIASAKQCIBMB5CrQCJCcAaCEIAZgFQAggGAbgLQBXgjARg8QAUhGBRgSQAjgIAcAIQAdAIAJAVQAKAXAcAVQAbAXAcAJQBKAXAJhPQAEgnAkhGQAEgKBMiJQA0hfAghIQAshlAWhdQAti+BdiJQBbiGBmgiQBRgaBiDUQAbA6A0B8QAuBpAeAuQAtBBAtACQAbABAsgeQAsgdAVADQAiAFAgBIQBPCxAoAxQA1A9A5g2QAQgPBiiaQByixBXhvQExmGDyAxQDwAvCnDfQAmA0BBBsQAwBQAWAQQA9AsDyG/IABACIgBgDIAYAhQATASAZAFQAqAHAgglQATgXAJgcQBckKBtjvQBDiTA4hhQAbgxAPgSQBDhtBThiIACgCIgCABQAug4BCgzQBYhEBHgJQAngKAXAOIACABIAEADQA8AuCeDAQA3BDAoA4IA6BTQAvBIAEAlIAAACQAYBxBNDUQAzCLAhA2QAYAdAUADIgCADIACgCQATgOA+AcQA8AcBHA5QCyCLA4CVQAcBLCWBaQCABLC/BKQCpBCCWAlQCTAmAegPQACgBBPiNQBbihBUhhQEXlEDmFAQFfHpC0BLQA4AXAggVQARgKAEgQIAwAMQA+ALBAAAQDNABCchtQAhgXAaglIAnhDQAwhUBHgYQAsgPASAGQAJAEAVAVQAvAyCIAAQAIAABDASQBCAPAMgLQAUgRAdANQAGADAwAgQAkAXAYACQAjACAfgkQAWgaBQALQAoAFASgCQAegDAQgSQBoh7BdAuQAYAMApAfQAiAWAYgKQB5g0CDgkQAogLB7AwQCBA0AVgBQAmgCA8gKQAogGANAEQARAGAIAgQAGAaAJBSIA4WvI3/gMIAEAFIgHgFMinhgBNQBCBqAXAzQhIhIhMhVg");
	this.shape_2.setTransform(666.0932,297.1045);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// gradient_background2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#C9F1F8","#6FBCFD","#54C8F8","#ACF1FD","#BBF9FF","#EDB983"],[0,0.18,0.514,0.698,0.729,1],-37.4,-1254.7,-36.3,385.7).s().p("EhkXA4WMAAAhwrMDIvAAAMAAABwrg");
	this.shape_3.setTransform(642.425,360.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.farBackground, new cjs.Rectangle(-106.5,0,1545.3,721.2), null);


(lib.ChooseAnswer = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(2).p("An4ovIPxAAQAyAAAjAjQAjAjAAAyIAANvQAAAygjAjQgjAjgyAAIvxAAQgyAAgjgjQgjgjAAgyIAAtvQAAgyAjgjQAjgjAyAAg");
	this.shape.setTransform(62.5,56.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("An4IwQgyAAgjgjQgjgjAAgyIAAtvQAAgyAjgjQAjgjAyAAIPxAAQAxAAAkAjQAjAjAAAyIAANvQAAAygjAjQgkAjgxAAg");
	this.shape_1.setTransform(62.5,56.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ChooseAnswer, new cjs.Rectangle(-1,-1,130.3,114.1), null);


(lib.IncorrectAnswer = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2).p("An4ovIPxAAQAyAAAjAjQAjAjAAAyIAANvQAAAygjAjQgjAjgyAAIvxAAQgyAAgjgjQgjgjAAgyIAAtvQAAgyAjgjQAjgjAyAAg");
	this.shape.setTransform(62.5,56.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("An4IwQgyAAgjgjQgjgjAAgyIAAtvQAAgyAjgjQAjgjAyAAIPxAAQAxAAAkAjQAjAjAAAyIAANvQAAAygjAjQgkAjgxAAg");
	this.shape_1.setTransform(62.5,56.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IncorrectAnswer, new cjs.Rectangle(-1,-1,130.3,114.1), null);


(lib.CorrectAnswer = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#08CC00").ss(2).p("An4ovIPxAAQAyAAAjAjQAjAjAAAyIAANvQAAAygjAjQgjAjgyAAIvxAAQgyAAgjgjQgjgjAAgyIAAtvQAAgyAjgjQAjgjAyAAg");
	this.shape.setTransform(62.5,56.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("An4IwQgyAAgjgjQgjgjAAgyIAAtvQAAgyAjgjQAjgjAyAAIPxAAQAxAAAkAjQAjAjAAAyIAANvQAAAygjAjQgkAjgxAAg");
	this.shape_1.setTransform(62.5,56.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CorrectAnswer, new cjs.Rectangle(-1,-1,130.3,114.1), null);


(lib.PauseAnimation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// wheelbarrow
	this.instance = new lib.CachedBmp_495();
	this.instance.setTransform(21.4,163.05,0.2396,0.2396);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(58));

	// hand
	this.instance_1 = new lib.CachedBmp_496();
	this.instance_1.setTransform(34.75,102,0.2396,0.2396);

	this.instance_2 = new lib.CachedBmp_497();
	this.instance_2.setTransform(31.75,110.8,0.2396,0.2396);

	this.instance_3 = new lib.CachedBmp_498();
	this.instance_3.setTransform(33.3,111.85,0.2396,0.2396);

	this.instance_4 = new lib.CachedBmp_499();
	this.instance_4.setTransform(38,100.75,0.2396,0.2396);

	this.instance_5 = new lib.CachedBmp_500();
	this.instance_5.setTransform(42,90.6,0.2396,0.2396);

	this.instance_6 = new lib.CachedBmp_501();
	this.instance_6.setTransform(40.75,83.85,0.2396,0.2396);

	this.instance_7 = new lib.CachedBmp_502();
	this.instance_7.setTransform(39.7,82.9,0.2396,0.2396);

	this.instance_8 = new lib.CachedBmp_503();
	this.instance_8.setTransform(40.3,83.35,0.2396,0.2396);

	this.instance_9 = new lib.CachedBmp_504();
	this.instance_9.setTransform(51.45,83.4,0.2396,0.2396);

	this.instance_10 = new lib.CachedBmp_505();
	this.instance_10.setTransform(45.3,90.5,0.2396,0.2396);

	this.instance_11 = new lib.CachedBmp_506();
	this.instance_11.setTransform(37.45,100.75,0.2396,0.2396);

	this.instance_12 = new lib.CachedBmp_507();
	this.instance_12.setTransform(33.3,111.85,0.2396,0.2396);

	this.instance_13 = new lib.CachedBmp_508();
	this.instance_13.setTransform(31.75,110.8,0.2396,0.2396);

	this.instance_14 = new lib.CachedBmp_509();
	this.instance_14.setTransform(34.8,102,0.2396,0.2396);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_5}]},5).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_8}]},5).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},3).wait(3));

	// body
	this.instance_15 = new lib.CachedBmp_511();
	this.instance_15.setTransform(0,0,0.2396,0.2396);

	this.instance_16 = new lib.CachedBmp_510();
	this.instance_16.setTransform(69.4,69.6,0.2396,0.2396);

	this.instance_17 = new lib.CachedBmp_512();
	this.instance_17.setTransform(0,0,0.2396,0.2396);

	this.instance_18 = new lib.CachedBmp_513();
	this.instance_18.setTransform(-6.7,0,0.2396,0.2396);

	this.instance_19 = new lib.CachedBmp_514();
	this.instance_19.setTransform(-6.7,0,0.2396,0.2396);

	this.instance_20 = new lib.CachedBmp_515();
	this.instance_20.setTransform(-6.7,0,0.2396,0.2396);

	this.instance_21 = new lib.CachedBmp_516();
	this.instance_21.setTransform(0,0,0.2396,0.2396);

	this.instance_22 = new lib.CachedBmp_517();
	this.instance_22.setTransform(0,0,0.2396,0.2396);

	this.instance_23 = new lib.CachedBmp_518();
	this.instance_23.setTransform(0,0,0.2396,0.2396);

	this.instance_24 = new lib.CachedBmp_519();
	this.instance_24.setTransform(0,0,0.2396,0.2396);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15}]}).to({state:[{t:this.instance_17}]},9).to({state:[{t:this.instance_18}]},12).to({state:[{t:this.instance_19}]},5).to({state:[{t:this.instance_20}]},8).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_22}]},5).to({state:[{t:this.instance_23}]},6).to({state:[{t:this.instance_24}]},3).wait(7));

	// pants
	this.instance_25 = new lib.CachedBmp_520();
	this.instance_25.setTransform(10.7,157.1,0.2396,0.2396);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(58));

	// leg_1
	this.instance_26 = new lib.CachedBmp_522();
	this.instance_26.setTransform(-1.1,168.1,0.2396,0.2396);

	this.instance_27 = new lib.CachedBmp_535();
	this.instance_27.setTransform(23.05,166.9,0.2396,0.2396);

	this.instance_28 = new lib.CachedBmp_524();
	this.instance_28.setTransform(3.75,167.15,0.2396,0.2396);

	this.instance_29 = new lib.CachedBmp_526();
	this.instance_29.setTransform(13.1,170.1,0.2396,0.2396);

	this.instance_30 = new lib.CachedBmp_533();
	this.instance_30.setTransform(19.6,166.85,0.2396,0.2396);

	this.instance_31 = new lib.CachedBmp_528();
	this.instance_31.setTransform(3.7,168.35,0.2396,0.2396);

	this.instance_32 = new lib.CachedBmp_530();
	this.instance_32.setTransform(-1.1,168.05,0.2396,0.2396);

	this.instance_33 = new lib.CachedBmp_532();
	this.instance_33.setTransform(3.7,167.15,0.2396,0.2396);

	this.instance_34 = new lib.CachedBmp_534();
	this.instance_34.setTransform(13.1,170.1,0.2396,0.2396);

	this.instance_35 = new lib.CachedBmp_536();
	this.instance_35.setTransform(3.7,168.35,0.2396,0.2396);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_27,p:{y:166.9,x:23.05}},{t:this.instance_26}]}).to({state:[{t:this.instance_27,p:{y:166.95,x:23.05}},{t:this.instance_28}]},10).to({state:[{t:this.instance_30},{t:this.instance_29}]},5).to({state:[{t:this.instance_27,p:{y:166.95,x:21.05}},{t:this.instance_31}]},10).to({state:[{t:this.instance_27,p:{y:166.9,x:23.05}},{t:this.instance_32}]},5).to({state:[{t:this.instance_27,p:{y:166.95,x:23.05}},{t:this.instance_33}]},9).to({state:[{t:this.instance_30},{t:this.instance_34}]},5).to({state:[{t:this.instance_27,p:{y:166.95,x:21.05}},{t:this.instance_35}]},9).wait(5));

	// leg_2
	this.instance_36 = new lib.CachedBmp_537();
	this.instance_36.setTransform(14.05,169.75,0.2396,0.2396);

	this.instance_37 = new lib.CachedBmp_538();
	this.instance_37.setTransform(5.6,167.1,0.2396,0.2396);

	this.instance_38 = new lib.CachedBmp_539();
	this.instance_38.setTransform(-3.75,164.8,0.2396,0.2396);

	this.instance_39 = new lib.CachedBmp_540();
	this.instance_39.setTransform(8.7,167.2,0.2396,0.2396);

	this.instance_40 = new lib.CachedBmp_541();
	this.instance_40.setTransform(14.05,169.75,0.2396,0.2396);

	this.instance_41 = new lib.CachedBmp_542();
	this.instance_41.setTransform(5.6,167.1,0.2396,0.2396);

	this.instance_42 = new lib.CachedBmp_543();
	this.instance_42.setTransform(-3.75,164.8,0.2396,0.2396);

	this.instance_43 = new lib.CachedBmp_544();
	this.instance_43.setTransform(8.7,167.2,0.2396,0.2396);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_36}]}).to({state:[{t:this.instance_37}]},10).to({state:[{t:this.instance_38}]},5).to({state:[{t:this.instance_39}]},10).to({state:[{t:this.instance_40}]},5).to({state:[{t:this.instance_41}]},9).to({state:[{t:this.instance_42}]},5).to({state:[{t:this.instance_43}]},9).wait(5));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#42312A").s().p("AgjB0QgVgLgmg/QgCgCgCgLQgDgMAAgFQgBgQACgHQACgLAIgLIAVgaQADgDATgMQAagQAfgMIAYgHIBFgLQgyAOgZAJQgqARgdAVIAJgIIgTAPQgUAQgDAEQgKAOgBAaQgCAlAZAYQAXAWgCAAIAAABQAUAOAGALQADAEAKAAIgJAAQgNAAgJgFg");
	this.shape.setTransform(20.2444,168.2008,0.9999,0.9999,24.2128);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9C5B76").s().p("AgDBWQhsgzAIhqQABgHANgRQANgTAKgDICmAyQAFA2gBAnQABAZgCBDQg1gGg1gag");
	this.shape_1.setTransform(19.6064,173.6694,1,1,10.7491);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(58));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.7,0,192.2,242.9);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_494();
	this.instance.setTransform(-36.3,-8.35,0.047,0.047);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.3,-8.3,68.19999999999999,18.1);


(lib.stoneStand = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_463();
	this.instance.setTransform(0,0,0.047,0.047);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stoneStand, new cjs.Rectangle(0,0,89.3,62.1), null);


(lib.plate = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_464();
	this.instance.setTransform(0,0,0.0996,0.0996);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.plate, new cjs.Rectangle(0,0,116.2,20.1), null);


(lib.pagoda = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F34801").s().p("AbsQSIAN7jQULgvSmhuIgBijIABAAIAAABMAARAggIAAACgEAm+AL2IRvAJIAAkRIxngIgEAm4AE6ISBAAIgus/IxNAAgEhCgAQSIAAgCIga+mQQQCbXsA0IA6bZgEg2YAHuIAAERIRvgJIgIkQgEg2kAE6ISBAAIg3s/IxNAAg");
	this.shape.setTransform(624.975,1090.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#22775F","#113C30"],[0,1],-191.2,-37.4,-191.2,44.4).s().p("EhBYAFzIgHgBIgDgBIgDAAIlXg3IjEgnIhBgPQCkgoCXg7QHTi6DrlUIAzAGMAuyAB6QJjAHIjgGQcOgURcimIEXguIAHgBQAwBCBAA/QGCGJKlDJIg1AKIggAFIg5AKIgFABIgFABIgIABMhGKAC8g");
	this.shape_1.setTransform(623.675,901.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B5047").s().p("AqSCzMguygB7IgzgGIgDAAQAggvAdgwQAjg9AchAIABgCUAQtAB9AojgARUApPgAQAN8gBmIAAABQAiA4AqA0IAOAQIADAEIgGACIkXAtQxcCl8OAVQj9ADkJAAQk3AAlJgEg");
	this.shape_2.setTransform(615.575,860.0135);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#F35630","#E8532E","#CC4A29","#B34225"],[0,0.251,0.678,1],-508,246.1,-508,-472.9).s().p("AAAEUIAAonIAAAAIAAIng");
	this.shape_3.setTransform(925.525,768.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F33403").s().p("AkoGLIAAsWIHkAAIAAMWIjyABQh6AAh4gBgAHvmLIHhAAIAAL9QjxAMjwAHgAw9FxIAAr8IHlAAIAAMQQjzgHjygNgAUDmLIHiAAIAALGQjyAVjwAQgA9OE3IAArCIHhAAIAALqQjygRjvgXgEAgXgGLIHlAAIAAJyIkeAhIjHAWgEgpmADaIAAplIHmAAIAAKiQj0gbjygigEAsvgGLIEGAAIAAInIkGAlgEgwzACTIADoeICbAAIAAI4Iiegag");
	this.shape_4.setTransform(612.75,780.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F35F1F").s().p("EA6tA3WMgARgghIABAAMAASAghgEAmvgTZIAAy3IABAAIAAS3gEg6ugl7IACAAIgBBXgEgvvg2+IAAgYIAAAYg");
	this.shape_5.setTransform(677.575,840.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#22775F","#113C30"],[0,1],-196.5,-31.3,-196.5,54).s().p("Eg8CAHtQjTg9i5hoQnCj/j/nsIEwChQF0C0FeBSQReEOHWsOIAWABIGwAFILuAKIMeAKQAxAAAwADIABAAQGQAAFgADIABAAQIAAAGVgDIAAAAQG2gDE4gJIABAAIAAAAIFYgOIAAAAIABAAQALgDAIAAICSCsQDDDAD3BnQMXFPPxqbQhFDojODqQkPEvmABqIgEABIAqgOIAegLIACgBIhngJIhDgGIgCAAIi+gRIgbgCIkGgWIgCAAIjkgRIgZgBMhgqAARIgCABIgBAAIrWA9IgeADIgyAEIgcADIAAAAIAEABIA4AQIg5gQg");
	this.shape_6.setTransform(602.825,539.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFD1A4").s().p("EAAuA+uIgCnCIVjAJIgDG5gEgW7A+uIgQnIIVeAGIAAHCgEAl1A6SIAJkQIRnAJIAAEQgEg3hA2LIRngJIAJEQIxwAJgEAAsA1MIgCrKIVxAAIgJLKgEgXTA1MIgXrNIV0ADIADLKgEAlvAzWIAGs/IRNAAIAuM/gEg3sAzWIgDs/IRNAAIA2M/gA4Af1QKIAJL9gBIACHtI13ARgAAmf8IFAgBQJAgDH7gHIgGHqI1xAPgAThsHIAAjaIUmAcIAEDCgAuksOIAAjTIWpAAIAADYgEguIgMUIgCixITJgOIAADCgATSyCIgFl4IUsgOIAJGGgAuTyCIAAl4IVzgOIAJGGgEguKgSCIAAl4ITMgOIAIGGgEgILgvLIAAgMIgBgMIASlCIAPhsQBRoCDwgZQBDgHA4AjIBlB1IBrE2IAMA9IAGAeIAhDUIAQDQIABAeQlfgDmRAAgEAR7gvZIAKi7QAIhbAPhbQBQoBDxgaQA8gGA0AcIBeBeIB8FLIAOBCIAJAwIAXCOIAMBnQAFA0ADA0Qk4AJm2ADIAAgOgEgh5gviIAAAAIATkOIAOhaQBQoBDxgaQA8gGA0AcIBeBeIB8FLIAOBCQAnDEANDIg");
	this.shape_7.setTransform(632.225,793.4174);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F34400").s().p("EAwwAXlIACAAIAAInIAAAAIgCABgEArIATqIgDjCI0ngdIAADbIrbgDIAAjYI2pAAIAADUIsegDIAAjCIzIAOIABCxIlngCIAAgCIAIw2IABhXICFgBMBfFgAUIARAAIAAS3IAAABgAWKHzIAGF3IUvAAIgImFgArVHzIAAF3IV8AAIgJmFgEgrMAHzIAAF3ITUAAIgImFgAGjvbIgBgeIgRjPIggjUIgGgfIgNg8Ihrk2Ihlh1Qg5gjhCAHQjwAZhQICIgQBsIgRFBIAAANIAAALIAAAAQgxgCgwAAIsegKQgNjIgnjEIgPhDIh7lLIhfhdQg0gdg7AHQjxAahRIBIgNBaIgTENIAAABImxgFIAAgBIAAgYIgMv6MBL5AALIAAQJIgBAAIAAAAIlYAPIgBAAIgBAAQgCg0gGg0IgMhnIgXiOIgJgwIgNhDIh8lLIhehdQg0gdg9AHQjwAahQIBQgPBbgJBbIgJC6IAAAOIAAAAQmVADoAAAg");
	this.shape_8.setTransform(613.25,590.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A5147").s().p("AjIBSQikgjidhGIh+hCIACAAIEzgNIPagEQkNDVlUAAQhzAAh8gZg");
	this.shape_9.setTransform(621.5,212.7049);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#214038").s().p("Eg35AxEIADAAQgcBAgjA9gEA6EAy5IgEgEIAEAEIgHABIAHgBgEA4mAw5IACgBQANAWAQAWQAQAYATAYIAKARQgqg0gig4gEg5gAKVIgfgEIgNgDQh4gVh3gjIACAAIA4AQIg3gQIAAAAIgEgBIAcgDIAygEIAegDILWg9IABAAIABgBMBgrgARIAZABIDjARIADAAIEFAWIAbACIC+ARIADAAIBDAGIBnAJIgDABIgdALIgrAOIAFgBIgEABIgzALIgQAEIgKACIgDABQi5Aoi7gCIjbABIhiABIgOAAIgBAAIgRAAMhfFAAUIiFABIgCAAIizAAIgjABQioAAiogbgEgJFgy1IEzgLIAEAAIkzANg");
	this.shape_10.setTransform(614.75,528.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F7231C").s().p("EgYeA56Q+Igdt8h9IgBgBIgJgBIjxgoIgLgCIgOgCIg7gNInOiHIhAgZQiqhGiehYIg2gfIhYg2IjCiGIgbgVQiviHiHiVIhnh4IACABIAeANIHHC7IM4D8IB8AcIBAAOIDFAnIFXA4IADAAIADAAIAHABMBDvABkMBGLgC8IAHgCIAGgBIAEAAIA5gKIAhgGIA1gJQLkiEIJiaQEehWB2g5IAAAAQhbCxjjDMQkCDplNCTQiaBDirAyQhqAehxAXIgCABQj0AynHAmIgCAAIgCAAIgDABIgBAAIgaACIgBAAQutBM8TAaQn7AHo/ADIlBABIihABIjOAAQqHAAowgIgEg7CAhyIhYgKIjLgfIgRgDQrHh+oVnCQiqiNiAibIhfiBIABABIgBgBQC+A9C/A4IAMADIFoBmIOvDhICJAbIDYAqQCiAfCkAbICfAaQCXAYCYAVQDyAiDzAbQCZASCZAOQDwAXDyARQCYAKCYAIQDxAND0AHQCXAECYACQDyADDzgDQCYgCCagEQDwgHDygMQCYgICbgKQDwgQDxgVQCZgOCZgPIDIgWIEdghQCcgSCXgUIEGglIADAAIAWgDICsgaIAWgDQCHgVCDgWIDagmICtggQJNhwH8iKQBrgdBngeIF5h1IAYgJIAAABQi1Evo4EzQpgFHprBTIhaALUgN8ABmgpOAAQQk4ACkiAAUghLAAAgOtgBugEgpXgpdIhJgIIlag0IgHgCQrFh+oYnCQimiKiBieIhih+IACABQOKFoPBDIMBEpAB6IAlgFQHAg+GYhLIEGg0IAkgIQOjjDLDkeIAAABQi2Evo2EzQpgFHpsBTIgFABIgQACIh/APIgaADIgRACQtKBb35APQjNACjDAAQ0HAAsihcg");
	this.shape_11.setTransform(635.2,626.5352);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#22775F","#113C30"],[0,1],-201,-15.8,-201,75.9).s().p("EgrjAHlIgIgCMAgXgQ8IEsgBIkzALIADACIgCAAIB+BCQCeBHCjAjQHoBhFokeIAaAAMAidAPzIgkAIIkGA0QmYBLnAA+IglAFg");
	this.shape_12.setTransform(629.775,262.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E3312D").s().p("EBBDA5JIAAgBIAagBIABAAIAEgBIABAAIACAAIADAAIgkADgEhEmA4YIgHgBIAJABIAAABIgCgBgEBMiA3tQBxgXBqgeIAAABIgBAAQhqAdhwAXgEhR/A0/IgBAAIAAgCIBAAZIg/gXgEBVDA1CQFMiSECjpQDjjMBbixIABgBIgTAiQheCjjNC5IgBAAQkCDrlMCSIAAAAgEhXJAygIg1gfIA2AfIAAABIgBgBgEhDTAxqIgDAAIADAAIAHABIgHgBgEhjOAocIgBgBIAfAPIgegOgEg7GAitIhVgNIBZALIgBACIgDAAgEA1ZAihIBagMQJshSJflIQI4kyC1kvIAAgBQieEKnFEMQhCAmhHAmQo4EypBBdIhSALIhZAMIgCAAgEAtWAbcIABAAIAVgCIgWACgEgqhgotIBKAJIAAABIhKgKgEAljgpLQJshTJglIQI3kyC1kvIAAgBQi0Ewo4EyIgpAXQjwB9jxBYQlfB/liAwIgGAAIAFAAgEhJmg5HIgBgBQOHFnO+DIIAIACQvCjJuKlng");
	this.shape_13.setTransform(635.275,620.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9C1318").s().p("Ehd1BgjIAAgBIgBAAIAAmaIK9AAMgCAgnKIABAAIAAgBQCfBYCqBGIAAABIAAAAMABJAksIMvAAIAAABMAodAAAIg67aQ3tgzwPibIgCgBIAAgBIgBAAIgDiqIACABIAAgBIABABQN9B9eIAdIAQIGIV3gRIgCntIChgBIADHuIVygPIAGnqQcSgaOthMIABCiQymBv0KAvIgObjMAnPAAAIAAgBIACAAIOMAAMAAagixIABAAIAAgCQCrgyCbhDIAAACIABgBMgBNAknIHvAAIAAABIABAAIAAGagEACgBaJIVdAAIAEm5I1jgJgEgVJBaJIVMAAIAAnCI1cgGgEACeBQnIVmAAIAJrKI1yAAgEgVhBQnIVgAAIgDrKI11gDgABrTSInkAAIAAMXQiYgCiYgEIAAsRInlAAIAAL9QiYgIiYgKIAArrInhAAIAALDQiagOiYgSIAAqjInmAAIAAJmQiXgViYgYIAAo5IibAAIlKAAIAAHlIjYgqIgonNIkygZIAAgCIAAAAIAAjlIN/ACIAAACIFnACITHADIMeADIWpAFILbACIUqAEIFqACIAAgCIABAAINuACIAAACIABAAIgYDlIljAAIgSHvQiDAWiIAVIAAoIIjXAAIgBAAIgCAAIkGAAIAAJNQiXAUicASIAApzInlAAIAAKqQiaAPiYAOIAArHIniAAIAALsQiaAKiZAIIAAr+InhAAIAAMRQibAEiYACgEgnEgkfIgBAAIAAgCIgBAAIgBjlIAAgBQOaBqYegQQX5gPNLhbIAAEEgEgMYhA6IgBAAIggjoIEtgGIA5jMQAeg6AmguIEviwIAMgCIANgCIgBiiIiwgCIAAgCIgBAAIAGiEICqADIgBiIIi3AAIABgCIgCAAIAPiXICoALIgBh1Ii6gCIAAgBIgCAAIgNhwIDIgPIgBh6QgmgNgggdIgMgOIgJgNIgXgwQgIgbAAgdQAAhKAzg3QA3g2BLAAQBJAAA3A2IALAOIAKAOIAXAwQAIAaAAAdQAABKg0A3QgfAegnAMIAEByIDIgRIAAABIABAAIgOCeIi2gCIADB8ICeAIIAAACIABAAIAOB7IinAAIADCLIDFADIABABIABAAIAOCBIjQgCIADCZQA+AEA1ATIEMDbIASAhIAIANIAEAJIANAZIAvB1IAMAoIE7gGIAAABIABAAIgxEAIiMAAIgZAAIvaAEIgEAAIksABIidAAg");
	this.shape_14.setTransform(620.85,617.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pagoda, new cjs.Rectangle(0,0,1270.5,1235.9), null);


(lib.noteName = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9F4E9").s().p("Ai6BBQgIhtAAgbIGFAHIgCCIg");
	this.shape.setTransform(19.525,7.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.noteName, new cjs.Rectangle(0,0,39.1,14.5), null);


(lib.LuckyCookie2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_466();
	this.instance.setTransform(0,0,0.0912,0.0912);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LuckyCookie2, new cjs.Rectangle(0,0,32.1,27.6), null);


(lib.LuckyCookie1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_465();
	this.instance.setTransform(0,0,0.1023,0.1023);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LuckyCookie1, new cjs.Rectangle(0,0,28.4,31.6), null);


(lib.HalfCookie2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_493();
	this.instance.setTransform(0,0,0.2046,0.2046);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HalfCookie2, new cjs.Rectangle(0,0,47.3,40.1), null);


(lib.HalfCookie1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_492();
	this.instance.setTransform(0,0,0.2046,0.2046);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HalfCookie1, new cjs.Rectangle(0,0,47.5,39.7), null);


(lib.an_TextInput = function(options) {
	this.initialize();
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.an_CSS = function(options) {
	this.initialize();
	this._element = new $.an.CSS(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.an_ComboBox = function(options) {
	this.initialize();
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.staticWall = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// text_box_copy
	this.player1FlagNameDisable = new cjs.Text("", "normal 400 13px 'Assistant'", "#9D9D9D");
	this.player1FlagNameDisable.name = "player1FlagNameDisable";
	this.player1FlagNameDisable.textAlign = "center";
	this.player1FlagNameDisable.lineHeight = 17;
	this.player1FlagNameDisable.lineWidth = 45;
	this.player1FlagNameDisable.parent = this;
	this.player1FlagNameDisable.setTransform(1230.25,-35.5);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.player1FlagNameDisable);
	}

	this.player2FlagName = new cjs.Text("", "normal 400 13px 'Assistant'");
	this.player2FlagName.name = "player2FlagName";
	this.player2FlagName.textAlign = "center";
	this.player2FlagName.lineHeight = 17;
	this.player2FlagName.lineWidth = 45;
	this.player2FlagName.parent = this;
	this.player2FlagName.setTransform(50.65,-35.5);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.player2FlagName);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.player2FlagName},{t:this.player1FlagNameDisable}]},1).wait(1));

	// text_box
	this.player1FlagName = new cjs.Text("", "normal 400 13px 'Assistant'");
	this.player1FlagName.name = "player1FlagName";
	this.player1FlagName.textAlign = "center";
	this.player1FlagName.lineHeight = 17;
	this.player1FlagName.lineWidth = 44;
	this.player1FlagName.parent = this;
	this.player1FlagName.setTransform(1230.25,-36.45);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.player1FlagName);
	}

	this.player2FlagNameDisable = new cjs.Text("", "normal 400 13px 'Assistant'", "#9D9D9D");
	this.player2FlagNameDisable.name = "player2FlagNameDisable";
	this.player2FlagNameDisable.textAlign = "center";
	this.player2FlagNameDisable.lineHeight = 17;
	this.player2FlagNameDisable.lineWidth = 44;
	this.player2FlagNameDisable.parent = this;
	this.player2FlagNameDisable.setTransform(50.7,-35.5);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.player2FlagNameDisable);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.player2FlagNameDisable},{t:this.player1FlagName}]}).to({state:[]},1).wait(1));

	// flag_player2
	this.P1Flag = new lib.flag();
	this.P1Flag.name = "P1Flag";
	this.P1Flag.setTransform(1230.2,-23.45,1,1,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.P1Flag).wait(1).to({y:-23.75},0).wait(1));

	// flag_player1
	this.P2Flag = new lib.flag();
	this.P2Flag.name = "P2Flag";
	this.P2Flag.setTransform(50.6,-23.45,1,1,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.P2Flag).wait(1).to({y:-23.75},0).wait(1));

	// static_wall
	this.instance = new lib.CachedBmp_835();
	this.instance.setTransform(-0.55,-84.5,0.3333,0.3333);

	this.instance_1 = new lib.CachedBmp_836();
	this.instance_1.setTransform(-0.55,-84.5,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-85,1281.6,302.2);


(lib.smal_pile_stones = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.stone_7();
	this.instance.setTransform(130,40.8,1,1,0,0,0,35.8,5.6);

	this.instance_1 = new lib.stone_6();
	this.instance_1.setTransform(14.4,39.55,1,1,0,0,0,3.8,3.1);

	this.instance_2 = new lib.stone_5();
	this.instance_2.setTransform(27.35,31.85,1,1,0,0,0,6.1,4.2);

	this.instance_3 = new lib.stone_4();
	this.instance_3.setTransform(64.95,31.65,1,1,0,0,0,11.5,5.9);

	this.instance_4 = new lib.stone_3();
	this.instance_4.setTransform(63.6,22.7,1,1,0,0,0,9.8,6.2);

	this.instance_5 = new lib.stone_2();
	this.instance_5.setTransform(89.1,22.7,1,1,0,0,0,7.8,6);

	this.instance_6 = new lib.stone_1();
	this.instance_6.setTransform(66.05,5,1,1,0,0,0,9.4,5);

	this.instance_7 = new lib.CachedBmp_784();
	this.instance_7.setTransform(16.65,3.1,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.smal_pile_stones, new cjs.Rectangle(11.6,0,95.30000000000001,49.8), null);


(lib.StaticWheel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy
	this.wheel = new lib.wheel();
	this.wheel.name = "wheel";
	this.wheel.setTransform(24.05,24.9,1,1,0,0,0,24.7,24.7);

	this.timeline.addTween(cjs.Tween.get(this.wheel).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.StaticWheel, new cjs.Rectangle(-0.6,0.2,49.300000000000004,49.3), null);


(lib.Spinning_Wheel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy
	this.wheel = new lib.wheel();
	this.wheel.name = "wheel";
	this.wheel.setTransform(24.05,24.9,1,1,0,0,0,24.7,24.7);

	this.timeline.addTween(cjs.Tween.get(this.wheel).wait(5).to({regY:24.6,rotation:75.3987,y:25},0).wait(5).to({rotation:119.3414,x:23.9},0).wait(5).to({regX:0,regY:0,rotation:0,x:-0.65,y:0.2},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-8.6,67.2,67.1);


(lib.MasterMovesHands = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// face
	this.instance = new lib.MasterAfraidFace();
	this.instance.setTransform(476.5,194.85,0.4292,0.4605,0,0,0,48.8,54.9);

	this.instance_1 = new lib.CachedBmp_625();
	this.instance_1.setTransform(449.95,190,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(54));

	// body
	this.instance_2 = new lib.Master_body();
	this.instance_2.setTransform(472.95,224.05,0.4078,0.464,0,0,0,17.1,26.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54));

	// right_hand
	this.instance_3 = new lib.Sleeve_2();
	this.instance_3.setTransform(477.4,220.1,0.4463,0.4269,0,-123.9883,62.9373,8.4,13.7);

	this.instance_4 = new lib.Sleeve_2();
	this.instance_4.setTransform(468.7,220.55,0.4476,0.4255,0,116.8426,110.0632,8.5,13.4);

	this.instance_5 = new lib.OpenHand2();
	this.instance_5.setTransform(461.9,216.55,0.0867,0.0828,0,-138.0261,48.8833,76.5,49.5);

	this.instance_6 = new lib.OpenHand2();
	this.instance_6.setTransform(483.7,215,0.089,0.0802,0,114.6434,110.3078,74.7,44.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6,p:{regX:74.7,regY:44.5,skewX:114.6434,skewY:110.3078,x:483.7,y:215}},{t:this.instance_5,p:{regX:76.5,regY:49.5,skewX:-138.0261,skewY:48.8833,x:461.9,y:216.55,scaleX:0.0867,scaleY:0.0828}},{t:this.instance_4,p:{regY:13.4,scaleY:0.4255,skewX:116.8426,skewY:110.0632,x:468.7,y:220.55,regX:8.5}},{t:this.instance_3,p:{regX:8.4,skewX:-123.9883,skewY:62.9373,x:477.4,y:220.1,regY:13.7,scaleY:0.4269}}]}).to({state:[{t:this.instance_6,p:{regX:74.6,regY:43.8,skewX:126.3465,skewY:122.0064,x:484.6,y:215.8}},{t:this.instance_5,p:{regX:77,regY:49.1,skewX:-145.2434,skewY:41.6738,x:461.25,y:217,scaleX:0.0867,scaleY:0.0828}},{t:this.instance_4,p:{regY:13.3,scaleY:0.4254,skewX:109.6262,skewY:102.8476,x:468.5,y:220.05,regX:8.5}},{t:this.instance_3,p:{regX:8.6,skewX:-112.2863,skewY:74.6394,x:477.35,y:219.55,regY:13.7,scaleY:0.4269}}]},4).to({state:[{t:this.instance_6,p:{regX:74.4,regY:43.1,skewX:139.8411,skewY:135.4931,x:484.8,y:217.9}},{t:this.instance_5,p:{regX:78,regY:49.1,skewX:-156.4698,skewY:30.4533,x:461,y:218.35,scaleX:0.0866,scaleY:0.0827}},{t:this.instance_4,p:{regY:13.3,scaleY:0.4254,skewX:98.4042,skewY:91.6253,x:468.7,y:220,regX:8.6}},{t:this.instance_3,p:{regX:8.8,skewX:-98.7966,skewY:88.1287,x:476.9,y:219.85,regY:13.8,scaleY:0.4268}}]},3).to({state:[{t:this.instance_6,p:{regX:74.7,regY:44.5,skewX:114.6434,skewY:110.3078,x:483.7,y:215}},{t:this.instance_5,p:{regX:76.5,regY:49.5,skewX:-138.0261,skewY:48.8833,x:461.9,y:216.55,scaleX:0.0867,scaleY:0.0828}},{t:this.instance_4,p:{regY:13.4,scaleY:0.4255,skewX:116.8426,skewY:110.0632,x:468.7,y:220.55,regX:8.5}},{t:this.instance_3,p:{regX:8.4,skewX:-123.9883,skewY:62.9373,x:477.4,y:220.1,regY:13.7,scaleY:0.4269}}]},3).to({state:[{t:this.instance_6,p:{regX:74.6,regY:43.8,skewX:126.3465,skewY:122.0064,x:484.6,y:215.8}},{t:this.instance_5,p:{regX:77,regY:49.1,skewX:-145.2434,skewY:41.6738,x:461.25,y:217,scaleX:0.0867,scaleY:0.0828}},{t:this.instance_4,p:{regY:13.3,scaleY:0.4254,skewX:109.6262,skewY:102.8476,x:468.5,y:220.05,regX:8.5}},{t:this.instance_3,p:{regX:8.6,skewX:-112.2863,skewY:74.6394,x:477.35,y:219.55,regY:13.7,scaleY:0.4269}}]},3).to({state:[{t:this.instance_6,p:{regX:74.4,regY:43.1,skewX:139.8411,skewY:135.4931,x:484.8,y:217.9}},{t:this.instance_5,p:{regX:78,regY:49.1,skewX:-156.4698,skewY:30.4533,x:461,y:218.35,scaleX:0.0866,scaleY:0.0827}},{t:this.instance_4,p:{regY:13.3,scaleY:0.4254,skewX:98.4042,skewY:91.6253,x:468.7,y:220,regX:8.6}},{t:this.instance_3,p:{regX:8.8,skewX:-98.7966,skewY:88.1287,x:476.9,y:219.85,regY:13.8,scaleY:0.4268}}]},3).to({state:[{t:this.instance_6,p:{regX:74.7,regY:44.5,skewX:114.6434,skewY:110.3078,x:483.7,y:215}},{t:this.instance_5,p:{regX:76.5,regY:49.5,skewX:-138.0261,skewY:48.8833,x:461.9,y:216.55,scaleX:0.0867,scaleY:0.0828}},{t:this.instance_4,p:{regY:13.4,scaleY:0.4255,skewX:116.8426,skewY:110.0632,x:468.7,y:220.55,regX:8.5}},{t:this.instance_3,p:{regX:8.4,skewX:-123.9883,skewY:62.9373,x:477.4,y:220.1,regY:13.7,scaleY:0.4269}}]},3).to({state:[{t:this.instance_6,p:{regX:74.6,regY:43.8,skewX:126.3465,skewY:122.0064,x:484.6,y:215.8}},{t:this.instance_5,p:{regX:77,regY:49.1,skewX:-145.2434,skewY:41.6738,x:461.25,y:217,scaleX:0.0867,scaleY:0.0828}},{t:this.instance_4,p:{regY:13.3,scaleY:0.4254,skewX:109.6262,skewY:102.8476,x:468.5,y:220.05,regX:8.5}},{t:this.instance_3,p:{regX:8.6,skewX:-112.2863,skewY:74.6394,x:477.35,y:219.55,regY:13.7,scaleY:0.4269}}]},4).to({state:[{t:this.instance_6,p:{regX:74.4,regY:43.1,skewX:139.8411,skewY:135.4931,x:484.8,y:217.9}},{t:this.instance_5,p:{regX:78,regY:49.1,skewX:-156.4698,skewY:30.4533,x:461,y:218.35,scaleX:0.0866,scaleY:0.0827}},{t:this.instance_4,p:{regY:13.3,scaleY:0.4254,skewX:98.4042,skewY:91.6253,x:468.7,y:220,regX:8.6}},{t:this.instance_3,p:{regX:8.8,skewX:-98.7966,skewY:88.1287,x:476.9,y:219.85,regY:13.8,scaleY:0.4268}}]},3).to({state:[{t:this.instance_6,p:{regX:74.4,regY:43.1,skewX:139.8411,skewY:135.4931,x:484.8,y:217.9}},{t:this.instance_5,p:{regX:78,regY:49.1,skewX:-156.4698,skewY:30.4533,x:461,y:218.35,scaleX:0.0866,scaleY:0.0827}},{t:this.instance_4,p:{regY:13.3,scaleY:0.4254,skewX:98.4042,skewY:91.6253,x:468.7,y:220,regX:8.6}},{t:this.instance_3,p:{regX:8.8,skewX:-98.7966,skewY:88.1287,x:476.9,y:219.85,regY:13.8,scaleY:0.4268}}]},3).to({state:[{t:this.instance_6,p:{regX:74.7,regY:44.5,skewX:114.6434,skewY:110.3078,x:483.7,y:215}},{t:this.instance_5,p:{regX:76.5,regY:49.5,skewX:-138.0261,skewY:48.8833,x:461.9,y:216.55,scaleX:0.0867,scaleY:0.0828}},{t:this.instance_4,p:{regY:13.4,scaleY:0.4255,skewX:116.8426,skewY:110.0632,x:468.7,y:220.55,regX:8.5}},{t:this.instance_3,p:{regX:8.4,skewX:-123.9883,skewY:62.9373,x:477.4,y:220.1,regY:13.7,scaleY:0.4269}}]},3).to({state:[{t:this.instance_6,p:{regX:74.6,regY:43.8,skewX:126.3465,skewY:122.0064,x:484.6,y:215.8}},{t:this.instance_5,p:{regX:77,regY:49.1,skewX:-145.2434,skewY:41.6738,x:461.25,y:217,scaleX:0.0867,scaleY:0.0828}},{t:this.instance_4,p:{regY:13.3,scaleY:0.4254,skewX:109.6262,skewY:102.8476,x:468.5,y:220.05,regX:8.5}},{t:this.instance_3,p:{regX:8.6,skewX:-112.2863,skewY:74.6394,x:477.35,y:219.55,regY:13.7,scaleY:0.4269}}]},4).to({state:[{t:this.instance_6,p:{regX:74.4,regY:43.1,skewX:139.8411,skewY:135.4931,x:484.8,y:217.9}},{t:this.instance_5,p:{regX:78,regY:49.1,skewX:-156.4698,skewY:30.4533,x:461,y:218.35,scaleX:0.0866,scaleY:0.0827}},{t:this.instance_4,p:{regY:13.3,scaleY:0.4254,skewX:98.4042,skewY:91.6253,x:468.7,y:220,regX:8.6}},{t:this.instance_3,p:{regX:8.8,skewX:-98.7966,skewY:88.1287,x:476.9,y:219.85,regY:13.8,scaleY:0.4268}}]},3).to({state:[{t:this.instance_6,p:{regX:74.4,regY:43.1,skewX:139.8411,skewY:135.4931,x:484.8,y:217.9}},{t:this.instance_5,p:{regX:78,regY:49.1,skewX:-156.4698,skewY:30.4533,x:461,y:218.35,scaleX:0.0866,scaleY:0.0827}},{t:this.instance_4,p:{regY:13.3,scaleY:0.4254,skewX:98.4042,skewY:91.6253,x:468.7,y:220,regX:8.6}},{t:this.instance_3,p:{regX:8.8,skewX:-98.7966,skewY:88.1287,x:476.9,y:219.85,regY:13.8,scaleY:0.4268}}]},3).to({state:[{t:this.instance_6,p:{regX:74.7,regY:44.5,skewX:114.6434,skewY:110.3078,x:483.7,y:215}},{t:this.instance_5,p:{regX:76.5,regY:49.5,skewX:-138.0261,skewY:48.8833,x:461.9,y:216.55,scaleX:0.0867,scaleY:0.0828}},{t:this.instance_4,p:{regY:13.4,scaleY:0.4255,skewX:116.8426,skewY:110.0632,x:468.7,y:220.55,regX:8.5}},{t:this.instance_3,p:{regX:8.4,skewX:-123.9883,skewY:62.9373,x:477.4,y:220.1,regY:13.7,scaleY:0.4269}}]},3).to({state:[{t:this.instance_6,p:{regX:74.6,regY:43.8,skewX:126.3465,skewY:122.0064,x:484.6,y:215.8}},{t:this.instance_5,p:{regX:77,regY:49.1,skewX:-145.2434,skewY:41.6738,x:461.25,y:217,scaleX:0.0867,scaleY:0.0828}},{t:this.instance_4,p:{regY:13.3,scaleY:0.4254,skewX:109.6262,skewY:102.8476,x:468.5,y:220.05,regX:8.5}},{t:this.instance_3,p:{regX:8.6,skewX:-112.2863,skewY:74.6394,x:477.35,y:219.55,regY:13.7,scaleY:0.4269}}]},4).to({state:[{t:this.instance_6,p:{regX:74.4,regY:43.1,skewX:139.8411,skewY:135.4931,x:484.8,y:217.9}},{t:this.instance_5,p:{regX:78,regY:49.1,skewX:-156.4698,skewY:30.4533,x:461,y:218.35,scaleX:0.0866,scaleY:0.0827}},{t:this.instance_4,p:{regY:13.3,scaleY:0.4254,skewX:98.4042,skewY:91.6253,x:468.7,y:220,regX:8.6}},{t:this.instance_3,p:{regX:8.8,skewX:-98.7966,skewY:88.1287,x:476.9,y:219.85,regY:13.8,scaleY:0.4268}}]},3).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(450,169.6,47.39999999999998,66.6);


(lib.Left_hand_master = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Sleeve_2();
	this.instance.setTransform(20,13.8,1,1,0,0,0,8.1,13.8);

	this.instance_1 = new lib.hand_2();
	this.instance_1.setTransform(11.2,19.5,1,1,0,0,0,11.2,9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Left_hand_master, new cjs.Rectangle(0,0,28,28.9), null);


(lib.hand_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.arm_1();
	this.instance.setTransform(6.2,6.6,1,1,0,0,0,6.2,6.6);

	this.instance_1 = new lib.Palm_1();
	this.instance_1.setTransform(14.95,15.3,1,1,0,0,0,5.8,4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hand_1, new cjs.Rectangle(0,0,20.7,19.9), null);


(lib.man_face_smilingtotheside = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.mouth_man_sad();
	this.instance.setTransform(29.05,41.05,0.7119,0.7119,0,180,0,11,5);

	this.instance_1 = new lib.CachedBmp_774();
	this.instance_1.setTransform(0,0,0.2061,0.2061);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.man_face_smilingtotheside, new cjs.Rectangle(0,0,88.9,74.2), null);


(lib.man_face_Sadtotheside = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.mouth_man_sad();
	this.instance.setTransform(30.3,44.8,0.7119,0.7119,-29.9983,0,0,10.8,5);

	this.instance_1 = new lib.CachedBmp_773();
	this.instance_1.setTransform(0,0,0.2189,0.2189);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.man_face_Sadtotheside, new cjs.Rectangle(0,0,88.9,74.2), null);


(lib.man_face = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Nose();
	this.instance.setTransform(17.75,34.55,1,1,0,0,0,9,8);

	this.instance_1 = new lib.CachedBmp_772();
	this.instance_1.setTransform(0,0,0.215,0.215);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.man_face, new cjs.Rectangle(0,0,88.8,74.2), null);


(lib.oneLampButtonSound = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// icon
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#723500").ss(2,1,2).p("A1CFPQKsCOfZs/");
	this.shape.setTransform(81.925,-29.2087);

	this.soundIcon = new lib.soundIcon();
	this.soundIcon.name = "soundIcon";
	this.soundIcon.setTransform(14.95,32.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.soundIcon},{t:this.shape}]}).to({state:[{t:this.soundIcon},{t:this.shape}]},1).wait(1));

	// button
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#723500").ss(1,0,0,4).p("AAAhcIAAC5");
	this.shape_1.setTransform(24.05,8.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#AC040D").ss(0.4,1,0,4).p("AAAhZIAACzAgThZIAACXAgJhZIAACmAgdhZIAACKAAKhZIAACzAAehZIAACXAAUhZIAACm");
	this.shape_2.setTransform(24.075,70.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(0.3).p("AgMiyIAAAAQACAAACAAIAAAAQACgBACAAIAHAAIABABIACAAIACAAQAvACAmAbQANAKANANQAxA0AABKQAAA1gZAqQgKARgOAPQgiAkgrAMQgSAEgTABIgJAAQgTgBgSgEQgrgMgigkQgOgPgKgRQgZgqAAg1QAAhKAxg0QAMgNAOgKQAlgbAvgCAgCiyIAFAAQABAAAAAAQAhACAZAbQAKAKAIANQAiA1AABJQAAA1gRAqQgHAQgKAPQgaApgiAKIgBAAQgGABgGABIgCAAIgKAAQgBAAAAAAIgCAAQgFgBgFgBQgjgJgbgqQgJgPgHgQQgRgqAAg1QAAhJAhg1QAJgNAJgKQAagcAigBgAgMiyQAEAAAGAAAAGiyQAEAAADAAQAcAFAWAYQAJAKAJANQAiA0AABKQAAA1gRAqQgHARgKAPQgZAnggAKQgDABgDABQgGABgHABAgRCyQgIgBgHgBQgwgKgmgoQgOgPgKgQQgZgqAAg1QAAhJAxg1QANgNAOgKQAjgZAsgEAgRCyQgDgBgDgBQgggKgZgnQgKgPgHgRQgRgqAAg1QAAhKAig0QAIgNAKgKQAWgYAcgFAANiyQAsAEAjAZQAOAKAMANQAxA1AABJQAAA1gZAqQgKAQgOAPQglAogwAKQgHABgIABQgFAAgGABAgEC0QgHgBgGgBAgICzQgFgBgEAA");
	this.shape_3.setTransform(24.075,39.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF995F").s().p("AAFACIAAAAgAgEACIgNgCIAJABIACAAIABAAIAKAAIACAAIALgBIgNACgAASAAIAPgBIgPABIAGAAIgGAAIgLABIAMgBIgMABIgCAAIgKAAIgBAAIgCAAIgKgBIAKABIgJgBIgGAAIAGAAIgPgBIAPABIANACQgTAAgSgDIAJAAIAJABIAFAAIASAAIATAAIABAAIAEAAIAJgBIAJAAQgSADgTAAIANgCgAgRAAIAAAAg");
	this.shape_4.setTransform(24.075,57.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9734").s().p("AAeDeIgKAAIgKAAIgKAAIgJAAIgKAAIgKAAIgzAAIAAg4QATAFAUACQASAEATABIAJAAQATgBASgEQAUgCATgFIAAA4gAAIi0IgCAAIgCAAIgBgBIgHAAIgEABIAAAAQgmABgiAIIAAgyIBQAAIBRAAIAAAyQgigIgngBg");
	this.shape_5.setTransform(24.075,39.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFB384","#FFEC8B"],[0,1],2.9,-16.6,-4.3,22.7).s().p("AAACyIgSAAQgjgJgbgpQgJgPgHgRQgRgqAAg1QAAhJAhg0QAJgOAJgKQAagbAigCIAFAAIABAAIgBAAIgFAAIgKABIAEgBIgEABIAKgBQgiACgaAbQgJAKgJAOQghA0AABJQAAA1ARAqQAHARAJAPQAbApAjAJIgFAAQgggKgZgnQgKgQgHgRQgRgqAAg1QAAhJAig1QAIgNAJgKQAXgYAcgEQgcAEgXAYQgJAKgIANQgiA1AABJQAAA1ARAqQAHARAKAQQAZAnAgAKIgJgBQgwgKgmgnQgOgPgKgRQgZgqAAg1QAAhJAxg0QANgOAOgKQAjgZAsgDIAAAAIAAAAQgsADgjAZQgOAKgNAOQgxA0AABJQAAA1AZAqQAKARAOAPQAmAnAwAKIgJgBQgrgLgigkQgOgQgKgRQgZgqAAg1QAAhJAxg1QAMgNAOgKQAlgbAvgCIAAAAIAEAAIAHAAIABAAQAhACAZAbQAKAKAIAOQAiA0AABJQAAA1gRAqQgHARgKAPQgaApgiAJIgBAAIgTAAgAAUCyQAigJAagpQAKgPAHgRQARgqAAg1QAAhJgig0QgIgOgKgKQgZgbghgCIACAAIACAAQAnABAiAIQAcAIAZAMQAUAKARANIADACQBEA0AABHQAAA2glAqQgNAPgSANIgDACQgoAegyANQgTAFgUACQArgLAigkQAOgQAKgRQAZgqAAg1QAAhJgxg1QgNgNgNgKQgmgbgvgCQAvACAmAbQANAKANANQAxA1AABJQAAA1gZAqQgKARgOAQQgiAkgrALIgJABQAwgKAlgnQAOgPAKgRQAZgqAAg1QAAhJgxg0QgMgOgOgKQgjgZgsgDQAcAEAWAYQAJAKAJANQAiA1AABJQAAA1gSAqQgGARgKAQQgZAnggAKIgEAAIAAAAgAANiwIgHgBIAHABgABRCBQAKgQAGgRQASgqAAg1QAAhJgig1QgJgNgJgKQgWgYgcgEQAsADAjAZQAOAKAMAOQAxA0AABJQAAA1gZAqQgKARgOAPQglAngwAKIgJABQAggKAZgngAAhCxIAAAAgAhQCpQgygNgpgeQgTgOgOgQIgFgFIgIgMQgYgkAAgrQAAgqAYgkIAIgLQAQgTAWgRQASgNAUgKQAZgMAcgIQAigIAmgBQgvACglAbQgOAKgMANQgxA1AABJQAAA1AZAqQAKARAOAQQAiAkArALQgUgCgTgFgAAEixg");
	this.shape_6.setTransform(24.075,39.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(0.3).p("AgMiyIAAAAQACAAACAAIAAAAQACgBACAAIAHAAIABABIACAAIACAAQAvACAmAbQANAKANANQAxA0AABKQAAA1gZAqQgKARgOAPQgiAkgrAMQgSAEgTABIgJAAQgHgBgGgBQgDgBgDgBQgggKgZgnQgKgPgHgRQgRgqAAg1QAAhKAig0QAIgNAKgKQAWgYAcgFgAgCiyIAFAAQABAAAAAAQAhACAZAbQAKAKAIANQAiA1AABJQAAA1gRAqQgHAQgKAPQgaApgiAKIgBAAQgGABgGABIgCAAIgKAAQgBAAAAAAIgCAAQgFgBgFgBQgjgJgbgqQgJgPgHgQQgRgqAAg1QAAhJAhg1QAJgNAJgKQAagcAigBgAgMiyQAEAAAGAAAAGiyQAEAAADAAQAsAEAjAZQAOAKAMANQAxA1AABJQAAA1gZAqQgKAQgOAPQglAogwAKQgHABgIABQgGABgHABAgRCyQgIgBgHgBQgwgKgmgoQgOgPgKgQQgZgqAAg1QAAhJAxg1QANgNAOgKQAjgZAsgEAgEC0QgTgBgSgEQgrgMgigkQgOgPgKgRQgZgqAAg1QAAhKAxg0QAMgNAOgKQAlgbAvgCAANiyQAcAFAWAYQAJAKAJANQAiA0AABKQAAA1gRAqQgHARgKAPQgZAnggAKQgDABgDABQgFAAgGABAgICzQgFgBgEAA");
	this.shape_7.setTransform(24.075,40.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FFB384","#FFEC8B"],[0,1],2.9,-16.6,-4.3,22.7).s().p("AgXCyQgggKgZgnQgKgQgHgRQgRgqAAg1QAAhJAig1QAIgNAJgKQAXgYAcgEIAAAAIAAAAQgsADgjAZQgOAKgNAOQgxA0AABJQAAA1AZAqQAKARAOAPQAmAnAwAKIgJgBQgrgLgigkQgOgQgKgRQgZgqAAg1QAAhJAxg1QAMgNAOgKQAlgbAvgCIAAAAIAEAAIAHAAIABAAIgBAAIgFAAIgKABIAEgBIgEABIAKgBQgiACgaAbQgJAKgJAOQghA0AABJQAAA1ARAqQAHARAJAPQAbApAjAJIgFAAgABQCAQAKgPAHgRQARgqAAg1QAAhJgig0QgIgOgKgKQgZgbghgCIACAAIACAAQAvACAmAbQANAKANANQAxA1AABJQAAA1gZAqQgKARgOAQQgiAkgrALIgJABQAwgKAlgnQAOgPAKgRQAZgqAAg1QAAhJgxg0QgMgOgOgKQgjgZgsgDIgHgBIAHABQAcAEAWAYQAJAKAJANQAiA1AABJQAAA1gSAqQgGARgKAQQgZAnggAKIgEAAQAigJAagpgAgMiwIAAAAgAgCixIAAAAg");
	this.shape_8.setTransform(24.075,39.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FF8051","#FFC67A"],[0,1],2.9,-16.6,-4.3,22.7).s().p("AAACyIgSAAQgjgJgbgqQgJgOgHgRQgRgqAAg1QAAhJAhg0QAJgOAJgKQAagcAigBIAFAAIABAAQAhACAZAbQAKAKAIAOQAiA0AABJQAAA1gRAqQgHARgKAOQgaAqgiAJIgBAAIgTAAgABRCAQAKgPAGgRQASgqAAg1QAAhJgig1QgJgNgJgKQgWgYgcgFQAsAEAjAZQAOAKAMAOQAxA0AABJQAAA1gZAqQgKARgOAOQglAogwAKIgJABQAggKAZgogAggCxQgwgKgmgoQgOgOgKgRQgZgqAAg1QAAhJAxg0QANgOAOgKQAjgZAsgEQgcAFgXAYQgJAKgIANQgiA1AABJQAAA1ARAqQAHARAKAPQAZAoAgAKIgJgBgAB3CAQAOgPAKgRQAZgqAAg1QAAhJgxg1QgNgNgNgKQgmgbgvgCQAnABAiAIQAcAHAZANQAUAKARANIADACQBEAzAABIQAAA2glAqQgNAPgSANIgDACQgoAegyANQgTAFgUACQArgLAiglgAhQCpQgygNgpgeQgTgOgOgQIgFgFIgIgMQgYgkAAgrQAAgqAYgkIAIgLQAQgTAWgRQASgNAUgKQAZgNAcgHQAigIAmgBQgvACglAbQgOAKgMANQgxA1AABJQAAA1AZAqQAKARAOAPQAiAlArALQgUgCgTgFg");
	this.shape_9.setTransform(24.075,39.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF995F").s().p("AAFACIAAAAgAgEACIgNgCIAJABIgJgBIANACQgTAAgSgDIAJAAIAPABIgGAAIAFAAIAKABIgKgBIASAAIATAAIABAAIAEAAIgGAAIAGAAIAJgBIgPABIAPgBIAJAAQgSADgTAAIANgCIgLABIgCAAIgKAAIgBAAIgCAAIACAAIABAAIAKAAIACAAIALgBIgNACgAAHABIAMgBIgMABgAgRAAIAAAAgAgggBIAJABIAGAAIgPgBg");
	this.shape_10.setTransform(24.075,57.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5,p:{y:39.7}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{y:70.9}},{t:this.shape_1,p:{y:8.25}}]}).to({state:[{t:this.shape_5,p:{y:40.2}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_1,p:{y:8.75}},{t:this.shape_2,p:{y:71.4}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.7,-65.7,271.3,147.10000000000002);


(lib.lampButtonSound = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// icon
	this.soundIcon = new lib.soundIcon();
	this.soundIcon.name = "soundIcon";
	this.soundIcon.setTransform(14.95,32.35);

	this.timeline.addTween(cjs.Tween.get(this.soundIcon).wait(2));

	// button
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AC040D").ss(0.4,1,0,4).p("AAAhZIAACzAgThZIAACXAgJhZIAACmAgdhZIAACKAAKhZIAACzAAehZIAACXAAUhZIAACm");
	this.shape.setTransform(24.075,71.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(0.3).p("AgMiyIAAAAQACAAACAAIAAAAQACgBACAAIAHAAIABABQAhACAZAbQAKAKAIANQAiA1AABJQAAA1gRAqQgHAQgKAPQgaApgiAKIgBAAQgGABgGABIgCAAIgKAAQgBAAAAAAIgCAAQgFgBgFgBQgjgJgbgqQgJgPgHgQQgRgqAAg1QAAhJAhg1QAJgNAJgKQAagcAigBIAFAAQABAAAAAAIACAAIACAAQAvACAmAbQANAKANANQAxA0AABKQAAA1gZAqQgKARgOAPQgiAkgrAMQgSAEgTABIgJAAQgHgBgGgBQgIgBgHgBQgwgKgmgoQgOgPgKgQQgZgqAAg1QAAhJAxg1QANgNAOgKQAjgZAsgEgAgMiyQAEAAAGAAAAGiyQAEAAADAAQAcAFAWAYQAJAKAJANQAiA0AABKQAAA1gRAqQgHARgKAPQgZAnggAKQgDABgDABQgGABgHABAgEC0QgTgBgSgEQgrgMgigkQgOgPgKgRQgZgqAAg1QAAhKAxg0QAMgNAOgKQAlgbAvgCAgRCyQgDgBgDgBQgggKgZgnQgKgPgHgRQgRgqAAg1QAAhKAig0QAIgNAKgKQAWgYAcgFAANiyQAsAEAjAZQAOAKAMANQAxA1AABJQAAA1gZAqQgKAQgOAPQglAogwAKQgHABgIABQgFAAgGABAgICzQgFgBgEAA");
	this.shape_1.setTransform(24.075,40.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#723500").ss(1,0,0,4).p("AAAhcIAAC5");
	this.shape_2.setTransform(24.05,8.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF995F").s().p("AAFACIAAAAgAgEACIgNgCIAJABIACAAIABAAIAKAAIACAAIALgBIgNACgAASAAIAPgBIgPABIAGAAIgGAAIgLABIAMgBIgMABIgCAAIgKAAIgBAAIgCAAIgKgBIAKABIgJgBIgGAAIAGAAIgPgBIAPABIANACQgTAAgSgDIAJAAIAJABIAFAAIASAAIATAAIABAAIAEAAIAJgBIAJAAQgSADgTAAIANgCgAgRAAIAAAAg");
	this.shape_3.setTransform(24.075,57.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9734").s().p("AAeDeIgKAAIgKAAIgKAAIgJAAIgKAAIgKAAIgzAAIAAg4QATAFAUACQASAEATABIAJAAQATgBASgEQAUgCATgFIAAA4gAAIi0IgCAAIgCAAIgBgBIgHAAIgEABIAAAAQgmABgiAIIAAgyIBQAAIBRAAIAAAyQgigIgngBg");
	this.shape_4.setTransform(24.075,40.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFB384","#FFEC8B"],[0,1],2.9,-16.6,-4.3,22.7).s().p("AAACyIgSAAQgjgJgbgpQgJgPgHgRQgRgqAAg1QAAhJAhg0QAJgOAJgKQAagbAigCQgiACgaAbQgJAKgJAOQghA0AABJQAAA1ARAqQAHARAJAPQAbApAjAJIgFAAQgggKgZgnQgKgQgHgRQgRgqAAg1QAAhJAig1QAIgNAJgKQAXgYAcgEQgcAEgXAYQgJAKgIANQgiA1AABJQAAA1ARAqQAHARAKAQQAZAnAgAKIgJgBQgwgKgmgnQgOgPgKgRQgZgqAAg1QAAhJAxg0QANgOAOgKQAjgZAsgDIAAAAIAAAAQgsADgjAZQgOAKgNAOQgxA0AABJQAAA1AZAqQAKARAOAPQAmAnAwAKIgJgBQgrgLgigkQgOgQgKgRQgZgqAAg1QAAhJAxg1QAMgNAOgKQAlgbAvgCIAAAAIAEAAIAHAAIABAAIgBAAIgFAAIAFAAIABAAQAhACAZAbQAKAKAIAOQAiA0AABJQAAA1gRAqQgHARgKAPQgaApgiAJIgBAAIgTAAgAgMiwIAKgBIgKABIAEgBIgEABgAAUCyQAigJAagpQAKgPAHgRQARgqAAg1QAAhJgig0QgIgOgKgKQgZgbghgCIACAAIACAAQAnABAiAIQAcAIAZAMQAUAKARANIADACQBEA0AABHQAAA2glAqQgNAPgSANIgDACQgoAegyANQgTAFgUACQArgLAigkQAOgQAKgRQAZgqAAg1QAAhJgxg1QgNgNgNgKQgmgbgvgCQAvACAmAbQANAKANANQAxA1AABJQAAA1gZAqQgKARgOAQQgiAkgrALIgJABQAwgKAlgnQAOgPAKgRQAZgqAAg1QAAhJgxg0QgMgOgOgKQgjgZgsgDQAcAEAWAYQAJAKAJANQAiA1AABJQAAA1gSAqQgGARgKAQQgZAnggAKIgEAAIAAAAgAANiwIgHgBIAHABgABRCBQAKgQAGgRQASgqAAg1QAAhJgig1QgJgNgJgKQgWgYgcgEQAsADAjAZQAOAKAMAOQAxA0AABJQAAA1gZAqQgKARgOAPQglAngwAKIgJABQAggKAZgngAAhCxIAAAAgAhQCpQgygNgpgeQgTgOgOgQIgFgFIgIgMQgYgkAAgrQAAgqAYgkIAIgLQAQgTAWgRQASgNAUgKQAZgMAcgIQAigIAmgBQgvACglAbQgOAKgMANQgxA1AABJQAAA1AZAqQAKARAOAQQAiAkArALQgUgCgTgFgAAEixg");
	this.shape_5.setTransform(24.075,39.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#AC040D").ss(0.4,1,0,4).p("AAUhZIAACmAAehZIAACXAAKhZIAACzAgdhZIAACKAgJhZIAACmAgThZIAACXAAAhZIAACz");
	this.shape_6.setTransform(24.075,71.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(0.3).p("AgMiyIAAAAQAEAAAGAAIAFAAQABAAAAAAIACAAIACAAQAvACAmAbQANAKANANQAxA0AABKQAAA1gZAqQgKARgOAPQgiAkgrAMQgSAEgTABIgJAAQgTgBgSgEQgrgMgigkQgOgPgKgRQgZgqAAg1QAAhKAxg0QAMgNAOgKQAlgbAvgCIAAAAQACgBACAAIAHAAIABABQAhACAZAbQAKAKAIANQAiA1AABJQAAA1gRAqQgHAQgKAPQgaApgiAKIgBAAQgGABgGABIgCAAIgKAAQgBAAAAAAIgCAAQgFgBgFgBQgjgJgbgqQgJgPgHgQQgRgqAAg1QAAhJAhg1QAJgNAJgKQAagcAigBAgMiyQACAAACAAAAGiyQAEAAADAAQAcAFAWAYQAJAKAJANQAiA0AABKQAAA1gRAqQgHARgKAPQgZAnggAKQgDABgDABQgFAAgGABAgRCyQgDgBgDgBQgggKgZgnQgKgPgHgRQgRgqAAg1QAAhKAig0QAIgNAKgKQAWgYAcgFAgRCyQgIgBgHgBQgwgKgmgoQgOgPgKgQQgZgqAAg1QAAhJAxg1QANgNAOgKQAjgZAsgEAANiyQAsAEAjAZQAOAKAMANQAxA1AABJQAAA1gZAqQgKAQgOAPQglAogwAKQgHABgIABQgGABgHABAgICzQgFgBgEAAAgEC0QgHgBgGgB");
	this.shape_7.setTransform(24.075,40.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FFB384","#FFEC8B"],[0,1],2.9,-16.6,-4.3,22.7).s().p("AgXCyQgggKgZgnQgKgQgHgRQgRgqAAg1QAAhJAig1QAIgNAJgKQAXgYAcgEIAAAAIAAAAQgsADgjAZQgOAKgNAOQgxA0AABJQAAA1AZAqQAKARAOAPQAmAnAwAKIgJgBQgrgLgigkQgOgQgKgRQgZgqAAg1QAAhJAxg1QAMgNAOgKQAlgbAvgCIAAAAIAEAAIAHAAIABAAIgBAAIgFAAIgKABIAKgBQgiACgaAbQgJAKgJAOQghA0AABJQAAA1ARAqQAHARAJAPQAbApAjAJIgFAAgAgMiwIAEgBIgEABgABQCAQAKgPAHgRQARgqAAg1QAAhJgig0QgIgOgKgKQgZgbghgCIACAAIACAAQAvACAmAbQANAKANANQAxA1AABJQAAA1gZAqQgKARgOAQQgiAkgrALIgJABQAwgKAlgnQAOgPAKgRQAZgqAAg1QAAhJgxg0QgMgOgOgKQgjgZgsgDIgHgBIAHABQAcAEAWAYQAJAKAJANQAiA1AABJQAAA1gSAqQgGARgKAQQgZAnggAKIgEAAQAigJAagpgAgCixIAAAAg");
	this.shape_8.setTransform(24.075,39.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FF8051","#FFC67A"],[0,1],2.9,-16.6,-4.3,22.7).s().p("AAACyIgSAAQgjgJgbgqQgJgOgHgRQgRgqAAg1QAAhJAhg0QAJgOAJgKQAagcAigBIAFAAIABAAQAhACAZAbQAKAKAIAOQAiA0AABJQAAA1gRAqQgHARgKAOQgaAqgiAJIgBAAIgTAAgABRCAQAKgPAGgRQASgqAAg1QAAhJgig1QgJgNgJgKQgWgYgcgFQAsAEAjAZQAOAKAMAOQAxA0AABJQAAA1gZAqQgKARgOAOQglAogwAKIgJABQAggKAZgogAggCxQgwgKgmgoQgOgOgKgRQgZgqAAg1QAAhJAxg0QANgOAOgKQAjgZAsgEQgcAFgXAYQgJAKgIANQgiA1AABJQAAA1ARAqQAHARAKAPQAZAoAgAKIgJgBgAB3CAQAOgPAKgRQAZgqAAg1QAAhJgxg1QgNgNgNgKQgmgbgvgCQAnABAiAIQAcAHAZANQAUAKARANIADACQBEAzAABIQAAA2glAqQgNAPgSANIgDACQgoAegyANQgTAFgUACQArgLAiglgAhQCpQgygNgpgeQgTgOgOgQIgFgFIgIgMQgYgkAAgrQAAgqAYgkIAIgLQAQgTAWgRQASgNAUgKQAZgNAcgHQAigIAmgBQgvACglAbQgOAKgMANQgxA1AABJQAAA1AZAqQAKARAOAPQAiAlArALQgUgCgTgFg");
	this.shape_9.setTransform(24.075,39.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF995F").s().p("AAFACIAAAAgAgEACIgNgCIANACQgTAAgSgDIAJAAIAPABIgGAAIAFAAIAKABIgKgBIASAAIATAAIABAAIAEAAIAJgBIgPABIAGAAIgGAAIAPgBIAJAAQgSADgTAAIANgCIgNACgAAFABIACAAIALgBIgLABIgCAAIgKAAIgBAAIgCAAIACAAIABAAIAKAAgAAHABIAMgBIgMABgAgIABIgJgBIAJABgAgggBIAJABIAGAAIgPgBg");
	this.shape_10.setTransform(24.075,57.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_2},{t:this.shape_6}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-1.5,48.4,82.9);


(lib.pauseScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// button
	this.continueGame = new lib.continuePlaying();
	this.continueGame.name = "continueGame";
	this.continueGame.setTransform(291.05,630.4,1,1,0,0,0,1.5,0);

	this.timeline.addTween(cjs.Tween.get(this.continueGame).wait(1));

	// character
	this.instance = new lib.PauseAnimation();
	this.instance.setTransform(564,418.95,1.391,1.391,0,0,0,92.2,121.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// text
	this.text = new cjs.Text("הזמן קצר והמלאכה מרובה", "normal 600 45px 'Assistant'", "#FFFFFF");
	this.text.textAlign = "right";
	this.text.lineHeight = 53;
	this.text.lineWidth = 547;
	this.text.parent = this;
	this.text.setTransform(1062.85,118);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.text_1 = new cjs.Text("חכם סיני פעם אמר", "normal 500 30px 'Assistant'", "#FFFFFF");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 35;
	this.text_1.lineWidth = 290;
	this.text_1.parent = this;
	this.text_1.setTransform(1062.15,80.6);
	this.text_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_1);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

	// framePause (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhCrAxEQkNAAi/i9Qi/i9ABkLMAAAhN9QgBkLC/i9QC/i9ENAAMCFWAAAQEOAAC/C9QC+C9ABELMAAABN9QgBELi+C9Qi/C9kOAAg");
	mask.setTransform(641.6,360.725);

	// basta
	this.instance_1 = new lib.CachedBmp_866();
	this.instance_1.setTransform(818.2,346.2,0.3333,0.3333);

	this.instance_2 = new lib.CachedBmp_865();
	this.instance_2.setTransform(854.05,362.5,0.3333,0.3333);

	this.instance_3 = new lib.CachedBmp_688();
	this.instance_3.setTransform(952.65,356.7,0.3333,0.3333);

	this.instance_4 = new lib.CachedBmp_687();
	this.instance_4.setTransform(825.25,338.15,0.3333,0.3333);

	this.instance_5 = new lib.CachedBmp_864();
	this.instance_5.setTransform(871,440.5,0.3333,0.3333);

	this.instance_6 = new lib.CachedBmp_685();
	this.instance_6.setTransform(956.55,378.75,0.3333,0.3333);

	var maskedShapeInstanceList = [this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// bricks
	this.instance_7 = new lib.CachedBmp_692();
	this.instance_7.setTransform(198.85,540.55,0.3333,0.3333);

	this.instance_8 = new lib.CachedBmp_691();
	this.instance_8.setTransform(784.95,587.3,0.3333,0.3333);

	var maskedShapeInstanceList = [this.instance_7,this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(1));

	// Ground
	this.instance_9 = new lib.CachedBmp_694();
	this.instance_9.setTransform(-16.05,486.05,0.3333,0.3333);

	this.instance_10 = new lib.CachedBmp_693();
	this.instance_10.setTransform(-0.3,445.5,0.3333,0.3333);

	var maskedShapeInstanceList = [this.instance_9,this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(1));

	// Trees
	this.instance_11 = new lib.CachedBmp_695();
	this.instance_11.setTransform(183.4,323.55,0.3333,0.3333);

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Green_mountains
	this.instance_12 = new lib.CachedBmp_697();
	this.instance_12.setTransform(963,397,0.3333,0.3333);

	this.instance_13 = new lib.CachedBmp_705();
	this.instance_13.setTransform(144.4,299.7,0.3333,0.3333);

	var maskedShapeInstanceList = [this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12}]}).wait(1));

	// singel_Brick
	this.instance_14 = new lib.CachedBmp_698();
	this.instance_14.setTransform(14.8,229.7,0.3333,0.3333);

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// fullWall
	this.instance_15 = new lib.CachedBmp_699();
	this.instance_15.setTransform(128.85,239.05,0.3333,0.3333);

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// clouds
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.208)").s().p("EhelAOhIlYh8IAAnOQCngXCLAJQC/AMBvBIQCeBnCiB2QBRA7AxAmQALgJATgNQAlgaAmgQQB5g0BSA+QBCAxBDA4QA4AnB3AqQCmA7CuASQj/A3lRAaQiyAOigAAQm6AAkqhqgEBROAOdQFdh2CChLQCDhMCMgTQBGgKAsAGQBQiFB1hiQA/g0BMghIAAHxQkzBXp/BIQjHAXjRASIipAOgEAs5AO1IjlgUIEagWQExgWB1AAQBPAADIgXQDlgaEBgrQK2h0HbilQExhrFKieQD2h2DriGIAADCQmzC9p+DpQtME0vrAkQh5AEh2AAQi7AAizgKgEA7yAHUQDUg0BlgvQCchKCBhwIAshuQAchFBdgVQAvgLApADQBphuBSiEQA3hZDAgYQBhgNBVAGIAVgsQAdg3Arg8QCJjBDcikQBfhJB2gkIGXAAIAjALIAANVQjpB6i0BNQmMCqvxChQk/AzlXArQjTAbhUAJIDLgsgEhHHAHHQzmgBpQlGIAAkAQFJDAHdCiQH1CsN3AOQG8AHFXgcQh/AQjNAQQmVAgmCAAIgMAAgEhcLgADQkniLjLiQIAArsIS1AAQDDBPArCAQAwCQAZC4QAMBcADA/IAvgZQA6gdA4gRQCyg3BZBTQCIB/BfCeIAYgNQAegPAegFQBggQA+BSQBjCDAhAhIA3gYQBHgTBTAVQBSAUDWAOQBsAHBaADQnpBCpOARQiaAFiPAAQu3AAm6jQgEA6+AAGQGCibDniBQC7hoE+kAQDPinDpjPIDbAAQpCI/s7FYQkEBrj+BIIjTA1IFdiFgAcMA6QBYgGBTgLQELgjB1hLQCJhZBZglQBWgkAyAIQBCALAsALIAIgTQAMgWATgTQA8g8BuAAQBuAABjAFIBNAGQgBgNAEgUQAHgnAVghQBFhoC5AAQCVAADMADQCTAABTgOQBSgOB5hHQA8gkAsghQiMB5jmCJQnOETnFBSQnGBRowAhQiuALimAEIiCACgEgjlgE7Qq3gumxhnQlJhOmsjBQkmiEktinIH9AAQI+FmQkDlQISBzGfArQkFgClbgYg");
	this.shape.setTransform(639.3412,120.0009,0.7822,0.7822);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// far_mountains
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(153,153,153,0.149)").s().p("EgRHAp/MguUgAWIAA7/IAZgRQIyl2EwiPQBFgyBjgIIAcAAQBRgJBCAbQBiApBICAIBWANQBcAYAgA2QAzBYAdAWQAuAiA0g4QAOgPAPgKQA4gqBFAMQBYAQAWBUQAKAiAdhHQAuh4AjhOQCUlLC7goIDXAXQDnAhBVA4QBvBJAiAAQAtAAA1hgQAeg0BHhFQBMhIBVgzQDaiIBwBaIASAPQAUAJAUALQCYBWCIDFQCbC0AdCYIAcgGQAkgHAegMQBjgpAThFQAWhQBbgVQAngJAgAJQAgAJALAYQALAaAfAZQAfAaAfAKQBTAbALhbQAFgtAohRQAFgLBVieQA6hsAkhSQAyh1AZhrQAyjbBpidQBmibBzgnQBbgeBvD1QAeBCA6COQA0B6AiA0QAzBMAyACQAeABAygiQAxgiAYAEQAmAFAkBTQBZDMAuA3QA7BHBAg+QASgSBvixQB/jLBiiAQFYnAEQA3QEOA3C8EAQArA9BKB7QA2BcAYATQBFAzEQIBIABACIgBgDIAbAmQAWAVAcAGQAvAIAlgrQAVgaAKggQBokyB6kTQBLipA/hvQAfg5AQgVQBMh+BehwIABgCIgBABQAzhBBKg6QA/gzA3gWIAA6FIABAAQAnAaAagMQCJg8CSgqQAugNCKA5QCRA7AYgBQArgCBEgMQAsgHAPAGQATAGAJAlQAHAeAKBfIA/aKIqngFIBSBkQA+BNAtBAIBCBgQA0BTAEArIAAACQAbCCBYD0QA5CfAlA/QAaAhAXADIgCADIACgCQAWgQBFAhQBEAfBQBCQDICgA/CrQAfBXCpBnQCQBYDXBWQC/BLCoArQCmArAigRQABAABaijQBli6BfhwQE6l1EDFwQGLI0DKBWQBAAbAkgYQASgMAFgSIA3ANQBEANBJAAQDmABCwh9QAlgaAdgrIAshNQA2hhBRgcQAxgRAUAHQAKAFAXAYQA2A5CZAAQAIAABNAVQBJARAOgMQAWgUAhAPQAHADA2AlQAoAbAbADQAnACAjgqQAZgdBaAMQAtAFAVgCQAigDASgVQB1iPBoA3QAbAOAtAiIAAcqIrrgGQACAEACACQgEgCgEgEMi8fgBYQBLB5AZA7QhQhThVhigEi19gNfIgu0DIgKgGQinhYCrhSQBkhIBxhOQB9hWCLhdIAAb/g");
	this.shape_1.setTransform(235.8619,175.3957);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// gradient_background2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#C9F1F8","#6FBCFD","#54C8F8","#BBF9FF","#EDB983"],[0,0.18,0.514,0.729,1],-37.4,-1254.7,-36.3,385.7).s().p("EhkXA4WMAAAhwrMDIvAAAMAAABwrg");
	this.shape_2.setTransform(642.125,361.025);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// framePause_svg_copy
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EhDkAyKQkRAAjCjCQjBjBAAkRMAAAhPrQAAkRDBjCQDCjAERgBMCHJAAAQERABDCDAQDADCABERMAAABPrQgBERjADBQjCDCkRAAg");
	this.shape_3.setTransform(641.35,361.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// black_backgroud
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#723500").ss(2,0,0,4).p("EhkCAAAMDIFAAA");
	this.shape_4.setTransform(641.025,-0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.576)").s().p("EhkgA4bMAAAhw1IA8AAMDIFAAAMAAABw1g");
	this.shape_5.setTransform(638.025,360.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pauseScreen, new cjs.Rectangle(-5.3,-1.5,1287.7,723.1), null);


(lib.gameSelectionScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// button
	this.enterToSelectedGameBtn = new lib.enterToSelectedGame();
	this.enterToSelectedGameBtn.name = "enterToSelectedGameBtn";
	this.enterToSelectedGameBtn.setTransform(349.8,71.1);

	this.timeline.addTween(cjs.Tween.get(this.enterToSelectedGameBtn).wait(1));

	// comboBox
	this.enterBtnCSS = new lib.an_CSS({'id': 'enterBtnCSS', 'href':'assets/customComponnetCss.css'});

	this.enterBtnCSS.name = "enterBtnCSS";
	this.enterBtnCSS.setTransform(-10,141.5,1,1,0,0,0,50,11);

	this.comboBox = new lib.an_ComboBox({'id': 'comboBox', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 3, בחר נושא, -1, סין - מדינה מיוחדת, 0, מדעים לכיתה ב׳, 1', 'value':'-1', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.comboBox.name = "comboBox";
	this.comboBox.setTransform(346.2,16.85,1.96,1.96,0,0,0,50.1,10.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.comboBox},{t:this.enterBtnCSS}]}).wait(1));

	// lamps_login_screen_svg
	this.text = new cjs.Text("שניים סינים", "normal 700 31px 'Assistant'", "#5A0800");
	this.text.textAlign = "center";
	this.text.lineHeight = 37;
	this.text.lineWidth = 216;
	this.text.parent = this;
	this.text.setTransform(367.7105,-175.5664,1,1,6.9553);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.3).p("A84pCQA/AOAwBKQA6BbAACAQAACAg6BbQgqBBg4ASQgHACgHACQgKABgLAAIgOAAQgOgBgNgDQg8gQgthFQg5haAAiAQAAiAA5haQA4hXBOgDA84pCQBkAKBLBPQBUBaAACAQAACAhUBaQg9BBhQASQgRADgSACQgKACgKABIgQAAQgKgBgKgCQgHgCgGgBQg4gTgrhBQg6haAAiBQAAiAA6hbQAwhKBAgOQAHgBAHgBIATgBQAHAAAHABQBsAGBOBUQBVBbAACAQAACBhVBaQg5A8hKAUQggAJgiABA9xpCQALgBAMAAIALAAQALAAAMABA9QpFQAMABAMACA9PpDQBNADA4BXQA5BaAACAQAACAg5BaQgtBFg6AQQgOADgPABA9xAjQgRgCgQgDQhRgSg+hBQhUhaAAiAQAAiABUhaQBLhPBlgKA9dAmQgigBgfgJQhKgUg6g8QhVhbAAiAQAAiABVhbQBQhVBvgFA9cAkQgKAAgLgBAdNglIAPAAIACABIACAAIAEAAQBvAFBQBUQBVBaAACBQAACAhVBbQg6A+hLAUQgeAIgiABIgQAAQgMgBgMgDQgFgBgEgBQg4gSgrhDQg6hbAAiAQAAiBA6haQAyhMBDgLQAIgCAJAAIAMAAQAIAAAJACQBDALAxBMQA6BaAACBQAACAg6BbQgqBDg4ASQgFABgEABQgLABgMABIgUAAQgMgBgKgDQg9gPgthHQg5haAAiAQAAiAA5haQA3hWBOgEAc/giQAHgCAHgBAdOJGQgigBgegIQhLgUg6g+QhVhbAAiAQAAiBBVhaQBQhUBugFIAGgBAdggkQAGAAAHACQBpAHBMBRQBUBaAACAQAACAhUBaQhABEhUAQQgMADgMABQgMADgMABAc2JCQgMgBgMgDQhUgQhAhEQhVhaAAiAQAAiABVhaQBMhRBpgHAdcgkQBNAEA3BWQA6BaAACAQAACAg6BaQgtBHg8APQgMADgMABAdLJEQgLgBgKgB");
	this.shape.setTransform(367.375,-229.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#AC040D").ss(0.4,1,0,4).p("A94mqIAAEGA+JmqIAADwA8ymqIAAEgA8gmqIAAEGA9DmqIAAE2A9VmqIAAE2A9mmqIAAEgAciB1IAADwAczB1IAAEFAdEB1IAAEgAdWB1IAAE2Ad5B1IAAEgAdoB1IAAE2AeKB1IAAEF");
	this.shape_1.setTransform(367.375,-175.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#723500").ss(1,0,0,4).p("A9UmvIgBFAAdWBxIAAAHIAAE4");
	this.shape_2.setTransform(367.375,-283.5754);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#AC040D").ss(1.4,1,0,4).p("ABikOIhAIOACGkJIg8HdAgrkfIg7HdAhPkjIg2G2AA/kSIhFI2AAbkWIhFI2AgIkbIhAIO");
	this.shape_3.setTransform(356.575,-76.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#723500").ss(2,0,0,4).p("EBUoAMVQlxgKp3gvQgvgDgwgEQhrgIhsgJQhmgIhngJQjsgVjvgYQi0gSi0gTQgegEgegDQg8gHg8gGQoDg7oLhJQoxhOoghbQoghboPhnQqeiEqFiZQnnh0nTh+Qs3jfr1kAQgngNgngNQpXjOotjhAauG+IhyOk");
	this.shape_4.setTransform(212.5268,-336.1526);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFB384","#FFEC8B"],[0,1],4.9,-28.5,-7.4,39.1).s().p("AggEyQg8gPguhHQg5haAAiAQAAh+A5hbQA4hXBNgDQhNADg4BXQg5BbAAB+QAACAA5BaQAuBHA8APIgIAAQg4gSgrhDQg5haAAiBQAAh/A5hbQAyhNBDgLQhoAIhNBRQhVBbABB+QgBCABVBaQBABEBUAQIgQgBQhLgTg6g/QhUhaAAiBQAAh/BUhbQBQhUBugGIAGAAIgOACIAOgCIAOAAIACAAIACAAIAEAAQBvAGBQBUQBVBbAAB/QAACBhVBaQg6A+hKAUQBKgUA6g+QBVhaAAiBQAAh/hVhbQhQhUhvgGQBCABA7APQBWAXBGAzIAFAEQB1BZAAB7QAAB8h1BZIgFAEQhGA0hWAWQggAHgiAFIgRABQBUgQBAhEQBUhaABiAQgBh+hUhbQhMhRhpgIQBEALAwBNQA7BbAAB/QAACBg7BaQgqBDg4ASIgIAAQA8gPAthHQA6haAAiAQAAh+g6hbQg2hXhOgDIARABIgNgCIANACIgRgBIgLAAIgRABIARgBIALAAQBOADA2BXQA6BbAAB+QAACAg6BaQgtBHg8APIghABIgggBgACLDdQA7haAAiBQAAh/g7hbQgwhNhEgLQBpAIBMBRQBUBbABB+QgBCAhUBaQhABEhUAQIgPACQA4gSAqhDgAg3EwQhUgQhAhEQhVhaABiAQgBh+BVhbQBNhRBogIQhDALgyBNQg5BbAAB/QAACBA5BaQArBDA4ASIgPgCgAA4EwIAAAAgAiKEjQhXgWhFg0QgngdgaggIgQgVQgpg9AAhKQAAhJApg+IAQgUQAaggAngdQBFgzBXgXQA6gPBCgBQhuAGhQBUQhUBbAAB/QAACBBUBaQA6A/BLATQgjgFgggHg");
	this.shape_5.setTransform(555.15,-202.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFB384","#FFD588","#FFEC8B"],[0,0.561,1],69.3,37.6,-54.1,-48).s().p("ANkHqIp8hPIAAgCIn7g/IAAABIquhVQg+gIglgwQgngxAIg+IA5nGQAHg+AxgmQAxglA9AHIcmDkQA+AHAmAyQAmAwgIA+Ig4HGQgIA+gxAlQgpAggyAAIgUgBg");
	this.shape_6.setTransform(365.05,-160.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FFB384","#FFEC8B"],[0,1],4.9,-28.4,-7.4,39.2).s().p("AgoEyQg4gSgrhCQg6hbAAiAQAAiAA6haQAwhLBAgNQhlAKhLBPQhUBaAAB/QAACABUBaQA+BCBRARIgMgBQhKgUg6g9QhVhbAAiAQAAh/BVhbQBQhVBvgFIASgBIAOABQBsAGBOBUQBVBbAAB/QAACAhVBbQg5A9hKAUIgLABQBQgSA9hBQBUhaAAiAQAAh/hUhaQhLhPhkgKQA/ANAwBLQA6BbAAB/QAACAg6BbQgqBCg4ASIgGAAQA6gPAthGQA5hbAAh/QAAh/g5haQg4hXhNgDQALAAAMABQgMgBgLAAIgKAAQgMAAgLABIAOgCIgOACQALgBAMAAQhOADg4BXQg5BaAAB/QAACAA5BaQAtBGA8AQIgHgBgAAdkvQgMgCgMgBQAMABAMACgAgbkvIAAAAgAAGkwIAAAAg");
	this.shape_7.setTransform(179.575,-257.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FFA47C","#FFEC8B"],[0,1],4.9,-28.4,-7.4,39.2).s().p("AghEyQg8gQgthGQg5haAAiAQAAh+A5haQA4hYBOgDIAKAAQBNADA4BYQA5BaAAB+QAACAg5BaQgtBGg6AQIgkABIghgBgAg8EwQhRgSg+hCQhUhaAAiAQAAh+BUhaQBLhQBlgJQhAANgwBKQg6BbAAB/QAACBA6BaQArBDA4ASIgUgCgACMDdQA6hbAAiAQAAh/g6hbQgwhKg/gNQBkAJBLBQQBUBaAAB+QAACAhUBaQg9BChQASIgVABQA4gRAqhDgAiKEiQhWgWhGgzQh6haAAh/QAAh+B6haQBGg0BWgWQA7gPBCgBQhvAFhQBVQhVBbAAB/QAACABVBbQA6A+BKAUQgigFgggIgADNDdQBVhaAAiBQAAh/hVhbQhOhThsgHQA/ACA5AOQBWAWBGA0QB6BaAAB+QAAB/h6BaQhGAzhWAWQggAIghAEQBKgTA5g+g");
	this.shape_8.setTransform(179.575,-257.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9734").s().p("AeKKOIgRAAIgRAAIgSAAIgSAAIgRAAIgRAAIhXAAIAAhhQAgAIAjAEQAeAIAiABIAQAAQAigBAegIQAjgEAggIIAABhgA8gBuIgSAAIgRAAIgSAAIgRAAIgSAAIgRAAIhXAAIAAhhQAgAIAiAEQAfAJAiAAIAQAAQAiAAAggJQAhgEAggIIAABhgAdkgnIgEAAIgCAAIgCAAIgPAAIgGAAQhCABg6APIAAhWICLAAICLAAIAABWQg7gPhCgBgA9CpHIgOgBIgTABQhCABg7APIAAhWICLAAICLAAIAABWQg5gPg/gBg");
	this.shape_9.setTransform(367.375,-229.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF995F").s().p("AAaJjIgjgFIgjgEIgkgEIgkgFIgjgEIgkgEIiHgRIAYi+IAAgBIH7A+IAAADIgXC8gAdfhMQAMgBALgCQgLACgMABIgRAAQghgBgfgIIAQACIAPABIAIABIAhAAIAhAAIAIgBIAPgBIARgCQgfAIghABIAAAAgAdOhMQgMgBgMgCIAWABQgNgBgKgCQAKACANABIgWgBQAMACAMABgAdghOIAWgBIgWABQAMgBALgCQgLACgMABIgUAAIAUAAIAAAAgAd2hPIAYgEIgYAEgAd2hPIAJgDIgJADgAc2hPIgJgDIAJADIgYgEIAYAEIAAAAgAdghOIAAAAgAc2hPIAAAAgA9NpsIAAAAgA9cpsQgLAAgKgCIAWABIgWgBQgRgCgQgEQAQAEARACQAKACALAAQgigBgggIIAMABIAUACIANAEIgNgEIAHABQANADAPABQgPgBgNgDIAiAAIAkgBQgOAEgPABQAPgBAOgEIAGAAIgNAEIANgEIAWgCQgSAEgRACQARgCASgEIALgBQghAIgiABQALAAAKgCQgKACgLAAgA9OptIAWgBIgWABIgNAAIANAAgA9xpuIAAAAg");
	this.shape_10.setTransform(367.35,-163.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	// pagoda
	this.instance = new lib.CachedBmp_669();
	this.instance.setTransform(-463.7,-287.8,0.3333,0.3333);

	this.instance_1 = new lib.CachedBmp_668();
	this.instance_1.setTransform(-463.7,-287.8,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// birds
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.286)").s().p("EAu2ATvQg2gkgkAVQgMAGgIAMIgGAKQgEALgEgGIgCgFIAAAAQgIgSgSgKQglgVg1AkQguAfAJgQQAXgeAggQQA7geAsA0QArg0A7AeQAhAQAXAeQADAFgDAAQgHAAgegUgEAk5ASvQAOgiAbgZQAxgtA4AmQAbg+BBAMQAkAHAeAWQAIAIgTgEQgOgCgOgFQg9gVgeAeQgOAPgDASQAAANgGgEIgDgFIgBABQgMgPgVgFQgpgKgpAyQgKALgKAKQgIAHgDAAQgCAAABgFgEgoHgFeIgBAAQgFgMgLgGQgXgOgiAYQgeATAGgKQAPgTAUgKQAmgTAcAhQAbghAmATQAUAKAPATQAEAHgcgQQghgYgYAOIgQASQgCAFgBAAQgCAAgBgFgEgt6gJGQgFgKgLgGQgXgOgiAYQgcASAEgJQAPgTAUgKQAmgTAcAhQAbghAmATQAUAKAPATQADAGgLgGIgQgJQghgYgYAOIgQARIgCAEIgBABQgCAAgCgGgEgo3gJ3QgHgGgFgHQgagggaAHIgVAMIgDADQgEADABgIQgCgMgJgJQgTgUgnANQgHADgLACQgMADAFgFQATgOAXgFQApgHASAnQAjgZAfAdQARAQAJAWQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAAAQgCAAgFgFgEAu0gRMQg1glglAVQgLAHgJALIgGALQgDAKgEgGIgCgFIgBABQgHgSgTgLQgkgVg2AlQguAfAJgRQAXgdAhgRQA7gdArA0QAsg0A7AdQAgARAXAdQAEAGgEAAQgGAAgfgUgEAk4gSMIAFgLQANgcAXgUQAwgtA4AmQAcg/BBANQAjAHAfAWQAIAIgUgEQgOgDgOgFQg9gUgdAeQgPAPgCASQAAANgGgFIgEgEIAAAAQgMgPgVgFQgpgKgqAyIgLANIgIAIQgIAIgDAAQgCAAABgFg");
	this.shape_11.setTransform(17.3744,-225.7676);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// Green_mountains
	this.instance_2 = new lib.CachedBmp_671();
	this.instance_2.setTransform(-617.55,187.65,0.3333,0.3333);

	this.instance_3 = new lib.CachedBmp_670();
	this.instance_3.setTransform(-662.25,131.95,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// mask_wall (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgnXAvIIAAzLIjw5NIDwsDIAA8XIBzlLIDXkSMAqXAAAIEZDbIAAMFIDjFxIjjHnIloTrIFoI8Ii0FxIC0FhICfZeg");
	mask.setTransform(-275.975,226.975);

	// wall
	this.instance_4 = new lib.CachedBmp_672();
	this.instance_4.setTransform(-573.35,-220.6,0.3333,0.3333);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// clouds
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.208)").s().p("EhfDAOhIlYh8IAAnOQCngXCLAJQC/AMBvBIQCeBnCiB2QBRA7AxAmQALgJATgNQAlgaAmgQQB5g0BSA+QBCAxBDA4QA4AnB3AqQCmA7CuASQj/A3lRAaQiyAOigAAQm6AAkqhqgEBRsAOJQFdh2CChLQCDhMCMgTQBGgKAsAGQBQiFB1hiQA/g0BMghIAAHxQkzBXp/BIQjHAXjRASIipAOgEAtXAOhIjlgUIEagWQExgWB1AAQBPAADIgXQDlgaEBgrQK2h0HbilQExhrFKieQD2h2DriGIAADCQmzC9p+DpQtME0vrAkQh5AEh2AAQi7AAizgKgEA8QAHAQDUg0BlgvQCchKCBhwIAshuQAchEBdgWQAvgLApADQBphuBSiEQA3hZDAgYQBhgNBVAGIAVgsQAdg3Arg8QCJjBDcikQBfhJB2gkIGXAAIAjALIAANVQjpB6i0BNQmMCqvxChQk/AzlXArQjTAbhUAJIDLgsgEhHlAHHQzmgBpQlGIAAkAQFJDAHdCiQH1CsN3AOQG8AHFXgcQh/AQjNAQQmVAgmCAAIgMAAgEhcpgADQkniLjLiQIAArsIS1AAQDDBPArCAQAwCQAZC4QAMBcADA/IAvgZQA6gdA4gRQCyg3BZBTQCIB/BfCeIAYgNQAegPAegFQBggQA+BSQBjCDAhAhIA3gYQBHgTBTAVQBSAUDWAOQBsAHBaADQnpBCpOARQiaAFiPAAQu3AAm6jQgEA7cgANQGCicDniBQC7hoE+kAQDPinDpjPIDbAAQpCI/s7FYQkEBsj+BHIjTA1IFdiEgAcqAmQBYgGBTgLQELgiB1hMQCJhZBZglQBWgkAyAIQBCALAsALIAIgTQAMgWATgTQA8g8BuAAQBuAABjAFIBNAGQgBgNAEgUQAHgnAVghQBFhoC5AAQCVAADMADQCTAABTgOQBSgOB5hHQA8gkAsghQiMB5jmCJQnOETnFBSQnGBSowAgQiuALimAEIiCACgEgkDgE7Qq3gumxhnQlJhOmsjBQkmiEktinIH9AAQI+FmQkDlQISBzGfArQkFgClbgYg");
	this.shape_12.setTransform(1.4524,-275.9602,1.0109,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

	// far_mountains
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(153,153,153,0.086)").s().p("EhHvAYrMgvDgAXIgpxaIgJgFQiUhNCXhHQDEiKD7ihQHzlFEOh8QA9grBYgHIAZgBQBJgHA6AXQBXAkBABvIBNALQBRAVAcAvQAuBNAaATQApAdAugxQA7g9BOAOQBOANAUBKQAIAdAbg+QAohoAfhEQCDkfCngjIC/AUQDNAdBMAxQBjA/AdAAQAoAAAwhTQAbguA/g7QBDhABMgtQDBh1BkBOIAQAMQASAIASAKQCIBMB5CrQCJCcAaCEIAZgFQAggGAbgLQBXgjARg8QAUhGBRgSQAjgIAcAIQAdAIAJAVQAKAXAcAVQAbAXAcAJQBKAXAJhPQAEgnAkhGQAEgKBMiJQA0hfAghIQAshlAWhdQAti+BdiJQBbiGBmgiQBRgaBiDUQAbA6A0B8QAuBpAeAuQAtBBAtACQAbABAsgeQAsgdAVADQAiAFAgBIQBPCxAoAxQA1A9A5g2QAQgPBiiaQByixBXhvQExmGDyAxQDwAvCnDfQAmA0BBBsQAwBQAWAQQAsAgCND2QA0BbBCB6IABACIgBgDIAYAhQATASAZAFQAqAHAgglQATgXAJgcQBckKBtjvQBDiTA4hhQAbgxAPgSQBDhtBThiIACgCIgCABQAug4BCgzQBYhEBHgJQAngKAXAOIACABIAEADQA8AuCeDAQA3BDAoA4IA6BTQAvBIAEAlIAAACQAYBxBNDUQAzCLAhA2QAYAdAUADIgCADIACgCQATgOA+AcQA8AcBHA5QCyCLA4CVQAaBFCCBSIAWAOQCABLC/BKQCpBCCWAlQCTAmAegPQACgBBPiNQAuhRAthCQAqg/AqgwQEXlEDmFAQArA9ApA2QEiF/CdBCQA4AXAggVQARgKAEgQIAwAMQA+ALBAAAQDNABCchtQAhgXAaglIAnhDQAwhUBHgYQAsgPASAGQAJAEAVAVQAvAyCIAAQAIAABDASQBCAPAMgLQAUgRAdANQAGADAwAgQAkAXAYACQAjACAfgkQAWgaBQALQAoAFASgCQAegDAQgSQBoh7BdAuQAYAMApAfQAiAWAYgKQB5g0CDgkQAogLB7AwQA5AXAkANQAtAQAMgBQAmgCA8gKQAogGANAEQARAGAIAgQAGAaAJBSIA4WvI3/gMIAEAFIgHgFMinhgBNQBCBqAXAzQhIhIhMhVg");
	this.shape_13.setTransform(-10.1068,112.0045);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	// gradient_background
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#C9F1F8","#3EA6FF","#3EC8F8","#BBF9FF","#EDB983"],[0,0.18,0.514,0.729,1],-33.3,-935.2,-32.4,369).s().p("EhkrA4WMAAAhwrMDJXAAAMAAABwrg");
	this.shape_14.setTransform(2.075,-18.875);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gameSelectionScreen, new cjs.Rectangle(-782.7,-474.1,1545.3000000000002,1002.7), null);


(lib.PossibleAnswersGIF = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// text_box
	this.text = new cjs.Text("תשובה לא נכונה", "normal 400 17px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 119;
	this.text.parent = this;
	this.text.setTransform(74.4,51.1);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(4));

	// rod
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AK1L7IAAgQIAA1OQAAg7gtgoQgsgpg/gBIw5AAQg/ABgtApQgsAoAAA7IAAVNIAAARQAAAJgKABQgKgBAAgJIAAgQIAA1OQAAhCAygwQAzguBHgBIQ5AAQBHABAzAuQAyAwAABCIAAVNIAAARQAAADgDADQgDAEgEAAQgKgBAAgJg");
	this.shape.setTransform(73.85,77.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DCB286").s().p("AKjAMQgLgFAAgHQAAgGALgFQAHgDAIgBIAAAPQAAAKAKAAQAEAAADgDQADgDAAgEIAAgQQAMABAIAEQALAFAAAGQAAAHgLAFQgLAFgRAAQgQAAgLgFgArZAMQgLgFAAgHQAAgGALgFQAGgDAIgBIAAAPQAAAKAKAAQAKAAAAgKIAAgQQAMABAJAEQAMAFAAAGQAAAHgMAFQgLAFgQAAQgRAAgLgFg");
	this.shape_1.setTransform(74.125,153.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AK1L7IAAgQIAA1OQAAg7gtgoQgsgpg/gBIw5AAQg/ABgtApQgsAoAAA7IAAVNIAAARQAAAJgKABQgKgBAAgJIAAgQIAA1OQAAhCAygwQAzguBHgBIQ5AAQBHABAzAuQAyAwAABCIAAVNIAAARQAAADgDADQgDAEgEAAQgKgBAAgJg");
	this.shape_2.setTransform(73.85,77.25);

	this.instance = new lib.CachedBmp_453();
	this.instance.setTransform(0,151.7,0.3333,0.3333);

	this.instance_1 = new lib.CachedBmp_650();
	this.instance_1.setTransform(2.5,0,0.3333,0.3333);

	this.instance_2 = new lib.CachedBmp_455();
	this.instance_2.setTransform(0,151.7,0.3333,0.3333);

	this.instance_3 = new lib.CachedBmp_652();
	this.instance_3.setTransform(2.5,0,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).wait(1));

	// Staples
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AINBSIAAijIASAAIAACjgAoeBSIAAijIARAAIAACjg");
	this.shape_3.setTransform(75,8.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AIKAMQgFgFAAgHQAAgGAFgFQAGgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgHAAgFgFgAohAMQgFgFAAgHQAAgGAFgFQAGgFAHAAQAHAAAEAFQAGAFAAAGQAAAHgGAFQgEAFgHAAQgHAAgGgFg");
	this.shape_4.setTransform(74.95,19.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AIKAMQgFgFAAgHQAAgGAFgFQAFgFAHAAQAHAAAGAFQAFAFAAAGQAAAHgFAFQgGAFgHAAQgHAAgFgFgAoiAMQgFgFAAgHQAAgGAFgFQAFgFAHAAQAHAAAGAFQAFAFAAAGQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_5.setTransform(74.975,19);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AIOBSIAAijIARAAIAACjgAoeBSIAAijIARAAIAACjg");
	this.shape_6.setTransform(74.975,8.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.shape_3},{t:this.shape_4}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

	// paper
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("An4IwQgyAAgigjQgkgjAAgyIAAtwQAAgxAjgjQAigjAzAAIPwAAQAyAAAkAjQAjAjAAAxIAANwQAAAygjAjQgjAjgyAAg");
	this.shape_7.setTransform(74.6,66.475);

	this.instance_4 = new lib.ChooseAnswer();
	this.instance_4.setTransform(74.6,66.45,1,1,0,0,0,62.5,56);
	this.instance_4.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,13);

	this.instance_5 = new lib.CorrectAnswer();
	this.instance_5.setTransform(76.15,66.4,1,1,0,0,0,64.1,56);
	this.instance_5.shadow = new cjs.Shadow("rgba(94,199,59,1)",0,0,13);

	this.instance_6 = new lib.IncorrectAnswer();
	this.instance_6.setTransform(74.55,66.4,1,1,0,0,0,62.5,56);
	this.instance_6.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

	// bricks
	this.instance_7 = new lib.CachedBmp_456();
	this.instance_7.setTransform(14.35,155.5,0.3333,0.3333);

	this.instance_8 = new lib.CachedBmp_457();
	this.instance_8.setTransform(14.35,155.5,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[]},2).to({state:[{t:this.instance_8}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.9,-4.6,162,216.5);


(lib.PossibleAnswersCorrectGIF = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// text_box
	this.text = new cjs.Text("תשובה נכונה", "normal 400 17px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 119;
	this.text.parent = this;
	this.text.setTransform(74.4,51.1);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(4));

	// rod
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AK1L7IAAgQIAA1OQAAg7gtgoQgsgpg/gBIw5AAQg/ABgtApQgsAoAAA7IAAVNIAAARQAAAJgKABQgKgBAAgJIAAgQIAA1OQAAhCAygwQAzguBHgBIQ5AAQBHABAzAuQAyAwAABCIAAVNIAAARQAAADgDADQgDAEgEAAQgKgBAAgJg");
	this.shape.setTransform(73.85,77.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DCB286").s().p("AKjAMQgLgFAAgHQAAgGALgFQAHgDAIgBIAAAPQAAAKAKAAQAEAAADgDQADgDAAgEIAAgQQAMABAIAEQALAFAAAGQAAAHgLAFQgLAFgRAAQgQAAgLgFgArZAMQgLgFAAgHQAAgGALgFQAGgDAIgBIAAAPQAAAKAKAAQAKAAAAgKIAAgQQAMABAJAEQAMAFAAAGQAAAHgMAFQgLAFgQAAQgRAAgLgFg");
	this.shape_1.setTransform(74.125,153.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AK1L7IAAgQIAA1OQAAg7gtgoQgsgpg/gBIw5AAQg/ABgtApQgsAoAAA7IAAVNIAAARQAAAJgKABQgKgBAAgJIAAgQIAA1OQAAhCAygwQAzguBHgBIQ5AAQBHABAzAuQAyAwAABCIAAVNIAAARQAAADgDADQgDAEgEAAQgKgBAAgJg");
	this.shape_2.setTransform(73.85,77.25);

	this.instance = new lib.CachedBmp_447();
	this.instance.setTransform(0,151.7,0.3333,0.3333);

	this.instance_1 = new lib.CachedBmp_650();
	this.instance_1.setTransform(2.5,0,0.3333,0.3333);

	this.instance_2 = new lib.CachedBmp_449();
	this.instance_2.setTransform(0,151.7,0.3333,0.3333);

	this.instance_3 = new lib.CachedBmp_652();
	this.instance_3.setTransform(2.5,0,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).wait(1));

	// Staples
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AINBSIAAijIASAAIAACjgAoeBSIAAijIARAAIAACjg");
	this.shape_3.setTransform(75,8.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AIKAMQgFgFAAgHQAAgGAFgFQAGgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgHAAgFgFgAohAMQgFgFAAgHQAAgGAFgFQAGgFAHAAQAHAAAEAFQAGAFAAAGQAAAHgGAFQgEAFgHAAQgHAAgGgFg");
	this.shape_4.setTransform(74.95,19.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AIKAMQgFgFAAgHQAAgGAFgFQAFgFAHAAQAHAAAGAFQAFAFAAAGQAAAHgFAFQgGAFgHAAQgHAAgFgFgAoiAMQgFgFAAgHQAAgGAFgFQAFgFAHAAQAHAAAGAFQAFAFAAAGQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_5.setTransform(74.975,19);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AIOBSIAAijIARAAIAACjgAoeBSIAAijIARAAIAACjg");
	this.shape_6.setTransform(74.975,8.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.shape_3},{t:this.shape_4}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

	// paper
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("An4IwQgyAAgigjQgkgjAAgyIAAtwQAAgxAjgjQAigjAzAAIPwAAQAyAAAkAjQAjAjAAAxIAANwQAAAygjAjQgjAjgyAAg");
	this.shape_7.setTransform(74.6,66.475);

	this.instance_4 = new lib.ChooseAnswer();
	this.instance_4.setTransform(74.6,66.45,1,1,0,0,0,62.5,56);
	this.instance_4.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,13);

	this.instance_5 = new lib.CorrectAnswer();
	this.instance_5.setTransform(76.15,66.4,1,1,0,0,0,64.1,56);
	this.instance_5.shadow = new cjs.Shadow("rgba(94,199,59,1)",0,0,13);

	this.instance_6 = new lib.IncorrectAnswer();
	this.instance_6.setTransform(74.55,66.4,1,1,0,0,0,62.5,56);
	this.instance_6.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

	// bricks
	this.instance_7 = new lib.CachedBmp_450();
	this.instance_7.setTransform(14.35,155.5,0.3333,0.3333);

	this.instance_8 = new lib.CachedBmp_451();
	this.instance_8.setTransform(14.35,155.5,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[]},2).to({state:[{t:this.instance_8}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.9,-4.6,162,216.5);


(lib.possibleAnswer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// text_box
	this.answersText = new cjs.Text("", "normal 400 16px 'Assistant'");
	this.answersText.name = "answersText";
	this.answersText.textAlign = "right";
	this.answersText.lineHeight = 23;
	this.answersText.lineWidth = 112;
	this.answersText.parent = this;
	this.answersText.setTransform(130.55,24.55);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.answersText);
	}

	this.timeline.addTween(cjs.Tween.get(this.answersText).wait(4));

	// rod
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AK1L7IAAgQIAA1OQAAg7gtgoQgsgpg/gBIw5AAQg/ABgtApQgsAoAAA7IAAVNIAAARQAAAJgKABQgKgBAAgJIAAgQIAA1OQAAhCAygwQAzguBHgBIQ5AAQBHABAzAuQAyAwAABCIAAVNIAAARQAAADgDADQgDAEgEAAQgKgBAAgJg");
	this.shape.setTransform(73.85,77.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DCB286").s().p("AKjAMQgLgFAAgHQAAgGALgFQAHgDAIgBIAAAPQAAAKAKAAQAEAAADgDQADgDAAgEIAAgQQAMABAIAEQALAFAAAGQAAAHgLAFQgLAFgRAAQgQAAgLgFgArZAMQgLgFAAgHQAAgGALgFQAGgDAIgBIAAAPQAAAKAKAAQAKAAAAgKIAAgQQAMABAJAEQAMAFAAAGQAAAHgMAFQgLAFgQAAQgRAAgLgFg");
	this.shape_1.setTransform(74.125,153.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AK1L7IAAgQIAA1OQAAg7gtgoQgsgpg/gBIw5AAQg/ABgtApQgsAoAAA7IAAVNIAAARQAAAJgKABQgKgBAAgJIAAgQIAA1OQAAhCAygwQAzguBHgBIQ5AAQBHABAzAuQAyAwAABCIAAVNIAAARQAAADgDADQgDAEgEAAQgKgBAAgJg");
	this.shape_2.setTransform(73.85,77.25);

	this.instance = new lib.CachedBmp_651();
	this.instance.setTransform(0,151.7,0.3333,0.3333);

	this.instance_1 = new lib.CachedBmp_650();
	this.instance_1.setTransform(2.5,0,0.3333,0.3333);

	this.instance_2 = new lib.CachedBmp_653();
	this.instance_2.setTransform(0,151.7,0.3333,0.3333);

	this.instance_3 = new lib.CachedBmp_652();
	this.instance_3.setTransform(2.5,0,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).wait(1));

	// Staples
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AINBSIAAijIASAAIAACjgAoeBSIAAijIARAAIAACjg");
	this.shape_3.setTransform(75,8.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AIKAMQgFgFAAgHQAAgGAFgFQAGgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgHAAgFgFgAohAMQgFgFAAgHQAAgGAFgFQAGgFAHAAQAHAAAEAFQAGAFAAAGQAAAHgGAFQgEAFgHAAQgHAAgGgFg");
	this.shape_4.setTransform(74.95,19.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AIKAMQgFgFAAgHQAAgGAFgFQAFgFAHAAQAHAAAGAFQAFAFAAAGQAAAHgFAFQgGAFgHAAQgHAAgFgFgAoiAMQgFgFAAgHQAAgGAFgFQAFgFAHAAQAHAAAGAFQAFAFAAAGQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_5.setTransform(74.975,19);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AIOBSIAAijIARAAIAACjgAoeBSIAAijIARAAIAACjg");
	this.shape_6.setTransform(74.975,8.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.shape_3},{t:this.shape_4}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

	// paper
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("An4IwQgyAAgigjQgkgjAAgyIAAtwQAAgxAjgjQAigjAzAAIPwAAQAyAAAkAjQAjAjAAAxIAANwQAAAygjAjQgjAjgyAAg");
	this.shape_7.setTransform(74.6,66.475);

	this.instance_4 = new lib.ChooseAnswer();
	this.instance_4.setTransform(74.6,66.45,1,1,0,0,0,62.5,56);
	this.instance_4.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,13);

	this.instance_5 = new lib.CorrectAnswer();
	this.instance_5.setTransform(76.15,66.4,1,1,0,0,0,64.1,56);
	this.instance_5.shadow = new cjs.Shadow("rgba(94,199,59,1)",0,0,13);

	this.instance_6 = new lib.IncorrectAnswer();
	this.instance_6.setTransform(74.55,66.4,1,1,0,0,0,62.5,56);
	this.instance_6.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

	// bricks
	this.instance_7 = new lib.CachedBmp_654();
	this.instance_7.setTransform(14.35,155.5,0.3333,0.3333);

	this.instance_8 = new lib.CachedBmp_655();
	this.instance_8.setTransform(14.35,155.5,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[]},2).to({state:[{t:this.instance_8}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.9,-4.6,162,216.5);


(lib.TimeIsOverAnimation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.spinningWheel.wheel.gotoAndStop(2)
	}
	this.frame_45 = function() {
		this.staticWheel.wheel.gotoAndStop(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(45).call(this.frame_45).wait(1));

	// smallSones
	this.instance = new lib.smallSones();
	this.instance.setTransform(-6.4,217.5,1,1,0,0,0,9.2,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(46));

	// Character
	this.instance_1 = new lib.CachedBmp_638();
	this.instance_1.setTransform(-0.95,0,0.2265,0.2265);

	this.instance_2 = new lib.AngryMouth1();
	this.instance_2.setTransform(153.45,90,1,1,0,0,0,7.7,3.1);

	this.instance_3 = new lib.CachedBmp_639();
	this.instance_3.setTransform(-0.95,0,0.2265,0.2265);

	this.instance_4 = new lib.CachedBmp_640();
	this.instance_4.setTransform(-2,0,0.2265,0.2265);

	this.instance_5 = new lib.CachedBmp_641();
	this.instance_5.setTransform(-3.45,0,0.2265,0.2265);

	this.instance_6 = new lib.CachedBmp_642();
	this.instance_6.setTransform(-6.45,0,0.2265,0.2265);

	this.instance_7 = new lib.CachedBmp_643();
	this.instance_7.setTransform(-9,0,0.2265,0.2265);

	this.instance_8 = new lib.CachedBmp_644();
	this.instance_8.setTransform(-7.85,0,0.2265,0.2265);

	this.instance_9 = new lib.CachedBmp_645();
	this.instance_9.setTransform(-9,-0.15,0.2265,0.2265);

	this.instance_10 = new lib.CachedBmp_646();
	this.instance_10.setTransform(-7.85,-0.15,0.2265,0.2265);

	this.instance_11 = new lib.CachedBmp_647();
	this.instance_11.setTransform(-9,-0.15,0.2265,0.2265);

	this.instance_12 = new lib.CachedBmp_648();
	this.instance_12.setTransform(-7.85,-0.15,0.2265,0.2265);

	this.instance_13 = new lib.CachedBmp_649();
	this.instance_13.setTransform(-9,0,0.2265,0.2265);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_3},{t:this.instance_2,p:{x:153.45}}]},3).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_8}]},5).to({state:[{t:this.instance_9}]},5).to({state:[{t:this.instance_10}]},5).to({state:[{t:this.instance_11}]},5).to({state:[{t:this.instance_12}]},5).to({state:[{t:this.instance_13},{t:this.instance_2,p:{x:145.45}}]},5).wait(1));

	// staticWheel
	this.staticWheel = new lib.StaticWheel();
	this.staticWheel.name = "staticWheel";
	this.staticWheel.setTransform(13.85,204.15,0.735,0.735,0,0,0,24.7,24.9);
	this.staticWheel._off = true;

	this.timeline.addTween(cjs.Tween.get(this.staticWheel).wait(45).to({_off:false},0).wait(1));

	// wheels
	this.spinningWheel = new lib.Spinning_Wheel();
	this.spinningWheel.name = "spinningWheel";
	this.spinningWheel.setTransform(21.9,204.1,0.735,0.735,0,0,0,24.7,24.9);

	this.timeline.addTween(cjs.Tween.get(this.spinningWheel).wait(6).to({x:20.6,y:204},0).wait(3).to({x:19.05,y:204.2},0).wait(3).to({x:16.05,y:203.7},0).wait(3).to({x:13.05,y:203.8},0).wait(5).to({x:15.15,y:203.95},0).wait(5).to({x:13,y:204},0).wait(5).to({x:15.15,y:203.75},0).wait(5).to({x:13,y:204},0).wait(5).to({x:15.15,y:203.75},0).to({_off:true},5).wait(1));

	// rightLeg
	this.instance_14 = new lib.legs();
	this.instance_14.setTransform(163.3,191.75,1,1,0,0,0,27.2,12);

	this.rightLeg = new lib.rightLegOverTime();
	this.rightLeg.name = "rightLeg";
	this.rightLeg.setTransform(180.55,186.1,1.7068,1.7009,0,0,180,0.1,0.1);
	this.rightLeg.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,0);
	this.rightLeg._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14}]}).to({state:[{t:this.rightLeg}]},3).to({state:[{t:this.rightLeg}]},3).to({state:[{t:this.rightLeg}]},3).to({state:[{t:this.rightLeg}]},3).to({state:[{t:this.rightLeg}]},3).to({state:[{t:this.rightLeg}]},5).to({state:[{t:this.rightLeg}]},5).to({state:[{t:this.rightLeg}]},5).to({state:[{t:this.rightLeg}]},5).to({state:[{t:this.rightLeg}]},5).to({state:[]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.rightLeg).wait(3).to({_off:false},0).wait(3).to({skewX:-15.4811,skewY:164.519,x:178.6,y:182.85},0).wait(3).to({skewX:-28.7049,skewY:151.2951,x:178.95,y:179.45},0).wait(3).to({regX:0,skewX:-41.4511,skewY:138.5493,x:168.15,y:177.9},0).wait(3).to({regX:-0.1,regY:0.2,scaleY:1.7008,skewX:-48.1761,skewY:131.8244,x:165.3,y:176.55},0).wait(5).to({scaleX:1.7067,skewX:-53.6922,skewY:126.3089,x:163.8,y:175.45},0).wait(5).to({skewX:-42.4653,skewY:137.5357,x:158.45,y:174.45},0).wait(5).to({regY:0.3,skewX:-31.7026,skewY:148.298,x:156.55,y:179.45},0).wait(5).to({regX:0,regY:0.2,scaleX:1.7068,skewX:12.7779,skewY:192.7785,x:157.4,y:187.9},0).wait(5).to({regY:0.1,scaleY:1.7009,skewX:22.9884,skewY:202.9889,x:156,y:188.7},0).to({_off:true},5).wait(1));

	// leftHLeg
	this.leftLeg = new lib.leftLegOverTime();
	this.leftLeg.name = "leftLeg";
	this.leftLeg.setTransform(158.8,189.75,1.6948,1.6985,-34.2825,0,0,5.5,5.7);
	this.leftLeg._off = true;

	this.instance_15 = new lib.legs();
	this.instance_15.setTransform(155.3,191.75,1,1,0,0,0,27.2,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.leftLeg}]},3).to({state:[{t:this.leftLeg}]},3).to({state:[{t:this.leftLeg}]},3).to({state:[{t:this.leftLeg}]},3).to({state:[{t:this.leftLeg}]},3).to({state:[{t:this.leftLeg}]},5).to({state:[{t:this.leftLeg}]},5).to({state:[{t:this.leftLeg}]},5).to({state:[{t:this.leftLeg}]},5).to({state:[{t:this.leftLeg}]},5).to({state:[{t:this.instance_15}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.leftLeg).wait(3).to({_off:false},0).wait(3).to({regX:5.4,scaleX:1.6947,rotation:-42.7588,x:158.2,y:190.9},0).wait(3).to({regX:5.5,rotation:-27.3201,x:159.75,y:191.45},0).wait(3).to({scaleX:1.6948,rotation:17.8869,x:150.25,y:193},0).wait(3).to({rotation:7.6807,x:147.7,y:194.05},0).wait(5).to({regY:5.8,scaleX:1.6947,scaleY:1.6984,rotation:0.9631,x:149.7,y:193.2},0).wait(5).to({scaleY:1.6985,rotation:-17.7759,x:149.75,y:194.25},0).wait(5).to({x:160.25,y:195.65},0).wait(5).to({regY:5.7,rotation:-14.6721,x:157.5,y:193},0).wait(5).to({regY:5.8,scaleY:1.6984,rotation:-30.6123,x:159.05,y:192.65},0).to({_off:true},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-0.1,277.40000000000003,223.2);


(lib.startSceneAnimation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_143 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(143).call(this.frame_143).wait(1));

	// character
	this.instance = new lib.staticOrangeWoman();
	this.instance.setTransform(956.2,332.7,2.1516,2.1516,0,0,0,120.3,82.6);

	this.instance_1 = new lib.staticblueMan();
	this.instance_1.setTransform(342.35,344.7,2.2847,2.2847,0,0,0,114,77);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},143).wait(1));

	// sound_icon
	this.soundOffBtnSingle = new lib.oneLampButtonSound();
	this.soundOffBtnSingle.name = "soundOffBtnSingle";
	this.soundOffBtnSingle.setTransform(150.3,-90.5,1,1,0,0,0,81.9,7.2);

	this.timeline.addTween(cjs.Tween.get(this.soundOffBtnSingle).wait(144));

	// face
	this.instance_2 = new lib.Master_face();
	this.instance_2.setTransform(384.55,260.15,0.1965,0.1965,0,0,0,51.4,54.5);
	this.instance_2.cache(-2,-2,107,112);

	this.instance_3 = new lib.MasterAfraidFace();
	this.instance_3.setTransform(385.35,257.4,0.1828,0.1962,0,0,0,48.7,54.8);

	this.instance_4 = new lib.CachedBmp_545();
	this.instance_4.setTransform(374,255.35,0.3333,0.3333);

	this.instance_5 = new lib.CachedBmp_546();
	this.instance_5.setTransform(371.3,255.15,0.3333,0.3333);

	this.instance_6 = new lib.CachedBmp_547();
	this.instance_6.setTransform(372.8,258.35,0.3333,0.3333);

	this.instance_7 = new lib.CachedBmp_548();
	this.instance_7.setTransform(370.7,255.25,0.3333,0.3333);

	this.instance_8 = new lib.CachedBmp_549();
	this.instance_8.setTransform(370.7,258.35,0.3333,0.3333);

	this.instance_9 = new lib.CachedBmp_550();
	this.instance_9.setTransform(364.5,255.25,0.3333,0.3333);

	this.instance_10 = new lib.CachedBmp_551();
	this.instance_10.setTransform(357.5,255.25,0.3333,0.3333);

	this.instance_11 = new lib.CachedBmp_552();
	this.instance_11.setTransform(361.5,256.85,0.3333,0.3333);

	this.instance_12 = new lib.CachedBmp_553();
	this.instance_12.setTransform(449.95,190,0.3333,0.3333);

	this.instance_13 = new lib.MasterMovesHands();
	this.instance_13.setTransform(414.45,91.5,0.3812,0.3812,0,0,0,473.9,203.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_4},{t:this.instance_3,p:{x:385.35,y:257.4,regX:48.7,regY:54.8,scaleX:0.1828,scaleY:0.1962}}]},14).to({state:[{t:this.instance_5},{t:this.instance_3,p:{x:382.65,y:257.2,regX:48.7,regY:54.8,scaleX:0.1828,scaleY:0.1962}}]},1).to({state:[{t:this.instance_6},{t:this.instance_3,p:{x:384.15,y:260.4,regX:48.7,regY:54.8,scaleX:0.1828,scaleY:0.1962}}]},1).to({state:[{t:this.instance_7},{t:this.instance_3,p:{x:382.05,y:257.3,regX:48.7,regY:54.8,scaleX:0.1828,scaleY:0.1962}}]},2).to({state:[{t:this.instance_8},{t:this.instance_3,p:{x:382.05,y:260.4,regX:48.7,regY:54.8,scaleX:0.1828,scaleY:0.1962}}]},2).to({state:[{t:this.instance_9},{t:this.instance_3,p:{x:375.85,y:257.3,regX:48.7,regY:54.8,scaleX:0.1828,scaleY:0.1962}}]},2).to({state:[{t:this.instance_10},{t:this.instance_3,p:{x:368.85,y:257.3,regX:48.7,regY:54.8,scaleX:0.1828,scaleY:0.1962}}]},4).to({state:[{t:this.instance_11},{t:this.instance_3,p:{x:371.75,y:258.7,regX:48.9,regY:55.1,scaleX:0.1648,scaleY:0.1768}}]},5).to({state:[{t:this.instance_12},{t:this.instance_3,p:{x:476.5,y:194.85,regX:48.8,regY:54.9,scaleX:0.4292,scaleY:0.4605}}]},58).to({state:[{t:this.instance_13}]},54).wait(1));

	// rightSleeve
	this.instance_14 = new lib.RightSleeve();
	this.instance_14.setTransform(385.8,271.85,0.1965,0.1965,0,0,0,7.9,13.5);
	this.instance_14.cache(-2,-2,19,31);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true},14).wait(130));

	// body
	this.instance_15 = new lib.Master_body();
	this.instance_15.setTransform(382.8,272.7,0.1965,0.1965,0,0,0,17.3,26.4);
	this.instance_15.cache(-2,-2,38,57);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(14).to({regX:17,regY:26.3,scaleX:0.1737,scaleY:0.1976,x:383.85,y:269.85},0).wait(1).to({x:381.15,y:269.65},0).wait(1).to({x:382.65,y:272.85},0).wait(2).to({x:380.55,y:269.75},0).wait(2).to({y:272.85},0).wait(2).to({x:374.35,y:269.75},0).wait(4).to({x:367.35},0).wait(5).to({regX:17.2,regY:26.4,scaleX:0.1566,scaleY:0.1781,x:370.4,y:269.9},0).wait(58).to({regX:17.1,scaleX:0.4078,scaleY:0.464,x:472.95,y:224.05},0).to({_off:true},54).wait(1));

	// left_hand
	this.instance_16 = new lib.Left_hand_master();
	this.instance_16.setTransform(379.6,271.65,0.1965,0.1965,0,0,0,14.2,14.5);
	this.instance_16.cache(-2,-2,32,33);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({_off:true},14).wait(130));

	// stick
	this.instance_17 = new lib.Master_stick();
	this.instance_17.setTransform(378.15,275.6,0.1965,0.1965,0,0,0,4.4,11.5);
	this.instance_17.cache(-2,-2,12,27);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({_off:true},14).wait(130));

	// right_hand
	this.instance_18 = new lib.Sleeve_2();
	this.instance_18.setTransform(381.95,268.55,0.1738,0.1975,0,2.6564,3.4386,8,14);

	this.instance_19 = new lib.OpenHand();
	this.instance_19.setTransform(379.5,270,0.0232,0.0221,0,-52.08,-58.9457,67.5,39.6);

	this.instance_20 = new lib.Sleeve_2();
	this.instance_20.setTransform(385.75,268.5,0.1743,0.1971,0,7.913,-169.8006,8.2,14.1);

	this.instance_21 = new lib.OpenHand();
	this.instance_21.setTransform(387.95,270,0.023,0.0223,0,48.9986,-123.8794,69.2,39.3);

	this.instance_22 = new lib.OpenHand2();
	this.instance_22.setTransform(376.35,266.6,0.0369,0.0353,0,-128.025,58.8779,74.2,48.1);

	this.instance_23 = new lib.OpenHand2();
	this.instance_23.setTransform(385.4,266.2,0.0379,0.0342,0,110.2148,105.8757,74.4,47.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_21},{t:this.instance_20,p:{regX:8.2,regY:14.1,scaleX:0.1743,scaleY:0.1971,skewX:7.913,skewY:-169.8006,x:385.75,y:268.5}},{t:this.instance_19},{t:this.instance_18,p:{regX:8,regY:14,scaleX:0.1738,scaleY:0.1975,skewX:2.6564,skewY:3.4386,x:381.95,y:268.55}}]},14).to({state:[{t:this.instance_23,p:{regX:74.4,regY:47.6,skewX:110.2148,skewY:105.8757,x:385.4,y:266.2,scaleX:0.0379,scaleY:0.0342}},{t:this.instance_22,p:{regX:74.2,regY:48.1,skewX:-128.025,skewY:58.8779,x:376.35,y:266.6,scaleX:0.0369,scaleY:0.0353}},{t:this.instance_20,p:{regX:8.4,regY:13.8,scaleX:0.1907,scaleY:0.1812,skewX:126.8236,skewY:120.0446,x:378.95,y:268.75}},{t:this.instance_18,p:{regX:7.9,regY:13.5,scaleX:0.1901,scaleY:0.1819,skewX:-128.4316,skewY:58.4928,x:382.9,y:268.55}}]},1).to({state:[{t:this.instance_23,p:{regX:74.5,regY:45.7,skewX:114.6536,skewY:110.3159,x:387.15,y:269.45,scaleX:0.0379,scaleY:0.0342}},{t:this.instance_22,p:{regX:75.5,regY:49.6,skewX:-138.0165,skewY:48.8876,x:377.8,y:270.05,scaleX:0.0369,scaleY:0.0353}},{t:this.instance_20,p:{regX:8.4,regY:13.6,scaleX:0.1907,scaleY:0.1812,skewX:116.8455,skewY:110.0634,x:380.7,y:271.75}},{t:this.instance_18,p:{regX:8.2,regY:13.6,scaleX:0.1901,scaleY:0.1818,skewX:-123.9915,skewY:62.9372,x:384.45,y:271.6}}]},1).to({state:[{t:this.instance_23,p:{regX:74.5,regY:45.7,skewX:114.6536,skewY:110.3159,x:385.05,y:266.35,scaleX:0.0379,scaleY:0.0342}},{t:this.instance_22,p:{regX:75.5,regY:49.6,skewX:-138.0165,skewY:48.8876,x:375.7,y:266.95,scaleX:0.0369,scaleY:0.0353}},{t:this.instance_20,p:{regX:8.4,regY:13.6,scaleX:0.1907,scaleY:0.1812,skewX:116.8455,skewY:110.0634,x:378.6,y:268.65}},{t:this.instance_18,p:{regX:8.2,regY:13.6,scaleX:0.1901,scaleY:0.1818,skewX:-123.9915,skewY:62.9372,x:382.35,y:268.5}}]},2).to({state:[{t:this.instance_23,p:{regX:74.5,regY:45.7,skewX:114.6536,skewY:110.3159,x:385.05,y:269.45,scaleX:0.0379,scaleY:0.0342}},{t:this.instance_22,p:{regX:75.5,regY:49.6,skewX:-138.0165,skewY:48.8876,x:375.7,y:270.05,scaleX:0.0369,scaleY:0.0353}},{t:this.instance_20,p:{regX:8.4,regY:13.6,scaleX:0.1907,scaleY:0.1812,skewX:116.8455,skewY:110.0634,x:378.6,y:271.75}},{t:this.instance_18,p:{regX:8.2,regY:13.6,scaleX:0.1901,scaleY:0.1818,skewX:-123.9915,skewY:62.9372,x:382.35,y:271.6}}]},2).to({state:[{t:this.instance_23,p:{regX:74.5,regY:45.7,skewX:114.6536,skewY:110.3159,x:378.85,y:266.35,scaleX:0.0379,scaleY:0.0342}},{t:this.instance_22,p:{regX:75.5,regY:49.6,skewX:-138.0165,skewY:48.8876,x:369.5,y:266.95,scaleX:0.0369,scaleY:0.0353}},{t:this.instance_20,p:{regX:8.4,regY:13.6,scaleX:0.1907,scaleY:0.1812,skewX:116.8455,skewY:110.0634,x:372.4,y:268.65}},{t:this.instance_18,p:{regX:8.2,regY:13.6,scaleX:0.1901,scaleY:0.1818,skewX:-123.9915,skewY:62.9372,x:376.15,y:268.5}}]},2).to({state:[{t:this.instance_23,p:{regX:74.5,regY:45.7,skewX:114.6536,skewY:110.3159,x:371.85,y:266.35,scaleX:0.0379,scaleY:0.0342}},{t:this.instance_22,p:{regX:75.5,regY:49.6,skewX:-138.0165,skewY:48.8876,x:362.5,y:266.95,scaleX:0.0369,scaleY:0.0353}},{t:this.instance_20,p:{regX:8.4,regY:13.6,scaleX:0.1907,scaleY:0.1812,skewX:116.8455,skewY:110.0634,x:365.4,y:268.65}},{t:this.instance_18,p:{regX:8.2,regY:13.6,scaleX:0.1901,scaleY:0.1818,skewX:-123.9915,skewY:62.9372,x:369.15,y:268.5}}]},4).to({state:[{t:this.instance_23,p:{regX:75.7,regY:44.8,skewX:114.6343,skewY:110.2956,x:374.45,y:266.9,scaleX:0.0342,scaleY:0.0308}},{t:this.instance_22,p:{regX:77,regY:50.1,skewX:-138.0169,skewY:48.8858,x:366.05,y:267.4,scaleX:0.0333,scaleY:0.0318}},{t:this.instance_20,p:{regX:8.3,regY:13.5,scaleX:0.1719,scaleY:0.1634,skewX:116.8427,skewY:110.0631,x:368.65,y:268.9}},{t:this.instance_18,p:{regX:8.4,regY:13.6,scaleX:0.1713,scaleY:0.1639,skewX:-123.9904,skewY:62.9375,x:372,y:268.8}}]},5).to({state:[{t:this.instance_23,p:{regX:74.7,regY:44.5,skewX:114.6434,skewY:110.3078,x:483.7,y:215,scaleX:0.089,scaleY:0.0802}},{t:this.instance_22,p:{regX:76.5,regY:49.5,skewX:-138.0261,skewY:48.8833,x:461.9,y:216.55,scaleX:0.0867,scaleY:0.0828}},{t:this.instance_20,p:{regX:8.5,regY:13.4,scaleX:0.4476,scaleY:0.4255,skewX:116.8426,skewY:110.0632,x:468.7,y:220.55}},{t:this.instance_18,p:{regX:8.4,regY:13.7,scaleX:0.4463,scaleY:0.4269,skewX:-123.9883,skewY:62.9373,x:477.4,y:220.1}}]},58).to({state:[{t:this.instance_23,p:{regX:74.6,regY:43.8,skewX:126.3465,skewY:122.0064,x:484.6,y:215.8,scaleX:0.089,scaleY:0.0802}},{t:this.instance_22,p:{regX:77,regY:49.1,skewX:-145.2434,skewY:41.6738,x:461.25,y:217,scaleX:0.0867,scaleY:0.0828}},{t:this.instance_20,p:{regX:8.5,regY:13.3,scaleX:0.4476,scaleY:0.4254,skewX:109.6262,skewY:102.8476,x:468.5,y:220.05}},{t:this.instance_18,p:{regX:8.6,regY:13.7,scaleX:0.4463,scaleY:0.4269,skewX:-112.2863,skewY:74.6394,x:477.35,y:219.55}}]},4).to({state:[{t:this.instance_23,p:{regX:74.4,regY:43.1,skewX:139.8411,skewY:135.4931,x:484.8,y:217.9,scaleX:0.089,scaleY:0.0802}},{t:this.instance_22,p:{regX:78,regY:49.1,skewX:-156.4698,skewY:30.4533,x:461,y:218.35,scaleX:0.0866,scaleY:0.0827}},{t:this.instance_20,p:{regX:8.6,regY:13.3,scaleX:0.4476,scaleY:0.4254,skewX:98.4042,skewY:91.6253,x:468.7,y:220}},{t:this.instance_18,p:{regX:8.8,regY:13.8,scaleX:0.4463,scaleY:0.4268,skewX:-98.7966,skewY:88.1287,x:476.9,y:219.85}}]},3).to({state:[{t:this.instance_23,p:{regX:74.7,regY:44.5,skewX:114.6434,skewY:110.3078,x:483.7,y:215,scaleX:0.089,scaleY:0.0802}},{t:this.instance_22,p:{regX:76.5,regY:49.5,skewX:-138.0261,skewY:48.8833,x:461.9,y:216.55,scaleX:0.0867,scaleY:0.0828}},{t:this.instance_20,p:{regX:8.5,regY:13.4,scaleX:0.4476,scaleY:0.4255,skewX:116.8426,skewY:110.0632,x:468.7,y:220.55}},{t:this.instance_18,p:{regX:8.4,regY:13.7,scaleX:0.4463,scaleY:0.4269,skewX:-123.9883,skewY:62.9373,x:477.4,y:220.1}}]},3).to({state:[{t:this.instance_23,p:{regX:74.6,regY:43.8,skewX:126.3465,skewY:122.0064,x:484.6,y:215.8,scaleX:0.089,scaleY:0.0802}},{t:this.instance_22,p:{regX:77,regY:49.1,skewX:-145.2434,skewY:41.6738,x:461.25,y:217,scaleX:0.0867,scaleY:0.0828}},{t:this.instance_20,p:{regX:8.5,regY:13.3,scaleX:0.4476,scaleY:0.4254,skewX:109.6262,skewY:102.8476,x:468.5,y:220.05}},{t:this.instance_18,p:{regX:8.6,regY:13.7,scaleX:0.4463,scaleY:0.4269,skewX:-112.2863,skewY:74.6394,x:477.35,y:219.55}}]},3).to({state:[{t:this.instance_23,p:{regX:74.4,regY:43.1,skewX:139.8411,skewY:135.4931,x:484.8,y:217.9,scaleX:0.089,scaleY:0.0802}},{t:this.instance_22,p:{regX:78,regY:49.1,skewX:-156.4698,skewY:30.4533,x:461,y:218.35,scaleX:0.0866,scaleY:0.0827}},{t:this.instance_20,p:{regX:8.6,regY:13.3,scaleX:0.4476,scaleY:0.4254,skewX:98.4042,skewY:91.6253,x:468.7,y:220}},{t:this.instance_18,p:{regX:8.8,regY:13.8,scaleX:0.4463,scaleY:0.4268,skewX:-98.7966,skewY:88.1287,x:476.9,y:219.85}}]},3).to({state:[{t:this.instance_23,p:{regX:74.7,regY:44.5,skewX:114.6434,skewY:110.3078,x:483.7,y:215,scaleX:0.089,scaleY:0.0802}},{t:this.instance_22,p:{regX:76.5,regY:49.5,skewX:-138.0261,skewY:48.8833,x:461.9,y:216.55,scaleX:0.0867,scaleY:0.0828}},{t:this.instance_20,p:{regX:8.5,regY:13.4,scaleX:0.4476,scaleY:0.4255,skewX:116.8426,skewY:110.0632,x:468.7,y:220.55}},{t:this.instance_18,p:{regX:8.4,regY:13.7,scaleX:0.4463,scaleY:0.4269,skewX:-123.9883,skewY:62.9373,x:477.4,y:220.1}}]},3).to({state:[{t:this.instance_23,p:{regX:74.6,regY:43.8,skewX:126.3465,skewY:122.0064,x:484.6,y:215.8,scaleX:0.089,scaleY:0.0802}},{t:this.instance_22,p:{regX:77,regY:49.1,skewX:-145.2434,skewY:41.6738,x:461.25,y:217,scaleX:0.0867,scaleY:0.0828}},{t:this.instance_20,p:{regX:8.5,regY:13.3,scaleX:0.4476,scaleY:0.4254,skewX:109.6262,skewY:102.8476,x:468.5,y:220.05}},{t:this.instance_18,p:{regX:8.6,regY:13.7,scaleX:0.4463,scaleY:0.4269,skewX:-112.2863,skewY:74.6394,x:477.35,y:219.55}}]},4).to({state:[{t:this.instance_23,p:{regX:74.4,regY:43.1,skewX:139.8411,skewY:135.4931,x:484.8,y:217.9,scaleX:0.089,scaleY:0.0802}},{t:this.instance_22,p:{regX:78,regY:49.1,skewX:-156.4698,skewY:30.4533,x:461,y:218.35,scaleX:0.0866,scaleY:0.0827}},{t:this.instance_20,p:{regX:8.6,regY:13.3,scaleX:0.4476,scaleY:0.4254,skewX:98.4042,skewY:91.6253,x:468.7,y:220}},{t:this.instance_18,p:{regX:8.8,regY:13.8,scaleX:0.4463,scaleY:0.4268,skewX:-98.7966,skewY:88.1287,x:476.9,y:219.85}}]},3).to({state:[{t:this.instance_23,p:{regX:74.4,regY:43.1,skewX:139.8411,skewY:135.4931,x:484.8,y:217.9,scaleX:0.089,scaleY:0.0802}},{t:this.instance_22,p:{regX:78,regY:49.1,skewX:-156.4698,skewY:30.4533,x:461,y:218.35,scaleX:0.0866,scaleY:0.0827}},{t:this.instance_20,p:{regX:8.6,regY:13.3,scaleX:0.4476,scaleY:0.4254,skewX:98.4042,skewY:91.6253,x:468.7,y:220}},{t:this.instance_18,p:{regX:8.8,regY:13.8,scaleX:0.4463,scaleY:0.4268,skewX:-98.7966,skewY:88.1287,x:476.9,y:219.85}}]},3).to({state:[{t:this.instance_23,p:{regX:74.7,regY:44.5,skewX:114.6434,skewY:110.3078,x:483.7,y:215,scaleX:0.089,scaleY:0.0802}},{t:this.instance_22,p:{regX:76.5,regY:49.5,skewX:-138.0261,skewY:48.8833,x:461.9,y:216.55,scaleX:0.0867,scaleY:0.0828}},{t:this.instance_20,p:{regX:8.5,regY:13.4,scaleX:0.4476,scaleY:0.4255,skewX:116.8426,skewY:110.0632,x:468.7,y:220.55}},{t:this.instance_18,p:{regX:8.4,regY:13.7,scaleX:0.4463,scaleY:0.4269,skewX:-123.9883,skewY:62.9373,x:477.4,y:220.1}}]},3).to({state:[{t:this.instance_23,p:{regX:74.6,regY:43.8,skewX:126.3465,skewY:122.0064,x:484.6,y:215.8,scaleX:0.089,scaleY:0.0802}},{t:this.instance_22,p:{regX:77,regY:49.1,skewX:-145.2434,skewY:41.6738,x:461.25,y:217,scaleX:0.0867,scaleY:0.0828}},{t:this.instance_20,p:{regX:8.5,regY:13.3,scaleX:0.4476,scaleY:0.4254,skewX:109.6262,skewY:102.8476,x:468.5,y:220.05}},{t:this.instance_18,p:{regX:8.6,regY:13.7,scaleX:0.4463,scaleY:0.4269,skewX:-112.2863,skewY:74.6394,x:477.35,y:219.55}}]},4).to({state:[{t:this.instance_23,p:{regX:74.4,regY:43.1,skewX:139.8411,skewY:135.4931,x:484.8,y:217.9,scaleX:0.089,scaleY:0.0802}},{t:this.instance_22,p:{regX:78,regY:49.1,skewX:-156.4698,skewY:30.4533,x:461,y:218.35,scaleX:0.0866,scaleY:0.0827}},{t:this.instance_20,p:{regX:8.6,regY:13.3,scaleX:0.4476,scaleY:0.4254,skewX:98.4042,skewY:91.6253,x:468.7,y:220}},{t:this.instance_18,p:{regX:8.8,regY:13.8,scaleX:0.4463,scaleY:0.4268,skewX:-98.7966,skewY:88.1287,x:476.9,y:219.85}}]},3).to({state:[{t:this.instance_23,p:{regX:74.4,regY:43.1,skewX:139.8411,skewY:135.4931,x:484.8,y:217.9,scaleX:0.089,scaleY:0.0802}},{t:this.instance_22,p:{regX:78,regY:49.1,skewX:-156.4698,skewY:30.4533,x:461,y:218.35,scaleX:0.0866,scaleY:0.0827}},{t:this.instance_20,p:{regX:8.6,regY:13.3,scaleX:0.4476,scaleY:0.4254,skewX:98.4042,skewY:91.6253,x:468.7,y:220}},{t:this.instance_18,p:{regX:8.8,regY:13.8,scaleX:0.4463,scaleY:0.4268,skewX:-98.7966,skewY:88.1287,x:476.9,y:219.85}}]},3).to({state:[{t:this.instance_23,p:{regX:74.7,regY:44.5,skewX:114.6434,skewY:110.3078,x:483.7,y:215,scaleX:0.089,scaleY:0.0802}},{t:this.instance_22,p:{regX:76.5,regY:49.5,skewX:-138.0261,skewY:48.8833,x:461.9,y:216.55,scaleX:0.0867,scaleY:0.0828}},{t:this.instance_20,p:{regX:8.5,regY:13.4,scaleX:0.4476,scaleY:0.4255,skewX:116.8426,skewY:110.0632,x:468.7,y:220.55}},{t:this.instance_18,p:{regX:8.4,regY:13.7,scaleX:0.4463,scaleY:0.4269,skewX:-123.9883,skewY:62.9373,x:477.4,y:220.1}}]},3).to({state:[{t:this.instance_23,p:{regX:74.6,regY:43.8,skewX:126.3465,skewY:122.0064,x:484.6,y:215.8,scaleX:0.089,scaleY:0.0802}},{t:this.instance_22,p:{regX:77,regY:49.1,skewX:-145.2434,skewY:41.6738,x:461.25,y:217,scaleX:0.0867,scaleY:0.0828}},{t:this.instance_20,p:{regX:8.5,regY:13.3,scaleX:0.4476,scaleY:0.4254,skewX:109.6262,skewY:102.8476,x:468.5,y:220.05}},{t:this.instance_18,p:{regX:8.6,regY:13.7,scaleX:0.4463,scaleY:0.4269,skewX:-112.2863,skewY:74.6394,x:477.35,y:219.55}}]},4).to({state:[{t:this.instance_23,p:{regX:74.4,regY:43.1,skewX:139.8411,skewY:135.4931,x:484.8,y:217.9,scaleX:0.089,scaleY:0.0802}},{t:this.instance_22,p:{regX:78,regY:49.1,skewX:-156.4698,skewY:30.4533,x:461,y:218.35,scaleX:0.0866,scaleY:0.0827}},{t:this.instance_20,p:{regX:8.6,regY:13.3,scaleX:0.4476,scaleY:0.4254,skewX:98.4042,skewY:91.6253,x:468.7,y:220}},{t:this.instance_18,p:{regX:8.8,regY:13.8,scaleX:0.4463,scaleY:0.4268,skewX:-98.7966,skewY:88.1287,x:476.9,y:219.85}}]},3).to({state:[]},2).wait(1));

	// text
	this.text = new cjs.Text("ויצליח להציל את המאסטר?", "normal 700 38px 'Assistant'");
	this.text.textAlign = "right";
	this.text.lineHeight = 45;
	this.text.lineWidth = 465;
	this.text.parent = this;
	this.text.setTransform(1223.25,-41.1);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.text_1 = new cjs.Text("מי יבנה את החומה ראשון", "normal 300 30px 'Assistant'");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 35;
	this.text_1.lineWidth = 378;
	this.text_1.parent = this;
	this.text_1.setTransform(1223.25,-80.9);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_1);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_1},{t:this.text}]},143).wait(1));

	// button
	this.continueToChooseCharacter = new lib.continueToStartGame();
	this.continueToChooseCharacter.name = "continueToChooseCharacter";
	this.continueToChooseCharacter.setTransform(1000.35,40.8,1,1,0,0,0,61.5,24.8);
	this.continueToChooseCharacter._off = true;

	this.timeline.addTween(cjs.Tween.get(this.continueToChooseCharacter).wait(143).to({_off:false},0).wait(1));

	// Ground
	this.instance_24 = new lib.CachedBmp_555();
	this.instance_24.setTransform(-24,392.85,0.3333,0.3333);

	this.instance_25 = new lib.CachedBmp_554();
	this.instance_25.setTransform(-7.7,350.85,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_25},{t:this.instance_24}]},143).wait(1));

	// Trees
	this.instance_26 = new lib.CachedBmp_556();
	this.instance_26.setTransform(3.25,390.8,0.3333,0.3333);

	this.instance_27 = new lib.CachedBmp_557();
	this.instance_27.setTransform(6.45,390.8,0.3333,0.3333);

	this.instance_28 = new lib.CachedBmp_558();
	this.instance_28.setTransform(9.65,394,0.3333,0.3333);

	this.instance_29 = new lib.CachedBmp_559();
	this.instance_29.setTransform(6.45,390.8,0.3333,0.3333);

	this.instance_30 = new lib.CachedBmp_560();
	this.instance_30.setTransform(9.65,394,0.3333,0.3333);

	this.instance_31 = new lib.CachedBmp_561();
	this.instance_31.setTransform(6.45,390.8,0.3333,0.3333);

	this.instance_32 = new lib.CachedBmp_562();
	this.instance_32.setTransform(6.45,390.8,0.3333,0.3333);

	this.instance_33 = new lib.CachedBmp_563();
	this.instance_33.setTransform(-60.45,333.2,0.3333,0.3333);

	this.instance_34 = new lib.CachedBmp_564();
	this.instance_34.setTransform(71.5,247.35,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_26}]}).to({state:[{t:this.instance_27}]},14).to({state:[{t:this.instance_28}]},2).to({state:[{t:this.instance_29}]},2).to({state:[{t:this.instance_30}]},2).to({state:[{t:this.instance_31}]},2).to({state:[{t:this.instance_32}]},2).to({state:[{t:this.instance_33}]},65).to({state:[{t:this.instance_34}]},54).wait(1));

	// Green_mountains
	this.instance_35 = new lib.CachedBmp_566();
	this.instance_35.setTransform(1113.1,464.55,0.3333,0.3333);

	this.instance_36 = new lib.CachedBmp_577();
	this.instance_36.setTransform(-58.5,325.25,0.3333,0.3333);

	this.instance_37 = new lib.CachedBmp_568();
	this.instance_37.setTransform(1113.1,461.35,0.3333,0.3333);

	this.instance_38 = new lib.CachedBmp_570();
	this.instance_38.setTransform(1116.3,464.55,0.3333,0.3333);

	this.instance_39 = new lib.CachedBmp_572();
	this.instance_39.setTransform(1113.1,461.35,0.3333,0.3333);

	this.instance_40 = new lib.CachedBmp_574();
	this.instance_40.setTransform(1116.3,464.55,0.3333,0.3333);

	this.instance_41 = new lib.CachedBmp_576();
	this.instance_41.setTransform(1113.1,461.35,0.3333,0.3333);

	this.instance_42 = new lib.CachedBmp_578();
	this.instance_42.setTransform(1113.1,461.35,0.3333,0.3333);

	this.instance_43 = new lib.CachedBmp_580();
	this.instance_43.setTransform(1368.95,500.65,0.3333,0.3333);

	this.instance_44 = new lib.CachedBmp_579();
	this.instance_44.setTransform(-140.1,321.2,0.3333,0.3333);

	this.instance_45 = new lib.CachedBmp_582();
	this.instance_45.setTransform(1097.5,308.55,0.3333,0.3333);

	this.instance_46 = new lib.CachedBmp_581();
	this.instance_46.setTransform(-23.95,182.95,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_36,p:{y:325.25,x:-58.5}},{t:this.instance_35}]}).to({state:[{t:this.instance_36,p:{y:322.05,x:-58.5}},{t:this.instance_37}]},14).to({state:[{t:this.instance_36,p:{y:325.25,x:-55.3}},{t:this.instance_38}]},2).to({state:[{t:this.instance_36,p:{y:322.05,x:-58.5}},{t:this.instance_39}]},2).to({state:[{t:this.instance_36,p:{y:325.25,x:-55.3}},{t:this.instance_40}]},2).to({state:[{t:this.instance_36,p:{y:322.05,x:-58.5}},{t:this.instance_41}]},2).to({state:[{t:this.instance_36,p:{y:322.05,x:-58.5}},{t:this.instance_42}]},2).to({state:[{t:this.instance_44},{t:this.instance_43}]},65).to({state:[{t:this.instance_46},{t:this.instance_45}]},54).wait(1));

	// pagoda
	this.instance_47 = new lib.CachedBmp_583();
	this.instance_47.setTransform(257.45,162.75,0.3333,0.3333);

	this.instance_48 = new lib.CachedBmp_584();
	this.instance_48.setTransform(257.6,159.15,0.3333,0.3333);

	this.instance_49 = new lib.CachedBmp_585();
	this.instance_49.setTransform(261.05,162.75,0.3333,0.3333);

	this.instance_50 = new lib.CachedBmp_586();
	this.instance_50.setTransform(258.35,159.55,0.3333,0.3333);

	this.instance_51 = new lib.CachedBmp_587();
	this.instance_51.setTransform(262.35,162.55,0.3333,0.3333);

	this.instance_52 = new lib.CachedBmp_588();
	this.instance_52.setTransform(258.85,159.6,0.3333,0.3333);

	this.instance_53 = new lib.CachedBmp_589();
	this.instance_53.setTransform(258.85,159.55,0.3333,0.3333);

	this.instance_54 = new lib.CachedBmp_591();
	this.instance_54.setTransform(167.3,-69,0.3333,0.3333);

	this.instance_55 = new lib.CachedBmp_590();
	this.instance_55.setTransform(167.95,-69.35,0.3333,0.3333);

	this.instance_56 = new lib.CachedBmp_592();
	this.instance_56.setTransform(304.7,-6.95,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_47}]}).to({state:[{t:this.instance_48}]},14).to({state:[{t:this.instance_49}]},2).to({state:[{t:this.instance_50}]},2).to({state:[{t:this.instance_51}]},2).to({state:[{t:this.instance_52}]},2).to({state:[{t:this.instance_53}]},2).to({state:[{t:this.instance_55},{t:this.instance_54}]},65).to({state:[{t:this.instance_56}]},54).wait(1));

	// birds
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.286)").s().p("AMgIzIgBAAQgFgLgLgHQgXgNgiAXQgeATAGgKQAPgSAUgLQAmgTAcAiQAbgiAmATQAUALAPASQAEAIgcgRQghgXgYANIgQASQgCAFgCAAQgBAAgBgFgAGtFLQgFgKgLgGQgXgNgiAXQgcASAEgJQAPgSAUgLQAmgTAcAhQAbghAmATQAUALAPASQADAGgLgFIgQgKQghgXgYANIgQASIgCADIgBACQgCAAgCgHgALwEbQgHgHgFgHQgagfgaAGIgVANIgDACQgEADABgIQgCgLgJgKQgTgTgnANQgHADgLACQgMACAFgFQATgOAXgEQApgIASAnQAjgYAfAdQARAPAJAWQAAABAAABQAAAAAAABQAAAAgBAAQAAAAAAAAQgCAAgFgEgEgoUgELQg2glgkAVQgMAHgIALIgGALQgEAKgEgGIgCgFIAAABQgIgSgSgLQglgVg1AlQguAfAJgRQAXgdAggRQA7gdAsA0QArg0A7AdQAhARAXAdQADAGgEAAQgGAAgegUgEgyRgFLIAFgLQAOgcAWgUQAxgtA4AmQAIgUANgMQAbgbAsAJQAaAFAXANIARALQAIAIgTgEQgOgDgOgFQgRgFgPgCQgNgCgLACQgVADgOAOQgOAPgDASQAAANgGgFIgDgEIgBAAQgMgPgVgFQgpgKgpAyIgLANIgJAIQgIAIgDAAQgCAAABgFgEAxsgGBQg2glgkAVQgMAHgIALIgGALQgEAKgEgGIgCgFIAAABQgIgSgSgLQglgVg1AlQguAfAJgRQAXgdAggRQA7gdAsA0QArg0A7AdQAhARAXAdQADAGgEAAQgGAAgegUgEAnvgHBIAFgLQAOgcAWgUQAxgtA4AmQAIgUANgMQAbgbAsAJQAaAFAXANIARALQAIAIgTgEQgOgDgOgFQgRgFgPgCQgNgCgLACQgVADgOAOQgOAPgDASQAAANgGgFIgDgEIgBAAQgMgPgVgFQgpgKgpAyIgLANIgJAIQgIAIgDAAQgCAAABgFg");
	this.shape.setTransform(546.9372,-38.8782);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(144));

	// mask_wall (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EAG2AqBIAAoWIhoq+IBolQIAAsWIAyiQIBdh3ISVAAIB6BfIAAFQIBiChIhiDUIicIlICcD5IhOCgIBOCaIBFLFg");
	var mask_graphics_14 = new cjs.Graphics().p("EAG2ApxIAAoWIhoq+IBolQIAAsWIAyiQIBdh3ISVAAIB6BfIAAFQIBiChIhiDUIicIlICcD5IhOCgIBOCaIBFLFg");
	var mask_graphics_16 = new cjs.Graphics().p("EAHGAqBIAAoWIhoq+IBolQIAAsWIAyiQIBdh3ISVAAIB6BfIAAFQIBiChIhiDUIicIlICcD5IhOCgIBOCaIBFLFg");
	var mask_graphics_18 = new cjs.Graphics().p("EAG2ApxIAAoWIhoq+IBolQIAAsWIAyiQIBdh3ISVAAIB6BfIAAFQIBiChIhiDUIicIlICcD5IhOCgIBOCaIBFLFg");
	var mask_graphics_20 = new cjs.Graphics().p("EAHGAqBIAAoWIhoq+IBolQIAAsWIAyiQIBdh3ISVAAIB6BfIAAFQIBiChIhiDUIicIlICcD5IhOCgIBOCaIBFLFg");
	var mask_graphics_22 = new cjs.Graphics().p("EAG2ApxIAAoWIhoq+IBolQIAAsWIAyiQIBdh3ISVAAIB6BfIAAFQIBiChIhiDUIicIlICcD5IhOCgIBOCaIBFLFg");
	var mask_graphics_24 = new cjs.Graphics().p("EAG2ApxIAAoWIhoq+IBolQIAAsWIAyiQIBdh3ISVAAIB6BfIAAFQIBiChIhiDUIicIlICcD5IhOCgIBOCaIBFLFg");
	var mask_graphics_89 = new cjs.Graphics().p("EgaKBNmIAA4EIkr/qIErvKMAAAgjmICQmfIENlYMA04AAAIFeESIAAPLIEbHQIkbJjInBYuIHBLNIjgHQIDgG8IDGf+g");
	var mask_graphics_143 = new cjs.Graphics().p("AKccpIAAoWIhoq+IBolQIAAsVIAyiQIBdh3ISVAAIB6BfIAAFQIBiChIhiDTIicIlICcD5IhOCgIBOCaIBFLFg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:197.3937,y:268.9348}).wait(14).to({graphics:mask_graphics_14,x:197.3937,y:267.3348}).wait(2).to({graphics:mask_graphics_16,x:198.9937,y:268.9348}).wait(2).to({graphics:mask_graphics_18,x:197.3937,y:267.3348}).wait(2).to({graphics:mask_graphics_20,x:198.9937,y:268.9348}).wait(2).to({graphics:mask_graphics_22,x:197.3937,y:267.3348}).wait(2).to({graphics:mask_graphics_24,x:197.3937,y:267.3348}).wait(65).to({graphics:mask_graphics_89,x:275.6192,y:496.5981}).wait(54).to({graphics:mask_graphics_143,x:220.3937,y:183.3348}).wait(1));

	// wall
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.098)").s().p("Am+SRMAAAgkhIN9AAMAAAAkhg");
	this.shape_1.setTransform(365.075,395.65);

	this.instance_57 = new lib.wall_0();
	this.instance_57.setTransform(315.2,446.65,0.6128,0.6137,0,0,0,130.6,156.1);

	this.instance_58 = new lib.wall_0();
	this.instance_58.setTransform(315.2,306.1,0.6128,0.6137,0,0,0,130.6,156.1);

	var maskedShapeInstanceList = [this.shape_1,this.instance_57,this.instance_58];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_58,p:{y:306.1,x:315.2,scaleX:0.6128,scaleY:0.6137}},{t:this.instance_57,p:{y:446.65,x:315.2,regY:156.1,scaleX:0.6128,scaleY:0.6137}},{t:this.shape_1,p:{y:395.65,x:365.075,scaleX:1,scaleY:1}}]}).to({state:[{t:this.instance_58,p:{y:302.9,x:315.2,scaleX:0.6128,scaleY:0.6137}},{t:this.instance_57,p:{y:443.45,x:315.2,regY:156.1,scaleX:0.6128,scaleY:0.6137}},{t:this.shape_1,p:{y:392.45,x:365.075,scaleX:1,scaleY:1}}]},14).to({state:[{t:this.instance_58,p:{y:306.1,x:318.4,scaleX:0.6128,scaleY:0.6137}},{t:this.instance_57,p:{y:446.65,x:318.4,regY:156.1,scaleX:0.6128,scaleY:0.6137}},{t:this.shape_1,p:{y:395.65,x:368.275,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.instance_58,p:{y:302.9,x:315.2,scaleX:0.6128,scaleY:0.6137}},{t:this.instance_57,p:{y:443.45,x:315.2,regY:156.1,scaleX:0.6128,scaleY:0.6137}},{t:this.shape_1,p:{y:392.45,x:365.075,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.instance_58,p:{y:306.1,x:318.4,scaleX:0.6128,scaleY:0.6137}},{t:this.instance_57,p:{y:446.65,x:318.4,regY:156.1,scaleX:0.6128,scaleY:0.6137}},{t:this.shape_1,p:{y:395.65,x:368.275,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.instance_58,p:{y:302.9,x:315.2,scaleX:0.6128,scaleY:0.6137}},{t:this.instance_57,p:{y:443.45,x:315.2,regY:156.1,scaleX:0.6128,scaleY:0.6137}},{t:this.shape_1,p:{y:392.45,x:365.075,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.instance_58,p:{y:302.9,x:315.2,scaleX:0.6128,scaleY:0.6137}},{t:this.instance_57,p:{y:443.45,x:315.2,regY:156.1,scaleX:0.6128,scaleY:0.6137}},{t:this.shape_1,p:{y:392.45,x:365.075,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.instance_58,p:{y:324.5,x:321.5,scaleX:1.768,scaleY:1.7704}},{t:this.instance_57,p:{y:729.95,x:321.5,regY:156.2,scaleX:1.768,scaleY:1.7704}},{t:this.shape_1,p:{y:573.2676,x:464.8125,scaleX:2.8849,scaleY:2.8849}}]},65).to({state:[{t:this.instance_58,p:{y:134.9,x:361.2,scaleX:0.6128,scaleY:0.6137}},{t:this.instance_57,p:{y:275.45,x:361.2,regY:156.1,scaleX:0.6128,scaleY:0.6137}},{t:this.shape_1,p:{y:224.45,x:411.075,scaleX:1,scaleY:1}}]},54).wait(1));

	// singel_Brick
	this.instance_59 = new lib.CachedBmp_593();
	this.instance_59.setTransform(63.65,269.6,0.3333,0.3333);

	this.instance_60 = new lib.CachedBmp_594();
	this.instance_60.setTransform(63.65,266.15,0.3333,0.3333);

	this.instance_61 = new lib.CachedBmp_595();
	this.instance_61.setTransform(66.85,269.6,0.3333,0.3333);

	this.instance_62 = new lib.CachedBmp_596();
	this.instance_62.setTransform(63.65,266.4,0.3333,0.3333);

	this.instance_63 = new lib.CachedBmp_597();
	this.instance_63.setTransform(66.85,269.6,0.3333,0.3333);

	this.instance_64 = new lib.CachedBmp_598();
	this.instance_64.setTransform(63.65,265.6,0.3333,0.3333);

	this.instance_65 = new lib.CachedBmp_599();
	this.instance_65.setTransform(63.65,265.6,0.3333,0.3333);

	this.instance_66 = new lib.CachedBmp_600();
	this.instance_66.setTransform(63.65,265.6,0.3333,0.3333);

	this.instance_67 = new lib.CachedBmp_601();
	this.instance_67.setTransform(49.25,246.4,0.3333,0.3333);

	this.instance_68 = new lib.CachedBmp_602();
	this.instance_68.setTransform(49.25,234.7,0.3333,0.3333);

	this.instance_69 = new lib.CachedBmp_603();
	this.instance_69.setTransform(49.25,261.9,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_59}]}).to({state:[{t:this.instance_60}]},14).to({state:[{t:this.instance_61}]},2).to({state:[{t:this.instance_62}]},2).to({state:[{t:this.instance_63}]},2).to({state:[{t:this.instance_64}]},2).to({state:[{t:this.instance_65}]},2).to({state:[{t:this.instance_66}]},2).to({state:[{t:this.instance_67}]},5).to({state:[{t:this.instance_68}]},4).to({state:[{t:this.instance_69}]},5).to({state:[]},4).wait(100));

	// fullWall
	this.instance_70 = new lib.Wall_broken();
	this.instance_70.setTransform(1182.05,547.95,1,1,0,0,180,128.4,-13.2);

	this.instance_71 = new lib.CachedBmp_605();
	this.instance_71.setTransform(357.4,281.2,0.3333,0.3333);

	this.instance_72 = new lib.Wall_broken();
	this.instance_72.setTransform(1131.05,368.2,1,1,0,0,180,128.4,-13.2);

	this.instance_73 = new lib.Wall_broken();
	this.instance_73.setTransform(981.3,368.2,1,1,0,0,180,128.4,-13.2);

	this.instance_74 = new lib.Wall_broken();
	this.instance_74.setTransform(1278.85,368.2,1,1,0,0,0,128.4,-13.2);

	this.instance_75 = new lib.Wall_broken();
	this.instance_75.setTransform(831.55,368.2,1,1,0,0,180,128.4,-13.2);

	this.instance_76 = new lib.Wall_broken();
	this.instance_76.setTransform(681.65,368.2,1,1,0,0,180,128.4,-13.2);

	this.instance_77 = new lib.Wall_broken();
	this.instance_77.setTransform(532.7,368.2,1,1,0,0,0,128.4,-13.2);

	this.instance_78 = new lib.Wall_broken();
	this.instance_78.setTransform(385.95,368.2,1,1,0,0,180,128.4,-13.2);

	this.instance_79 = new lib.Wall_broken();
	this.instance_79.setTransform(236.05,368.2,1,1,0,0,180,128.4,-13.2);

	this.instance_80 = new lib.Wall_broken();
	this.instance_80.setTransform(87.1,368.2,1,1,0,0,0,128.4,-13.2);

	this.instance_81 = new lib.Wall_broken();
	this.instance_81.setTransform(831.55,548.5,1,1,0,0,180,128.4,-13.2);

	this.instance_82 = new lib.Wall_broken();
	this.instance_82.setTransform(978.85,548.5,1,1,0,0,180,128.4,-13.2);

	this.instance_83 = new lib.Wall_broken();
	this.instance_83.setTransform(380.4,548.75,1,1,0,0,180,128.4,-13.2);

	this.instance_84 = new lib.Wall_broken();
	this.instance_84.setTransform(525.9,548.75,1,1,0,0,180,128.4,-13.2);

	this.instance_85 = new lib.CachedBmp_617();
	this.instance_85.setTransform(10.65,280.25,0.3333,0.3333);

	this.instance_86 = new lib.CachedBmp_607();
	this.instance_86.setTransform(357.4,278,0.3333,0.3333);

	this.instance_87 = new lib.CachedBmp_609();
	this.instance_87.setTransform(360.6,281.2,0.3333,0.3333);

	this.instance_88 = new lib.CachedBmp_611();
	this.instance_88.setTransform(357.4,278,0.3333,0.3333);

	this.instance_89 = new lib.CachedBmp_613();
	this.instance_89.setTransform(360.6,281.2,0.3333,0.3333);

	this.instance_90 = new lib.CachedBmp_616();
	this.instance_90.setTransform(657.45,266.4,0.3333,0.3333);

	this.instance_91 = new lib.CachedBmp_615();
	this.instance_91.setTransform(357.4,278,0.3333,0.3333);

	this.instance_92 = new lib.CachedBmp_619();
	this.instance_92.setTransform(657.45,266.4,0.3333,0.3333);

	this.instance_93 = new lib.CachedBmp_618();
	this.instance_93.setTransform(357.4,278,0.3333,0.3333);

	this.instance_94 = new lib.CachedBmp_621();
	this.instance_94.setTransform(354.8,276.55,0.3333,0.3333);

	this.instance_95 = new lib.wall_1();
	this.instance_95.setTransform(800.85,526.55,1,1,0,0,180,64.4,87);

	this.instance_96 = new lib.wall_1();
	this.instance_96.setTransform(640.6,526.55,1,1,0,0,0,64.4,87);

	this.instance_97 = new lib.wall_1();
	this.instance_97.setTransform(1084.35,533.35,1,1,0,0,180,64.4,87);

	this.instance_98 = new lib.wall_1();
	this.instance_98.setTransform(924.1,530.15,1,1,0,0,0,64.4,87);

	this.instance_99 = new lib.wall_1();
	this.instance_99.setTransform(571.9,528.3,1,1,0,0,180,64.4,87);

	this.instance_100 = new lib.wall_1();
	this.instance_100.setTransform(411.65,528.3,1,1,0,0,0,64.4,87);

	this.instance_101 = new lib.wall_1();
	this.instance_101.setTransform(235.35,358.75,1,1,0,0,180,64.4,87);

	this.instance_102 = new lib.wall_1();
	this.instance_102.setTransform(75.1,358.75,1,1,0,0,0,64.4,87);

	this.instance_103 = new lib.wall_1();
	this.instance_103.setTransform(1260.05,358.75,1,1,0,0,0,64.4,87);

	this.instance_104 = new lib.wall_1();
	this.instance_104.setTransform(1132.85,359.5,1,1,0,0,180,64.4,87);

	this.instance_105 = new lib.wall_1();
	this.instance_105.setTransform(972.6,359.5,1,1,0,0,0,64.4,87);

	this.instance_106 = new lib.wall_1();
	this.instance_106.setTransform(844.75,359.5,1,1,0,0,180,64.4,87);

	this.instance_107 = new lib.wall_1();
	this.instance_107.setTransform(684.5,359.5,1,1,0,0,0,64.4,87);

	this.instance_108 = new lib.wall_1();
	this.instance_108.setTransform(558.55,359.5,1,1,0,0,180,64.4,87);

	this.instance_109 = new lib.wall_1();
	this.instance_109.setTransform(398.3,359.5,1,1,0,0,0,64.4,87);

	this.instance_110 = new lib.CachedBmp_620();
	this.instance_110.setTransform(14.7,274.95,0.3333,0.3333);

	this.instance_111 = new lib.wall_2();
	this.instance_111.setTransform(149.35,360,1,1,0,0,0,232,167.4);

	this.instance_112 = new lib.wall_2();
	this.instance_112.setTransform(1354.85,368.35,1,1,0,0,0,232,167.4);

	this.instance_113 = new lib.wall_2();
	this.instance_113.setTransform(1062.45,366.75,1,1,0,0,0,232,167.4);

	this.instance_114 = new lib.wall_2();
	this.instance_114.setTransform(768.8,364.25,1,1,0,0,0,232,167.4);

	this.instance_115 = new lib.wall_2();
	this.instance_115.setTransform(476,361.95,1,1,0,0,0,232,167.4);

	this.instance_116 = new lib.wall_3();
	this.instance_116.setTransform(1047.45,540.2,0.9933,1,0,0,0,232.1,166.8);

	this.instance_117 = new lib.wall_3();
	this.instance_117.setTransform(757.6,540.2,0.9933,1,0,0,0,232.1,166.8);

	this.instance_118 = new lib.wall_3();
	this.instance_118.setTransform(465.55,548.55,0.9933,1,0,0,0,232.1,166.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(114,67,55,0.2)").s().p("Eho/AcGMAAAg4LMDR/AAAMAAAA4Lg");
	this.shape_2.setTransform(686.75,461.225);

	this.instance_119 = new lib.wall_3();
	this.instance_119.setTransform(142.95,365.45,0.9933,1,0,0,0,232.1,166.8);

	this.instance_120 = new lib.wall_3();
	this.instance_120.setTransform(1346.05,370.15,0.9933,1,0,0,0,232.1,166.8);

	this.instance_121 = new lib.wall_3();
	this.instance_121.setTransform(1052.1,368.15,0.9933,1,0,0,0,232.1,166.8);

	this.instance_122 = new lib.wall_3();
	this.instance_122.setTransform(757.6,368.15,0.9933,1,0,0,0,232.1,166.8);

	this.instance_123 = new lib.wall_3();
	this.instance_123.setTransform(464.6,364.75,0.9933,1,0,0,0,232.1,166.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(114,67,55,0.137)").s().p("Eho/AcGMAAAg4LMDR/AAAMAAAA4Lg");
	this.shape_3.setTransform(686.75,461.225);

	this.instance_124 = new lib.wall_4();
	this.instance_124.setTransform(526.8,571.1,0.9743,1,0,0,0,232.1,171.8);

	this.instance_125 = new lib.wall_4();
	this.instance_125.setTransform(1240.6,535.45,0.9743,1,0,0,0,232.1,171.8);

	this.instance_126 = new lib.wall_4();
	this.instance_126.setTransform(945.35,542.1,0.9743,1,0,0,0,232.1,171.8);

	this.instance_127 = new lib.wall_4();
	this.instance_127.setTransform(140.05,381.15,0.9743,1,0,0,0,232.1,171.8);

	this.instance_128 = new lib.wall_4();
	this.instance_128.setTransform(1333.7,376.65,0.9743,1,0,0,0,232.1,171.8);

	this.instance_129 = new lib.wall_4();
	this.instance_129.setTransform(1042.5,361.7,0.9743,1,0,0,0,232.1,171.8);

	this.instance_130 = new lib.wall_4();
	this.instance_130.setTransform(751.75,370.7,0.9743,1,0,0,0,232.1,171.8);

	this.instance_131 = new lib.wall_4();
	this.instance_131.setTransform(460.65,375.2,0.9743,1,0,0,0,232.1,171.8);

	this.instance_132 = new lib.wall_5();
	this.instance_132.setTransform(147.95,384.15,1,1,0,0,0,232.7,181.8);

	this.instance_133 = new lib.wall_5();
	this.instance_133.setTransform(1382.35,384.55,1,1,0,0,0,232.7,181.8);

	this.instance_134 = new lib.wall_5();
	this.instance_134.setTransform(1077.1,399.3,1,1,0,0,0,232.7,181.8);

	this.instance_135 = new lib.wall_5();
	this.instance_135.setTransform(772.1,381.05,1,1,0,0,0,232.7,181.8);

	this.instance_136 = new lib.wall_5();
	this.instance_136.setTransform(474.3,390.8,1,1,0,0,0,232.7,181.8);

	this.instance_137 = new lib.wall_6();
	this.instance_137.setTransform(83.05,453.1,1,1,0,0,0,233,196.2);

	this.instance_138 = new lib.wall_6();
	this.instance_138.setTransform(1320.75,530.75,1,1,75.001,0,0,233,196.2);

	this.instance_139 = new lib.wall_6();
	this.instance_139.setTransform(1150.25,475.85,1,1,0,0,0,233,196.2);

	this.instance_140 = new lib.wall_6();
	this.instance_140.setTransform(831.8,457.95,1,1,0,0,180,233,196.2);

	this.instance_141 = new lib.wall_6();
	this.instance_141.setTransform(530,458.25,1,1,0,0,0,233,196.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_85,p:{y:280.25,x:10.65}},{t:this.instance_84,p:{y:548.75,x:525.9}},{t:this.instance_83,p:{y:548.75,x:380.4}},{t:this.instance_82,p:{y:548.5,x:978.85}},{t:this.instance_81,p:{y:548.5,x:831.55}},{t:this.instance_80,p:{y:368.2,x:87.1}},{t:this.instance_79,p:{y:368.2,x:236.05}},{t:this.instance_78,p:{y:368.2,x:385.95}},{t:this.instance_77,p:{y:368.2,x:532.7}},{t:this.instance_76,p:{y:368.2,x:681.65}},{t:this.instance_75,p:{y:368.2,x:831.55}},{t:this.instance_74,p:{y:368.2,x:1278.85}},{t:this.instance_73,p:{y:368.2,x:981.3}},{t:this.instance_72,p:{y:368.2,x:1131.05}},{t:this.instance_71},{t:this.instance_70,p:{y:547.95,x:1182.05}}]}).to({state:[{t:this.instance_85,p:{y:277.05,x:10.65}},{t:this.instance_84,p:{y:545.55,x:525.9}},{t:this.instance_83,p:{y:545.55,x:380.4}},{t:this.instance_82,p:{y:545.3,x:978.85}},{t:this.instance_81,p:{y:545.3,x:831.55}},{t:this.instance_80,p:{y:365,x:87.1}},{t:this.instance_79,p:{y:365,x:236.05}},{t:this.instance_78,p:{y:365,x:385.95}},{t:this.instance_77,p:{y:365,x:532.7}},{t:this.instance_76,p:{y:365,x:681.65}},{t:this.instance_75,p:{y:365,x:831.55}},{t:this.instance_74,p:{y:365,x:1278.85}},{t:this.instance_73,p:{y:365,x:981.3}},{t:this.instance_72,p:{y:365,x:1131.05}},{t:this.instance_86},{t:this.instance_70,p:{y:544.75,x:1182.05}}]},14).to({state:[{t:this.instance_85,p:{y:280.25,x:13.85}},{t:this.instance_84,p:{y:548.75,x:529.1}},{t:this.instance_83,p:{y:548.75,x:383.6}},{t:this.instance_82,p:{y:548.5,x:982.05}},{t:this.instance_81,p:{y:548.5,x:834.75}},{t:this.instance_80,p:{y:368.2,x:90.3}},{t:this.instance_79,p:{y:368.2,x:239.25}},{t:this.instance_78,p:{y:368.2,x:389.15}},{t:this.instance_77,p:{y:368.2,x:535.9}},{t:this.instance_76,p:{y:368.2,x:684.85}},{t:this.instance_75,p:{y:368.2,x:834.75}},{t:this.instance_74,p:{y:368.2,x:1282.05}},{t:this.instance_73,p:{y:368.2,x:984.5}},{t:this.instance_72,p:{y:368.2,x:1134.25}},{t:this.instance_87},{t:this.instance_70,p:{y:547.95,x:1185.25}}]},2).to({state:[{t:this.instance_85,p:{y:277.05,x:10.65}},{t:this.instance_84,p:{y:545.55,x:525.9}},{t:this.instance_83,p:{y:545.55,x:380.4}},{t:this.instance_82,p:{y:545.3,x:978.85}},{t:this.instance_81,p:{y:545.3,x:831.55}},{t:this.instance_80,p:{y:365,x:87.1}},{t:this.instance_79,p:{y:365,x:236.05}},{t:this.instance_78,p:{y:365,x:385.95}},{t:this.instance_77,p:{y:365,x:532.7}},{t:this.instance_76,p:{y:365,x:681.65}},{t:this.instance_75,p:{y:365,x:831.55}},{t:this.instance_74,p:{y:365,x:1278.85}},{t:this.instance_73,p:{y:365,x:981.3}},{t:this.instance_72,p:{y:365,x:1131.05}},{t:this.instance_88},{t:this.instance_70,p:{y:544.75,x:1182.05}}]},2).to({state:[{t:this.instance_85,p:{y:280.25,x:13.85}},{t:this.instance_84,p:{y:548.75,x:529.1}},{t:this.instance_83,p:{y:548.75,x:383.6}},{t:this.instance_82,p:{y:548.5,x:982.05}},{t:this.instance_81,p:{y:548.5,x:834.75}},{t:this.instance_80,p:{y:368.2,x:90.3}},{t:this.instance_79,p:{y:368.2,x:239.25}},{t:this.instance_78,p:{y:368.2,x:389.15}},{t:this.instance_77,p:{y:368.2,x:535.9}},{t:this.instance_76,p:{y:368.2,x:684.85}},{t:this.instance_75,p:{y:368.2,x:834.75}},{t:this.instance_74,p:{y:368.2,x:1282.05}},{t:this.instance_73,p:{y:368.2,x:984.5}},{t:this.instance_72,p:{y:368.2,x:1134.25}},{t:this.instance_89},{t:this.instance_70,p:{y:547.95,x:1185.25}}]},2).to({state:[{t:this.instance_85,p:{y:277.05,x:10.65}},{t:this.instance_84,p:{y:545.55,x:525.9}},{t:this.instance_83,p:{y:545.55,x:380.4}},{t:this.instance_82,p:{y:545.3,x:978.85}},{t:this.instance_81,p:{y:545.3,x:831.55}},{t:this.instance_80,p:{y:365,x:87.1}},{t:this.instance_79,p:{y:365,x:236.05}},{t:this.instance_78,p:{y:365,x:385.95}},{t:this.instance_77,p:{y:365,x:532.7}},{t:this.instance_76,p:{y:365,x:681.65}},{t:this.instance_75,p:{y:365,x:831.55}},{t:this.instance_74,p:{y:365,x:1278.85}},{t:this.instance_73,p:{y:365,x:981.3}},{t:this.instance_72,p:{y:365,x:1131.05}},{t:this.instance_91},{t:this.instance_70,p:{y:544.75,x:1182.05}},{t:this.instance_90}]},2).to({state:[{t:this.instance_85,p:{y:277.05,x:10.65}},{t:this.instance_84,p:{y:545.55,x:525.9}},{t:this.instance_83,p:{y:545.55,x:380.4}},{t:this.instance_82,p:{y:545.3,x:978.85}},{t:this.instance_81,p:{y:545.3,x:831.55}},{t:this.instance_80,p:{y:365,x:87.1}},{t:this.instance_79,p:{y:365,x:236.05}},{t:this.instance_78,p:{y:365,x:385.95}},{t:this.instance_77,p:{y:365,x:532.7}},{t:this.instance_76,p:{y:365,x:681.65}},{t:this.instance_75,p:{y:365,x:831.55}},{t:this.instance_74,p:{y:365,x:1278.85}},{t:this.instance_73,p:{y:365,x:981.3}},{t:this.instance_72,p:{y:365,x:1131.05}},{t:this.instance_93},{t:this.instance_70,p:{y:544.75,x:1182.05}},{t:this.instance_92}]},2).to({state:[{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94}]},3).to({state:[{t:this.shape_2},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111}]},4).to({state:[{t:this.shape_3},{t:this.instance_123},{t:this.instance_122},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116}]},4).to({state:[{t:this.instance_131},{t:this.instance_130},{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_125,p:{x:1240.6,y:535.45}},{t:this.instance_124,p:{x:526.8,y:571.1}}]},5).to({state:[{t:this.instance_125,p:{x:942.2,y:564.9}},{t:this.instance_136,p:{y:390.8}},{t:this.instance_135,p:{y:381.05}},{t:this.instance_134,p:{y:399.3}},{t:this.instance_133,p:{y:384.55}},{t:this.instance_132,p:{y:384.15}},{t:this.instance_124,p:{x:411.75,y:563.5}}]},4).to({state:[{t:this.instance_136,p:{y:420.8}},{t:this.instance_135,p:{y:411.05}},{t:this.instance_134,p:{y:429.3}},{t:this.instance_133,p:{y:414.55}},{t:this.instance_132,p:{y:408.15}}]},4).to({state:[{t:this.instance_124,p:{x:1010.65,y:558.45}},{t:this.instance_141},{t:this.instance_140,p:{skewY:180,x:831.8,y:457.95}},{t:this.instance_139,p:{skewY:0,x:1150.25,y:475.85}},{t:this.instance_138,p:{scaleX:1,scaleY:1,rotation:75.001,x:1320.75,y:530.75}},{t:this.instance_137,p:{skewY:0,x:83.05,y:453.1}}]},4).to({state:[{t:this.instance_140,p:{skewY:0,x:547.2,y:505.45}},{t:this.instance_139,p:{skewY:180,x:877,y:513.95}},{t:this.instance_138,p:{scaleX:0.9999,scaleY:0.9999,rotation:-87.1966,x:1168.75,y:557.25}},{t:this.instance_137,p:{skewY:180,x:174.8,y:475.3}}]},3).to({state:[{t:this.instance_140,p:{skewY:0,x:550.4,y:556.65}},{t:this.instance_139,p:{skewY:180,x:877,y:545.95}},{t:this.instance_138,p:{scaleX:0.9999,scaleY:0.9999,rotation:-87.1966,x:1168.75,y:589.25}},{t:this.instance_137,p:{skewY:180,x:174.8,y:507.3}}]},3).to({state:[{t:this.instance_138,p:{scaleX:1,scaleY:1,rotation:0,x:550.4,y:590.25}},{t:this.instance_137,p:{skewY:180,x:877,y:579.55}}]},2).to({state:[]},2).wait(82));

	// clouds
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.208)").s().p("EhelAOhIlYh8IAAnOQCngXCLAJQC/AMBvBIQCeBnCiB2QBRA7AxAmQALgJATgNQAlgaAmgQQB5g0BSA+QBCAxBDA4QA4AnB3AqQCmA7CuASQj/A3lRAaQiyAOigAAQm6AAkqhqgEBROAOdQFdh2CChLQCDhMCMgTQBGgKAsAGQBQiFB1hiQA/g0BMghIAAHxQkzBXp/BIQjHAXjRASIipAOgEAs5AO1IjlgUIEagWQExgWB1AAQBPAADIgXQDlgaEBgrQK2h0HbilQExhrFKieQD2h2DriGIAADCQmzC9p+DpQtME0vrAkQh5AEh2AAQi7AAizgKgEA7yAHUQDUg0BlgvQCchKCBhwIAshuQAchFBdgVQAvgLApADQBphuBSiEQA3hZDAgYQBhgNBVAGIAVgsQAdg3Arg8QCJjBDcikQBfhJB2gkIGXAAIAjALIAANVQjpB6i0BNQmMCqvxChQk/AzlXArQjTAbhUAJIDLgsgEhHHAHHQzmgBpQlGIAAkAQFJDAHdCiQH1CsN3AOQG8AHFXgcQh/AQjNAQQmVAgmCAAIgMAAgEhcLgADQkniLjLiQIAArsIS1AAQDDBPArCAQAwCQAZC4QAMBcADA/IAvgZQA6gdA4gRQCyg3BZBTQCIB/BfCeIAYgNQAegPAegFQBggQA+BSQBjCDAhAhIA3gYQBHgTBTAVQBSAUDWAOQBsAHBaADQnpBCpOARQiaAFiPAAQu3AAm6jQgEA6+AAGQGCibDniBQC7hoE+kAQDPinDpjPIDbAAQpCI/s7FYQkEBrj+BIIjTA1IFdiFgAcMA6QBYgGBTgLQELgjB1hLQCJhZBZglQBWgkAyAIQBCALAsALIAIgTQAMgWATgTQA8g8BuAAQBuAABjAFIBNAGQgBgNAEgUQAHgnAVghQBFhoC5AAQCVAADMADQCTAABTgOQBSgOB5hHQA8gkAsghQiMB5jmCJQnOETnFBSQnGBRowAhQiuALimAEIiCACgEgjlgE7Qq3gumxhnQlJhOmsjBQkmiEktinIH9AAQI+FmQkDlQISBzGfArQkFgClbgYg");
	this.shape_4.setTransform(655.433,-46.5602,1.0094,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(144));

	// far_mountains
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(153,153,153,0.11)").s().p("Ehd5AhDMg9mgAeIg23VQgGgEgGgDQjChmDHhgQB1hUCDhaQCehtCyh2QFkjsELidQDMh4CYhKIAdgOQBPg6B0gJIAggBQBfgJBMAfQAyAUAsAoQA5A0AvBUIBlAPQBqAcAlA/QA8BnAiAZQA1AoA9hCQBNhRBmASQBmASAaBiQALAoAihUQA1iLAphbQAehDAfg4QCVkNC0gnID6AaQENAnBjBBQCBBVAnAAQA1AAA+hvQAjg9BShQQBZhVBig8QD+ieCCBpIAVARQAXAKAYAOQCyBlCeDlQC0DSAiCwIAggHQAqgIAkgOQBygvAWhRQAahdBqgYQAugLAkALQAmAKANAcQANAfAkAdQAjAeAlAMQBgAeANhqQAFgzAwhfQAFgNBji3QBEh/AphgQA7iIAdh8QA6j/B6i3QA2hTA6g2QBEhABIgYQBFgXBOBvQAqA8AuBmQAkBNBCClQA9CNAoA9QA7BYA7ADQAiABA7goQA5gnAbAEQAtAHAqBgQBnDuA1BAQBFBTBKhIQAWgVCAjPQCVjsByiVQD+lLDchfQB/g2BzAXQA5AMA2ATQDyBXCzD0QAyBGBWCQQA+BrAdAVQBQA8E9JWIABACIgBgDIAfAsQAZAYAhAHQA3AKAqgzQAZgeALglQB5llCOlAQBYjFBJiBQAkhCATgZQBAhpBLhiQAcglAegkIACgDIgCABQA8hLBWhEQBzhcBdgLQA0gOAdAUIADABQACACAEABQBNA9DKD6IAGAIQBIBaA1BLIBMBvQA9BgAFAyIAAADQAfCXBmEcQBCC6ArBJQAfAmAaAFQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAIACgDQAagSBRAmQBOAlBeBMQDoC6BJDHQAlBlDEB4QCoBmD6BjQDeBYDDAyQDCAyAngUQABAABpi9QB2jYBuiCQFtmyEtGsQHMKPDrBkQBKAgAqgcQAWgOAFgVIBAAPQBPAPBVAAQEMABDNiSQArgeAhgxIA0haQA+hxBeggQA5gUAYAIQAMAFAaAcQA/BDCyAAQAKAABZAYQBVAUAQgOQAagXAmARQAIAEA/ArQAuAgAgACQAuADAogwQAdgjBpAPQA0AGAYgDQAogDAVgZQCIilB5A+QAfARA2AoQAtAfAegOQCghGCqgwQA2gQCgBCIBeAlQBUAfATAAQAygDBOgOQA0gIARAHQAWAHALArQAIAjALBuIBKebI/ZgPQACAEADADQgFgDgEgEMjbSgBnQBXCOAdBEQhdhghjhyg");
	this.shape_5.setTransform(761.8306,307.9825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(153,153,153,0.247)").s().p("EhimAisMhArgAfIg44gIgNgHQjMhrDRhlQBQg6BYg8IBdhBQClhyC8h8QKSm2FxizIAegOQBUg9B5gJIAigBQAigEAgACQA9ADA1AWQA0AVAuApQA8A3AyBYIBpAQQBcAZArAxQAJALAHALQA/BsAjAbQA5ApA/hFQBRhVBrASQBsATAbBoQALApAkhXQA4iSArhgQAfhGAhg8QCckaC9gpIEHAcQEaAoBoBFQCIBZApAAQA3AABBh1QAlhABWhUQBdhZBng/QELilCIBuIAWARQAZALAZAOQC7BrCmDwQC9DcAjC5IAigHQAsgJAmgOQB4gyAXhVQAbhhBwgZQAvgMAnAMQAoALANAdQANAgAmAeQAmAgAmAMQBlAgANhvQAGg2AyhjQAFgOBpjAQBHiGArhkQA+iPAeiCQA9kNCAi/QB9i+CMgvQBvglCIErQAlBSBGCtQBACUAqBBQA+BcA9ADQAlABA9gqQA8gpAdAEQAvAHAsBlQBsD6A4BDQBJBXBNhMQAXgWCHjYQCcj4B3idQGkokFNBEQFJBDDmE5QA0BKBaCXQBBBwAeAXQBRA7ExI+IAfA6IABACIgBgEIAhAuQAaAaAiAHQA6ALAtg2QAagfAMgnQB/l3CVlQQBcjPBNiHQAlhFAVgbQBciZBziJIABgDIgBABQA/hPBahHQB5hgBhgMQA2gPAgAVIACABQACACAEABQBTBBDZEOQBMBeA3BPIBQB1QBABlAFA1IAAADQAhCeBrEqQBFDDAtBNQAhApAbAEIgCAEIACgEQAbgTBVAoQBSAnBjBQQD0DEBMDRQAnBpDOB/QCwBqEHBpQDpBcDNA0QDLA1ApgVQACAABtjHQB8jjB0iIQF/nIE9HCQHiKvD4BqQBNAhAsgdQAXgPAGgWIBCAQQBUAQBZAAQEZABDXiZQAtggAkg0IA2heQBCh3BigiQA8gVAZAJQAMAGAcAdQBCBGC7AAQAKAABdAZQBaAWARgPQAbgZAoASQAJAEBBAuQAxAhAhADQAwACArgzQAfgkBuAQQA2AGAagDQApgDAWgbQCPitB/BCQAhARA4ArQAwAfAggOQCnhJCzgzQA4gQCpBEQCxBJAdgBQA1gDBSgOQA3gJARAHQAXAIALAtQAKAlALBzIBNf9Mgg9gAQQACAEADADQgFgDgFgEMjmQgBsQBcCUAeBIQhhhlhph4g");
	this.shape_6.setTransform(723.0992,320.2081);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(153,153,153,0.11)").s().p("Ehh/AcaMhASgAaIg40DIgMgGQjKhYDOhSQB7hICJhOQCkheC7hlQKOlmFviTIAegMQBTgxB4gIIAigBQBjgIBQAbQAzARAuAiQA8AtAyBIIBoANQBvAYAnA3QA/BYAjAWQA4AiA/g5QBQhGBrAQQBqAPAbBVQAMAiAkhIQA3h3AqhPQAfg5AhgxQCbjnC9ghIEFAWQEXAhBoA5QCHBIApAAQA2AABBhfQAlg1BWhEQBchJBng0QEIiHCIBaIAWAOQAYAJAZAMQC6BXClDEQC8C1AjCXIAigGQAsgHAlgMQB3goAXhGQAbhQBvgUQAvgKAnAKQAnAJANAYQAOAaAlAZQAlAaAnAKQBkAaANhbQAGgsAxhRQAGgMBoidQBGhtArhTQA+h1AehqQA9jcB+idQB9ibCLgmQBugfCHD1QAlBDBGCOQA/B5AqA1QA9BLA+ADQAkABA9gjQA7ghAdADQAuAGAsBSQBsDNA3A3QBJBHBNg+QAWgSCGixQCbjLB3iBQGinAFKA4QFHA3DkEAQA0A8BZB8QBCBcAeASQBTAzFLIDIABACIgBgEIAgAmQAbAVAiAGQA5AJAtgsQAagaALggQB+kzCVkSQBbiqBNhvQAlg4AUgWQBbh9ByhwIACgDIgCABQA/hBBag6QB4hPBhgJQA2gMAfAQIACABQACACAEABQBSA1DYDdQBLBNA3BBIBPBgQBABSAFArIAAADQAhCCBqDzQBFCgAtA/QAgAhAcAEIgDADIADgDQAagQBVAhQBSAgBhBBQDzChBMCrQAmBWDOBoQCuBXEFBVQDoBMDMArQDKArAogRQACgBBtiiQB7i6BzhvQF9l2E6FxQHhIyD1BXQBNAbAsgYQAWgMAGgSIBCANQBTANBYAAQEYABDWh+QAtgaAjgqIA1hNQBChiBigbQA7gRAZAHQAMAEAcAYQBCA6C5AAQAKAABdAUQBZASARgMQAbgUAnAOQAKAEBBAlQAwAbAhACQAwACAqgpQAfgeBtANQA2AFAZgCQAqgDAWgWQCOiNB+A1QAhAOA3AjQAwAaAfgMQCng8CygpQA3gNCoA4QCwA7AdgBQA0gCBSgMQA2gHASAGQAXAGALAlQAJAeAMBfIBMaKMggwgANQACADADACQgGgCgEgDMjk1gBZQBbB6AfA6QhhhShohig");
	this.shape_7.setTransform(659.0056,173.8224);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},89).to({state:[{t:this.shape_7}]},54).wait(1));

	// gradient_background2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#C9F1F8","#6FBCFD","#54C8F8","#BBF9FF","#EDB983"],[0,0.18,0.514,0.729,1],-37.4,-1254.7,-36.3,385.7).s().p("EhkXA4WMAAAhwrMDIvAAAMAAABwrg");
	this.shape_8.setTransform(658.225,212.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#C9F1F8","#6FBCFD","#54C8F8","#BBF9FF","#EDB983"],[0,0.18,0.514,0.729,1],-82.9,-637,-82.4,284.9).s().p("EhkXA91MAAAh7pMDIvAAAMAAAB7pg");
	this.shape_9.setTransform(658.225,247.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_8}]},14).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_9}]},65).to({state:[{t:this.shape_8}]},54).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(24).to({_off:true},65).wait(54).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-396.4,-163.4,2181.5,1156.6000000000001);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.LuckyCookie2();
	this.instance.setTransform(-10.35,1,0.5149,0.5149,-15.7616,0,0,16.3,14.2);

	this.instance_1 = new lib.LuckyCookie1();
	this.instance_1.setTransform(11.45,-0.3,0.4587,0.4587,29.2295,0,0,14.7,15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.4,-9.9,40.9,19.8);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.LuckyCookie2();
	this.instance.setTransform(-9.4,-0.5,0.5149,0.5149,-15.7616,0,0,16.3,14.2);

	this.instance_1 = new lib.LuckyCookie1();
	this.instance_1.setTransform(10.5,0.4,0.4587,0.4587,29.2295,0,0,14.7,15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-9.7,39,19.5);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Palm_1();
	this.instance.setTransform(22.45,0.7,1.4714,1.4714,29.2321,0,0,5.9,6);

	this.instance_1 = new lib.Palm_1();
	this.instance_1.setTransform(-25.3,6.2,1.4714,1.4714,0,-0.7653,179.2347,5.7,5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-11.3,68,22.700000000000003);


(lib.lotteryScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_15 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(65));

	// pagoda
	this.instance = new lib.pagoda();
	this.instance.setTransform(205.85,-352.35,1,1,0,0,0,635.2,617.9);
	this.instance.alpha = 0.1992;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({regX:635.1,scaleX:1.259,scaleY:1.259,x:210.1,y:-364.35},0).wait(65).to({regX:635.2,scaleX:1,scaleY:1,x:221.85,y:-352.35,alpha:0.1289},0).wait(1));

	// clouds
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.208)").s().p("EhfDAOhIlYh8IAAnOQCngXCLAJQC/AMBvBIQCeBnCiB2QBRA7AxAmQALgJATgNQAlgaAmgQQB5g0BSA+QBCAxBDA4QA4AnB3AqQCmA7CuASQj/A3lRAaQiyAOigAAQm6AAkqhqgEBRsAOJQFdh2CChLQCDhMCMgTQBGgKAsAGQBQiFB1hiQA/g0BMghIAAHxQkzBXp/BIQjHAXjRASIipAOgEAtXAOhIjlgUIEagWQExgWB1AAQBPAADIgXQDlgaEBgrQK2h0HbilQExhrFKieQD2h2DriGIAADCQmzC9p+DpQtME0vrAkQh5AEh2AAQi7AAizgKgEA8QAHAQDUg0BlgvQCchKCBhwIAshuQAchEBdgWQAvgLApADQBphuBSiEQA3hZDAgYQBhgNBVAGIAVgsQAdg3Arg8QCJjBDcikQBfhJB2gkIGXAAIAjALIAANVQjpB6i0BNQmMCqvxChQk/AzlXArQjTAbhUAJIDLgsgEhHlAHHQzmgBpQlGIAAkAQFJDAHdCiQH1CsN3AOQG8AHFXgcQh/AQjNAQQmVAgmCAAIgMAAgEhcpgADQkniLjLiQIAArsIS1AAQDDBPArCAQAwCQAZC4QAMBcADA/IAvgZQA6gdA4gRQCyg3BZBTQCIB/BfCeIAYgNQAegPAegFQBggQA+BSQBjCDAhAhIA3gYQBHgTBTAVQBSAUDWAOQBsAHBaADQnpBCpOARQiaAFiPAAQu3AAm6jQgEA7cgANQGCicDniBQC7hoE+kAQDPinDpjPIDbAAQpCI/s7FYQkEBsj+BHIjTA1IFdiEgAcqAmQBYgGBTgLQELgiB1hMQCJhZBZglQBWgkAyAIQBCALAsALIAIgTQAMgWATgTQA8g8BuAAQBuAABjAFIBNAGQgBgNAEgUQAHgnAVghQBFhoC5AAQCVAADMADQCTAABTgOQBSgOB5hHQA8gkAsghQiMB5jmCJQnOETnFBSQnGBSowAgQiuALimAEIiCACgEgkDgE7Qq3gumxhnQlJhOmsjBQkmiEktinIH9AAQI+FmQkDlQISBzGfArQkFgClbgYg");
	this.shape.setTransform(202.4504,-259.9602,1.0109,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(14).to({scaleX:1.2726,scaleY:1.259,x:205.6921,y:-248.122},0).wait(65).to({scaleX:1.0109,scaleY:1,x:202.4504,y:-259.9602},0).wait(1));

	// wall
	this.instance_1 = new lib.CachedBmp_491();
	this.instance_1.setTransform(-444.05,265.55,0.3333,0.3333);

	this.instance_2 = new lib.CachedBmp_490();
	this.instance_2.setTransform(-608.15,413.5,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},14).to({state:[{t:this.instance_1}]},65).wait(1));

	// far_mountains
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(153,153,153,0.047)").s().p("EhHvAYrMgvDgAXIgpxaIgJgFQiUhNCXhHQDEiKD7ihICPhcQGMj7DmhqQA9grBYgHIAZgBQBJgHA6AXQBXAkBABvIBNALQBRAVAcAvQAuBNAaATQApAdAugxQA7g9BOAOQBOANAUBKQAIAdAbg+QAohoAfhEQCDkfCngjIC/AUQDNAdBMAxQBjA/AdAAQAoAAAwhTQAbguA/g7QBDhABMgtQDBh1BkBOIAQAMQASAIASAKQCIBMB5CrQCJCcAaCEIAZgFQAggGAbgLQBXgjARg8QAUhGBRgSQAjgIAcAIQAdAIAJAVQAKAXAcAVQAbAXAcAJQBKAXAJhPQAEgnAkhGQAEgKBMiJQA0hfAghIQAshlAWhdQAti+BdiJQBbiGBmgiQBRgaBiDUQAbA6A0B8QAuBpAeAuQAtBBAtACQAbABAsgeQAsgdAVADQAiAFAgBIQBPCxAoAxQA1A9A5g2QAQgPBiiaQByixBXhvQExmGDyAxQDwAvCnDfQAmA0BBBsQAwBQAWAQQAsAgCND2QA0BbBCB6IABACIgBgDIAYAhQATASAZAFQAqAHAgglQATgXAJgcQBckKBtjvQBDiTA4hhQAbgxAPgSQBDhtBThiIACgCIgCABQAug4BCgzQBYhEBHgJQAngKAXAOIACABIAEADQA8AuCeDAQA3BDAoA4IA6BTQAvBIAEAlIAAACQAYBxBNDUQAzCLAhA2QAYAdAUADIgCADIACgCQATgOA+AcQA8AcBHA5QCyCLA4CVQAaBFCCBSIAWAOQCABLC/BKQCpBCCWAlQCTAmAegPQACgBBPiNQAuhRAthCQAqg/AqgwQEXlEDmFAQArA9ApA2QEiF/CdBCQA4AXAggVQARgKAEgQIAwAMQA+ALBAAAQDNABCchtQAhgXAaglIAnhDQAwhUBHgYQAsgPASAGQAJAEAVAVQAvAyCIAAQAIAABDASQBCAPAMgLQAUgRAdANQAGADAwAgQAkAXAYACQAjACAfgkQAWgaBQALQAoAFASgCQAegDAQgSQBoh7BdAuQAYAMApAfQAiAWAYgKQB5g0CDgkQAogLB7AwQCBA0AVgBQAmgCA8gKQAogGANAEQARAGAIAgQAGAaAJBSIA4WvI3/gMIAEAFIgHgFMinhgBNQBCBqAXAzQhIhIhMhVg");
	this.shape_1.setTransform(189.8932,128.0045);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(153,153,153,0.047)").s().p("EhaUAfEMg7QgAcIg018QgFgEgFgCQi7hgC/haQD3iuE7jLQBeg9BXg3QHyk8EhiFQBNg2BvgKIAgAAQBbgJBJAdQBuAtBRCMIBgAOQBnAaAjA7QA6BhAgAYQA0AlA6g+QBKhMBjAQQBiASAYBcQALAlAhhOQAziDAnhVQCllpDTgtIDwAZQECAkBgA+QB8BQAlAAQAyAAA9hpQAhg5BQhLQBVhRBeg4QD0iUB9BiIAUAQQAXAKAXANQCrBfCYDXQCuDFAgCmIAfgHQAogHAigNQBugtAWhMQAYhXBngXQArgKAkAKQAkAKAMAbQANAcAjAbQAhAcAkAMQBdAdALhkQAGgxAthYQAFgNBgisQBBh3AohbQA4iAAch0QA5jwB0isQBzipCAgqQBmghB8ELQAiBJBACbQA7CFAmA6QA4BSA5ADQAhABA4gmQA3gkAbADQArAGAoBbQBjDfAzA9QBDBOBHhEQAVgUB8jCQCOjeBuiMQGAnrExA9QEtA8DTEYQAwBCBSCIQA8BlAcAUQA4AoCxE2QBCBzBTCZIABACIgBgDIAeApQAYAXAfAGQA1AKApgwQAYgcALgjQB0lQCJksQBVi6BFh6QAjg9ASgYQBViIBph7IABgDIgBABQA5hGBThAQBvhWBZgLQAygNAcASIADABQACACADABQBMA6DGDyQBGBUAyBHIBJBpQA8BaAEAvIAAADQAfCOBhEKQBACvAqBFQAdAkAZAEIgCADIACgCQAZgSBNAkQBMAjBaBIQDgCvBGC7QAhBYCjBnIAcAQQChBgDwBdQDWBSC9AwQC5AvAmgTQACgBBkixQA6hnA4hSQA1hRA0g7QFgmZEhGUIBqCRQFtHiDGBTQBHAdAogaQAVgOAFgTIA9AOQBNAPBRAAQECABDFiKQApgcAhguIAxhVQA8hrBageQA3gTAXAJQAMAEAZAbQA8A+CrAAQAKAABVAXQBTATAPgNQAZgWAkAQQAIAEA9AoQAtAeAeACQAsADAnguQAcggBlAOQAyAFAXgCQAmgDAUgYQCDibB0A7QAfAPAzAmQArAdAegNQCZhCClgsQAygPCaA9QCjBBAbgBQAwgDBLgNQAygHARAGQAVAHAKApQAIAgALBnIBHcoI+MgPQABAEADACQgFgCgEgEMjS6gBhQBUCFAdBAQhahahghrg");
	this.shape_2.setTransform(189.987,240.3524);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},14).to({state:[{t:this.shape_1}]},65).wait(1));

	// gradient_background
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#C9F1F8","#3EA6FF","#3EC8F8","#BBF9FF","#EDB983"],[0,0.18,0.514,0.729,1],-33.7,-935.2,-32.8,369).s().p("EhlgA4WMAAAhwrMDLBAAAMAAABwrg");
	this.shape_3.setTransform(207.375,-14.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#C9F1F8","#3EA6FF","#3EC8F8","#BBF9FF","#EDB983"],[0,0.18,0.514,0.729,1],-42.5,-1177.4,-41.4,464.6).s().p("Eh/zBG8MAAAiN2MD/nAAAMAAACN2g");
	this.shape_4.setTransform(211.95,63.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3,p:{y:-14.875}}]}).to({state:[{t:this.shape_4}]},14).to({state:[{t:this.shape_3,p:{y:-2.875}}]},65).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-782.8,-1142.2,1945.6,1672.7);


(lib.woman_standing = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Hat
	this.hat = new lib.hat();
	this.hat.name = "hat";
	this.hat.setTransform(144.8,35.65,1.5227,1.5227,0,0,0,62,23);

	this.timeline.addTween(cjs.Tween.get(this.hat).wait(1));

	// woman_face
	this.instance = new lib.mouuth_woman_smiling();
	this.instance.setTransform(129.85,87,1,1,0,0,0,6.7,2.5);

	this.face = new lib.woman_face();
	this.face.name = "face";
	this.face.setTransform(161.25,65.4,1.5112,1.5112,0,0,0,45,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.face},{t:this.instance}]}).wait(1));

	// Right_hand
	this.rightHand = new lib.rightHand();
	this.rightHand.name = "rightHand";
	this.rightHand.setTransform(135.7,140.75,1.5227,1.5227,0,0,0,17.5,11.9);

	this.timeline.addTween(cjs.Tween.get(this.rightHand).wait(1));

	// frame
	this.frame = new lib.frame();
	this.frame.name = "frame";
	this.frame.setTransform(57.7,176.7,0.6804,0.6804,-1.4754,0,0,88.2,43.9);

	this.timeline.addTween(cjs.Tween.get(this.frame).wait(1));

	// crate
	this.crate = new lib.crate();
	this.crate.name = "crate";
	this.crate.setTransform(42.05,165.2,0.6804,0.6804,-1.4754,0,0,61.2,25.9);

	this.timeline.addTween(cjs.Tween.get(this.crate).wait(1));

	// wheel
	this.spinningWheel = new lib.StaticWheel();
	this.spinningWheel.name = "spinningWheel";
	this.spinningWheel.setTransform(18.3,191.9,0.6031,0.6031,-1.4745,0,0,24.7,24.7);

	this.timeline.addTween(cjs.Tween.get(this.spinningWheel).wait(1));

	// Body
	this.body = new lib.body();
	this.body.name = "body";
	this.body.setTransform(145.1,139.35,1.5227,1.5227,0,0,0,16,25.2);

	this.timeline.addTween(cjs.Tween.get(this.body).wait(1));

	// Left_hand
	this.leftHand = new lib.leftHand();
	this.leftHand.name = "leftHand";
	this.leftHand.setTransform(122.7,135.2,1.5227,1.5227,0,0,0,15.2,12.8);

	this.timeline.addTween(cjs.Tween.get(this.leftHand).wait(1));

	// rightLeg
	this.rightLeg = new lib.rightLeg();
	this.rightLeg.name = "rightLeg";
	this.rightLeg.setTransform(167.05,173.85,1.6957,1.7009,0,0,180,0.1,0.1);
	this.rightLeg.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,0);

	this.timeline.addTween(cjs.Tween.get(this.rightLeg).wait(1));

	// leftLeg
	this.leftLeg = new lib.leftLeg();
	this.leftLeg.name = "leftLeg";
	this.leftLeg.setTransform(129.1,182.75,1.6923,1.6985,0,0,0,5.4,5.6);

	this.timeline.addTween(cjs.Tween.get(this.leftLeg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.woman_standing, new cjs.Rectangle(0,0.7,239.3,206.5), null);


(lib.woman_selection = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// unvisible
	this.spinningWheel = new lib.Spinning_Wheel();
	this.spinningWheel.name = "spinningWheel";
	this.spinningWheel.setTransform(93.95,45.65,0.2103,0.2103,0,0,0,24.5,24.8);
	this.spinningWheel.alpha = 0;

	this.frame = new lib.frame();
	this.frame.name = "frame";
	this.frame.setTransform(93.4,31.15,0.2103,0.2103,0,0,0,88,44);
	this.frame.alpha = 0;

	this.crate = new lib.crate();
	this.crate.name = "crate";
	this.crate.setTransform(105.5,48.6,0.2103,0.2103,0,0,0,61.1,25.9);
	this.crate.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.crate},{t:this.frame},{t:this.spinningWheel}]}).wait(1));

	// Hat
	this.hat = new lib.hat();
	this.hat.name = "hat";
	this.hat.setTransform(94.4,35,1.5227,1.5227,0,0,0,62,23);

	this.timeline.addTween(cjs.Tween.get(this.hat).wait(1));

	// woman_face
	this.instance = new lib.mouuth_woman_smiling();
	this.instance.setTransform(79.45,86.35,1,1,0,0,0,6.7,2.5);

	this.instance_1 = new lib.woman_face();
	this.instance_1.setTransform(110.85,64.75,1.5112,1.5112,0,0,0,45,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Body
	this.body = new lib.body();
	this.body.name = "body";
	this.body.setTransform(83.95,138.7,1.5227,1.5227,0,0,0,16,25.2);

	this.timeline.addTween(cjs.Tween.get(this.body).wait(1));

	// rightHand
	this.rightHand = new lib.handOpenRight();
	this.rightHand.name = "rightHand";
	this.rightHand.setTransform(107.3,136.3,1.1664,1.1492,0,-7.1512,-8.3879,12.4,18.9);

	this.timeline.addTween(cjs.Tween.get(this.rightHand).wait(1));

	// leftHand
	this.leftHand = new lib.handOpenLeft();
	this.leftHand.name = "leftHand";
	this.leftHand.setTransform(60.9,134.6,1.1234,1.1985,0,16.0712,21.3095,9.4,21);

	this.timeline.addTween(cjs.Tween.get(this.leftHand).wait(1));

	// Leg_right
	this.rightLeg = new lib.rightLeg();
	this.rightLeg.name = "rightLeg";
	this.rightLeg.setTransform(94.9,180,1.6999,1.6999,0,0,0,5.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.rightLeg).wait(1));

	// Leg_left
	this.leftLeg = new lib.rightLeg();
	this.leftLeg.name = "leftLeg";
	this.leftLeg.setTransform(73.05,180.15,1.6959,1.6999,0,0,180,5.4,6.8);

	this.timeline.addTween(cjs.Tween.get(this.leftLeg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.woman_selection, new cjs.Rectangle(0,0,188.9,191.7), null);


(lib.woman_HappyWalkingWithStones = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Hat
	this.hat = new lib.hat();
	this.hat.name = "hat";
	this.hat.setTransform(144.15,35,1.5227,1.5227,0,0,0,62,23);

	this.timeline.addTween(cjs.Tween.get(this.hat).wait(24));

	// woman_face
	this.instance = new lib.mouuth_woman_smiling();
	this.instance.setTransform(129.2,86.35,1,1,0,0,0,6.7,2.5);

	this.instance_1 = new lib.woman_face();
	this.instance_1.setTransform(160.6,64.75,1.5112,1.5112,0,0,0,45,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(24));

	// Right_hand
	this.rightHand = new lib.rightHand();
	this.rightHand.name = "rightHand";
	this.rightHand.setTransform(135.7,138.75,1.5227,1.5227,0,0,0,17.5,11.9);

	this.timeline.addTween(cjs.Tween.get(this.rightHand).wait(24));

	// frame
	this.frame = new lib.frame();
	this.frame.name = "frame";
	this.frame.setTransform(57.7,174.7,0.6804,0.6804,-1.4754,0,0,88.2,43.9);

	this.timeline.addTween(cjs.Tween.get(this.frame).wait(24));

	// crate
	this.crate = new lib.crate();
	this.crate.name = "crate";
	this.crate.setTransform(42.05,163.2,0.6804,0.6804,-1.4754,0,0,61.2,25.9);

	this.timeline.addTween(cjs.Tween.get(this.crate).wait(24));

	// PileStones
	this.instance_2 = new lib.smal_pile_stones();
	this.instance_2.setTransform(61.05,138.45,0.7175,0.7175,-8.2909,0,0,87.9,25.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24));

	// wheel
	this.spinningWheel = new lib.Spinning_Wheel();
	this.spinningWheel.name = "spinningWheel";
	this.spinningWheel.setTransform(18.3,189.9,0.6031,0.6031,-1.4745,0,0,24.7,24.7);

	this.timeline.addTween(cjs.Tween.get(this.spinningWheel).wait(24));

	// Body
	this.body = new lib.body();
	this.body.name = "body";
	this.body.setTransform(145.1,137.35,1.5227,1.5227,0,0,0,16,25.2);

	this.timeline.addTween(cjs.Tween.get(this.body).wait(24));

	// Left_hand
	this.leftHand = new lib.leftHand();
	this.leftHand.name = "leftHand";
	this.leftHand.setTransform(122.7,133.2,1.5227,1.5227,0,0,0,15.2,12.8);

	this.timeline.addTween(cjs.Tween.get(this.leftHand).wait(24));

	// rightLeg
	this.rightLeg = new lib.rightLeg();
	this.rightLeg.name = "rightLeg";
	this.rightLeg.setTransform(160.05,173.35,1.7068,1.7009,0,0,180,0.1,0.1);
	this.rightLeg.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,0);

	this.timeline.addTween(cjs.Tween.get(this.rightLeg).wait(2).to({skewX:-15.4811,skewY:164.519,x:159.05,y:170.85},0).wait(2).to({skewX:-28.7049,skewY:151.2951,x:157.55,y:167.45},0).wait(2).to({regX:0,skewX:-41.4511,skewY:138.5493,x:154.65,y:165.8},0).wait(2).to({regX:-0.1,regY:0.2,scaleY:1.7008,skewX:-48.1761,skewY:131.8244,x:154.35,y:164.9},0).wait(2).to({scaleX:1.7067,skewX:-53.6922,skewY:126.3089,x:150.8,y:164.4},0).wait(2).to({skewX:-42.4653,skewY:137.5357,x:149.95,y:164.45},0).wait(2).to({regY:0.3,skewX:-31.7026,skewY:148.298,x:143.55,y:168.05},0).wait(2).to({regX:0,regY:0.2,scaleX:1.7068,skewX:12.7779,skewY:192.7785,x:151.9,y:173.9},0).wait(2).to({regY:0.1,scaleY:1.7009,skewX:22.9884,skewY:202.9889,x:150,y:174.7},0).wait(2).to({regX:-0.1,regY:0.2,skewX:1.2774,skewY:181.2782,x:148.55,y:174.9},0).wait(2).to({x:149.55},0).wait(2));

	// leftLeg
	this.leftLeg = new lib.leftLeg();
	this.leftLeg.name = "leftLeg";
	this.leftLeg.setTransform(138.3,177,1.6948,1.6985,-34.2825,0,0,5.5,5.7);

	this.timeline.addTween(cjs.Tween.get(this.leftLeg).wait(2).to({regX:5.4,scaleX:1.6947,rotation:-42.7588,x:138.65,y:179.1},0).wait(2).to({regX:5.5,rotation:-27.3201,x:138.35,y:179.45},0).wait(2).to({scaleX:1.6948,rotation:17.8869,x:136.75,y:180.9},0).wait(2).to({rotation:7.6807,y:181.05},0).wait(2).to({regY:5.8,scaleX:1.6947,scaleY:1.6984,rotation:0.9631,x:136.7,y:181.7},0).wait(2).to({scaleY:1.6985,rotation:-17.7759,x:140.25,y:184.25},0).wait(2).to({x:147.25},0).wait(2).to({regY:5.7,rotation:-14.6721,x:152,y:179},0).wait(2).to({regY:5.8,scaleY:1.6984,rotation:-30.6123,x:153.05,y:178.65},0).wait(2).to({scaleY:1.6985,rotation:-62.6085,x:153.2,y:179.1},0).wait(2).to({scaleY:1.6984,rotation:-36.1631,x:141.65},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,238.7,205.2);


(lib.woman_HappyWalking = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Hat
	this.hat = new lib.hat();
	this.hat.name = "hat";
	this.hat.setTransform(144.8,33.65,1.5227,1.5227,0,0,0,62,23);

	this.timeline.addTween(cjs.Tween.get(this.hat).wait(24));

	// woman_face
	this.instance = new lib.mouuth_woman_smiling();
	this.instance.setTransform(129.85,85,1,1,0,0,0,6.7,2.5);

	this.instance_1 = new lib.woman_face();
	this.instance_1.setTransform(161.25,63.4,1.5112,1.5112,0,0,0,45,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(24));

	// Right_hand
	this.rightHand = new lib.rightHand();
	this.rightHand.name = "rightHand";
	this.rightHand.setTransform(135.7,138.75,1.5227,1.5227,0,0,0,17.5,11.9);

	this.timeline.addTween(cjs.Tween.get(this.rightHand).wait(24));

	// frame
	this.frame = new lib.frame();
	this.frame.name = "frame";
	this.frame.setTransform(57.7,174.7,0.6804,0.6804,-1.4754,0,0,88.2,43.9);

	this.timeline.addTween(cjs.Tween.get(this.frame).wait(24));

	// crate
	this.crate = new lib.crate();
	this.crate.name = "crate";
	this.crate.setTransform(42.05,163.2,0.6804,0.6804,-1.4754,0,0,61.2,25.9);

	this.timeline.addTween(cjs.Tween.get(this.crate).wait(24));

	// wheel
	this.spinningWheel = new lib.Spinning_Wheel();
	this.spinningWheel.name = "spinningWheel";
	this.spinningWheel.setTransform(18.3,189.9,0.6031,0.6031,-1.4745,0,0,24.7,24.7);

	this.timeline.addTween(cjs.Tween.get(this.spinningWheel).wait(24));

	// Body
	this.body = new lib.body();
	this.body.name = "body";
	this.body.setTransform(145.1,137.35,1.5227,1.5227,0,0,0,16,25.2);

	this.timeline.addTween(cjs.Tween.get(this.body).wait(24));

	// Left_hand
	this.leftHand = new lib.leftHand();
	this.leftHand.name = "leftHand";
	this.leftHand.setTransform(122.7,133.2,1.5227,1.5227,0,0,0,15.2,12.8);

	this.timeline.addTween(cjs.Tween.get(this.leftHand).wait(24));

	// rightLeg
	this.rightLeg = new lib.rightLeg();
	this.rightLeg.name = "rightLeg";
	this.rightLeg.setTransform(160.05,173.35,1.7068,1.7009,0,0,180,0.1,0.1);
	this.rightLeg.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,0);

	this.timeline.addTween(cjs.Tween.get(this.rightLeg).wait(2).to({skewX:-15.4811,skewY:164.519,x:159.05,y:170.85},0).wait(2).to({skewX:-28.7049,skewY:151.2951,x:157.55,y:167.45},0).wait(2).to({regX:0,skewX:-41.4511,skewY:138.5493,x:154.65,y:165.8},0).wait(2).to({regX:-0.1,regY:0.2,scaleY:1.7008,skewX:-48.1761,skewY:131.8244,x:154.35,y:164.9},0).wait(2).to({scaleX:1.7067,skewX:-53.6922,skewY:126.3089,x:150.8,y:164.4},0).wait(2).to({skewX:-42.4653,skewY:137.5357,x:149.95,y:164.45},0).wait(2).to({regY:0.3,skewX:-31.7026,skewY:148.298,x:143.55,y:168.05},0).wait(2).to({regX:0,regY:0.2,scaleX:1.7068,skewX:12.7779,skewY:192.7785,x:151.9,y:173.9},0).wait(2).to({regY:0.1,scaleY:1.7009,skewX:22.9884,skewY:202.9889,x:150,y:174.7},0).wait(2).to({regX:-0.1,regY:0.2,skewX:1.2774,skewY:181.2782,x:148.55,y:174.9},0).wait(2).to({x:149.55},0).wait(2));

	// leftLeg
	this.leftLeg = new lib.leftLeg();
	this.leftLeg.name = "leftLeg";
	this.leftLeg.setTransform(138.3,177,1.6948,1.6985,-34.2825,0,0,5.5,5.7);

	this.timeline.addTween(cjs.Tween.get(this.leftLeg).wait(2).to({regX:5.4,scaleX:1.6947,rotation:-42.7588,x:138.65,y:179.1},0).wait(2).to({regX:5.5,rotation:-27.3201,x:138.35,y:179.45},0).wait(2).to({scaleX:1.6948,rotation:17.8869,x:136.75,y:180.9},0).wait(2).to({rotation:7.6807,y:181.05},0).wait(2).to({regY:5.8,scaleX:1.6947,scaleY:1.6984,rotation:0.9631,x:136.7,y:181.7},0).wait(2).to({scaleY:1.6985,rotation:-17.7759,x:140.25,y:184.25},0).wait(2).to({x:147.25},0).wait(2).to({regY:5.7,rotation:-14.6721,x:152,y:179},0).wait(2).to({regY:5.8,scaleY:1.6984,rotation:-30.6123,x:153.05,y:178.65},0).wait(2).to({scaleY:1.6985,rotation:-62.6085,x:153.2,y:179.1},0).wait(2).to({scaleY:1.6984,rotation:-36.1631,x:141.65},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.3,239.3,206.5);


(lib.woman__SadWalking = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Hat
	this.hat = new lib.hat();
	this.hat.name = "hat";
	this.hat.setTransform(144.8,33.65,1.5227,1.5227,0,0,0,62,23);

	this.timeline.addTween(cjs.Tween.get(this.hat).wait(24));

	// woman_face
	this.instance = new lib.mouuth_woman_sad();
	this.instance.setTransform(130.05,84.95,1,1,-14.9983,0,0,7.7,3.5);

	this.instance_1 = new lib.woman_face();
	this.instance_1.setTransform(161.25,63.4,1.5112,1.5112,0,0,0,45,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(24));

	// Right_hand
	this.rightHand = new lib.rightHand();
	this.rightHand.name = "rightHand";
	this.rightHand.setTransform(135.7,138.75,1.5227,1.5227,0,0,0,17.5,11.9);

	this.timeline.addTween(cjs.Tween.get(this.rightHand).wait(24));

	// frame
	this.frame = new lib.frame();
	this.frame.name = "frame";
	this.frame.setTransform(57.7,174.7,0.6804,0.6804,-1.4754,0,0,88.2,43.9);

	this.timeline.addTween(cjs.Tween.get(this.frame).wait(24));

	// crate
	this.crate = new lib.crate();
	this.crate.name = "crate";
	this.crate.setTransform(42.05,163.2,0.6804,0.6804,-1.4754,0,0,61.2,25.9);

	this.timeline.addTween(cjs.Tween.get(this.crate).wait(24));

	// wheel
	this.spinningWheel = new lib.Spinning_Wheel();
	this.spinningWheel.name = "spinningWheel";
	this.spinningWheel.setTransform(18.3,189.9,0.6031,0.6031,-1.4745,0,0,24.7,24.7);

	this.timeline.addTween(cjs.Tween.get(this.spinningWheel).wait(24));

	// Body
	this.body = new lib.body();
	this.body.name = "body";
	this.body.setTransform(145.1,137.35,1.5227,1.5227,0,0,0,16,25.2);

	this.timeline.addTween(cjs.Tween.get(this.body).wait(24));

	// Left_hand
	this.leftHand = new lib.leftHand();
	this.leftHand.name = "leftHand";
	this.leftHand.setTransform(122.7,133.2,1.5227,1.5227,0,0,0,15.2,12.8);

	this.timeline.addTween(cjs.Tween.get(this.leftHand).wait(24));

	// rightLeg
	this.rightLeg = new lib.rightLeg();
	this.rightLeg.name = "rightLeg";
	this.rightLeg.setTransform(160.05,173.35,1.7068,1.7009,0,0,180,0.1,0.1);
	this.rightLeg.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,0);

	this.timeline.addTween(cjs.Tween.get(this.rightLeg).wait(2).to({skewX:-15.4811,skewY:164.519,x:159.05,y:170.85},0).wait(2).to({skewX:-28.7049,skewY:151.2951,x:157.55,y:167.45},0).wait(2).to({regX:0,skewX:-41.4511,skewY:138.5493,x:154.65,y:165.8},0).wait(2).to({regX:-0.1,regY:0.2,scaleY:1.7008,skewX:-48.1761,skewY:131.8244,x:154.35,y:164.9},0).wait(2).to({scaleX:1.7067,skewX:-53.6922,skewY:126.3089,x:150.8,y:164.4},0).wait(2).to({skewX:-42.4653,skewY:137.5357,x:149.95,y:164.45},0).wait(2).to({regY:0.3,skewX:-31.7026,skewY:148.298,x:143.55,y:168.05},0).wait(2).to({regX:0,regY:0.2,scaleX:1.7068,skewX:12.7779,skewY:192.7785,x:151.9,y:173.9},0).wait(2).to({regY:0.1,scaleY:1.7009,skewX:22.9884,skewY:202.9889,x:150,y:174.7},0).wait(2).to({regX:-0.1,regY:0.2,skewX:1.2774,skewY:181.2782,x:148.55,y:174.9},0).wait(2).to({x:149.55},0).wait(2));

	// leftLeg
	this.leftLeg = new lib.leftLeg();
	this.leftLeg.name = "leftLeg";
	this.leftLeg.setTransform(138.3,177,1.6948,1.6985,-34.2825,0,0,5.5,5.7);

	this.timeline.addTween(cjs.Tween.get(this.leftLeg).wait(2).to({regX:5.4,scaleX:1.6947,rotation:-42.7588,x:138.65,y:179.1},0).wait(2).to({regX:5.5,rotation:-27.3201,x:138.35,y:179.45},0).wait(2).to({scaleX:1.6948,rotation:17.8869,x:136.75,y:180.9},0).wait(2).to({rotation:7.6807,y:181.05},0).wait(2).to({regY:5.8,scaleX:1.6947,scaleY:1.6984,rotation:0.9631,x:136.7,y:181.7},0).wait(2).to({scaleY:1.6985,rotation:-17.7759,x:140.25,y:184.25},0).wait(2).to({x:147.25},0).wait(2).to({regY:5.7,rotation:-14.6721,x:152,y:179},0).wait(2).to({regY:5.8,scaleY:1.6984,rotation:-30.6123,x:153.05,y:178.65},0).wait(2).to({scaleY:1.6985,rotation:-62.6085,x:153.2,y:179.1},0).wait(2).to({scaleY:1.6984,rotation:-36.1631,x:141.65},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.3,239.3,206.5);


(lib.wheelbarrow_Dropstones_woman = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_13 = function() {
		this.stop();
		
		this.dispatchEvent("complete")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(1));

	// hat
	this.hat = new lib.hat();
	this.hat.name = "hat";
	this.hat.setTransform(146.55,-75.9,1.5227,1.5227,0,0,0,62,23);

	this.timeline.addTween(cjs.Tween.get(this.hat).wait(14));

	// woman_face
	this.instance = new lib.mouuth_woman_smiling();
	this.instance.setTransform(131.9,-24.05,1,1,0,0,0,6.7,2.5);

	this.instance_1 = new lib.woman_face();
	this.instance_1.setTransform(163.3,-46.15,1.5112,1.5112,0,0,0,45,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(14));

	// hand_right
	this.rightHand = new lib.rightHand();
	this.rightHand.name = "rightHand";
	this.rightHand.setTransform(138.2,26.1,1.5226,1.5226,0,0,0,17.6,11.9);

	this.timeline.addTween(cjs.Tween.get(this.rightHand).wait(1).to({rotation:14.9987,x:135.2,y:23.15},0).wait(1).to({regX:17.7,regY:11.8,x:135.4,y:23},0).wait(1).to({rotation:14.9985,x:134.4,y:17.05},0).wait(1).to({regX:17.8,scaleX:1.6169,scaleY:1.6169,rotation:20.4908,x:131.1,y:16.3},0).wait(4).to({regX:17.7,scaleX:1.5225,scaleY:1.5225,rotation:14.6691,x:135,y:19.8},0).wait(1).to({rotation:0.7149,x:138.05,y:24.35},0).wait(1).to({rotation:0.7149},0).wait(4));

	// body
	this.body = new lib.body();
	this.body.name = "body";
	this.body.setTransform(148.35,26.75,1.5227,1.5227,0,0,0,16,25.2);

	this.timeline.addTween(cjs.Tween.get(this.body).wait(14));

	// frame
	this.instance_2 = new lib.CachedBmp_821();
	this.instance_2.setTransform(3,30.15,0.3333,0.3333);

	this.frame = new lib.frame();
	this.frame.name = "frame";
	this.frame.setTransform(61.3,60,0.6888,0.7158,-4.7361,0,0,88.2,43.9);
	this.frame._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.frame}]},1).to({state:[{t:this.frame}]},1).to({state:[{t:this.frame}]},1).to({state:[{t:this.frame}]},1).to({state:[{t:this.frame}]},1).to({state:[{t:this.frame}]},1).to({state:[{t:this.frame}]},1).to({state:[{t:this.frame}]},1).to({state:[{t:this.frame}]},1).to({state:[{t:this.frame}]},1).to({state:[{t:this.frame}]},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.frame).wait(1).to({_off:false},0).wait(1).to({scaleY:0.7157,rotation:-9.6923,x:61.85,y:59.95},0).wait(1).to({rotation:-13.9023,x:60.45,y:59.75},0).wait(1).to({regY:44,rotation:-18.6092,x:58.55,y:59.55},0).wait(4).to({regY:43.9,rotation:-8.4074,y:59.45},0).wait(1).to({regY:44,scaleY:0.7158,rotation:0,x:60.65,y:60.1},0).wait(5));

	// wheel
	this.instance_3 = new lib.CachedBmp_822();
	this.instance_3.setTransform(86.6,30.15,0.3333,0.3333);

	this.spinningWheel = new lib.StaticWheel();
	this.spinningWheel.name = "spinningWheel";
	this.spinningWheel.setTransform(20.3,74.95,0.6106,0.6344,0,0,0,24.6,24.7);

	this.wheel = new lib.wheel();
	this.wheel.name = "wheel";
	this.wheel.setTransform(22.3,78.25,0.6106,0.6345,-4.7361,0,0,24.6,24.8);
	this.wheel._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.spinningWheel},{t:this.instance_3}]}).to({state:[{t:this.wheel}]},1).to({state:[{t:this.wheel}]},1).to({state:[{t:this.wheel}]},1).to({state:[{t:this.wheel}]},1).to({state:[{t:this.wheel}]},1).to({state:[{t:this.wheel}]},1).to({state:[{t:this.wheel}]},1).to({state:[{t:this.wheel}]},1).to({state:[{t:this.wheel}]},1).to({state:[{t:this.wheel}]},1).to({state:[{t:this.wheel}]},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.wheel).wait(1).to({_off:false},0).wait(1).to({regY:24.7,scaleY:0.6344,rotation:-9.6923,x:24.55,y:81.45},0).wait(1).to({regX:24.7,rotation:-13.9015,x:24.9,y:83.95},0).wait(1).to({scaleX:0.6105,rotation:-18.6093,x:25.1,y:86.45},0).wait(4).to({rotation:-8.4074,x:20.85,y:80.1},0).wait(1).to({regX:24.6,scaleX:0.6106,rotation:0,x:20.3,y:74.95},0).wait(5));

	// crate
	this.crate = new lib.crate();
	this.crate.name = "crate";
	this.crate.setTransform(45.25,47.5,0.6888,0.7158,0,0,0,61.4,25.9);

	this.timeline.addTween(cjs.Tween.get(this.crate).wait(1).to({regX:61.2,rotation:-4.7361,x:44.8,y:48.75},0).wait(1).to({regY:25.8,scaleY:0.7157,rotation:-9.6923,x:44.4,y:50.15},0).wait(1).to({rotation:-13.9023,x:42.4,y:51.2},0).wait(1).to({rotation:-18.6092,x:39.85,y:52.5},0).wait(4).to({regY:25.9,rotation:-8.4074,x:41.4,y:49.35},0).wait(1).to({regX:61.4,scaleY:0.7158,rotation:0,x:45.25,y:47.5},0).wait(5));

	// stones
	this.instance_4 = new lib.smal_pile_stones();
	this.instance_4.setTransform(65,22.85,0.7175,0.7175,-8.2909,0,0,87.9,25.2);

	this.instance_5 = new lib.stone_3();
	this.instance_5.setTransform(-3.85,64.7,0.3513,0.3513,-90,0,0,10,6.1);

	this.instance_6 = new lib.stone_5();
	this.instance_6.setTransform(-47.5,75.85,0.3949,0.5306,0,105.2975,-74.7045,5.4,4.2);

	this.instance_7 = new lib.stone_5();
	this.instance_7.setTransform(-51.8,64.35,0.3949,0.5306,0,105.2975,-74.7045,5.4,4.2);

	this.instance_8 = new lib.stone_6();
	this.instance_8.setTransform(-15.3,90.6,0.3147,0.3147,0,57.5582,-122.4418,-87.4,-38.8);

	this.instance_9 = new lib.stone_1();
	this.instance_9.setTransform(-39.95,70.85,0.2338,0.2338,0,-59.7,120.3,17.1,12.7);

	this.instance_10 = new lib.stone_4();
	this.instance_10.setTransform(-37.2,55.65,0.4709,0.4709,120.0014,0,0,11.7,5.8);

	this.instance_11 = new lib.stone_5();
	this.instance_11.setTransform(-40.35,63.7,0.6193,0.6193,-59.9993,0,0,23.2,-4.6);

	this.instance_12 = new lib.stone_4();
	this.instance_12.setTransform(-47.6,66.2,0.3492,0.3492,-59.998,0,0,10.9,6);

	this.instance_13 = new lib.stone_4();
	this.instance_13.setTransform(-35.45,66.25,0.6193,0.6193,-59.9993,0,0,11.6,6);

	this.instance_14 = new lib.stone_5();
	this.instance_14.setTransform(-44.8,69.65,0.6193,0.6193,-59.9993,0,0,6,4.2);

	this.instance_15 = new lib.stone_5();
	this.instance_15.setTransform(-41.05,48.3,0.6193,0.6193,-59.9993,0,0,6,4.3);

	this.instance_16 = new lib.stone_6();
	this.instance_16.setTransform(-35.05,50.2,0.6193,0.6193,-14.998,0,0,4.7,6.1);

	this.instance_17 = new lib.stone_6();
	this.instance_17.setTransform(-44.85,60.9,0.6193,0.6193,-14.998,0,0,4.6,6.2);

	this.instance_18 = new lib.stone_3();
	this.instance_18.setTransform(-35.25,55,0.2175,0.2175,-75.2951,0,0,19.2,-1);

	this.instance_19 = new lib.stone_5();
	this.instance_19.setTransform(-42.65,56.95,0.3949,0.5307,-60.2976,0,0,5.5,4.2);

	this.instance_20 = new lib.stone_5();
	this.instance_20.setTransform(-47.45,53.75,0.6055,0.6055,-75.297,0,0,5.6,4.2);

	this.instance_21 = new lib.stone_3();
	this.instance_21.setTransform(-54.95,76.05,0.3513,0.3513,0,165.2925,-14.7075,10,6);

	this.instance_22 = new lib.stone_5();
	this.instance_22.setTransform(-41.9,83.4,0.6376,0.8568,0,120.2972,-59.7034,5.5,4.2);

	this.instance_23 = new lib.stone_7();
	this.instance_23.setTransform(-65.9,67.75,0.5803,0.5803,0,10.5512,-169.4488,35.8,5.7);

	this.instance_24 = new lib.stone_6();
	this.instance_24.setTransform(-10.25,113.45,0.5081,0.5081,0,72.5542,-107.4458,-87.3,-38.9);

	this.instance_25 = new lib.stone_6();
	this.instance_25.setTransform(-57.85,71.05,0.5082,0.5082,0,75.2928,-104.7072,3.7,3.2);

	this.instance_26 = new lib.stone_5();
	this.instance_26.setTransform(-43.75,63.7,0.6376,0.8568,0,120.2972,-59.7034,5.5,4.2);

	this.instance_27 = new lib.stone_6();
	this.instance_27.setTransform(2.2,119.8,0.5081,0.5081,0,72.5542,-107.4458,-87.2,-39);

	this.instance_28 = new lib.stone_5();
	this.instance_28.setTransform(-54.1,85.55,0.9777,0.9777,0,150.2962,-29.7038,5.7,4.1);

	this.instance_29 = new lib.stone_1();
	this.instance_29.setTransform(-28.05,78.65,0.3775,0.3775,0,-44.702,135.298,16.7,12.3);

	this.instance_30 = new lib.stone_4();
	this.instance_30.setTransform(-17.4,56.2,0.7603,0.7603,135,0,0,11.7,5.9);

	this.instance_31 = new lib.stone_5();
	this.instance_31.setTransform(-25.5,67.35,1,1,-45,0,0,23.4,-4.5);

	this.instance_32 = new lib.stone_3();
	this.instance_32.setTransform(-8.6,45.55,0.4227,0.4227,120.0004,0,0,9.7,6);

	this.instance_33 = new lib.stone_3();
	this.instance_33.setTransform(-1.65,43.8,0.4227,0.4227,120.0004,0,0,9.7,6);

	this.instance_34 = new lib.stone_4();
	this.instance_34.setTransform(-37.9,68.25,0.5639,0.5639,-45,0,0,11.2,6);

	this.instance_35 = new lib.stone_4();
	this.instance_35.setTransform(-19.05,73.45,1,1,-45,0,0,11.6,6);

	this.instance_36 = new lib.stone_5();
	this.instance_36.setTransform(-35.05,74.95,1,1,-45,0,0,6,4.3);

	this.instance_37 = new lib.stone_5();
	this.instance_37.setTransform(-20.35,43.15,1,1,-45,0,0,6,4.3);

	this.instance_38 = new lib.stone_6();
	this.instance_38.setTransform(-11.7,48.55,1,1,0,0,0,4.8,6);

	this.instance_39 = new lib.stone_6();
	this.instance_39.setTransform(-31.4,61.1,1,1,0,0,0,4.8,6);

	this.instance_40 = new lib.stone_3();
	this.instance_40.setTransform(-14.05,56,0.3513,0.3513,-60.2946,0,0,19.4,-1.1);

	this.instance_41 = new lib.stone_3();
	this.instance_41.setTransform(-36.15,113.2,0.3513,0.3513,-105.2894,0,0,10.1,5.7);

	this.instance_42 = new lib.stone_3();
	this.instance_42.setTransform(-25.1,65.95,0.5679,0.8349,97.2513,0,0,9.8,6.2);

	this.instance_43 = new lib.stone_7();
	this.instance_43.setTransform(-27.3,90.05,0.5803,0.5803,-121.0816,0,0,35.9,5.8);

	this.instance_44 = new lib.stone_7();
	this.instance_44.setTransform(-68.7,141.3,0.5803,0.5803,0,-4.4474,175.5526,35.8,5.8);

	this.instance_45 = new lib.stone_6();
	this.instance_45.setTransform(10.5,173.95,0.5081,0.5081,0,57.5545,-122.4455,-87.2,-39);

	this.instance_46 = new lib.stone_6();
	this.instance_46.setTransform(-21.25,108.8,1,1,-14.9983,0,0,4.8,6.1);

	this.instance_47 = new lib.stone_6();
	this.instance_47.setTransform(-37.05,126,1,1,-14.9983,0,0,4.8,6.1);

	this.instance_48 = new lib.stone_3();
	this.instance_48.setTransform(-29.75,129,0.5679,0.8348,82.252,0,0,9.8,6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4},{t:this.instance_5,p:{regX:10,regY:6.1,rotation:-90,x:-3.85,y:64.7,scaleX:0.3513,scaleY:0.3513,alpha:1}}]},1).to({state:[{t:this.instance_4},{t:this.instance_5,p:{regX:10.1,regY:5.9,rotation:-90.2912,x:-21.25,y:85.3,scaleX:0.3513,scaleY:0.3513,alpha:1}}]},1).to({state:[{t:this.instance_42,p:{scaleY:0.8349,rotation:97.2513,x:-25.1,y:65.95,regX:9.8,regY:6.2,scaleX:0.5679,alpha:1}},{t:this.instance_41,p:{rotation:-105.2894,x:-36.15,y:113.2,regX:10.1,regY:5.7,alpha:1}},{t:this.instance_40,p:{regX:19.4,rotation:-60.2946,x:-14.05,y:56,regY:-1.1,scaleX:0.3513,scaleY:0.3513,alpha:1}},{t:this.instance_39,p:{regY:6,rotation:0,x:-31.4,y:61.1,regX:4.8,scaleX:1,scaleY:1,skewX:0,skewY:0,alpha:1}},{t:this.instance_38,p:{regY:6,rotation:0,x:-11.7,y:48.55,regX:4.8,scaleX:1,scaleY:1,skewX:0,skewY:0,alpha:1}},{t:this.instance_37,p:{rotation:-45,x:-20.35,y:43.15,regY:4.3,alpha:1}},{t:this.instance_36,p:{regY:4.3,rotation:-45,x:-35.05,y:74.95,alpha:1}},{t:this.instance_35,p:{regX:11.6,regY:6,rotation:-45,x:-19.05,y:73.45}},{t:this.instance_34,p:{regX:11.2,rotation:-45,x:-37.9,y:68.25,regY:6,scaleX:0.5639,scaleY:0.5639,alpha:1}},{t:this.instance_33,p:{regX:9.7,regY:6,rotation:120.0004,x:-1.65,y:43.8,alpha:1}},{t:this.instance_32,p:{rotation:120.0004,x:-8.6,y:45.55,regX:9.7,scaleX:0.4227,scaleY:0.4227,skewX:0,skewY:0,alpha:1}},{t:this.instance_31,p:{regX:23.4,rotation:-45,x:-25.5,y:67.35,alpha:1}},{t:this.instance_30,p:{rotation:135,x:-17.4,y:56.2,regX:11.7,scaleX:0.7603,scaleY:0.7603,alpha:1}},{t:this.instance_29,p:{regX:16.7,regY:12.3,skewX:-44.702,skewY:135.298,x:-28.05,y:78.65,alpha:1}},{t:this.instance_28,p:{skewX:150.2962,skewY:-29.7038,x:-54.1,y:85.55,regY:4.1,alpha:1}},{t:this.instance_27,p:{skewX:72.5542,skewY:-107.4458,x:2.2,y:119.8,regX:-87.2,regY:-39,scaleX:0.5081,scaleY:0.5081,rotation:0,alpha:1}},{t:this.instance_26,p:{skewX:120.2972,skewY:-59.7034,x:-43.75,y:63.7,regX:5.5,alpha:1}},{t:this.instance_25,p:{regY:3.2,skewX:75.2928,skewY:-104.7072,x:-57.85,y:71.05,regX:3.7,scaleX:0.5082,scaleY:0.5082,rotation:0,alpha:1}},{t:this.instance_24,p:{regX:-87.3,regY:-38.9,skewX:72.5542,skewY:-107.4458,x:-10.25,y:113.45,scaleX:0.5081,scaleY:0.5081,alpha:1}},{t:this.instance_23,p:{regY:5.7,skewX:10.5512,skewY:-169.4488,x:-65.9,y:67.75,regX:35.8,rotation:0,alpha:1}},{t:this.instance_22,p:{skewX:120.2972,skewY:-59.7034,x:-41.9,y:83.4,regX:5.5,alpha:1}},{t:this.instance_21,p:{regX:10,skewX:165.2925,skewY:-14.7075,x:-54.95,y:76.05,regY:6,scaleX:0.3513,scaleY:0.3513,rotation:0,alpha:1}},{t:this.instance_20,p:{regY:4.2,rotation:-75.297,x:-47.45,y:53.75,regX:5.6,alpha:1}},{t:this.instance_19,p:{regY:4.2,rotation:-60.2976,x:-42.65,y:56.95,regX:5.5,alpha:1}},{t:this.instance_18,p:{regX:19.2,regY:-1,rotation:-75.2951,x:-35.25,y:55,scaleX:0.2175,scaleY:0.2175,alpha:1}},{t:this.instance_17,p:{regY:6.2,rotation:-14.998,x:-44.85,y:60.9,regX:4.6,scaleX:0.6193,scaleY:0.6193,alpha:1}},{t:this.instance_16,p:{regX:4.7,regY:6.1,rotation:-14.998,x:-35.05,y:50.2,scaleX:0.6193,scaleY:0.6193,alpha:1}},{t:this.instance_15,p:{regX:6,regY:4.3,rotation:-59.9993,x:-41.05,y:48.3,alpha:1}},{t:this.instance_14,p:{regX:6,rotation:-59.9993,x:-44.8,y:69.65,regY:4.2,alpha:1}},{t:this.instance_13,p:{regX:11.6,regY:6,rotation:-59.9993,x:-35.45,y:66.25,scaleX:0.6193,scaleY:0.6193,alpha:1}},{t:this.instance_12,p:{regX:10.9,regY:6,rotation:-59.998,x:-47.6,y:66.2,alpha:1}},{t:this.instance_5,p:{regX:9.8,regY:5.9,rotation:105.0018,x:-33.7,y:47.9,scaleX:0.2618,scaleY:0.2618,alpha:1}},{t:this.instance_11,p:{regY:-4.6,rotation:-59.9993,x:-40.35,y:63.7,regX:23.2,alpha:1}},{t:this.instance_10,p:{regX:11.7,regY:5.8,scaleX:0.4709,scaleY:0.4709,rotation:120.0014,x:-37.2,y:55.65,alpha:1}},{t:this.instance_9,p:{regX:17.1,regY:12.7,skewX:-59.7,skewY:120.3,x:-39.95,y:70.85,alpha:1}},{t:this.instance_8,p:{regX:-87.4,regY:-38.8,skewX:57.5582,skewY:-122.4418,x:-15.3,y:90.6,scaleX:0.3147,scaleY:0.3147,rotation:0,alpha:1}},{t:this.instance_7,p:{regY:4.2,scaleY:0.5306,skewX:105.2975,skewY:-74.7045,x:-51.8,y:64.35,regX:5.4,alpha:1}},{t:this.instance_6,p:{scaleY:0.5306,skewX:105.2975,skewY:-74.7045,x:-47.5,y:75.85,regX:5.4,regY:4.2,alpha:1}}]},1).to({state:[{t:this.instance_42,p:{scaleY:0.8348,rotation:82.252,x:-29.75,y:87.5,regX:9.8,regY:6.2,scaleX:0.5679,alpha:1}},{t:this.instance_41,p:{rotation:-120.2872,x:-28.2,y:136,regX:10.1,regY:5.7,alpha:1}},{t:this.instance_40,p:{regX:19.3,rotation:-75.2949,x:-21.65,y:75.05,regY:-1.1,scaleX:0.3513,scaleY:0.3513,alpha:1}},{t:this.instance_39,p:{regY:6.1,rotation:-14.9983,x:-37.05,y:84.5,regX:4.8,scaleX:1,scaleY:1,skewX:0,skewY:0,alpha:1}},{t:this.instance_38,p:{regY:6.1,rotation:-14.9983,x:-21.25,y:67.3,regX:4.8,scaleX:1,scaleY:1,skewX:0,skewY:0,alpha:1}},{t:this.instance_37,p:{rotation:-59.9992,x:-31.1,y:64.2,regY:4.3,alpha:1}},{t:this.instance_36,p:{regY:4.2,rotation:-59.9992,x:-37.1,y:98.7,alpha:1}},{t:this.instance_35,p:{regX:11.5,regY:5.9,rotation:-59.9992,x:-22.1,y:93.2}},{t:this.instance_34,p:{regX:11.1,rotation:-60.0005,x:-41.5,y:93.05,regY:6,scaleX:0.5639,scaleY:0.5639,alpha:1}},{t:this.instance_33,p:{regX:9.8,regY:6.2,rotation:105.0014,x:-12.9,y:60,alpha:1}},{t:this.instance_32,p:{rotation:104.9999,x:-19.1,y:63.5,regX:9.7,scaleX:0.4227,scaleY:0.4227,skewX:0,skewY:0,alpha:1}},{t:this.instance_31,p:{regX:23.3,rotation:-59.9992,x:-29.8,y:89,alpha:1}},{t:this.instance_30,p:{rotation:120.0013,x:-24.85,y:76,regX:11.7,scaleX:0.7603,scaleY:0.7603,alpha:1}},{t:this.instance_29,p:{regX:16.8,regY:12.2,skewX:-59.7019,skewY:120.2981,x:-29.3,y:100.5,alpha:1}},{t:this.instance_28,p:{skewX:135.2966,skewY:-44.7034,x:-52.7,y:113.95,regY:4.1,alpha:1}},{t:this.instance_27,p:{skewX:57.5545,skewY:-122.4455,x:10.5,y:132.45,regX:-87.2,regY:-39,scaleX:0.5081,scaleY:0.5081,rotation:0,alpha:1}},{t:this.instance_26,p:{skewX:105.298,skewY:-74.7025,x:-48.3,y:90.1,regX:5.5,alpha:1}},{t:this.instance_25,p:{regY:3.3,skewX:60.2942,skewY:-119.7058,x:-60.1,y:100.9,regX:3.7,scaleX:0.5082,scaleY:0.5082,rotation:0,alpha:1}},{t:this.instance_24,p:{regX:-87.4,regY:-38.8,skewX:57.5545,skewY:-122.4455,x:-3.1,y:129.6,scaleX:0.5081,scaleY:0.5081,alpha:1}},{t:this.instance_23,p:{regY:5.8,skewX:-4.4474,skewY:175.5526,x:-68.7,y:99.8,regX:35.8,rotation:0,alpha:1}},{t:this.instance_22,p:{skewX:105.298,skewY:-74.7025,x:-41.4,y:108.65,regX:5.5,alpha:1}},{t:this.instance_21,p:{regX:9.8,skewX:150.2946,skewY:-29.7054,x:-56,y:105,regY:6,scaleX:0.3513,scaleY:0.3513,rotation:0,alpha:1}},{t:this.instance_20,p:{regY:4.1,rotation:-90.296,x:-54.5,y:81.5,regX:5.6,alpha:1}},{t:this.instance_19,p:{regY:4.1,rotation:-75.2969,x:-49.1,y:83.35,regX:5.5,alpha:1}},{t:this.instance_18,p:{regX:19.1,regY:-1.1,rotation:-90.2934,x:-42.4,y:79.55,scaleX:0.2175,scaleY:0.2175,alpha:1}},{t:this.instance_17,p:{regY:6.1,rotation:-29.9988,x:-50.15,y:87.7,regX:4.6,scaleX:0.6193,scaleY:0.6193,alpha:1}},{t:this.instance_16,p:{regX:4.5,regY:6.2,rotation:-29.9988,x:-43.55,y:74.95,scaleX:0.6193,scaleY:0.6193,alpha:1}},{t:this.instance_15,p:{regX:5.9,regY:4.2,rotation:-74.9982,x:-49.8,y:74.5,alpha:1}},{t:this.instance_14,p:{regX:5.9,rotation:-74.9982,x:-47.85,y:96.15,regY:4.2,alpha:1}},{t:this.instance_13,p:{regX:11.5,regY:5.9,rotation:-74.9982,x:-39.7,y:90.45,scaleX:0.6193,scaleY:0.6193,alpha:1}},{t:this.instance_12,p:{regX:10.8,regY:5.9,rotation:-74.9989,x:-51.4,y:93.55,alpha:1}},{t:this.instance_5,p:{regX:9.8,regY:5.9,rotation:90,x:-42.75,y:72.25,scaleX:0.2618,scaleY:0.2618,alpha:1}},{t:this.instance_11,p:{regY:-4.7,rotation:-74.9982,x:-45.15,y:89.2,regX:23.2,alpha:1}},{t:this.instance_10,p:{regX:11.8,regY:5.9,scaleX:0.4708,scaleY:0.4708,rotation:105.0009,x:-44.2,y:80.7,alpha:1}},{t:this.instance_9,p:{regX:17.4,regY:12.8,skewX:-74.7013,skewY:105.2987,x:-42.8,y:96.1,alpha:1}},{t:this.instance_8,p:{regX:-87.2,regY:-38.7,skewX:42.5574,skewY:-137.4426,x:-13.95,y:108.75,scaleX:0.3147,scaleY:0.3147,rotation:0,alpha:1}},{t:this.instance_7,p:{regY:4.4,scaleY:0.5307,skewX:90.2966,skewY:-89.7055,x:-56.05,y:92.85,regX:5.4,alpha:1}},{t:this.instance_6,p:{scaleY:0.5307,skewX:90.2966,skewY:-89.7055,x:-48.85,y:102.85,regX:5.4,regY:4.2,alpha:1}}]},1).to({state:[{t:this.instance_48,p:{regY:6.2,rotation:82.252,x:-29.75,y:129,alpha:1}},{t:this.instance_42,p:{scaleY:0.3513,rotation:-120.2872,x:-28.2,y:177.5,regX:10.1,regY:5.7,scaleX:0.3513,alpha:1}},{t:this.instance_41,p:{rotation:-75.2949,x:-21.65,y:116.55,regX:19.3,regY:-1.1,alpha:1}},{t:this.instance_47,p:{regX:4.8,regY:6.1,rotation:-14.9983,x:-37.05,y:126,alpha:1}},{t:this.instance_46,p:{regX:4.8,regY:6.1,rotation:-14.9983,x:-21.25,y:108.8,alpha:1}},{t:this.instance_37,p:{rotation:-59.9992,x:-31.1,y:105.7,regY:4.3,alpha:1}},{t:this.instance_36,p:{regY:4.2,rotation:-59.9992,x:-37.1,y:140.2,alpha:1}},{t:this.instance_35,p:{regX:11.5,regY:5.9,rotation:-59.9992,x:-22.1,y:134.7}},{t:this.instance_34,p:{regX:11.1,rotation:-60.0005,x:-41.5,y:134.55,regY:6,scaleX:0.5639,scaleY:0.5639,alpha:1}},{t:this.instance_40,p:{regX:9.8,rotation:105.0014,x:-12.9,y:101.5,regY:6.2,scaleX:0.4227,scaleY:0.4227,alpha:1}},{t:this.instance_33,p:{regX:9.7,regY:6,rotation:104.9999,x:-19.1,y:105,alpha:1}},{t:this.instance_31,p:{regX:23.3,rotation:-59.9992,x:-29.8,y:130.5,alpha:1}},{t:this.instance_30,p:{rotation:120.0013,x:-24.85,y:117.5,regX:11.7,scaleX:0.7603,scaleY:0.7603,alpha:1}},{t:this.instance_29,p:{regX:16.8,regY:12.2,skewX:-59.7019,skewY:120.2981,x:-29.3,y:142,alpha:1}},{t:this.instance_28,p:{skewX:135.2966,skewY:-44.7034,x:-52.7,y:155.45,regY:4.1,alpha:1}},{t:this.instance_45,p:{regY:-39,skewX:57.5545,skewY:-122.4455,x:10.5,y:173.95,alpha:1}},{t:this.instance_26,p:{skewX:105.298,skewY:-74.7025,x:-48.3,y:131.6,regX:5.5,alpha:1}},{t:this.instance_39,p:{regY:3.3,rotation:0,x:-60.1,y:142.4,regX:3.7,scaleX:0.5082,scaleY:0.5082,skewX:60.2942,skewY:-119.7058,alpha:1}},{t:this.instance_38,p:{regY:-38.8,rotation:0,x:-3.1,y:171.1,regX:-87.4,scaleX:0.5081,scaleY:0.5081,skewX:57.5545,skewY:-122.4455,alpha:1}},{t:this.instance_44,p:{regX:35.8,regY:5.8,skewX:-4.4474,skewY:175.5526,x:-68.7,y:141.3,alpha:1}},{t:this.instance_22,p:{skewX:105.298,skewY:-74.7025,x:-41.4,y:150.15,regX:5.5,alpha:1}},{t:this.instance_32,p:{rotation:0,x:-56,y:146.5,regX:9.8,scaleX:0.3513,scaleY:0.3513,skewX:150.2946,skewY:-29.7054,alpha:1}},{t:this.instance_20,p:{regY:4.1,rotation:-90.296,x:-54.5,y:123,regX:5.6,alpha:1}},{t:this.instance_19,p:{regY:4.1,rotation:-75.2969,x:-49.1,y:124.85,regX:5.5,alpha:1}},{t:this.instance_21,p:{regX:19.1,skewX:0,skewY:0,x:-42.4,y:121.05,regY:-1.1,scaleX:0.2175,scaleY:0.2175,rotation:-90.2934,alpha:1}},{t:this.instance_27,p:{skewX:0,skewY:0,x:-50.15,y:129.2,regX:4.6,regY:6.1,scaleX:0.6193,scaleY:0.6193,rotation:-29.9988,alpha:1}},{t:this.instance_25,p:{regY:6.2,skewX:0,skewY:0,x:-43.55,y:116.45,regX:4.5,scaleX:0.6193,scaleY:0.6193,rotation:-29.9988,alpha:1}},{t:this.instance_15,p:{regX:5.9,regY:4.2,rotation:-74.9982,x:-49.8,y:116,alpha:1}},{t:this.instance_14,p:{regX:5.9,rotation:-74.9982,x:-47.85,y:137.65,regY:4.2,alpha:1}},{t:this.instance_13,p:{regX:11.5,regY:5.9,rotation:-74.9982,x:-39.7,y:131.95,scaleX:0.6193,scaleY:0.6193,alpha:1}},{t:this.instance_12,p:{regX:10.8,regY:5.9,rotation:-74.9989,x:-51.4,y:135.05,alpha:1}},{t:this.instance_18,p:{regX:9.8,regY:5.9,rotation:90,x:-42.75,y:113.75,scaleX:0.2618,scaleY:0.2618,alpha:1}},{t:this.instance_11,p:{regY:-4.7,rotation:-74.9982,x:-45.15,y:130.7,regX:23.2,alpha:1}},{t:this.instance_10,p:{regX:11.8,regY:5.9,scaleX:0.4708,scaleY:0.4708,rotation:105.0009,x:-44.2,y:122.2,alpha:1}},{t:this.instance_9,p:{regX:17.4,regY:12.8,skewX:-74.7013,skewY:105.2987,x:-42.8,y:137.6,alpha:1}},{t:this.instance_24,p:{regX:-87.2,regY:-38.7,skewX:42.5574,skewY:-137.4426,x:-13.95,y:150.25,scaleX:0.3147,scaleY:0.3147,alpha:1}},{t:this.instance_7,p:{regY:4.4,scaleY:0.5307,skewX:90.2966,skewY:-89.7055,x:-56.05,y:134.35,regX:5.4,alpha:1}},{t:this.instance_6,p:{scaleY:0.5307,skewX:90.2966,skewY:-89.7055,x:-48.85,y:144.35,regX:5.4,regY:4.2,alpha:1}},{t:this.instance_17,p:{regY:3.1,rotation:174.1829,x:-8.6,y:85.6,regX:3.8,scaleX:0.5081,scaleY:0.5081,alpha:1}},{t:this.instance_16,p:{regX:3.9,regY:3.1,rotation:174.1854,x:-14.1,y:81.6,scaleX:0.2032,scaleY:0.2032,alpha:1}},{t:this.instance_8,p:{regX:3.7,regY:3.2,skewX:0,skewY:0,x:-20.15,y:98.65,scaleX:0.5081,scaleY:0.5081,rotation:174.1829,alpha:1}},{t:this.instance_43,p:{regX:35.9,rotation:-121.0816,x:-27.3,y:90.05,alpha:1}},{t:this.instance_23,p:{regY:5.6,skewX:0,skewY:0,x:-22,y:74.45,regX:35.9,rotation:-121.0816,alpha:1}},{t:this.instance_5,p:{regX:10.1,regY:5.7,rotation:74.7117,x:-22.7,y:97.05,scaleX:0.3513,scaleY:0.3513,alpha:1}}]},1).to({state:[{t:this.instance_48,p:{regY:6.3,rotation:52.2529,x:-21.05,y:150.2,alpha:1}},{t:this.instance_42,p:{scaleY:0.3513,rotation:-135.2886,x:-18.85,y:196.55,regX:10,regY:5.6,scaleX:0.3513,alpha:1}},{t:this.instance_41,p:{rotation:-90.2937,x:-28.3,y:136,regX:19.2,regY:-1.2,alpha:1}},{t:this.instance_47,p:{regX:4.7,regY:6,rotation:-29.9984,x:-40.9,y:149.05,alpha:1}},{t:this.instance_46,p:{regX:4.7,regY:6.2,rotation:-29.9984,x:-30,y:128.5,alpha:1}},{t:this.instance_37,p:{rotation:-74.9976,x:-42,y:121.2,regY:4.2,alpha:1}},{t:this.instance_36,p:{regY:4.2,rotation:-74.9985,x:-37.1,y:162.8,alpha:1}},{t:this.instance_34,p:{regX:11.5,rotation:-59.9988,x:-15.9,y:164.45,regY:5.9,scaleX:0.9999,scaleY:1,alpha:1}},{t:this.instance_30,p:{rotation:-74.9995,x:-42.9,y:158.4,regX:11.2,scaleX:0.5638,scaleY:0.5638,alpha:1}},{t:this.instance_40,p:{regX:9.8,rotation:90.0021,x:-17.8,y:117.6,regY:6.2,scaleX:0.4227,scaleY:0.4227,alpha:1}},{t:this.instance_33,p:{regX:9.7,regY:6,rotation:90,x:-28.85,y:124.15,alpha:1}},{t:this.instance_31,p:{regX:23.2,rotation:-74.9985,x:-30.9,y:158.1,alpha:1}},{t:this.instance_13,p:{regX:11.8,regY:5.9,rotation:105.0005,x:-32.65,y:137.2,scaleX:0.7603,scaleY:0.7603,alpha:1}},{t:this.instance_29,p:{regX:16.9,regY:12.2,skewX:-74.701,skewY:105.299,x:-26.95,y:165.6,alpha:1}},{t:this.instance_28,p:{skewX:120.2981,skewY:-59.7019,x:-48.3,y:181.55,regY:4.2,alpha:1}},{t:this.instance_45,p:{regY:-38.9,skewX:42.5538,skewY:-137.4462,x:18.75,y:187.6,alpha:1}},{t:this.instance_26,p:{skewX:90.298,skewY:-89.7011,x:-52.1,y:161.35,regX:5.4,alpha:1}},{t:this.instance_39,p:{regY:3.5,rotation:0,x:-58.5,y:173.95,regX:3.8,scaleX:0.5081,scaleY:0.5081,skewX:45.2944,skewY:-134.7056,alpha:1}},{t:this.instance_38,p:{regY:-38.8,rotation:0,x:3.7,y:183.9,regX:-87.4,scaleX:0.5081,scaleY:0.5081,skewX:42.5538,skewY:-137.4462,alpha:1}},{t:this.instance_44,p:{regX:35.9,regY:5.7,skewX:-19.445,skewY:160.555,x:-78,y:174.15,alpha:1}},{t:this.instance_22,p:{skewX:90.298,skewY:-89.7011,x:-37.05,y:180.3,regX:5.4,alpha:1}},{t:this.instance_32,p:{rotation:0,x:-52.8,y:176.5,regX:9.8,scaleX:0.3513,scaleY:0.3513,skewX:135.2957,skewY:-44.7043,alpha:1}},{t:this.instance_20,p:{regY:3.9,rotation:-150.2945,x:-60.95,y:151.45,regX:5.5,alpha:1}},{t:this.instance_19,p:{regY:4,rotation:-90.2949,x:-53.3,y:148.7,regX:5.4,alpha:1}},{t:this.instance_21,p:{regX:19.1,skewX:0,skewY:0,x:-48.6,y:144,regY:-1,scaleX:0.2175,scaleY:0.2175,rotation:-105.2928,alpha:1}},{t:this.instance_27,p:{skewX:0,skewY:0,x:-55.85,y:154.3,regX:4.5,regY:6,scaleX:0.6193,scaleY:0.6193,rotation:-44.998,alpha:1}},{t:this.instance_25,p:{regY:6.2,skewX:0,skewY:0,x:-49.45,y:141.5,regX:4.5,scaleX:0.6193,scaleY:0.6193,rotation:-44.998,alpha:1}},{t:this.instance_15,p:{regX:5.9,regY:4.3,rotation:-89.9986,x:-54.6,y:129.5,alpha:1}},{t:this.instance_14,p:{regX:5.8,rotation:-89.9986,x:-54.4,y:168.9,regY:4.3,alpha:1}},{t:this.instance_12,p:{regX:10.5,regY:5.8,rotation:-90,x:-60,y:160,alpha:1}},{t:this.instance_18,p:{regX:9.8,regY:6.2,rotation:75.0006,x:-49.4,y:135.05,scaleX:0.2618,scaleY:0.2618,alpha:1}},{t:this.instance_11,p:{regY:-4.7,rotation:-89.9986,x:-47.1,y:161.1,regX:23.1,alpha:1}},{t:this.instance_10,p:{regX:11.8,regY:5.9,scaleX:0.4708,scaleY:0.4708,rotation:90,x:-56.9,y:141.65,alpha:1}},{t:this.instance_9,p:{regX:17.4,regY:12.5,skewX:-89.7008,skewY:90.2992,x:-43.35,y:161.75,alpha:1}},{t:this.instance_24,p:{regX:-87.4,regY:-38.6,skewX:27.5603,skewY:-152.4397,x:-12.1,y:166.6,scaleX:0.3147,scaleY:0.3147,alpha:1}},{t:this.instance_7,p:{regY:4.5,scaleY:0.5306,skewX:75.2972,skewY:-104.7027,x:-65.45,y:161.15,regX:5.2,alpha:1}},{t:this.instance_6,p:{scaleY:0.5306,skewX:75.2972,skewY:-104.7027,x:-45,y:172.75,regX:5.5,regY:4.3,alpha:1}},{t:this.instance_17,p:{regY:3,rotation:159.1866,x:-23.7,y:102.75,regX:3.8,scaleX:0.5081,scaleY:0.5081,alpha:1}},{t:this.instance_16,p:{regX:4.1,regY:3.1,rotation:159.1871,x:-30.05,y:100.25,scaleX:0.2032,scaleY:0.2032,alpha:1}},{t:this.instance_8,p:{regX:3.9,regY:3.1,skewX:0,skewY:0,x:-31.55,y:118.35,scaleX:0.5081,scaleY:0.5081,rotation:159.1866,alpha:1}},{t:this.instance_43,p:{regX:35.8,rotation:-136.0804,x:-37.35,y:106.55,alpha:1}},{t:this.instance_23,p:{regY:5.5,skewX:0,skewY:0,x:-39.55,y:95.45,regX:35.9,rotation:-136.0804,alpha:1}},{t:this.instance_5,p:{regX:10.1,regY:5.9,rotation:59.7124,x:-34.4,y:117.4,scaleX:0.3513,scaleY:0.3513,alpha:1}}]},1).to({state:[{t:this.instance_48,p:{regY:6.3,rotation:52.2529,x:-22.55,y:201.7,alpha:1}},{t:this.instance_42,p:{scaleY:0.3513,rotation:-135.2886,x:-30.35,y:244.05,regX:10,regY:5.6,scaleX:0.3513,alpha:1}},{t:this.instance_41,p:{rotation:-90.2937,x:-29.8,y:187.5,regX:19.2,regY:-1.2,alpha:1}},{t:this.instance_47,p:{regX:4.7,regY:6,rotation:-29.9984,x:-42.4,y:200.55,alpha:1}},{t:this.instance_46,p:{regX:4.7,regY:6.2,rotation:-29.9984,x:-31.5,y:180,alpha:1}},{t:this.instance_37,p:{rotation:-74.9976,x:-43.5,y:172.7,regY:4.2,alpha:1}},{t:this.instance_36,p:{regY:4.2,rotation:-74.9985,x:-37.1,y:210.3,alpha:1}},{t:this.instance_34,p:{regX:11.3,rotation:-89.9987,x:-20.4,y:241.1,regY:5.8,scaleX:0.6491,scaleY:0.6491,alpha:1}},{t:this.instance_30,p:{rotation:-74.9995,x:-42.9,y:205.9,regX:11.2,scaleX:0.5638,scaleY:0.5638,alpha:1}},{t:this.instance_40,p:{regX:9.8,rotation:90.0021,x:-19.3,y:169.1,regY:6.2,scaleX:0.4227,scaleY:0.4227,alpha:1}},{t:this.instance_33,p:{regX:9.7,regY:6,rotation:90,x:-30.35,y:175.65,alpha:1}},{t:this.instance_31,p:{regX:23.2,rotation:-74.9985,x:-30.9,y:205.6,alpha:1}},{t:this.instance_13,p:{regX:11.8,regY:5.9,rotation:105.0005,x:-34.15,y:188.7,scaleX:0.7603,scaleY:0.7603,alpha:1}},{t:this.instance_29,p:{regX:16.9,regY:12.2,skewX:-74.701,skewY:105.299,x:-26.95,y:213.1,alpha:1}},{t:this.instance_28,p:{skewX:120.2981,skewY:-59.7019,x:-48.3,y:229.05,regY:4.2,alpha:1}},{t:this.instance_45,p:{regY:-38.9,skewX:42.5538,skewY:-137.4462,x:18.75,y:235.1,alpha:1}},{t:this.instance_26,p:{skewX:90.298,skewY:-89.7011,x:-52.1,y:208.85,regX:5.4,alpha:1}},{t:this.instance_39,p:{regY:3.6,rotation:0,x:-42.35,y:158.95,regX:3.8,scaleX:0.5081,scaleY:0.5081,skewX:60.294,skewY:-119.706,alpha:1}},{t:this.instance_38,p:{regY:-38.8,rotation:0,x:3.7,y:231.4,regX:-87.4,scaleX:0.5081,scaleY:0.5081,skewX:42.5538,skewY:-137.4462,alpha:1}},{t:this.instance_44,p:{regX:35.9,regY:5.8,skewX:-4.4461,skewY:175.5539,x:-61.15,y:154.2,alpha:1}},{t:this.instance_22,p:{skewX:90.298,skewY:-89.7011,x:-37.05,y:227.8,regX:5.4,alpha:1}},{t:this.instance_32,p:{rotation:0,x:-52.8,y:224,regX:9.8,scaleX:0.3513,scaleY:0.3513,skewX:135.2957,skewY:-44.7043,alpha:1}},{t:this.instance_20,p:{regY:3.8,rotation:-135.2951,x:-38.85,y:136.65,regX:5.5,alpha:1}},{t:this.instance_19,p:{regY:4,rotation:-90.2949,x:-53.3,y:196.2,regX:5.4,alpha:1}},{t:this.instance_21,p:{regX:19.1,skewX:0,skewY:0,x:-50.1,y:195.5,regY:-1,scaleX:0.2175,scaleY:0.2175,rotation:-105.2928,alpha:1}},{t:this.instance_27,p:{skewX:0,skewY:0,x:-34.65,y:140.65,regX:4.5,regY:6,scaleX:0.6193,scaleY:0.6193,rotation:-29.997,alpha:1}},{t:this.instance_25,p:{regY:6.2,skewX:0,skewY:0,x:-49.45,y:189,regX:4.5,scaleX:0.6193,scaleY:0.6193,rotation:-44.998,alpha:1}},{t:this.instance_15,p:{regX:5.8,regY:4.2,rotation:-75.0009,x:-22.05,y:132.3,alpha:1}},{t:this.instance_14,p:{regX:5.8,rotation:-75.0009,x:-37.05,y:155.15,regY:4.2,alpha:1}},{t:this.instance_12,p:{regX:10.6,regY:5.6,rotation:-75.0018,x:-40.2,y:145.05,alpha:1}},{t:this.instance_18,p:{regX:9.8,regY:6.2,rotation:75.0006,x:-49.4,y:182.55,scaleX:0.2618,scaleY:0.2618,alpha:1}},{t:this.instance_11,p:{regY:-4.7,rotation:-89.9986,x:-47.1,y:208.6,regX:23.1,alpha:1}},{t:this.instance_10,p:{regX:11.9,regY:6,scaleX:0.4708,scaleY:0.4708,rotation:104.9965,x:-27.45,y:143.4,alpha:1}},{t:this.instance_9,p:{regX:17.4,regY:12.5,skewX:-89.7008,skewY:90.2992,x:-43.35,y:209.25,alpha:1}},{t:this.instance_24,p:{regX:-87.4,regY:-38.6,skewX:27.5603,skewY:-152.4397,x:-12.1,y:214.1,scaleX:0.3147,scaleY:0.3147,alpha:1}},{t:this.instance_7,p:{regY:4.5,scaleY:0.5306,skewX:90.2966,skewY:-89.7077,x:-45.75,y:144.85,regX:5.2,alpha:1}},{t:this.instance_6,p:{scaleY:0.5306,skewX:75.2972,skewY:-104.7027,x:-45,y:220.25,regX:5.5,regY:4.3,alpha:1}},{t:this.instance_17,p:{regY:3,rotation:159.1866,x:-22.7,y:160.75,regX:3.8,scaleX:0.5081,scaleY:0.5081,alpha:1}},{t:this.instance_16,p:{regX:4.1,regY:3.1,rotation:159.1871,x:-29.05,y:158.25,scaleX:0.2032,scaleY:0.2032,alpha:1}},{t:this.instance_8,p:{regX:3.9,regY:3.1,skewX:0,skewY:0,x:-33.05,y:169.85,scaleX:0.5081,scaleY:0.5081,rotation:159.1866,alpha:1}},{t:this.instance_43,p:{regX:35.8,rotation:-136.0804,x:-38.85,y:158.05,alpha:1}},{t:this.instance_23,p:{regY:5.5,skewX:0,skewY:0,x:-41.05,y:146.95,regX:35.9,rotation:-136.0804,alpha:1}},{t:this.instance_5,p:{regX:10.1,regY:5.9,rotation:59.7124,x:-35.9,y:168.9,scaleX:0.3513,scaleY:0.3513,alpha:1}}]},1).to({state:[{t:this.instance_48,p:{regY:6.3,rotation:52.2529,x:-22.55,y:246.7,alpha:0.1016}},{t:this.instance_42,p:{scaleY:0.3513,rotation:-135.2886,x:-30.35,y:289.05,regX:10,regY:5.6,scaleX:0.3513,alpha:0.1016}},{t:this.instance_41,p:{rotation:-90.2937,x:-29.8,y:232.5,regX:19.2,regY:-1.2,alpha:0.1016}},{t:this.instance_47,p:{regX:4.7,regY:6,rotation:-29.9984,x:-42.4,y:245.55,alpha:0.1016}},{t:this.instance_46,p:{regX:4.7,regY:6.2,rotation:-29.9984,x:-31.5,y:225,alpha:0.1016}},{t:this.instance_37,p:{rotation:-74.9976,x:-43.5,y:217.7,regY:4.2,alpha:0.1016}},{t:this.instance_36,p:{regY:4.2,rotation:-74.9985,x:-37.1,y:255.3,alpha:0.1016}},{t:this.instance_34,p:{regX:11.3,rotation:-89.9987,x:-20.4,y:286.1,regY:5.8,scaleX:0.6491,scaleY:0.6491,alpha:0.1016}},{t:this.instance_30,p:{rotation:-74.9995,x:-42.9,y:250.9,regX:11.2,scaleX:0.5638,scaleY:0.5638,alpha:0.1016}},{t:this.instance_40,p:{regX:9.8,rotation:90.0021,x:-19.3,y:214.1,regY:6.2,scaleX:0.4227,scaleY:0.4227,alpha:0.1016}},{t:this.instance_33,p:{regX:9.7,regY:6,rotation:90,x:-30.35,y:220.65,alpha:0.1016}},{t:this.instance_31,p:{regX:23.2,rotation:-74.9985,x:-30.9,y:250.6,alpha:0.1016}},{t:this.instance_13,p:{regX:11.8,regY:5.9,rotation:105.0005,x:-34.15,y:233.7,scaleX:0.7603,scaleY:0.7603,alpha:0.1016}},{t:this.instance_29,p:{regX:16.9,regY:12.2,skewX:-74.701,skewY:105.299,x:-26.95,y:258.1,alpha:0.1016}},{t:this.instance_28,p:{skewX:120.2981,skewY:-59.7019,x:-48.3,y:274.05,regY:4.2,alpha:0.1016}},{t:this.instance_45,p:{regY:-38.9,skewX:42.5538,skewY:-137.4462,x:18.75,y:280.1,alpha:0.1016}},{t:this.instance_26,p:{skewX:90.298,skewY:-89.7011,x:-52.1,y:253.85,regX:5.4,alpha:0.1016}},{t:this.instance_39,p:{regY:3.6,rotation:0,x:-42.35,y:203.95,regX:3.8,scaleX:0.5081,scaleY:0.5081,skewX:60.294,skewY:-119.706,alpha:0.1016}},{t:this.instance_38,p:{regY:-38.8,rotation:0,x:3.7,y:276.4,regX:-87.4,scaleX:0.5081,scaleY:0.5081,skewX:42.5538,skewY:-137.4462,alpha:0.1016}},{t:this.instance_44,p:{regX:35.9,regY:5.8,skewX:-4.4461,skewY:175.5539,x:-61.15,y:199.2,alpha:0.1016}},{t:this.instance_22,p:{skewX:90.298,skewY:-89.7011,x:-37.05,y:272.8,regX:5.4,alpha:0.1016}},{t:this.instance_32,p:{rotation:0,x:-52.8,y:269,regX:9.8,scaleX:0.3513,scaleY:0.3513,skewX:135.2957,skewY:-44.7043,alpha:0.1016}},{t:this.instance_20,p:{regY:3.8,rotation:-135.2951,x:-38.85,y:181.65,regX:5.5,alpha:0.1016}},{t:this.instance_19,p:{regY:4,rotation:-90.2949,x:-53.3,y:241.2,regX:5.4,alpha:0.1016}},{t:this.instance_21,p:{regX:19.1,skewX:0,skewY:0,x:-50.1,y:240.5,regY:-1,scaleX:0.2175,scaleY:0.2175,rotation:-105.2928,alpha:0.1016}},{t:this.instance_27,p:{skewX:0,skewY:0,x:-34.65,y:185.65,regX:4.5,regY:6,scaleX:0.6193,scaleY:0.6193,rotation:-29.997,alpha:0.1016}},{t:this.instance_25,p:{regY:6.2,skewX:0,skewY:0,x:-49.45,y:234,regX:4.5,scaleX:0.6193,scaleY:0.6193,rotation:-44.998,alpha:0.1016}},{t:this.instance_15,p:{regX:5.8,regY:4.2,rotation:-75.0009,x:-22.05,y:177.3,alpha:0.1016}},{t:this.instance_14,p:{regX:5.8,rotation:-75.0009,x:-37.05,y:200.15,regY:4.2,alpha:0.1016}},{t:this.instance_12,p:{regX:10.6,regY:5.6,rotation:-75.0018,x:-40.2,y:190.05,alpha:0.1016}},{t:this.instance_18,p:{regX:9.8,regY:6.2,rotation:75.0006,x:-49.4,y:227.55,scaleX:0.2618,scaleY:0.2618,alpha:0.1016}},{t:this.instance_11,p:{regY:-4.7,rotation:-89.9986,x:-47.1,y:253.6,regX:23.1,alpha:0.1016}},{t:this.instance_10,p:{regX:11.9,regY:6,scaleX:0.4708,scaleY:0.4708,rotation:104.9965,x:-27.45,y:188.4,alpha:0.1016}},{t:this.instance_9,p:{regX:17.4,regY:12.5,skewX:-89.7008,skewY:90.2992,x:-43.35,y:254.25,alpha:0.1016}},{t:this.instance_24,p:{regX:-87.4,regY:-38.6,skewX:27.5603,skewY:-152.4397,x:-12.1,y:259.1,scaleX:0.3147,scaleY:0.3147,alpha:0.1016}},{t:this.instance_7,p:{regY:4.5,scaleY:0.5306,skewX:90.2966,skewY:-89.7077,x:-45.75,y:189.85,regX:5.2,alpha:0.1016}},{t:this.instance_6,p:{scaleY:0.5306,skewX:75.2972,skewY:-104.7027,x:-45,y:265.25,regX:5.5,regY:4.3,alpha:0.1016}},{t:this.instance_17,p:{regY:3,rotation:159.1866,x:-22.7,y:205.75,regX:3.8,scaleX:0.5081,scaleY:0.5081,alpha:0.1016}},{t:this.instance_16,p:{regX:4.1,regY:3.1,rotation:159.1871,x:-29.05,y:203.25,scaleX:0.2032,scaleY:0.2032,alpha:0.1016}},{t:this.instance_8,p:{regX:3.9,regY:3.1,skewX:0,skewY:0,x:-33.05,y:214.85,scaleX:0.5081,scaleY:0.5081,rotation:159.1866,alpha:0.1016}},{t:this.instance_43,p:{regX:35.8,rotation:-136.0804,x:-38.85,y:203.05,alpha:0.1016}},{t:this.instance_23,p:{regY:5.5,skewX:0,skewY:0,x:-41.05,y:191.95,regX:35.9,rotation:-136.0804,alpha:0.1016}},{t:this.instance_5,p:{regX:10.1,regY:5.9,rotation:59.7124,x:-35.9,y:213.9,scaleX:0.3513,scaleY:0.3513,alpha:0.1016}}]},1).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({scaleX:0.7174,scaleY:0.7174,rotation:-13.028,x:60.1,y:22.6},0).wait(1).to({regX:87.8,rotation:-17.9833,x:52.8,y:22.85},0).wait(1).to({regX:87.7,rotation:-22.1943,x:48.8,y:23.7},0).wait(1).to({rotation:-26.9008,x:42.55,y:24.95},0).wait(1).to({x:31.3,y:28.2},0).wait(1).to({regX:87.6,regY:25.4,rotation:-27.1951,x:16.8,y:36.55},0).to({_off:true},1).wait(7));

	// p_stones
	this.instance_49 = new lib.stone_6();
	this.instance_49.setTransform(2.05,51.5,0.5082,0.5082,0,0,0,3.8,3.1);

	this.instance_50 = new lib.stone_5();
	this.instance_50.setTransform(6.05,42.05,0.3529,0.3529,0,0,0,6.1,4.2);

	this.instance_51 = new lib.stone_1();
	this.instance_51.setTransform(16.95,25.35,0.3776,0.3776,-59.9995,0,0,16.4,12.2);

	this.instance_52 = new lib.stone_6();
	this.instance_52.setTransform(-5.7,57.5,0.5082,0.5082,0,0,0,3.8,3.1);

	this.instance_53 = new lib.stone_6();
	this.instance_53.setTransform(-18.45,63.5,0.5082,0.5082,0,0,0,3.8,3.1);

	this.instance_54 = new lib.stone_7();
	this.instance_54.setTransform(-16.2,111,0.5803,0.5803,64.4483,0,0,35.8,5.7);

	this.instance_55 = new lib.stone_7();
	this.instance_55.setTransform(-10.35,93.8,0.5803,0.5803,64.4483,0,0,35.8,5.7);

	this.instance_56 = new lib.stone_5();
	this.instance_56.setTransform(-12.2,71.3,0.6376,0.8568,-45.2973,0,0,5.5,4.2);

	this.instance_57 = new lib.stone_6();
	this.instance_57.setTransform(-78.25,41.45,0.5082,0.5082,2.4455,0,0,-87.2,-39);

	this.instance_58 = new lib.stone_6();
	this.instance_58.setTransform(-28.45,98.7,0.5082,0.5082,-0.2925,0,0,3.7,3.1);

	this.instance_59 = new lib.stone_5();
	this.instance_59.setTransform(-30.5,86.9,0.9777,0.9777,-75.2962,0,0,5.8,4.2);

	this.instance_60 = new lib.stone_5();
	this.instance_60.setTransform(-47.55,103,0.6376,0.8568,-60.2966,0,0,5.5,4.2);

	this.instance_61 = new lib.stone_6();
	this.instance_61.setTransform(-30.25,113.15,0.5082,0.5082,-15.2915,0,0,3.8,3.1);

	this.instance_62 = new lib.stone_5();
	this.instance_62.setTransform(-35.6,97.35,0.6376,0.8569,-60.2976,0,0,5.5,4.2);

	this.instance_63 = new lib.stone_6();
	this.instance_63.setTransform(-33.5,131.05,0.2032,0.2032,-15.2883,0,0,3.6,3.6);

	this.instance_64 = new lib.stone_6();
	this.instance_64.setTransform(-101.05,82.9,0.5082,0.5082,-12.5531,0,0,-87.4,-39);

	this.instance_65 = new lib.stone_6();
	this.instance_65.setTransform(-39.7,127.95,0.5082,0.5082,-15.2915,0,0,3.6,3.1);

	this.instance_66 = new lib.stone_5();
	this.instance_66.setTransform(-44.65,117.2,0.9777,0.9777,-90.2942,0,0,5.8,4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_51,p:{x:16.95,y:25.35,regY:12.2,rotation:-59.9995,regX:16.4,scaleX:0.3776,scaleY:0.3776,alpha:1}},{t:this.instance_50,p:{regX:6.1,scaleX:0.3529,scaleY:0.3529,rotation:0,x:6.05,y:42.05,alpha:1}},{t:this.instance_49,p:{regX:3.8,regY:3.1,x:2.05,y:51.5,scaleX:0.5082,scaleY:0.5082,rotation:0,alpha:1}}]},3).to({state:[{t:this.instance_51,p:{x:10.7,y:29.85,regY:12.2,rotation:-59.9995,regX:16.4,scaleX:0.3776,scaleY:0.3776,alpha:1}},{t:this.instance_50,p:{regX:5.9,scaleX:0.9778,scaleY:0.9778,rotation:-74.9989,x:-1.65,y:50.5,alpha:1}},{t:this.instance_52,p:{regX:3.8,regY:3.1,scaleX:0.5082,scaleY:0.5082,rotation:0,x:-5.7,y:57.5,alpha:1}},{t:this.instance_49,p:{regX:-87.2,regY:-39.2,x:-43.95,y:16.9,scaleX:0.5082,scaleY:0.5082,rotation:0,alpha:1}}]},1).to({state:[{t:this.instance_51,p:{x:-13.1,y:39.25,regY:12.3,rotation:119.9988,regX:16.4,scaleX:0.3776,scaleY:0.3776,alpha:1}},{t:this.instance_50,p:{regX:5.8,scaleX:0.9777,scaleY:0.9777,rotation:-75.0004,x:-14.45,y:56.05,alpha:1}},{t:this.instance_53,p:{regX:3.8,regY:3.1,scaleX:0.5082,scaleY:0.5082,rotation:0,x:-18.45,y:63.5,alpha:1}},{t:this.instance_52,p:{regX:-87.3,regY:-39.1,scaleX:0.5081,scaleY:0.5081,rotation:2.7401,x:-60.75,y:20.5,alpha:1}},{t:this.instance_49,p:{regX:3.7,regY:3.2,x:-13.45,y:68,scaleX:0.2032,scaleY:0.2032,rotation:0,alpha:1}}]},1).to({state:[{t:this.instance_51,p:{x:-30.65,y:59.95,regY:12.3,rotation:119.7024,regX:16.6,scaleX:0.3776,scaleY:0.3776,alpha:1}},{t:this.instance_59,p:{regX:5.8,rotation:-75.2962,x:-30.5,y:86.9,regY:4.2,alpha:1}},{t:this.instance_58,p:{regX:3.7,regY:3.1,rotation:-0.2925,x:-28.45,y:98.7,scaleX:0.5082,scaleY:0.5082,alpha:1}},{t:this.instance_57,p:{regX:-87.2,regY:-39,scaleX:0.5082,scaleY:0.5082,rotation:2.4455,x:-78.25,y:41.45,alpha:1}},{t:this.instance_53,p:{regX:3.6,regY:3.5,scaleX:0.2033,scaleY:0.2033,rotation:-0.2925,x:-23.35,y:103.2,alpha:1}},{t:this.instance_56,p:{x:-12.2,y:71.3,regX:5.5,rotation:-45.2973,alpha:1}},{t:this.instance_52,p:{regX:3.7,regY:3.1,scaleX:0.5082,scaleY:0.5082,rotation:-0.2925,x:-15.6,y:86.8,alpha:1}},{t:this.instance_49,p:{regX:-87.2,regY:-39,x:-68.85,y:51.8,scaleX:0.5082,scaleY:0.5082,rotation:2.4455,alpha:1}},{t:this.instance_55,p:{regX:35.8,rotation:64.4483,x:-10.35,y:93.8,regY:5.7,alpha:1}},{t:this.instance_50,p:{regX:5.5,scaleX:0.6376,scaleY:0.8568,rotation:-45.2973,x:-31.7,y:74.65,alpha:1}},{t:this.instance_54,p:{regX:35.8,rotation:64.4483,x:-16.2,y:111,regY:5.7,alpha:1}}]},1).to({state:[{t:this.instance_51,p:{x:-46.95,y:94.45,regY:12.3,rotation:119.7024,regX:16.6,scaleX:0.3776,scaleY:0.3776,alpha:1}},{t:this.instance_66,p:{rotation:-90.2942,x:-44.65,y:117.2,regX:5.8,regY:4.2,alpha:1}},{t:this.instance_65,p:{regY:3.1,rotation:-15.2915,x:-39.7,y:127.95,scaleX:0.5082,scaleY:0.5082,alpha:1}},{t:this.instance_64,p:{regX:-87.4,regY:-39,scaleX:0.5082,scaleY:0.5082,rotation:-12.5531,x:-101.05,y:82.9,alpha:1}},{t:this.instance_63,p:{regX:3.6,regY:3.6,rotation:-15.2883,x:-33.5,y:131.05,alpha:1}},{t:this.instance_62,p:{regX:5.5,scaleY:0.8569,rotation:-60.2976,x:-35.6,y:97.35,alpha:1}},{t:this.instance_61,p:{regX:3.8,regY:3.1,rotation:-15.2915,x:-30.25,y:113.15,scaleX:0.5082,scaleY:0.5082,alpha:1}},{t:this.instance_58,p:{regX:-87.3,regY:-39,rotation:-12.5531,x:-90.8,y:93.2,scaleX:0.5082,scaleY:0.5082,alpha:1}},{t:this.instance_55,p:{regX:35.9,rotation:49.451,x:-21.8,y:120.45,regY:5.7,alpha:1}},{t:this.instance_60,p:{regX:5.5,regY:4.2,rotation:-60.2966,x:-47.55,y:103,alpha:1}},{t:this.instance_54,p:{regX:35.9,rotation:49.449,x:-24.5,y:136.75,regY:5.7,alpha:1}},{t:this.instance_59,p:{regX:5.7,rotation:-60.2966,x:-32.55,y:49,regY:4.2,alpha:1}},{t:this.instance_56,p:{x:-26.5,y:56,regX:5.5,rotation:-45.2973,alpha:1}},{t:this.instance_57,p:{regX:3.6,regY:3.1,scaleX:0.6873,scaleY:0.6873,rotation:-15.2914,x:-17.85,y:84.2,alpha:1}},{t:this.instance_53,p:{regX:3.6,regY:3.6,scaleX:0.2749,scaleY:0.2749,rotation:-15.2892,x:-24.9,y:93.65,alpha:1}},{t:this.instance_52,p:{regX:3.6,regY:3.2,scaleX:0.6873,scaleY:0.6873,rotation:-15.2914,x:-5.15,y:64.25,alpha:1}},{t:this.instance_49,p:{regX:3.7,regY:3.1,x:-4.75,y:47.15,scaleX:1.1725,scaleY:1.1725,rotation:-15.2915,alpha:1}},{t:this.instance_50,p:{regX:5.5,scaleX:0.6376,scaleY:0.8568,rotation:-45.2973,x:-6.55,y:56.55,alpha:1}}]},1).to({state:[{t:this.instance_51,p:{x:-51.45,y:117.6,regY:12.3,rotation:114.1741,regX:16.9,scaleX:0.3775,scaleY:0.3775,alpha:1}},{t:this.instance_66,p:{rotation:-95.8242,x:-46.9,y:139.95,regX:5.8,regY:4.2,alpha:1}},{t:this.instance_65,p:{regY:3.2,rotation:-20.8186,x:-40.9,y:150.25,scaleX:0.5082,scaleY:0.5082,alpha:1}},{t:this.instance_64,p:{regX:-87.5,regY:-38.9,scaleX:0.5081,scaleY:0.5081,rotation:-18.0824,x:-106.4,y:111.3,alpha:1}},{t:this.instance_63,p:{regX:3.5,regY:3.4,rotation:-20.8179,x:-34.55,y:152.7,alpha:1}},{t:this.instance_62,p:{regX:5.4,scaleY:0.8568,rotation:-65.8295,x:-39.9,y:119.35,alpha:1}},{t:this.instance_61,p:{regX:3.6,regY:3.2,rotation:-20.8186,x:-33.05,y:134.6,scaleX:0.5082,scaleY:0.5082,alpha:1}},{t:this.instance_58,p:{regX:-87.5,regY:-39.1,rotation:-18.0824,x:-95.25,y:120.5,scaleX:0.5081,scaleY:0.5081,alpha:1}},{t:this.instance_55,p:{regX:35.8,rotation:43.9186,x:-24,y:141,regY:5.9,alpha:1}},{t:this.instance_60,p:{regX:5.3,regY:4.1,rotation:-65.8286,x:-51.35,y:126.15,alpha:1}},{t:this.instance_54,p:{regX:35.9,rotation:43.9175,x:-25.1,y:157.5,regY:5.8,alpha:1}},{t:this.instance_59,p:{regX:5.6,rotation:-65.8287,x:-41.45,y:71,regY:4.2,alpha:1}},{t:this.instance_56,p:{x:-34.75,y:77.3,regX:5.4,rotation:-50.8283,alpha:1}},{t:this.instance_57,p:{regX:3.5,regY:3.2,scaleX:0.6873,scaleY:0.6873,rotation:-20.8211,x:-23.45,y:104.65,alpha:1}},{t:this.instance_53,p:{regX:3.2,regY:3.8,scaleX:0.2748,scaleY:0.2748,rotation:-20.8196,x:-29.65,y:114.7,alpha:1}},{t:this.instance_52,p:{regX:3.6,regY:3.2,scaleX:0.6873,scaleY:0.6873,rotation:-20.8211,x:-12.75,y:83.45,alpha:1}},{t:this.instance_49,p:{regX:3.6,regY:3.2,x:-14.05,y:66.55,scaleX:1.1724,scaleY:1.1724,rotation:-20.8218,alpha:1}},{t:this.instance_50,p:{regX:5.5,scaleX:0.6376,scaleY:0.8568,rotation:-50.8283,x:-14.85,y:75.9,alpha:1}}]},1).to({state:[{t:this.instance_51,p:{x:-49.45,y:159.6,regY:12.3,rotation:114.1741,regX:16.9,scaleX:0.3775,scaleY:0.3775,alpha:1}},{t:this.instance_66,p:{rotation:-95.8242,x:-44.9,y:181.95,regX:5.8,regY:4.2,alpha:1}},{t:this.instance_65,p:{regY:3.2,rotation:-20.8186,x:-38.9,y:192.25,scaleX:0.5082,scaleY:0.5082,alpha:1}},{t:this.instance_64,p:{regX:-87.5,regY:-38.9,scaleX:0.5081,scaleY:0.5081,rotation:-18.0824,x:-104.4,y:153.3,alpha:1}},{t:this.instance_63,p:{regX:3.5,regY:3.4,rotation:-20.8179,x:-32.55,y:194.7,alpha:1}},{t:this.instance_62,p:{regX:5.4,scaleY:0.8568,rotation:-65.8295,x:-37.9,y:161.35,alpha:1}},{t:this.instance_61,p:{regX:3.6,regY:3.2,rotation:-20.8186,x:-31.05,y:176.6,scaleX:0.5082,scaleY:0.5082,alpha:1}},{t:this.instance_58,p:{regX:-87.5,regY:-39.1,rotation:-18.0824,x:-93.25,y:162.5,scaleX:0.5081,scaleY:0.5081,alpha:1}},{t:this.instance_55,p:{regX:35.8,rotation:43.9186,x:-22,y:183,regY:5.9,alpha:1}},{t:this.instance_60,p:{regX:5.3,regY:4.1,rotation:-65.8286,x:-49.35,y:168.15,alpha:1}},{t:this.instance_54,p:{regX:35.9,rotation:43.9175,x:-23.1,y:199.5,regY:5.8,alpha:1}},{t:this.instance_59,p:{regX:5.6,rotation:-65.8287,x:-39.45,y:113,regY:4.2,alpha:1}},{t:this.instance_56,p:{x:-32.75,y:119.3,regX:5.4,rotation:-50.8283,alpha:1}},{t:this.instance_57,p:{regX:3.5,regY:3.2,scaleX:0.6873,scaleY:0.6873,rotation:-20.8211,x:-21.45,y:146.65,alpha:1}},{t:this.instance_53,p:{regX:3.2,regY:3.8,scaleX:0.2748,scaleY:0.2748,rotation:-20.8196,x:-27.65,y:156.7,alpha:1}},{t:this.instance_52,p:{regX:3.6,regY:3.2,scaleX:0.6873,scaleY:0.6873,rotation:-20.8211,x:-10.75,y:125.45,alpha:1}},{t:this.instance_49,p:{regX:3.6,regY:3.2,x:-12.05,y:108.55,scaleX:1.1724,scaleY:1.1724,rotation:-20.8218,alpha:1}},{t:this.instance_50,p:{regX:5.5,scaleX:0.6376,scaleY:0.8568,rotation:-50.8283,x:-12.85,y:117.9,alpha:1}}]},1).to({state:[{t:this.instance_51,p:{x:-42.6,y:190.05,regY:12.5,rotation:99.1753,regX:16.9,scaleX:0.3775,scaleY:0.3775,alpha:1}},{t:this.instance_66,p:{rotation:-110.8223,x:-32.45,y:210.6,regX:5.7,regY:4.1,alpha:1}},{t:this.instance_65,p:{regY:3.2,rotation:-35.8179,x:-23.9,y:218.9,scaleX:0.5081,scaleY:0.5081,alpha:1}},{t:this.instance_64,p:{regX:-87.5,regY:-38.9,scaleX:0.5081,scaleY:0.5081,rotation:-33.0811,x:-97.3,y:198.2,alpha:1}},{t:this.instance_63,p:{regX:3.5,regY:3.4,rotation:-20.8179,x:-32.55,y:222.2,alpha:1}},{t:this.instance_62,p:{regX:5.5,scaleY:0.8568,rotation:-80.8277,x:-30.95,y:188.7,alpha:1}},{t:this.instance_61,p:{regX:3.6,regY:3.3,rotation:-35.8179,x:-20.35,y:201.8,scaleX:0.5081,scaleY:0.5081,alpha:1}},{t:this.instance_58,p:{regX:-87.5,regY:-39.1,rotation:-33.0811,x:-84.15,y:204.2,scaleX:0.5081,scaleY:0.5081,alpha:1}},{t:this.instance_55,p:{regX:35.9,rotation:28.9192,x:-9.95,y:205.6,regY:5.9,alpha:1}},{t:this.instance_60,p:{regX:5.2,regY:4.1,rotation:-80.8272,x:-40.25,y:198.35,alpha:1}},{t:this.instance_54,p:{regX:35.9,rotation:28.9166,x:-6.75,y:221.75,regY:5.8,alpha:1}},{t:this.instance_59,p:{regX:5.7,rotation:-80.8292,x:-42.85,y:136.9,regY:4.1,alpha:1}},{t:this.instance_56,p:{x:-32.3,y:150.9,regX:5.4,rotation:-65.8286,alpha:1}},{t:this.instance_57,p:{regX:3.4,regY:3.1,scaleX:0.6873,scaleY:0.6873,rotation:-35.8201,x:-18.55,y:182.15,alpha:1}},{t:this.instance_53,p:{regX:3.1,regY:3.8,scaleX:0.2748,scaleY:0.2748,rotation:-35.815,x:-20.65,y:187.65,alpha:1}},{t:this.instance_52,p:{regX:3.5,regY:3.2,scaleX:0.6873,scaleY:0.6873,rotation:-35.8201,x:-11.2,y:146.6,alpha:1}},{t:this.instance_49,p:{regX:3.6,regY:3.2,x:-19.7,y:131.1,scaleX:1.1724,scaleY:1.1724,rotation:-35.8208,alpha:1}},{t:this.instance_50,p:{regX:5.4,scaleX:0.6376,scaleY:0.8568,rotation:-65.8286,x:-18,y:140.35,alpha:1}}]},1).to({state:[{t:this.instance_51,p:{x:-52.6,y:273.05,regY:12.5,rotation:99.1753,regX:16.9,scaleX:0.3775,scaleY:0.3775,alpha:1}},{t:this.instance_66,p:{rotation:-110.8223,x:-42.45,y:293.6,regX:5.7,regY:4.1,alpha:1}},{t:this.instance_65,p:{regY:3.2,rotation:-35.8179,x:-33.9,y:301.9,scaleX:0.5081,scaleY:0.5081,alpha:1}},{t:this.instance_64,p:{regX:-87.5,regY:-38.9,scaleX:0.5081,scaleY:0.5081,rotation:-33.0811,x:-107.3,y:281.2,alpha:1}},{t:this.instance_63,p:{regX:3.5,regY:3.4,rotation:-20.8179,x:-42.55,y:305.2,alpha:1}},{t:this.instance_62,p:{regX:5.5,scaleY:0.8568,rotation:-80.8277,x:-40.95,y:271.7,alpha:1}},{t:this.instance_61,p:{regX:3.6,regY:3.3,rotation:-35.8179,x:-30.35,y:284.8,scaleX:0.5081,scaleY:0.5081,alpha:1}},{t:this.instance_58,p:{regX:-87.5,regY:-39.1,rotation:-33.0811,x:-94.15,y:287.2,scaleX:0.5081,scaleY:0.5081,alpha:1}},{t:this.instance_55,p:{regX:35.9,rotation:28.9192,x:-19.95,y:288.6,regY:5.9,alpha:1}},{t:this.instance_60,p:{regX:5.2,regY:4.1,rotation:-80.8272,x:-50.25,y:281.35,alpha:1}},{t:this.instance_54,p:{regX:35.9,rotation:28.9166,x:-16.75,y:304.75,regY:5.8,alpha:1}},{t:this.instance_59,p:{regX:5.7,rotation:-80.8292,x:-52.85,y:245.4,regY:4.1,alpha:1}},{t:this.instance_56,p:{x:-42.3,y:259.4,regX:5.4,rotation:-65.8286,alpha:1}},{t:this.instance_57,p:{regX:3.4,regY:3.1,scaleX:0.6873,scaleY:0.6873,rotation:-35.8201,x:-28.55,y:265.15,alpha:1}},{t:this.instance_53,p:{regX:3.1,regY:3.8,scaleX:0.2748,scaleY:0.2748,rotation:-35.815,x:-30.65,y:270.65,alpha:1}},{t:this.instance_52,p:{regX:3.5,regY:3.2,scaleX:0.6873,scaleY:0.6873,rotation:-35.8201,x:-32.7,y:255.1,alpha:1}},{t:this.instance_49,p:{regX:3.6,regY:3.2,x:-41.2,y:239.6,scaleX:1.1724,scaleY:1.1724,rotation:-35.8208,alpha:1}},{t:this.instance_50,p:{regX:5.4,scaleX:0.6376,scaleY:0.8568,rotation:-65.8286,x:-39.5,y:248.85,alpha:1}}]},1).to({state:[{t:this.instance_51,p:{x:-52.6,y:318.05,regY:12.5,rotation:99.1753,regX:16.9,scaleX:0.3775,scaleY:0.3775,alpha:0.1016}},{t:this.instance_66,p:{rotation:-110.8223,x:-42.45,y:338.6,regX:5.7,regY:4.1,alpha:0.1016}},{t:this.instance_65,p:{regY:3.2,rotation:-35.8179,x:-33.9,y:346.9,scaleX:0.5081,scaleY:0.5081,alpha:0.1016}},{t:this.instance_64,p:{regX:-87.5,regY:-38.9,scaleX:0.5081,scaleY:0.5081,rotation:-33.0811,x:-107.3,y:326.2,alpha:0.1016}},{t:this.instance_63,p:{regX:3.5,regY:3.4,rotation:-20.8179,x:-42.55,y:350.2,alpha:0.1016}},{t:this.instance_62,p:{regX:5.5,scaleY:0.8568,rotation:-80.8277,x:-40.95,y:316.7,alpha:0.1016}},{t:this.instance_61,p:{regX:3.6,regY:3.3,rotation:-35.8179,x:-30.35,y:329.8,scaleX:0.5081,scaleY:0.5081,alpha:0.1016}},{t:this.instance_58,p:{regX:-87.5,regY:-39.1,rotation:-33.0811,x:-94.15,y:332.2,scaleX:0.5081,scaleY:0.5081,alpha:0.1016}},{t:this.instance_55,p:{regX:35.9,rotation:28.9192,x:-19.95,y:333.6,regY:5.9,alpha:0.1016}},{t:this.instance_60,p:{regX:5.2,regY:4.1,rotation:-80.8272,x:-50.25,y:326.35,alpha:0.1016}},{t:this.instance_54,p:{regX:35.9,rotation:28.9166,x:-16.75,y:349.75,regY:5.8,alpha:0.1016}},{t:this.instance_59,p:{regX:5.7,rotation:-80.8292,x:-52.85,y:290.4,regY:4.1,alpha:0.1016}},{t:this.instance_56,p:{x:-42.3,y:304.4,regX:5.4,rotation:-65.8286,alpha:0.1016}},{t:this.instance_57,p:{regX:3.4,regY:3.1,scaleX:0.6873,scaleY:0.6873,rotation:-35.8201,x:-28.55,y:310.15,alpha:0.1016}},{t:this.instance_53,p:{regX:3.1,regY:3.8,scaleX:0.2748,scaleY:0.2748,rotation:-35.815,x:-30.65,y:315.65,alpha:0.1016}},{t:this.instance_52,p:{regX:3.5,regY:3.2,scaleX:0.6873,scaleY:0.6873,rotation:-35.8201,x:-32.7,y:300.1,alpha:0.1016}},{t:this.instance_49,p:{regX:3.6,regY:3.2,x:-41.2,y:284.6,scaleX:1.1724,scaleY:1.1724,rotation:-35.8208,alpha:0.1016}},{t:this.instance_50,p:{regX:5.4,scaleX:0.6376,scaleY:0.8568,rotation:-65.8286,x:-39.5,y:293.85,alpha:0.1016}}]},1).to({state:[]},1).wait(1));

	// leftHand
	this.leftHand = new lib.leftHand();
	this.leftHand.name = "leftHand";
	this.leftHand.setTransform(127.95,22.7,1.5226,1.5226,14.9984,0,0,15.2,12.8);

	this.timeline.addTween(cjs.Tween.get(this.leftHand).wait(1).to({rotation:29.9982,y:24.2},0).wait(1).to({y:20.2},0).wait(1).to({y:16.7},0).wait(1).to({x:122.45,y:12.7},0).wait(4).to({regX:15.1,rotation:14.9984,x:125.05,y:15.45},0).wait(1).to({rotation:1.5275,x:128.4,y:18.3},0).wait(1).to({rotation:1.5275},0).wait(4));

	// rightLeg
	this.rightLeg = new lib.rightLeg();
	this.rightLeg.name = "rightLeg";
	this.rightLeg.setTransform(163.8,60.35,1.6957,1.7009,0,0,180,0.1,0.1);
	this.rightLeg.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,0);

	this.timeline.addTween(cjs.Tween.get(this.rightLeg).wait(14));

	// leftHLeg
	this.leftLeg = new lib.leftLeg();
	this.leftLeg.name = "leftLeg";
	this.leftLeg.setTransform(140.35,68.4,1.6965,1.6985,0,0,0,5.4,5.6);

	this.timeline.addTween(cjs.Tween.get(this.leftLeg).wait(14));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.2,-110.9,309.3,462.4);


(lib.PositiveFeedbackJump_woman = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_23 = function() {
		this.dispatchEvent("complete")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Hat
	this.hat = new lib.hat();
	this.hat.name = "hat";
	this.hat.setTransform(105.5,18.8,1.5227,1.5227,0,0,0,62,23);

	this.timeline.addTween(cjs.Tween.get(this.hat).wait(2).to({y:16.05},0).wait(3).to({y:15.3},0).wait(2).to({y:13.55},0).wait(2).to({y:12.8},0).wait(1).to({y:12.05},0).wait(1).to({y:11.05},0).wait(1).to({y:9.55},0).wait(2).to({y:11.05},0).wait(1).to({y:12.05},0).wait(1).to({y:12.8},0).wait(1).to({y:13.55},0).wait(1).to({y:15.3},0).wait(1).to({y:16.05},0).wait(1).to({y:19.05},0).wait(4));

	// woman_face
	this.instance = new lib.mouuth_woman_smiling();
	this.instance.setTransform(90.4,70.15,1,1,-3.4817,0,0,6.7,2.5);

	this.instance_1 = new lib.woman_face();
	this.instance_1.setTransform(120.75,48.55,1.5112,1.5112,0,0,0,45,40);

	this.instance_2 = new lib.CachedBmp_806();
	this.instance_2.setTransform(57.35,46.9,0.3333,0.3333);

	this.instance_3 = new lib.CachedBmp_807();
	this.instance_3.setTransform(57.6,44.15,0.3333,0.3333);

	this.instance_4 = new lib.CachedBmp_808();
	this.instance_4.setTransform(57.6,43.4,0.3333,0.3333);

	this.instance_5 = new lib.CachedBmp_809();
	this.instance_5.setTransform(57.6,41.65,0.3333,0.3333);

	this.instance_6 = new lib.CachedBmp_810();
	this.instance_6.setTransform(57.6,40.9,0.3333,0.3333);

	this.instance_7 = new lib.CachedBmp_811();
	this.instance_7.setTransform(57.6,40.15,0.3333,0.3333);

	this.instance_8 = new lib.CachedBmp_812();
	this.instance_8.setTransform(57.6,39.15,0.3333,0.3333);

	this.instance_9 = new lib.CachedBmp_813();
	this.instance_9.setTransform(57.6,37.65,0.3333,0.3333);

	this.instance_10 = new lib.CachedBmp_814();
	this.instance_10.setTransform(57.6,39.15,0.3333,0.3333);

	this.instance_11 = new lib.CachedBmp_815();
	this.instance_11.setTransform(57.6,40.15,0.3333,0.3333);

	this.instance_12 = new lib.CachedBmp_816();
	this.instance_12.setTransform(57.6,40.9,0.3333,0.3333);

	this.instance_13 = new lib.CachedBmp_817();
	this.instance_13.setTransform(57.6,41.65,0.3333,0.3333);

	this.instance_14 = new lib.CachedBmp_818();
	this.instance_14.setTransform(57.6,43.4,0.3333,0.3333);

	this.instance_15 = new lib.CachedBmp_819();
	this.instance_15.setTransform(57.6,44.15,0.3333,0.3333);

	this.instance_16 = new lib.CachedBmp_820();
	this.instance_16.setTransform(57.6,47.15,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:48.55}},{t:this.instance,p:{y:70.15}}]}).to({state:[{t:this.instance_3},{t:this.instance_1,p:{y:45.8}},{t:this.instance,p:{y:67.4}}]},2).to({state:[{t:this.instance_4},{t:this.instance_1,p:{y:45.05}},{t:this.instance,p:{y:66.65}}]},3).to({state:[{t:this.instance_5},{t:this.instance_1,p:{y:43.3}},{t:this.instance,p:{y:64.9}}]},2).to({state:[{t:this.instance_6},{t:this.instance_1,p:{y:42.55}},{t:this.instance,p:{y:64.15}}]},2).to({state:[{t:this.instance_7},{t:this.instance_1,p:{y:41.8}},{t:this.instance,p:{y:63.4}}]},1).to({state:[{t:this.instance_8},{t:this.instance_1,p:{y:40.8}},{t:this.instance,p:{y:62.4}}]},1).to({state:[{t:this.instance_9},{t:this.instance_1,p:{y:39.3}},{t:this.instance,p:{y:60.9}}]},1).to({state:[{t:this.instance_10},{t:this.instance_1,p:{y:40.8}},{t:this.instance,p:{y:62.4}}]},2).to({state:[{t:this.instance_11},{t:this.instance_1,p:{y:41.8}},{t:this.instance,p:{y:63.4}}]},1).to({state:[{t:this.instance_12},{t:this.instance_1,p:{y:42.55}},{t:this.instance,p:{y:64.15}}]},1).to({state:[{t:this.instance_13},{t:this.instance_1,p:{y:43.3}},{t:this.instance,p:{y:64.9}}]},1).to({state:[{t:this.instance_14},{t:this.instance_1,p:{y:45.05}},{t:this.instance,p:{y:66.65}}]},1).to({state:[{t:this.instance_15},{t:this.instance_1,p:{y:45.8}},{t:this.instance,p:{y:67.4}}]},1).to({state:[{t:this.instance_16},{t:this.instance_1,p:{y:48.8}},{t:this.instance,p:{y:70.4}}]},1).wait(4));

	// frame
	this.frame = new lib.frame();
	this.frame.name = "frame";
	this.frame.setTransform(17.45,156.95,0.6804,0.6804,-1.4754,0,0,88.2,43.9);

	this.timeline.addTween(cjs.Tween.get(this.frame).wait(24));

	// crate
	this.crate = new lib.crate();
	this.crate.name = "crate";
	this.crate.setTransform(1.8,145.45,0.6804,0.6804,-1.4754,0,0,61.2,25.9);

	this.timeline.addTween(cjs.Tween.get(this.crate).wait(24));

	// wheel
	this.spinningWheel = new lib.StaticWheel();
	this.spinningWheel.name = "spinningWheel";
	this.spinningWheel.setTransform(-21.95,172.15,0.6031,0.6031,-1.4745,0,0,24.7,24.7);

	this.timeline.addTween(cjs.Tween.get(this.spinningWheel).wait(24));

	// PileStones
	this.bricks = new lib.smal_pile_stones();
	this.bricks.name = "bricks";
	this.bricks.setTransform(20.8,120.95,0.7175,0.7175,-8.2909,0,0,87.9,25.2);

	this.timeline.addTween(cjs.Tween.get(this.bricks).wait(24));

	// Body
	this.body = new lib.body();
	this.body.name = "body";
	this.body.setTransform(105.75,121.5,1.5227,1.5227,0,0,0,16,25.2);

	this.timeline.addTween(cjs.Tween.get(this.body).wait(2).to({y:118.3},0).wait(3).to({y:117.5},0).wait(2).to({y:115.9},0).wait(2).to({y:115.1},0).wait(1).to({y:114.3},0).wait(1).to({y:113.5},0).wait(1).to({y:111.9},0).wait(2).to({y:113.5},0).wait(1).to({y:114.3},0).wait(1).to({y:115.1},0).wait(1).to({y:115.9},0).wait(1).to({y:117.5},0).wait(1).to({y:118.3},0).wait(1).to({y:121.5},0).wait(4));

	// right_hand
	this.rightHand = new lib.handOpenRight();
	this.rightHand.name = "rightHand";
	this.rightHand.setTransform(128.25,118.75,1.1693,1.1693,-6.772,0,0,12.3,18.8);

	this.timeline.addTween(cjs.Tween.get(this.rightHand).wait(2).to({regY:18.9,rotation:-12.7125,x:129.25,y:114.15},0).wait(3).to({regX:12.4,rotation:-19.6577,x:132.65,y:112.8},0).wait(2).to({rotation:-26.1467,x:135.9,y:110.2},0).wait(2).to({scaleX:1.1692,scaleY:1.1692,rotation:-34.5939,x:138.45,y:106.9},0).wait(1).to({regY:19.1,rotation:-39.567,x:138.85,y:104.2},0).wait(1).to({regX:12.3,rotation:-68.5055,x:137.85,y:94.35},0).wait(1).to({regX:12.2,regY:19.2,rotation:-98.5041,x:135.5,y:87.1},0).wait(2).to({regX:12.3,regY:19.1,rotation:-68.5055,x:137.85,y:94.35},0).wait(1).to({regX:12.4,rotation:-39.567,x:138.85,y:104.2},0).wait(1).to({regY:18.9,rotation:-34.5939,x:138.45,y:106.9},0).wait(1).to({scaleX:1.1693,scaleY:1.1693,rotation:-26.1467,x:135.9,y:110.2},0).wait(1).to({rotation:-19.6577,x:132.65,y:112.8},0).wait(1).to({regX:12.3,rotation:-12.7125,x:129.25,y:114.15},0).wait(1).to({regY:18.8,rotation:-6.772,x:128.25,y:118.75},0).wait(4));

	// Left_hand
	this.leftHand = new lib.handOpenRight();
	this.leftHand.name = "leftHand";
	this.leftHand.setTransform(86.85,117.9,1.1693,1.1693,0,13.2628,-166.7372,12.3,18.8);

	this.timeline.addTween(cjs.Tween.get(this.leftHand).wait(2).to({regX:12.2,regY:18.9,scaleX:1.1692,scaleY:1.1692,skewX:20.4908,skewY:-159.5092,x:86.15,y:112.6},0).wait(3).to({skewX:26.7122,skewY:-153.2878,x:84.4,y:110.05},0).wait(2).to({skewX:32.4467,skewY:-147.5533,x:82.7,y:106.65},0).wait(2).to({regX:12.1,skewX:44.6531,skewY:-135.3469,x:78.8,y:101.9},0).wait(1).to({skewX:51.1113,skewY:-128.8887,x:78.05,y:98.6},0).wait(1).to({skewX:66.1102,skewY:-113.8898,x:80.05,y:92.25},0).wait(1).to({regX:12,regY:18.8,skewX:89.3277,skewY:-90.6723,x:83.95,y:86.9},0).wait(2).to({regX:12.1,regY:18.9,skewX:66.1102,skewY:-113.8898,x:80.05,y:92.25},0).wait(1).to({skewX:51.1113,skewY:-128.8887,x:78.05,y:98.6},0).wait(1).to({skewX:44.6531,skewY:-135.3469,x:78.8,y:101.9},0).wait(1).to({regX:12.2,skewX:32.4467,skewY:-147.5533,x:82.7,y:106.65},0).wait(1).to({skewX:26.7122,skewY:-153.2878,x:84.4,y:110.05},0).wait(1).to({skewX:20.4908,skewY:-159.5092,x:86.15,y:112.6},0).wait(1).to({regX:12.3,regY:18.8,scaleX:1.1693,scaleY:1.1693,skewX:13.2628,skewY:-166.7372,x:86.85,y:117.9},0).wait(4));

	// Leg_right
	this.rightLeg = new lib.rightLeg();
	this.rightLeg.name = "rightLeg";
	this.rightLeg.setTransform(116.8,162.4,1.6999,1.6999,0,0,0,5.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.rightLeg).wait(2).to({regX:5.4,regY:5.7,scaleX:1.678,scaleY:1.678,rotation:14.9987,y:157.7},0).wait(5).to({regY:5.8,scaleX:1.6779,scaleY:1.6779,rotation:29.9981,x:115.95,y:157.85},0).wait(2).to({regY:5.7,rotation:29.9978,x:116,y:156.5},0).wait(2).to({x:115.6,y:154.5},0).wait(1).to({rotation:14.9986,x:114.35,y:153.7},0).wait(2).to({rotation:29.9978,x:115.6,y:154.5},0).wait(1).to({y:156.1},0).wait(1).to({x:116,y:156.5},0).wait(1).to({regY:5.8,rotation:29.9981,x:115.95,y:157.85},0).wait(1).to({regY:5.7,scaleX:1.678,scaleY:1.678,rotation:14.9987,x:116.8,y:157.7},0).wait(2).to({regX:5.5,regY:6.7,scaleX:1.6999,scaleY:1.6999,rotation:0,x:117.05,y:162.45},0).wait(4));

	// Leg_left
	this.leftLeg = new lib.rightLeg();
	this.leftLeg.name = "leftLeg";
	this.leftLeg.setTransform(94.95,162.55,1.6959,1.6999,0,0,180,5.4,6.8);

	this.timeline.addTween(cjs.Tween.get(this.leftLeg).wait(2).to({regX:5.3,regY:5.9,scaleX:1.678,scaleY:1.678,skewX:-14.9987,skewY:165.0013,x:94,y:158.05},0).wait(5).to({regX:5.2,scaleX:1.6779,scaleY:1.6779,skewX:-29.9981,skewY:150.0019,x:95.4,y:157.55},0).wait(2).to({x:95,y:156.4},0).wait(2).to({skewX:-29.9978,skewY:150.0022,y:155.15},0).wait(1).to({skewX:-14.9986,skewY:165.0014,x:96.55,y:154.05},0).wait(2).to({skewX:-29.9978,skewY:150.0022,x:95.8,y:154.35},0).wait(1).to({x:95,y:155.95},0).wait(1).to({skewX:-29.9981,skewY:150.0019,y:156.4},0).wait(1).to({x:95.4,y:157.55},0).wait(1).to({regX:5.3,scaleX:1.678,scaleY:1.678,skewX:-14.9987,skewY:165.0013,x:94,y:158.05},0).wait(2).to({regX:5.5,regY:6.7,scaleX:1.6999,scaleY:1.6999,skewX:0,skewY:180,x:93.6,y:162.45},0).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.2,-25.4,240.2,212.9);


(lib.FeedbackFailureFace_woman = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_42 = function() {
		this.stop();
		
		this.dispatchEvent("complete")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(42).call(this.frame_42).wait(1));

	// Hat
	this.hat = new lib.hat();
	this.hat.name = "hat";
	this.hat.setTransform(144.8,33.65,1.5227,1.5227,0,0,0,62,23);

	this.timeline.addTween(cjs.Tween.get(this.hat).wait(6).to({x:143.4},0).wait(8).to({x:144.8},0).wait(6).to({x:143.4},0).wait(8).to({x:144.8},0).wait(6).to({x:143.4},0).wait(8).to({x:144.8},0).wait(1));

	// woman_face
	this.instance = new lib.mouuth_woman_sad();
	this.instance.setTransform(130.25,85.6,1,1,-14.9983,0,0,7.7,3.5);

	this.instance_1 = new lib.woman_face();
	this.instance_1.setTransform(161.45,64.05,1.5112,1.5112,0,0,0,45,40);

	this.instance_2 = new lib.woman_faceSide();
	this.instance_2.setTransform(161.45,64.2,1.5111,1.5109,0,0,0,45,40.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance,p:{x:130.25}}]}).to({state:[{t:this.instance_2},{t:this.instance,p:{x:132.25}}]},6).to({state:[{t:this.instance_1},{t:this.instance,p:{x:130.25}}]},8).to({state:[{t:this.instance_2},{t:this.instance,p:{x:132.25}}]},6).to({state:[{t:this.instance_1},{t:this.instance,p:{x:130.25}}]},8).to({state:[{t:this.instance_2},{t:this.instance,p:{x:132.25}}]},6).to({state:[{t:this.instance_1},{t:this.instance,p:{x:130.25}}]},8).wait(1));

	// ear
	this.instance_3 = new lib.CachedBmp_803();
	this.instance_3.setTransform(92,56.75,0.3333,0.3333);

	this.instance_4 = new lib.CachedBmp_804();
	this.instance_4.setTransform(92,56.75,0.3333,0.3333);

	this.instance_5 = new lib.CachedBmp_805();
	this.instance_5.setTransform(92,56.75,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},6).to({state:[]},8).to({state:[{t:this.instance_4}]},6).to({state:[]},8).to({state:[{t:this.instance_5}]},6).to({state:[]},8).wait(1));

	// rightHand
	this.rightHand = new lib.rightHand();
	this.rightHand.name = "rightHand";
	this.rightHand.setTransform(135.7,138.75,1.5227,1.5227,0,0,0,17.5,11.9);

	this.timeline.addTween(cjs.Tween.get(this.rightHand).wait(43));

	// frame
	this.frame = new lib.frame();
	this.frame.name = "frame";
	this.frame.setTransform(57.7,174.7,0.6804,0.6804,-1.4754,0,0,88.2,43.9);

	this.timeline.addTween(cjs.Tween.get(this.frame).wait(43));

	// crate
	this.crate = new lib.crate();
	this.crate.name = "crate";
	this.crate.setTransform(42.05,163.2,0.6804,0.6804,-1.4754,0,0,61.2,25.9);

	this.timeline.addTween(cjs.Tween.get(this.crate).wait(43));

	// wheel
	this.spinningWheel = new lib.StaticWheel();
	this.spinningWheel.name = "spinningWheel";
	this.spinningWheel.setTransform(18.3,189.9,0.6031,0.6031,-1.4745,0,0,24.7,24.7);

	this.timeline.addTween(cjs.Tween.get(this.spinningWheel).wait(43));

	// Body
	this.body = new lib.body();
	this.body.name = "body";
	this.body.setTransform(145.1,137.35,1.5227,1.5227,0,0,0,16,25.2);

	this.timeline.addTween(cjs.Tween.get(this.body).wait(43));

	// Left_hand
	this.leftHand = new lib.leftHand();
	this.leftHand.name = "leftHand";
	this.leftHand.setTransform(122.7,133.2,1.5227,1.5227,0,0,0,15.2,12.8);

	this.timeline.addTween(cjs.Tween.get(this.leftHand).wait(43));

	// rightLeg
	this.rightLeg = new lib.rightLeg();
	this.rightLeg.name = "rightLeg";
	this.rightLeg.setTransform(160.05,173.35,1.6957,1.7009,0,0,180,0.1,0.1);
	this.rightLeg.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,0);

	this.timeline.addTween(cjs.Tween.get(this.rightLeg).wait(43));

	// leftLeg
	this.leftLeg = new lib.leftLeg();
	this.leftLeg.name = "leftLeg";
	this.leftLeg.setTransform(137.05,181.4,1.6922,1.6985,0,0,0,5.4,5.6);

	this.timeline.addTween(cjs.Tween.get(this.leftLeg).wait(43));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.3,239.3,206.5);


(lib.woman = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1));

	// Woman
	this.characterMC0 = new lib.woman_selection();
	this.characterMC0.name = "characterMC0";
	this.characterMC0.setTransform(106.8,78.7,1,1,0,0,0,106.8,78.7);

	this.characterMC1 = new lib.woman_standing();
	this.characterMC1.name = "characterMC1";
	this.characterMC1.setTransform(80.9,86.7,1,1,0,0,0,80.9,86.7);

	this.characterMC2 = new lib.woman_HappyWalking();
	this.characterMC2.name = "characterMC2";
	this.characterMC2.setTransform(80.9,86.7,1,1,0,0,0,80.9,86.7);

	this.characterMC3 = new lib.FeedbackFailureFace_woman();
	this.characterMC3.name = "characterMC3";
	this.characterMC3.setTransform(81,86.4,1,1,0,0,0,81,86.4);

	this.characterMC4 = new lib.woman__SadWalking();
	this.characterMC4.name = "characterMC4";
	this.characterMC4.setTransform(80.4,87.15,0.9925,1.0053,0,0,0,81,86.7);

	this.characterMC5 = new lib.PositiveFeedbackJump_woman();
	this.characterMC5.name = "characterMC5";
	this.characterMC5.setTransform(119.3,102.65,1,1,0,0,0,79.2,86.7);

	this.characterMC6 = new lib.woman_HappyWalkingWithStones();
	this.characterMC6.name = "characterMC6";
	this.characterMC6.setTransform(81.9,86.7,1,1,0,0,0,81.9,86.7);

	this.characterMC7 = new lib.wheelbarrow_Dropstones_woman();
	this.characterMC7.name = "characterMC7";
	this.characterMC7.setTransform(119.25,108.85,1,1,0,0,0,122,-9.9);

	this.characterMC8 = new lib.Gray_woman();
	this.characterMC8.name = "characterMC8";
	this.characterMC8.setTransform(36.05,31.1,0.3931,0.4126,0,0,0,83,66.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.characterMC0}]}).to({state:[{t:this.characterMC1}]},1).to({state:[{t:this.characterMC2}]},1).to({state:[{t:this.characterMC3}]},1).to({state:[{t:this.characterMC4}]},1).to({state:[{t:this.characterMC5}]},1).to({state:[{t:this.characterMC6}]},1).to({state:[{t:this.characterMC7}]},1).to({state:[{t:this.characterMC8}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-1.3,240.2,210.8);


(lib.StaticMaster = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// face
	this.instance = new lib.Master_face();
	this.instance.setTransform(51.3,54.05,1,1,0,0,0,51.3,54.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// right_hand
	this.instance_1 = new lib.RightSleeve();
	this.instance_1.setTransform(58.05,113.7,1,1,0,0,0,7.7,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bode
	this.instance_2 = new lib.Master_body();
	this.instance_2.setTransform(42.55,118,1,1,0,0,0,17.2,26.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// left_hand
	this.instance_3 = new lib.Left_hand_master();
	this.instance_3.setTransform(26.3,112.65,1,1,0,0,0,14,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// stick
	this.instance_4 = new lib.Master_stick();
	this.instance_4.setTransform(18.8,132.75,1,1,0,0,0,4.2,11.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.StaticMaster, new cjs.Rectangle(0,-0.1,102.6,144.4), null);


(lib.MasterEndAnimation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_61 = function() {
		this.gotoAndPlay(9);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(61).call(this.frame_61).wait(1));

	// face
	this.instance = new lib.Master_face();
	this.instance.setTransform(51.3,54.05,1,1,0,0,0,51.3,54.2);

	this.instance_1 = new lib.HappyFaceMaster();
	this.instance_1.setTransform(51.15,53.95,1.0524,1.0093,0,0,0,48.6,53.6);

	this.instance_2 = new lib.CachedBmp_425();
	this.instance_2.setTransform(-13.7,44.55,0.2399,0.2399);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},9).wait(53));

	// rightSleeve
	this.instance_3 = new lib.RightSleeve();
	this.instance_3.setTransform(57.7,113.7,1,1,0,0,0,7.5,13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},9).wait(49).to({_off:false},0).wait(4));

	// body
	this.instance_4 = new lib.Master_body();
	this.instance_4.setTransform(42.55,118,1,1,0,0,0,17.2,26.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(62));

	// left_hand
	this.instance_5 = new lib.Left_hand_master();
	this.instance_5.setTransform(26.3,112.65,1,1,0,0,0,14,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(62));

	// stick
	this.instance_6 = new lib.Master_stick();
	this.instance_6.setTransform(18.8,132.75,1,1,0,0,0,4.2,11.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(62));

	// right_hand
	this.instance_7 = new lib.Sleeve_2();
	this.instance_7.setTransform(55.15,113.4,1,1,0,8.9893,-171.0107,8,13.8);

	this.instance_8 = new lib.OpenHand();
	this.instance_8.setTransform(67.25,123.55,0.1219,0.1219,0,67.6008,-112.3992,69.2,39.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8,p:{regX:69.2,regY:39.8,skewX:67.6008,skewY:-112.3992,x:67.25,y:123.55}},{t:this.instance_7,p:{skewX:8.9893,skewY:-171.0107,x:55.15,y:113.4,regX:8}}]},9).to({state:[{t:this.instance_8,p:{regX:68.5,regY:39.5,skewX:48.379,skewY:-131.621,x:71.35,y:120.2}},{t:this.instance_7,p:{skewX:-0.7519,skewY:179.2481,x:57.9,y:112.8,regX:8}}]},2).to({state:[{t:this.instance_8,p:{regX:68,regY:39.8,skewX:24.682,skewY:-155.318,x:75.1,y:114.75}},{t:this.instance_7,p:{skewX:-12.7461,skewY:167.2539,x:60.35,y:110.95,regX:7.9}}]},2).to({state:[{t:this.instance_8,p:{regX:68.1,regY:39.9,skewX:9.6781,skewY:-170.3219,x:75.4,y:113}},{t:this.instance_7,p:{skewX:-12.7461,skewY:167.2539,x:60.35,y:110.95,regX:7.9}}]},2).to({state:[{t:this.instance_8,p:{regX:68,regY:40.2,skewX:-5.3152,skewY:174.6848,x:74.4,y:112.25}},{t:this.instance_7,p:{skewX:-12.7461,skewY:167.2539,x:60.35,y:110.95,regX:7.9}}]},3).to({state:[{t:this.instance_8,p:{regX:68,regY:40.9,skewX:-20.3134,skewY:159.6866,x:72.7,y:111.1}},{t:this.instance_7,p:{skewX:-12.7461,skewY:167.2539,x:60.35,y:110.95,regX:7.9}}]},4).to({state:[{t:this.instance_8,p:{regX:68,regY:40.2,skewX:-5.3152,skewY:174.6848,x:74.4,y:112.25}},{t:this.instance_7,p:{skewX:-12.7461,skewY:167.2539,x:60.35,y:110.95,regX:7.9}}]},4).to({state:[{t:this.instance_8,p:{regX:68.1,regY:39.9,skewX:9.6781,skewY:-170.3219,x:75.4,y:113}},{t:this.instance_7,p:{skewX:-12.7461,skewY:167.2539,x:60.35,y:110.95,regX:7.9}}]},4).to({state:[{t:this.instance_8,p:{regX:68,regY:40.2,skewX:-5.3152,skewY:174.6848,x:74.4,y:112.25}},{t:this.instance_7,p:{skewX:-12.7461,skewY:167.2539,x:60.35,y:110.95,regX:7.9}}]},4).to({state:[{t:this.instance_8,p:{regX:68,regY:40.9,skewX:-20.3134,skewY:159.6866,x:72.7,y:111.1}},{t:this.instance_7,p:{skewX:-12.7461,skewY:167.2539,x:60.35,y:110.95,regX:7.9}}]},3).to({state:[{t:this.instance_8,p:{regX:68,regY:40.2,skewX:-5.3152,skewY:174.6848,x:74.4,y:112.25}},{t:this.instance_7,p:{skewX:-12.7461,skewY:167.2539,x:60.35,y:110.95,regX:7.9}}]},3).to({state:[{t:this.instance_8,p:{regX:68.1,regY:39.9,skewX:9.6781,skewY:-170.3219,x:75.4,y:113}},{t:this.instance_7,p:{skewX:-12.7461,skewY:167.2539,x:60.35,y:110.95,regX:7.9}}]},3).to({state:[{t:this.instance_8,p:{regX:68,regY:40.2,skewX:-5.3152,skewY:174.6848,x:74.4,y:112.25}},{t:this.instance_7,p:{skewX:-12.7461,skewY:167.2539,x:60.35,y:110.95,regX:7.9}}]},3).to({state:[{t:this.instance_8,p:{regX:68,regY:40.9,skewX:-20.3134,skewY:159.6866,x:72.7,y:111.1}},{t:this.instance_7,p:{skewX:-12.7461,skewY:167.2539,x:60.35,y:110.95,regX:7.9}}]},3).to({state:[{t:this.instance_8,p:{regX:68,regY:40.2,skewX:-5.3152,skewY:174.6848,x:74.4,y:112.25}},{t:this.instance_7,p:{skewX:-12.7461,skewY:167.2539,x:60.35,y:110.95,regX:7.9}}]},3).to({state:[{t:this.instance_8,p:{regX:68.1,regY:39.9,skewX:9.6781,skewY:-170.3219,x:75.4,y:113}},{t:this.instance_7,p:{skewX:-12.7461,skewY:167.2539,x:60.35,y:110.95,regX:7.9}}]},3).to({state:[]},3).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,-0.1,116.3,144.4);


(lib.Right_hand_master = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Sleeve_1();
	this.instance.setTransform(7.5,14.4,1,1,0,0,0,7.5,14.4);

	this.instance_1 = new lib.hand_1();
	this.instance_1.setTransform(15.45,20.45,1,1,0,0,0,10.3,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Right_hand_master, new cjs.Rectangle(0,0,25.9,30.4), null);


(lib.LotteryMaster = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_65 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(65).call(this.frame_65).wait(21));

	// textBox
	this.playerName = new cjs.Text("", "normal 600 17px 'Assistant'");
	this.playerName.name = "playerName";
	this.playerName.textAlign = "center";
	this.playerName.lineHeight = 22;
	this.playerName.lineWidth = 72;
	this.playerName.parent = this;
	this.playerName.setTransform(-159.4758,236.0062,1,1,-13.7419);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.playerName);
	}
	this.playerName._off = true;

	this.timeline.addTween(cjs.Tween.get(this.playerName).wait(65).to({_off:false},0).wait(21));

	// Palm_1
	this.instance = new lib.Palm_1();
	this.instance.setTransform(43.7,341.4,10.4214,10.1852,0,17.6573,16.7581,5.9,6);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,1,0);

	this.instance_1 = new lib.Palm_1();
	this.instance_1.setTransform(-353,327.85,10.4458,10.1606,0,2.2656,-177.8567,5.7,5.9);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,1,0);

	this.instance_2 = new lib.Tween1();
	this.instance_2.setTransform(-168.35,301.95,7.0993,6.9046);
	this.instance_2.shadow = new cjs.Shadow("rgba(102,102,102,1)",0,1,0);

	this.instance_3 = new lib.Tween2();
	this.instance_3.setTransform(-173,291.95,7.0993,6.9046);

	this.instance_4 = new lib.CachedBmp_467();
	this.instance_4.setTransform(-384,204.55,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1,p:{scaleY:10.1606,skewY:-177.8567,y:327.85,scaleX:10.4458,skewX:2.2656,x:-353}},{t:this.instance,p:{scaleY:10.1852,skewX:17.6573,skewY:16.7581,y:341.4,scaleX:10.4214,x:43.7}}]},14).to({state:[{t:this.instance_1,p:{scaleY:10.1605,skewY:-177.8569,y:324.4,scaleX:10.4458,skewX:2.2656,x:-353}},{t:this.instance,p:{scaleY:10.1851,skewX:17.6574,skewY:16.758,y:341.35,scaleX:10.4214,x:43.7}}]},5).to({state:[{t:this.instance_1,p:{scaleY:10.1602,skewY:177.295,y:341.5,scaleX:10.4453,skewX:-2.8594,x:-351.55}},{t:this.instance,p:{scaleY:10.1723,skewX:12.551,skewY:11.8918,y:324.85,scaleX:10.4333,x:45.1}}]},5).to({state:[{t:this.instance_1,p:{scaleY:10.1593,skewY:179.9434,y:331.95,scaleX:10.4458,skewX:-0.0598,x:-353.15}},{t:this.instance,p:{scaleY:10.1787,skewX:15.3411,skewY:14.5473,y:333.85,scaleX:10.4271,x:44}}]},5).to({state:[{t:this.instance_1,p:{scaleY:10.1602,skewY:-177.8567,y:324.4,scaleX:10.4458,skewX:2.2658,x:-353.05}},{t:this.instance,p:{scaleY:10.1849,skewX:17.6579,skewY:16.7575,y:341.35,scaleX:10.4212,x:43.75}}]},5).to({state:[{t:this.instance_1,p:{scaleY:10.1602,skewY:-177.8567,y:324.4,scaleX:10.4458,skewX:2.2658,x:-353.05}},{t:this.instance,p:{scaleY:10.1849,skewX:17.6579,skewY:16.7575,y:341.35,scaleX:10.4212,x:43.75}}]},5).to({state:[{t:this.instance_1,p:{scaleY:10.1595,skewY:179.2558,y:334.7,scaleX:10.4458,skewX:-0.7868,x:-352.4}},{t:this.instance,p:{scaleY:10.1769,skewX:14.6172,skewY:13.8576,y:331.6,scaleX:10.4287,x:44.6}}]},4).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_1,p:{scaleY:10.1595,skewY:179.2558,y:259.45,scaleX:10.4458,skewX:-0.7868,x:-260.85}},{t:this.instance,p:{scaleY:10.2282,skewX:29.9161,skewY:28.5578,y:257.35,scaleX:10.3781,x:-47.2}}]},2).to({state:[{t:this.instance_1,p:{scaleY:10.1595,skewY:179.2558,y:259.45,scaleX:10.4458,skewX:-0.7868,x:-223.2}},{t:this.instance,p:{scaleY:10.2282,skewX:29.9161,skewY:28.5578,y:257.35,scaleX:10.3781,x:-67.8}}]},2).to({state:[{t:this.instance_1,p:{scaleY:10.1595,skewY:179.2558,y:253.2,scaleX:10.4458,skewX:-0.7868,x:-211.15}},{t:this.instance,p:{scaleY:10.2282,skewX:29.9161,skewY:28.5578,y:249.75,scaleX:10.3781,x:-81.3}}]},2).to({state:[{t:this.instance_1,p:{scaleY:10.1595,skewY:179.2558,y:253.2,scaleX:10.4458,skewX:-0.7868,x:-199.8}},{t:this.instance,p:{scaleY:10.2282,skewX:29.9161,skewY:28.5578,y:256.7,scaleX:10.3781,x:-95.5}}]},2).to({state:[{t:this.instance_1,p:{scaleY:10.1595,skewY:179.2558,y:253.2,scaleX:10.4458,skewX:-0.7868,x:-199.8}},{t:this.instance,p:{scaleY:10.2282,skewX:29.9161,skewY:28.5578,y:256.7,scaleX:10.3781,x:-95.5}}]},3).to({state:[{t:this.instance_1,p:{scaleY:10.1595,skewY:179.2558,y:253.2,scaleX:10.4458,skewX:-0.7868,x:-211.15}},{t:this.instance,p:{scaleY:10.2282,skewX:29.9161,skewY:28.5578,y:249.75,scaleX:10.3781,x:-81.3}}]},1).to({state:[{t:this.instance_1,p:{scaleY:10.1595,skewY:179.2558,y:253.2,scaleX:10.4458,skewX:-0.7868,x:-233.15}},{t:this.instance,p:{scaleY:10.2282,skewX:29.9161,skewY:28.5578,y:249.75,scaleX:10.3781,x:-67.1}}]},3).to({state:[{t:this.instance_1,p:{scaleY:10.1595,skewY:179.2558,y:253.2,scaleX:10.4458,skewX:-0.7868,x:-255.15}},{t:this.instance,p:{scaleY:10.2282,skewX:29.9161,skewY:28.5578,y:249.75,scaleX:10.3781,x:-55.7}}]},1).to({state:[{t:this.instance_1,p:{scaleY:2.9657,skewY:179.256,y:368.5,scaleX:3.0495,skewX:-0.7868,x:6.4}},{t:this.instance,p:{scaleY:2.9858,skewX:29.9167,skewY:28.5566,y:367.5,scaleX:3.0296,x:64.6}}]},20).wait(1));

	// p_plate
	this.instance_5 = new lib.CachedBmp_468();
	this.instance_5.setTransform(-18.1,385.8,0.3333,0.3333);

	this.instance_6 = new lib.CachedBmp_469();
	this.instance_6.setTransform(-339.55,312.85,0.3333,0.3333);

	this.instance_7 = new lib.CachedBmp_470();
	this.instance_7.setTransform(-338.75,308,0.3333,0.3333);

	this.instance_8 = new lib.CachedBmp_471();
	this.instance_8.setTransform(-338.7,305.9,0.3333,0.3333);

	this.instance_9 = new lib.CachedBmp_472();
	this.instance_9.setTransform(-339.25,314.4,0.3333,0.3333);

	this.instance_10 = new lib.CachedBmp_473();
	this.instance_10.setTransform(-338.75,307.95,0.3333,0.3333);

	this.instance_11 = new lib.CachedBmp_474();
	this.instance_11.setTransform(-338.75,307.95,0.3333,0.3333);

	this.instance_12 = new lib.CachedBmp_475();
	this.instance_12.setTransform(-338.65,312.15,0.3333,0.3333);

	this.instance_13 = new lib.CachedBmp_476();
	this.instance_13.setTransform(-338.65,312.15,0.3333,0.3333);

	this.instance_14 = new lib.CachedBmp_477();
	this.instance_14.setTransform(-338.65,312.15,0.3333,0.3333);

	this.instance_15 = new lib.CachedBmp_478();
	this.instance_15.setTransform(-338.65,312.15,0.3333,0.3333);

	this.instance_16 = new lib.CachedBmp_479();
	this.instance_16.setTransform(-338.65,312.15,0.3333,0.3333);

	this.instance_17 = new lib.CachedBmp_480();
	this.instance_17.setTransform(-338.65,312.15,0.3333,0.3333);

	this.instance_18 = new lib.CachedBmp_481();
	this.instance_18.setTransform(-338.65,312.15,0.3333,0.3333);

	this.instance_19 = new lib.CachedBmp_482();
	this.instance_19.setTransform(-338.65,312.15,0.3333,0.3333);

	this.instance_20 = new lib.CachedBmp_483();
	this.instance_20.setTransform(-338.65,312.15,0.3333,0.3333);

	this.instance_21 = new lib.CachedBmp_484();
	this.instance_21.setTransform(-338.65,312.15,0.3333,0.3333);

	this.instance_22 = new lib.CachedBmp_485();
	this.instance_22.setTransform(-338.65,312.15,0.3333,0.3333);

	this.instance_23 = new lib.CachedBmp_486();
	this.instance_23.setTransform(-338.65,312.15,0.3333,0.3333);

	this.instance_24 = new lib.CachedBmp_487();
	this.instance_24.setTransform(-17.95,385.65,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},14).to({state:[{t:this.instance_7}]},5).to({state:[{t:this.instance_8}]},5).to({state:[{t:this.instance_9}]},5).to({state:[{t:this.instance_10}]},5).to({state:[{t:this.instance_11}]},5).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},2).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_17}]},2).to({state:[{t:this.instance_18}]},2).to({state:[{t:this.instance_19}]},2).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},3).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},20).wait(1));

	// cookie
	this.instance_25 = new lib.LuckyCookie2();
	this.instance_25.setTransform(19.05,386.75,1.0652,1.0399,0,-15.3977,-14.6026,16.2,14.1);

	this.instance_26 = new lib.LuckyCookie1();
	this.instance_26.setTransform(55.8,387.8,0.9443,0.9313,0,30.6915,29.3136,14.6,15.8);

	this.instance_27 = new lib.Tween3("synched",0);
	this.instance_27.setTransform(-145.3,315.75,7.0993,6.9046);

	this.instance_28 = new lib.Tween4("synched",0);
	this.instance_28.setTransform(-138.55,305.4,7.0993,6.9046);

	this.instance_29 = new lib.CachedBmp_488();
	this.instance_29.setTransform(-277.65,234.6,0.3333,0.3333);

	this.instance_30 = new lib.noteName();
	this.instance_30.setTransform(-161.3,248.55,1.0308,2.4501,0,-15.4017,-14.6036,19.4,7.3);
	this.instance_30.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,0,0);

	this.instance_31 = new lib.HalfCookie2();
	this.instance_31.setTransform(-181.1,249.2,1.6292,1.5845,0,0,0,24.2,20.5);

	this.instance_32 = new lib.HalfCookie1();
	this.instance_32.setTransform(-113.65,239.2,1.6292,1.5845,0,0,0,24.2,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_26,p:{regX:14.6,scaleX:0.9443,scaleY:0.9313,skewX:30.6915,x:55.8,y:387.8,skewY:29.3136,regY:15.8,rotation:0}},{t:this.instance_25,p:{regX:16.2,regY:14.1,scaleX:1.0652,scaleY:1.0399,skewX:-15.3977,skewY:-14.6026,x:19.05,y:386.75}}]}).to({state:[{t:this.instance_26,p:{regX:14.5,scaleX:3.2348,scaleY:3.1902,skewX:30.6919,x:-86.15,y:319.25,skewY:29.3136,regY:15.8,rotation:0}},{t:this.instance_25,p:{regX:16.1,regY:14,scaleX:3.6489,scaleY:3.5622,skewX:-15.3989,skewY:-14.6034,x:-212.15,y:315.6}}]},14).to({state:[{t:this.instance_26,p:{regX:14.6,scaleX:3.2316,scaleY:3.1931,skewX:32.9216,x:-145.2,y:311.65,skewY:31.4857,regY:15.8,rotation:0}},{t:this.instance_25,p:{regX:16.2,regY:14.2,scaleX:3.6506,scaleY:3.5602,skewX:-13.141,skewY:-12.4531,x:-186.75,y:306.35}}]},5).to({state:[{t:this.instance_26,p:{regX:14.7,scaleX:3.2381,scaleY:3.1861,skewX:27.8669,x:-201.2,y:321.5,skewY:26.5708,regY:15.8,rotation:0}},{t:this.instance_25,p:{regX:16.2,regY:14.2,scaleX:3.646,scaleY:3.5645,skewX:-18.2467,skewY:-17.3197,x:-120.25,y:303.05}}]},5).to({state:[{t:this.instance_26,p:{regX:14.7,scaleX:3.2345,scaleY:3.1897,skewX:30.6318,x:-214.65,y:318.35,skewY:29.2534,regY:16,rotation:0}},{t:this.instance_25,p:{regX:16.3,regY:14.2,scaleX:3.6487,scaleY:3.562,skewX:-15.4579,skewY:-14.6585,x:-94.15,y:312.9}}]},5).to({state:[{t:this.instance_26,p:{regX:14.6,scaleX:3.2316,scaleY:3.193,skewX:32.9222,x:-222.6,y:312.7,skewY:31.485,regY:15.8,rotation:0}},{t:this.instance_25,p:{regX:16.2,regY:14.2,scaleX:3.6506,scaleY:3.5601,skewX:-13.1414,skewY:-12.4531,x:-94.25,y:311.35}}]},5).to({state:[{t:this.instance_25,p:{regX:16.2,regY:14.2,scaleX:3.6506,scaleY:3.5601,skewX:-13.1414,skewY:-12.4531,x:-173.3,y:316.35}},{t:this.instance_26,p:{regX:14.6,scaleX:3.2316,scaleY:3.193,skewX:32.9222,x:-111.5,y:318.2,skewY:31.485,regY:15.8,rotation:0}}]},5).to({state:[{t:this.instance_26,p:{regX:14.7,scaleX:3.2355,scaleY:3.1888,skewX:29.913,x:-70.8,y:318.65,skewY:28.5553,regY:15.8,rotation:0}},{t:this.instance_25,p:{regX:16.3,regY:14.2,scaleX:3.6481,scaleY:3.5627,skewX:-16.183,skewY:-15.3499,x:-212.3,y:312.35}}]},4).to({state:[{t:this.instance_27}]},2).to({state:[{t:this.instance_28}]},2).to({state:[{t:this.instance_29}]},2).to({state:[{t:this.instance_26,p:{regX:14.7,scaleX:3.2355,scaleY:3.1888,skewX:29.913,x:-71.5,y:268.25,skewY:28.5553,regY:15.8,rotation:0}},{t:this.instance_25,p:{regX:16.3,regY:14.2,scaleX:3.6481,scaleY:3.5627,skewX:-16.183,skewY:-15.3499,x:-212.3,y:312.35}}]},2).to({state:[{t:this.instance_26,p:{regX:14.8,scaleX:3.2566,scaleY:3.1673,skewX:0,x:-90.7,y:259.55,skewY:0,regY:15.8,rotation:-0.7897}},{t:this.instance_25,p:{regX:16.3,regY:14.2,scaleX:3.6481,scaleY:3.5627,skewX:-16.183,skewY:-15.3499,x:-212.3,y:312.35}}]},2).to({state:[{t:this.instance_26,p:{regX:14.8,scaleX:3.2333,scaleY:3.1907,skewX:-31.4684,x:-99.25,y:253.9,skewY:-30.0675,regY:16,rotation:0}},{t:this.instance_25,p:{regX:16.3,regY:14.2,scaleX:3.6481,scaleY:3.5627,skewX:-16.183,skewY:-15.3499,x:-212.3,y:312.35}}]},2).to({state:[{t:this.instance_26,p:{regX:14.8,scaleX:3.2333,scaleY:3.1907,skewX:-31.4684,x:-138.3,y:253.9,skewY:-30.0675,regY:16,rotation:0}},{t:this.instance_25,p:{regX:16.3,regY:14.2,scaleX:3.6481,scaleY:3.5627,skewX:-16.183,skewY:-15.3499,x:-212.3,y:312.35}}]},2).to({state:[{t:this.instance_26,p:{regX:14.8,scaleX:3.2333,scaleY:3.1907,skewX:-31.4684,x:-146.1,y:253.9,skewY:-30.0675,regY:16,rotation:0}},{t:this.instance_25,p:{regX:16.3,regY:14.2,scaleX:3.6481,scaleY:3.5627,skewX:-16.183,skewY:-15.3499,x:-212.3,y:312.35}}]},3).to({state:[{t:this.instance_25,p:{regX:16.3,regY:14.2,scaleX:3.6481,scaleY:3.5627,skewX:-16.183,skewY:-15.3499,x:-212.3,y:312.35}},{t:this.instance_32,p:{x:-113.65,regY:20.1,scaleX:1.6292,scaleY:1.5845,y:239.2}},{t:this.instance_31,p:{x:-181.1,regY:20.5,scaleX:1.6292,scaleY:1.5845,y:249.2}},{t:this.instance_30,p:{regX:19.4,regY:7.3,scaleX:1.0308,skewY:-14.6036,x:-161.3,y:248.55,scaleY:2.4501,skewX:-15.4017}}]},1).to({state:[{t:this.instance_25,p:{regX:16.3,regY:14.2,scaleX:3.6481,scaleY:3.5627,skewX:-16.183,skewY:-15.3499,x:-212.3,y:312.35}},{t:this.instance_32,p:{x:-99.45,regY:20.1,scaleX:1.6292,scaleY:1.5845,y:239.2}},{t:this.instance_31,p:{x:-203.1,regY:20.5,scaleX:1.6292,scaleY:1.5845,y:249.2}},{t:this.instance_30,p:{regX:20.2,regY:7.6,scaleX:1.5657,skewY:-14.5953,x:-160.5,y:245.7,scaleY:2.4501,skewX:-15.4017}}]},3).to({state:[{t:this.instance_25,p:{regX:16.3,regY:14.2,scaleX:3.6481,scaleY:3.5627,skewX:-16.183,skewY:-15.3499,x:-212.3,y:312.35}},{t:this.instance_32,p:{x:-88.1,regY:20.1,scaleX:1.6292,scaleY:1.5845,y:239.2}},{t:this.instance_31,p:{x:-225.1,regY:20.5,scaleX:1.6292,scaleY:1.5845,y:249.2}},{t:this.instance_30,p:{regX:20.2,regY:7.7,scaleX:2.2786,skewY:-14.5953,x:-160.7,y:245.75,scaleY:2.4501,skewX:-15.4017}}]},1).to({state:[{t:this.instance_25,p:{regX:16.2,regY:14.2,scaleX:1.065,scaleY:1.04,skewX:-16.1835,skewY:-15.3489,x:18.8,y:385.8}},{t:this.instance_32,p:{x:55.15,regY:20,scaleX:0.4756,scaleY:0.4625,y:364.35}},{t:this.instance_31,p:{x:15.15,regY:20.4,scaleX:0.4756,scaleY:0.4625,y:367.3}},{t:this.instance_30,p:{regX:20.2,regY:7.6,scaleX:0.6652,skewY:-14.5938,x:33.95,y:366.25,scaleY:0.7152,skewX:-15.4014}}]},20).wait(1));

	// plate
	this.instance_33 = new lib.plate();
	this.instance_33.setTransform(36.85,393.25,0.9772,0.9505,0,0,0,58.1,10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(14).to({scaleX:3.3475,scaleY:3.2558,x:-151,y:338.3},0).wait(5).to({regX:58.2,regY:10.3,scaleX:3.3473,scaleY:3.2559,skewX:2.2669,skewY:2.1443,x:-151.5,y:338.9},0).wait(5).to({regX:58.3,scaleX:3.3471,scaleY:3.2558,skewX:-2.8567,skewY:-2.7026,x:-149.3,y:339.05},0).wait(5).to({regY:10.5,scaleX:3.3473,scaleY:3.2555,rotation:-0.0569,skewX:0,skewY:0,x:-150.65,y:339.4},0).wait(5).to({regX:58.2,regY:10.3,scaleY:3.2558,rotation:0,skewX:2.267,skewY:2.1443,x:-151.5,y:338.95},0).wait(9).to({regX:58.3,scaleX:3.3474,scaleY:3.2556,rotation:-0.7853,skewX:0,skewY:0,x:-149.9,y:339.2},0).wait(42).to({regY:10.2,scaleX:0.9772,scaleY:0.9504,rotation:-0.7847,x:37.1,y:393.5},0).wait(1));

	// stand
	this.instance_34 = new lib.stoneStand();
	this.instance_34.setTransform(59.1,462.7,2.0725,2.0158,0,0,0,44.7,31.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(14).to({regX:44.6,scaleX:7.0993,scaleY:6.9048,x:-75.3,y:576.1},0).wait(5).to({y:576.05},0).wait(5).to({scaleY:6.9046,x:-75.35,y:576.1},0).wait(61).to({scaleX:2.0725,scaleY:2.0155,x:58.9,y:462.75},0).wait(1));

	// master
	this.instance_35 = new lib.Master_face();
	this.instance_35.setTransform(67.3,179.2,3.0487,2.9592,0,0,0,51.3,54.1);

	this.instance_36 = new lib.Master_body();
	this.instance_36.setTransform(35.75,367.6,3.0487,2.9592,0,0,0,17.2,26.4);

	this.instance_37 = new lib.Right_hand_master();
	this.instance_37.setTransform(89.65,352.6,3.0487,2.9592,0,0,0,13,15.2);

	this.instance_38 = new lib.Left_hand_master();
	this.instance_38.setTransform(-14.85,352.65,3.0487,2.9592,0,0,0,14.1,14.6);

	this.instance_39 = new lib.Sleeve_1();
	this.instance_39.setTransform(-27.55,191.9,10.4497,10.1469,0,0,0,7.5,14.5);

	this.instance_40 = new lib.Sleeve_2();
	this.instance_40.setTransform(-265,194.2,10.4462,10.1422,0,0,0,8.1,13.8);

	this.instance_41 = new lib.arm_1();
	this.instance_41.setTransform(-325.2,246.25,10.3987,10.2617,0,73.8567,72.9864,6.8,5.3);

	this.instance_42 = new lib.arm_1();
	this.instance_42.setTransform(42.75,255.7,10.6319,10.0372,0,20.9702,19.9286,6.2,6.7);

	this.instance_43 = new lib.arm_1();
	this.instance_43.setTransform(-311.05,228.25,10.3984,10.2616,0,73.8572,72.9859,6.8,5.3);

	this.instance_44 = new lib.arm_1();
	this.instance_44.setTransform(9.1,205,10.6546,10.0141,0,12.3131,11.6655,6.3,6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_38},{t:this.instance_37},{t:this.instance_36,p:{scaleX:3.0487,scaleY:2.9592,x:35.75,y:367.6}},{t:this.instance_35,p:{scaleX:3.0487,scaleY:2.9592,x:67.3,y:179.2}}]}).to({state:[{t:this.instance_42,p:{scaleY:10.0372,skewX:20.9702,skewY:19.9286,y:255.7,x:42.75,regX:6.2,scaleX:10.6319,regY:6.7}},{t:this.instance_41,p:{skewX:73.8567,skewY:72.9864,y:246.25,scaleX:10.3987,scaleY:10.2617,x:-325.2,regX:6.8,regY:5.3}},{t:this.instance_40,p:{scaleY:10.1422,scaleX:10.4462,x:-265,y:194.2}},{t:this.instance_39,p:{scaleY:10.1469,scaleX:10.4497,y:191.9,x:-27.55}},{t:this.instance_36,p:{scaleX:10.4432,scaleY:10.1364,x:-154.5,y:250.6}},{t:this.instance_35,p:{scaleX:10.4432,scaleY:10.1364,x:-46.5,y:-395.2}}]},14).to({state:[{t:this.instance_42,p:{scaleY:10.0373,skewX:20.9704,skewY:19.9285,y:255.65,x:42.75,regX:6.2,scaleX:10.6319,regY:6.7}},{t:this.instance_41,p:{skewX:73.8569,skewY:72.9863,y:246.2,scaleX:10.3987,scaleY:10.2617,x:-325.2,regX:6.8,regY:5.3}},{t:this.instance_40,p:{scaleY:10.1422,scaleX:10.4462,x:-265,y:194.2}},{t:this.instance_39,p:{scaleY:10.1468,scaleX:10.4497,y:191.9,x:-27.55}},{t:this.instance_36,p:{scaleX:10.4432,scaleY:10.1364,x:-154.5,y:250.55}},{t:this.instance_35,p:{scaleX:10.4432,scaleY:10.1364,x:-46.5,y:-395.2}}]},5).to({state:[{t:this.instance_42,p:{scaleY:10.037,skewX:20.9707,skewY:19.9281,y:255.7,x:42.75,regX:6.2,scaleX:10.6319,regY:6.7}},{t:this.instance_41,p:{skewX:73.8572,skewY:72.9859,y:246.25,scaleX:10.3984,scaleY:10.2616,x:-325.2,regX:6.8,regY:5.3}},{t:this.instance_40,p:{scaleY:10.1419,scaleX:10.4462,x:-265,y:194.2}},{t:this.instance_39,p:{scaleY:10.1465,scaleX:10.4498,y:191.85,x:-27.55}},{t:this.instance_36,p:{scaleX:10.4432,scaleY:10.1361,x:-154.55,y:250.55}},{t:this.instance_35,p:{scaleX:10.4432,scaleY:10.1361,x:-46.5,y:-395.25}}]},5).to({state:[{t:this.instance_42,p:{scaleY:10.037,skewX:20.9707,skewY:19.9281,y:255.7,x:42.75,regX:6.2,scaleX:10.6319,regY:6.7}},{t:this.instance_41,p:{skewX:73.8572,skewY:72.9859,y:246.25,scaleX:10.3984,scaleY:10.2616,x:-325.2,regX:6.8,regY:5.3}},{t:this.instance_40,p:{scaleY:10.1419,scaleX:10.4462,x:-265,y:194.2}},{t:this.instance_39,p:{scaleY:10.1465,scaleX:10.4498,y:191.85,x:-27.55}},{t:this.instance_36,p:{scaleX:10.4432,scaleY:10.1361,x:-154.55,y:250.55}},{t:this.instance_35,p:{scaleX:10.4432,scaleY:10.1361,x:-46.5,y:-395.25}}]},5).to({state:[{t:this.instance_42,p:{scaleY:10.037,skewX:20.9707,skewY:19.9281,y:255.7,x:42.75,regX:6.2,scaleX:10.6319,regY:6.7}},{t:this.instance_41,p:{skewX:73.8572,skewY:72.9859,y:246.25,scaleX:10.3984,scaleY:10.2616,x:-325.2,regX:6.8,regY:5.3}},{t:this.instance_40,p:{scaleY:10.1419,scaleX:10.4462,x:-265,y:194.2}},{t:this.instance_39,p:{scaleY:10.1465,scaleX:10.4497,y:191.85,x:-27.55}},{t:this.instance_36,p:{scaleX:10.4432,scaleY:10.1361,x:-154.55,y:250.55}},{t:this.instance_35,p:{scaleX:10.4432,scaleY:10.1361,x:-46.5,y:-395.25}}]},5).to({state:[{t:this.instance_42,p:{scaleY:10.037,skewX:20.9707,skewY:19.9281,y:255.7,x:42.75,regX:6.2,scaleX:10.6319,regY:6.7}},{t:this.instance_41,p:{skewX:73.8572,skewY:72.9859,y:246.25,scaleX:10.3984,scaleY:10.2616,x:-325.2,regX:6.8,regY:5.3}},{t:this.instance_40,p:{scaleY:10.1419,scaleX:10.4462,x:-265,y:194.2}},{t:this.instance_39,p:{scaleY:10.1465,scaleX:10.4497,y:191.85,x:-27.55}},{t:this.instance_36,p:{scaleX:10.4432,scaleY:10.1361,x:-154.55,y:250.55}},{t:this.instance_35,p:{scaleX:10.4432,scaleY:10.1361,x:-46.5,y:-395.25}}]},5).to({state:[{t:this.instance_42,p:{scaleY:10.037,skewX:20.9707,skewY:19.9281,y:255.7,x:42.75,regX:6.2,scaleX:10.6319,regY:6.7}},{t:this.instance_41,p:{skewX:73.8572,skewY:72.9859,y:246.25,scaleX:10.3984,scaleY:10.2616,x:-325.2,regX:6.8,regY:5.3}},{t:this.instance_40,p:{scaleY:10.1419,scaleX:10.4462,x:-265,y:194.2}},{t:this.instance_39,p:{scaleY:10.1465,scaleX:10.4497,y:191.85,x:-27.55}},{t:this.instance_36,p:{scaleX:10.4432,scaleY:10.1361,x:-154.55,y:250.55}},{t:this.instance_35,p:{scaleX:10.4432,scaleY:10.1361,x:-46.5,y:-395.25}}]},4).to({state:[{t:this.instance_42,p:{scaleY:10.037,skewX:20.9707,skewY:19.9281,y:218.4,x:10.1,regX:6.2,scaleX:10.6319,regY:6.7}},{t:this.instance_41,p:{skewX:73.8572,skewY:72.9859,y:246.25,scaleX:10.3984,scaleY:10.2616,x:-325.2,regX:6.8,regY:5.3}},{t:this.instance_40,p:{scaleY:10.1419,scaleX:10.4462,x:-265,y:194.2}},{t:this.instance_39,p:{scaleY:10.1465,scaleX:10.4497,y:191.85,x:-27.55}},{t:this.instance_36,p:{scaleX:10.4432,scaleY:10.1361,x:-154.55,y:250.55}},{t:this.instance_35,p:{scaleX:10.4432,scaleY:10.1361,x:-46.5,y:-395.25}}]},2).to({state:[{t:this.instance_42,p:{scaleY:10.037,skewX:20.9707,skewY:19.9281,y:218.4,x:10.1,regX:6.2,scaleX:10.6319,regY:6.7}},{t:this.instance_41,p:{skewX:73.8572,skewY:72.9859,y:246.25,scaleX:10.3984,scaleY:10.2616,x:-325.2,regX:6.8,regY:5.3}},{t:this.instance_40,p:{scaleY:10.1419,scaleX:10.4462,x:-265,y:194.2}},{t:this.instance_39,p:{scaleY:10.1465,scaleX:10.4497,y:191.85,x:-27.55}},{t:this.instance_36,p:{scaleX:10.4432,scaleY:10.1361,x:-154.55,y:250.55}},{t:this.instance_35,p:{scaleX:10.4432,scaleY:10.1361,x:-46.5,y:-395.25}}]},2).to({state:[{t:this.instance_42,p:{scaleY:10.0141,skewX:12.3131,skewY:11.6655,y:205,x:9.1,regX:6.3,scaleX:10.6546,regY:6.7}},{t:this.instance_41,p:{skewX:73.8572,skewY:72.9859,y:228.25,scaleX:10.3984,scaleY:10.2616,x:-311.05,regX:6.8,regY:5.3}},{t:this.instance_40,p:{scaleY:10.1419,scaleX:10.4462,x:-265,y:194.2}},{t:this.instance_39,p:{scaleY:10.1465,scaleX:10.4497,y:191.85,x:-27.55}},{t:this.instance_36,p:{scaleX:10.4432,scaleY:10.1361,x:-154.55,y:250.55}},{t:this.instance_35,p:{scaleX:10.4432,scaleY:10.1361,x:-46.5,y:-395.25}}]},2).to({state:[{t:this.instance_44,p:{scaleX:10.6546,scaleY:10.0141,skewX:12.3131,skewY:11.6655,x:9.1,y:205}},{t:this.instance_43,p:{scaleX:10.3984,scaleY:10.2616,skewX:73.8572,skewY:72.9859,x:-311.05,y:228.25}},{t:this.instance_40,p:{scaleY:10.1419,scaleX:10.4462,x:-265,y:194.2}},{t:this.instance_39,p:{scaleY:10.1465,scaleX:10.4497,y:191.85,x:-27.55}},{t:this.instance_36,p:{scaleX:10.4432,scaleY:10.1361,x:-154.55,y:250.55}},{t:this.instance_35,p:{scaleX:10.4432,scaleY:10.1361,x:-46.5,y:-395.25}},{t:this.instance_42,p:{scaleY:7.991,skewX:-18.4898,skewY:-17.5514,y:239.9,x:-11.5,regX:6.5,scaleX:10.0648,regY:6.9}},{t:this.instance_41,p:{skewX:97.8411,skewY:98.2842,y:260.4,scaleX:8.9196,scaleY:8.189,x:-315.45,regX:6.7,regY:6.7}}]},2).to({state:[{t:this.instance_44,p:{scaleX:10.6546,scaleY:10.0141,skewX:12.3131,skewY:11.6655,x:9.1,y:205}},{t:this.instance_43,p:{scaleX:10.3984,scaleY:10.2616,skewX:73.8572,skewY:72.9859,x:-311.05,y:228.25}},{t:this.instance_40,p:{scaleY:10.1419,scaleX:10.4462,x:-265,y:194.2}},{t:this.instance_39,p:{scaleY:10.1465,scaleX:10.4497,y:191.85,x:-27.55}},{t:this.instance_36,p:{scaleX:10.4432,scaleY:10.1361,x:-154.55,y:250.55}},{t:this.instance_35,p:{scaleX:10.4432,scaleY:10.1361,x:-46.5,y:-395.25}},{t:this.instance_42,p:{scaleY:7.991,skewX:-18.4898,skewY:-17.5514,y:242.35,x:-13.25,regX:6.5,scaleX:10.0648,regY:6.9}},{t:this.instance_41,p:{skewX:107.5908,skewY:108.5312,y:262.6,scaleX:8.9391,scaleY:8.1722,x:-300.2,regX:6.8,regY:6.7}}]},2).to({state:[{t:this.instance_44,p:{scaleX:10.6546,scaleY:10.0141,skewX:12.3131,skewY:11.6655,x:9.1,y:205}},{t:this.instance_43,p:{scaleX:10.3984,scaleY:10.2616,skewX:73.8572,skewY:72.9859,x:-311.05,y:228.25}},{t:this.instance_40,p:{scaleY:10.1419,scaleX:10.4462,x:-265,y:194.2}},{t:this.instance_39,p:{scaleY:10.1465,scaleX:10.4497,y:191.85,x:-27.55}},{t:this.instance_36,p:{scaleX:10.4432,scaleY:10.1361,x:-154.55,y:250.55}},{t:this.instance_35,p:{scaleX:10.4432,scaleY:10.1361,x:-46.5,y:-395.25}},{t:this.instance_42,p:{scaleY:7.991,skewX:-18.4898,skewY:-17.5514,y:242.35,x:-15.4,regX:6.5,scaleX:10.0648,regY:6.9}},{t:this.instance_41,p:{skewX:107.5908,skewY:108.5312,y:263.85,scaleX:8.9391,scaleY:8.1722,x:-300.7,regX:6.7,regY:6.7}}]},2).to({state:[{t:this.instance_44,p:{scaleX:10.6546,scaleY:10.0141,skewX:12.3131,skewY:11.6655,x:9.1,y:205}},{t:this.instance_43,p:{scaleX:10.3984,scaleY:10.2616,skewX:73.8572,skewY:72.9859,x:-311.05,y:228.25}},{t:this.instance_40,p:{scaleY:10.1419,scaleX:10.4462,x:-265,y:194.2}},{t:this.instance_39,p:{scaleY:10.1465,scaleX:10.4497,y:191.85,x:-27.55}},{t:this.instance_36,p:{scaleX:10.4432,scaleY:10.1361,x:-154.55,y:250.55}},{t:this.instance_35,p:{scaleX:10.4432,scaleY:10.1361,x:-46.5,y:-395.25}},{t:this.instance_42,p:{scaleY:7.991,skewX:-18.4898,skewY:-17.5514,y:242.35,x:-15.4,regX:6.5,scaleX:10.0648,regY:6.9}},{t:this.instance_41,p:{skewX:107.5908,skewY:108.5312,y:263.85,scaleX:8.9391,scaleY:8.1722,x:-300.7,regX:6.7,regY:6.7}}]},2).to({state:[{t:this.instance_44,p:{scaleX:10.6546,scaleY:10.0141,skewX:12.3131,skewY:11.6655,x:9.1,y:205}},{t:this.instance_43,p:{scaleX:10.3984,scaleY:10.2616,skewX:73.8572,skewY:72.9859,x:-311.05,y:228.25}},{t:this.instance_40,p:{scaleY:10.1419,scaleX:10.4462,x:-265,y:194.2}},{t:this.instance_39,p:{scaleY:10.1465,scaleX:10.4497,y:191.85,x:-27.55}},{t:this.instance_36,p:{scaleX:10.4432,scaleY:10.1361,x:-154.55,y:250.55}},{t:this.instance_35,p:{scaleX:10.4432,scaleY:10.1361,x:-46.5,y:-395.25}},{t:this.instance_42,p:{scaleY:7.991,skewX:-18.4898,skewY:-17.5514,y:242.35,x:-15.4,regX:6.5,scaleX:10.0648,regY:6.9}},{t:this.instance_41,p:{skewX:107.5908,skewY:108.5312,y:263.85,scaleX:8.9391,scaleY:8.1722,x:-300.7,regX:6.7,regY:6.7}}]},3).to({state:[{t:this.instance_44,p:{scaleX:10.6546,scaleY:10.0141,skewX:12.3131,skewY:11.6655,x:9.1,y:205}},{t:this.instance_43,p:{scaleX:10.3984,scaleY:10.2616,skewX:73.8572,skewY:72.9859,x:-311.05,y:228.25}},{t:this.instance_40,p:{scaleY:10.1419,scaleX:10.4462,x:-265,y:194.2}},{t:this.instance_39,p:{scaleY:10.1465,scaleX:10.4497,y:191.85,x:-27.55}},{t:this.instance_36,p:{scaleX:10.4432,scaleY:10.1361,x:-154.55,y:250.55}},{t:this.instance_35,p:{scaleX:10.4432,scaleY:10.1361,x:-46.5,y:-395.25}},{t:this.instance_42,p:{scaleY:7.991,skewX:-18.4898,skewY:-17.5514,y:242.35,x:-15.4,regX:6.5,scaleX:10.0648,regY:6.9}},{t:this.instance_41,p:{skewX:107.5908,skewY:108.5312,y:263.85,scaleX:8.9391,scaleY:8.1722,x:-300.7,regX:6.7,regY:6.7}}]},1).to({state:[{t:this.instance_44,p:{scaleX:10.6546,scaleY:10.0141,skewX:12.3131,skewY:11.6655,x:9.1,y:205}},{t:this.instance_43,p:{scaleX:10.3984,scaleY:10.2616,skewX:73.8572,skewY:72.9859,x:-311.05,y:228.25}},{t:this.instance_40,p:{scaleY:10.1419,scaleX:10.4462,x:-265,y:194.2}},{t:this.instance_39,p:{scaleY:10.1465,scaleX:10.4497,y:191.85,x:-27.55}},{t:this.instance_36,p:{scaleX:10.4432,scaleY:10.1361,x:-154.55,y:250.55}},{t:this.instance_35,p:{scaleX:10.4432,scaleY:10.1361,x:-46.5,y:-395.25}},{t:this.instance_42,p:{scaleY:7.991,skewX:-18.4898,skewY:-17.5514,y:242.35,x:-15.4,regX:6.5,scaleX:10.0648,regY:6.9}},{t:this.instance_41,p:{skewX:107.5908,skewY:108.5312,y:263.85,scaleX:8.9391,scaleY:8.1722,x:-300.7,regX:6.7,regY:6.7}}]},3).to({state:[{t:this.instance_44,p:{scaleX:10.6546,scaleY:10.0141,skewX:12.3131,skewY:11.6655,x:9.1,y:205}},{t:this.instance_43,p:{scaleX:10.3984,scaleY:10.2616,skewX:73.8572,skewY:72.9859,x:-311.05,y:228.25}},{t:this.instance_40,p:{scaleY:10.1419,scaleX:10.4462,x:-265,y:194.2}},{t:this.instance_39,p:{scaleY:10.1465,scaleX:10.4497,y:191.85,x:-27.55}},{t:this.instance_36,p:{scaleX:10.4432,scaleY:10.1361,x:-154.55,y:250.55}},{t:this.instance_35,p:{scaleX:10.4432,scaleY:10.1361,x:-46.5,y:-395.25}},{t:this.instance_42,p:{scaleY:7.991,skewX:-18.4898,skewY:-17.5514,y:242.35,x:-15.4,regX:6.5,scaleX:10.0648,regY:6.9}},{t:this.instance_41,p:{skewX:107.5908,skewY:108.5312,y:263.85,scaleX:8.9391,scaleY:8.1722,x:-300.7,regX:6.7,regY:6.7}}]},1).to({state:[{t:this.instance_44,p:{scaleX:3.1104,scaleY:2.9233,skewX:12.3134,skewY:11.6644,x:83.5,y:354.45}},{t:this.instance_43,p:{scaleX:3.0354,scaleY:2.9957,skewX:73.8583,skewY:72.9852,x:-9.9,y:361.2}},{t:this.instance_40,p:{scaleY:2.9606,scaleX:3.0496,x:3.25,y:351.25}},{t:this.instance_39,p:{scaleY:2.9619,scaleX:3.0506,y:350.6,x:72.85}},{t:this.instance_36,p:{scaleX:3.0487,scaleY:2.9589,x:35.8,y:367.7}},{t:this.instance_35,p:{scaleX:3.0487,scaleY:2.9589,x:67.3,y:179.15}},{t:this.instance_42,p:{scaleY:2.3327,skewX:-18.4905,skewY:-17.5505,y:365.3,x:76.35,regX:6.5,scaleX:2.9382,regY:6.9}},{t:this.instance_41,p:{skewX:107.5899,skewY:108.5316,y:371.55,scaleX:2.6095,scaleY:2.3857,x:-7.1,regX:6.7,regY:6.8}}]},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-582.2,-943.6,1071.4,1733.8000000000002);


(lib.wheelbarrow_Dropstones_man = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_13 = function() {
		this.stop();
		
		this.dispatchEvent("complete")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(1));

	// hat
	this.hat = new lib.hat();
	this.hat.name = "hat";
	this.hat.setTransform(146.4,-81.6,1.5227,1.5227,0,0,0,62,23);

	this.timeline.addTween(cjs.Tween.get(this.hat).wait(14));

	// head
	this.instance = new lib.mouth_man_smiling();
	this.instance.setTransform(131.65,-31.75,1,1,0,0,0,11,5);

	this.instance_1 = new lib.man_face();
	this.instance_1.setTransform(158.55,-39.6,1.5227,1.5227,0,0,0,44.4,37.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},4).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).wait(3));

	// hand_right
	this.rightHand = new lib.rightHand();
	this.rightHand.name = "rightHand";
	this.rightHand.setTransform(138.2,26.1,1.5226,1.5226,0,0,0,17.6,11.9);

	this.timeline.addTween(cjs.Tween.get(this.rightHand).wait(1).to({rotation:14.9987,x:135.2,y:23.15},0).wait(1).to({regX:17.7,regY:11.8,x:135.4,y:23},0).wait(1).to({rotation:14.9985,x:134.4,y:17.05},0).wait(1).to({regX:17.8,scaleX:1.6169,scaleY:1.6169,rotation:20.4908,x:131.1,y:16.3},0).wait(4).to({regX:17.7,scaleX:1.5225,scaleY:1.5225,rotation:14.6691,x:135,y:19.8},0).wait(1).to({rotation:0.7149,x:138.05,y:24.35},0).wait(1).to({rotation:0.7149},0).wait(4));

	// body
	this.body = new lib.body();
	this.body.name = "body";
	this.body.setTransform(148.35,26.75,1.5227,1.5227,0,0,0,16,25.2);

	this.timeline.addTween(cjs.Tween.get(this.body).wait(14));

	// frame
	this.instance_2 = new lib.CachedBmp_769();
	this.instance_2.setTransform(3,30.15,0.3273,0.3273);

	this.frame = new lib.frame();
	this.frame.name = "frame";
	this.frame.setTransform(61.3,60,0.6888,0.7158,-4.7361,0,0,88.2,43.9);
	this.frame._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.frame}]},1).to({state:[{t:this.frame}]},1).to({state:[{t:this.frame}]},1).to({state:[{t:this.frame}]},1).to({state:[{t:this.frame}]},1).to({state:[{t:this.frame}]},1).to({state:[{t:this.frame}]},1).to({state:[{t:this.frame}]},1).to({state:[{t:this.frame}]},1).to({state:[{t:this.frame}]},1).to({state:[{t:this.frame}]},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.frame).wait(1).to({_off:false},0).wait(1).to({scaleY:0.7157,rotation:-9.6923,x:61.85,y:59.95},0).wait(1).to({rotation:-13.9023,x:60.45,y:59.75},0).wait(1).to({regY:44,rotation:-18.6092,x:58.55,y:59.55},0).wait(4).to({regY:43.9,rotation:-8.4074,y:59.45},0).wait(1).to({regY:44,scaleY:0.7158,rotation:0,x:60.65,y:60.1},0).wait(5));

	// wheel
	this.instance_3 = new lib.CachedBmp_770();
	this.instance_3.setTransform(86.6,30.15,0.3273,0.3273);

	this.spinningWheel = new lib.StaticWheel();
	this.spinningWheel.name = "spinningWheel";
	this.spinningWheel.setTransform(20.3,74.95,0.6106,0.6344,0,0,0,24.6,24.7);

	this.wheel = new lib.wheel();
	this.wheel.name = "wheel";
	this.wheel.setTransform(22.3,78.25,0.6106,0.6345,-4.7361,0,0,24.6,24.8);
	this.wheel._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.spinningWheel},{t:this.instance_3}]}).to({state:[{t:this.wheel}]},1).to({state:[{t:this.wheel}]},1).to({state:[{t:this.wheel}]},1).to({state:[{t:this.wheel}]},1).to({state:[{t:this.wheel}]},1).to({state:[{t:this.wheel}]},1).to({state:[{t:this.wheel}]},1).to({state:[{t:this.wheel}]},1).to({state:[{t:this.wheel}]},1).to({state:[{t:this.wheel}]},1).to({state:[{t:this.wheel}]},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.wheel).wait(1).to({_off:false},0).wait(1).to({regY:24.7,scaleY:0.6344,rotation:-9.6923,x:24.55,y:81.45},0).wait(1).to({regX:24.7,rotation:-13.9015,x:24.9,y:83.95},0).wait(1).to({scaleX:0.6105,rotation:-18.6093,x:25.1,y:86.45},0).wait(4).to({rotation:-8.4074,x:20.85,y:80.1},0).wait(1).to({regX:24.6,scaleX:0.6106,rotation:0,x:20.3,y:74.95},0).wait(5));

	// crate
	this.crate = new lib.crate();
	this.crate.name = "crate";
	this.crate.setTransform(45.25,47.5,0.6888,0.7158,0,0,0,61.4,25.9);

	this.timeline.addTween(cjs.Tween.get(this.crate).wait(1).to({regX:61.2,rotation:-4.7361,x:44.8,y:48.75},0).wait(1).to({regY:25.8,scaleY:0.7157,rotation:-9.6923,x:44.4,y:50.15},0).wait(1).to({rotation:-13.9023,x:42.4,y:51.2},0).wait(1).to({rotation:-18.6092,x:39.85,y:52.5},0).wait(4).to({regY:25.9,rotation:-8.4074,x:41.4,y:49.35},0).wait(1).to({regX:61.4,scaleY:0.7158,rotation:0,x:45.25,y:47.5},0).wait(5));

	// stones
	this.instance_4 = new lib.smal_pile_stones();
	this.instance_4.setTransform(65,22.85,0.7175,0.7175,-8.2909,0,0,87.9,25.2);

	this.instance_5 = new lib.stone_3();
	this.instance_5.setTransform(-3.85,64.7,0.3513,0.3513,-90,0,0,10,6.1);

	this.instance_6 = new lib.stone_5();
	this.instance_6.setTransform(-47.5,75.85,0.3949,0.5306,0,105.2975,-74.7045,5.4,4.2);

	this.instance_7 = new lib.stone_5();
	this.instance_7.setTransform(-51.8,64.35,0.3949,0.5306,0,105.2975,-74.7045,5.4,4.2);

	this.instance_8 = new lib.stone_6();
	this.instance_8.setTransform(-15.3,90.6,0.3147,0.3147,0,57.5582,-122.4418,-87.4,-38.8);

	this.instance_9 = new lib.stone_1();
	this.instance_9.setTransform(-39.95,70.85,0.2338,0.2338,0,-59.7,120.3,17.1,12.7);

	this.instance_10 = new lib.stone_4();
	this.instance_10.setTransform(-37.2,55.65,0.4709,0.4709,120.0014,0,0,11.7,5.8);

	this.instance_11 = new lib.stone_5();
	this.instance_11.setTransform(-40.35,63.7,0.6193,0.6193,-59.9993,0,0,23.2,-4.6);

	this.instance_12 = new lib.stone_4();
	this.instance_12.setTransform(-47.6,66.2,0.3492,0.3492,-59.998,0,0,10.9,6);

	this.instance_13 = new lib.stone_4();
	this.instance_13.setTransform(-35.45,66.25,0.6193,0.6193,-59.9993,0,0,11.6,6);

	this.instance_14 = new lib.stone_5();
	this.instance_14.setTransform(-44.8,69.65,0.6193,0.6193,-59.9993,0,0,6,4.2);

	this.instance_15 = new lib.stone_5();
	this.instance_15.setTransform(-41.05,48.3,0.6193,0.6193,-59.9993,0,0,6,4.3);

	this.instance_16 = new lib.stone_6();
	this.instance_16.setTransform(-35.05,50.2,0.6193,0.6193,-14.998,0,0,4.7,6.1);

	this.instance_17 = new lib.stone_6();
	this.instance_17.setTransform(-44.85,60.9,0.6193,0.6193,-14.998,0,0,4.6,6.2);

	this.instance_18 = new lib.stone_3();
	this.instance_18.setTransform(-35.25,55,0.2175,0.2175,-75.2951,0,0,19.2,-1);

	this.instance_19 = new lib.stone_5();
	this.instance_19.setTransform(-42.65,56.95,0.3949,0.5307,-60.2976,0,0,5.5,4.2);

	this.instance_20 = new lib.stone_5();
	this.instance_20.setTransform(-47.45,53.75,0.6055,0.6055,-75.297,0,0,5.6,4.2);

	this.instance_21 = new lib.stone_3();
	this.instance_21.setTransform(-54.95,76.05,0.3513,0.3513,0,165.2925,-14.7075,10,6);

	this.instance_22 = new lib.stone_5();
	this.instance_22.setTransform(-41.9,83.4,0.6376,0.8568,0,120.2972,-59.7034,5.5,4.2);

	this.instance_23 = new lib.stone_7();
	this.instance_23.setTransform(-65.9,67.75,0.5803,0.5803,0,10.5512,-169.4488,35.8,5.7);

	this.instance_24 = new lib.stone_6();
	this.instance_24.setTransform(-10.25,113.45,0.5081,0.5081,0,72.5542,-107.4458,-87.3,-38.9);

	this.instance_25 = new lib.stone_6();
	this.instance_25.setTransform(-57.85,71.05,0.5082,0.5082,0,75.2928,-104.7072,3.7,3.2);

	this.instance_26 = new lib.stone_5();
	this.instance_26.setTransform(-43.75,63.7,0.6376,0.8568,0,120.2972,-59.7034,5.5,4.2);

	this.instance_27 = new lib.stone_6();
	this.instance_27.setTransform(2.2,119.8,0.5081,0.5081,0,72.5542,-107.4458,-87.2,-39);

	this.instance_28 = new lib.stone_5();
	this.instance_28.setTransform(-54.1,85.55,0.9777,0.9777,0,150.2962,-29.7038,5.7,4.1);

	this.instance_29 = new lib.stone_1();
	this.instance_29.setTransform(-28.05,78.65,0.3775,0.3775,0,-44.702,135.298,16.7,12.3);

	this.instance_30 = new lib.stone_4();
	this.instance_30.setTransform(-17.4,56.2,0.7603,0.7603,135,0,0,11.7,5.9);

	this.instance_31 = new lib.stone_5();
	this.instance_31.setTransform(-25.5,67.35,1,1,-45,0,0,23.4,-4.5);

	this.instance_32 = new lib.stone_3();
	this.instance_32.setTransform(-8.6,45.55,0.4227,0.4227,120.0004,0,0,9.7,6);

	this.instance_33 = new lib.stone_3();
	this.instance_33.setTransform(-1.65,43.8,0.4227,0.4227,120.0004,0,0,9.7,6);

	this.instance_34 = new lib.stone_4();
	this.instance_34.setTransform(-37.9,68.25,0.5639,0.5639,-45,0,0,11.2,6);

	this.instance_35 = new lib.stone_4();
	this.instance_35.setTransform(-19.05,73.45,1,1,-45,0,0,11.6,6);

	this.instance_36 = new lib.stone_5();
	this.instance_36.setTransform(-35.05,74.95,1,1,-45,0,0,6,4.3);

	this.instance_37 = new lib.stone_5();
	this.instance_37.setTransform(-20.35,43.15,1,1,-45,0,0,6,4.3);

	this.instance_38 = new lib.stone_6();
	this.instance_38.setTransform(-11.7,48.55,1,1,0,0,0,4.8,6);

	this.instance_39 = new lib.stone_6();
	this.instance_39.setTransform(-31.4,61.1,1,1,0,0,0,4.8,6);

	this.instance_40 = new lib.stone_3();
	this.instance_40.setTransform(-14.05,56,0.3513,0.3513,-60.2946,0,0,19.4,-1.1);

	this.instance_41 = new lib.stone_3();
	this.instance_41.setTransform(-36.15,113.2,0.3513,0.3513,-105.2894,0,0,10.1,5.7);

	this.instance_42 = new lib.stone_3();
	this.instance_42.setTransform(-25.1,65.95,0.5679,0.8349,97.2513,0,0,9.8,6.2);

	this.instance_43 = new lib.stone_7();
	this.instance_43.setTransform(-27.3,90.05,0.5803,0.5803,-121.0816,0,0,35.9,5.8);

	this.instance_44 = new lib.stone_7();
	this.instance_44.setTransform(-68.7,141.3,0.5803,0.5803,0,-4.4474,175.5526,35.8,5.8);

	this.instance_45 = new lib.stone_6();
	this.instance_45.setTransform(10.5,173.95,0.5081,0.5081,0,57.5545,-122.4455,-87.2,-39);

	this.instance_46 = new lib.stone_6();
	this.instance_46.setTransform(-21.25,108.8,1,1,-14.9983,0,0,4.8,6.1);

	this.instance_47 = new lib.stone_6();
	this.instance_47.setTransform(-37.05,126,1,1,-14.9983,0,0,4.8,6.1);

	this.instance_48 = new lib.stone_3();
	this.instance_48.setTransform(-29.75,129,0.5679,0.8348,82.252,0,0,9.8,6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4},{t:this.instance_5,p:{regX:10,regY:6.1,rotation:-90,x:-3.85,y:64.7,scaleX:0.3513,scaleY:0.3513,alpha:1}}]},1).to({state:[{t:this.instance_4},{t:this.instance_5,p:{regX:10.1,regY:5.9,rotation:-90.2912,x:-21.25,y:85.3,scaleX:0.3513,scaleY:0.3513,alpha:1}}]},1).to({state:[{t:this.instance_42,p:{scaleY:0.8349,rotation:97.2513,x:-25.1,y:65.95,regX:9.8,regY:6.2,scaleX:0.5679,alpha:1}},{t:this.instance_41,p:{rotation:-105.2894,x:-36.15,y:113.2,regX:10.1,regY:5.7,alpha:1}},{t:this.instance_40,p:{regX:19.4,rotation:-60.2946,x:-14.05,y:56,regY:-1.1,scaleX:0.3513,scaleY:0.3513,alpha:1}},{t:this.instance_39,p:{regY:6,rotation:0,x:-31.4,y:61.1,regX:4.8,scaleX:1,scaleY:1,skewX:0,skewY:0,alpha:1}},{t:this.instance_38,p:{regY:6,rotation:0,x:-11.7,y:48.55,regX:4.8,scaleX:1,scaleY:1,skewX:0,skewY:0,alpha:1}},{t:this.instance_37,p:{rotation:-45,x:-20.35,y:43.15,regY:4.3,alpha:1}},{t:this.instance_36,p:{regY:4.3,rotation:-45,x:-35.05,y:74.95,alpha:1}},{t:this.instance_35,p:{regX:11.6,regY:6,rotation:-45,x:-19.05,y:73.45}},{t:this.instance_34,p:{regX:11.2,rotation:-45,x:-37.9,y:68.25,regY:6,scaleX:0.5639,scaleY:0.5639,alpha:1}},{t:this.instance_33,p:{regX:9.7,regY:6,rotation:120.0004,x:-1.65,y:43.8,alpha:1}},{t:this.instance_32,p:{rotation:120.0004,x:-8.6,y:45.55,regX:9.7,scaleX:0.4227,scaleY:0.4227,skewX:0,skewY:0,alpha:1}},{t:this.instance_31,p:{regX:23.4,rotation:-45,x:-25.5,y:67.35,alpha:1}},{t:this.instance_30,p:{rotation:135,x:-17.4,y:56.2,regX:11.7,scaleX:0.7603,scaleY:0.7603,alpha:1}},{t:this.instance_29,p:{regX:16.7,regY:12.3,skewX:-44.702,skewY:135.298,x:-28.05,y:78.65,alpha:1}},{t:this.instance_28,p:{skewX:150.2962,skewY:-29.7038,x:-54.1,y:85.55,regY:4.1,alpha:1}},{t:this.instance_27,p:{skewX:72.5542,skewY:-107.4458,x:2.2,y:119.8,regX:-87.2,regY:-39,scaleX:0.5081,scaleY:0.5081,rotation:0,alpha:1}},{t:this.instance_26,p:{skewX:120.2972,skewY:-59.7034,x:-43.75,y:63.7,regX:5.5,alpha:1}},{t:this.instance_25,p:{regY:3.2,skewX:75.2928,skewY:-104.7072,x:-57.85,y:71.05,regX:3.7,scaleX:0.5082,scaleY:0.5082,rotation:0,alpha:1}},{t:this.instance_24,p:{regX:-87.3,regY:-38.9,skewX:72.5542,skewY:-107.4458,x:-10.25,y:113.45,scaleX:0.5081,scaleY:0.5081,alpha:1}},{t:this.instance_23,p:{regY:5.7,skewX:10.5512,skewY:-169.4488,x:-65.9,y:67.75,regX:35.8,rotation:0,alpha:1}},{t:this.instance_22,p:{skewX:120.2972,skewY:-59.7034,x:-41.9,y:83.4,regX:5.5,alpha:1}},{t:this.instance_21,p:{regX:10,skewX:165.2925,skewY:-14.7075,x:-54.95,y:76.05,regY:6,scaleX:0.3513,scaleY:0.3513,rotation:0,alpha:1}},{t:this.instance_20,p:{regY:4.2,rotation:-75.297,x:-47.45,y:53.75,regX:5.6,alpha:1}},{t:this.instance_19,p:{regY:4.2,rotation:-60.2976,x:-42.65,y:56.95,regX:5.5,alpha:1}},{t:this.instance_18,p:{regX:19.2,regY:-1,rotation:-75.2951,x:-35.25,y:55,scaleX:0.2175,scaleY:0.2175,alpha:1}},{t:this.instance_17,p:{regY:6.2,rotation:-14.998,x:-44.85,y:60.9,regX:4.6,scaleX:0.6193,scaleY:0.6193,alpha:1}},{t:this.instance_16,p:{regX:4.7,regY:6.1,rotation:-14.998,x:-35.05,y:50.2,scaleX:0.6193,scaleY:0.6193,alpha:1}},{t:this.instance_15,p:{regX:6,regY:4.3,rotation:-59.9993,x:-41.05,y:48.3,alpha:1}},{t:this.instance_14,p:{regX:6,rotation:-59.9993,x:-44.8,y:69.65,regY:4.2,alpha:1}},{t:this.instance_13,p:{regX:11.6,regY:6,rotation:-59.9993,x:-35.45,y:66.25,scaleX:0.6193,scaleY:0.6193,alpha:1}},{t:this.instance_12,p:{regX:10.9,regY:6,rotation:-59.998,x:-47.6,y:66.2,alpha:1}},{t:this.instance_5,p:{regX:9.8,regY:5.9,rotation:105.0018,x:-33.7,y:47.9,scaleX:0.2618,scaleY:0.2618,alpha:1}},{t:this.instance_11,p:{regY:-4.6,rotation:-59.9993,x:-40.35,y:63.7,regX:23.2,alpha:1}},{t:this.instance_10,p:{regX:11.7,regY:5.8,scaleX:0.4709,scaleY:0.4709,rotation:120.0014,x:-37.2,y:55.65,alpha:1}},{t:this.instance_9,p:{regX:17.1,regY:12.7,skewX:-59.7,skewY:120.3,x:-39.95,y:70.85,alpha:1}},{t:this.instance_8,p:{regX:-87.4,regY:-38.8,skewX:57.5582,skewY:-122.4418,x:-15.3,y:90.6,scaleX:0.3147,scaleY:0.3147,rotation:0,alpha:1}},{t:this.instance_7,p:{regY:4.2,scaleY:0.5306,skewX:105.2975,skewY:-74.7045,x:-51.8,y:64.35,regX:5.4,alpha:1}},{t:this.instance_6,p:{scaleY:0.5306,skewX:105.2975,skewY:-74.7045,x:-47.5,y:75.85,regX:5.4,regY:4.2,alpha:1}}]},1).to({state:[{t:this.instance_42,p:{scaleY:0.8348,rotation:82.252,x:-29.75,y:87.5,regX:9.8,regY:6.2,scaleX:0.5679,alpha:1}},{t:this.instance_41,p:{rotation:-120.2872,x:-28.2,y:136,regX:10.1,regY:5.7,alpha:1}},{t:this.instance_40,p:{regX:19.3,rotation:-75.2949,x:-21.65,y:75.05,regY:-1.1,scaleX:0.3513,scaleY:0.3513,alpha:1}},{t:this.instance_39,p:{regY:6.1,rotation:-14.9983,x:-37.05,y:84.5,regX:4.8,scaleX:1,scaleY:1,skewX:0,skewY:0,alpha:1}},{t:this.instance_38,p:{regY:6.1,rotation:-14.9983,x:-21.25,y:67.3,regX:4.8,scaleX:1,scaleY:1,skewX:0,skewY:0,alpha:1}},{t:this.instance_37,p:{rotation:-59.9992,x:-31.1,y:64.2,regY:4.3,alpha:1}},{t:this.instance_36,p:{regY:4.2,rotation:-59.9992,x:-37.1,y:98.7,alpha:1}},{t:this.instance_35,p:{regX:11.5,regY:5.9,rotation:-59.9992,x:-22.1,y:93.2}},{t:this.instance_34,p:{regX:11.1,rotation:-60.0005,x:-41.5,y:93.05,regY:6,scaleX:0.5639,scaleY:0.5639,alpha:1}},{t:this.instance_33,p:{regX:9.8,regY:6.2,rotation:105.0014,x:-12.9,y:60,alpha:1}},{t:this.instance_32,p:{rotation:104.9999,x:-19.1,y:63.5,regX:9.7,scaleX:0.4227,scaleY:0.4227,skewX:0,skewY:0,alpha:1}},{t:this.instance_31,p:{regX:23.3,rotation:-59.9992,x:-29.8,y:89,alpha:1}},{t:this.instance_30,p:{rotation:120.0013,x:-24.85,y:76,regX:11.7,scaleX:0.7603,scaleY:0.7603,alpha:1}},{t:this.instance_29,p:{regX:16.8,regY:12.2,skewX:-59.7019,skewY:120.2981,x:-29.3,y:100.5,alpha:1}},{t:this.instance_28,p:{skewX:135.2966,skewY:-44.7034,x:-52.7,y:113.95,regY:4.1,alpha:1}},{t:this.instance_27,p:{skewX:57.5545,skewY:-122.4455,x:10.5,y:132.45,regX:-87.2,regY:-39,scaleX:0.5081,scaleY:0.5081,rotation:0,alpha:1}},{t:this.instance_26,p:{skewX:105.298,skewY:-74.7025,x:-48.3,y:90.1,regX:5.5,alpha:1}},{t:this.instance_25,p:{regY:3.3,skewX:60.2942,skewY:-119.7058,x:-60.1,y:100.9,regX:3.7,scaleX:0.5082,scaleY:0.5082,rotation:0,alpha:1}},{t:this.instance_24,p:{regX:-87.4,regY:-38.8,skewX:57.5545,skewY:-122.4455,x:-3.1,y:129.6,scaleX:0.5081,scaleY:0.5081,alpha:1}},{t:this.instance_23,p:{regY:5.8,skewX:-4.4474,skewY:175.5526,x:-68.7,y:99.8,regX:35.8,rotation:0,alpha:1}},{t:this.instance_22,p:{skewX:105.298,skewY:-74.7025,x:-41.4,y:108.65,regX:5.5,alpha:1}},{t:this.instance_21,p:{regX:9.8,skewX:150.2946,skewY:-29.7054,x:-56,y:105,regY:6,scaleX:0.3513,scaleY:0.3513,rotation:0,alpha:1}},{t:this.instance_20,p:{regY:4.1,rotation:-90.296,x:-54.5,y:81.5,regX:5.6,alpha:1}},{t:this.instance_19,p:{regY:4.1,rotation:-75.2969,x:-49.1,y:83.35,regX:5.5,alpha:1}},{t:this.instance_18,p:{regX:19.1,regY:-1.1,rotation:-90.2934,x:-42.4,y:79.55,scaleX:0.2175,scaleY:0.2175,alpha:1}},{t:this.instance_17,p:{regY:6.1,rotation:-29.9988,x:-50.15,y:87.7,regX:4.6,scaleX:0.6193,scaleY:0.6193,alpha:1}},{t:this.instance_16,p:{regX:4.5,regY:6.2,rotation:-29.9988,x:-43.55,y:74.95,scaleX:0.6193,scaleY:0.6193,alpha:1}},{t:this.instance_15,p:{regX:5.9,regY:4.2,rotation:-74.9982,x:-49.8,y:74.5,alpha:1}},{t:this.instance_14,p:{regX:5.9,rotation:-74.9982,x:-47.85,y:96.15,regY:4.2,alpha:1}},{t:this.instance_13,p:{regX:11.5,regY:5.9,rotation:-74.9982,x:-39.7,y:90.45,scaleX:0.6193,scaleY:0.6193,alpha:1}},{t:this.instance_12,p:{regX:10.8,regY:5.9,rotation:-74.9989,x:-51.4,y:93.55,alpha:1}},{t:this.instance_5,p:{regX:9.8,regY:5.9,rotation:90,x:-42.75,y:72.25,scaleX:0.2618,scaleY:0.2618,alpha:1}},{t:this.instance_11,p:{regY:-4.7,rotation:-74.9982,x:-45.15,y:89.2,regX:23.2,alpha:1}},{t:this.instance_10,p:{regX:11.8,regY:5.9,scaleX:0.4708,scaleY:0.4708,rotation:105.0009,x:-44.2,y:80.7,alpha:1}},{t:this.instance_9,p:{regX:17.4,regY:12.8,skewX:-74.7013,skewY:105.2987,x:-42.8,y:96.1,alpha:1}},{t:this.instance_8,p:{regX:-87.2,regY:-38.7,skewX:42.5574,skewY:-137.4426,x:-13.95,y:108.75,scaleX:0.3147,scaleY:0.3147,rotation:0,alpha:1}},{t:this.instance_7,p:{regY:4.4,scaleY:0.5307,skewX:90.2966,skewY:-89.7055,x:-56.05,y:92.85,regX:5.4,alpha:1}},{t:this.instance_6,p:{scaleY:0.5307,skewX:90.2966,skewY:-89.7055,x:-48.85,y:102.85,regX:5.4,regY:4.2,alpha:1}}]},1).to({state:[{t:this.instance_48,p:{regY:6.2,rotation:82.252,x:-29.75,y:129,alpha:1}},{t:this.instance_42,p:{scaleY:0.3513,rotation:-120.2872,x:-28.2,y:177.5,regX:10.1,regY:5.7,scaleX:0.3513,alpha:1}},{t:this.instance_41,p:{rotation:-75.2949,x:-21.65,y:116.55,regX:19.3,regY:-1.1,alpha:1}},{t:this.instance_47,p:{regX:4.8,regY:6.1,rotation:-14.9983,x:-37.05,y:126,alpha:1}},{t:this.instance_46,p:{regX:4.8,regY:6.1,rotation:-14.9983,x:-21.25,y:108.8,alpha:1}},{t:this.instance_37,p:{rotation:-59.9992,x:-31.1,y:105.7,regY:4.3,alpha:1}},{t:this.instance_36,p:{regY:4.2,rotation:-59.9992,x:-37.1,y:140.2,alpha:1}},{t:this.instance_35,p:{regX:11.5,regY:5.9,rotation:-59.9992,x:-22.1,y:134.7}},{t:this.instance_34,p:{regX:11.1,rotation:-60.0005,x:-41.5,y:134.55,regY:6,scaleX:0.5639,scaleY:0.5639,alpha:1}},{t:this.instance_40,p:{regX:9.8,rotation:105.0014,x:-12.9,y:101.5,regY:6.2,scaleX:0.4227,scaleY:0.4227,alpha:1}},{t:this.instance_33,p:{regX:9.7,regY:6,rotation:104.9999,x:-19.1,y:105,alpha:1}},{t:this.instance_31,p:{regX:23.3,rotation:-59.9992,x:-29.8,y:130.5,alpha:1}},{t:this.instance_30,p:{rotation:120.0013,x:-24.85,y:117.5,regX:11.7,scaleX:0.7603,scaleY:0.7603,alpha:1}},{t:this.instance_29,p:{regX:16.8,regY:12.2,skewX:-59.7019,skewY:120.2981,x:-29.3,y:142,alpha:1}},{t:this.instance_28,p:{skewX:135.2966,skewY:-44.7034,x:-52.7,y:155.45,regY:4.1,alpha:1}},{t:this.instance_45,p:{regY:-39,skewX:57.5545,skewY:-122.4455,x:10.5,y:173.95,alpha:1}},{t:this.instance_26,p:{skewX:105.298,skewY:-74.7025,x:-48.3,y:131.6,regX:5.5,alpha:1}},{t:this.instance_39,p:{regY:3.3,rotation:0,x:-60.1,y:142.4,regX:3.7,scaleX:0.5082,scaleY:0.5082,skewX:60.2942,skewY:-119.7058,alpha:1}},{t:this.instance_38,p:{regY:-38.8,rotation:0,x:-3.1,y:171.1,regX:-87.4,scaleX:0.5081,scaleY:0.5081,skewX:57.5545,skewY:-122.4455,alpha:1}},{t:this.instance_44,p:{regX:35.8,regY:5.8,skewX:-4.4474,skewY:175.5526,x:-68.7,y:141.3,alpha:1}},{t:this.instance_22,p:{skewX:105.298,skewY:-74.7025,x:-41.4,y:150.15,regX:5.5,alpha:1}},{t:this.instance_32,p:{rotation:0,x:-56,y:146.5,regX:9.8,scaleX:0.3513,scaleY:0.3513,skewX:150.2946,skewY:-29.7054,alpha:1}},{t:this.instance_20,p:{regY:4.1,rotation:-90.296,x:-54.5,y:123,regX:5.6,alpha:1}},{t:this.instance_19,p:{regY:4.1,rotation:-75.2969,x:-49.1,y:124.85,regX:5.5,alpha:1}},{t:this.instance_21,p:{regX:19.1,skewX:0,skewY:0,x:-42.4,y:121.05,regY:-1.1,scaleX:0.2175,scaleY:0.2175,rotation:-90.2934,alpha:1}},{t:this.instance_27,p:{skewX:0,skewY:0,x:-50.15,y:129.2,regX:4.6,regY:6.1,scaleX:0.6193,scaleY:0.6193,rotation:-29.9988,alpha:1}},{t:this.instance_25,p:{regY:6.2,skewX:0,skewY:0,x:-43.55,y:116.45,regX:4.5,scaleX:0.6193,scaleY:0.6193,rotation:-29.9988,alpha:1}},{t:this.instance_15,p:{regX:5.9,regY:4.2,rotation:-74.9982,x:-49.8,y:116,alpha:1}},{t:this.instance_14,p:{regX:5.9,rotation:-74.9982,x:-47.85,y:137.65,regY:4.2,alpha:1}},{t:this.instance_13,p:{regX:11.5,regY:5.9,rotation:-74.9982,x:-39.7,y:131.95,scaleX:0.6193,scaleY:0.6193,alpha:1}},{t:this.instance_12,p:{regX:10.8,regY:5.9,rotation:-74.9989,x:-51.4,y:135.05,alpha:1}},{t:this.instance_18,p:{regX:9.8,regY:5.9,rotation:90,x:-42.75,y:113.75,scaleX:0.2618,scaleY:0.2618,alpha:1}},{t:this.instance_11,p:{regY:-4.7,rotation:-74.9982,x:-45.15,y:130.7,regX:23.2,alpha:1}},{t:this.instance_10,p:{regX:11.8,regY:5.9,scaleX:0.4708,scaleY:0.4708,rotation:105.0009,x:-44.2,y:122.2,alpha:1}},{t:this.instance_9,p:{regX:17.4,regY:12.8,skewX:-74.7013,skewY:105.2987,x:-42.8,y:137.6,alpha:1}},{t:this.instance_24,p:{regX:-87.2,regY:-38.7,skewX:42.5574,skewY:-137.4426,x:-13.95,y:150.25,scaleX:0.3147,scaleY:0.3147,alpha:1}},{t:this.instance_7,p:{regY:4.4,scaleY:0.5307,skewX:90.2966,skewY:-89.7055,x:-56.05,y:134.35,regX:5.4,alpha:1}},{t:this.instance_6,p:{scaleY:0.5307,skewX:90.2966,skewY:-89.7055,x:-48.85,y:144.35,regX:5.4,regY:4.2,alpha:1}},{t:this.instance_17,p:{regY:3.1,rotation:174.1829,x:-8.6,y:85.6,regX:3.8,scaleX:0.5081,scaleY:0.5081,alpha:1}},{t:this.instance_16,p:{regX:3.9,regY:3.1,rotation:174.1854,x:-14.1,y:81.6,scaleX:0.2032,scaleY:0.2032,alpha:1}},{t:this.instance_8,p:{regX:3.7,regY:3.2,skewX:0,skewY:0,x:-20.15,y:98.65,scaleX:0.5081,scaleY:0.5081,rotation:174.1829,alpha:1}},{t:this.instance_43,p:{regX:35.9,rotation:-121.0816,x:-27.3,y:90.05,alpha:1}},{t:this.instance_23,p:{regY:5.6,skewX:0,skewY:0,x:-22,y:74.45,regX:35.9,rotation:-121.0816,alpha:1}},{t:this.instance_5,p:{regX:10.1,regY:5.7,rotation:74.7117,x:-22.7,y:97.05,scaleX:0.3513,scaleY:0.3513,alpha:1}}]},1).to({state:[{t:this.instance_48,p:{regY:6.3,rotation:52.2529,x:-21.05,y:150.2,alpha:1}},{t:this.instance_42,p:{scaleY:0.3513,rotation:-135.2886,x:-18.85,y:196.55,regX:10,regY:5.6,scaleX:0.3513,alpha:1}},{t:this.instance_41,p:{rotation:-90.2937,x:-28.3,y:136,regX:19.2,regY:-1.2,alpha:1}},{t:this.instance_47,p:{regX:4.7,regY:6,rotation:-29.9984,x:-40.9,y:149.05,alpha:1}},{t:this.instance_46,p:{regX:4.7,regY:6.2,rotation:-29.9984,x:-30,y:128.5,alpha:1}},{t:this.instance_37,p:{rotation:-74.9976,x:-42,y:121.2,regY:4.2,alpha:1}},{t:this.instance_36,p:{regY:4.2,rotation:-74.9985,x:-37.1,y:162.8,alpha:1}},{t:this.instance_34,p:{regX:11.5,rotation:-59.9988,x:-15.9,y:164.45,regY:5.9,scaleX:0.9999,scaleY:1,alpha:1}},{t:this.instance_30,p:{rotation:-74.9995,x:-42.9,y:158.4,regX:11.2,scaleX:0.5638,scaleY:0.5638,alpha:1}},{t:this.instance_40,p:{regX:9.8,rotation:90.0021,x:-17.8,y:117.6,regY:6.2,scaleX:0.4227,scaleY:0.4227,alpha:1}},{t:this.instance_33,p:{regX:9.7,regY:6,rotation:90,x:-28.85,y:124.15,alpha:1}},{t:this.instance_31,p:{regX:23.2,rotation:-74.9985,x:-30.9,y:158.1,alpha:1}},{t:this.instance_13,p:{regX:11.8,regY:5.9,rotation:105.0005,x:-32.65,y:137.2,scaleX:0.7603,scaleY:0.7603,alpha:1}},{t:this.instance_29,p:{regX:16.9,regY:12.2,skewX:-74.701,skewY:105.299,x:-26.95,y:165.6,alpha:1}},{t:this.instance_28,p:{skewX:120.2981,skewY:-59.7019,x:-48.3,y:181.55,regY:4.2,alpha:1}},{t:this.instance_45,p:{regY:-38.9,skewX:42.5538,skewY:-137.4462,x:18.75,y:187.6,alpha:1}},{t:this.instance_26,p:{skewX:90.298,skewY:-89.7011,x:-52.1,y:161.35,regX:5.4,alpha:1}},{t:this.instance_39,p:{regY:3.5,rotation:0,x:-58.5,y:173.95,regX:3.8,scaleX:0.5081,scaleY:0.5081,skewX:45.2944,skewY:-134.7056,alpha:1}},{t:this.instance_38,p:{regY:-38.8,rotation:0,x:3.7,y:183.9,regX:-87.4,scaleX:0.5081,scaleY:0.5081,skewX:42.5538,skewY:-137.4462,alpha:1}},{t:this.instance_44,p:{regX:35.9,regY:5.7,skewX:-19.445,skewY:160.555,x:-78,y:174.15,alpha:1}},{t:this.instance_22,p:{skewX:90.298,skewY:-89.7011,x:-37.05,y:180.3,regX:5.4,alpha:1}},{t:this.instance_32,p:{rotation:0,x:-52.8,y:176.5,regX:9.8,scaleX:0.3513,scaleY:0.3513,skewX:135.2957,skewY:-44.7043,alpha:1}},{t:this.instance_20,p:{regY:3.9,rotation:-150.2945,x:-60.95,y:151.45,regX:5.5,alpha:1}},{t:this.instance_19,p:{regY:4,rotation:-90.2949,x:-53.3,y:148.7,regX:5.4,alpha:1}},{t:this.instance_21,p:{regX:19.1,skewX:0,skewY:0,x:-48.6,y:144,regY:-1,scaleX:0.2175,scaleY:0.2175,rotation:-105.2928,alpha:1}},{t:this.instance_27,p:{skewX:0,skewY:0,x:-55.85,y:154.3,regX:4.5,regY:6,scaleX:0.6193,scaleY:0.6193,rotation:-44.998,alpha:1}},{t:this.instance_25,p:{regY:6.2,skewX:0,skewY:0,x:-49.45,y:141.5,regX:4.5,scaleX:0.6193,scaleY:0.6193,rotation:-44.998,alpha:1}},{t:this.instance_15,p:{regX:5.9,regY:4.3,rotation:-89.9986,x:-54.6,y:129.5,alpha:1}},{t:this.instance_14,p:{regX:5.8,rotation:-89.9986,x:-54.4,y:168.9,regY:4.3,alpha:1}},{t:this.instance_12,p:{regX:10.5,regY:5.8,rotation:-90,x:-60,y:160,alpha:1}},{t:this.instance_18,p:{regX:9.8,regY:6.2,rotation:75.0006,x:-49.4,y:135.05,scaleX:0.2618,scaleY:0.2618,alpha:1}},{t:this.instance_11,p:{regY:-4.7,rotation:-89.9986,x:-47.1,y:161.1,regX:23.1,alpha:1}},{t:this.instance_10,p:{regX:11.8,regY:5.9,scaleX:0.4708,scaleY:0.4708,rotation:90,x:-56.9,y:141.65,alpha:1}},{t:this.instance_9,p:{regX:17.4,regY:12.5,skewX:-89.7008,skewY:90.2992,x:-43.35,y:161.75,alpha:1}},{t:this.instance_24,p:{regX:-87.4,regY:-38.6,skewX:27.5603,skewY:-152.4397,x:-12.1,y:166.6,scaleX:0.3147,scaleY:0.3147,alpha:1}},{t:this.instance_7,p:{regY:4.5,scaleY:0.5306,skewX:75.2972,skewY:-104.7027,x:-65.45,y:161.15,regX:5.2,alpha:1}},{t:this.instance_6,p:{scaleY:0.5306,skewX:75.2972,skewY:-104.7027,x:-45,y:172.75,regX:5.5,regY:4.3,alpha:1}},{t:this.instance_17,p:{regY:3,rotation:159.1866,x:-23.7,y:102.75,regX:3.8,scaleX:0.5081,scaleY:0.5081,alpha:1}},{t:this.instance_16,p:{regX:4.1,regY:3.1,rotation:159.1871,x:-30.05,y:100.25,scaleX:0.2032,scaleY:0.2032,alpha:1}},{t:this.instance_8,p:{regX:3.9,regY:3.1,skewX:0,skewY:0,x:-31.55,y:118.35,scaleX:0.5081,scaleY:0.5081,rotation:159.1866,alpha:1}},{t:this.instance_43,p:{regX:35.8,rotation:-136.0804,x:-37.35,y:106.55,alpha:1}},{t:this.instance_23,p:{regY:5.5,skewX:0,skewY:0,x:-39.55,y:95.45,regX:35.9,rotation:-136.0804,alpha:1}},{t:this.instance_5,p:{regX:10.1,regY:5.9,rotation:59.7124,x:-34.4,y:117.4,scaleX:0.3513,scaleY:0.3513,alpha:1}}]},1).to({state:[{t:this.instance_48,p:{regY:6.3,rotation:52.2529,x:-22.55,y:201.7,alpha:1}},{t:this.instance_42,p:{scaleY:0.3513,rotation:-135.2886,x:-30.35,y:244.05,regX:10,regY:5.6,scaleX:0.3513,alpha:1}},{t:this.instance_41,p:{rotation:-90.2937,x:-29.8,y:187.5,regX:19.2,regY:-1.2,alpha:1}},{t:this.instance_47,p:{regX:4.7,regY:6,rotation:-29.9984,x:-42.4,y:200.55,alpha:1}},{t:this.instance_46,p:{regX:4.7,regY:6.2,rotation:-29.9984,x:-31.5,y:180,alpha:1}},{t:this.instance_37,p:{rotation:-74.9976,x:-43.5,y:172.7,regY:4.2,alpha:1}},{t:this.instance_36,p:{regY:4.2,rotation:-74.9985,x:-37.1,y:210.3,alpha:1}},{t:this.instance_34,p:{regX:11.3,rotation:-89.9987,x:-20.4,y:241.1,regY:5.8,scaleX:0.6491,scaleY:0.6491,alpha:1}},{t:this.instance_30,p:{rotation:-74.9995,x:-42.9,y:205.9,regX:11.2,scaleX:0.5638,scaleY:0.5638,alpha:1}},{t:this.instance_40,p:{regX:9.8,rotation:90.0021,x:-19.3,y:169.1,regY:6.2,scaleX:0.4227,scaleY:0.4227,alpha:1}},{t:this.instance_33,p:{regX:9.7,regY:6,rotation:90,x:-30.35,y:175.65,alpha:1}},{t:this.instance_31,p:{regX:23.2,rotation:-74.9985,x:-30.9,y:205.6,alpha:1}},{t:this.instance_13,p:{regX:11.8,regY:5.9,rotation:105.0005,x:-34.15,y:188.7,scaleX:0.7603,scaleY:0.7603,alpha:1}},{t:this.instance_29,p:{regX:16.9,regY:12.2,skewX:-74.701,skewY:105.299,x:-26.95,y:213.1,alpha:1}},{t:this.instance_28,p:{skewX:120.2981,skewY:-59.7019,x:-48.3,y:229.05,regY:4.2,alpha:1}},{t:this.instance_45,p:{regY:-38.9,skewX:42.5538,skewY:-137.4462,x:18.75,y:235.1,alpha:1}},{t:this.instance_26,p:{skewX:90.298,skewY:-89.7011,x:-52.1,y:208.85,regX:5.4,alpha:1}},{t:this.instance_39,p:{regY:3.6,rotation:0,x:-42.35,y:158.95,regX:3.8,scaleX:0.5081,scaleY:0.5081,skewX:60.294,skewY:-119.706,alpha:1}},{t:this.instance_38,p:{regY:-38.8,rotation:0,x:3.7,y:231.4,regX:-87.4,scaleX:0.5081,scaleY:0.5081,skewX:42.5538,skewY:-137.4462,alpha:1}},{t:this.instance_44,p:{regX:35.9,regY:5.8,skewX:-4.4461,skewY:175.5539,x:-61.15,y:154.2,alpha:1}},{t:this.instance_22,p:{skewX:90.298,skewY:-89.7011,x:-37.05,y:227.8,regX:5.4,alpha:1}},{t:this.instance_32,p:{rotation:0,x:-52.8,y:224,regX:9.8,scaleX:0.3513,scaleY:0.3513,skewX:135.2957,skewY:-44.7043,alpha:1}},{t:this.instance_20,p:{regY:3.8,rotation:-135.2951,x:-38.85,y:136.65,regX:5.5,alpha:1}},{t:this.instance_19,p:{regY:4,rotation:-90.2949,x:-53.3,y:196.2,regX:5.4,alpha:1}},{t:this.instance_21,p:{regX:19.1,skewX:0,skewY:0,x:-50.1,y:195.5,regY:-1,scaleX:0.2175,scaleY:0.2175,rotation:-105.2928,alpha:1}},{t:this.instance_27,p:{skewX:0,skewY:0,x:-34.65,y:140.65,regX:4.5,regY:6,scaleX:0.6193,scaleY:0.6193,rotation:-29.997,alpha:1}},{t:this.instance_25,p:{regY:6.2,skewX:0,skewY:0,x:-49.45,y:189,regX:4.5,scaleX:0.6193,scaleY:0.6193,rotation:-44.998,alpha:1}},{t:this.instance_15,p:{regX:5.8,regY:4.2,rotation:-75.0009,x:-22.05,y:132.3,alpha:1}},{t:this.instance_14,p:{regX:5.8,rotation:-75.0009,x:-37.05,y:155.15,regY:4.2,alpha:1}},{t:this.instance_12,p:{regX:10.6,regY:5.6,rotation:-75.0018,x:-40.2,y:145.05,alpha:1}},{t:this.instance_18,p:{regX:9.8,regY:6.2,rotation:75.0006,x:-49.4,y:182.55,scaleX:0.2618,scaleY:0.2618,alpha:1}},{t:this.instance_11,p:{regY:-4.7,rotation:-89.9986,x:-47.1,y:208.6,regX:23.1,alpha:1}},{t:this.instance_10,p:{regX:11.9,regY:6,scaleX:0.4708,scaleY:0.4708,rotation:104.9965,x:-27.45,y:143.4,alpha:1}},{t:this.instance_9,p:{regX:17.4,regY:12.5,skewX:-89.7008,skewY:90.2992,x:-43.35,y:209.25,alpha:1}},{t:this.instance_24,p:{regX:-87.4,regY:-38.6,skewX:27.5603,skewY:-152.4397,x:-12.1,y:214.1,scaleX:0.3147,scaleY:0.3147,alpha:1}},{t:this.instance_7,p:{regY:4.5,scaleY:0.5306,skewX:90.2966,skewY:-89.7077,x:-45.75,y:144.85,regX:5.2,alpha:1}},{t:this.instance_6,p:{scaleY:0.5306,skewX:75.2972,skewY:-104.7027,x:-45,y:220.25,regX:5.5,regY:4.3,alpha:1}},{t:this.instance_17,p:{regY:3,rotation:159.1866,x:-22.7,y:160.75,regX:3.8,scaleX:0.5081,scaleY:0.5081,alpha:1}},{t:this.instance_16,p:{regX:4.1,regY:3.1,rotation:159.1871,x:-29.05,y:158.25,scaleX:0.2032,scaleY:0.2032,alpha:1}},{t:this.instance_8,p:{regX:3.9,regY:3.1,skewX:0,skewY:0,x:-33.05,y:169.85,scaleX:0.5081,scaleY:0.5081,rotation:159.1866,alpha:1}},{t:this.instance_43,p:{regX:35.8,rotation:-136.0804,x:-38.85,y:158.05,alpha:1}},{t:this.instance_23,p:{regY:5.5,skewX:0,skewY:0,x:-41.05,y:146.95,regX:35.9,rotation:-136.0804,alpha:1}},{t:this.instance_5,p:{regX:10.1,regY:5.9,rotation:59.7124,x:-35.9,y:168.9,scaleX:0.3513,scaleY:0.3513,alpha:1}}]},1).to({state:[{t:this.instance_48,p:{regY:6.3,rotation:52.2529,x:-22.55,y:249.8,alpha:0.1016}},{t:this.instance_42,p:{scaleY:0.3513,rotation:-135.2886,x:-30.35,y:292.15,regX:10,regY:5.6,scaleX:0.3513,alpha:0.1016}},{t:this.instance_41,p:{rotation:-90.2937,x:-29.8,y:235.6,regX:19.2,regY:-1.2,alpha:0.1016}},{t:this.instance_47,p:{regX:4.7,regY:6,rotation:-29.9984,x:-42.4,y:248.65,alpha:0.1016}},{t:this.instance_46,p:{regX:4.7,regY:6.2,rotation:-29.9984,x:-31.5,y:228.1,alpha:0.1016}},{t:this.instance_37,p:{rotation:-74.9976,x:-43.5,y:220.8,regY:4.2,alpha:0.1016}},{t:this.instance_36,p:{regY:4.2,rotation:-74.9985,x:-37.1,y:258.4,alpha:0.1016}},{t:this.instance_34,p:{regX:11.3,rotation:-89.9987,x:-20.4,y:289.2,regY:5.8,scaleX:0.6491,scaleY:0.6491,alpha:0.1016}},{t:this.instance_30,p:{rotation:-74.9995,x:-42.9,y:254,regX:11.2,scaleX:0.5638,scaleY:0.5638,alpha:0.1016}},{t:this.instance_40,p:{regX:9.8,rotation:90.0021,x:-19.3,y:217.2,regY:6.2,scaleX:0.4227,scaleY:0.4227,alpha:0.1016}},{t:this.instance_33,p:{regX:9.7,regY:6,rotation:90,x:-30.35,y:223.75,alpha:0.1016}},{t:this.instance_31,p:{regX:23.2,rotation:-74.9985,x:-30.9,y:253.7,alpha:0.1016}},{t:this.instance_13,p:{regX:11.8,regY:5.9,rotation:105.0005,x:-34.15,y:236.8,scaleX:0.7603,scaleY:0.7603,alpha:0.1016}},{t:this.instance_29,p:{regX:16.9,regY:12.2,skewX:-74.701,skewY:105.299,x:-26.95,y:261.2,alpha:0.1016}},{t:this.instance_28,p:{skewX:120.2981,skewY:-59.7019,x:-48.3,y:277.15,regY:4.2,alpha:0.1016}},{t:this.instance_45,p:{regY:-38.9,skewX:42.5538,skewY:-137.4462,x:18.75,y:283.2,alpha:0.1016}},{t:this.instance_26,p:{skewX:90.298,skewY:-89.7011,x:-52.1,y:256.95,regX:5.4,alpha:0.1016}},{t:this.instance_39,p:{regY:3.6,rotation:0,x:-42.35,y:207.05,regX:3.8,scaleX:0.5081,scaleY:0.5081,skewX:60.294,skewY:-119.706,alpha:0.1016}},{t:this.instance_38,p:{regY:-38.8,rotation:0,x:3.7,y:279.5,regX:-87.4,scaleX:0.5081,scaleY:0.5081,skewX:42.5538,skewY:-137.4462,alpha:0.1016}},{t:this.instance_44,p:{regX:35.9,regY:5.8,skewX:-4.4461,skewY:175.5539,x:-61.15,y:202.3,alpha:0.1016}},{t:this.instance_22,p:{skewX:90.298,skewY:-89.7011,x:-37.05,y:275.9,regX:5.4,alpha:0.1016}},{t:this.instance_32,p:{rotation:0,x:-52.8,y:272.1,regX:9.8,scaleX:0.3513,scaleY:0.3513,skewX:135.2957,skewY:-44.7043,alpha:0.1016}},{t:this.instance_20,p:{regY:3.8,rotation:-135.2951,x:-38.85,y:184.75,regX:5.5,alpha:0.1016}},{t:this.instance_19,p:{regY:4,rotation:-90.2949,x:-53.3,y:244.3,regX:5.4,alpha:0.1016}},{t:this.instance_21,p:{regX:19.1,skewX:0,skewY:0,x:-50.1,y:243.6,regY:-1,scaleX:0.2175,scaleY:0.2175,rotation:-105.2928,alpha:0.1016}},{t:this.instance_27,p:{skewX:0,skewY:0,x:-34.65,y:188.75,regX:4.5,regY:6,scaleX:0.6193,scaleY:0.6193,rotation:-29.997,alpha:0.1016}},{t:this.instance_25,p:{regY:6.2,skewX:0,skewY:0,x:-49.45,y:237.1,regX:4.5,scaleX:0.6193,scaleY:0.6193,rotation:-44.998,alpha:0.1016}},{t:this.instance_15,p:{regX:5.8,regY:4.2,rotation:-75.0009,x:-22.05,y:180.4,alpha:0.1016}},{t:this.instance_14,p:{regX:5.8,rotation:-75.0009,x:-37.05,y:203.25,regY:4.2,alpha:0.1016}},{t:this.instance_12,p:{regX:10.6,regY:5.6,rotation:-75.0018,x:-40.2,y:193.15,alpha:0.1016}},{t:this.instance_18,p:{regX:9.8,regY:6.2,rotation:75.0006,x:-49.4,y:230.65,scaleX:0.2618,scaleY:0.2618,alpha:0.1016}},{t:this.instance_11,p:{regY:-4.7,rotation:-89.9986,x:-47.1,y:256.7,regX:23.1,alpha:0.1016}},{t:this.instance_10,p:{regX:11.9,regY:6,scaleX:0.4708,scaleY:0.4708,rotation:104.9965,x:-27.45,y:191.5,alpha:0.1016}},{t:this.instance_9,p:{regX:17.4,regY:12.5,skewX:-89.7008,skewY:90.2992,x:-43.35,y:257.35,alpha:0.1016}},{t:this.instance_24,p:{regX:-87.4,regY:-38.6,skewX:27.5603,skewY:-152.4397,x:-12.1,y:262.2,scaleX:0.3147,scaleY:0.3147,alpha:0.1016}},{t:this.instance_7,p:{regY:4.5,scaleY:0.5306,skewX:90.2966,skewY:-89.7077,x:-45.75,y:192.95,regX:5.2,alpha:0.1016}},{t:this.instance_6,p:{scaleY:0.5306,skewX:75.2972,skewY:-104.7027,x:-45,y:268.35,regX:5.5,regY:4.3,alpha:0.1016}},{t:this.instance_17,p:{regY:3,rotation:159.1866,x:-22.7,y:208.85,regX:3.8,scaleX:0.5081,scaleY:0.5081,alpha:0.1016}},{t:this.instance_16,p:{regX:4.1,regY:3.1,rotation:159.1871,x:-29.05,y:206.35,scaleX:0.2032,scaleY:0.2032,alpha:0.1016}},{t:this.instance_8,p:{regX:3.9,regY:3.1,skewX:0,skewY:0,x:-33.05,y:217.95,scaleX:0.5081,scaleY:0.5081,rotation:159.1866,alpha:0.1016}},{t:this.instance_43,p:{regX:35.8,rotation:-136.0804,x:-38.85,y:206.15,alpha:0.1016}},{t:this.instance_23,p:{regY:5.5,skewX:0,skewY:0,x:-41.05,y:195.05,regX:35.9,rotation:-136.0804,alpha:0.1016}},{t:this.instance_5,p:{regX:10.1,regY:5.9,rotation:59.7124,x:-35.9,y:217,scaleX:0.3513,scaleY:0.3513,alpha:0.1016}}]},1).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({scaleX:0.7174,scaleY:0.7174,rotation:-13.028,x:60.1,y:22.6},0).wait(1).to({regX:87.8,rotation:-17.9833,x:52.8,y:22.85},0).wait(1).to({regX:87.7,rotation:-22.1943,x:48.8,y:23.7},0).wait(1).to({rotation:-26.9008,x:42.55,y:24.95},0).wait(1).to({x:31.3,y:28.2},0).wait(1).to({regX:87.6,regY:25.4,rotation:-27.1951,x:16.8,y:36.55},0).to({_off:true},1).wait(7));

	// p_stones
	this.instance_49 = new lib.stone_6();
	this.instance_49.setTransform(2.05,51.5,0.5082,0.5082,0,0,0,3.8,3.1);

	this.instance_50 = new lib.stone_5();
	this.instance_50.setTransform(6.05,42.05,0.3529,0.3529,0,0,0,6.1,4.2);

	this.instance_51 = new lib.stone_1();
	this.instance_51.setTransform(16.95,25.35,0.3776,0.3776,-59.9995,0,0,16.4,12.2);

	this.instance_52 = new lib.stone_6();
	this.instance_52.setTransform(-5.7,57.5,0.5082,0.5082,0,0,0,3.8,3.1);

	this.instance_53 = new lib.stone_6();
	this.instance_53.setTransform(-18.45,63.5,0.5082,0.5082,0,0,0,3.8,3.1);

	this.instance_54 = new lib.stone_7();
	this.instance_54.setTransform(-16.2,111,0.5803,0.5803,64.4483,0,0,35.8,5.7);

	this.instance_55 = new lib.stone_7();
	this.instance_55.setTransform(-10.35,93.8,0.5803,0.5803,64.4483,0,0,35.8,5.7);

	this.instance_56 = new lib.stone_5();
	this.instance_56.setTransform(-12.2,71.3,0.6376,0.8568,-45.2973,0,0,5.5,4.2);

	this.instance_57 = new lib.stone_6();
	this.instance_57.setTransform(-78.25,41.45,0.5082,0.5082,2.4455,0,0,-87.2,-39);

	this.instance_58 = new lib.stone_6();
	this.instance_58.setTransform(-28.45,98.7,0.5082,0.5082,-0.2925,0,0,3.7,3.1);

	this.instance_59 = new lib.stone_5();
	this.instance_59.setTransform(-30.5,86.9,0.9777,0.9777,-75.2962,0,0,5.8,4.2);

	this.instance_60 = new lib.stone_5();
	this.instance_60.setTransform(-47.55,103,0.6376,0.8568,-60.2966,0,0,5.5,4.2);

	this.instance_61 = new lib.stone_6();
	this.instance_61.setTransform(-30.25,113.15,0.5082,0.5082,-15.2915,0,0,3.8,3.1);

	this.instance_62 = new lib.stone_5();
	this.instance_62.setTransform(-35.6,97.35,0.6376,0.8569,-60.2976,0,0,5.5,4.2);

	this.instance_63 = new lib.stone_6();
	this.instance_63.setTransform(-33.5,131.05,0.2032,0.2032,-15.2883,0,0,3.6,3.6);

	this.instance_64 = new lib.stone_6();
	this.instance_64.setTransform(-101.05,82.9,0.5082,0.5082,-12.5531,0,0,-87.4,-39);

	this.instance_65 = new lib.stone_6();
	this.instance_65.setTransform(-39.7,127.95,0.5082,0.5082,-15.2915,0,0,3.6,3.1);

	this.instance_66 = new lib.stone_5();
	this.instance_66.setTransform(-44.65,117.2,0.9777,0.9777,-90.2942,0,0,5.8,4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_51,p:{x:16.95,y:25.35,regY:12.2,rotation:-59.9995,regX:16.4,scaleX:0.3776,scaleY:0.3776,alpha:1}},{t:this.instance_50,p:{regX:6.1,scaleX:0.3529,scaleY:0.3529,rotation:0,x:6.05,y:42.05,alpha:1}},{t:this.instance_49,p:{regX:3.8,regY:3.1,x:2.05,y:51.5,scaleX:0.5082,scaleY:0.5082,rotation:0,alpha:1}}]},3).to({state:[{t:this.instance_51,p:{x:10.7,y:29.85,regY:12.2,rotation:-59.9995,regX:16.4,scaleX:0.3776,scaleY:0.3776,alpha:1}},{t:this.instance_50,p:{regX:5.9,scaleX:0.9778,scaleY:0.9778,rotation:-74.9989,x:-1.65,y:50.5,alpha:1}},{t:this.instance_52,p:{regX:3.8,regY:3.1,scaleX:0.5082,scaleY:0.5082,rotation:0,x:-5.7,y:57.5,alpha:1}},{t:this.instance_49,p:{regX:-87.2,regY:-39.2,x:-43.95,y:16.9,scaleX:0.5082,scaleY:0.5082,rotation:0,alpha:1}}]},1).to({state:[{t:this.instance_51,p:{x:-13.1,y:39.25,regY:12.3,rotation:119.9988,regX:16.4,scaleX:0.3776,scaleY:0.3776,alpha:1}},{t:this.instance_50,p:{regX:5.8,scaleX:0.9777,scaleY:0.9777,rotation:-75.0004,x:-14.45,y:56.05,alpha:1}},{t:this.instance_53,p:{regX:3.8,regY:3.1,scaleX:0.5082,scaleY:0.5082,rotation:0,x:-18.45,y:63.5,alpha:1}},{t:this.instance_52,p:{regX:-87.3,regY:-39.1,scaleX:0.5081,scaleY:0.5081,rotation:2.7401,x:-60.75,y:20.5,alpha:1}},{t:this.instance_49,p:{regX:3.7,regY:3.2,x:-13.45,y:68,scaleX:0.2032,scaleY:0.2032,rotation:0,alpha:1}}]},1).to({state:[{t:this.instance_51,p:{x:-30.65,y:59.95,regY:12.3,rotation:119.7024,regX:16.6,scaleX:0.3776,scaleY:0.3776,alpha:1}},{t:this.instance_59,p:{regX:5.8,rotation:-75.2962,x:-30.5,y:86.9,regY:4.2,alpha:1}},{t:this.instance_58,p:{regX:3.7,regY:3.1,rotation:-0.2925,x:-28.45,y:98.7,scaleX:0.5082,scaleY:0.5082,alpha:1}},{t:this.instance_57,p:{regX:-87.2,regY:-39,scaleX:0.5082,scaleY:0.5082,rotation:2.4455,x:-78.25,y:41.45,alpha:1}},{t:this.instance_53,p:{regX:3.6,regY:3.5,scaleX:0.2033,scaleY:0.2033,rotation:-0.2925,x:-23.35,y:103.2,alpha:1}},{t:this.instance_56,p:{x:-12.2,y:71.3,regX:5.5,rotation:-45.2973,alpha:1}},{t:this.instance_52,p:{regX:3.7,regY:3.1,scaleX:0.5082,scaleY:0.5082,rotation:-0.2925,x:-15.6,y:86.8,alpha:1}},{t:this.instance_49,p:{regX:-87.2,regY:-39,x:-68.85,y:51.8,scaleX:0.5082,scaleY:0.5082,rotation:2.4455,alpha:1}},{t:this.instance_55,p:{regX:35.8,rotation:64.4483,x:-10.35,y:93.8,regY:5.7,alpha:1}},{t:this.instance_50,p:{regX:5.5,scaleX:0.6376,scaleY:0.8568,rotation:-45.2973,x:-31.7,y:74.65,alpha:1}},{t:this.instance_54,p:{regX:35.8,rotation:64.4483,x:-16.2,y:111,regY:5.7,alpha:1}}]},1).to({state:[{t:this.instance_51,p:{x:-46.95,y:94.45,regY:12.3,rotation:119.7024,regX:16.6,scaleX:0.3776,scaleY:0.3776,alpha:1}},{t:this.instance_66,p:{rotation:-90.2942,x:-44.65,y:117.2,regX:5.8,regY:4.2,alpha:1}},{t:this.instance_65,p:{regY:3.1,rotation:-15.2915,x:-39.7,y:127.95,scaleX:0.5082,scaleY:0.5082,alpha:1}},{t:this.instance_64,p:{regX:-87.4,regY:-39,scaleX:0.5082,scaleY:0.5082,rotation:-12.5531,x:-101.05,y:82.9,alpha:1}},{t:this.instance_63,p:{regX:3.6,regY:3.6,rotation:-15.2883,x:-33.5,y:131.05,alpha:1}},{t:this.instance_62,p:{regX:5.5,scaleY:0.8569,rotation:-60.2976,x:-35.6,y:97.35,alpha:1}},{t:this.instance_61,p:{regX:3.8,regY:3.1,rotation:-15.2915,x:-30.25,y:113.15,scaleX:0.5082,scaleY:0.5082,alpha:1}},{t:this.instance_58,p:{regX:-87.3,regY:-39,rotation:-12.5531,x:-90.8,y:93.2,scaleX:0.5082,scaleY:0.5082,alpha:1}},{t:this.instance_55,p:{regX:35.9,rotation:49.451,x:-21.8,y:120.45,regY:5.7,alpha:1}},{t:this.instance_60,p:{regX:5.5,regY:4.2,rotation:-60.2966,x:-47.55,y:103,alpha:1}},{t:this.instance_54,p:{regX:35.9,rotation:49.449,x:-24.5,y:136.75,regY:5.7,alpha:1}},{t:this.instance_59,p:{regX:5.7,rotation:-60.2966,x:-32.55,y:49,regY:4.2,alpha:1}},{t:this.instance_56,p:{x:-26.5,y:56,regX:5.5,rotation:-45.2973,alpha:1}},{t:this.instance_57,p:{regX:3.6,regY:3.1,scaleX:0.6873,scaleY:0.6873,rotation:-15.2914,x:-17.85,y:84.2,alpha:1}},{t:this.instance_53,p:{regX:3.6,regY:3.6,scaleX:0.2749,scaleY:0.2749,rotation:-15.2892,x:-24.9,y:93.65,alpha:1}},{t:this.instance_52,p:{regX:3.6,regY:3.2,scaleX:0.6873,scaleY:0.6873,rotation:-15.2914,x:-5.15,y:64.25,alpha:1}},{t:this.instance_49,p:{regX:3.7,regY:3.1,x:-4.75,y:47.15,scaleX:1.1725,scaleY:1.1725,rotation:-15.2915,alpha:1}},{t:this.instance_50,p:{regX:5.5,scaleX:0.6376,scaleY:0.8568,rotation:-45.2973,x:-6.55,y:56.55,alpha:1}}]},1).to({state:[{t:this.instance_51,p:{x:-51.45,y:117.6,regY:12.3,rotation:114.1741,regX:16.9,scaleX:0.3775,scaleY:0.3775,alpha:1}},{t:this.instance_66,p:{rotation:-95.8242,x:-46.9,y:139.95,regX:5.8,regY:4.2,alpha:1}},{t:this.instance_65,p:{regY:3.2,rotation:-20.8186,x:-40.9,y:150.25,scaleX:0.5082,scaleY:0.5082,alpha:1}},{t:this.instance_64,p:{regX:-87.5,regY:-38.9,scaleX:0.5081,scaleY:0.5081,rotation:-18.0824,x:-106.4,y:111.3,alpha:1}},{t:this.instance_63,p:{regX:3.5,regY:3.4,rotation:-20.8179,x:-34.55,y:152.7,alpha:1}},{t:this.instance_62,p:{regX:5.4,scaleY:0.8568,rotation:-65.8295,x:-39.9,y:119.35,alpha:1}},{t:this.instance_61,p:{regX:3.6,regY:3.2,rotation:-20.8186,x:-33.05,y:134.6,scaleX:0.5082,scaleY:0.5082,alpha:1}},{t:this.instance_58,p:{regX:-87.5,regY:-39.1,rotation:-18.0824,x:-95.25,y:120.5,scaleX:0.5081,scaleY:0.5081,alpha:1}},{t:this.instance_55,p:{regX:35.8,rotation:43.9186,x:-24,y:141,regY:5.9,alpha:1}},{t:this.instance_60,p:{regX:5.3,regY:4.1,rotation:-65.8286,x:-51.35,y:126.15,alpha:1}},{t:this.instance_54,p:{regX:35.9,rotation:43.9175,x:-25.1,y:157.5,regY:5.8,alpha:1}},{t:this.instance_59,p:{regX:5.6,rotation:-65.8287,x:-41.45,y:71,regY:4.2,alpha:1}},{t:this.instance_56,p:{x:-34.75,y:77.3,regX:5.4,rotation:-50.8283,alpha:1}},{t:this.instance_57,p:{regX:3.5,regY:3.2,scaleX:0.6873,scaleY:0.6873,rotation:-20.8211,x:-23.45,y:104.65,alpha:1}},{t:this.instance_53,p:{regX:3.2,regY:3.8,scaleX:0.2748,scaleY:0.2748,rotation:-20.8196,x:-29.65,y:114.7,alpha:1}},{t:this.instance_52,p:{regX:3.6,regY:3.2,scaleX:0.6873,scaleY:0.6873,rotation:-20.8211,x:-12.75,y:83.45,alpha:1}},{t:this.instance_49,p:{regX:3.6,regY:3.2,x:-14.05,y:66.55,scaleX:1.1724,scaleY:1.1724,rotation:-20.8218,alpha:1}},{t:this.instance_50,p:{regX:5.5,scaleX:0.6376,scaleY:0.8568,rotation:-50.8283,x:-14.85,y:75.9,alpha:1}}]},1).to({state:[{t:this.instance_51,p:{x:-49.45,y:159.6,regY:12.3,rotation:114.1741,regX:16.9,scaleX:0.3775,scaleY:0.3775,alpha:1}},{t:this.instance_66,p:{rotation:-95.8242,x:-44.9,y:181.95,regX:5.8,regY:4.2,alpha:1}},{t:this.instance_65,p:{regY:3.2,rotation:-20.8186,x:-38.9,y:192.25,scaleX:0.5082,scaleY:0.5082,alpha:1}},{t:this.instance_64,p:{regX:-87.5,regY:-38.9,scaleX:0.5081,scaleY:0.5081,rotation:-18.0824,x:-104.4,y:153.3,alpha:1}},{t:this.instance_63,p:{regX:3.5,regY:3.4,rotation:-20.8179,x:-32.55,y:194.7,alpha:1}},{t:this.instance_62,p:{regX:5.4,scaleY:0.8568,rotation:-65.8295,x:-37.9,y:161.35,alpha:1}},{t:this.instance_61,p:{regX:3.6,regY:3.2,rotation:-20.8186,x:-31.05,y:176.6,scaleX:0.5082,scaleY:0.5082,alpha:1}},{t:this.instance_58,p:{regX:-87.5,regY:-39.1,rotation:-18.0824,x:-93.25,y:162.5,scaleX:0.5081,scaleY:0.5081,alpha:1}},{t:this.instance_55,p:{regX:35.8,rotation:43.9186,x:-22,y:183,regY:5.9,alpha:1}},{t:this.instance_60,p:{regX:5.3,regY:4.1,rotation:-65.8286,x:-49.35,y:168.15,alpha:1}},{t:this.instance_54,p:{regX:35.9,rotation:43.9175,x:-23.1,y:199.5,regY:5.8,alpha:1}},{t:this.instance_59,p:{regX:5.6,rotation:-65.8287,x:-39.45,y:113,regY:4.2,alpha:1}},{t:this.instance_56,p:{x:-32.75,y:119.3,regX:5.4,rotation:-50.8283,alpha:1}},{t:this.instance_57,p:{regX:3.5,regY:3.2,scaleX:0.6873,scaleY:0.6873,rotation:-20.8211,x:-21.45,y:146.65,alpha:1}},{t:this.instance_53,p:{regX:3.2,regY:3.8,scaleX:0.2748,scaleY:0.2748,rotation:-20.8196,x:-27.65,y:156.7,alpha:1}},{t:this.instance_52,p:{regX:3.6,regY:3.2,scaleX:0.6873,scaleY:0.6873,rotation:-20.8211,x:-10.75,y:125.45,alpha:1}},{t:this.instance_49,p:{regX:3.6,regY:3.2,x:-12.05,y:108.55,scaleX:1.1724,scaleY:1.1724,rotation:-20.8218,alpha:1}},{t:this.instance_50,p:{regX:5.5,scaleX:0.6376,scaleY:0.8568,rotation:-50.8283,x:-12.85,y:117.9,alpha:1}}]},1).to({state:[{t:this.instance_51,p:{x:-42.6,y:190.05,regY:12.5,rotation:99.1753,regX:16.9,scaleX:0.3775,scaleY:0.3775,alpha:1}},{t:this.instance_66,p:{rotation:-110.8223,x:-32.45,y:210.6,regX:5.7,regY:4.1,alpha:1}},{t:this.instance_65,p:{regY:3.2,rotation:-35.8179,x:-23.9,y:218.9,scaleX:0.5081,scaleY:0.5081,alpha:1}},{t:this.instance_64,p:{regX:-87.5,regY:-38.9,scaleX:0.5081,scaleY:0.5081,rotation:-33.0811,x:-97.3,y:198.2,alpha:1}},{t:this.instance_63,p:{regX:3.5,regY:3.4,rotation:-20.8179,x:-32.55,y:222.2,alpha:1}},{t:this.instance_62,p:{regX:5.5,scaleY:0.8568,rotation:-80.8277,x:-30.95,y:188.7,alpha:1}},{t:this.instance_61,p:{regX:3.6,regY:3.3,rotation:-35.8179,x:-20.35,y:201.8,scaleX:0.5081,scaleY:0.5081,alpha:1}},{t:this.instance_58,p:{regX:-87.5,regY:-39.1,rotation:-33.0811,x:-84.15,y:204.2,scaleX:0.5081,scaleY:0.5081,alpha:1}},{t:this.instance_55,p:{regX:35.9,rotation:28.9192,x:-9.95,y:205.6,regY:5.9,alpha:1}},{t:this.instance_60,p:{regX:5.2,regY:4.1,rotation:-80.8272,x:-40.25,y:198.35,alpha:1}},{t:this.instance_54,p:{regX:35.9,rotation:28.9166,x:-6.75,y:221.75,regY:5.8,alpha:1}},{t:this.instance_59,p:{regX:5.7,rotation:-80.8292,x:-42.85,y:136.9,regY:4.1,alpha:1}},{t:this.instance_56,p:{x:-32.3,y:150.9,regX:5.4,rotation:-65.8286,alpha:1}},{t:this.instance_57,p:{regX:3.4,regY:3.1,scaleX:0.6873,scaleY:0.6873,rotation:-35.8201,x:-18.55,y:182.15,alpha:1}},{t:this.instance_53,p:{regX:3.1,regY:3.8,scaleX:0.2748,scaleY:0.2748,rotation:-35.815,x:-20.65,y:187.65,alpha:1}},{t:this.instance_52,p:{regX:3.5,regY:3.2,scaleX:0.6873,scaleY:0.6873,rotation:-35.8201,x:-11.2,y:146.6,alpha:1}},{t:this.instance_49,p:{regX:3.6,regY:3.2,x:-19.7,y:131.1,scaleX:1.1724,scaleY:1.1724,rotation:-35.8208,alpha:1}},{t:this.instance_50,p:{regX:5.4,scaleX:0.6376,scaleY:0.8568,rotation:-65.8286,x:-18,y:140.35,alpha:1}}]},1).to({state:[{t:this.instance_51,p:{x:-52.6,y:273.05,regY:12.5,rotation:99.1753,regX:16.9,scaleX:0.3775,scaleY:0.3775,alpha:1}},{t:this.instance_66,p:{rotation:-110.8223,x:-42.45,y:293.6,regX:5.7,regY:4.1,alpha:1}},{t:this.instance_65,p:{regY:3.2,rotation:-35.8179,x:-33.9,y:301.9,scaleX:0.5081,scaleY:0.5081,alpha:1}},{t:this.instance_64,p:{regX:-87.5,regY:-38.9,scaleX:0.5081,scaleY:0.5081,rotation:-33.0811,x:-107.3,y:281.2,alpha:1}},{t:this.instance_63,p:{regX:3.5,regY:3.4,rotation:-20.8179,x:-42.55,y:305.2,alpha:1}},{t:this.instance_62,p:{regX:5.5,scaleY:0.8568,rotation:-80.8277,x:-40.95,y:271.7,alpha:1}},{t:this.instance_61,p:{regX:3.6,regY:3.3,rotation:-35.8179,x:-30.35,y:284.8,scaleX:0.5081,scaleY:0.5081,alpha:1}},{t:this.instance_58,p:{regX:-87.5,regY:-39.1,rotation:-33.0811,x:-94.15,y:287.2,scaleX:0.5081,scaleY:0.5081,alpha:1}},{t:this.instance_55,p:{regX:35.9,rotation:28.9192,x:-19.95,y:288.6,regY:5.9,alpha:1}},{t:this.instance_60,p:{regX:5.2,regY:4.1,rotation:-80.8272,x:-50.25,y:281.35,alpha:1}},{t:this.instance_54,p:{regX:35.9,rotation:28.9166,x:-16.75,y:304.75,regY:5.8,alpha:1}},{t:this.instance_59,p:{regX:5.7,rotation:-80.8292,x:-52.85,y:245.4,regY:4.1,alpha:1}},{t:this.instance_56,p:{x:-42.3,y:259.4,regX:5.4,rotation:-65.8286,alpha:1}},{t:this.instance_57,p:{regX:3.4,regY:3.1,scaleX:0.6873,scaleY:0.6873,rotation:-35.8201,x:-28.55,y:265.15,alpha:1}},{t:this.instance_53,p:{regX:3.1,regY:3.8,scaleX:0.2748,scaleY:0.2748,rotation:-35.815,x:-30.65,y:270.65,alpha:1}},{t:this.instance_52,p:{regX:3.5,regY:3.2,scaleX:0.6873,scaleY:0.6873,rotation:-35.8201,x:-32.7,y:255.1,alpha:1}},{t:this.instance_49,p:{regX:3.6,regY:3.2,x:-41.2,y:239.6,scaleX:1.1724,scaleY:1.1724,rotation:-35.8208,alpha:1}},{t:this.instance_50,p:{regX:5.4,scaleX:0.6376,scaleY:0.8568,rotation:-65.8286,x:-39.5,y:248.85,alpha:1}}]},1).to({state:[{t:this.instance_51,p:{x:-52.6,y:321.15,regY:12.5,rotation:99.1753,regX:16.9,scaleX:0.3775,scaleY:0.3775,alpha:0.1016}},{t:this.instance_66,p:{rotation:-110.8223,x:-42.45,y:341.7,regX:5.7,regY:4.1,alpha:0.1016}},{t:this.instance_65,p:{regY:3.2,rotation:-35.8179,x:-33.9,y:350,scaleX:0.5081,scaleY:0.5081,alpha:0.1016}},{t:this.instance_64,p:{regX:-87.5,regY:-38.9,scaleX:0.5081,scaleY:0.5081,rotation:-33.0811,x:-107.3,y:329.3,alpha:0.1016}},{t:this.instance_63,p:{regX:3.5,regY:3.4,rotation:-20.8179,x:-42.55,y:353.3,alpha:0.1016}},{t:this.instance_62,p:{regX:5.5,scaleY:0.8568,rotation:-80.8277,x:-40.95,y:319.8,alpha:0.1016}},{t:this.instance_61,p:{regX:3.6,regY:3.3,rotation:-35.8179,x:-30.35,y:332.9,scaleX:0.5081,scaleY:0.5081,alpha:0.1016}},{t:this.instance_58,p:{regX:-87.5,regY:-39.1,rotation:-33.0811,x:-94.15,y:335.3,scaleX:0.5081,scaleY:0.5081,alpha:0.1016}},{t:this.instance_55,p:{regX:35.9,rotation:28.9192,x:-19.95,y:336.7,regY:5.9,alpha:0.1016}},{t:this.instance_60,p:{regX:5.2,regY:4.1,rotation:-80.8272,x:-50.25,y:329.45,alpha:0.1016}},{t:this.instance_54,p:{regX:35.9,rotation:28.9166,x:-16.75,y:352.85,regY:5.8,alpha:0.1016}},{t:this.instance_59,p:{regX:5.7,rotation:-80.8292,x:-52.85,y:293.5,regY:4.1,alpha:0.1016}},{t:this.instance_56,p:{x:-42.3,y:307.5,regX:5.4,rotation:-65.8286,alpha:0.1016}},{t:this.instance_57,p:{regX:3.4,regY:3.1,scaleX:0.6873,scaleY:0.6873,rotation:-35.8201,x:-28.55,y:313.25,alpha:0.1016}},{t:this.instance_53,p:{regX:3.1,regY:3.8,scaleX:0.2748,scaleY:0.2748,rotation:-35.815,x:-30.65,y:318.75,alpha:0.1016}},{t:this.instance_52,p:{regX:3.5,regY:3.2,scaleX:0.6873,scaleY:0.6873,rotation:-35.8201,x:-32.7,y:303.2,alpha:0.1016}},{t:this.instance_49,p:{regX:3.6,regY:3.2,x:-41.2,y:287.7,scaleX:1.1724,scaleY:1.1724,rotation:-35.8208,alpha:0.1016}},{t:this.instance_50,p:{regX:5.4,scaleX:0.6376,scaleY:0.8568,rotation:-65.8286,x:-39.5,y:296.95,alpha:0.1016}}]},1).to({state:[]},1).wait(1));

	// leftHand
	this.leftHand = new lib.leftHand();
	this.leftHand.name = "leftHand";
	this.leftHand.setTransform(127.95,22.7,1.5226,1.5226,14.9984,0,0,15.2,12.8);

	this.timeline.addTween(cjs.Tween.get(this.leftHand).wait(1).to({rotation:29.9982,y:24.2},0).wait(1).to({y:20.2},0).wait(1).to({y:16.7},0).wait(1).to({x:122.45,y:12.7},0).wait(4).to({regX:15.1,rotation:14.9984,x:125.05,y:15.45},0).wait(1).to({rotation:1.5275,x:128.4,y:18.3},0).wait(1).to({rotation:1.5275},0).wait(4));

	// rightLeg
	this.rightLeg = new lib.rightLeg();
	this.rightLeg.name = "rightLeg";
	this.rightLeg.setTransform(163.8,60.35,1.6957,1.7009,0,0,180,0.1,0.1);
	this.rightLeg.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,0);

	this.timeline.addTween(cjs.Tween.get(this.rightLeg).wait(14));

	// leftHLeg
	this.leftLeg = new lib.leftLeg();
	this.leftLeg.name = "leftLeg";
	this.leftLeg.setTransform(140.35,68.4,1.6965,1.6985,0,0,0,5.4,5.6);

	this.timeline.addTween(cjs.Tween.get(this.leftLeg).wait(14));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.2,-116.6,309.1,471.20000000000005);


(lib.PositiveFeedbackJump_man = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_20 = function() {
		this.dispatchEvent("complete")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(20).call(this.frame_20).wait(4));

	// Hat
	this.hat = new lib.hat();
	this.hat.name = "hat";
	this.hat.setTransform(111,11.55,1.5227,1.5227,0,0,0,62,23);

	this.timeline.addTween(cjs.Tween.get(this.hat).wait(2).to({y:8.35},0).wait(3).to({y:7.55},0).wait(2).to({y:6.35},0).wait(2).to({y:5.55},0).wait(1).to({y:4.35},0).wait(1).to({y:3.55},0).wait(1).to({y:1},0).wait(2).to({y:3.15},0).wait(1).to({y:4.35},0).wait(1).to({y:5.15},0).wait(1).to({y:5.95},0).wait(1).to({y:7.55},0).wait(1).to({y:8.35},0).wait(1).to({y:11.55},0).wait(4));

	// Man_face
	this.instance = new lib.man_face_smilingtotheside();
	this.instance.setTransform(117.15,53.55,1.6172,1.6172,0,0,0,44.4,37.1);

	this.instance_1 = new lib.mouth_man_smiling();
	this.instance_1.setTransform(89.45,63,1,1,0,0,0,11,5);

	this.instance_2 = new lib.CachedBmp_754();
	this.instance_2.setTransform(41.1,26.85,0.3333,0.3333);

	this.instance_3 = new lib.CachedBmp_755();
	this.instance_3.setTransform(41.25,22.9,0.3333,0.3333);

	this.instance_4 = new lib.CachedBmp_756();
	this.instance_4.setTransform(41.65,22.8,0.3333,0.3333);

	this.instance_5 = new lib.CachedBmp_757();
	this.instance_5.setTransform(41.65,21.45,0.3333,0.3333);

	this.instance_6 = new lib.CachedBmp_758();
	this.instance_6.setTransform(41.65,20.7,0.3333,0.3333);

	this.instance_7 = new lib.CachedBmp_759();
	this.instance_7.setTransform(41.6,19.5,0.3333,0.3333);

	this.instance_8 = new lib.CachedBmp_760();
	this.instance_8.setTransform(41.65,18.8,0.3333,0.3333);

	this.instance_9 = new lib.mouth_man_sad();
	this.instance_9.setTransform(92.65,49.95,1.1514,1.1514,0,180,0,11,5);

	this.instance_10 = new lib.CachedBmp_761();
	this.instance_10.setTransform(41.55,-16.35,0.3333,0.3333);

	this.instance_11 = new lib.CachedBmp_762();
	this.instance_11.setTransform(41.65,18.4,0.3333,0.3333);

	this.instance_12 = new lib.CachedBmp_763();
	this.instance_12.setTransform(41.6,19.5,0.3333,0.3333);

	this.instance_13 = new lib.CachedBmp_764();
	this.instance_13.setTransform(41.65,20.3,0.3333,0.3333);

	this.instance_14 = new lib.CachedBmp_765();
	this.instance_14.setTransform(41.65,21.05,0.3333,0.3333);

	this.instance_15 = new lib.CachedBmp_766();
	this.instance_15.setTransform(41.65,22.8,0.3333,0.3333);

	this.instance_16 = new lib.CachedBmp_767();
	this.instance_16.setTransform(41.65,23.6,0.3333,0.3333);

	this.instance_17 = new lib.CachedBmp_768();
	this.instance_17.setTransform(41.65,26.65,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{x:89.45,y:63}},{t:this.instance,p:{x:117.15,y:53.55}}]}).to({state:[{t:this.instance_3},{t:this.instance_1,p:{x:89.85,y:64.9}},{t:this.instance,p:{x:117.55,y:50.25}}]},2).to({state:[{t:this.instance_4},{t:this.instance_1,p:{x:89.85,y:63.85}},{t:this.instance,p:{x:117.55,y:49.2}}]},3).to({state:[{t:this.instance_5},{t:this.instance_1,p:{x:89.85,y:62.65}},{t:this.instance,p:{x:117.55,y:48}}]},2).to({state:[{t:this.instance_6},{t:this.instance_1,p:{x:89.85,y:61.85}},{t:this.instance,p:{x:117.55,y:47.2}}]},2).to({state:[{t:this.instance_7},{t:this.instance_1,p:{x:89.85,y:60.65}},{t:this.instance,p:{x:117.55,y:46}}]},1).to({state:[{t:this.instance_8},{t:this.instance_1,p:{x:89.85,y:59.85}},{t:this.instance,p:{x:117.55,y:45.2}}]},1).to({state:[{t:this.instance_10},{t:this.instance_9}]},1).to({state:[{t:this.instance_11},{t:this.instance_1,p:{x:89.85,y:59.45}},{t:this.instance,p:{x:117.55,y:44.8}}]},2).to({state:[{t:this.instance_12},{t:this.instance_1,p:{x:89.85,y:60.65}},{t:this.instance,p:{x:117.55,y:46}}]},1).to({state:[{t:this.instance_13},{t:this.instance_1,p:{x:89.85,y:61.45}},{t:this.instance,p:{x:117.55,y:46.8}}]},1).to({state:[{t:this.instance_14},{t:this.instance_1,p:{x:89.85,y:62.25}},{t:this.instance,p:{x:117.55,y:47.6}}]},1).to({state:[{t:this.instance_15},{t:this.instance_1,p:{x:89.85,y:63.85}},{t:this.instance,p:{x:117.55,y:49.2}}]},1).to({state:[{t:this.instance_16},{t:this.instance_1,p:{x:89.85,y:64.65}},{t:this.instance,p:{x:117.55,y:50}}]},1).to({state:[{t:this.instance_17},{t:this.instance_1,p:{x:89.85,y:67.85}},{t:this.instance,p:{x:117.55,y:53.2}}]},1).wait(4));

	// frame
	this.frame = new lib.frame();
	this.frame.name = "frame";
	this.frame.setTransform(17.45,156.95,0.6804,0.6804,-1.4754,0,0,88.2,43.9);

	this.timeline.addTween(cjs.Tween.get(this.frame).wait(24));

	// crate
	this.crate = new lib.crate();
	this.crate.name = "crate";
	this.crate.setTransform(1.8,145.45,0.6804,0.6804,-1.4754,0,0,61.2,25.9);

	this.timeline.addTween(cjs.Tween.get(this.crate).wait(24));

	// wheel
	this.spinningWheel = new lib.StaticWheel();
	this.spinningWheel.name = "spinningWheel";
	this.spinningWheel.setTransform(-21.95,172.15,0.6031,0.6031,-1.4745,0,0,24.7,24.7);

	this.timeline.addTween(cjs.Tween.get(this.spinningWheel).wait(24));

	// PileStones
	this.bricks = new lib.smal_pile_stones();
	this.bricks.name = "bricks";
	this.bricks.setTransform(20.8,120.95,0.7175,0.7175,-8.2909,0,0,87.9,25.2);

	this.timeline.addTween(cjs.Tween.get(this.bricks).wait(24));

	// Body
	this.body = new lib.body();
	this.body.name = "body";
	this.body.setTransform(105.75,121.5,1.5227,1.5227,0,0,0,16,25.2);

	this.timeline.addTween(cjs.Tween.get(this.body).wait(2).to({y:118.3},0).wait(3).to({y:117.5},0).wait(2).to({y:115.9},0).wait(2).to({y:115.1},0).wait(1).to({y:114.3},0).wait(1).to({y:113.5},0).wait(1).to({y:111.9},0).wait(2).to({y:113.5},0).wait(1).to({y:114.3},0).wait(1).to({y:115.1},0).wait(1).to({y:115.9},0).wait(1).to({y:117.5},0).wait(1).to({y:118.3},0).wait(1).to({y:121.5},0).wait(4));

	// right_hand
	this.rightHand = new lib.handOpenRight();
	this.rightHand.name = "rightHand";
	this.rightHand.setTransform(128.25,118.75,1.1693,1.1693,-6.772,0,0,12.3,18.8);

	this.timeline.addTween(cjs.Tween.get(this.rightHand).wait(2).to({regY:18.9,rotation:-12.7125,x:129.25,y:114.15},0).wait(3).to({regX:12.4,rotation:-19.6577,x:132.65,y:112.8},0).wait(2).to({rotation:-26.1467,x:135.9,y:110.2},0).wait(2).to({scaleX:1.1692,scaleY:1.1692,rotation:-34.5939,x:138.45,y:106.9},0).wait(1).to({regY:19.1,rotation:-39.567,x:138.85,y:104.2},0).wait(1).to({regX:12.3,rotation:-68.5055,x:137.85,y:94.35},0).wait(1).to({regX:12.2,regY:19.2,rotation:-98.5041,x:135.5,y:87.1},0).wait(2).to({regX:12.3,regY:19.1,rotation:-68.5055,x:137.85,y:94.35},0).wait(1).to({regX:12.4,rotation:-39.567,x:138.85,y:104.2},0).wait(1).to({regY:18.9,rotation:-34.5939,x:138.45,y:106.9},0).wait(1).to({scaleX:1.1693,scaleY:1.1693,rotation:-26.1467,x:135.9,y:110.2},0).wait(1).to({rotation:-19.6577,x:132.65,y:112.8},0).wait(1).to({regX:12.3,rotation:-12.7125,x:129.25,y:114.15},0).wait(1).to({regY:18.8,rotation:-6.772,x:128.25,y:118.75},0).wait(4));

	// Left_hand
	this.leftHand = new lib.handOpenRight();
	this.leftHand.name = "leftHand";
	this.leftHand.setTransform(86.85,117.9,1.1693,1.1693,0,13.2628,-166.7372,12.3,18.8);

	this.timeline.addTween(cjs.Tween.get(this.leftHand).wait(2).to({regX:12.2,regY:18.9,scaleX:1.1692,scaleY:1.1692,skewX:20.4908,skewY:-159.5092,x:86.15,y:112.6},0).wait(3).to({skewX:26.7122,skewY:-153.2878,x:84.4,y:110.05},0).wait(2).to({skewX:32.4467,skewY:-147.5533,x:82.7,y:106.65},0).wait(2).to({regX:12.1,skewX:44.6531,skewY:-135.3469,x:78.8,y:101.9},0).wait(1).to({skewX:51.1113,skewY:-128.8887,x:78.05,y:98.6},0).wait(1).to({skewX:66.1102,skewY:-113.8898,x:80.05,y:92.25},0).wait(1).to({regX:12,regY:18.8,skewX:89.3277,skewY:-90.6723,x:83.95,y:86.9},0).wait(2).to({regX:12.1,regY:18.9,skewX:66.1102,skewY:-113.8898,x:80.05,y:92.25},0).wait(1).to({skewX:51.1113,skewY:-128.8887,x:78.05,y:98.6},0).wait(1).to({skewX:44.6531,skewY:-135.3469,x:78.8,y:101.9},0).wait(1).to({regX:12.2,skewX:32.4467,skewY:-147.5533,x:82.7,y:106.65},0).wait(1).to({skewX:26.7122,skewY:-153.2878,x:84.4,y:110.05},0).wait(1).to({skewX:20.4908,skewY:-159.5092,x:86.15,y:112.6},0).wait(1).to({regX:12.3,regY:18.8,scaleX:1.1693,scaleY:1.1693,skewX:13.2628,skewY:-166.7372,x:86.85,y:117.9},0).wait(4));

	// Leg_right
	this.rightLeg = new lib.rightLeg();
	this.rightLeg.name = "rightLeg";
	this.rightLeg.setTransform(116.8,162.4,1.6999,1.6999,0,0,0,5.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.rightLeg).wait(2).to({regX:5.4,regY:5.7,scaleX:1.678,scaleY:1.678,rotation:14.9987,y:157.7},0).wait(5).to({regY:5.8,scaleX:1.6779,scaleY:1.6779,rotation:29.9981,x:115.95,y:157.85},0).wait(2).to({regY:5.7,rotation:29.9978,x:116,y:156.5},0).wait(2).to({x:115.6,y:154.5},0).wait(1).to({rotation:14.9986,x:114.35,y:153.7},0).wait(2).to({rotation:29.9978,x:115.6,y:154.5},0).wait(1).to({y:156.1},0).wait(1).to({x:116,y:156.5},0).wait(1).to({regY:5.8,rotation:29.9981,x:115.95,y:157.85},0).wait(1).to({regY:5.7,scaleX:1.678,scaleY:1.678,rotation:14.9987,x:116.8,y:157.7},0).wait(2).to({regX:5.5,regY:6.7,scaleX:1.6999,scaleY:1.6999,rotation:0,x:117.05,y:162.45},0).wait(4));

	// Leg_left
	this.leftLeg = new lib.rightLeg();
	this.leftLeg.name = "leftLeg";
	this.leftLeg.setTransform(94.95,162.55,1.6959,1.6999,0,0,180,5.4,6.8);

	this.timeline.addTween(cjs.Tween.get(this.leftLeg).wait(2).to({regX:5.3,regY:5.9,scaleX:1.678,scaleY:1.678,skewX:-14.9987,skewY:165.0013,x:94,y:158.05},0).wait(5).to({regX:5.2,scaleX:1.6779,scaleY:1.6779,skewX:-29.9981,skewY:150.0019,x:95.4,y:157.55},0).wait(2).to({x:95,y:156.4},0).wait(2).to({skewX:-29.9978,skewY:150.0022,y:155.15},0).wait(1).to({skewX:-14.9986,skewY:165.0014,x:96.55,y:154.05},0).wait(2).to({skewX:-29.9978,skewY:150.0022,x:95.8,y:154.35},0).wait(1).to({x:95,y:155.95},0).wait(1).to({skewX:-29.9981,skewY:150.0019,y:156.4},0).wait(1).to({x:95.4,y:157.55},0).wait(1).to({regX:5.3,scaleX:1.678,scaleY:1.678,skewX:-14.9987,skewY:165.0013,x:94,y:158.05},0).wait(2).to({regX:5.5,regY:6.7,scaleX:1.6999,scaleY:1.6999,skewX:0,skewY:180,x:93.6,y:162.45},0).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.2,-34,245.7,221.5);


(lib.man_standing = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Hat
	this.hat = new lib.hat();
	this.hat.name = "hat";
	this.hat.setTransform(143.15,35,1.5227,1.5227,0,0,0,62,23);

	this.timeline.addTween(cjs.Tween.get(this.hat).wait(1));

	// Man_face
	this.instance = new lib.mouth_man_smiling();
	this.instance.setTransform(128.4,84.85,1,1,0,0,0,11,5);

	this.instance_1 = new lib.man_face();
	this.instance_1.setTransform(155.3,77,1.5227,1.5227,0,0,0,44.4,37.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Right_hand
	this.rightHand = new lib.rightHand();
	this.rightHand.name = "rightHand";
	this.rightHand.setTransform(135.7,144.75,1.5227,1.5227,0,0,0,17.5,11.9);

	this.timeline.addTween(cjs.Tween.get(this.rightHand).wait(1));

	// frame
	this.frame = new lib.frame();
	this.frame.name = "frame";
	this.frame.setTransform(57.7,180.7,0.6804,0.6804,-1.4754,0,0,88.2,43.9);

	this.timeline.addTween(cjs.Tween.get(this.frame).wait(1));

	// crate
	this.crate = new lib.crate();
	this.crate.name = "crate";
	this.crate.setTransform(42.05,169.2,0.6804,0.6804,-1.4754,0,0,61.2,25.9);

	this.timeline.addTween(cjs.Tween.get(this.crate).wait(1));

	// wheel
	this.spinningWheel = new lib.StaticWheel();
	this.spinningWheel.name = "spinningWheel";
	this.spinningWheel.setTransform(18.3,195.9,0.6031,0.6031,-1.4745,0,0,24.7,24.7);

	this.timeline.addTween(cjs.Tween.get(this.spinningWheel).wait(1));

	// Body
	this.body = new lib.body();
	this.body.name = "body";
	this.body.setTransform(145.1,143.35,1.5227,1.5227,0,0,0,16,25.2);

	this.timeline.addTween(cjs.Tween.get(this.body).wait(1));

	// Left_hand
	this.leftHand = new lib.leftHand();
	this.leftHand.name = "leftHand";
	this.leftHand.setTransform(122.7,139.2,1.5227,1.5227,0,0,0,15.2,12.8);

	this.timeline.addTween(cjs.Tween.get(this.leftHand).wait(1));

	// rightLeg
	this.rightLeg = new lib.rightLeg();
	this.rightLeg.name = "rightLeg";
	this.rightLeg.setTransform(167.05,177.85,1.6957,1.7009,0,0,180,0.1,0.1);
	this.rightLeg.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,0);

	this.timeline.addTween(cjs.Tween.get(this.rightLeg).wait(1));

	// leftHLeg
	this.leftLeg = new lib.leftLeg();
	this.leftLeg.name = "leftLeg";
	this.leftLeg.setTransform(129.1,187.15,1.6923,1.6985,0,0,0,5.4,5.6);

	this.timeline.addTween(cjs.Tween.get(this.leftLeg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.man_standing, new cjs.Rectangle(0,0,237.7,211.2), null);


(lib.man_selection = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// unvisible
	this.spinningWheel = new lib.Spinning_Wheel();
	this.spinningWheel.name = "spinningWheel";
	this.spinningWheel.setTransform(92.6,50.8,0.2103,0.2103,0,0,0,24.5,24.8);
	this.spinningWheel.alpha = 0;

	this.frame = new lib.frame();
	this.frame.name = "frame";
	this.frame.setTransform(92.05,36.3,0.2103,0.2103,0,0,0,88,44);
	this.frame.alpha = 0;

	this.crate = new lib.crate();
	this.crate.name = "crate";
	this.crate.setTransform(104.15,53.75,0.2103,0.2103,0,0,0,61.1,25.9);
	this.crate.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.crate},{t:this.frame},{t:this.spinningWheel}]}).wait(1));

	// Man_face
	this.hat = new lib.hat();
	this.hat.name = "hat";
	this.hat.setTransform(94.4,35,1.5227,1.5227,0,0,0,62,23);

	this.instance = new lib.mouth_man_smiling();
	this.instance.setTransform(79.65,84.85,1,1,0,0,0,11,5);

	this.instance_1 = new lib.man_face();
	this.instance_1.setTransform(106.55,77,1.5227,1.5227,0,0,0,44.4,37.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.hat}]}).wait(1));

	// Body
	this.body = new lib.body();
	this.body.name = "body";
	this.body.setTransform(96.35,143.35,1.5227,1.5227,0,0,0,16,25.2);

	this.timeline.addTween(cjs.Tween.get(this.body).wait(1));

	// rightHand
	this.rightHand = new lib.handOpenRight();
	this.rightHand.name = "rightHand";
	this.rightHand.setTransform(119.7,140.95,1.1664,1.1492,0,-7.1512,-8.3879,12.4,18.9);

	this.timeline.addTween(cjs.Tween.get(this.rightHand).wait(1));

	// leftHand
	this.leftHand = new lib.handOpenLeft();
	this.leftHand.name = "leftHand";
	this.leftHand.setTransform(73.3,139.25,1.1234,1.1985,0,16.0712,21.3095,9.4,21);

	this.timeline.addTween(cjs.Tween.get(this.leftHand).wait(1));

	// Leg_right
	this.rightLeg = new lib.rightLeg();
	this.rightLeg.name = "rightLeg";
	this.rightLeg.setTransform(107.3,184.65,1.6999,1.6999,0,0,0,5.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.rightLeg).wait(1));

	// Leg_left
	this.leftLeg = new lib.rightLeg();
	this.leftLeg.name = "leftLeg";
	this.leftLeg.setTransform(85.45,184.8,1.6959,1.6999,0,0,180,5.4,6.8);

	this.timeline.addTween(cjs.Tween.get(this.leftLeg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.man_selection, new cjs.Rectangle(0,0,188.9,196.4), null);


(lib.man_SadWalking = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Hat
	this.hat = new lib.hat();
	this.hat.name = "hat";
	this.hat.setTransform(143.15,35,1.5227,1.5227,0,0,0,62,23);

	this.timeline.addTween(cjs.Tween.get(this.hat).wait(24));

	// Man_face
	this.instance = new lib.mouth_man_sad();
	this.instance.setTransform(131.15,88.45,1,1,-29.9992,0,0,11,5);

	this.instance_1 = new lib.man_face();
	this.instance_1.setTransform(155.3,77,1.5227,1.5227,0,0,0,44.4,37.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(24));

	// Right_hand
	this.rightHand = new lib.rightHand();
	this.rightHand.name = "rightHand";
	this.rightHand.setTransform(135.7,144.75,1.5227,1.5227,0,0,0,17.5,11.9);

	this.timeline.addTween(cjs.Tween.get(this.rightHand).wait(24));

	// frame
	this.frame = new lib.frame();
	this.frame.name = "frame";
	this.frame.setTransform(57.7,180.7,0.6804,0.6804,-1.4754,0,0,88.2,43.9);

	this.timeline.addTween(cjs.Tween.get(this.frame).wait(24));

	// crate
	this.crate = new lib.crate();
	this.crate.name = "crate";
	this.crate.setTransform(42.05,169.2,0.6804,0.6804,-1.4754,0,0,61.2,25.9);

	this.timeline.addTween(cjs.Tween.get(this.crate).wait(24));

	// wheel
	this.spinningWheel = new lib.Spinning_Wheel();
	this.spinningWheel.name = "spinningWheel";
	this.spinningWheel.setTransform(18.3,195.9,0.6031,0.6031,-1.4745,0,0,24.7,24.7);

	this.timeline.addTween(cjs.Tween.get(this.spinningWheel).wait(24));

	// Body
	this.body = new lib.body();
	this.body.name = "body";
	this.body.setTransform(145.1,143.35,1.5227,1.5227,0,0,0,16,25.2);

	this.timeline.addTween(cjs.Tween.get(this.body).wait(24));

	// Left_hand
	this.leftHand = new lib.leftHand();
	this.leftHand.name = "leftHand";
	this.leftHand.setTransform(122.7,139.2,1.5227,1.5227,0,0,0,15.2,12.8);

	this.timeline.addTween(cjs.Tween.get(this.leftHand).wait(24));

	// rightLeg
	this.rightLeg = new lib.rightLeg();
	this.rightLeg.name = "rightLeg";
	this.rightLeg.setTransform(160.05,179.35,1.7068,1.7009,0,0,180,0.1,0.1);
	this.rightLeg.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,0);

	this.timeline.addTween(cjs.Tween.get(this.rightLeg).wait(2).to({skewX:-15.4811,skewY:164.519,x:159.05,y:176.85},0).wait(2).to({skewX:-28.7049,skewY:151.2951,x:157.55,y:173.45},0).wait(2).to({regX:0,skewX:-41.4511,skewY:138.5493,x:154.65,y:171.4},0).wait(2).to({regX:-0.1,regY:0.2,scaleY:1.7008,skewX:-48.1761,skewY:131.8244,x:154.35,y:170.9},0).wait(2).to({scaleX:1.7067,skewX:-53.6922,skewY:126.3089,x:150.8,y:170.4},0).wait(2).to({skewX:-42.4653,skewY:137.5357,x:149.95,y:170.45},0).wait(2).to({regY:0.3,skewX:-31.7026,skewY:148.298,x:143.55,y:174.05},0).wait(2).to({regX:0,regY:0.2,scaleX:1.7068,skewX:12.7779,skewY:192.7785,x:151.9,y:179.9},0).wait(2).to({regY:0.1,scaleY:1.7009,skewX:22.9884,skewY:202.9889,x:150,y:180.7},0).wait(2).to({regX:-0.1,regY:0.2,skewX:1.2774,skewY:181.2782,x:148.55,y:180.9},0).wait(2).to({x:149.55},0).wait(2));

	// leftHLeg
	this.leftLeg = new lib.leftLeg();
	this.leftLeg.name = "leftLeg";
	this.leftLeg.setTransform(138.3,183,1.6948,1.6985,-34.2825,0,0,5.5,5.7);

	this.timeline.addTween(cjs.Tween.get(this.leftLeg).wait(2).to({regX:5.4,scaleX:1.6947,rotation:-42.7588,x:138.65,y:185.1},0).wait(2).to({regX:5.5,rotation:-27.3201,x:138.35,y:185.45},0).wait(2).to({scaleX:1.6948,rotation:17.8869,x:136.75,y:186.5},0).wait(2).to({rotation:7.6807,y:187.05},0).wait(2).to({regY:5.8,scaleX:1.6947,scaleY:1.6984,rotation:0.9631,x:136.7,y:187.7},0).wait(2).to({scaleY:1.6985,rotation:-17.7759,x:140.25,y:190.25},0).wait(2).to({x:147.25},0).wait(2).to({regY:5.7,rotation:-14.6721,x:152,y:185},0).wait(2).to({regY:5.8,scaleY:1.6984,rotation:-30.6123,x:153.05,y:184.65},0).wait(2).to({scaleY:1.6985,rotation:-62.6085,x:153.2,y:185.1},0).wait(2).to({scaleY:1.6984,rotation:-36.1631,x:141.65},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,237.7,211.2);


(lib.man_HappyWalkingWithStones = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Hat
	this.hat = new lib.hat();
	this.hat.name = "hat";
	this.hat.setTransform(143.15,35,1.5227,1.5227,0,0,0,62,23);

	this.timeline.addTween(cjs.Tween.get(this.hat).wait(24));

	// Man_face
	this.instance = new lib.mouth_man_smiling();
	this.instance.setTransform(128.4,84.85,1,1,0,0,0,11,5);

	this.instance_1 = new lib.man_face();
	this.instance_1.setTransform(155.3,77,1.5227,1.5227,0,0,0,44.4,37.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(24));

	// Right_hand
	this.rightHand = new lib.rightHand();
	this.rightHand.name = "rightHand";
	this.rightHand.setTransform(135.7,144.75,1.5227,1.5227,0,0,0,17.5,11.9);

	this.timeline.addTween(cjs.Tween.get(this.rightHand).wait(24));

	// frame
	this.frame = new lib.frame();
	this.frame.name = "frame";
	this.frame.setTransform(57.7,180.45,0.6804,0.6804,-1.4754,0,0,88.2,43.9);

	this.timeline.addTween(cjs.Tween.get(this.frame).wait(24));

	// crate
	this.crate = new lib.crate();
	this.crate.name = "crate";
	this.crate.setTransform(42.05,168.95,0.6804,0.6804,-1.4754,0,0,61.2,25.9);

	this.timeline.addTween(cjs.Tween.get(this.crate).wait(24));

	// wheel
	this.spinningWheel = new lib.Spinning_Wheel();
	this.spinningWheel.name = "spinningWheel";
	this.spinningWheel.setTransform(18.3,195.65,0.6031,0.6031,-1.4745,0,0,24.7,24.7);

	this.timeline.addTween(cjs.Tween.get(this.spinningWheel).wait(24));

	// PileStones
	this.instance_2 = new lib.smal_pile_stones();
	this.instance_2.setTransform(61.05,144.45,0.7175,0.7175,-8.2909,0,0,87.9,25.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24));

	// Body
	this.body = new lib.body();
	this.body.name = "body";
	this.body.setTransform(145.1,143.35,1.5227,1.5227,0,0,0,16,25.2);

	this.timeline.addTween(cjs.Tween.get(this.body).wait(24));

	// Left_hand
	this.leftHand = new lib.leftHand();
	this.leftHand.name = "leftHand";
	this.leftHand.setTransform(122.7,139.2,1.5227,1.5227,0,0,0,15.2,12.8);

	this.timeline.addTween(cjs.Tween.get(this.leftHand).wait(24));

	// rightLeg
	this.rightLeg = new lib.rightLeg();
	this.rightLeg.name = "rightLeg";
	this.rightLeg.setTransform(160.05,179.35,1.7068,1.7009,0,0,180,0.1,0.1);
	this.rightLeg.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,0);

	this.timeline.addTween(cjs.Tween.get(this.rightLeg).wait(2).to({skewX:-15.4811,skewY:164.519,x:159.05,y:176.85},0).wait(2).to({skewX:-28.7049,skewY:151.2951,x:157.55,y:173.45},0).wait(2).to({regX:0,skewX:-41.4511,skewY:138.5493,x:154.65,y:171.4},0).wait(2).to({regX:-0.1,regY:0.2,scaleY:1.7008,skewX:-48.1761,skewY:131.8244,x:154.35,y:170.9},0).wait(2).to({scaleX:1.7067,skewX:-53.6922,skewY:126.3089,x:150.8,y:170.4},0).wait(2).to({skewX:-42.4653,skewY:137.5357,x:149.95,y:170.45},0).wait(2).to({regY:0.3,skewX:-31.7026,skewY:148.298,x:143.55,y:174.05},0).wait(2).to({regX:0,regY:0.2,scaleX:1.7068,skewX:12.7779,skewY:192.7785,x:151.9,y:179.9},0).wait(2).to({regY:0.1,scaleY:1.7009,skewX:22.9884,skewY:202.9889,x:150,y:180.7},0).wait(2).to({regX:-0.1,regY:0.2,skewX:1.2774,skewY:181.2782,x:148.55,y:180.9},0).wait(2).to({x:149.55},0).wait(2));

	// leftHLeg
	this.leftLeg = new lib.leftLeg();
	this.leftLeg.name = "leftLeg";
	this.leftLeg.setTransform(138.3,183,1.6948,1.6985,-34.2825,0,0,5.5,5.7);

	this.timeline.addTween(cjs.Tween.get(this.leftLeg).wait(2).to({regX:5.4,scaleX:1.6947,rotation:-42.7588,x:138.65,y:185.1},0).wait(2).to({regX:5.5,rotation:-27.3201,x:138.35,y:185.45},0).wait(2).to({scaleX:1.6948,rotation:17.8869,x:136.75,y:186.5},0).wait(2).to({rotation:7.6807,y:187.05},0).wait(2).to({regY:5.8,scaleX:1.6947,scaleY:1.6984,rotation:0.9631,x:136.7,y:187.7},0).wait(2).to({scaleY:1.6985,rotation:-17.7759,x:140.25,y:190.25},0).wait(2).to({x:147.25},0).wait(2).to({regY:5.7,rotation:-14.6721,x:152,y:185},0).wait(2).to({regY:5.8,scaleY:1.6984,rotation:-30.6123,x:153.05,y:184.65},0).wait(2).to({scaleY:1.6985,rotation:-62.6085,x:153.2,y:185.1},0).wait(2).to({scaleY:1.6984,rotation:-36.1631,x:141.65},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,237.7,211);


(lib.man_HappyWalking = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Hat
	this.hat = new lib.hat();
	this.hat.name = "hat";
	this.hat.setTransform(143.15,35,1.5227,1.5227,0,0,0,62,23);

	this.timeline.addTween(cjs.Tween.get(this.hat).wait(24));

	// Man_face
	this.instance = new lib.mouth_man_smiling();
	this.instance.setTransform(128.4,84.85,1,1,0,0,0,11,5);

	this.instance_1 = new lib.man_face();
	this.instance_1.setTransform(155.3,77,1.5227,1.5227,0,0,0,44.4,37.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(24));

	// Right_hand
	this.rightHand = new lib.rightHand();
	this.rightHand.name = "rightHand";
	this.rightHand.setTransform(135.7,144.75,1.5227,1.5227,0,0,0,17.5,11.9);

	this.timeline.addTween(cjs.Tween.get(this.rightHand).wait(24));

	// frame
	this.frame = new lib.frame();
	this.frame.name = "frame";
	this.frame.setTransform(57.7,180.7,0.6804,0.6804,-1.4754,0,0,88.2,43.9);

	this.timeline.addTween(cjs.Tween.get(this.frame).wait(24));

	// crate
	this.crate = new lib.crate();
	this.crate.name = "crate";
	this.crate.setTransform(42.05,169.2,0.6804,0.6804,-1.4754,0,0,61.2,25.9);

	this.timeline.addTween(cjs.Tween.get(this.crate).wait(24));

	// wheel
	this.spinningWheel = new lib.Spinning_Wheel();
	this.spinningWheel.name = "spinningWheel";
	this.spinningWheel.setTransform(18.3,195.9,0.6031,0.6031,-1.4745,0,0,24.7,24.7);

	this.timeline.addTween(cjs.Tween.get(this.spinningWheel).wait(24));

	// Body
	this.body = new lib.body();
	this.body.name = "body";
	this.body.setTransform(145.1,143.35,1.5227,1.5227,0,0,0,16,25.2);

	this.timeline.addTween(cjs.Tween.get(this.body).wait(24));

	// Left_hand
	this.leftHand = new lib.leftHand();
	this.leftHand.name = "leftHand";
	this.leftHand.setTransform(122.7,139.2,1.5227,1.5227,0,0,0,15.2,12.8);

	this.timeline.addTween(cjs.Tween.get(this.leftHand).wait(24));

	// rightLeg
	this.rightLeg = new lib.rightLeg();
	this.rightLeg.name = "rightLeg";
	this.rightLeg.setTransform(160.05,179.35,1.7068,1.7009,0,0,180,0.1,0.1);
	this.rightLeg.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,0);

	this.timeline.addTween(cjs.Tween.get(this.rightLeg).wait(2).to({skewX:-15.4811,skewY:164.519,x:159.05,y:176.85},0).wait(2).to({skewX:-28.7049,skewY:151.2951,x:157.55,y:173.45},0).wait(2).to({regX:0,skewX:-41.4511,skewY:138.5493,x:154.65,y:171.4},0).wait(2).to({regX:-0.1,regY:0.2,skewX:-48.1765,skewY:131.824,x:154.35,y:170.9},0).wait(2).to({scaleX:1.7067,scaleY:1.7008,skewX:-53.6918,skewY:126.3089,x:150.8,y:170.4},0).wait(2).to({skewX:-42.4653,skewY:137.5357,x:149.95,y:170.45},0).wait(2).to({regY:0.3,skewX:-31.7026,skewY:148.298,x:143.55,y:174.05},0).wait(2).to({regX:0,regY:0.2,scaleX:1.7068,scaleY:1.7009,skewX:12.7777,skewY:192.7785,x:151.9,y:179.9},0).wait(2).to({regY:0.1,skewX:22.9884,skewY:202.9889,x:150,y:180.7},0).wait(2).to({regX:-0.1,regY:0.2,skewX:1.2774,skewY:181.2781,x:148.55,y:180.9},0).wait(2).to({x:149.55},0).wait(2));

	// leftHLeg
	this.leftLeg = new lib.leftLeg();
	this.leftLeg.name = "leftLeg";
	this.leftLeg.setTransform(138.3,183,1.6948,1.6985,-34.2825,0,0,5.5,5.7);

	this.timeline.addTween(cjs.Tween.get(this.leftLeg).wait(2).to({regX:5.4,scaleX:1.6947,rotation:-42.7588,x:138.65,y:185.1},0).wait(2).to({regX:5.5,rotation:-27.3201,x:138.35,y:185.45},0).wait(2).to({scaleX:1.6948,rotation:17.8869,x:136.75,y:186.5},0).wait(2).to({rotation:7.6807,y:187.05},0).wait(2).to({regY:5.8,scaleX:1.6947,scaleY:1.6984,rotation:0.9631,x:136.7,y:187.7},0).wait(2).to({scaleY:1.6985,rotation:-17.7759,x:140.25,y:190.25},0).wait(2).to({x:147.25},0).wait(2).to({regY:5.7,rotation:-14.6721,x:152,y:185},0).wait(2).to({regY:5.8,scaleY:1.6984,rotation:-30.6123,x:153.05,y:184.65},0).wait(2).to({scaleY:1.6985,rotation:-62.6085,x:153.2,y:185.1},0).wait(2).to({scaleY:1.6984,rotation:-36.1635,x:141.65},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,237.7,211.2);


(lib.FeedbackFailureFace_man = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
		
		this.dispatchEvent("complete")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// Hat
	this.hat = new lib.hat();
	this.hat.name = "hat";
	this.hat.setTransform(143.15,35,1.5227,1.5227,0,0,0,62,23);

	this.timeline.addTween(cjs.Tween.get(this.hat).wait(6).to({x:142.15},0).wait(8).to({x:143.15},0).wait(7).to({x:139.65},0).wait(8).to({x:143.15},0).wait(7).to({x:139.65},0).wait(8).to({x:143.15},0).wait(1));

	// Man_face
	this.instance = new lib.mouth_man_sad();
	this.instance.setTransform(131.15,88.45,1,1,-29.9992,0,0,11,5);

	this.instance_1 = new lib.man_face();
	this.instance_1.setTransform(155.3,77,1.5227,1.5227,0,0,0,44.4,37.1);

	this.instance_2 = new lib.man_face_Sadtotheside();
	this.instance_2.setTransform(155.45,77,1.5225,1.5226,0,0,0,44.5,37.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_2,p:{x:155.45}}]},6).to({state:[{t:this.instance_1},{t:this.instance}]},8).to({state:[{t:this.instance_2,p:{x:155}}]},7).to({state:[{t:this.instance_1},{t:this.instance}]},8).to({state:[{t:this.instance_2,p:{x:155}}]},7).to({state:[{t:this.instance_1},{t:this.instance}]},8).wait(1));

	// ear
	this.instance_3 = new lib.CachedBmp_751();
	this.instance_3.setTransform(79.2,51.25,0.3333,0.3333);

	this.instance_4 = new lib.CachedBmp_752();
	this.instance_4.setTransform(76.7,51.2,0.3333,0.3333);

	this.instance_5 = new lib.CachedBmp_753();
	this.instance_5.setTransform(76.7,51.2,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},6).to({state:[]},8).to({state:[{t:this.instance_4}]},7).to({state:[]},8).to({state:[{t:this.instance_5}]},7).to({state:[]},8).wait(1));

	// Right_hand
	this.rightHand = new lib.rightHand();
	this.rightHand.name = "rightHand";
	this.rightHand.setTransform(135.7,144.75,1.5227,1.5227,0,0,0,17.5,11.9);

	this.timeline.addTween(cjs.Tween.get(this.rightHand).wait(45));

	// frame
	this.frame = new lib.frame();
	this.frame.name = "frame";
	this.frame.setTransform(57.7,180.7,0.6804,0.6804,-1.4754,0,0,88.2,43.9);

	this.timeline.addTween(cjs.Tween.get(this.frame).wait(45));

	// crate
	this.crate = new lib.crate();
	this.crate.name = "crate";
	this.crate.setTransform(42.05,169.2,0.6804,0.6804,-1.4754,0,0,61.2,25.9);

	this.timeline.addTween(cjs.Tween.get(this.crate).wait(45));

	// wheel
	this.spinningWheel = new lib.StaticWheel();
	this.spinningWheel.name = "spinningWheel";
	this.spinningWheel.setTransform(18.3,195.9,0.6031,0.6031,-1.4745,0,0,24.7,24.7);

	this.timeline.addTween(cjs.Tween.get(this.spinningWheel).wait(45));

	// Body
	this.body = new lib.body();
	this.body.name = "body";
	this.body.setTransform(145.1,143.35,1.5227,1.5227,0,0,0,16,25.2);

	this.timeline.addTween(cjs.Tween.get(this.body).wait(45));

	// Left_hand
	this.leftHand = new lib.leftHand();
	this.leftHand.name = "leftHand";
	this.leftHand.setTransform(122.7,139.2,1.5227,1.5227,0,0,0,15.2,12.8);

	this.timeline.addTween(cjs.Tween.get(this.leftHand).wait(45));

	// rightLeg
	this.rightLeg = new lib.rightLeg();
	this.rightLeg.name = "rightLeg";
	this.rightLeg.setTransform(160.05,179.35,1.6957,1.7009,0,0,180,0.1,0.1);
	this.rightLeg.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,0);

	this.timeline.addTween(cjs.Tween.get(this.rightLeg).wait(45));

	// leftHLeg
	this.leftLeg = new lib.leftLeg();
	this.leftLeg.name = "leftLeg";
	this.leftLeg.setTransform(137.05,187.4,1.6922,1.6985,0,0,0,5.4,5.6);

	this.timeline.addTween(cjs.Tween.get(this.leftLeg).wait(45));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,237.7,211.2);


(lib.man = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
		
		this.dispatchEvent("complete")
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1));

	// Men
	this.characterMC0 = new lib.man_selection();
	this.characterMC0.name = "characterMC0";
	this.characterMC0.setTransform(87.8,101,1,1,0,0,0,87.8,101);

	this.characterMC1 = new lib.man_standing();
	this.characterMC1.name = "characterMC1";
	this.characterMC1.setTransform(112.2,105.5,1,1,0,0,0,112.2,105.5);

	this.characterMC2 = new lib.man_HappyWalking();
	this.characterMC2.name = "characterMC2";
	this.characterMC2.setTransform(113.8,104,1,1,0,0,0,113.8,104);

	this.characterMC3 = new lib.FeedbackFailureFace_man();
	this.characterMC3.name = "characterMC3";
	this.characterMC3.setTransform(113.8,106.2,1,1,0,0,0,113.8,106.2);

	this.characterMC4 = new lib.man_SadWalking();
	this.characterMC4.name = "characterMC4";
	this.characterMC4.setTransform(114.6,107.2,1,1,0,0,0,114.6,107.2);

	this.characterMC5 = new lib.PositiveFeedbackJump_man();
	this.characterMC5.name = "characterMC5";
	this.characterMC5.setTransform(119.5,107.35,1,1,0,0,0,79.4,83.9);

	this.characterMC6 = new lib.man_HappyWalkingWithStones();
	this.characterMC6.name = "characterMC6";
	this.characterMC6.setTransform(113,106.9,1,1,0,0,0,113,106.9);

	this.characterMC7 = new lib.wheelbarrow_Dropstones_man();
	this.characterMC7.name = "characterMC7";
	this.characterMC7.setTransform(118.8,105.5,0.9987,1.0183,0,0,0,121.9,-13);

	this.characterMC8 = new lib.Gray_man();
	this.characterMC8.name = "characterMC8";
	this.characterMC8.setTransform(36.1,31.1,0.4015,0.4015,0,0,0,81.4,68.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.characterMC0}]}).to({state:[{t:this.characterMC1}]},1).to({state:[{t:this.characterMC2}]},1).to({state:[{t:this.characterMC3}]},1).to({state:[{t:this.characterMC4}]},1).to({state:[{t:this.characterMC5}]},1).to({state:[{t:this.characterMC6}]},1).to({state:[{t:this.characterMC7}]},1).to({state:[{t:this.characterMC8}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0,245.7,211.2);


(lib.upperMenu = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text_box
	this.gameSubject = new cjs.Text("", "normal 700 14px 'Assistant'", "#5A0800");
	this.gameSubject.name = "gameSubject";
	this.gameSubject.textAlign = "center";
	this.gameSubject.lineHeight = 20;
	this.gameSubject.lineWidth = 133;
	this.gameSubject.parent = this;
	this.gameSubject.setTransform(1192,54.55);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.gameSubject);
	}

	this.timeline.addTween(cjs.Tween.get(this.gameSubject).wait(1));

	// lamps
	this.soundOffBtn = new lib.lampButtonSound();
	this.soundOffBtn.name = "soundOffBtn";
	this.soundOffBtn.setTransform(137.4,53.4,1,1,0,0,0,24.1,39.8);

	this.instance = new lib.upperLamps();
	this.instance.setTransform(1119.2,21.8,0.3504,0.3504,0,0,0,17.4,28.8);

	this.howToPlayBtn = new lib.lampButtonQuestionMark();
	this.howToPlayBtn.name = "howToPlayBtn";
	this.howToPlayBtn.setTransform(193.05,5.15);
	new cjs.ButtonHelper(this.howToPlayBtn, 0, 1, 1);

	this.pauseBtn = new lib.lampButtonPause();
	this.pauseBtn.name = "pauseBtn";
	this.pauseBtn.setTransform(25,14.65);
	new cjs.ButtonHelper(this.pauseBtn, 0, 1, 1);

	this.instance_1 = new lib.subjectLamp();
	this.instance_1.setTransform(1526.25,62.55,1,1,0,0,0,405.5,47.1);

	this.instance_2 = new lib.upperLamps();
	this.instance_2.setTransform(93.75,24.2,0.3504,0.3504,0,0,0,17.4,28.8);

	this.instance_3 = new lib.upperLamps();
	this.instance_3.setTransform(178.5,19.6,0.3504,0.3504,0,0,0,17.4,28.8);

	this.instance_4 = new lib.upperLamps();
	this.instance_4.setTransform(1258.9,23.7,0.3504,0.3504,0,0,0,17.4,28.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.pauseBtn},{t:this.howToPlayBtn},{t:this.instance},{t:this.soundOffBtn}]}).wait(1));

	// rops
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#723500").ss(1,0,0,4).p("EBkHACKQhpAMi2ALQlqAVl8gHQy9gYuYktEhkGAB+QBqANC2ALQFrAXF8gIQS/gZOak9");
	this.shape.setTransform(640.6978,-2.2488);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.upperMenu, new cjs.Rectangle(-1,-21,1283.4,126), null);


(lib.timeIsOverScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("התור עובר לשחקן הבא", "normal 600 35px 'Assistant'", "#FFFFFF");
	this.text.textAlign = "right";
	this.text.lineHeight = 41;
	this.text.lineWidth = 547;
	this.text.parent = this;
	this.text.setTransform(994.3,120.45);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.text_1 = new cjs.Text("נגמר לך הזמן...", "normal 700 40px 'Assistant'", "#FFFFFF");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 47;
	this.text_1.lineWidth = 290;
	this.text_1.parent = this;
	this.text_1.setTransform(1062.15,75.6);
	this.text_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_1);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

	// button
	this.continueGame = new lib.nextTurnFromTimeIsOver();
	this.continueGame.name = "continueGame";
	this.continueGame.setTransform(276.75,620.2,1,1,0,0,0,1.5,0);

	this.timeline.addTween(cjs.Tween.get(this.continueGame).wait(1));

	// character
	this.man = new lib.TimeIsOverAnimation();
	this.man.name = "man";
	this.man.setTransform(547.1,449.45,1.4719,1.4719,0,0,180,123,111.6);

	this.timeline.addTween(cjs.Tween.get(this.man).wait(1));

	// bricks
	this.instance = new lib.CachedBmp_701();
	this.instance.setTransform(196.75,485.75,0.3333,0.3333);

	this.instance_1 = new lib.CachedBmp_700();
	this.instance_1.setTransform(267.95,467.3,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Trees
	this.instance_2 = new lib.CachedBmp_702();
	this.instance_2.setTransform(181.45,324.05,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// framePause (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhCqAxEQkOAAi/i9Qi+i9gBkLMAAAhN9QABkLC+i9QC/i9EOAAMCFWAAAQENAAC/C9QC+C9AAELMAAABN9QAAELi+C9Qi/C9kNAAg");
	mask.setTransform(639.65,361.225);

	// Ground
	this.instance_3 = new lib.CachedBmp_704();
	this.instance_3.setTransform(-18,486.55,0.3333,0.3333);

	this.instance_4 = new lib.CachedBmp_703();
	this.instance_4.setTransform(-2.25,446,0.3333,0.3333);

	var maskedShapeInstanceList = [this.instance_3,this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// Green_mountains
	this.instance_5 = new lib.CachedBmp_706();
	this.instance_5.setTransform(961.05,397.5,0.3333,0.3333);

	this.instance_6 = new lib.CachedBmp_705();
	this.instance_6.setTransform(142.45,300.2,0.3333,0.3333);

	var maskedShapeInstanceList = [this.instance_5,this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// singel_Brick
	this.instance_7 = new lib.CachedBmp_707();
	this.instance_7.setTransform(125.35,230.2,0.3333,0.3333);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// fullWall
	this.instance_8 = new lib.CachedBmp_708();
	this.instance_8.setTransform(128.45,239.3,0.3333,0.3333);

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// clouds
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.208)").s().p("EhelAOhIlYh8IAAnOQCngXCLAJQC/AMBvBIQCeBnCiB2QBRA7AxAmQALgJATgNQAlgaAmgQQB5g0BSA+QBCAxBDA4QA4AnB3AqQCmA7CuASQj/A3lRAaQiyAOigAAQm6AAkqhqgEBROAOdQFdh2CChLQCDhMCMgTQBGgKAsAGQBQiFB1hiQA/g0BMghIAAHxQkzBXp/BIQjHAXjRASIipAOgEAs5AO1IjlgUIEagWQExgWB1AAQBPAADIgXQDlgaEBgrQK2h0HbilQExhrFKieQD2h2DriGIAADCQmzC9p+DpQtME0vrAkQh5AEh2AAQi7AAizgKgEA7yAHUQDUg0BlgvQCchKCBhwIAshuQAchFBdgVQAvgLApADQBphuBSiEQA3hZDAgYQBhgNBVAGIAVgsQAdg3Arg8QCJjBDcikQBfhJB2gkIGXAAIAjALIAANVQjpB6i0BNQmMCqvxChQk/AzlXArQjTAbhUAJIDLgsgEhHHAHHQzmgBpQlGIAAkAQFJDAHdCiQH1CsN3AOQG8AHFXgcQh/AQjNAQQmVAgmCAAIgMAAgEhcLgADQkniLjLiQIAArsIS1AAQDDBPArCAQAwCQAZC4QAMBcADA/IAvgZQA6gdA4gRQCyg3BZBTQCIB/BfCeIAYgNQAegPAegFQBggQA+BSQBjCDAhAhIA3gYQBHgTBTAVQBSAUDWAOQBsAHBaADQnpBCpOARQiaAFiPAAQu3AAm6jQgEA6+AAGQGCibDniBQC7hoE+kAQDPinDpjPIDbAAQpCI/s7FYQkEBrj+BIIjTA1IFdiFgAcMA6QBYgGBTgLQELgjB1hLQCJhZBZglQBWgkAyAIQBCALAsALIAIgTQAMgWATgTQA8g8BuAAQBuAABjAFIBNAGQgBgNAEgUQAHgnAVghQBFhoC5AAQCVAADMADQCTAABTgOQBSgOB5hHQA8gkAsghQiMB5jmCJQnOETnFBSQnGBRowAhQiuALimAEIiCACgEgjlgE7Qq3gumxhnQlJhOmsjBQkmiEktinIH9AAQI+FmQkDlQISBzGfArQkFgClbgYg");
	this.shape.setTransform(637.3912,120.5009,0.7822,0.7822);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// far_mountains
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(153,153,153,0.149)").s().p("EhQtAcaMg09gAaIgu0DIgKgGQinhYCrhSQBkhIBxhOQCIheCZhlQIyl1EwiQQBFgxBjgIIAcgBQBRgIBCAbQBiAoBICAIBWANQBcAYAgA3QAzBYAdAWQAuAiA0g5QBDhGBXAQQBYAPAWBVQAKAiAdhIQAuh3AjhPQCUlKC7goIDXAWQDnAhBVA5QBvBIAiAAQAtAAA1hfQAeg1BHhEQBMhJBVg0QDaiHBwBaIASAOQAUAJAUAMQCZBXCIDEQCbC1AdCXIAcgGQAkgHAegMQBjgoAThGQAWhQBbgUQAngKAgAKQAgAJALAYQALAaAfAZQAfAaAfAKQBTAaALhbQAFgsAohRQAFgMBVidQA6htAkhTQAyh1AZhqQAyjcBpidQBmibBzgmQBbgfBvD1QAeBDA6COQA0B5AiA1QAzBLAyADQAeABAygjQAxghAYADQAmAGAkBSQBZDNAuA3QA7BHBAg+QASgSBvixQB/jLBiiBQFYnAEQA4QEOA3C8EAQAqA8BKB8QA2BcAYASQBFAzEQIDIABACIgBgEIAbAmQAWAVAcAGQAvAJAlgsQAVgaAKggQBokzB6kSQBLiqA/hvQAfg4AQgWQBMh9BehwIABgDIgBABQAzhBBKg6QBjhPBQgJQAsgMAaAQIACABIAFADQBDA1CyDdQA+BNAtBBIBCBgQA0BSAEArIAAADQAbCCBYDzQA5CgAlA/QAaAhAXAEIgCADIACgDQAWgQBFAhQBEAgBQBBQDIChA/CrQAfBWCpBoQCQBXDXBVQC/BMCoArQCmArAigRQABgBBaiiQBli6BfhvQE6l2EDFxQGLIyDKBXQBAAbAkgYQASgMAFgSIA3ANQBEANBJAAQDmABCwh+QAlgaAdgqIAshNQA2hiBRgbQAxgRAUAHQAKAEAXAYQA2A6CZAAQAIAABNAUQBJASAOgMQAWgUAhAOQAHAEA2AlQAoAbAbACQAnACAjgpQAZgeBaANQAtAFAVgCQAigDASgWQB1iNBoA1QAbAOAuAjQAnAaAagMQCJg8CSgpQAugNCKA4QCRA7AYgBQArgCBEgMQAsgHAPAGQATAGAJAlQAHAeAKBfIA/aKI6/gNQACADACACQgEgCgEgDMi8fgBZQBLB6AZA6QhQhShVhig");
	this.shape_1.setTransform(640.9369,262.8224);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// gradient_background2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#C9F1F8","#6FBCFD","#54C8F8","#BBF9FF","#EDB983"],[0,0.18,0.514,0.729,1],-37.4,-1254.7,-36.3,385.7).s().p("EhkXA4WMAAAhwrMDIvAAAMAAABwrg");
	this.shape_2.setTransform(640.175,361.525);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// framePause_svg_copy
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EhDkAyKQkRAAjBjBQjCjBAAkSMAAAhPrQAAkRDCjBQDBjCERAAMCHJAAAQERAADBDCQDCDBAAERMAAABPrQAAESjCDBQjBDBkRAAg");
	this.shape_3.setTransform(639.4,361.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// black_backgroud
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.576)").s().p("Ehj8A4aMAAAhw0MDH5AAAMAAABw0g");
	this.shape_4.setTransform(639.675,361.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.timeIsOverScreen, new cjs.Rectangle(0,0,1279.4,722.1), null);


(lib.playersProperties = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1));

	// css
	this.instance = new lib.an_CSS({'id': '', 'href':'assets/customComponnetCss.css'});

	this.instance.setTransform(143.95,153.85,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8));

	// sound_icon
	this.soundOffBtnSingle = new lib.oneLampButtonSound();
	this.soundOffBtnSingle.name = "soundOffBtnSingle";
	this.soundOffBtnSingle.setTransform(-367,-313.35,1,1,0,0,0,22.6,39.8);

	this.timeline.addTween(cjs.Tween.get(this.soundOffBtnSingle).wait(4).to({skewY:180,x:782.9},0).wait(4));

	// master
	this.instance_1 = new lib.StaticMaster();
	this.instance_1.setTransform(-34.1,-98.5,0.3314,0.3314,0,0,0,51.1,72);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({regX:51.8,regY:71.5,scaleX:0.3313,scaleY:0.3313,x:615.35,y:-99.25},0).wait(4));

	// text_box_compon
	this.inputText = new lib.an_TextInput({'id': 'inputText', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.inputText.name = "inputText";
	this.inputText.setTransform(470.8,-11.3,1.793,1.793,0,0,0,50.1,11);

	this.inputText2 = new lib.an_TextInput({'id': 'inputText2', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.inputText2.name = "inputText2";
	this.inputText2.setTransform(-92.2,-11.6,1.8028,1.7959,0,0,0,49.9,10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.inputText}]}).to({state:[]},1).to({state:[{t:this.inputText2}]},3).to({state:[]},1).wait(3));

	// characthers1
	this.chooseWoman = new lib.woman();
	this.chooseWoman.name = "chooseWoman";
	this.chooseWoman.setTransform(339.9,-24.55,0.8882,0.8882,0,0,180,94.4,95.8);

	this.chooseMan = new lib.man();
	this.chooseMan.name = "chooseMan";
	this.chooseMan.setTransform(591.25,-26.55,0.8882,0.8882,0,0,0,94.5,98.1);

	this.instance_2 = new lib.staticWoman();
	this.instance_2.setTransform(339.9,-24.55,1,1,0,0,0,83.9,85.1);
	this.instance_2.alpha = 0.1992;

	this.instance_3 = new lib.staticMan();
	this.instance_3.setTransform(591.2,-26.5,1,1,0,0,0,83.9,87.2);
	this.instance_3.alpha = 0.1992;

	this.chooseWoman2 = new lib.woman();
	this.chooseWoman2.name = "chooseWoman2";
	this.chooseWoman2.setTransform(-218.6,-30.1,0.8882,0.8882,0,0,180,94.4,95.8);

	this.chooseMan2 = new lib.man();
	this.chooseMan2.name = "chooseMan2";
	this.chooseMan2.setTransform(32.75,-32.1,0.8882,0.8882,0,0,0,94.5,98.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.chooseMan},{t:this.chooseWoman}]},1).to({state:[{t:this.instance_2,p:{x:339.9,y:-24.55}},{t:this.chooseMan}]},1).to({state:[{t:this.chooseWoman},{t:this.instance_3,p:{x:591.2,y:-26.5}}]},1).to({state:[]},1).to({state:[{t:this.chooseMan2},{t:this.chooseWoman2}]},1).to({state:[{t:this.chooseMan2},{t:this.instance_2,p:{x:-218.55,y:-29.85}}]},1).to({state:[{t:this.chooseWoman2},{t:this.instance_3,p:{x:32.7,y:-32.05}}]},1).wait(1));

	// coloeButtons
	this.orangeBtn = new lib.orangeBtn();
	this.orangeBtn.name = "orangeBtn";
	this.orangeBtn.setTransform(661.45,106.6,0.723,0.723,0,0,0,18.1,18.1);

	this.purpleBtn = new lib.purpleBtn();
	this.purpleBtn.name = "purpleBtn";
	this.purpleBtn.setTransform(614.75,106.6,0.723,0.723,0,0,0,18.1,18.1);

	this.blueBtn = new lib.blueBtn();
	this.blueBtn.name = "blueBtn";
	this.blueBtn.setTransform(568.05,106.6,0.723,0.723,0,0,0,18.1,18.1);

	this.greenBtn = new lib.greenBtn();
	this.greenBtn.name = "greenBtn";
	this.greenBtn.setTransform(521.35,106.6,0.723,0.723,0,0,0,18.1,18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.greenBtn,p:{x:521.35,y:106.6}},{t:this.blueBtn,p:{x:568.05,y:106.6}},{t:this.purpleBtn,p:{x:614.75,y:106.6}},{t:this.orangeBtn,p:{x:661.45,y:106.6}}]},2).to({state:[{t:this.greenBtn,p:{x:271.6,y:106.6}},{t:this.blueBtn,p:{x:318.3,y:106.6}},{t:this.purpleBtn,p:{x:365,y:106.6}},{t:this.orangeBtn,p:{x:411.7,y:106.6}}]},1).to({state:[]},1).to({state:[{t:this.greenBtn,p:{x:-36.65,y:103.05}},{t:this.blueBtn,p:{x:10.05,y:103.05}},{t:this.purpleBtn,p:{x:56.75,y:103.05}},{t:this.orangeBtn,p:{x:103.45,y:103.05}}]},2).to({state:[{t:this.greenBtn,p:{x:-285.9,y:102.05}},{t:this.blueBtn,p:{x:-239.2,y:102.05}},{t:this.purpleBtn,p:{x:-192.5,y:102.05}},{t:this.orangeBtn,p:{x:-145.8,y:102.05}}]},1).wait(1));

	// button
	this.nextToChoosingCharacter1 = new lib.nextToChoosingCharacter();
	this.nextToChoosingCharacter1.name = "nextToChoosingCharacter1";
	this.nextToChoosingCharacter1.setTransform(470.6,80.55);

	this.confirmCharacter1Btn = new lib.confirmBtn();
	this.confirmCharacter1Btn.name = "confirmCharacter1Btn";
	this.confirmCharacter1Btn.setTransform(468.45,174.7);

	this.nextToChoosingCharacter2 = new lib.nextToChoosingCharacter();
	this.nextToChoosingCharacter2.name = "nextToChoosingCharacter2";
	this.nextToChoosingCharacter2.setTransform(-92,80.55);

	this.confirmCharacter2Btn = new lib.confirmBtn();
	this.confirmCharacter2Btn.name = "confirmCharacter2Btn";
	this.confirmCharacter2Btn.setTransform(-89.15,170.9,1,1,0,0,0,0,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nextToChoosingCharacter1}]}).to({state:[]},1).to({state:[{t:this.confirmCharacter1Btn,p:{regY:0,x:468.45,y:174.7}}]},1).to({state:[{t:this.nextToChoosingCharacter2}]},2).to({state:[]},1).to({state:[{t:this.confirmCharacter1Btn,p:{regY:-0.2,x:-89.15,y:170.9}},{t:this.confirmCharacter2Btn}]},1).wait(2));

	// player2name
	this.player2LampName = new cjs.Text("", "normal 500 19px 'Assistant'", "#5A0800");
	this.player2LampName.name = "player2LampName";
	this.player2LampName.textAlign = "center";
	this.player2LampName.lineHeight = 24;
	this.player2LampName.lineWidth = 93;
	this.player2LampName.parent = this;
	this.player2LampName.setTransform(-331.1,-262.75);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.player2LampName);
	}
	this.player2LampName._off = true;

	this.timeline.addTween(cjs.Tween.get(this.player2LampName).wait(5).to({_off:false},0).wait(3));

	// text_box2
	this.text = new cjs.Text("שחקן 2", "normal 800 30px 'Assistant'", "#5A0800");
	this.text.textAlign = "center";
	this.text.lineHeight = 35;
	this.text.lineWidth = 216;
	this.text.parent = this;
	this.text.setTransform(-90.5,-210.85);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.text_1 = new cjs.Text("ניתן להזין עד שמונה תווים", "normal 400 13px 'Assistant'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 15;
	this.text_1.lineWidth = 151;
	this.text_1.parent = this;
	this.text_1.setTransform(-92.05,13.85);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("מה שמך?", "normal 400 29px 'Assistant'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 34;
	this.text_2.lineWidth = 216;
	this.text_2.parent = this;
	this.text_2.setTransform(-92.05,-81.8);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_2);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_2},{t:this.text_1},{t:this.text,p:{x:-90.5,y:-210.85,text:"שחקן 2",font:"normal 800 30px 'Assistant'",lineHeight:35.35}}]},4).to({state:[{t:this.text,p:{x:-94.05,y:-211.15,text:"בחר דמות",font:"normal 800 23px 'Assistant'",lineHeight:27.1}}]},1).wait(3));

	// player1Name
	this.player1LampName = new cjs.Text("", "normal 500 19px 'Assistant'", "#5A0800");
	this.player1LampName.name = "player1LampName";
	this.player1LampName.textAlign = "center";
	this.player1LampName.lineHeight = 24;
	this.player1LampName.lineWidth = 93;
	this.player1LampName.parent = this;
	this.player1LampName.setTransform(762.65,-262.75);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.player1LampName);
	}
	this.player1LampName._off = true;

	this.timeline.addTween(cjs.Tween.get(this.player1LampName).wait(1).to({_off:false},0).to({_off:true},3).wait(4));

	// text_box
	this.text_3 = new cjs.Text("שחקן 1", "normal 800 30px 'Assistant'", "#5A0800");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 35;
	this.text_3.lineWidth = 216;
	this.text_3.parent = this;
	this.text_3.setTransform(469.05,-210.85);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_3);
	}

	this.text_4 = new cjs.Text("ניתן להזין עד שמונה תווים", "normal 400 13px 'Assistant'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 15;
	this.text_4.lineWidth = 151;
	this.text_4.parent = this;
	this.text_4.setTransform(470.6,13.85);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_4);
	}

	this.text_5 = new cjs.Text("מה שמך?", "normal 400 29px 'Assistant'");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 34;
	this.text_5.lineWidth = 216;
	this.text_5.parent = this;
	this.text_5.setTransform(470.6,-82.15);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_5);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_5},{t:this.text_4},{t:this.text_3,p:{x:469.05,y:-210.85,text:"שחקן 1",font:"normal 800 30px 'Assistant'",lineHeight:35.35}}]}).to({state:[{t:this.text_3,p:{x:471.05,y:-222.15,text:"בחר דמות",font:"normal 800 23px 'Assistant'",lineHeight:27.1}}]},1).to({state:[]},3).wait(4));

	// transparentRectangle
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.388)").s().p("AsaTdQh5AAhUhVQhVhUAAh5IAA91QAAh4BVhVQBUhVB5AAIY1AAQB4AABVBVQBVBVAAB4IAAd1QAAB5hVBUQhVBVh4AAg");
	this.shape.setTransform(591.5,-14.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.388)").s().p("AsaTdQh4AAhVhVQhVhVAAh4IAA91QAAh4BVhVQBVhVB4AAIY1AAQB4AABVBVQBVBVAAB4IAAd1QAAB4hVBVQhVBVh4AAg");
	this.shape_1.setTransform(341.5,-14.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.388)").s().p("AsaVuQh5AAhUhfQhVheAAiHMAAAghTQAAiGBVhfQBUhfB5AAIY1AAQB4AABVBfQBVBfAACGMAAAAhTQAACHhVBeQhVBfh4AAg");
	this.shape_2.setTransform(591.5,0.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.388)").s().p("AsaTdQh4AAhVhVQhVhVAAh4IAA91QAAh4BVhVQBVhVB4AAIY1AAQB4AABVBVQBVBVAAB4IAAd1QAAB4hVBVQhVBVh4AAg");
	this.shape_3.setTransform(-214.9,-15.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1,p:{scaleY:1,y:-14.3,x:341.5}},{t:this.shape}]},1).to({state:[{t:this.shape_1,p:{scaleY:1,y:-14.3,x:341.5}},{t:this.shape_2}]},1).to({state:[{t:this.shape},{t:this.shape_1,p:{scaleY:1.1165,y:0.1987,x:341.5}}]},1).to({state:[]},1).to({state:[{t:this.shape_3,p:{x:-214.9}},{t:this.shape_1,p:{scaleY:1,y:-15.25,x:35.1}}]},1).to({state:[{t:this.shape_3,p:{x:-214.9}},{t:this.shape_1,p:{scaleY:1.1164,y:-0.9589,x:35.1}}]},1).to({state:[{t:this.shape_3,p:{x:35.1}},{t:this.shape_1,p:{scaleY:1.1164,y:-0.7589,x:-214.9}}]},1).wait(1));

	// lamps
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#AC040D").ss(1.4,1,0,4).p("Ag9j5IAAGlAgej5IAAHQAhdj5IAAGDABej5IAAGlAA/j5IAAHQAAgj5IAAH0AAAj5IAAH0");
	this.shape_4.setTransform(468.05,-123.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#723500").ss(2,0,0,4).p("EBWCgAuQlwAip3AeQzvA90ogVQlRgGlLgKQ3Qgv1ribQm+gxmug9Q5Qji1wl2AToAtIAAND");
	this.shape_5.setTransform(343.617,-320.1829);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFB384","#FFD588","#FFEC8B"],[0,0.482,1],10,-26.5,-18.7,40.7).s().p("AsYFNQg9AAgtgsQgrgsAAg+IAAltQAAg+ArgsQAtgsA9AAIMYAAIMYAAQA/AAArAsQAsAsAAA+IAAFtQAAA+gsAsQgrAsg/AAg");
	this.shape_6.setTransform(469.15,-198.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF995F").s().p("ABSBUIgeAAIggAAIgeAAIggAAIgfAAIggAAIh3AAIAAioIHBAAIAACog");
	this.shape_7.setTransform(469.2,-156.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#723500").ss(2,0,0,4).p("AAAjeIAAG9");
	this.shape_8.setTransform(762.65,-294.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#AC040D").ss(1.4,1,0,4).p("AAziHIAADlAAiiHIAAD8AAAiHIAAEPAARiHIAAEPAghiHIAADlAgyiHIAADSAgQiHIAAD8");
	this.shape_9.setTransform(762.075,-212.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF995F").s().p("AAtAuIgRAAIgRAAIgQAAIgRAAIgRAAIgRAAIhBAAIAAhbIDzAAIAABbg");
	this.shape_10.setTransform(762.675,-231.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FFB384","#FFEC8B"],[0,1],1.6,-14.7,-5.5,21.9).s().p("AlqC1Qg9AAgtgsQgsgsAAg+IAAg9QAAg+AsgsQAtgsA9AAIFqAAIFrAAQA+AAArAsQAjAiAHAtQACANAAAOIAAA9QABA+gtAsQgsAsg9AAg");
	this.shape_11.setTransform(762.65,-253.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#AC040D").ss(0.4,1,0,4).p("Agch+IAADVAgOh+IAADqAArh+IAADVAAAh+IAAD9AAPh+IAAD9Agqh+IAADEAAch+IAADq");
	this.shape_12.setTransform(466.35,-170.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#723500").ss(2,0,0,4).p("EBTIgARQkQASlkARQzvA90ogVQlQgGlMgKQ3Pgv1sibQm+gxmug9Qu8iFtui6QgFgBgFgBQnahlnDhzQh4gfh3ggAWhAtIAAND");
	this.shape_13.setTransform(325.0543,-320.1829);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#FFB384","#FFEC8B"],[0,1],7.3,-20.5,-12.8,27.9).s().p("ABSDGIjjAAInOAAQg9AAgtgsQgrgsAAg+IAAhfQAAg+ArgsQAighAsgIQAOgDAOAAIS+AAQAPAAAOADQAtAIAgAhQAsAsABA+IAABfQgBA+gsAsQgrAsg/AAg");
	this.shape_14.setTransform(469.55,-211.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF995F").s().p("AArAqIgPAAIgNAAIgPAAIgNAAIgPAAIgOAAIhHAAIAAhTIDjAAIAABTg");
	this.shape_15.setTransform(466.35,-187.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#AC040D").ss(1.4,1,0,4).p("AAfj5IAAHQAg+j5IAAHQAhdj5IAAGlABej5IAAGDAA/j5IAAGlAAAj5IAAH0Agej5IAAH0");
	this.shape_16.setTransform(-90.9,-122.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#723500").ss(2,0,0,4).p("AAAmhIAAND");
	this.shape_17.setTransform(-92.05,-272.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF995F").s().p("ABpBVIgfAAIggAAIgfAAIgeAAIggAAIgeAAIiPAAIAAipIHBAAIAACpg");
	this.shape_18.setTransform(-92.05,-155.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#FFB384","#FFD588","#FFEC8B"],[0,0.482,1],-9.9,-26.5,18.8,40.7).s().p("AsYFNQg9AAgtgsQgrgsAAg+IAAltQAAg+ArgsQAsgsA+AAIMYAAIMYAAQA/AAArAsQAsAsABA+IAAFtQgBA+gsAsQgrAsg/AAg");
	this.shape_19.setTransform(-92,-197.775);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#723500").ss(2,0,0,4).p("EhTHAGCQEQASFkARQTvA9UogVQFQgFFMgLQRdgkQkhgQFgggFagmQG+gyGug8QO8iFNui6QAFgBAFgBQHahkHDh0QB4geB3gg");
	this.shape_20.setTransform(89.6964,-360.5388);

	this.instance_4 = new lib.CachedBmp_657();
	this.instance_4.setTransform(-443.3,-408.2,0.3333,0.3333);

	this.instance_5 = new lib.CachedBmp_656();
	this.instance_5.setTransform(-98.1,-206.35,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},3).to({state:[{t:this.instance_5},{t:this.instance_4}]},1).wait(3));

	// pagoda
	this.instance_6 = new lib.CachedBmp_659();
	this.instance_6.setTransform(-263.7,-287.8,0.3333,0.3333);

	this.instance_7 = new lib.CachedBmp_668();
	this.instance_7.setTransform(-263.7,-287.8,0.3333,0.3333);

	this.instance_8 = new lib.CachedBmp_661();
	this.instance_8.setTransform(386.65,-288.75,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7,p:{x:-263.7,y:-287.8}},{t:this.instance_6}]}).to({state:[{t:this.instance_7,p:{x:386.65,y:-288.75}},{t:this.instance_8}]},4).wait(4));

	// birds
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.286)").s().p("ASvS9Qg2gkgkAVQgMAGgIAMIgGAKQgEALgEgGIgCgFIAAAAQgIgSgSgKQglgVg1AkQguAfAJgQQAXgeAggQQA7geAsA0QArg0A7AeQAhAQAXAeQADAFgEAAQgGAAgegUgAIyR9QAOgiAbgZQAxgtA4AmQAbg+BBAMQAkAHAeAWQAIAIgTgEQgOgCgOgFQg9gVgeAeQgOAPgDASQAAANgGgEIgDgFIgBABQgMgPgVgFQgpgKgpAyQgKALgKAKQgIAHgDAAQgCAAABgFgEgoGgEsIgBAAQgFgMgLgGQgXgOgiAYQgeATAGgKQAPgTAUgKQAmgTAcAhQAbghAmATQAUAKAPATQAEAHgcgQQghgYgYAOIgQASQgCAFgCAAQgBAAgBgFgEgt5gIUQgFgKgLgGQgXgOgiAYQgcASAEgJQAPgTAUgKQAmgTAcAhQAbghAmATQAUAKAPATQADAGgLgGIgQgJQgigYgXAOIgQARIgCAEIgCABQgBAAgCgGgEgo2gJFQgHgGgFgHQgagggaAHIgVAMIgDADQgEADABgIQgCgMgJgJQgTgUgnANQgHADgLACQgMADAFgFQATgOAXgFQApgHASAnQAjgZAfAdQARAQAJAWQAAAAAAABQAAABAAAAQAAAAgBABQAAAAAAAAQgCAAgFgFgEAu1gQaQg1glglAVQgLAHgJALIgGALQgEAKgDgGIgCgFIgBABQgHgSgTgLQgkgVg2AlQguAfAJgRQAXgdAhgRQA7gdArA0QAsg0A7AdQAgARAXAdQADAGgDAAQgHAAgegUgEAk5gRaIAFgLQANgcAXgUQAwgtA4AmQAJgUAMgMQAbgbAtAJQAZAFAXANIASALQAIAIgUgEQgOgDgOgFQgRgGgOgBQgOgCgLACQgVADgNAOQgPAPgCASQAAANgGgFIgEgEIAAAAQgMgPgVgFQgpgKgqAyIgLANIgIAIQgIAIgDAAQgDAAACgFg");
	this.shape_21.setTransform(217.2994,-230.7676);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(0,0,0,0.286)").s().p("AajPDQg2gkgkAVQgMAGgIAMIgGAKQgEALgEgGIgCgFIAAAAQgIgSgSgKQglgVg1AkQguAfAJgQQAXgeAggQQA7geAsA0QArg0A7AeQAhAQAXAeQADAFgEAAQgGAAgegUgAQmODQAOgiAbgZQAxgtA4AmQAbg+BBAMQAkAHAeAWQAIAIgTgEQgOgCgOgFQg9gVgeAeQgOAPgDASQAAANgGgEIgDgFIgBABQgMgPgVgFQgpgKgpAyQgKALgKAKQgIAHgDAAQgCAAABgFgEgoGgAyIgBAAQgFgMgLgGQgXgOgiAYQgeATAGgKQAPgTAUgKQAmgTAcAhQAbghAmATQAUAKAPATQAEAHgcgQQghgYgYAOIgQASQgCAFgCAAQgBAAgBgFgEgt5gEaQgGgKgKgGQgXgOgiAYQgcASAEgJQAPgTAUgKQAmgTAcAhQAbghAmATQAUAKAPATQADAGgLgGIgQgJQghgYgYAOIgQARIgCAEIgCABQgBAAgCgGgEgo2gFLQgHgGgFgHQgbgggZAHIgVAMIgDADQgEADABgIQgCgMgJgJQgTgUgnANQgHADgLACQgMADAFgFQATgOAXgFQApgHASAnQAjgZAfAdQARAQAJAWQAAAAAAABQAAABAAAAQAAAAgBABQAAAAAAAAQgCAAgFgFgEAu1gMgQg1glglAVQgLAHgJALIgGALQgDAKgEgGIgCgFIgBABQgHgSgTgLQgkgVg2AlQguAfAJgRQAXgdAhgRQA7gdArA0QAsg0A7AdQAgARAXAdQADAGgDAAQgHAAgegUgEAk5gNgIAFgLQANgcAXgUQAwgtA4AmQAcg/BBANQAjAHAfAWQAIAIgUgEQgOgDgOgFQg9gUgdAeQgPAPgCASQAAANgGgFIgEgEIAAAAQgMgPgVgFQgpgKgqAyIgLANIgIAIQgIAIgDAAQgDAAACgFg");
	this.shape_22.setTransform(139.2994,-255.7676);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.286)").s().p("AqRS9Qg2gkgkAVQgTAKgHASIgBAAIgCAFQgEAGgDgLIgGgKQgJgMgLgGQglgVg1AkQgvAfAKgQQAXgeAggQQA7geAsA0QArg0A7AeQAhAQAXAeQADAFgEAAQgGAAgegUgAkTR7QgKgKgJgLQgqgygpAKQgVAFgMAPIAAgBIgEAFQgGAEAAgNQgCgSgPgPQgdgeg9AVQgOAFgOACQgUAEAIgIQAfgWAjgHQBBgMAcA+QA4gmAwAtQAbAZAOAiQABAFgCAAQgDAAgIgHgEgoGgEsIgBAAQgFgMgLgGQgXgOgiAYQgeATAGgKQAPgTAUgKQAmgTAcAhQAbghAmATQAUAKAPATQAEAHgcgQQghgYgYAOIgQASQgCAFgCAAQgBAAgBgFgEgt5gIUQgGgKgKgGQgXgOgiAYQgcASAEgJQAPgTAUgKQAmgTAcAhQAbghAmATQAUAKAPATQADAGgLgGIgQgJQghgYgYAOIgQARIgCAEIgCABQgBAAgCgGgEgo2gJFQgHgGgFgHQgbgggZAHIgVAMIgDADQgEADABgIQgCgMgJgJQgTgUgnANQgHADgLACQgMADAFgFQATgOAXgFQApgHASAnQAjgZAfAdQARAQAJAWQAAAAAAABQAAABAAAAQAAAAgBABQAAAAAAAAQgCAAgFgFgEAu1gQaQg1glglAVQgLAHgJALIgGALQgDAKgEgGIgCgFIgBABQgHgSgTgLQgkgVg2AlQguAfAJgRQAXgdAhgRQA7gdArA0QAsg0A7AdQAgARAXAdQADAGgDAAQgHAAgegUgEAk5gRaIAFgLQANgcAXgUQAwgtA4AmQAcg/BBANQAjAHAfAWQAIAIgUgEQgOgDgOgFQg9gUgdAeQgPAPgCASQAAANgGgFIgEgEIAAAAQgMgPgVgFQgpgKgqAyIgLANIgIAIQgIAIgDAAQgDAAACgFg");
	this.shape_23.setTransform(139.2994,-230.7676);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,0,0.286)").s().p("Ao5OdQg2gkgkAVQgTAKgHASIgBAAIgCAFQgEAGgDgLIgGgKQgJgMgLgGQglgVg1AkQgvAfAKgQQAXgeAggQQA7geAsA0QArg0A7AeQAhAQAXAeQADAFgEAAQgGAAgegUgAi7NbQgKgKgJgLQgqgygpAKQgVAFgMAPIAAgBIgEAFQgGAEAAgNQgCgSgPgPQgdgeg9AVQgOAFgOACQgUAEAIgIQAfgWAjgHQBBgMAcA+QA4gmAwAtQAbAZAOAiQABAFgCAAQgDAAgIgHgEgpegBMIgBAAQgFgMgLgGQgXgOgiAYQgeATAGgKQAPgTAUgKQAmgTAcAhQAbghAmATQAUAKAPATQAEAHgcgQQghgYgYAOIgQASQgCAFgCAAQgBAAgBgFgEgvRgE0QgGgKgKgGQgXgOgiAYQgcASAEgJQAPgTAUgKQAmgTAcAhQAbghAmATQAUAKAPATQADAGgLgGIgQgJQghgYgYAOIgQARIgCAEIgCABQgBAAgCgGgEgqOgFlQgHgGgFgHQgbgggZAHIgVAMIgDADQgEADABgIQgCgMgJgJQgTgUgnANQgHADgLACQgMADAFgFQATgOAXgFQApgHASAnQAjgZAfAdQARAQAJAWQAAAAAAABQAAABAAAAQAAAAgBABQAAAAAAAAQgCAAgFgFgEAwNgL6Qg1glglAVQgLAHgJALIgGALQgDAKgEgGIgCgFIgBABQgHgSgTgLQgkgVg2AlQguAfAJgRQAXgdAhgRQA7gdArA0QAsg0A7AdQAgARAXAdQADAGgDAAQgHAAgegUgEAmRgM6IAFgLQANgcAXgUQAwgtA4AmQAcg/BBANQAjAHAfAWQAIAIgUgEQgOgDgOgFQg9gUgdAeQgPAPgCASQAAANgGgFIgEgEIAAAAQgMgPgVgFQgpgKgqAyIgLANIgIAIQgIAIgDAAQgDAAACgFg");
	this.shape_24.setTransform(148.0994,-253.1676);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21}]}).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},3).to({state:[{t:this.shape_24}]},1).wait(3));

	// Green_mountains
	this.instance_9 = new lib.CachedBmp_663();
	this.instance_9.setTransform(-417.55,187.65,0.3333,0.3333);

	this.instance_10 = new lib.CachedBmp_670();
	this.instance_10.setTransform(-462.25,131.95,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(8));

	// mask_wall (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgZ2AvIIAAzLIjw5NIDwsDIAA8XIBzlLIDXkSMAqXAAAIEZDbIAAMFIDjFxIjjHnIloTrIFoI8Ii0FxIC0FhICfZeg");
	var mask_graphics_4 = new cjs.Graphics().p("EgCiAvIIAAzLIjv5NIDvsDIAA8XIBzlLIDXkSMAqYAAAIEYDbIAAMFIDjFxIjjHnIlnTrIFnI8IizFxICzFhICfZeg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-162.475,y:226.975}).wait(4).to({graphics:mask_graphics_4,x:338.725,y:226.025}).wait(4));

	// wall
	this.instance_11 = new lib.CachedBmp_664();
	this.instance_11.setTransform(-374.45,-218.2,0.3333,0.3333);

	this.instance_12 = new lib.CachedBmp_665();
	this.instance_12.setTransform(283.15,-217.8,0.3333,0.3333);

	var maskedShapeInstanceList = [this.instance_11,this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).to({state:[{t:this.instance_12}]},4).wait(4));

	// clouds
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.208)").s().p("EhfDAOhIlYh8IAAnOQCngXCLAJQC/AMBvBIQCeBnCiB2QBRA7AxAmQALgJATgNQAlgaAmgQQB5g0BSA+QBCAxBDA4QA4AnB3AqQCmA7CuASQj/A3lRAaQiyAOigAAQm6AAkqhqgEBRsAOJQFdh2CChLQCDhMCMgTQBGgKAsAGQBQiFB1hiQA/g0BMghIAAHxQkzBXp/BIQjHAXjRASIipAOgEAtXAOhIjlgUIEagWQExgWB1AAQBPAADIgXQDlgaEBgrQK2h0HbilQExhrFKieQD2h2DriGIAADCQmzC9p+DpQtME0vrAkQh5AEh2AAQi7AAizgKgEA8QAHAQDUg0BlgvQCchKCBhwIAshuQAchEBdgWQAvgLApADQBphuBSiEQA3hZDAgYQBhgNBVAGIAVgsQAdg3Arg8QCJjBDcikQBfhJB2gkIGXAAIAjALIAANVQjpB6i0BNQmMCqvxChQk/AzlXArQjTAbhUAJIDLgsgEhHlAHHQzmgBpQlGIAAkAQFJDAHdCiQH1CsN3AOQG8AHFXgcQh/AQjNAQQmVAgmCAAIgMAAgEhcpgADQkniLjLiQIAArsIS1AAQDDBPArCAQAwCQAZC4QAMBcADA/IAvgZQA6gdA4gRQCyg3BZBTQCIB/BfCeIAYgNQAegPAegFQBggQA+BSQBjCDAhAhIA3gYQBHgTBTAVQBSAUDWAOQBsAHBaADQnpBCpOARQiaAFiPAAQu3AAm6jQgEA7cgANQGCicDniBQC7hoE+kAQDPinDpjPIDbAAQpCI/s7FYQkEBsj+BHIjTA1IFdiEgAcqAmQBYgGBTgLQELgiB1hMQCJhZBZglQBWgkAyAIQBCALAsALIAIgTQAMgWATgTQA8g8BuAAQBuAABjAFIBNAGQgBgNAEgUQAHgnAVghQBFhoC5AAQCVAADMADQCTAABTgOQBSgOB5hHQA8gkAsghQiMB5jmCJQnOETnFBSQnGBSowAgQiuALimAEIiCACgEgkDgE7Qq3gumxhnQlJhOmsjBQkmiEktinIH9AAQI+FmQkDlQISBzGfArQkFgClbgYg");
	this.shape_25.setTransform(202.4504,-275.9602,1.0109,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(8));

	// far_mountains
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(153,153,153,0.086)").s().p("EhHvAYrMgvDgAXIgpxaIgJgFQiUhNCXhHQDEiKD7ihICPhcQGMj7DmhqQA9grBYgHIAZgBQBJgHA6AXQBXAkBABvIBNALQBRAVAcAvQAuBNAaATQApAdAugxQA7g9BOAOQBOANAUBKQAIAdAbg+QAohoAfhEQCDkfCngjIC/AUQDNAdBMAxQBjA/AdAAQAoAAAwhTQAbguA/g7QBDhABMgtQDBh1BkBOIAQAMQASAIASAKQCIBMB5CrQCJCcAaCEIAZgFQAggGAbgLQBXgjARg8QAUhGBRgSQAjgIAcAIQAdAIAJAVQAKAXAcAVQAbAXAcAJQBKAXAJhPQAEgnAkhGQAEgKBMiJQA0hfAghIQAshlAWhdQAti+BdiJQBbiGBmgiQBRgaBiDUQAbA6A0B8QAuBpAeAuQAtBBAtACQAbABAsgeQAsgdAVADQAiAFAgBIQBPCxAoAxQA1A9A5g2QAQgPBiiaQByixBXhvQExmGDyAxQDwAvCnDfQAmA0BBBsQAwBQAWAQQAsAgCND2QA0BbBCB6IABACIgBgDIAYAhQATASAZAFQAqAHAgglQATgXAJgcQBckKBtjvQBDiTA4hhQAbgxAPgSQBDhtBThiIACgCIgCABQAug4BCgzQBYhEBHgJQAngKAXAOIACABIAEADQA8AuCeDAQA3BDAoA4IA6BTQAvBIAEAlIAAACQAYBxBNDUQAzCLAhA2QAYAdAUADIgCADIACgCQATgOA+AcQA8AcBHA5QCyCLA4CVQAaBFCCBSIAWAOQCABLC/BKQCpBCCWAlQCTAmAegPQACgBBPiNQAuhRAthCQAqg/AqgwQEXlEDmFAQArA9ApA2QEiF/CdBCQA4AXAggVQARgKAEgQIAwAMQA+ALBAAAQDNABCchtQAhgXAaglIAnhDQAwhUBHgYQAsgPASAGQAJAEAVAVQAvAyCIAAQAIAABDASQBCAPAMgLQAUgRAdANQAGADAwAgQAkAXAYACQAjACAfgkQAWgaBQALQAoAFASgCQAegDAQgSQBoh7BdAuQAYAMApAfQAiAWAYgKQB5g0CDgkQAogLB7AwQCBA0AVgBQAmgCA8gKQAogGANAEQARAGAIAgQAGAaAJBSIA4WvI3/gMIAEAFIgHgFMinhgBNQBCBqAXAzQhIhIhMhVg");
	this.shape_26.setTransform(189.8932,112.0045);

	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(8));

	// gradient_background
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#C9F1F8","#C6F0F8","#3EA6FF","#3EC8F8","#BBF9FF","#EDB983"],[0,0.004,0.18,0.514,0.729,1],-33.7,-935.2,-32.8,369).s().p("EhlgA4WMAAAhwrMDLBAAAMAAABwrg");
	this.shape_27.setTransform(207.375,-18.875);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-582.7,-418.9,1545.3000000000002,947.5);


(lib.lotteryAnimation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		var self = this;
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// button
	this.text = new cjs.Text("מי משחק ראשון?", "normal 400 25px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 29;
	this.text.lineWidth = 311;
	this.text.parent = this;
	this.text.setTransform(112.55,318.5);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.startLotteryBtn = new lib.startLotteryBtn();
	this.startLotteryBtn.name = "startLotteryBtn";
	this.startLotteryBtn.setTransform(112.45,384.05,1.3917,1.3917);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.startLotteryBtn},{t:this.text}]}).to({state:[]},1).wait(1));

	// animation
	this.instance = new lib.CachedBmp_458();
	this.instance.setTransform(434.6,489.8,0.3333,0.3333);

	this.instance_1 = new lib.LuckyCookie2();
	this.instance_1.setTransform(471.85,490.75,1.0652,1.0399,0,-15.3977,-14.6026,16.2,14.1);

	this.instance_2 = new lib.LuckyCookie1();
	this.instance_2.setTransform(508.6,491.8,0.9443,0.9313,0,30.6915,29.3136,14.6,15.8);

	this.instance_3 = new lib.plate();
	this.instance_3.setTransform(489.65,497.25,0.9772,0.9505,0,0,0,58.1,10.2);

	this.instance_4 = new lib.stoneStand();
	this.instance_4.setTransform(511.9,566.7,2.0725,2.0158,0,0,0,44.7,31.1);

	this.instance_5 = new lib.Master_face();
	this.instance_5.setTransform(520.1,283.2,3.0487,2.9592,0,0,0,51.3,54.1);

	this.instance_6 = new lib.Master_body();
	this.instance_6.setTransform(488.55,471.6,3.0487,2.9592,0,0,0,17.2,26.4);

	this.instance_7 = new lib.Right_hand_master();
	this.instance_7.setTransform(542.45,456.6,3.0487,2.9592,0,0,0,13,15.2);

	this.instance_8 = new lib.Left_hand_master();
	this.instance_8.setTransform(437.95,456.65,3.0487,2.9592,0,0,0,14.1,14.6);

	this.lotteryMaster = new lib.LotteryMaster();
	this.lotteryMaster.name = "lotteryMaster";
	this.lotteryMaster.setTransform(520.1,376.1,1,1,0,0,0,67.3,272.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.lotteryMaster}]},1).wait(1));

	// lotteryScreen
	this.instance_9 = new lib.pagoda();
	this.instance_9.setTransform(284,9.65,1,1,0,0,0,635.1,617.9);
	this.instance_9.alpha = 0.1992;

	this.instance_10 = new lib.CachedBmp_460();
	this.instance_10.setTransform(-504.55,-1.45,0.3333,0.3333);

	this.instance_11 = new lib.CachedBmp_459();
	this.instance_11.setTransform(-365.85,-13.45,0.3333,0.3333);

	this.instance_12 = new lib.lotteryScreen();
	this.instance_12.setTransform(268.1,40.05,1,1,0,0,0,189.9,-321.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).to({state:[{t:this.instance_12}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-504.5,-608.3,1545.3,1328.9);


(lib.howToPlayScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		
		self.manGIF.characterMC1.body.gotoAndStop(1)
		self.manGIF.characterMC1.hat.gotoAndStop(1)
		self.manGIF.characterMC1.leftHand.gotoAndStop(1)
		self.manGIF.characterMC1.rightHand.gotoAndStop(1)
		self.manGIF.characterMC1.rightLeg.gotoAndStop(1)
		self.manGIF.characterMC1.leftLeg.gotoAndStop(1)
		self.manGIF.characterMC1.crate.gotoAndStop(1)
		self.manGIF.characterMC1.frame.gotoAndStop(1)
		self.manGIF.characterMC1.spinningWheel.wheel.gotoAndStop(1)
		
		self.manGIF.gotoAndStop(1);
		
		self.incorrectAnswer.gotoAndStop(0);
		self.incorrectAnswer2.gotoAndStop(0);
		self.correctAnswer.gotoAndStop(0);
		
		self.manGIF.characterMC2.body.gotoAndStop(1)
		self.manGIF.characterMC2.hat.gotoAndStop(1)
		self.manGIF.characterMC2.leftHand.gotoAndStop(1)
		self.manGIF.characterMC2.rightHand.gotoAndStop(1)
		self.manGIF.characterMC2.rightLeg.gotoAndStop(1)
		self.manGIF.characterMC2.leftLeg.gotoAndStop(1)
		self.manGIF.characterMC2.crate.gotoAndStop(1)
		self.manGIF.characterMC2.frame.gotoAndStop(1)
		self.manGIF.characterMC2.spinningWheel.wheel.gotoAndStop(1)
		
		self.manGIF.characterMC5.body.gotoAndStop(1)
		self.manGIF.characterMC5.hat.gotoAndStop(1)
		self.manGIF.characterMC5.leftHand.gotoAndStop(1)
		self.manGIF.characterMC5.rightHand.gotoAndStop(1)
		self.manGIF.characterMC5.rightLeg.gotoAndStop(1)
		self.manGIF.characterMC5.leftLeg.gotoAndStop(1)
		self.manGIF.characterMC5.crate.gotoAndStop(1)
		self.manGIF.characterMC5.frame.gotoAndStop(1)
		self.manGIF.characterMC5.spinningWheel.wheel.gotoAndStop(1)
	}
	this.frame_33 = function() {
		var self  = this;
		
		self.manGIF.gotoAndStop(2);
	}
	this.frame_49 = function() {
		var self = this;
		
		self.manGIF.gotoAndStop(1);
		
		self.incorrectAnswer.gotoAndStop(1);
	}
	this.frame_72 = function() {
		var self = this;
		
		self.manGIF.gotoAndStop(2);
		
		self.incorrectAnswer.gotoAndStop(0);
	}
	this.frame_88 = function() {
		var self = this;
		
		self.manGIF.gotoAndStop(1);
		
		self.correctAnswer.gotoAndStop(1);
	}
	this.frame_111 = function() {
		var self = this;
		
		self.manGIF.gotoAndStop(2);
		
		self.correctAnswer.gotoAndStop(0);
	}
	this.frame_127 = function() {
		var self = this;
		
		self.manGIF.gotoAndStop(1);
		
		self.incorrectAnswer2.gotoAndStop(1);
	}
	this.frame_150 = function() {
		var self = this;
		
		self.manGIF.gotoAndStop(2);
		
		self.incorrectAnswer2.gotoAndStop(0);
	}
	this.frame_166 = function() {
		var self = this;
		
		self.manGIF.gotoAndStop(1);
		
		self.correctAnswer.gotoAndStop(1);
	}
	this.frame_200 = function() {
		var self = this;
		
		self.manGIF.gotoAndStop(5);
		
		self.correctAnswer.gotoAndStop(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(33).call(this.frame_33).wait(16).call(this.frame_49).wait(23).call(this.frame_72).wait(16).call(this.frame_88).wait(23).call(this.frame_111).wait(16).call(this.frame_127).wait(23).call(this.frame_150).wait(16).call(this.frame_166).wait(34).call(this.frame_200).wait(23));

	// exitBtn
	this.exitBtn = new lib.exitBtn();
	this.exitBtn.name = "exitBtn";
	this.exitBtn.setTransform(309.45,127.85);
	new cjs.ButtonHelper(this.exitBtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.exitBtn).wait(223));

	// text
	this.text = new cjs.Text("מעבר בין תשובות", "normal 500 26px 'Assistant'", "#5B0800");
	this.text.textAlign = "center";
	this.text.lineHeight = 33;
	this.text.lineWidth = 259;
	this.text.parent = this;
	this.text.setTransform(751.85,239.6);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.text_1 = new cjs.Text("space", "normal 700 21px 'Assistant'", "#5B0800");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 29;
	this.text_1.lineWidth = 134;
	this.text_1.parent = this;
	this.text_1.setTransform(522.85,286.55);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("אישור תשובה", "normal 500 26px 'Assistant'", "#5B0800");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 33;
	this.text_2.lineWidth = 222;
	this.text_2.parent = this;
	this.text_2.setTransform(525.65,238.95);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_2);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(223));

	// instructions
	this.instance = new lib.CachedBmp_426();
	this.instance.setTransform(457.25,277.5,0.3333,0.3333);

	this.instance_1 = new lib.CachedBmp_427();
	this.instance_1.setTransform(457.25,276.7,0.3333,0.3333);

	this.instance_2 = new lib.CachedBmp_428();
	this.instance_2.setTransform(457.25,277.5,0.3333,0.3333);

	this.instance_3 = new lib.CachedBmp_429();
	this.instance_3.setTransform(457.25,276.7,0.3333,0.3333);

	this.instance_4 = new lib.CachedBmp_430();
	this.instance_4.setTransform(457.25,277.5,0.3333,0.3333);

	this.instance_5 = new lib.CachedBmp_431();
	this.instance_5.setTransform(457.25,276.7,0.3333,0.3333);

	this.instance_6 = new lib.CachedBmp_432();
	this.instance_6.setTransform(457.25,277.5,0.3333,0.3333);

	this.instance_7 = new lib.CachedBmp_433();
	this.instance_7.setTransform(457.25,276.7,0.3333,0.3333);

	this.instance_8 = new lib.CachedBmp_434();
	this.instance_8.setTransform(457.25,277.5,0.3333,0.3333);

	this.instance_9 = new lib.CachedBmp_435();
	this.instance_9.setTransform(456.6,275.95,0.3333,0.3333);

	this.instance_10 = new lib.CachedBmp_436();
	this.instance_10.setTransform(457.25,277.5,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},19).to({state:[{t:this.instance_2}]},32).to({state:[{t:this.instance_3}]},9).to({state:[{t:this.instance_4}]},30).to({state:[{t:this.instance_5}]},9).to({state:[{t:this.instance_6}]},30).to({state:[{t:this.instance_7}]},9).to({state:[{t:this.instance_8}]},30).to({state:[{t:this.instance_9}]},9).to({state:[{t:this.instance_10}]},24).wait(22));

	// character_correct_copy
	this.manGIF = new lib.man();
	this.manGIF.name = "manGIF";
	this.manGIF.setTransform(908.3,534.2,0.5561,0.5561,0,0,0,94.4,98.2);

	this.timeline.addTween(cjs.Tween.get(this.manGIF).wait(33).to({regX:80,x:753.1,y:533.75},16).wait(23).to({x:607.85},16).wait(23).to({x:450.6},16).wait(23).to({skewY:180,x:450.5},0).to({x:680.95},16).wait(57));

	// instructions_background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.4)").s().p("Egi6AI+QhXAAg+g9Qg9g+AAhXIAArXQAAhXA9g+QA+g9BXAAMBF1AAAQBXAAA+A9QA9A+AABXIAALXQAABXg9A+Qg+A9hXAAg");
	this.shape.setTransform(636.925,280.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(223));

	// title
	this.text_3 = new cjs.Text("איך משחקים?", "normal 400 34px 'Assistant'", "#5A0800");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 42;
	this.text_3.lineWidth = 537;
	this.text_3.parent = this;
	this.text_3.setTransform(636.95,151.85);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_3);
	}

	this.timeline.addTween(cjs.Tween.get(this.text_3).wait(223));

	// correctAnsewr
	this.correctAnswer = new lib.PossibleAnswersCorrectGIF();
	this.correctAnswer.name = "correctAnswer";
	this.correctAnswer.setTransform(644.8,466.35,0.6585,0.6585,0,0,0,74.2,106.2);

	this.timeline.addTween(cjs.Tween.get(this.correctAnswer).wait(223));

	// incorrectAnsewr2
	this.incorrectAnswer2 = new lib.PossibleAnswersGIF();
	this.incorrectAnswer2.name = "incorrectAnswer2";
	this.incorrectAnswer2.setTransform(490.2,465.8,0.6626,0.6626,0,0,0,74.2,106);

	this.timeline.addTween(cjs.Tween.get(this.incorrectAnswer2).wait(223));

	// incorrectAnsewr1
	this.incorrectAnswer = new lib.PossibleAnswersGIF();
	this.incorrectAnswer.name = "incorrectAnswer";
	this.incorrectAnswer.setTransform(799.4,465.8,0.6626,0.6626,0,0,0,74.2,106);

	this.timeline.addTween(cjs.Tween.get(this.incorrectAnswer).wait(223));

	// framePause (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ega2AwUQjLAAiPiQQiQiPAAjLMAAAhBJQAAjLCQiQQCPiPDLAAMBhLAAAQDLAACQCPQCPCQAADLMAAABBJQAADLiPCPQiQCQjLAAg");
	mask.setTransform(499.1,309.175);

	// Ground
	this.instance_11 = new lib.CachedBmp_438();
	this.instance_11.setTransform(122.1,464.05,0.3333,0.3333);

	this.instance_12 = new lib.CachedBmp_437();
	this.instance_12.setTransform(134.55,432.2,0.3333,0.3333);

	var maskedShapeInstanceList = [this.instance_11,this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11}]}).wait(223));

	// Trees
	this.instance_13 = new lib.CachedBmp_439();
	this.instance_13.setTransform(181.45,324.65,0.3333,0.3333);

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(223));

	// Green_mountains
	this.instance_14 = new lib.CachedBmp_441();
	this.instance_14.setTransform(961.05,397.5,0.3333,0.3333);

	this.instance_15 = new lib.CachedBmp_705();
	this.instance_15.setTransform(142.45,300.2,0.3333,0.3333);

	var maskedShapeInstanceList = [this.instance_14,this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14}]}).wait(223));

	// birds
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.286)").s().p("A4nDCQgEgJgJgFQgRgLgbATQgWAOAEgIQAMgOAPgIQAdgOAWAZQAVgZAdAOQAQAIALAOQADAGgVgMQgagTgSALIgNAOQAAABAAAAQgBABAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAgBQAAAAgBgBgA9EAPQgEgIgIgEQgSgKgaARQgWAOAEgHQALgOAPgHQAdgPAWAZQAVgZAdAPQAQAHALAOQADAFgJgEIgMgIQgagRgSAKIgMANIgCADIgBABQgBAAgCgFgA5LgVIgKgLQgUgYgUAFIgQAKIgCACQgDACAAgGQgBgJgHgHQgPgPgeAKIgNAEQgKABAEgDQAPgLARgEQAggFAOAeQAbgTAYAWQANAMAHARQAAAAAAABQAAAAAAABQAAAAAAAAQgBAAAAAAQgBAAgEgDgAdyg4QgqgcgcAQQgIAFgHAJIgFAIQgCAIgDgFIgCgEIAAABQgGgOgOgIQgcgQgqAcQgjAYAHgNQASgXAZgNQAtgWAhAoQAigoAtAWQAZANASAXQABABAAABQABABAAAAQAAABgBAAQAAAAgBAAQgFAAgXgPgAWIhqIADgIQALgVARgQQAmgjArAeQAVgxAyAKQAbAFAYARQAGAHgPgDQgLgCgLgEQgvgQgWAXQgMAMgBANQAAAKgFgDIgDgDIAAAAQgJgMgRgDQgfgIggAmIgJAKIgGAGQgGAGgCAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAgBg");
	this.shape_1.setTransform(639.9581,135.427);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(223));

	// clouds
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.208)").s().p("EhelAOhIlYh8IAAnOQCngXCLAJQC/AMBvBIQCeBnCiB2QBRA7AxAmQALgJATgNQAlgaAmgQQB5g0BSA+QBCAxBDA4QA4AnB3AqQCmA7CuASQj/A3lRAaQiyAOigAAQm6AAkqhqgEBROAOdQFdh2CChLQCDhMCMgTQBGgKAsAGQBQiFB1hiQA/g0BMghIAAHxQkzBXp/BIQjHAXjRASIipAOgEAs5AO1IjlgUIEagWQExgWB1AAQBPAADIgXQDlgaEBgrQK2h0HbilQExhrFKieQD2h2DriGIAADCQmzC9p+DpQtME0vrAkQh5AEh2AAQi7AAizgKgEA7yAHUQDUg0BlgvQCchKCBhwIAshuQAchFBdgVQAvgLApADQBphuBSiEQA3hZDAgYQBhgNBVAGIAVgsQAdg3Arg8QCJjBDcikQBfhJB2gkIGXAAIAjALIAANVQjpB6i0BNQmMCqvxChQk/AzlXArQjTAbhUAJIDLgsgEhHHAHHQzmgBpQlGIAAkAQFJDAHdCiQH1CsN3AOQG8AHFXgcQh/AQjNAQQmVAgmCAAIgMAAgEhcLgADQkniLjLiQIAArsIS1AAQDDBPArCAQAwCQAZC4QAMBcADA/IAvgZQA6gdA4gRQCyg3BZBTQCIB/BfCeIAYgNQAegPAegFQBggQA+BSQBjCDAhAhIA3gYQBHgTBTAVQBSAUDWAOQBsAHBaADQnpBCpOARQiaAFiPAAQu3AAm6jQgEA6+AAGQGCibDniBQC7hoE+kAQDPinDpjPIDbAAQpCI/s7FYQkEBrj+BIIjTA1IFdiFgAcMA6QBYgGBTgLQELgjB1hLQCJhZBZglQBWgkAyAIQBCALAsALIAIgTQAMgWATgTQA8g8BuAAQBuAABjAFIBNAGQgBgNAEgUQAHgnAVghQBFhoC5AAQCVAADMADQCTAABTgOQBSgOB5hHQA8gkAsghQiMB5jmCJQnOETnFBSQnGBRowAhQiuALimAEIiCACgEgjlgE7Qq3gumxhnQlJhOmsjBQkmiEktinIH9AAQI+FmQkDlQISBzGfArQkFgClbgYg");
	this.shape_2.setTransform(637.3912,120.5009,0.7822,0.7822);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(223));

	// far_mountains
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(153,153,153,0.149)").s().p("Eg2QATGMgjmgASIgfteIgHgEQhwg7Byg3QBEgxBMg0QBbg/BohDQF5j7DNhhQAughBCgFIATgBQA3gGAsATQBCAbAwBWIA6AJQA+AQAWAlQAiA7AUAOQAeAXAjgmQAtgvA7ALQA7AKAPA5QAGAXAUgwQAfhRAXg0QBkjfB+gbICRAQQCaAWA6AmQBKAxAXAAQAeAAAkhBQAUgjAwguQAzgxA5giQCThcBLA9IAMAJQAOAGANAIQBnA7BcCEQBnB5AUBmIATgEQAYgFAUgIQBCgbANgvQAPg1A+gOQAagHAVAHQAWAGAHAQQAIARAVARQAUASAVAGQA4ASAHg9QAEgeAbg2QADgIA5hqQAnhKAYg2QAihPARhIQAhiTBHhqQBEhoBOgaQA9gUBKCkQAVAtAnBfQAjBSAXAjQAiAzAhACQAVABAhgYQAhgXAQADQAaAEAYA3QA8CJAfAmQAnAvArgpQANgMBKh3QBViJBDhXQDnksC3AlQC1AlB/CsQAbApAyBTQAkA9ARANQAuAiC3FaIAAABIAAgCIASAaQAPAOATAEQAfAFAZgdQAPgRAGgWQBFjOBTi5QAyhxArhLQAUgmALgPQAzhUA/hLIABgCIgBAAQAjgrAygnQBCg1A2gHQAegIARALIABABIAEACQAtAkB4CVQApAzAeAsIAsBAQAkA4ACAcIAAACQATBYA6CjQAnBrAZArQASAWAPADQAPgLAuAWQAtAWA3AsQCFBrArBzQAVA7ByBFQBhA6CQA6QCAAzBxAcQBwAdAXgLIA9huQBEh8BAhLQDTj7CuD4QEKF5CIA7QAqASAYgQQANgIADgNIAlAJQAuAJAxAAQCbABB2hVQAZgRATgdIAeg0QAkhCA2gSQAhgLAOAFQAGACAQARQAkAmBnAAQAGAAAzAOQAyAMAJgIQAPgOAWAKQAFACAjAZQAcATASABQAaACAYgcQAQgUA9AIQAeAEAOgCQAXgCAMgPQBPheBFAkQATAJAeAYQAbARARgIQBcgpBjgaQAfgKBdAmQBhAnARAAQAcgCAtgHQAegFALADQAMAFAGAZQAFAUAHBAIAqRlIyJgJQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAIgFgDMh+ugA7QAyBRARAnQg1g3g6hCg");
	this.shape_3.setTransform(671.0373,305.3816);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(223));

	// gradient_background2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#C9F1F8","#6FBCFD","#54C8F8","#BBF9FF","#EDB983"],[0,0.18,0.514,0.729,1],-30.3,-726.5,-29.8,28.3).s().p("EhPuAswMAAAhZfMCfdAAAMAAABZfg");
	this.shape_4.setTransform(640.225,361.525);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(223));

	// framePause_copy
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("EgwlAoPQjLAAiQiPQiPiQAAjLMAAAhBJQAAjLCPiQQCQiPDLAAMBhLAAAQDMAACPCPQCPCQAADLMAAABBJQAADLiPCQQiQCPjLAAg");
	this.shape_5.setTransform(637.8621,359.5544,1.0188,1.0326);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(223));

	// black_backgroud
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.576)").s().p("Ehj8A4aMAAAhw0MDH5AAAMAAABw0g");
	this.shape_6.setTransform(639.675,361.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(223));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1279.4,722.1);


(lib.endScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// master
	this.instance = new lib.MasterEndAnimation();
	this.instance.setTransform(580.9,403,1.3895,1.3895);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// confetti
	this.instance_1 = new lib.confetti();
	this.instance_1.setTransform(642.25,135,0.5493,0.5493,0,0,0,320.1,319.9);
	this.instance_1.compositeOperation = "multiply";

	this.instance_2 = new lib.confetti();
	this.instance_2.setTransform(374.1,380,0.5493,0.5493,0,0,0,320.1,320.1);
	this.instance_2.compositeOperation = "multiply";

	this.instance_3 = new lib.confetti();
	this.instance_3.setTransform(880.65,389.45,0.5493,0.5493,0,0,0,320.1,320.1);
	this.instance_3.compositeOperation = "multiply";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// buttons
	this.endGameBtn = new lib.endGameBtn();
	this.endGameBtn.name = "endGameBtn";
	this.endGameBtn.setTransform(547.9,669,1,1,0,0,0,0,-0.2);

	this.playAgainBtn = new lib.playAgainBtn();
	this.playAgainBtn.name = "playAgainBtn";
	this.playAgainBtn.setTransform(739.9,669,1,1,0,0,0,0,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.playAgainBtn},{t:this.endGameBtn}]}).wait(1));

	// winnwe_sign
	this.winnerText = new cjs.Text("", "normal 700 22px 'Assistant'");
	this.winnerText.name = "winnerText";
	this.winnerText.textAlign = "center";
	this.winnerText.lineHeight = 29;
	this.winnerText.lineWidth = 287;
	this.winnerText.parent = this;
	this.winnerText.setTransform(643.15,75.5);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.winnerText);
	}

	this.text = new cjs.Text("כל הכבוד!", "normal 400 16px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 287;
	this.text.parent = this;
	this.text.setTransform(643.15,52.55);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.instance_4 = new lib.CachedBmp_420();
	this.instance_4.setTransform(493.05,15.15,0.3333,0.3333);

	this.instance_5 = new lib.CachedBmp_419();
	this.instance_5.setTransform(266.5,-24.4,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.text},{t:this.winnerText}]}).wait(1));

	// text_box
	this.player2Time = new cjs.Text("", "normal 400 23px 'Assistant'");
	this.player2Time.name = "player2Time";
	this.player2Time.textAlign = "right";
	this.player2Time.lineHeight = 29;
	this.player2Time.lineWidth = 52;
	this.player2Time.parent = this;
	this.player2Time.setTransform(320,312.35);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.player2Time);
	}

	this.player2Errors = new cjs.Text("", "normal 400 23px 'Assistant'");
	this.player2Errors.name = "player2Errors";
	this.player2Errors.textAlign = "right";
	this.player2Errors.lineHeight = 29;
	this.player2Errors.lineWidth = 52;
	this.player2Errors.parent = this;
	this.player2Errors.setTransform(269.9,264.7);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.player2Errors);
	}

	this.player1Time = new cjs.Text("", "normal 400 23px 'Assistant'");
	this.player1Time.name = "player1Time";
	this.player1Time.textAlign = "right";
	this.player1Time.lineHeight = 29;
	this.player1Time.lineWidth = 52;
	this.player1Time.parent = this;
	this.player1Time.setTransform(1112.95,312.35);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.player1Time);
	}

	this.player1Errors = new cjs.Text("", "normal 400 23px 'Assistant'");
	this.player1Errors.name = "player1Errors";
	this.player1Errors.textAlign = "right";
	this.player1Errors.lineHeight = 29;
	this.player1Errors.lineWidth = 52;
	this.player1Errors.parent = this;
	this.player1Errors.setTransform(1062.85,264.7);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.player1Errors);
	}

	this.player2Grade = new cjs.Text("", "normal 400 23px 'Assistant'");
	this.player2Grade.name = "player2Grade";
	this.player2Grade.textAlign = "right";
	this.player2Grade.lineHeight = 29;
	this.player2Grade.lineWidth = 52;
	this.player2Grade.parent = this;
	this.player2Grade.setTransform(356.2,217.05);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.player2Grade);
	}

	this.player1Grade = new cjs.Text("", "normal 400 23px 'Assistant'");
	this.player1Grade.name = "player1Grade";
	this.player1Grade.textAlign = "right";
	this.player1Grade.lineHeight = 29;
	this.player1Grade.lineWidth = 52;
	this.player1Grade.parent = this;
	this.player1Grade.setTransform(1149.6,217.05);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.player1Grade);
	}

	this.player2Name = new cjs.Text("", "normal 600 36px 'Assistant'", "#5A0800");
	this.player2Name.name = "player2Name";
	this.player2Name.textAlign = "center";
	this.player2Name.lineHeight = 46;
	this.player2Name.lineWidth = 259;
	this.player2Name.parent = this;
	this.player2Name.setTransform(240.35,143);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.player2Name);
	}

	this.player1Name = new cjs.Text("", "normal 600 36px 'Assistant'", "#5A0800");
	this.player1Name.name = "player1Name";
	this.player1Name.textAlign = "center";
	this.player1Name.lineHeight = 46;
	this.player1Name.lineWidth = 259;
	this.player1Name.parent = this;
	this.player1Name.setTransform(1028.15,143);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.player1Name);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.player1Name},{t:this.player2Name},{t:this.player1Grade},{t:this.player2Grade},{t:this.player1Errors},{t:this.player1Time},{t:this.player2Errors},{t:this.player2Time}]}).wait(1));

	// static_text_box
	this.text_1 = new cjs.Text("זמן כולל:", "normal 400 23px 'Assistant'", "#5A0800");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 27;
	this.text_1.lineWidth = 96;
	this.text_1.parent = this;
	this.text_1.setTransform(400.2,312.35);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("מספר שגיאות:", "normal 400 23px 'Assistant'", "#5A0800");
	this.text_2.textAlign = "right";
	this.text_2.lineHeight = 27;
	this.text_2.lineWidth = 152;
	this.text_2.parent = this;
	this.text_2.setTransform(400.2,264.7);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_2);
	}

	this.text_3 = new cjs.Text("ציון:", "normal 400 23px 'Assistant'", "#5A0800");
	this.text_3.textAlign = "right";
	this.text_3.lineHeight = 27;
	this.text_3.lineWidth = 52;
	this.text_3.parent = this;
	this.text_3.setTransform(400.2,217.05);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_3);
	}

	this.text_4 = new cjs.Text("זמן כולל:", "normal 400 23px 'Assistant'", "#5A0800");
	this.text_4.textAlign = "right";
	this.text_4.lineHeight = 27;
	this.text_4.lineWidth = 96;
	this.text_4.parent = this;
	this.text_4.setTransform(1193.6,312.35);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_4);
	}

	this.text_5 = new cjs.Text("מספר שגיאות:", "normal 400 23px 'Assistant'", "#5A0800");
	this.text_5.textAlign = "right";
	this.text_5.lineHeight = 27;
	this.text_5.lineWidth = 152;
	this.text_5.parent = this;
	this.text_5.setTransform(1193.6,264.7);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_5);
	}

	this.text_6 = new cjs.Text("ציון:", "normal 400 23px 'Assistant'", "#5A0800");
	this.text_6.textAlign = "right";
	this.text_6.lineHeight = 27;
	this.text_6.lineWidth = 52;
	this.text_6.parent = this;
	this.text_6.setTransform(1193.6,217.05);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_6);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1}]}).wait(1));

	// background_text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.376)").s().p("A8cUeQidAAhvhvQhwhvAAieIAA9DQAAieBwhvQBvhvCdAAMA45AAAQCdAABvBvQBwBvgBCeIAAdDQABCehwBvQhvBvidAAg");
	this.shape.setTransform(1038.2823,246.475,0.8276,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.376)").s().p("A8cUeQidAAhvhvQhwhvAAieIAA9DQAAieBwhvQBvhvCdAAMA45AAAQCdAABvBvQBwBvgBCeIAAdDQABCehwBvQhvBvidAAg");
	this.shape_1.setTransform(246.1823,246.475,0.8276,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// birds
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.286)").s().p("EhA9ALvIgBAAQgIgTgTgKQglgXg3AnQgwAeAKgPQAXgeAigRQA8gfAuA2QAsg2A9AfQAhARAYAeQAHAMgtgbQg3gngmAXIgaAdQgDAIgDAAQgCAAgCgIgEhKWAF3QgIgQgRgKQgmgWg3AnQguAcAIgOQAXgeAhgRQA9gfAtA2QAtg2A9AfQAhARAXAeQAGAKgSgJIgagPQg2gngmAWIgaAdIgDAFQgBABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAQgDAAgDgKgEhCKAEpQgMgLgIgLQgqg0grALIgiAVIgEADQgGAFABgNQgDgSgPgPQgfggg/AUQgLAGgRADQgVAEAJgIQAfgXAlgHQBCgMAdA/QA6goAyAvQAaAZAPAkQABAFgCAAQgDAAgIgHgEBL2gHPQhXg7g7AiQgTALgOASIgJARQgGARgGgJIgEgJIAAABQgNgdgegRQg7gihWA7QhLAzAPgbQAlgwA1gbQBfgwBHBUQBGhUBgAwQA0AbAmAwQAFAJgGAAQgKAAgxghgEA7vgI2IAIgSQAWgtAkghQBPhJBaA+QAOggAUgUQAsgrBIAOQAqAHAmAWIAbASQANANgggHQgWgEgXgIQgbgJgYgDQgWgCgSACQghAFgWAWQgYAZgEAdQAAAVgKgIIgFgHIgBABQgUgYgigIQhCgQhDBQIgSAVQgGAHgIAHQgNALgEAAQgEAAACgHg");
	this.shape_2.setTransform(614.2219,113.0498);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// pagoda
	this.instance_6 = new lib.CachedBmp_421();
	this.instance_6.setTransform(456.7,158.7,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// single_brick
	this.instance_7 = new lib.CachedBmp_422();
	this.instance_7.setTransform(4.35,520,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// ground_copy
	this.instance_8 = new lib.floorGradient();
	this.instance_8.setTransform(644.6,655.45,1,1,0,0,0,647.7,111.7);
	this.instance_8.alpha = 0.4805;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// ground (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhlCA78IAA8+IBDgOQBUgQCLgVICQgVIM8hcIAogEUAeFgCwAwmgAhUAqAgAdAiwADIQK2A+I1BPQD/AjCOAZIAdAFIAAc+g");
	mask.setTransform(644.65,383.6);

	// floor_svg
	this.instance_9 = new lib.CachedBmp_423();
	this.instance_9.setTransform(-25.65,544.05,0.3333,0.3333);

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// ground_copy
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5A2E03").s().p("EhlMARdIAA89QAcgGApgIQBUgQCKgVICQgVIM+hcIAogEUAeIgCvAwpgAiUAqFgAdAizADIQK3A/I2BOQEAAjCNAZIAdAFIAAc9g");
	this.shape_3.setTransform(644.6,655.4664);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// bricks
	this.instance_10 = new lib.CachedBmp_424();
	this.instance_10.setTransform(-3.05,528.3,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// clouds
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.208)").s().p("EhfDAOhIlYh8IAAnOQCngXCLAJQC/AMBvBIQCeBnCiB2QBRA7AxAmQALgJATgNQAlgaAmgQQB5g0BSA+QBCAxBDA4QA4AnB3AqQCmA7CuASQj/A3lRAaQiyAOigAAQm6AAkqhqgEBRsAOJQFdh2CChLQCDhMCMgTQBGgKAsAGQBQiFB1hiQA/g0BMghIAAHxQkzBXp/BIQjHAXjRASIipAOgEAtXAOhIjlgUIEagWQExgWB1AAQBPAADIgXQDlgaEBgrQK2h0HbilQExhrFKieQD2h2DriGIAADCQmzC9p+DpQtME0vrAkQh5AEh2AAQi7AAizgKgEA8QAHAQDUg0BlgvQCchKCBhwIAshuQAchEBdgWQAvgLApADQBphuBSiEQA3hZDAgYQBhgNBVAGIAVgsQAdg3Arg8QCJjBDcikQBfhJB2gkIGXAAIAjALIAANVQjpB6i0BNQmMCqvxChQk/AzlXArQjTAbhUAJIDLgsgEhHlAHHQzmgBpQlGIAAkAQFJDAHdCiQH1CsN3AOQG8AHFXgcQh/AQjNAQQmVAgmCAAIgMAAgEhcpgADQkniLjLiQIAArsIS1AAQDDBPArCAQAwCQAZC4QAMBcADA/IAvgZQA6gdA4gRQCyg3BZBTQCIB/BfCeIAYgNQAegPAegFQBggQA+BSQBjCDAhAhIA3gYQBHgTBTAVQBSAUDWAOQBsAHBaADQnpBCpOARQiaAFiPAAQu3AAm6jQgEA7cgANQGCicDniBQC7hoE+kAQDPinDpjPIDbAAQpCI/s7FYQkEBsj+BHIjTA1IFdiEgAcqAmQBYgGBTgLQELgiB1hMQCJhZBZglQBWgkAyAIQBCALAsALIAIgTQAMgWATgTQA8g8BuAAQBuAABjAFIBNAGQgBgNAEgUQAHgnAVghQBFhoC5AAQCVAADMADQCTAABTgOQBSgOB5hHQA8gkAsghQiMB5jmCJQnOETnFBSQnGBSowAgQiuALimAEIiCACgEgkDgE7Qq3gumxhnQlJhOmsjBQkmiEktinIH9AAQI+FmQkDlQISBzGfArQkFgClbgYg");
	this.shape_4.setTransform(642.6224,101.4452,1.0031,0.9924);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// far_mountains
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(153,153,153,0.11)").s().p("EhDSAWaMgkZgASIAA2LIAJgGICAhUQCUhhB7hIQCnhjB2g4QA2gnBOgHIAXAAQBAgHA0AWQBNAgA5BkIBDALQBJATAZArQApBFAXASQAkAaApgsQA1g4BFANQBFAMASBDQAHAaAXg4QAlheAbg+QB0kFCVgfICqARQC2AaBDAtQBYA5AaAAQAkAAAqhLQAYgpA3g2QA9g6BDgpQCrhrBZBHIAOAMQAQAHARAJQB4BEBrCcQB6COAXB3IAXgEQAcgGAYgJQBOggAPg3QARg/BJgQQAegIAaAIQAZAHAJATQAIAUAYAUQAZAUAZAJQBCAUAHhHQAEgkAghAIBIiFQAthWAchBQAohcAUhVQAoisBRh8QBRh6BbgfQBIgYBXDBQAZA0AtBxQApBgAbApQAoA7AoACQAXABAogbQAngaATACQAeAFAcBBQBHChAjAsQAwA4AygxQAPgOBWiMQBlihBOhlQEOlhDYAsQDUArCVDKQAiAvA6BiQArBJATAOQAoAeB8DfQAuBTA7BuIAAACIAAgDIAVAeQARARAWAFQAlAGAdgiQARgUAJgaQBRjyBhjYQA7iGAyhYQAYgtANgRQA7hjBLhYIABgBIgBAAQAogzA7guQBOg+A/gIQAjgKAVAOIABAAQAAABAAAAQABABAAAAQABAAAAABQABAAAAAAQA2AqCMCuQAxA9AjAzIA1BMQApBBADAiIAAABQAWBnBFDAQAtB+AdAyQAVAaASADIgDACIADgCQARgMA2AaQA2AZA/AzQCeB/AyCHQAXA/B0BKIATANQBxBECrBEQCWA7CFAiQCCAiAcgOQABAABHiAQAphKAng8QAmg5AlgrQD3knDMEjQAnA3AlAxQEBFcCLA8QAyAVAdgTQAPgJADgPIAsALQA2AKA4AAQC3ABCKhjQAegVAXghIAjg9QAqhNA/gWQAngNARAGQAIADASATQAqAtB5AAQAHAAA8ARQA6ANALgJQARgQAaAMQAGACArAdQAfAWAWACQAfABAbggQAUgYBHAKQAjAEAQgCQAcgCAOgRQBbhvBTAqQAVALAkAbQAfAVAVgKQBsgvB0ggQAkgKBtArQByAvAUgBQAhgBA2gKQAigFANAEQAPAGAGAdQAGAXAIBLIAxUpI1SgLQAAADACACQgEgCgCgDMiU0gBFQA7BfAUAvQg/hBhEhOg");
	this.shape_5.setTransform(661.45,381.9122);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// gradient_background
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#C9F1F8","#3EA6FF","#3EC8F8","#BBF9FF","#EDB983"],[0,0.18,0.514,0.729,1],-33.7,-935.2,-32.8,369).s().p("EhlgA4WMAAAhwrMDLBAAAMAAABwrg");
	this.shape_6.setTransform(647.525,360.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.endScreen, new cjs.Rectangle(-3.1,-40.7,1328.1999999999998,807.9000000000001), null);


// stage content:
(lib._2Chineese = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		// -----------------------------------------------
		//-------- הגדרות ופונקציות ראשוניות -------------
		// -----------------------------------------------
		
		// -----  קריאה לפונקציה שמכניסה את קטעי הסאונד למחשק
		init_sounds();
		// טעינת סאונד לתוך הקוד
		function init_sounds()
		{
		    createjs.Sound.registerSound("sounds/mainMusic.mp3", "mainMusic");
		    createjs.Sound.registerSound("sounds/failureManSound.mp3", "failureManSound");
		    createjs.Sound.registerSound("sounds/failure.mp3", "failureSound");
		    createjs.Sound.registerSound("sounds/success.mp3", "successManSound");
		    createjs.Sound.registerSound("sounds/successManSound.mp3", "successSound");
		    createjs.Sound.registerSound("sounds/clickSound.mp3", "clickSound");
		    createjs.Sound.registerSound("sounds/startScene.mp3", "startScene");
		    createjs.Sound.registerSound("sounds/lotterySound.mp3", "lotterySound");
		}
		
		
		// -- קריאה למסך והגדרת כיוון כתיבה של המשחק
		var self = this;
		canvas.style.direction = "rtl";
		
		// ------- GOOGLE FONT -----
		WebFontConfig = {
			google: {
				families: ['Assistant'] //כאן בחרו את הפונט
			}
		};
		
		(function () {
			var wf = document.createElement('script');
			wf.src = ('https' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
			wf.type = 'text/javascript';
			wf.async = true;
			var s = document.getElementsByTagName('script')[0];
		
			s.parentNode.insertBefore(wf, s);
		})();
		
		
		// -----------------------------------------------
		//--------------- מערכי המשחקים ------------------
		// -----------------------------------------------
		
		//----- פתיחה של מערכי משחק
		var gamesNames = ["סין - מדינה מיוחדת","מדעים לכיתה ב'"]
		var gamesArray = 
		[
		    [
		        [["אילו מהמקומות הבאים אינו נמצא בסין?",lib.chinaFlag],["העיר האסורה", false],[lib.taracota,false],[lib.mountFuji,true],[lib.leshan, false],["בייג׳ין", false],["שנגחאי", false]],
		        [["כמה אנשים חיים בסין?",lib.chinesePeople],["1.4 מילארד", true],["25 מיליון",false],["מיליארד",false],["2.2 מיליארד", false],["250 מיליון", false],["30.2 מיליון", false]],
		        [["סין ידועה באוכלוסייתה הגדולה, ושנגחאי היא הדוגמה הטובה ביותר לכך. כמה אנשים חיים בשנגחאי?"],["כ-25 מיליון",true],["כ-200 אלף",false],["כ-2 מיליון",false]],
		        [["מהו אורך החומה הסינית?"],["19.57 ק״מ", false],["24.972 ק״מ",false],["21.196 ק״מ",true],["31.29 ק״מ",false]],
		        [["שני ההרים הגבוהים בעולם נמצאים בחלקם בסין"],["לא נכון", false],["נכון",true]],
		        [["מהו השם המלא והרשמי של סין?"],["הרפובליקה העממית של סין", true],["ממלכת סין", false],["אימפריית סין", false],["ארצות הברית של סין", false]],
		        [["מי אני? חיה חמודה שנפוצה באיזור סצ'ואן שבסין. יש לי פרווה בצבע חום אדמדם ועל אף שמי, אני לא דוב אמיתי"],["אני דוב חום יונק, גדול ואחד מהטורפים הגדולים ביותר בעולם", false],["אני פנדה אדומה, יונק קטן ואני לא קרובה של הפנדה הענקית",true],["אני דוב שחור אסייתי, אני יונק גדול שאוכל הכל", false]],
		        [["מהו המאכל שנמצא כמעט בכל ארוחה סינית?"],[lib.rice, true],["נודלס", false],[lib.cheese, false],["סושי", false],["סמוסה", false],[lib.dimSum, false]],
		        [["מאיזה חומר עשויים הפסלים שבתמונה?",lib.taracota],["טרקוטה",true],["חימר",false],["בוץ",false],["פלדה",false]],
		        [["דים סאם הוא מאכל סיני שמוגש ככיסונים מאודים או מטוגנים. לרוב אוכלים אותו בבוקר, וניתן למצוא אותו בבתי תה",lib.dimSum],["נכון", true],["לא נכון", false]],
		        [["מהי עיר הבירה של סין?"],["שנגחאי", false],["בייג׳ין", true],["ווהאן", false]],
		        [["ישנם הרבה אתרי מורשת של אונסק״ו הנמתאים בסין. איזה מהם הוא אחד משבעת פלאי תבל?"],["העיר האסורה", false],["מקדש השמיים", false],["טירת הקיץ", false],["החומה הסינית", true]],
		        [["מי אני? אני נמצאת בביג׳יין, הייתי ארמונם של קיסרי סין במשך שנים רבות, ולקח 18 שנה לבנות אותי?"],["העיר האסורה", true],[lib.theGoosePagoda, false],["מגדל הפעמון", false],[lib.chineseWall, false],[lib.templeOfHeaven, false]],
		        [["מהי החיה הלאומית של סין?"],[lib.turtle, false],[lib.dragon,false],[lib.pandaBear,true],[lib.rat, false],[lib.snake, false]]
		    ],
		    [
		        [["איזה משפט מתאים לעונות הסתיו?"],["כל העלים הכתומים נשרו מן העצים",true],["מאוד חם בחוץ, השמש חזקה ומסנוורת",false],["לא כל כך קר והרבה פרחים פורחים",false],["לבשתי מעיל חם וגרבתי גרבי צמר",false]],
		        [["איזו פעילות עושים בקיץ?"],["לובשים בגד ים",true],["קופצים בשלולית",false],["גולשים סקי",false],["לובשים מעיל", false]],
		        [["איזו עונה מגיעה אחרי הקיץ?"],["סתיו",true],["חורף",false],["אביב",false]],
		        [["מי אני? אני צמח גבוה עם פרחים לבנים ואני מבשר את בוא הסתיו"],["חצב", true],["כלנית",false],[lib.sunflower,false],[lib.groundsel, false],["נרקיס",false]],
		        [["איזו ציפור מסמלת את בוא הגשם?"],[lib.motacilla,true],[lib.passer,false],[lib.pelecanus,false],[lib.upupa,false],[lib.alcedinidae,false],[lib.psittacula,false]],
		        [["מהם עלי כותרת?"],["עלים צבעוניים שתפקידם הוא למשוך חרקים אל הפרח", true],["עלים הנמצאים באדמה ודרכם הצמח מקבל מים",false],["גרגירי אבקה באמצעותם הצמח יכול להתרבות",false]],
		        [["איזה איבר מאפשר לנו לשמוע את ציוץ הציפורים?"],[lib.ear, true],[lib.eye,false],["פה",false],["ידיים",false]],
		        [["חריף נחשב טעם",lib.HotPepper],["לא נכון", true],["נכון",false]],
		        [["איך קוראים לגשם הראשון?"],["היורה", true],["טל",false],["מבול",false]],
		        [["מהי המילה הנרדפת לשמש",lib.sun],["חמה", true],["סהר",false],["ירח",false],["לבנה",false]],
		        [["כמה ימים יש בשנה?"],["365 ימים", true],["452 ימים",false],["600 ימים",false],["522 ימים", false],["250 ימים",false],["300 ימים",false]],
		        [["איזה מהצמחים הבאים משמש להכנת בגדים?"],["כותנה", true],["כרכום",false],["אקליפטוס",false],["גפן",false]],
		        [["איך קוראים לצאצא של הציפור?"],["גוזל", true],["כפיר",false],["אפרוח",false],["סייח", false],["עופר",false]],
		        [["מה משמיע רעש?"],["רעם", true],["ברק",false]],
		        [["איזו חיה מחליפה צבעים?"],["זיקית", true],["ג׳ירפה",false],["יען",false],["דבורה",false]],
		        [["מי מהחיות הבאות מכינה את הדבש?"],["דבורה", true],["גירית",false],["דוב",false]],
		        [["מי אני? אני חיה קטנה שנחשבת חרוצה, ואפשר למצוא אותי גם בבית וגם בגינה אבל הקן שלי נמצא לרוב מתחת לאדמה"],["נמלה",true],["זבוב",false],["יתוש",false],["עכביש",false]],
		        [["איזו תמונה מייצגת את עונת האביב?"],[lib.spring, true],[lib.autumn, false],[lib.summer,false],[lib.winter, false]]
		    ]
		]
		
		
		
		// ------------------------------------
		//-------- משתנים גלובלים -------------
		// ------------------------------------
		
		var canvasSize = 1280; // רוחב מסך
		var gameCode; // משחק שנבחר ע"י המשתמש
		var wallSpaces = 4; // רווח בין כל חלק חומה
		var wallToCenter = 14; // מרווח של החומה האחרונה ממרכז המסך
		var CurrentPlayer = 1; // שחקן שמשחק עכשיו
		var OtherPlayer =  2; // השחק שלא משחק עכשיו
		var firstPlayer;
		
		var interval; // משתנה לשימוש באירועי זמן במהלך המשחק
		var countdown; // משך הזמן שנותר לשחקן לענות על השאלה
		var timeToQuestion = 30; // כמה זמן יש לכל שאלה
		var pauseTime = 0; // משך הזמן שלקח לשחקן לענות על השאלה
		var playerAnimationStop = "stop" // משתנה שממפעיל ועוצר את תזוזת הדמויות על המסך באמצעות הטיקר
		var animationName // שם האנימציה שתופעל בטיקר
		
		//-------- משתנים ומאפיינים של השחקנים --------
		var player2Name; // שם שחקן 2
		var player1Name; // שם שחקן 1
		var player2Gender; // מגדר שחקן 2
		var player1Gender; // מגדר שחקן 1
		var player2Color=0; // צבע שחקן 2
		var player1Color=0; // צבע שחקן 1
		
		var P2QuestionsAmount; // כמות שאלות שקיבל שחקן 2
		var P2ErrorsAmount; // כמות טעויות של שחקן 2
		var P2CorrectAnswers; // כמות תשובות נכונות של שחקן 2
		var P2AnswersTime = 0; // משך הזמן הכולל ששיחק שחקן 2
		var P2Grade; // ציון שחקן 2
		
		var P1QuestionsAmount; // כמות שאלות שקיבל שחקן 1
		var P1ErrorsAmount; // כמות טעויות של שחקן 1
		var P1CorrectAnswers; // כמות תשובות נכונות של שחקן 1
		var P1AnswersTime = 0; // משך הזמן הכולל ששיחק שחקן 2
		var P1Grade; // ציון שחקן 1
		
		var characterGender = [lib.man, lib.woman]; // מערך שמכיל את הגבר והאישה
		
		var upperMenu; //משתנה גלובלי של התפריט העליון כדי לבטל את האיוונט של הסטופ כשצריך
		var soundOffButton; // משתנה שיכיל את כפתור השתקת המשחק
		var playersProperties; // משתנה שיכיל ת מסך בחירת הדמויות וההגדרות שלהן
		
		var playerCharacterFrames; // משתנה המכיל את המוביקליפים של הדמויות על מנת לשנות את צבע הדמות
		var choosedColor; // הצבע שאליו פונקציית שינוי הצבע משנה את הדמות 
		
		// ----- משתנים של המשחק הספציפי שנבחר
		var currentGameArray; // מערך זמני של המשחק שנבחר
		var currentGameFullLength; // אורך המשחק שנבחר
		var currentQuestion; // השאלה שמוצגת על הבמה
		var currentQuestionOptions; // המסיחים של השאלה שמוצגת על הבמה
		
		var wallPiecelWidth // רוחב החומה בהתאם לכמות השאלות במשחק
		
		var currentOptionSelect; // המסיח שנבחר על ידי השחקן
		
		var answersContainer; // קומטיינר שמכיל את אפשרויו המענה על הבמה
		
		
		var flagTextColors = ["#25A09B","#3E5469","#9B5B76","#F2532E"] //מערך של הצבעים האפשריים כדי שנוכל להשתמש בהם כדי לשנות את הצבעים של השמות בתיבות טקסט
		
		// איפוס של המשתנים
		function restartVars()
		{
		    P2QuestionsAmount = 0;
		    P2ErrorsAmount = 0;
		    P2CorrectAnswers = 0;
		    P2AnswersTime = 0;
		    P2Grade = 0;
		
		    P1QuestionsAmount = 0;
		    P1ErrorsAmount = 0;
		    P1CorrectAnswers = 0;
		    P1AnswersTime = 0;
		    P1Grade = 0;
		
		    currentGameArray = []
		    currentGameFullLength = []
		    
		}
		
		// -----------------------------------
		//-------- סאונד ומוזיקה -------------
		// -----------------------------------
		
		
		var soundOn = true;
		
		
		// השתקה של הסאונד במשחק
		function soundOff() {
		
		    var mainMusic= createjs.Sound.play("clickSound");
		
			if (soundOn == true) {
				createjs.Sound.muted = true;
				soundOn = false;
		        soundOffButton.soundIcon.gotoAndStop(1)
		      
		    }
		    else 
		    { 
				createjs.Sound.muted = false;
				soundOn = true;
		        soundOffButton.soundIcon.gotoAndStop(0)
		    }
			
		}
		  
		
		// -----------------------------------
		//-------- מסך בחירת משחק -------------
		// -----------------------------------
		
		// ----- העלאה של מסך בחירת משחק
		BuildGameSelectionScreen();
		
		function BuildGameSelectionScreen()
		{
		    var playerAnimationStop = "stop"
		    var mainMusic= createjs.Sound.stop("mainMusic");
		
		    removeAllChildrenFromStage()
		
		    var gameSelectionScreen = new lib.gameSelectionScreen;
		    gameSelectionScreen.x = canvasSize/2;
		    gameSelectionScreen.y = 379;
		    gameSelectionScreen.name = "gameSelectionScreen";
		    stage.addChild(gameSelectionScreen);
		    stage.getChildByName("gameSelectionScreen").enterToSelectedGameBtn.gotoAndStop(2)
		
		    gameSelectionScreen.enterToSelectedGameBtn.shadow = new createjs.Shadow("rgba(0,0,0,0.08)", 5, 5, 10);
		}
		
		// inputText וב comboBoxהפעלה של בדיקת שינוי 
		$("#dom_overlay_container").on("change", "#comboBox", changeComboBoxValue); // זיהוי שינוי בחירה בקומבו בוקס
		$("#dom_overlay_container").on("input", "#inputText", checkInputText1Length); // זיהוי של כתיבה בתיבת הטקסט של שם שחקן 1
		$("#dom_overlay_container").on("input", "#inputText2", checkInputText2Length); // זיהוי של כתיבה בתיבת הטקסט של שם שחקן 2
		
		// פונקציית שרצה בכל לחיצה של מקש כשהשחקן מזין את השם שלו
		function checkInputText1Length()
		{
		    var checkLength = document.getElementById("inputText").value
		    document.getElementById("inputText").setAttribute('maxlength',8); // הגבלה של כמות התווים שאפשר להכניס לתיבת הטקסט
		    // במידה ואורך השם גדול מ 0
		    if(checkLength.length > 0)
		    {
		        stage.getChildByName("playersProperties").nextToChoosingCharacter1.gotoAndStop(0) 
		        playersProperties.nextToChoosingCharacter1.addEventListener("click", chooseCharacter1);
		        playersProperties.nextToChoosingCharacter1.addEventListener("mouseover", ButtonOver);
		        playersProperties.nextToChoosingCharacter1.addEventListener("mouseout", ButtonOut);
		    } else
		    {
		        stage.getChildByName("playersProperties").nextToChoosingCharacter1.gotoAndStop(2) 
		        playersProperties.nextToChoosingCharacter1.removeEventListener("click", chooseCharacter1);
		        playersProperties.nextToChoosingCharacter1.removeEventListener("mouseover", ButtonOver);
		        playersProperties.nextToChoosingCharacter1.removeEventListener("mouseout", ButtonOut);
		    }
		}
		function checkInputText2Length()
		{
		    var checkLength = document.getElementById("inputText2").value
		    document.getElementById("inputText2").setAttribute('maxlength',8);// הגבלה של כמות התווים שאפשר להכניס לתיבת הטקסט
		    // במידה ואורך השם גדול מ 0
		    if(checkLength.length > 0)
		    {
		        stage.getChildByName("playersProperties").nextToChoosingCharacter2.gotoAndStop(0) 
		        playersProperties.nextToChoosingCharacter2.addEventListener("click", chooseCharacter2);
		        playersProperties.nextToChoosingCharacter2.addEventListener("mouseover", ButtonOver);
		        playersProperties.nextToChoosingCharacter2.addEventListener("mouseout", ButtonOut);
		    } else
		    {
		        stage.getChildByName("playersProperties").nextToChoosingCharacter2.gotoAndStop(2) 
		        playersProperties.nextToChoosingCharacter2.removeEventListener("click", chooseCharacter2);
		        playersProperties.nextToChoosingCharacter2.removeEventListener("mouseover", ButtonOver);
		        playersProperties.nextToChoosingCharacter2.removeEventListener("mouseout", ButtonOut);
		    }
		
		}
		
		// שינוי הערך של המשחק הנבחר על פי הקומבובוקס
		function changeComboBoxValue(evt)
		{
		        //שמירת הערך שנבחר בקומבו
		        gameCode = evt.currentTarget.value;
		        enableEnterGameBtn();
		}
		
		// הפעלה של הכפתור לאישור המשחק הבחור
		function enableEnterGameBtn()
		{
		    // בדיקה אם נבחר משחק
		    if(gameCode >= 0)
		    {
		        stage.getChildByName("gameSelectionScreen").enterToSelectedGameBtn.gotoAndStop(0)
		        stage.getChildByName("gameSelectionScreen").enterToSelectedGameBtn.addEventListener("mouseover",ButtonOver)
		        stage.getChildByName("gameSelectionScreen").enterToSelectedGameBtn.addEventListener("mouseout",ButtonOut)
		        stage.getChildByName("gameSelectionScreen").enterToSelectedGameBtn.addEventListener("click",startSceneAnimation)
		
		    } else 
		    {
		        stage.getChildByName("gameSelectionScreen").enterToSelectedGameBtn.gotoAndStop(2)
		        stage.getChildByName("gameSelectionScreen").enterToSelectedGameBtn.removeEventListener("mouseover",ButtonOver)
		        stage.getChildByName("gameSelectionScreen").enterToSelectedGameBtn.removeEventListener("mouseout",ButtonOut)
		        stage.getChildByName("gameSelectionScreen").enterToSelectedGameBtn.removeEventListener("click",startSceneAnimation)
		    }
		}
		
		// -----------------------------------
		//-------- אנימציית פתיחה -------------
		// -----------------------------------
		
		// הפעלת אנימציית פתיחה
		function startSceneAnimation()
		{
		    var playerAnimationStop = "stop"
		
		    var mainMusic= createjs.Sound.play("startScene");
		    var mainMusic1= createjs.Sound.play("lottery");
		
		    removeAllChildrenFromStage();
		
		    var startSceneAnimation = new lib.startSceneAnimation;
		    stage.addChild(startSceneAnimation);
		    startSceneAnimation.continueToChooseCharacter.addEventListener("mouseover",ButtonOver);
		    startSceneAnimation.continueToChooseCharacter.addEventListener("mouseout",ButtonOut);
		    startSceneAnimation.continueToChooseCharacter.addEventListener("click",BuildPlayersProperties);
		    startSceneAnimation.x = -16;
		    startSceneAnimation.y = 148;
		
		    soundOffButton = startSceneAnimation.soundOffBtnSingle
		    startSceneAnimation.soundOffBtnSingle.addEventListener("click", soundOff);
		    startSceneAnimation.soundOffBtnSingle.addEventListener("mouseover", ButtonOver);
		    startSceneAnimation.soundOffBtnSingle.addEventListener("mouseout", ButtonOut);
		
		    startSceneAnimation.continueToChooseCharacter.shadow = new createjs.Shadow("rgba(0,0,0,0.08)", 5, 5, 10);
		}
		
		// הפעלת מסכי בחירת שחקנים  - מסך ראשון בחירת שם שחקן 1
		function BuildPlayersProperties(event)
		{
		    // בדיקה האם המשחק הופעל מחדש
		     if(event.currentTarget.name == "playAgainBtn")
		     {
		       var mainMusicrestart= createjs.Sound.stop("mainMusic");
		     }
		
		    removeAllChildrenFromStage();
		
		    restartVars()
		
		    var mainMusic= createjs.Sound.play("mainMusic", {interrupt: createjs.Sound.INTERRUPT_ANY, loop:-1});
		    mainMusic.volume = 0.1
		
		    playersProperties = new lib.playersProperties;
		    playersProperties.name = "playersProperties";
		    playersProperties.y = 379;
		    playersProperties.x = canvasSize/2 - 200;
		    stage.addChild(playersProperties);
		    stage.getChildByName("playersProperties").nextToChoosingCharacter1.gotoAndStop(2) 
		
		    playersProperties.nextToChoosingCharacter1.shadow = new createjs.Shadow("rgba(0,0,0,0.08)", 5, 5, 10);
		
		    CurrentPlayer = 1
		
		    soundOffButton = playersProperties.soundOffBtnSingle
		
		    if(soundOn == true)
		    {
		        soundOffButton.soundIcon.gotoAndStop(0)
		    } else
		    {
		        soundOffButton.soundIcon.gotoAndStop(1)
		    }
		   //soundOff()
		    playersProperties.soundOffBtnSingle.addEventListener("click", soundOff )
		    playersProperties.soundOffBtnSingle.addEventListener("mouseover", ButtonOver )
		    playersProperties.soundOffBtnSingle.addEventListener("mouseout", ButtonOut )
		}
		
		// מסך בחירת דמות 1
		function chooseCharacter1()
		{
		
		    var mainMusic= createjs.Sound.play("clickSound");
		
		    player1Name = document.getElementById("inputText").value;
		    stage.getChildByName("playersProperties").gotoAndStop(1);
		    playersProperties.player1LampName.text = player1Name;
		
		    playersProperties.chooseWoman.addEventListener("click", chooseCharacter1Color);
		    playersProperties.chooseMan.addEventListener("click", chooseCharacter1Color);
		    playersProperties.chooseWoman.addEventListener("mouseover", characterPropertiesHover);
		    playersProperties.chooseMan.addEventListener("mouseover", characterPropertiesHover);
		    playersProperties.chooseWoman.addEventListener("mouseout", characterPropertiesOut);
		    playersProperties.chooseMan.addEventListener("mouseout", characterPropertiesOut);
		}
		
		// בחירת צבע לדמות 1
		function chooseCharacter1Color(evt)
		{
		    var mainMusic= createjs.Sound.play("clickSound");
		
		    playerCharacterFrames = 
		    [
		        evt.currentTarget.characterMC0,
		        evt.currentTarget.characterMC1,
		        evt.currentTarget.characterMC2,
		        evt.currentTarget.characterMC4,
		        evt.currentTarget.characterMC3,
		        evt.currentTarget.characterMC5,
		        evt.currentTarget.characterMC6,
		        evt.currentTarget.characterMC7
		    ]
		
		    // בדיקה איזו דמות נבחרה ושינוי המשתנה והמסך בהתאם
		    switch (evt.currentTarget.name) {
		        case "chooseMan":
		            player1Gender = 0
		            stage.getChildByName("playersProperties").gotoAndStop(2)
		            playersProperties.chooseWoman.removeEventListener("click", chooseCharacter1Color);
		            playersProperties.chooseWoman.removeEventListener("mouseover", characterPropertiesHover);
		            playersProperties.chooseWoman.removeEventListener("mouseout", characterPropertiesOut);
		            break;
		    
		        case "chooseWoman":
		            player1Gender = 1
		            stage.getChildByName("playersProperties").gotoAndStop(3)
		            playersProperties.chooseMan.removeEventListener("click", chooseCharacter1Color)
		            playersProperties.chooseMan.removeEventListener("mouseover", characterPropertiesHover)
		            playersProperties.chooseMan.removeEventListener("mouseout", characterPropertiesOut)
		            break;
		                
		        default:
		            break;
		    }
		
		    playersProperties.greenBtn.addEventListener("click", changeColorByChoosing)
		    playersProperties.blueBtn.addEventListener("click", changeColorByChoosing)
		    playersProperties.purpleBtn.addEventListener("click", changeColorByChoosing)
		    playersProperties.orangeBtn.addEventListener("click", changeColorByChoosing)
		
		    playersProperties.greenBtn.addEventListener("mouseover", characterPropertiesHover)
		    playersProperties.blueBtn.addEventListener("mouseover", characterPropertiesHover)
		    playersProperties.purpleBtn.addEventListener("mouseover", characterPropertiesHover)
		    playersProperties.orangeBtn.addEventListener("mouseover", characterPropertiesHover)
		
		    playersProperties.greenBtn.addEventListener("mouseout", characterPropertiesOut)
		    playersProperties.blueBtn.addEventListener("mouseout", characterPropertiesOut)
		    playersProperties.purpleBtn.addEventListener("mouseout", characterPropertiesOut)
		    playersProperties.orangeBtn.addEventListener("mouseout", characterPropertiesOut)
		
		    playersProperties.confirmCharacter1Btn.addEventListener("click", chooseCharacter2Name);
		    playersProperties.confirmCharacter1Btn.addEventListener("mouseover", ButtonOver);
		
		    playersProperties.confirmCharacter1Btn.shadow = new createjs.Shadow("rgba(0,0,0,0.08)", 5, 5, 10);
		}
		
		// בחירת שם לדמות 2
		function chooseCharacter2Name()
		{
		    var mainMusic= createjs.Sound.play("clickSound");
		
		    stage.getChildByName("playersProperties").gotoAndStop(4)
		
		    stage.getChildByName("playersProperties").nextToChoosingCharacter2.gotoAndStop(2) 
		
		    CurrentPlayer = 2
		
		    playersProperties.nextToChoosingCharacter2.shadow = new createjs.Shadow("rgba(0,0,0,0.08)", 5, 5, 10);
		}
		
		
		//בחירת דמות שחקן 2
		function chooseCharacter2()
		{
		    var mainMusic= createjs.Sound.play("clickSound");
		    clearColorChoosing()
		
		    player2Name = document.getElementById("inputText2").value 
		    stage.getChildByName("playersProperties").gotoAndStop(5)
		    playersProperties.player2LampName.text = player2Name;
		
		    playersProperties.chooseWoman2.addEventListener("click", chooseCharacter2Color);
		    playersProperties.chooseMan2.addEventListener("click", chooseCharacter2Color);
		    playersProperties.chooseWoman2.addEventListener("mouseover", characterPropertiesHover);
		    playersProperties.chooseMan2.addEventListener("mouseover", characterPropertiesHover);
		    playersProperties.chooseWoman2.addEventListener("mouseout", characterPropertiesOut);
		    playersProperties.chooseMan2.addEventListener("mouseout", characterPropertiesOut);
		}
		
		// בחירת צבע שחקן 2
		function chooseCharacter2Color(evt)
		{
		    var mainMusic= createjs.Sound.play("clickSound");
		
		    playerCharacterFrames = 
		    [
		        evt.currentTarget.characterMC0,
		        evt.currentTarget.characterMC1,
		        evt.currentTarget.characterMC2,
		        evt.currentTarget.characterMC4,
		        evt.currentTarget.characterMC3,
		        evt.currentTarget.characterMC5,
		        evt.currentTarget.characterMC6,
		        evt.currentTarget.characterMC7
		    ]
		
		  
		  // בדיקה איזו דמות נבחרה ושינוי המשתנה והמסך בהתאם
		    switch (evt.currentTarget.name) {
		        case "chooseMan2":
		            player2Gender = 0
		            stage.getChildByName("playersProperties").gotoAndStop(6)
		            playersProperties.chooseWoman2.removeEventListener("click", chooseCharacter2Color)
		            playersProperties.chooseWoman2.removeEventListener("mouseover", characterPropertiesHover)
		            playersProperties.chooseWoman2.removeEventListener("mouseout", characterPropertiesOut)
		            break;
		    
		        case "chooseWoman2":
		            player2Gender = 1
		            stage.getChildByName("playersProperties").gotoAndStop(7)
		            playersProperties.chooseMan2.removeEventListener("click", chooseCharacter2Color)
		            playersProperties.chooseMan2.removeEventListener("mouseover", characterPropertiesHover)
		            playersProperties.chooseMan2.removeEventListener("mouseout", characterPropertiesOut)
		            break;
		                
		        default:
		            break;
		    }
		    
		
		
		    playersProperties.greenBtn.addEventListener("click", changeColorByChoosing)
		    playersProperties.blueBtn.addEventListener("click", changeColorByChoosing)
		    playersProperties.purpleBtn.addEventListener("click", changeColorByChoosing)
		    playersProperties.orangeBtn.addEventListener("click", changeColorByChoosing)
		
		    playersProperties.greenBtn.addEventListener("mouseover", characterPropertiesHover)
		    playersProperties.blueBtn.addEventListener("mouseover", characterPropertiesHover)
		    playersProperties.purpleBtn.addEventListener("mouseover", characterPropertiesHover)
		    playersProperties.orangeBtn.addEventListener("mouseover", characterPropertiesHover)
		
		    playersProperties.greenBtn.addEventListener("mouseout", characterPropertiesOut)
		    playersProperties.blueBtn.addEventListener("mouseout", characterPropertiesOut)
		    playersProperties.purpleBtn.addEventListener("mouseout", characterPropertiesOut)
		    playersProperties.orangeBtn.addEventListener("mouseout", characterPropertiesOut)
		
		
		    playersProperties.confirmCharacter2Btn.addEventListener("click",firstPlayerlotteryButton);
		    playersProperties.confirmCharacter2Btn.addEventListener("mouseover", ButtonOver);
		
		    playersProperties.confirmCharacter2Btn.shadow = new createjs.Shadow("rgba(0,0,0,0.08)", 5, 5, 10);
		}
		
		
		// מסך ראשון של הגרלת שחקן ראשון
		function firstPlayerlotteryButton()
		{
		    var mainMusic= createjs.Sound.play("clickSound");
		
		    removeAllChildrenFromStage();
		    var lotteryAnimation = new lib.lotteryAnimation;
		    lotteryAnimation.x = 360;
		    lotteryAnimation.name = "lotteryAnimation";
		    stage.addChild(lotteryAnimation);
		
		    lotteryAnimation.startLotteryBtn.addEventListener("click", firstPlayerlottery);
		    lotteryAnimation.startLotteryBtn.addEventListener("mouseover", ButtonOver);
		    lotteryAnimation.startLotteryBtn.addEventListener("mouseout", ButtonOut);
		
		    lotteryAnimation.startLotteryBtn.shadow = new createjs.Shadow("rgba(0,0,0,0.08)", 5, 5, 10);
		}
		
		// אנימציית הגרלת שחקן ראשון
		function firstPlayerlottery()
		{
		    var mainMusic= createjs.Sound.play("clickSound");
		    var mainMusic= createjs.Sound.play("lotterySound");
		
		    var lotteryAnimation = stage.getChildByName("lotteryAnimation")
		
		    lotteryAnimation.gotoAndStop(1)
		    // הגרלת מספר בין 1-2 כדי לבחור את השחקן הראשון
		    var rndPlayer = Math.floor((Math.random() * 2))+1;
		
		    // פעולה מתאימה לפי השחקן הנבחר
		    switch (rndPlayer) {
		        case 1:
		            lotteryAnimation.lotteryMaster.playerName.text = player1Name;
		            CurrentPlayer = 1;
		            OtherPlayer = 2;
		            firstPlayer = 1
		            break;
		    
		        case 2:
		            lotteryAnimation.lotteryMaster.playerName.text = player2Name;
		            CurrentPlayer = 2;
		            OtherPlayer = 1;
		            firstPlayer = 2
		            break;
		
		        default:
		            break;
		    }
		   
		    interval = setInterval(BuildCurrentGame, 6000);
		
		}
		
		// ------ פונקציה מרכזית לבניית המשחק על פי המשחק הנבחר ----------
		function BuildCurrentGame()
		{
		
		    clearInterval(interval);
		    removeAllChildrenFromStage()
		    restartVars()
		
		    currentGameArray = gamesArray[gameCode].slice();
		    currentGameFullLength = currentGameArray.length
		
		    currentOptionSelect = -1;
		 
		    setGameBackground();
		    setUpperMenu();
		    setWall()
		    setQuestion();
		    setAnswersContainer()
		    setAnswers();
		    addPlayers();
		    SetPlayerTurn();
		
		    createjs.Ticker.addEventListener("tick", playersAnimationTicker)
		}
		
		//בניית הרקעים של המשחק
		function setGameBackground()
		{
		    var farBackground = new lib.farBackground();
		    var nearBackground = new lib.nearBackground();
		    var staticWall = new lib.staticWall();
		    stage.addChildAt(farBackground,0);
		    stage.addChildAt(staticWall,1);
		    stage.addChildAt(nearBackground,2);
		    nearBackground.x = -15.65;
		    nearBackground.y = 230.9;
		    nearBackground.name = "nearBackground";
		    staticWall.name = "staticWall";
		    staticWall.y = 230.9
		
		
		    //הוספת שמות השחקנים לדגלים
		    staticWall.player1FlagName.text = player1Name
		    staticWall.player2FlagName.text = player2Name
		    staticWall.player1FlagNameDisable.text = player1Name
		    staticWall.player2FlagNameDisable.text = player2Name
		
		    // שינוי צבע שם השחקן על הדגל
		    staticWall.player1FlagName.color = flagTextColors[player1Color];
		    staticWall.player2FlagName.color = flagTextColors[player2Color];
		
		}
		
		// בנייה של התפריט העליון במשחק
		function setUpperMenu()
		{
		    upperMenu = new lib.upperMenu();
		    upperMenu.name = "upperMenu"
		    stage.addChild(upperMenu);
		    upperMenu.y = -2.55;
		    upperMenu.gameSubject.text = gamesNames[gameCode]
		
		    soundOffButton = upperMenu.soundOffBtn
		
		    // לכפתורי התפריט העליון Events הוספת
		    upperMenu.pauseBtn.addEventListener("click", pauseGame)
		    upperMenu.howToPlayBtn.addEventListener("click", howToPlayScreen)
		    upperMenu.soundOffBtn.addEventListener("click", soundOff )
		    upperMenu.soundOffBtn.addEventListener("mouseover", ButtonOver )
		    upperMenu.soundOffBtn.addEventListener("mouseout", ButtonOut )
		
		    if(soundOn == true)
		    {
		        soundOffButton.soundIcon.gotoAndStop(0)
		    } else
		    {
		        soundOffButton.soundIcon.gotoAndStop(1)
		    }
		}
		
		// בנייה של חלקי החומה לכל שחקן
		function setWall()
		{
		    wallPiecelWidth = wallSizeCalc(currentGameFullLength)
		
		    for(i=0 ; i<currentGameFullLength/2 ; i++)
		    {
		        var P2WallPiece = new lib.mainWall();
		        P2WallPiece.gotoAndStop(0);
		        P2WallPiece.cache(0, 0,wallPiecelWidth, 400)
		        P2WallPiece.x=100 + (i*(wallPiecelWidth+wallSpaces) + wallSpaces);
		        P2WallPiece.y=-84.5;
		        P2WallPiece.name = "P2WallPiece" + i
		        P2WallPiece.alpha = 0.55;
		        stage.getChildByName("staticWall").addChild(P2WallPiece);
		
		        var P2WallPieceDisable = new lib.mainWall();
		        P2WallPieceDisable.gotoAndStop(1);
		        P2WallPieceDisable.cache(0, 0,wallPiecelWidth, 400)
		        P2WallPieceDisable.x=100 + (i*(wallPiecelWidth+wallSpaces) + wallSpaces);
		        P2WallPieceDisable.y=-84.5;
		        P2WallPieceDisable.name = "P2WallPieceDisable" + i
		        P2WallPieceDisable.alpha = 0.4;
		        stage.getChildByName("staticWall").addChild(P2WallPieceDisable);
		     
		    }
		
		    for(i=(currentGameFullLength/2)-1 ; i >= 0 ; i--)
		    {
		        var P1WallPiece = new lib.mainWall();
		        P1WallPiece.gotoAndStop(0);
		        P1WallPiece.cache(0, 0,wallPiecelWidth, 400);
		        P1WallPiece.x=(canvasSize/2+ (wallToCenter - wallSpaces)) + (i*(wallPiecelWidth + wallSpaces) + wallSpaces);
		        P1WallPiece.y=-84.5;
		        P1WallPiece.name = "P1WallPiece" + ((currentGameFullLength/2)-i-1);
		        P1WallPiece.alpha = 0.55;
		        stage.getChildByName("staticWall").addChild(P1WallPiece);
		
		
		        var P1WallPieceDisable = new lib.mainWall();
		        P1WallPieceDisable.gotoAndStop(1);
		        P1WallPieceDisable.cache(0, 0,wallPiecelWidth, 400)
		        P1WallPieceDisable.x=(canvasSize/2+ (wallToCenter-wallSpaces)) + (i*(wallPiecelWidth+wallSpaces) + wallSpaces);
		        P1WallPieceDisable.y=-84.5;
		        P1WallPieceDisable.name = "P1WallPieceDisable" + ((currentGameFullLength/2)-i-1)
		        P1WallPieceDisable.alpha = 0.4;
		        stage.getChildByName("staticWall").addChild(P1WallPieceDisable);
		     
		    }
		}
		
		// הוספת הדמויות לבמה
		function addPlayers()
		{
		    var player2 = new characterGender[player2Gender]
		    //player2.gotoAndStop(player2Color)
		    player2.scaleX = player2.scaleY = 0.7;
		    player2.scaleX *=-1
		    player2.name = "player2";
		    stage.addChild(player2);
		    player2.regX = ((player2.getBounds().width) / 2);
		    player2.regY = ((player2.getBounds().height) / 2);
		
		    playerCharacterFrames = 
		    [
		        player2.characterMC0,
		        player2.characterMC1,
		        player2.characterMC2,
		        player2.characterMC3,
		        player2.characterMC4,
		        player2.characterMC5,
		        player2.characterMC6,
		        player2.characterMC7
		    ]
		
		    choosedColor = player2Color
		    changeCharacterColorByChoosing()
		
		    var player1 = new characterGender[player1Gender]
		    //player1.gotoAndStop(player1Color)
		    player1.scaleX = player1.scaleY = 0.7;
		    player1.name = "player1";
		    stage.addChild(player1);
		    player1.regX = ((player2.getBounds().width) / 2);
		    player1.regY = (player1.getBounds().height) / 2;
		
		    playerCharacterFrames = 
		    [
		        player1.characterMC0,
		        player1.characterMC1,
		        player1.characterMC2,
		        player1.characterMC3,
		        player1.characterMC4,
		        player1.characterMC5,
		        player1.characterMC6,
		        player1.characterMC7
		    ]
		
		    choosedColor = player1Color
		    changeCharacterColorByChoosing()
		
		    PlayerLocation()
		}
		
		// מיקום הדמויות על המסך
		function PlayerLocation()
		{
		    if(CurrentPlayer == 1)
		    {
		        stage.getChildByName("player1").x = 1140 ;
		        stage.getChildByName("player1").y = 630;
		        stage.getChildByName("player1").gotoAndStop(1)
		
		        stage.getChildByName("player2").x = 30  + (P2CorrectAnswers*(wallPiecelWidth+wallSpaces));
		        stage.getChildByName("player2").y = 175;
		        stage.getChildByName("player2").gotoAndStop(8)
		
		    } else 
		    {
		        stage.getChildByName("player1").x = 1250 - (P1CorrectAnswers*(wallPiecelWidth+wallSpaces));
		        stage.getChildByName("player1").y = 175;
		        stage.getChildByName("player1").gotoAndStop(8)
		
		        stage.getChildByName("player2").x = 110;
		        stage.getChildByName("player2").y = 630;
		        stage.getChildByName("player2").gotoAndStop(1)
		       
		    }
		    
		    stage.setChildIndex(stage.getChildByName("player2"),10000)
		    stage.setChildIndex(stage.getChildByName("player1"), 10000)
		    stage.getChildByName("player" + OtherPlayer).scaleY = 0.7
		    stage.getChildByName("player2").scaleX = -0.7
		    stage.getChildByName("player1").scaleX = 0.7
		
		    if(P1CorrectAnswers == currentGameFullLength/2)
		    {
		            stage.getChildByName("player1").x -= 30
		            stage.getChildByName("player1").y = 158;
		            stage.getChildByName("player1").scaleX = stage.getChildByName("player1").scaleY = 0.3
		    } 
		    
		    else if(P2CorrectAnswers == currentGameFullLength/2)
		    {
		         stage.getChildByName("player2").x += 30 ;
		         stage.getChildByName("player2").y = 158;
		         stage.getChildByName("player2").scaleX = -0.3
		         stage.getChildByName("player2").scaleY = 0.3
		    }
		}
		
		// החלפת תור בין השחקנים
		function nextTurn()
		{
		    if(CurrentPlayer == 1)
		    {
		        CurrentPlayer = 2;
		        OtherPlayer = 1;
		    } else
		    {
		        CurrentPlayer = 1;
		        OtherPlayer = 2;
		    }
		
		    removeQuestionAndAnswers()
		
		        setQuestion();
		        setAnswers();
		        SetPlayerTurn();
		        
		    stage.removeChild(stage.getChildByName("NextTurnButton"))
		    stage.removeChild(stage.getChildByName("setLeftConfetty"))
		    stage.removeChild(stage.getChildByName("setRightConfetty"))
		
		}
		
		// סידור משחק לפי תור השחקן הרלוונטי
		function SetPlayerTurn()
		{
		    upperMenu.pauseBtn.addEventListener("click", pauseGame)
		
		    // החלפה בין חומות רגילות לחומות אפורות
		    for( i=0 ; i < currentGameFullLength/2 ; i++)
		    {
		        stage.getChildByName("staticWall").getChildByName("P"+CurrentPlayer+"WallPiece"+i).visible = true;
		        stage.getChildByName("staticWall").getChildByName("P"+CurrentPlayer+"WallPieceDisable"+i).visible = false;
		        stage.getChildByName("staticWall").getChildByName("P"+OtherPlayer+"WallPiece"+ i).visible = false;
		        stage.getChildByName("staticWall").getChildByName("P"+OtherPlayer+"WallPieceDisable"+i).visible = true;
		    }
		
		    if(CurrentPlayer == 1)
		    {
		        stage.getChildByName("staticWall").gotoAndStop(0)
		        stage.getChildByName("staticWall").P1Flag.gotoAndStop(player1Color)
		        stage.getChildByName("staticWall").P2Flag.gotoAndStop(4)
		    } else
		    {
		        stage.getChildByName("staticWall").gotoAndStop(1)
		        stage.getChildByName("staticWall").P1Flag.gotoAndStop(4)
		        stage.getChildByName("staticWall").P2Flag.gotoAndStop(player2Color)
		    }
		
		    PlayerLocation()
		    // בדיקה האם זה התור הראשון של השחקן על מנת להציג מסך איך משחקים
		    if(P1QuestionsAmount == 0 || P2QuestionsAmount == 0)
		    {
		        howToPlayScreen()
		    }
		}
		
		// יצירה של השאלה הנוכחית על המסך
		function setQuestion()
		{
		    // ההגרלת שאלה מתוך מערך המשחק
		    currentQuestion =  Math.floor((Math.random() * currentGameArray.length));
		
		     var questionText = stage.getChildByName("nearBackground").questionText;
		     questionText.text = currentGameArray[currentQuestion][0][0];
		     questionText.lineWidth = 463.95;
		     questionText.lineHeight = 25;
		     questionText.color = "black";
		     questionText.font = "20px Assistant";
		     questionText.textAlign = "right";
		     questionText.textBaseline = "top"
		     questionText.name = "questionText"
		     questionText.y = 53.65
		     questionText.x = 887.65   
		
		     // מירכוז השאלה לפי הצורך
		   if(questionText.text.length < 50 )
		   {
		        if(currentGameArray[currentQuestion][0].length == 1)
		        {
		        questionText.textAlign = "center"
		        questionText.x = 655
		        } else
		        {
		            questionText.x = 850
		        }
		
		        questionText.textBaseline = "middle"
		        questionText.y = 89.35    
		        questionText.lineWidth = 360;
		    
		   } 
		 
		   // בדיקה האם השאלה מכילה תמונה והוספת התמונה במקרה הצורך
		    if(currentGameArray[currentQuestion][0].length == 2)
		    {
		        questionText.lineWidth = 300;
		
		        var questionImage = new (currentGameArray[currentQuestion][0][1])
		        questionImage.name = "questionImage";
		        stage.getChildByName("nearBackground").addChildAt(questionImage, 1);
		      
		        var scaleValues = SetImageSize(questionImage,100,65);
		
		        questionImage.scaleX = questionImage.scaleY = scaleValues
		        questionImage.regX = (questionImage.getBounds().width) / 2;
		        questionImage.regY = (questionImage.getBounds().height) / 2;
		        questionImage.x = 480;
		        questionImage.y = 90;
		        questionImage.addEventListener("mouseover", showBigPicture);
		        questionImage.addEventListener("mouseout", hideBigPicture);
		
		        // הוספת זכוכית מגדלת לתמונה
		        var magnifire = new (lib.magnifire)
		        magnifire.name = "questionMagnifire"
		        stage.getChildByName("nearBackground").addChildAt(magnifire, 2)
		        magnifire.regX = (magnifire.getBounds().width) / 2;
		        magnifire.regY = (magnifire.getBounds().height) / 2;
		   
		        magnifire.x = questionImage.x - (((questionImage.getBounds().width)*scaleValues)/2) +12;
		        magnifire.y = questionImage.y - (((questionImage.getBounds().height)*scaleValues) / 2) + 11;
		        magnifire.scaleX = magnifire.scaleY = 0.3;
		    }
		        interval = setInterval(countDownFunction, 1000);
		        countdown = timeToQuestion - pauseTime;
		        stage.getChildByName("nearBackground").timerText.text = countdown;
		}
		
		// יצירת קונטיינר שבתוכו יוכנסו אפשרויות הבחירה
		function setAnswersContainer()
		{
		    answersContainer = new createjs.Container();
		    answersContainer.name = "answersContainer"
		    stage.addChild(answersContainer);
		}
		
		
		// בנייה של אפשרויות הבחירה לשאלה הנוכחית
		function setAnswers()
		{
		    currentQuestionOptions = createRandomOptionsArray();
		    currentOptionSelect = -1;
		
		    window.addEventListener("keydown", changeSelectionAndConfirmByArrow)
		
		    var space;
		    // הגדרת מרחק בין כל אפשרות בחירה בהתאם לכמות זוגית או אי זוגית
		    if((currentGameArray[currentQuestion].length-1)%2 ==0)
		    {
		        space = 27;
		    } else
		    {
		        space = 60;
		    }
		    
		    var optionWidth = 148.27;
		
		    // חישוב מיקום ההתחלה של אפשרות הבחירה הראשונה ע"י קריאה לפונקציה
		    var OptionsXStart = optionsPositionCalculate(space, optionWidth);
		
		    for(i = 0 ; i < currentQuestionOptions.length ; i++)
		    {
		        var possibleAnswer = new lib.possibleAnswer();
		        answersContainer.addChild(possibleAnswer)
		        possibleAnswer.name = "possibleAnswer" + i ;
		        possibleAnswer.x = OptionsXStart + (space + optionWidth) * i ;
		        possibleAnswer.y = 410;
		
		        // הוספת טקסט או תמונה לאפשרות הבחירה
		        if (typeof currentQuestionOptions[i][0] == 'string')
		            {
		                var answerText = answersContainer.getChildByName(possibleAnswer.name).answersText;
		                answerText.text =  currentQuestionOptions[i][0];
		                answerText.textAlign = "right"
		                answerText.textBaseline = "top"
		                answerText.x = 132
		                answerText.y = 22.55
		                //answerText.font = "16px Assistant";
		
		                if(answerText.text.length <= 25)
		                {
		                   //answerText.font = "19px Assistant";
		                    answerText.textAlign = "center"
		                    answerText.textBaseline = "middle"
		                    answerText.x = 74
		                    answerText.y = 65
		                }
		
		            } else
		            {
		                var answerPicture = new (currentQuestionOptions[i][0]);
		                
		                var scaleValues = SetImageSize(answerPicture, 114, 96);
		                answerPicture.scaleX = answerPicture.scaleY = scaleValues;
		
		                answerPicture.regX = (answerPicture.getBounds().width) / 2;
		                answerPicture.regY = (answerPicture.getBounds().height) / 2;
		                answerPicture.x = (optionWidth/2) + 1;
		                answerPicture.y = 67;
		
		                answersContainer.getChildByName(possibleAnswer.name).addChildAt(answerPicture,1);
		                answerPicture.name = "answerPicture" + i;
		                answerPicture.addEventListener("mouseover", showBigPicture);
		                answerPicture.addEventListener("mouseout", hideBigPicture);
		
		                // הוספת זכוכית מגדלת לתמונה
		                var magnifire = new (lib.magnifire)
		                answersContainer.getChildByName(possibleAnswer.name).addChildAt(magnifire, 2)
		                magnifire.regX = (magnifire.getBounds().width) / 2;
		                magnifire.regY = (magnifire.getBounds().height) / 2;
		        
		                magnifire.x = answerPicture.x - (((answerPicture.getBounds().width)*scaleValues)/2) +12;
		                magnifire.y = answerPicture.y - (((answerPicture.getBounds().height)*scaleValues) / 2) + 11;
		                magnifire.scaleX = magnifire.scaleY = 0.3;
		
		            }
		    }
		}
		
		// מחיקה של השאלה והתשובות מהמסך
		function removeQuestionAndAnswers()
		{
		    if(currentGameArray[currentQuestion][0].length == 2)
		    {
		        stage.getChildByName("nearBackground").removeChild(stage.getChildByName("nearBackground").getChildByName("questionImage"));
		        stage.getChildByName("nearBackground").removeChild(stage.getChildByName("nearBackground").getChildByName("questionMagnifire"));
		    }
		
		    for(i = 0 ; i < currentQuestionOptions.length ; i++)
		    {
		        answersContainer.removeChild(answersContainer.getChildByName("possibleAnswer" + i))
		    }
		    
		    //בדיקה שנבחרה אופציה ע"י השחקן והוא לא עומד בצד
		    if(currentOptionSelect != -1)
		    {
		        if(currentQuestionOptions[currentOptionSelect][1] == true)
		        {
		            currentGameArray.splice(currentQuestion , 1)
		        }
		    }
		}
		
		
		// פונקציה הפועלת בעת שימוש במקלדת בהזזת דמות ובחירת תשובה
		function changeSelectionAndConfirmByArrow(evt)
		{
		    clearOptionSelection();
		
		    // ביצוע פעולה בהתאם למקש שנלחץ ע"י השחקן
		    switch (evt.keyCode) {
		        case 39:
		            currentOptionSelect +=1
		            if(currentOptionSelect == currentQuestionOptions.length)
		            {
		                currentOptionSelect = 0
		            }
		            answersContainer.getChildByName("possibleAnswer" + currentOptionSelect).gotoAndStop(1);
		            stage.getChildByName("player" + CurrentPlayer).scaleX = -0.7
		            movePlayer();
		            break;
		    
		        case 37:
		            if(currentOptionSelect == -1 || currentOptionSelect == 0)
		            {
		                currentOptionSelect = currentQuestionOptions.length-1
		            } else
		            {
		                currentOptionSelect -= 1
		            }
		            answersContainer.getChildByName("possibleAnswer" + currentOptionSelect).gotoAndStop(1);
		            stage.getChildByName("player" + CurrentPlayer).scaleX = 0.7
		            movePlayer();
		
		            break;
		
		        case 32: 
		            checkOptionSelection();
		            break;
		
		        default:
		            break; 
		    }
		    
		   
		}
		
		// איפוס מצב תשובה בחורה לכל אפשרויות הבחירה
		function clearOptionSelection()
		{
		    for(i = 0 ; i < currentQuestionOptions.length ; i++)
		    {
		        answersContainer.getChildByName("possibleAnswer" + i).gotoAndStop(0);
		    }
		}
		
		// פונקציה מרכזית לבדיקת התשובה שנבחרה ע"י השחקן
		function checkOptionSelection()
		{
		    addTimeToAnswer()
		
		    if(currentQuestionOptions[currentOptionSelect][1] == true)
		    {
		       
		        var successManSound = createjs.Sound.play("successManSound");
		        var successSound = createjs.Sound.play("successSound"); 
		        successSound.volume = 0.2
		        successManSound.volume = 1.2
		
		        answersContainer.getChildByName("possibleAnswer" + currentOptionSelect).gotoAndStop(2) 
		        setConfetty()
		
		        if(CurrentPlayer == 1)
		        {
		            P1QuestionsAmount++
		            P1CorrectAnswers++
		            //ChangeWallAlpha(P1CorrectAnswers)
		            animationName = "P1GoOutAnimation"
		            stage.getChildByName("player1").gotoAndStop(5)
		            stage.getChildByName("player1").characterMC5.addEventListener("complete", playAnimation)
		
		        } else 
		        {
		            P2QuestionsAmount++
		            P2CorrectAnswers++
		            //ChangeWallAlpha(P2CorrectAnswers)
		            animationName = "P2GoOutAnimation"
		            stage.getChildByName("player2").gotoAndStop(5)
		            stage.getChildByName("player2").characterMC5.addEventListener("complete", playAnimation)
		        }
		
		    } else
		    {
		        var failureManSound = createjs.Sound.play("failureManSound");
		        var failureSound = createjs.Sound.play("failureSound"); 
		        failureSound.volume = 0.4
		
		
		        answersContainer.getChildByName("possibleAnswer" + currentOptionSelect).gotoAndPlay(3);
		        if(CurrentPlayer == 1)
		        {
		            P1ErrorsAmount++
		            P1QuestionsAmount++
		            animationName = "P1GoOutAnimation"
		            stage.getChildByName("player1").gotoAndStop(3)
		            stage.getChildByName("player1").characterMC3.addEventListener("complete", playAnimation)
		        } else
		        {
		            P2ErrorsAmount++
		            P2QuestionsAmount++
		            animationName = "P2GoOutAnimation"
		            stage.getChildByName("player2").gotoAndStop(3)
		            stage.getChildByName("player2").characterMC3.addEventListener("complete", playAnimation)
		        }
		    }
		    window.removeEventListener("keydown", changeSelectionAndConfirmByArrow);
		
		        clearInterval(interval);
		}
		
		// פונקציית סיום המשחק
		function endGame()
		{
		    removeAllChildrenFromStage()
		    clearInterval(interval);
		    
		    // חישוב ציון לכל שחקן
		    P2Grade = parseInt(((P2QuestionsAmount-P2ErrorsAmount)/P2QuestionsAmount)*100) ;
		    P1Grade = parseInt(((P1QuestionsAmount-P1ErrorsAmount)/P1QuestionsAmount)*100) ;
		
		    stage.removeChild(stage.getChildByName("player1"))
		    stage.removeChild(stage.getChildByName("player2"))
		 
		    var endScreen = new lib.endScreen()
		    stage.addChild(endScreen)
		    endScreen.addEventListener("mouseover", screenOverFunc)
		
		    addPlayers()
		    setUpperMenu()
		
		    upperMenu.pauseBtn.removeEventListener("click", pauseGame)
		    upperMenu.howToPlayBtn.removeEventListener("click", howToPlayScreen)
		
		    endScreen.endGameBtn.addEventListener("click", BuildGameSelectionScreen )
		    endScreen.endGameBtn.addEventListener("mouseover", ButtonOver)
		    endScreen.endGameBtn.addEventListener("mouseout", ButtonOut)
		
		    endScreen.playAgainBtn.addEventListener("click", BuildPlayersProperties )
		    endScreen.playAgainBtn.addEventListener("mouseover", ButtonOver)
		    endScreen.playAgainBtn.addEventListener("mouseout", ButtonOut)
		
		    endScreen.endGameBtn.shadow = new createjs.Shadow("rgba(0,0,0,0.08)", 5, 5, 10);
		    endScreen.playAgainBtn.shadow = new createjs.Shadow("rgba(0,0,0,0.08)", 5, 5, 10);
		
		    // בדיקה מי השחקן שניצח
		    if(P1Grade > P2Grade)
		    {
		        endScreen.winnerText.text = player1Name + " ניצח/ה!"
		    } else if(P2Grade > P1Grade)
		    {
		        endScreen.winnerText.text = player2Name + " ניצח/ה!"
		    } else 
		    {
		        endScreen.winnerText.text = "תיקו!"
		    }
		
		    endScreen.player1Name.text = player1Name;
		    endScreen.player1Grade.text = P1Grade;
		    endScreen.player1Errors.text = P1ErrorsAmount + "/" + P1QuestionsAmount;
		    var player1TotalTime = calcTotalAnswersTime(P1AnswersTime);
		    endScreen.player1Time.text = player1TotalTime[0] + ":" + player1TotalTime[1];
		
		    endScreen.player2Name.text = player2Name;
		    endScreen.player2Grade.text = P2Grade;
		    endScreen.player2Errors.text = P2ErrorsAmount+ "/" + P2QuestionsAmount;
		    var player2TotalTime = calcTotalAnswersTime(P2AnswersTime);
		    endScreen.player2Time.text = player2TotalTime[0] + ":" + player2TotalTime[1];
		
		   endGameAnimation()
		}
		
		// ---------------------------
		//-------- פונקציות עזר -----
		// ---------------------------
		
		// הצגה של תמונה מוגדלת במעבר עכבר
		function showBigPicture(evt)
		{   
		    if(evt.currentTarget.name == "questionImage")
		    {
		        var bigPicture = new (currentGameArray[currentQuestion][0][1]);
		        bigPicture.name = "bigPicture"
		    } else
		    {
		        var bigPicture = new (currentQuestionOptions[evt.currentTarget.name.substr(-1)][0]);
		        bigPicture.name = "bigPicture"
		    
		    }
		
		    // קריאה לפונקציה שמחשבת את גודל התמונה הרצוי בהתאם לפרמטרים
		    bigPicture.scaleX = bigPicture.scaleY = SetImageSize(bigPicture, 250, 200);
		
		    bigPicture.regX = (bigPicture.getBounds().width) / 2;
		    bigPicture.regY = (bigPicture.getBounds().height) / 2;
		    bigPicture.x = 1080;
		    bigPicture.y = 290;
		    stage.addChild(bigPicture)
		}
		
		// העלמה של התמונה המוגדלת
		function hideBigPicture()
		{
		    stage.removeChild(stage.getChildByName("bigPicture"));
		}
		
		// חישוב של מיקום אפשרויות הבחירה לפי כמות התשובות
		function optionsPositionCalculate (space , optionWidth)
		{
		    var totalOptionsWidth = ((optionWidth + space) * (currentGameArray[currentQuestion].length-1)) - space;
		    var optionsXStart = (canvasSize-totalOptionsWidth)/2;
		    return optionsXStart;
		}
		
		// יצירת מערך תשובות בסדר רנדולמאלי
		function createRandomOptionsArray()
		{
		    var tempQuestion = currentGameArray[currentQuestion].slice(1);
		    var myAnswers = [];
		
		    for (i = 0 ; i<currentGameArray[currentQuestion].length-1 ; i++)
		    {
		        rndAnswer = Math.floor((Math.random() * tempQuestion.length));
		        myAnswers[i] = tempQuestion[rndAnswer];
		        tempQuestion.splice(rndAnswer,1);
		    }
		
		    return myAnswers;
		}
		
		
		// הגדרת גודל לתמונות על המסך
		function SetImageSize(curImage,maxWidth,maxHeight)
		{
		    // בדיקה האם התמונה לאורך או לרוחב
		    if (curImage.getBounds().width > curImage.getBounds().height)
		    {
		        var picWidth = maxWidth / curImage.getBounds().width;
		        return picWidth;
		    } else
		    {
		        var picHeight = maxHeight / curImage.getBounds().height;
		        return picHeight;
		    }
		}
		
		
		// חישוב זמן כולל של השחקן וסידור לפי דקות ושניות
		function calcTotalAnswersTime(playerAnswersTime)
		{
		    var timeInMinutes = [];
		    timeInMinutes[0] =  Math.floor(playerAnswersTime/60);
		
		    // בדיקה האם מספר השניות הוא חד סיפרתי או דו ספרתי
		    if((playerAnswersTime%60).toString().length == 1)
		    {
		        timeInMinutes[1] = "0" + playerAnswersTime%60;
		    } else{
		        timeInMinutes[1] = playerAnswersTime%60;
		    }
		
		    return timeInMinutes;
		}
		
		
		// ---------------------------------
		//-------- פונקציות של כפתורים -----
		// ---------------------------------
		
		
		// מעבר עכבר כללי
		function ButtonOver(evt)
		{
		    evt.currentTarget.cursor = "pointer";
		    evt.currentTarget.gotoAndStop(1);
		}
		
		// יציאה ממעבר עכבר כללי
		function ButtonOut(evt)
		{
		    evt.currentTarget.cursor = "default";
		    evt.currentTarget.gotoAndStop(0);
		}
		
		// מעבר עכבר לבחירת דמות וצבע
		function characterPropertiesHover(evt)
		{
		    evt.currentTarget.cursor = "pointer";
		    evt.currentTarget.scaleX = evt.currentTarget.scaleY *= 1.3
		}
		
		// ציאה ממעבר עכבר לבחירת דמות וצבע
		function characterPropertiesOut(evt)
		{
		    evt.currentTarget.cursor = "default";
		    evt.currentTarget.scaleX = evt.currentTarget.scaleY /= 1.3
		}
		
		//פונקציה ריקה שמונעת מהעכבר לקלוט את הליסנרים של המעבר באלמנטים שנמצאים מתחת
		function screenOverFunc()
		{
		   
		}
		
		// כפתור המשך
		function buildNextButton()
		{
		    var NextTurnButton = new lib.nextTurnButton;
		    NextTurnButton.name = "NextTurnButton";
		    NextTurnButton.shadow = new createjs.Shadow("rgba(0,0,0,0.08)", 5, 5, 10);
		    NextTurnButton.x = canvasSize/2;
		    NextTurnButton.y = 40;
		    stage.addChild(NextTurnButton);
		    stage.getChildByName("NextTurnButton").addEventListener("click", nextTurn);
		    stage.getChildByName("NextTurnButton").addEventListener("mouseover", ButtonOver);
		    stage.getChildByName("NextTurnButton").addEventListener("mouseout", ButtonOut);
		}
		
		
		// -----------------------------------------------
		//-------- פונקציות של אנימציות להזזת הדמויות -----
		// -----------------------------------------------
		
		// הפעלת מצב הליכה לשחקן לאחר בחירת תשובה
		function playAnimation()
		{
		
		    playerAnimationStop = "play"
		    if(currentQuestionOptions[currentOptionSelect][1] == true)
		    {
		        stage.getChildByName("player" + CurrentPlayer).gotoAndStop(6)
		    } else
		    {
		        stage.getChildByName("player" + CurrentPlayer).gotoAndStop(4)
		    }
		}
		
		// פונקציית טיקר לניהול האנימציות
		function playersAnimationTicker()
		{   
		    if(playerAnimationStop != "stop")
		    {
		        upperMenu.pauseBtn.removeEventListener("click", pauseGame)
		        //אנימציית יציאה של שחקן 1
		        if(animationName == "P1GoOutAnimation")
		        {
		            changePlayerDirection()
		            stage.getChildByName("player" + CurrentPlayer).x += 20
		            
		            if( stage.getChildByName("player" + CurrentPlayer).x > 1290)
		            {
		                animationName = "P1GoInAnimation";
		                walkOnWall()
		                
		            }
		        
		        }
		        
		        //אנימציית כניסה על החומה של שחקן 1
		        if(animationName == "P1GoInAnimation")
		        {
		            if(currentQuestionOptions[currentOptionSelect][1] == true)
		            {
		                if(stage.getChildByName("player" + CurrentPlayer).x > 1190  - ((P1CorrectAnswers-1)*(wallPiecelWidth+wallSpaces)))
		                {
		                    stage.getChildByName("player" + CurrentPlayer).x -= 10
		                }
		                else
		                {
		                    playerAnimationStop = "stop"
		                        dropBricks()
		                }
		
		            } else
		            {
		                if(stage.getChildByName("player" + CurrentPlayer).x > 1210 - (P1CorrectAnswers*(wallPiecelWidth+wallSpaces)))
		                {
		                    stage.getChildByName("player" + CurrentPlayer).x -= 10
		                }
		                else
		                {
		                    playerAnimationStop = "stop"
		                    stage.getChildByName("player" + CurrentPlayer).gotoAndStop(1)
		                    checkLastTurn()
		                    
		                }
		            }
		
		        } 
		
		        //אנימציית יציאה של שחקן 2
		        if(animationName == "P2GoOutAnimation")
		        {
		            changePlayerDirection()
		            stage.getChildByName("player" + CurrentPlayer).x -= 20
		            
		            if( stage.getChildByName("player" + CurrentPlayer).x < -10)
		            {
		                animationName = "P2GoInAnimation";
		                walkOnWall()
		                
		            }
		        
		        }
		
		        //אנימציית כניסה על החומה של שחקן 2
		        if(animationName == "P2GoInAnimation")
		        {
		            if(currentQuestionOptions[currentOptionSelect][1] == true)
		            {
		                if((stage.getChildByName("player" + CurrentPlayer)).x < 95 + ((P2CorrectAnswers-1)*(wallPiecelWidth+wallSpaces)))
		                {
		                    stage.getChildByName("player" + CurrentPlayer).x += 10
		                }
		                else
		                {
		                    playerAnimationStop = "stop"
		                        dropBricks()
		                }
		
		            } else
		            {
		                if(stage.getChildByName("player" + CurrentPlayer).x < 65  + (P2CorrectAnswers*(wallPiecelWidth+wallSpaces)))
		                {
		                    stage.getChildByName("player" + CurrentPlayer).x += 10
		                }
		                else
		                {
		                    playerAnimationStop = "stop"
		                    stage.getChildByName("player" + CurrentPlayer).gotoAndStop(1)
		                    checkLastTurn()
		                    
		                }
		            }
		
		        }
		        // אנימציית סיום
		        if(animationName == "endGamePlayersIn")
		        {
		            if((stage.getChildByName("player1")).x > 1000 || (stage.getChildByName("player2")).x < 280 )
		            {
		                stage.getChildByName("player1").x -= 5
		                stage.getChildByName("player2").x += 5
		            } else
		            {
		                playerAnimationStop = "stop"
		                endGamePlayersStop()
		            }
		        }
		 
		    }
		}
		
		// אנימציית הפלת אבנים
		function dropBricks()
		{
		    stage.getChildByName("player" + CurrentPlayer).gotoAndStop(7)
		
		    stage.getChildByName("player" + CurrentPlayer).characterMC7.addEventListener("complete", changeWallAlphaManager)
		}
		
		// שינוי כיוון של שחקן בזמן האנימציה
		function changePlayerDirection()
		{
		    if(CurrentPlayer == 1)
		    {
		        if( stage.getChildByName("player" + CurrentPlayer).scaleX > 0)
		        {
		            stage.getChildByName("player" + CurrentPlayer).scaleX  *= -1
		        }
		    }
		
		    if(CurrentPlayer ==2)
		    {
		        if( stage.getChildByName("player" + CurrentPlayer).scaleX < 0)
		        {
		            stage.getChildByName("player" + CurrentPlayer).scaleX  *= -1
		        }
		    }
		}
		
		// סידור מצב שחקן להליכה על החומה
		function walkOnWall()
		{   
		    stage.getChildByName("player" + CurrentPlayer).scaleX = stage.getChildByName("player" + CurrentPlayer).scaleY = 0.16
		    stage.getChildByName("player" + CurrentPlayer).y = 128
		    if(CurrentPlayer == 2)
		    {
		        stage.getChildByName("player" + CurrentPlayer).scaleX *= -1
		    }
		}
		
		// הזזת הדמויות בהתאם לבחירת השחקן אל מול אפשרויות הבחירה
		function movePlayer()
		{
		    if( stage.getChildByName("player" + CurrentPlayer).scaleX < 0)
		    {
		        stage.getChildByName("player" + CurrentPlayer).x = answersContainer.getChildByName("possibleAnswer" + currentOptionSelect).x + 110;
		    } else
		    {
		        stage.getChildByName("player" + CurrentPlayer).x = answersContainer.getChildByName("possibleAnswer" + currentOptionSelect).x + 42;
		    }
		}
		
		// סידור מצב דמויות לקרראת אנימציית סיום
		function endGameAnimation()
		{   
		    stage.getChildByName("player1").x =  1320
		    stage.getChildByName("player1").y =  500
		    stage.getChildByName("player1").scaleX =   stage.getChildByName("player1").scaleY = 1.1
		
		    stage.getChildByName("player2").x = -50
		    stage.getChildByName("player2").y = 500
		    stage.getChildByName("player2").scaleX = -1.1
		    stage.getChildByName("player2").scaleY = 1.1
		
		    // בדיקה מי ניצח
		    if(P1Grade > P2Grade)
		    {
		        stage.getChildByName("player1").gotoAndStop(2)
		        stage.getChildByName("player2").gotoAndStop(4)
		    } else if(P1Grade < P2Grade)
		    {
		        stage.getChildByName("player1").gotoAndStop(4)
		        stage.getChildByName("player2").gotoAndStop(2)
		    } else
		    {
		        stage.getChildByName("player1").gotoAndStop(2)
		        stage.getChildByName("player2").gotoAndStop(2)
		    }
		
		    playerAnimationStop = "play"
		    animationName = "endGamePlayersIn"
		}
		
		// מצב דמויות במסך סיום בהתאם לתוצאה
		function endGamePlayersStop()
		{
		    stage.getChildByName("player1").characterMC5.bricks.visible = false
		    stage.getChildByName("player2").characterMC5.bricks.visible = false
		
		
		    if(P1Grade > P2Grade)
		    {
		        stage.getChildByName("player1").gotoAndStop(5)
		        stage.getChildByName("player2").gotoAndStop(3)
		    } else if(P1Grade < P2Grade)
		    {
		        stage.getChildByName("player1").gotoAndStop(3)
		        stage.getChildByName("player2").gotoAndStop(5)
		    } else 
		    {
		        stage.getChildByName("player1").gotoAndStop(5)
		        stage.getChildByName("player2").gotoAndStop(5)
		    }
		}
		
		// שינוי מצב חומות לפי הצלחת השחקן
		function changeWallAlphaManager()
		{
		
		    if(CurrentPlayer == 1)
		    {
		        ChangeWallAlpha(P1CorrectAnswers)
		    } else
		    {
		        ChangeWallAlpha(P2CorrectAnswers)
		    }
		
		   checkLastTurn()
		
		}
		
		// בדיקה האם זה התור האחרון
		function checkLastTurn()
		{
		    if(P2CorrectAnswers == currentGameFullLength/2 || P1CorrectAnswers == currentGameFullLength/2)
		    {
		
		        if(CurrentPlayer == firstPlayer)
		        { 
		            buildNextButton()
		        } else
		        {
		            interval = setInterval(endGame, 900);
		        }
		        
		    }
		     else 
		    {
		  
		        buildNextButton()
		    }
		}
		
		// חישוב גודל החומות בהתאם לכמות השאלות במשחק
		function wallSizeCalc(questionsAmount)
		{
		    var staticWall = 100;
		    
		    var oneWallSize = (((canvasSize/2)- staticWall - wallToCenter)/(questionsAmount/2)) - wallSpaces;
		
		    return oneWallSize;
		
		}
		
		// שינוי שקיפות החומות
		function ChangeWallAlpha(currentPlayerCorrectAnswers)
		{
		    stage.getChildByName("staticWall").getChildByName("P" + CurrentPlayer + "WallPiece" + (currentPlayerCorrectAnswers-1)).alpha = 1
		    stage.getChildByName("staticWall").getChildByName("P" + CurrentPlayer + "WallPieceDisable" + (currentPlayerCorrectAnswers-1)).alpha = 0.8
		
		}
		
		// פונקציית הזמן לכל שאלה
		function countDownFunction() {
			countdown--;
			stage.getChildByName("nearBackground").timerText.text = countdown;
		
			if (countdown == 0 ) {
				clearInterval(interval);
		        window.removeEventListener("keydown", changeSelectionAndConfirmByArrow);
		        setTimeIsOverScreen();
		
			}
		}
		
		// בניה של מסך איך משחקים
		function howToPlayScreen()
		{
		    if(P1AnswersTime != 0 || P2AnswersTime != 0)
		    {
		        var mainMusic= createjs.Sound.play("clickSound");
		    }
		    clearInterval(interval);
		
		    var howToPlayScreen = new lib.howToPlayScreen
		    howToPlayScreen.name = "howToPlayScreen"
		    stage.addChild(howToPlayScreen)
		
		    howToPlayScreen.addEventListener("mouseover", screenOverFunc)
		    howToPlayScreen.exitBtn.addEventListener("click", closeHowToPlayScreen)
		}
		
		// סגירה של מסך איך משחקים
		function closeHowToPlayScreen()
		{
		    var mainMusic= createjs.Sound.play("clickSound");
		
		    stage.removeChild(stage.getChildByName("howToPlayScreen"))
		    interval = setInterval(countDownFunction, 1000);
		}
		
		// מסך נגמר הזמן
		function setTimeIsOverScreen()
		{
		    var failureManSound = createjs.Sound.play("failureManSound");
		    var failureSound = createjs.Sound.play("failureSound"); 
		
		    var timeIsOverScreen = new lib.timeIsOverScreen;
		    timeIsOverScreen.name = "timeIsOverScreen"
		    stage.addChild(timeIsOverScreen);
		
		    timeIsOverScreen.addEventListener("mouseover", screenOverFunc)
		    timeIsOverScreen.continueGame.addEventListener("mouseover", ButtonOver)
		    timeIsOverScreen.continueGame.addEventListener("click", TimeIsOverContinue);
		
		    timeIsOverScreen.continueGame.shadow = new createjs.Shadow("rgba(0,0,0,0.08)", 5, 5, 10);
		
		    // ביקה איזה שחקן משחק על מנת להגדיל את ערכי המשתנים שלו
		    switch (CurrentPlayer) {
		        case 1:
		            P1ErrorsAmount++
		            P1QuestionsAmount++
		            break;
		         case 2:
		            P2ErrorsAmount++
		            P2QuestionsAmount++
		              break;
		        default:
		            break;
		    }
		
		    addTimeToAnswer();
		}
		
		// סגירה של מסך נגמר הזמן וחזרה למשחק
		function TimeIsOverContinue()
		{
		    var mainMusic= createjs.Sound.play("clickSound");
		
		    stage.removeChild(stage.getChildByName("timeIsOverScreen"));
		
		    if(P2CorrectAnswers == currentGameFullLength/2 || P1CorrectAnswers == currentGameFullLength/2)
		    {
		        checkLastTurn()
		    } else
		    {
		        nextTurn();
		    }
		    
		}
		
		// מסך עצירת משחק
		function pauseGame()
		{
		    var mainMusic= createjs.Sound.play("clickSound");
		    
		    var pauseScreen = new lib.pauseScreen;
		    pauseScreen.name = "pauseScreen";
		    stage.addChild(pauseScreen);
		
		    pauseScreen.addEventListener("mouseover", screenOverFunc)
		
		    clearInterval(interval)
		    pauseTime = 30 - countdown;
		
		    pauseScreen.continueGame.addEventListener("click", pauseGameContinue);
		    pauseScreen.continueGame.addEventListener("mouseover", ButtonOver);
		    pauseScreen.continueGame.addEventListener("mouseout", ButtonOut);
		
		    pauseScreen.continueGame.shadow = new createjs.Shadow("rgba(0,0,0,0.08)", 5, 5, 10);
		}
		
		
		// סגירת מסך עצירת משחק
		function pauseGameContinue()
		{
		    var mainMusic= createjs.Sound.play("clickSound");
		
		    stage.removeChild(stage.getChildByName("pauseScreen"));
		
		    currentOptionSelect = -1
		
		    removeQuestionAndAnswers();
		    setQuestion();
		    setAnswers();
		    SetPlayerTurn();
		    pauseTime = 0;
		}
		
		// הוספת זמן שלקח לשחקן לענות על השאלה
		function addTimeToAnswer()
		{
		    switch (CurrentPlayer) {
		        case 1:
		            P1AnswersTime += timeToQuestion - countdown
		            break;
		         case 2:
		            P2AnswersTime += timeToQuestion - countdown
		              break;
		        default:
		            break;
		    }
		}
		
		// מחיקת כל האלמנטים מהבמה
		function removeAllChildrenFromStage()
		{
		    stage.removeAllChildren()
		}
		
		// הוספת קונפטי לבמה כשהתשובה נכונה
		function setConfetty()
		{
		    var setLeftConfetty = new lib.confetti 
		    setLeftConfetty.compositeOperation = "multiply"
		    setLeftConfetty.regX = ((setLeftConfetty.getBounds().width) / 2);
		    setLeftConfetty.regY = ((setLeftConfetty.getBounds().height) / 2);
		    setLeftConfetty.name = "setLeftConfetty"
		    setLeftConfetty.scaleX = setLeftConfetty.scaleY = 0.4
		    setLeftConfetty.x = 335
		    setLeftConfetty.y = 280
		    stage.addChild(setLeftConfetty)
		
		    var setRightConfetty = new lib.confetti 
		    setRightConfetty.compositeOperation = "multiply"
		    setRightConfetty.regX = ((setRightConfetty.getBounds().width) / 2);
		    setRightConfetty.regY = ((setRightConfetty.getBounds().height) / 2);
		    setRightConfetty.name = "setRightConfetty"
		    setRightConfetty.scaleX = setRightConfetty.scaleY = 0.4
		    setRightConfetty.x = 910
		    setRightConfetty.y = 280
		    stage.addChild(setRightConfetty)
		 
		}
		
		
		// -----------------------------------------------
		//-------- פוקנציות לשינוי צבע הדמויות -----
		// -----------------------------------------------
		
		// פונקציה ראשית לשינוי הצבע של השחקן
		function changeColorByChoosing(evt)
		{
		    var mainMusic= createjs.Sound.play("clickSound");
		
		    // בדיקה איזה כפתור צבע נבחר על ידי השחקן
		    switch (evt.currentTarget.name) {
		        case "greenBtn":
		            choosedColor = 0
		            break;
		
		        case "blueBtn":
		            choosedColor = 1
		                break;
		
		        case "purpleBtn":
		            choosedColor = 2
		            break;
		
		        case "orangeBtn":
		            choosedColor = 3
		            break;
		
		        default:
		            break;
		    }
		
		    // הכנסה של ערך הצבע הנבחר למשתנה המתאים לפי כל שחקן
		    switch (CurrentPlayer) {
		        case 1:
		            player1Color = choosedColor
		            break;
		
		        case 2:
		            player2Color = choosedColor
		            break;
		
		        default:
		            break;
		    }
		
		    changeCharacterColorByChoosing()
		}
		
		// שינוי צבע הדמות
		function changeCharacterColorByChoosing()
		{
		    // של הדמות ושינוי הצבע לצבע הנבחר MovieClipsמעבר על כל ה
		    for(i = 0 ; i<8 ; i ++)
		    {
		        playerCharacterFrames[i].body.gotoAndStop(choosedColor)
		        playerCharacterFrames[i].hat.gotoAndStop(choosedColor)
		        playerCharacterFrames[i].leftHand.gotoAndStop(choosedColor)
		        playerCharacterFrames[i].rightHand.gotoAndStop(choosedColor)
		        playerCharacterFrames[i].rightLeg.gotoAndStop(choosedColor)
		        playerCharacterFrames[i].leftLeg.gotoAndStop(choosedColor)
		        playerCharacterFrames[i].crate.gotoAndStop(choosedColor)
		        playerCharacterFrames[i].frame.gotoAndStop(choosedColor)
		        playerCharacterFrames[i].spinningWheel.wheel.gotoAndStop(choosedColor)
		    }
		}
		
		// איפוס צבע הדמות
		function clearColorChoosing()
		{
		    // של הדמות ושינוי הצבע לצבע הראשוני MovieClipsמעבר על כל ה
		    for(i = 0 ; i<8 ; i ++)
		    {
		        playerCharacterFrames[i].body.gotoAndStop(0)
		        playerCharacterFrames[i].hat.gotoAndStop(0)
		        playerCharacterFrames[i].leftHand.gotoAndStop(0)
		        playerCharacterFrames[i].rightHand.gotoAndStop(0)
		        playerCharacterFrames[i].rightLeg.gotoAndStop(0)
		        playerCharacterFrames[i].leftLeg.gotoAndStop(0)
		        playerCharacterFrames[i].crate.gotoAndStop(0)
		        playerCharacterFrames[i].frame.gotoAndStop(0)
		        playerCharacterFrames[i].spinningWheel.wheel.gotoAndStop(0)
		    }
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("Ehljg5zMDLHAAAMAAABznMjLHAAAg");
	this.shape.setTransform(640,360);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhljA50MAAAhznMDLHAAAMAAABzng");
	this.shape_1.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(629,349,662,382);
// library properties:
lib.properties = {
	id: 'EEA4AA59C246498AA0F3D074AE9C6715',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/CachedBmp_836.png?1644183925969", id:"CachedBmp_836"},
		{src:"images/CachedBmp_835.png?1644183925969", id:"CachedBmp_835"},
		{src:"images/CachedBmp_708.png?1644183925969", id:"CachedBmp_708"},
		{src:"images/CachedBmp_707.png?1644183925969", id:"CachedBmp_707"},
		{src:"images/CachedBmp_704.png?1644183925969", id:"CachedBmp_704"},
		{src:"images/CachedBmp_703.png?1644183925969", id:"CachedBmp_703"},
		{src:"images/CachedBmp_702.png?1644183925969", id:"CachedBmp_702"},
		{src:"images/CachedBmp_700.png?1644183925969", id:"CachedBmp_700"},
		{src:"images/CachedBmp_699.png?1644183925969", id:"CachedBmp_699"},
		{src:"images/CachedBmp_698.png?1644183925969", id:"CachedBmp_698"},
		{src:"images/CachedBmp_695.png?1644183925969", id:"CachedBmp_695"},
		{src:"images/CachedBmp_694.png?1644183925969", id:"CachedBmp_694"},
		{src:"images/CachedBmp_693.png?1644183925969", id:"CachedBmp_693"},
		{src:"images/CachedBmp_681.png?1644183925969", id:"CachedBmp_681"},
		{src:"images/CachedBmp_680.png?1644183925969", id:"CachedBmp_680"},
		{src:"images/CachedBmp_679.png?1644183925969", id:"CachedBmp_679"},
		{src:"images/CachedBmp_678.png?1644183925969", id:"CachedBmp_678"},
		{src:"images/CachedBmp_672.png?1644183925969", id:"CachedBmp_672"},
		{src:"images/CachedBmp_671.png?1644183925969", id:"CachedBmp_671"},
		{src:"images/CachedBmp_665.png?1644183925969", id:"CachedBmp_665"},
		{src:"images/CachedBmp_664.png?1644183925969", id:"CachedBmp_664"},
		{src:"images/CachedBmp_663.png?1644183925969", id:"CachedBmp_663"},
		{src:"images/CachedBmp_670.png?1644183925969", id:"CachedBmp_670"},
		{src:"images/CachedBmp_657.png?1644183925969", id:"CachedBmp_657"},
		{src:"images/CachedBmp_621.png?1644183925969", id:"CachedBmp_621"},
		{src:"images/CachedBmp_620.png?1644183925969", id:"CachedBmp_620"},
		{src:"images/CachedBmp_618.png?1644183925969", id:"CachedBmp_618"},
		{src:"images/CachedBmp_615.png?1644183925969", id:"CachedBmp_615"},
		{src:"images/CachedBmp_613.png?1644183925969", id:"CachedBmp_613"},
		{src:"images/CachedBmp_611.png?1644183925969", id:"CachedBmp_611"},
		{src:"images/CachedBmp_609.png?1644183925969", id:"CachedBmp_609"},
		{src:"images/CachedBmp_607.png?1644183925969", id:"CachedBmp_607"},
		{src:"images/CachedBmp_605.png?1644183925969", id:"CachedBmp_605"},
		{src:"images/CachedBmp_617.png?1644183925969", id:"CachedBmp_617"},
		{src:"images/CachedBmp_603.png?1644183925969", id:"CachedBmp_603"},
		{src:"images/CachedBmp_602.png?1644183925969", id:"CachedBmp_602"},
		{src:"images/CachedBmp_601.png?1644183925969", id:"CachedBmp_601"},
		{src:"images/CachedBmp_600.png?1644183925969", id:"CachedBmp_600"},
		{src:"images/CachedBmp_599.png?1644183925969", id:"CachedBmp_599"},
		{src:"images/CachedBmp_598.png?1644183925969", id:"CachedBmp_598"},
		{src:"images/CachedBmp_597.png?1644183925969", id:"CachedBmp_597"},
		{src:"images/CachedBmp_596.png?1644183925969", id:"CachedBmp_596"},
		{src:"images/CachedBmp_595.png?1644183925969", id:"CachedBmp_595"},
		{src:"images/CachedBmp_594.png?1644183925969", id:"CachedBmp_594"},
		{src:"images/CachedBmp_593.png?1644183925969", id:"CachedBmp_593"},
		{src:"images/CachedBmp_581.png?1644183925969", id:"CachedBmp_581"},
		{src:"images/CachedBmp_579.png?1644183925969", id:"CachedBmp_579"},
		{src:"images/CachedBmp_577.png?1644183925969", id:"CachedBmp_577"},
		{src:"images/CachedBmp_564.png?1644183925969", id:"CachedBmp_564"},
		{src:"images/CachedBmp_563.png?1644183925969", id:"CachedBmp_563"},
		{src:"images/CachedBmp_562.png?1644183925969", id:"CachedBmp_562"},
		{src:"images/CachedBmp_561.png?1644183925969", id:"CachedBmp_561"},
		{src:"images/CachedBmp_560.png?1644183925969", id:"CachedBmp_560"},
		{src:"images/CachedBmp_559.png?1644183925969", id:"CachedBmp_559"},
		{src:"images/CachedBmp_558.png?1644183925969", id:"CachedBmp_558"},
		{src:"images/CachedBmp_557.png?1644183925969", id:"CachedBmp_557"},
		{src:"images/CachedBmp_556.png?1644183925969", id:"CachedBmp_556"},
		{src:"images/CachedBmp_555.png?1644183925969", id:"CachedBmp_555"},
		{src:"images/CachedBmp_554.png?1644183925969", id:"CachedBmp_554"},
		{src:"images/CachedBmp_490.png?1644183925969", id:"CachedBmp_490"},
		{src:"images/CachedBmp_491.png?1644183925969", id:"CachedBmp_491"},
		{src:"images/CachedBmp_462.png?1644183925969", id:"CachedBmp_462"},
		{src:"images/CachedBmp_460.png?1644183925969", id:"CachedBmp_460"},
		{src:"images/CachedBmp_459.png?1644183925969", id:"CachedBmp_459"},
		{src:"images/CachedBmp_705.png?1644183925969", id:"CachedBmp_705"},
		{src:"images/CachedBmp_439.png?1644183925969", id:"CachedBmp_439"},
		{src:"images/CachedBmp_438.png?1644183925969", id:"CachedBmp_438"},
		{src:"images/CachedBmp_437.png?1644183925969", id:"CachedBmp_437"},
		{src:"images/CachedBmp_424.png?1644183925969", id:"CachedBmp_424"},
		{src:"images/CachedBmp_423.png?1644183925969", id:"CachedBmp_423"},
		{src:"images/CachedBmp_422.png?1644183925969", id:"CachedBmp_422"},
		{src:"images/CachedBmp_419.png?1644183925969", id:"CachedBmp_419"},
		{src:"images/2Chineese_atlas_1.png?1644183924232", id:"2Chineese_atlas_1"},
		{src:"images/2Chineese_atlas_2.png?1644183924232", id:"2Chineese_atlas_2"},
		{src:"images/2Chineese_atlas_3.png?1644183924232", id:"2Chineese_atlas_3"},
		{src:"images/2Chineese_atlas_4.png?1644183924233", id:"2Chineese_atlas_4"},
		{src:"images/2Chineese_atlas_5.png?1644183924233", id:"2Chineese_atlas_5"},
		{src:"images/2Chineese_atlas_6.png?1644183924233", id:"2Chineese_atlas_6"},
		{src:"images/2Chineese_atlas_7.png?1644183924234", id:"2Chineese_atlas_7"},
		{src:"images/2Chineese_atlas_8.png?1644183924234", id:"2Chineese_atlas_8"},
		{src:"images/2Chineese_atlas_9.png?1644183924235", id:"2Chineese_atlas_9"},
		{src:"images/2Chineese_atlas_10.png?1644183924235", id:"2Chineese_atlas_10"},
		{src:"images/2Chineese_atlas_11.png?1644183924235", id:"2Chineese_atlas_11"},
		{src:"images/2Chineese_atlas_12.png?1644183924236", id:"2Chineese_atlas_12"},
		{src:"images/2Chineese_atlas_13.png?1644183924236", id:"2Chineese_atlas_13"},
		{src:"images/2Chineese_atlas_14.png?1644183924236", id:"2Chineese_atlas_14"},
		{src:"images/2Chineese_atlas_15.png?1644183924237", id:"2Chineese_atlas_15"},
		{src:"images/2Chineese_atlas_16.png?1644183924237", id:"2Chineese_atlas_16"},
		{src:"images/2Chineese_atlas_17.png?1644183924237", id:"2Chineese_atlas_17"},
		{src:"images/2Chineese_atlas_18.png?1644183924237", id:"2Chineese_atlas_18"},
		{src:"images/2Chineese_atlas_19.png?1644183924238", id:"2Chineese_atlas_19"},
		{src:"images/2Chineese_atlas_20.png?1644183924238", id:"2Chineese_atlas_20"},
		{src:"images/2Chineese_atlas_21.png?1644183924238", id:"2Chineese_atlas_21"},
		{src:"images/2Chineese_atlas_22.png?1644183924239", id:"2Chineese_atlas_22"},
		{src:"images/2Chineese_atlas_23.png?1644183924239", id:"2Chineese_atlas_23"},
		{src:"images/2Chineese_atlas_24.png?1644183924240", id:"2Chineese_atlas_24"},
		{src:"images/2Chineese_atlas_25.png?1644183924240", id:"2Chineese_atlas_25"},
		{src:"images/2Chineese_atlas_26.png?1644183924241", id:"2Chineese_atlas_26"},
		{src:"images/2Chineese_atlas_27.png?1644183924241", id:"2Chineese_atlas_27"},
		{src:"images/2Chineese_atlas_28.png?1644183924242", id:"2Chineese_atlas_28"},
		{src:"images/2Chineese_atlas_29.png?1644183924242", id:"2Chineese_atlas_29"},
		{src:"images/2Chineese_atlas_30.png?1644183924243", id:"2Chineese_atlas_30"},
		{src:"images/2Chineese_atlas_31.png?1644183924243", id:"2Chineese_atlas_31"},
		{src:"images/2Chineese_atlas_32.png?1644183924244", id:"2Chineese_atlas_32"},
		{src:"images/2Chineese_atlas_33.png?1644183924249", id:"2Chineese_atlas_33"},
		{src:"sounds/clickSound.mp3?1644183925969", id:"clickSound"},
		{src:"sounds/failure.mp3?1644183925969", id:"failure"},
		{src:"sounds/failureManSound.mp3?1644183925969", id:"failureManSound"},
		{src:"sounds/lotterySound.mp3?1644183925969", id:"lotterySound"},
		{src:"sounds/mainMusic.mp3?1644183925969", id:"mainMusic"},
		{src:"sounds/startScene.mp3?1644183925969", id:"startScene"},
		{src:"sounds/success.mp3?1644183925969", id:"success"},
		{src:"sounds/successManSound.mp3?1644183925969", id:"successManSound"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1644183925969", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1644183925969", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1644183925969", id:"an.TextInput"},
		{src:"components/ui/src/css.js?1644183925969", id:"an.CSS"},
		{src:"components/ui/src/combobox.js?1644183925969", id:"an.ComboBox"}
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
an.compositions['EEA4AA59C246498AA0F3D074AE9C6715'] = {
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
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
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