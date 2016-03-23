$(document).ajaxComplete(function(){
  //Estadio Aguilas del Zulia
if ($('#map1').length == 1) {


 
    var rsr = Raphael('map1', '783.04701', '642.00001');

var layer1 = rsr.set();
layer1.attr({'id': 'layer1','style': 'display:none','name': 'layer1'});layer1.transform("t0,-410.36203");
var layer2 = rsr.set();
var oficial = rsr.path("m 374.39083,448.14259 10.82374,0.47752 9.39118,-0.47752 3.66097,40.42982 -14.00718,0.95504 -13.02482,0.13193 z").attr({id: 'oficial',parent: 'layer2',fill: '#000000',"fill-rule": 'evenodd',stroke: '#000000',"stroke-width": '1',"stroke-linecap": 'butt',"stroke-linejoin": 'miter',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-opacity": '1'}).transform("t0,142").data('id', 'oficial');
var vip10 = rsr.path("m 402.6478,487.86732 17.67066,-3.60166 15.53218,-4.50209 -11.70542,-39.28063 -12.94348,4.16442 -12.26816,1.46319 z").attr({id: 'vip-10',parent: 'layer2',fill: '#006837',stroke: 'none','stroke-width':'1','stroke-opacity':'1',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,142").data('id', 'vip10');
var vip12 = rsr.path("m 387.2292,399.94063 16.87229,-2.06926 14.96221,-6.52606 18.46402,36.92803 -23.23919,9.23201 -26.10431,3.18344 z").attr({id: 'vip-12',parent: 'layer2',fill: '#006837',stroke: 'none','stroke-width':'1','stroke-opacity':'1',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,142").data('id', 'vip12');
var rojoarriba9 = rsr.path("m 439.9153,478.09433 21.01078,-9.232 18.94153,-12.09711 -23.55754,-33.74457 -6.04855,3.66096 4.77518,10.18704 -15.75809,7.95863 -5.25269,-8.75448 -6.3669,2.70592 z").attr({id: 'rojo-arriba-9',parent: 'layer2',fill: '0-#c2272d:0','fill-opacity': '1',stroke: 'none','stroke-width':'1','stroke-opacity':'1',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,142").data('id', 'rojoarriba9');
var rojoariba8 = rsr.path("m 482.2552,394.52875 29.92444,22.92085 -3.18346,2.70593 -0.31834,4.61601 1.27338,1.59173 -11.61959,13.68884 -15.12139,15.43972 -24.35341,-34.38125 12.73381,-11.93795 z").attr({id: 'rojo-ariba-8',parent: 'layer2',fill: '0-#c2272d:0','fill-opacity': '1',stroke: 'none','stroke-width':'1','stroke-opacity':'1',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,142").data('id', 'rojoariba8');
var vip11 = rsr.path("m 422.08798,389.27608 13.05215,-10.50539 9.39118,-13.68884 32.15285,24.83091 -15.75808,21.16994 -19.41905,15.28057 z").attr({id: 'vip-11',parent: 'layer2',fill: '#006837',stroke: 'none','stroke-width':'1','stroke-opacity':'1',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,142").data('id', 'vip11');
var arriba4 = rsr.path("m 517.27316,416.17622 25.94511,-36.92801 -33.74457,-23.39836 -25.46759,35.33628 z").attr({id: 'arriba-4',parent: 'layer2',fill: '0-#a67c52:0','fill-opacity': '1',stroke: 'none','stroke-width':'1','stroke-opacity':'1',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,142").data('id', 'arriba4');
var arriba3 = rsr.path("m 519.50158,343.2752 7.16276,5.57103 10.34621,-14.4847 -7.32193,-6.04854 5.7302,-7.79945 33.90375,22.44331 -23.55754,32.63037 -33.26705,-22.12498 z").attr({id: 'arriba-3',parent: 'layer2',fill: '0-#a67c52:0','fill-opacity': '1',stroke: 'none','stroke-width':'1','stroke-opacity':'1',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,142").data('id', 'arriba3');
var abajo7 = rsr.path("m 446.60055,362.69425 32.15286,24.67175 37.72388,-53.16362 -32.9487,-21.80664 z").attr({id: 'abajo-7',parent: 'layer2',fill: '0-#f8931f:0','fill-opacity': '1',stroke: 'none','stroke-width':'1','stroke-opacity':'1',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,142").data('id', 'abajo7');
var arriba2 = rsr.path("m 537.64724,317.8076 24.03504,-33.10789 34.06294,22.125 -23.55754,32.9487 z").attr({id: 'arriba-2',parent: 'layer2',fill: '0-#a67c52:0','fill-opacity': '1',stroke: 'none','stroke-width':'1','stroke-opacity':'1',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,142").data('id', 'arriba2');
var abajo6 = rsr.path("m 523.00337,260.66466 32.63037,21.16995 -36.92803,50.13935 -32.15285,-21.96581 z").attr({id: 'abajo-6',parent: 'layer2',fill: '0-#f8931f:0','fill-opacity': '1',stroke: 'none','stroke-width':'1','stroke-opacity':'1',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,142").data('id', 'abajo6');
var lateral5 = rsr.path("m 558.02132,278.81033 11.46042,-16.55393 -32.78953,-21.32914 -11.93794,17.03146 z").attr({id: 'lateral-5',parent: 'layer2',fill: '0-#28aae1:0','fill-opacity': '1',stroke: 'none','stroke-width':'1','stroke-opacity':'1',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,142").data('id', 'lateral5');
var lateral1 = rsr.path("m 597.42327,303.16832 11.46042,-16.55394 -32.78953,-21.32912 -11.93794,17.03146 z").attr({id: 'lateral-1',parent: 'layer2',fill: '0-#28aae1:0','fill-opacity': '1',stroke: 'none','stroke-width':'1','stroke-opacity':'1',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,142").data('id', 'lateral1');
var lateral24 = rsr.path("m 210.46137,275.47227 -11.46041,-16.55394 32.78952,-21.32912 11.93794,17.03146 z").attr({id: 'lateral-24',parent: 'layer2',fill: '0-#28aae1:0','fill-opacity': '1',stroke: 'none','stroke-width':'1','stroke-opacity':'1',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,142").data('id', 'lateral24');
var lateral21 = rsr.path("m 170.34989,299.66651 -11.46042,-16.55393 32.78954,-21.32913 11.93793,17.03146 z").attr({id: 'lateral-21',parent: 'layer2',fill: '0-#28aae1:0','fill-opacity': '1',stroke: 'none','stroke-width':'1','stroke-opacity':'1',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,142").data('id', 'lateral21');
var abajo23 = rsr.path("m 245.57139,260.33227 -32.63542,20.98428 36.93378,49.6996 32.15781,-21.77317 z").attr({id: 'abajo-23',parent: 'layer2',fill: '0-#f8931f:0','fill-opacity': '1',stroke: 'none','stroke-width':'1','stroke-opacity':'1',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,142").data('id', 'abajo23');
var abajo22 = rsr.path("m 319.7649,364.60432 -32.15286,24.67176 -37.72388,-53.16363 32.9487,-21.80664 z").attr({id: 'abajo-22',parent: 'layer2',fill: '0-#f8931f:0','fill-opacity': '1',stroke: 'none','stroke-width':'1','stroke-opacity':'1',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,142").data('id', 'abajo22');
var vip17 = rsr.path("m 343.72448,392.45952 -13.05215,-10.50539 -9.39117,-13.68884 -32.15285,24.83091 15.75807,21.16995 19.41905,15.28056 z").attr({id: 'vip-17',parent: 'layer2',fill: '#006837',stroke: 'none','stroke-width':'1','stroke-opacity':'1',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,142").data('id', 'vip17');
var vip16 = rsr.path("m 381.18379,401.21401 -16.87229,-2.06925 -14.96221,-6.52607 -18.46403,36.92804 23.23921,9.23201 26.1043,3.18344 z").attr({id: 'vip-16',parent: 'layer2',fill: '#006837',stroke: 'none','stroke-width':'1','stroke-opacity':'1',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,142").data('id', 'vip16');
var vip13 = rsr.path("m 366.06686,489.14071 -17.67065,-3.60165 -15.53219,-4.5021 11.70543,-39.28064 12.94347,4.16443 12.26816,1.46318 z").attr({id: 'vip-13',parent: 'layer2',fill: '#006837',stroke: 'none','stroke-width':'1','stroke-opacity':'1',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,142").data('id', 'vip13');
var arribaroja14 = rsr.path("m 328.34767,480.00441 -21.01079,-9.23201 -18.94153,-12.09711 23.55754,-33.74457 6.04857,3.66096 -4.7752,10.18704 15.75809,7.95864 5.2527,-8.75449 6.3669,2.70592 z").attr({id: 'arriba-roja-14',parent: 'layer2',fill: '0-#c2272d:0','fill-opacity': '1',stroke: 'none','stroke-width':'1','stroke-opacity':'1',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,142").data('id', 'arribaroja14');
var arribaroja15 = rsr.path("m 284.646,396.43883 -29.92445,22.92086 3.18347,2.70591 0.31834,4.61601 -1.27339,1.59173 11.6196,13.68884 15.12139,15.43972 24.3534,-34.38125 -12.73381,-11.93795 z").attr({id: 'arriba-roja-15',parent: 'layer2',fill: '0-#c2272d:0','fill-opacity': '1',stroke: 'none','stroke-width':'1','stroke-opacity':'1',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,142").data('id', 'arribaroja15');
var arriba18 = rsr.path("m 248.91914,416.8129 -25.94512,-36.92801 33.74457,-23.39836 25.4676,35.33629 z").attr({id: 'arriba-18',parent: 'layer2',fill: '0-#a67c52:0','fill-opacity': '1',stroke: 'none','stroke-width':'1','stroke-opacity':'1',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,142").data('id', 'arriba18');
var arriba19 = rsr.path("m 246.53942,342.63851 -7.16277,5.57104 -10.34621,-14.4847 7.32193,-6.04854 -5.7302,-7.79945 -33.90375,22.44331 23.55754,32.63036 33.26705,-22.12497 z").attr({id: 'arriba-19',parent: 'layer2',fill: '0-#a67c52:0','fill-opacity': '1',stroke: 'none','stroke-width':'1','stroke-opacity':'1',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,142").data('id', 'arriba19');
var arriba20 = rsr.path("m 229.63739,317.17092 -24.03504,-33.1079 -34.06295,22.125 23.55755,32.9487 z").attr({id: 'arriba-20',parent: 'layer2',fill: '0-#a67c52:0','fill-opacity': '1',stroke: 'none','stroke-width':'1','stroke-opacity':'1',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,142").data('id', 'arriba20');
var path7649 = rsr.path("m 154.24558,277.62023 75.63494,-44.12037 c -35.38802,-60.67979 -66.2521,-91.198 -82.95187,-124.47512 -37.29832,-74.323271 108.05327,-153.090518 249.5465,-150.651472 138.86072,2.393657 266.32138,79.099726 233.86959,148.139982 -18.00828,38.31209 -54.04291,77.34024 -90.72118,128.78743 l 72.03326,45.92121 C 687.39668,188.76234 733.90501,117.00784 721.95399,60.345004 687.03422,-105.21853 458.58769,-128.49395 393.75455,-130.20573 318.78918,-132.18501 2.6629023,-75.459819 64.545859,134.48226 c 12.975221,44.0193 52.678081,86.77523 89.699721,143.13797 z").attr({id: 'path7649',parent: 'layer2',fill: '0-#cccccc:0','fill-opacity': '1',stroke: 'none','stroke-width':'1','stroke-opacity':'1',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,142").data('id', 'path7649');
layer2.attr({'id': 'layer2','style': 'display:inline','name': 'layer2'});layer2.transform("t0,142");


var rsrGroups = [layer1,layer2];
layer1.push(
);
layer2.push(
  oficial ,
  vip10 ,
  vip12 ,
  rojoarriba9 ,
  rojoariba8 ,
  vip11 ,
  arriba4 ,
  arriba3 ,
  abajo7 ,
  arriba2 ,
  abajo6 ,
  lateral5 ,
  lateral1 ,
  lateral24 ,
  lateral21 ,
  abajo23 ,
  abajo22 ,
  vip17 ,
  vip16 ,
  vip13 ,
  arribaroja14 ,
  arribaroja15 ,
  arriba18 ,
  arriba19 ,
  arriba20 ,
  path7649 
);
  
}//iff Estadio Águilas del Zulia




if ($('#map2').length == 1) { //Estadio Navegantes del Magallanes


}//iff Navegantes del Magallanes

if ($('#map3').length == 1) { //Estadio Leones del Caracas


}//iff Estadio Leones del Caracas


if ($('#map4').length == 1) { //Estadio Bravos de Margarita


 

    var rsr = Raphael('map4', '783.04701', '642');

var layer1 = rsr.set();
layer1.attr({'id': 'layer1','style': 'display:inline','name': 'layer1'});layer1.transform("t0,-510.3622");
var layer2 = rsr.set();
var l1 = rsr.path("M 114.08158,614.69763 127.95854,595.52508 63.46038,549.25575 49.665253,568.76827 Z").attr({id: 'l1',parent: 'layer2',fill: '#5da35a',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1'}).transform("t0,-178").data('id', 'l1');
var l1a = rsr.path("m 118.51542,617.859 13.57126,-19.3725 24.31502,17.44297 -13.66223,19.20146 z").attr({id: 'l1a',parent: 'layer2',fill: '#2c337a',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1'}).transform("t0,-178").data('id', 'l1a');
var l56a = rsr.path("m 228.54357,462.15085 13.57126,-19.37249 24.31502,17.44297 -13.66223,19.20145 z").attr({id: 'l56a',parent: 'layer2',fill: '#2c337a',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1'}).transform("t0,-178").data('id', 'l56a');
var l6 = rsr.path("m 225.16047,460.10811 13.87696,-19.17256 -64.49816,-46.26932 -13.79512,19.51252 z").attr({id: 'l6',parent: 'layer2',fill: '#5da35a',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1'}).transform("t0,-178").data('id', 'l6');
var l2a = rsr.path("m 133.98099,595.78245 21.48008,-30.66207 24.61154,17.54105 -21.5972,30.35357 z").attr({id: 'l2a',parent: 'layer2',fill: '#2c337a',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1'}).transform("t0,-178").data('id', 'l2a');
var l2 = rsr.path("M 151.83551,562.5364 129.86709,592.8882 64.91772,547.19442 86.827496,516.20415 Z").attr({id: 'l2',parent: 'layer2',fill: '#5da35a',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1'}).transform("t0,-178").data('id', 'l2');
var l3 = rsr.path("m 175.23763,529.63269 -21.96842,30.3518 -64.949374,-45.69378 21.909774,-30.99027 z").attr({id: 'l3',parent: 'layer2',fill: '#5da35a',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1'}).transform("t0,-178").data('id', 'l3');
var l4 = rsr.path("m 199.07644,496.77838 -21.96842,30.3518 -64.94938,-45.69378 21.90978,-30.99027 z").attr({id: 'l4',parent: 'layer2',fill: '#5da35a',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1'}).transform("t0,-178").data('id', 'l4');
var l5 = rsr.path("m 224.11714,461.80398 -22.9238,32.67229 -65.99719,-46.1713 23.46521,-32.91676 z").attr({id: 'l5',parent: 'layer2',fill: '#5da35a',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1'}).transform("t0,-178").data('id', 'l5');
var l3a = rsr.path("m 157.41303,562.41292 21.48008,-30.66207 24.61155,17.54104 -21.5972,30.35358 z").attr({id: 'l3a',parent: 'layer2',fill: '#2c337a',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1'}).transform("t0,-178").data('id', 'l3a');
var l4a = rsr.path("m 181.05152,529.55861 21.48008,-30.66207 24.61154,17.54105 -21.5972,30.35357 z").attr({id: 'l4a',parent: 'layer2',fill: '#2c337a',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1'}).transform("t0,-178").data('id', 'l4a');
var l5a = rsr.path("m 204.48968,496.70433 22.28139,-32.46505 24.81187,17.54104 -22.59884,32.15655 z").attr({id: 'l5a',parent: 'layer2',fill: '#2c337a',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1'}).transform("t0,-178").data('id', 'l5a');
var l12 = rsr.path("m 668.65253,619.34818 -13.47794,-19.77212 65.75998,-45.89933 13.39849,19.83439 z").attr({id: 'l12',parent: 'layer2',fill: '#5da35a',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1'}).transform("t0,-178").data('id', 'l12');
var l12b = rsr.path("m 664.91279,621.42845 -13.18103,-19.40873 -23.61589,16.88075 12.13617,18.66825 z").attr({id: 'l12b',parent: 'layer2',fill: '#2c337a',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1'}).transform("t0,-178").data('id', 'l12b');
var l7b = rsr.path("m 558.39442,462.33037 -12.98072,-18.49007 -24.41719,17.12971 12.86874,18.91721 z").attr({id: 'l7b',parent: 'layer2',fill: '#2c337a',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1'}).transform("t0,-178").data('id', 'l7b');
var l7 = rsr.path("m 562.28123,461.25561 -13.47797,-19.2885 66.04919,-44.02759 12.59718,19.03306 z").attr({id: 'l7',parent: 'layer2',fill: '#5da35a',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1'}).transform("t0,-178").data('id', 'l7');
var l11b = rsr.path("m 649.89192,599.55437 -22.27898,-32.30111 -23.3373,16.13053 22.10943,32.55413 z").attr({id: 'l11b',parent: 'layer2',fill: '#2c337a',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1'}).transform("t0,-178").data('id', 'l11b');
var l11 = rsr.path("m 631.98415,564.34335 22.46998,33.11894 65.06501,-45.88088 -21.27981,-31.50148 z").attr({id: 'l11',parent: 'layer2',fill: '#66a863',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1'}).transform("t0,-178").data('id', 'l11');
var l10 = rsr.path("m 609.82153,530.89688 20.77015,31.13578 66.19823,-43.89773 -21.27981,-31.50148 z").attr({id: 'l10',parent: 'layer2',fill: '#5da35a',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1'}).transform("t0,-178").data('id', 'l10');
var l9 = rsr.path("m 587.23473,497.21732 20.48687,30.56916 65.06502,-43.61443 -20.42989,-30.93484 z").attr({id: 'l9',parent: 'layer2',fill: '#5da35a',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1'}).transform("t0,-178").data('id', 'l9');
var l8 = rsr.path("m 563.89555,463.17977 20.49609,31.32528 65.66782,-44.64631 -20.78724,-31.25608 z").attr({id: 'l8',parent: 'layer2',fill: '#5da35a',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1'}).transform("t0,-178").data('id', 'l8');
var l10b = rsr.path("m 625.88304,563.76855 -20.46182,-30.15195 -23.33727,16.41382 19.84299,30.28767 z").attr({id: 'l10b',parent: 'layer2',fill: '#2c337a',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1'}).transform("t0,-178").data('id', 'l10b');
var l9b = rsr.path("m 603.89148,530.53827 -21.14577,-30.88455 -23.62057,15.84721 20.12628,31.7042 z").attr({id: 'l9b',parent: 'layer2',fill: '#2c337a',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1'}).transform("t0,-178").data('id', 'l9b');
var l8b = rsr.path("m 581.15571,496.05151 -20.6391,-30.5966 -24.89976,17.22939 20.94742,30.68367 z").attr({id: 'l8b',parent: 'layer2',fill: '#2c337a',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1'}).transform("t0,-178").data('id', 'l8b');
var i1 = rsr.path("m 221.5769,409.54407 21.64364,-31.75596 28.38532,18.18761 -22.29085,32.92076 z").attr({id: 'i1',parent: 'layer2',fill: '#ccff00',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,-178").data('id', 'i1');
var v1 = rsr.path("m 257.28012,434.20739 14.19577,10.05951 21.72309,-33.95719 -14.16493,-9.2184 z").attr({id: 'v1',parent: 'layer2',fill: '#81b2b9',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1'}).transform("t0,-178").data('id', 'v1');
var v2 = rsr.path("m 280.94498,398.24639 14.19577,9.06792 21.72309,-32.9656 -14.16493,-9.2184 z").attr({id: 'v2',parent: 'layer2',fill: '#81b2b9',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1'}).transform("t0,-178").data('id', 'v2');
var i2 = rsr.path("m 244.8489,373.79831 22.91851,-34.30575 27.96037,19.88748 -22.14921,32.7791 z").attr({id: 'i2',parent: 'layer2',fill: '#ccff00',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,-178").data('id', 'i2');
var i3 = rsr.path("m 270.06295,335.83464 21.64364,-31.75595 28.38532,18.18761 -22.29085,32.92075 z").attr({id: 'i3',parent: 'layer2',fill: '#ccff00',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,-178").data('id', 'i3');
var v3 = rsr.path("m 306.04255,360.76602 18.10235,-26.65636 17.33647,18.18761 c -6.74849,6.24984 -10.68988,14.37111 -14.07505,22.86322 z").attr({id: 'v3',parent: 'layer2',fill: '#81b2b9',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1'}).transform("t0,-178").data('id', 'v3');
var v4 = rsr.path("m 325.65771,331.82512 c 9.55659,-15.5809 23.7647,-21.85856 40.48336,-23.11497 l 6.85422,27.53688 c -8.85093,1.79815 -24.20391,5.90508 -29.94007,14.50554 z").attr({id: 'v4',parent: 'layer2',fill: '#81b2b9',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1'}).transform("t0,-178").data('id', 'v4');
var i4 = rsr.path("m 295.13535,300.42078 c 9.4132,-9.85819 20.18706,-17.80447 33.54241,-22.12338 l 15.495,29.52004 c -7.09977,2.26502 -14.19953,6.68195 -21.2993,11.95575 z").attr({id: 'i4',parent: 'layer2',fill: '#ccff00',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,-178").data('id', 'i4');
var i5 = rsr.path("m 329.98173,273.08127 c 3.28562,-1.22044 6.54857,-2.45221 10.5693,-3.30509 l 0.82261,5.59152 c 9.03611,-2.8893 17.50561,-2.18539 26.54171,-2.1699 l 0.76319,30.6533 c -7.33432,0.21541 -14.62101,0.669 -21.5826,2.74813 z").attr({id: 'i5',parent: 'layer2',fill: '#cfff0e',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,-178").data('id', 'i5');
var v5 = rsr.path("m 370.91915,308.35349 c 14.04936,-0.94528 28.94994,-1.14573 46.00778,0.5415 l -5.61115,26.97025 c -11.77428,-2.06591 -23.54855,-2.03264 -35.32284,0.0566 z").attr({id: 'v5',parent: 'layer2',fill: '#81b2b9',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1'}).transform("t0,-178").data('id', 'v5');
var vt1 = rsr.path("m 335.78946,364.59072 c 10.1469,-15.85234 24.6517,-22.85106 39.63344,-24.10656 l -0.51168,9.2633 c -15.89975,1.46646 -24.49465,10.56998 -32.20648,20.59674 z").attr({id: 'vt1',parent: 'layer2',fill: '#81b2b9',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1'}).transform("t0,-178").data('id', 'vt1');
var pam = rsr.path("m 371.96776,286.20546 46.5744,0.11652 0.055,16.20444 -46.9383,0.6233 z").attr({id: 'pam',parent: 'layer2',fill: '#88b6bd',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,-178").data('id', 'pam');
var s1 = rsr.path("m 283.84858,235.54844 c 9.37351,-12.244 18.97876,-23.67686 30.45799,-28.55066 l 28.58564,41.42602 c -6.39784,5.11774 -11.46843,11.12035 -16.28107,17.29492 z").attr({id: 's1',parent: 'layer2',fill: '#ad1d29',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,-178").data('id', 's1');
var s2 = rsr.path("m 317.70369,204.89777 c 13.32668,-8.3617 28.76744,-13.55222 48.48734,-12.32383 l 10.5563,50.84158 c -10.08441,0.0444 -23.8192,-1.07663 -31.1052,4.07307 z").attr({id: 's2',parent: 'layer2',fill: '#ad1d29',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,-178").data('id', 's2');
var s3 = rsr.path("m 369.98881,192.47724 48.28701,-0.10366 -9.67663,51.44258 -28.90163,0.0664 z").attr({id: 's3',parent: 'layer2',fill: '#b22935',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,-178").data('id', 's3');
var s4 = rsr.path("m 414.06055,243.76202 8.82277,-50.58709 c 18.38442,0.40913 35.61234,2.8743 49.21924,11.77702 l -29.50259,42.53664 c -7.55061,-5.16735 -18.49808,-3.54082 -28.53942,-3.72657 z").attr({id: 's4',parent: 'layer2',fill: '#ad1d29',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,-178").data('id', 's4');
var s5 = rsr.path("m 446.31307,249.57162 29.85701,-41.97285 c 12.00194,8.64278 22.32015,17.80709 29.58727,29.60649 l -42.72411,29.11446 c -5.09949,-5.77227 -9.15181,-11.96342 -16.72017,-16.7481 z").attr({id: 's5',parent: 'layer2',fill: '#ad1d29',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,-178").data('id', 's5');
var grada_a = rsr.path("m 98.380766,690.53998 58.473164,-50.17117 102.04435,117.62977 -56.28734,50.76934 z").attr({id: 'grada_a',parent: 'layer2',fill: '#e99523',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1'}).transform("t0,-178").data('id', 'grada_a');
var grada_b = rsr.path("m 527.8458,760.8166 99.77083,-118.299 58.03359,47.83661 -101.21936,120.26513 z").attr({id: 'grada_b',parent: 'layer2',fill: '#e99523',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1'}).transform("t0,-178").data('id', 'grada_b');
var v8 = rsr.path("m 506.40644,398.06959 -14.19577,9.63456 -22.2897,-34.09885 13.88163,-8.93509 z").attr({id: 'v8',parent: 'layer2',fill: '#81b2b9',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1'}).transform("t0,-178").data('id', 'v8');
var i9 = rsr.path("m 544.20233,375.32139 -22.6352,-34.30576 -28.24367,19.03756 22.71581,34.19565 z").attr({id: 'i9',parent: 'layer2',fill: '#ccff00',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,-178").data('id', 'i9');
var i8 = rsr.path("m 519.2716,336.7911 -21.07704,-31.18934 -28.95194,18.47093 21.44095,32.35414 z").attr({id: 'i8',parent: 'layer2',fill: '#ccff00',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,-178").data('id', 'i8');
var v7 = rsr.path("m 483.29198,360.87254 -20.65208,-26.65636 -15.63664,18.75424 c 6.74849,6.24983 10.97319,13.23786 14.35836,21.72998 z").attr({id: 'v7',parent: 'layer2',fill: '#81b2b9',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1'}).transform("t0,-178").data('id', 'v7');
var i7 = rsr.path("m 496.18232,302.51048 c -9.4132,-9.85819 -20.47037,-19.78765 -33.82571,-24.10656 l -15.77831,29.80336 c 7.09977,2.26501 13.06632,7.24857 20.16608,12.52237 z").attr({id: 'i7',parent: 'layer2',fill: '#ccff00',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,-178").data('id', 'i7');
var v6 = rsr.path("m 461.24675,332.14751 c -9.55659,-15.5809 -23.7647,-21.85856 -40.48336,-23.11497 l -6.85422,27.53687 c 8.85093,1.79816 24.20391,5.90508 29.94008,14.50554 z").attr({id: 'v6',parent: 'layer2',fill: '#88b6bd',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,-178").data('id', 'v6');
var vt2 = rsr.path("m 451.09703,364.22136 c -10.1469,-15.85234 -24.6517,-22.85106 -39.63344,-24.10656 l 0.51168,9.2633 c 15.89975,1.46646 24.49465,10.56998 32.20648,20.59674 z").attr({id: 'vt2',parent: 'layer2',fill: '#81b2b9',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1'}).transform("t0,-178").data('id', 'vt2');
var v9 = rsr.path("m 530.05637,434.65186 -14.19577,10.05951 -21.72309,-33.95719 14.16493,-9.2184 z").attr({id: 'v9',parent: 'layer2',fill: '#81b2b9',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1'}).transform("t0,-178").data('id', 'v9');
var i10 = rsr.path("m 567.71061,410.62874 -21.64364,-31.75596 -28.38532,18.18762 21.44095,32.63744 z").attr({id: 'i10',parent: 'layer2',fill: '#ccff00',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,-178").data('id', 'i10');
var i6 = rsr.path("m 460.32644,273.14786 c -3.28562,-1.22044 -6.54857,-2.45221 -10.5693,-3.30509 l -0.82261,5.59152 c -9.03611,-2.8893 -17.50561,-2.18539 -26.5417,-2.1699 l -0.76319,30.6533 c 7.33432,0.21542 14.621,0.66901 21.58259,2.74814 z").attr({id: 'i6',parent: 'layer2',fill: '#ccff00',stroke: '#000000',"fill-opacity": '1',opacity: '0.945',"stroke-width": '0',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-linecap": 'butt',"stroke-linejoin": 'bevel',"stroke-opacity": '1',"fill-rule": 'nonzero'}).transform("t0,-178").data('id', 'i6');
layer2.attr({'id': 'layer2','style': 'display:inline','name': 'layer2'});layer2.transform("t0,-178");


var rsrGroups = [layer1,layer2];
layer1.push(
);
layer2.push(
  l1 ,
  l1a ,
  l56a ,
  l6 ,
  l2a ,
  l2 ,
  l3 ,
  l4 ,
  l5 ,
  l3a ,
  l4a ,
  l5a ,
  l12 ,
  l12b ,
  l7b ,
  l7 ,
  l11b ,
  l11 ,
  l10 ,
  l9 ,
  l8 ,
  l10b ,
  l9b ,
  l8b ,
  i1 ,
  v1 ,
  v2 ,
  i2 ,
  i3 ,
  v3 ,
  v4 ,
  i4 ,
  i5 ,
  v5 ,
  vt1 ,
  pam ,
  s1 ,
  s2 ,
  s3 ,
  s4 ,
  s5 ,
  grada_a ,
  grada_b ,
  v8 ,
  i9 ,
  i8 ,
  v7 ,
  i7 ,
  v6 ,
  vt2 ,
  v9 ,
  i10 ,
  i6 
);
  
  
  


}//iff Estadio Bravos de Margarita

});