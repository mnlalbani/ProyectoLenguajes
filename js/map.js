$(document).ajaxComplete(function(){
  //Estadio Aguilas del Zulia
if ($('#map1').length == 1) {


    var map_width = $('#map1').width();
    var map_height = $('#map1').height();
    var rsr = Raphael('map1', map_width, map_height);

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
  rsr.setViewBox(0,0,map_width, map_height, true);
  rsr.canvas.setAttribute('preserveAspectRatio', 'none');

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

    
}//iff Estadio Bravos de Margarita

});