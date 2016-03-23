$(document).ajaxComplete(function(){
  //Estadio Aguilas del Zulia
if ($('#map1').length == 1) {


  var mapContainer = document.getElementById("map1");
  var MAP_WIDTH  = 607.594;
  var MAP_HEIGHT = 850;
  var map = new Raphael(mapContainer, MAP_WIDTH, MAP_HEIGHT);

  var animationSpeed = 500;

  var style = {
    fill: "#ddd",
    stroke: "#aaa",
    "stroke-width": 1,
    "stroke-linejoin": "round",
    cursor: "pointer"
  };

  var hoverStyle = {
  	fill: "#A8BED5"
  };

  var click = {
  	fill: "red"
  };

  
  var grada = map.path("m 321.22851,261.09892 40.91118,26.76904 52.02285,-72.73098 7.07107,-15.65736 3.53554,-30.80966 -6.83122,-28.40156 c 0,0 -7.33825,-13.08829 -11.83866,-19.06292 -4.2863,-5.69038 -14.33865,-15.84862 -14.33865,-15.84862 L 370.72598,88.362838 340.42141,71.695321 299.51023,59.068414 l -44.95179,-5.555839 -34.34518,0 -48.48733,7.071068 -35.86041,11.111678 -30.30458,15.657364 -21.718279,17.172595 -13.637059,14.64721 -11.616754,17.17259 -8.586297,23.73859 -1.010153,23.73858 3.030458,17.67767 7.576144,17.1726 45.93671,66.77391 L 147.5,259.73214 100.71429,188.92857 98.75,181.78571 l 0.357143,-12.32142 4.999997,-12.32143 8.03572,-10 14.28571,-13.75 15.71429,-9.46429 16.60714,-7.5 16.60714,-5 18.57143,-5.35714 23.03572,-1.78572 37.32142,-0.35714 33.57143,3.75 22.85715,6.60714 20.35714,9.28572 18.39286,10.89285 11.42857,10.89286 8.21428,11.07143 5.53572,11.60714 0.35714,12.32143 -3.03571,9.82143 -11.60715,16.96429 z").attr({fill: 'orange'});
  /*
  regions["24"] = map.path("m 137.09444,283.12756 -6.42857,-9.28571 18.39285,-11.96429 6.69643,9.55357 z");
  regions["23"] = map.path("m 156.78894,274.63498 -18.30641,11.77085 20.71751,27.87833 18.0385,-12.21337 z");
  regions["22"] = map.path("m 198.4068,333.125 -18.03572,13.83929 -21.16071,-29.82143 18.48214,-12.23214 z");
  regions["21"] = map.path("m 114.59444,296.699 -6.42857,-9.28571 18.39285,-11.96429 6.69643,9.55357 z");
  regions["20"] = map.path("m 147.85097,306.51786 -13.48214,-18.57143 -19.10715,12.41072 13.21429,18.48214 z");
  regions["19"] = map.path("m 157.33194,320.80357 -4.01786,3.125 -5.80357,-8.125 4.10714,-3.39285 -3.21428,-4.375 -19.01786,12.58928 13.21429,18.30357 18.66071,-12.41071 z");
  regions["18"] = map.path("m 158.66681,362.41071 -14.55357,-20.71428 18.92857,-13.125 14.28571,19.82142 z");
  regions["17"] = map.path("m 211.84661,348.75 -7.32143,-5.89286 -5.26786,-7.67857 -18.03571,13.92857 8.83928,11.875 10.89286,8.57143 z");
  regions["16"] = map.path("m 232.85891,353.66072 -9.46429,-1.16072 -8.39285,-3.66071 -10.35715,20.71429 13.03572,5.17857 14.64286,1.78571 z");
  regions["15"] = map.path("m 178.70732,350.98214 -16.78572,12.85715 1.78572,1.51785 0.17857,2.58929 -0.71429,0.89286 6.51786,7.67857 8.48214,8.66071 13.66072,-19.28571 -7.14286,-6.69643 z");
  regions["14"] = map.path("m 203.22119,397.85714 -11.78572,-5.17857 -10.625,-6.78571 13.21429,-18.92857 3.39286,2.05357 -2.67858,5.71428 8.83929,4.46429 2.94643,-4.91071 3.57143,1.51785 z");
  regions["13"] = map.path("m 224.37927,402.98203 -9.91212,-2.0203 -8.71257,-2.52539 6.566,-22.03395 7.26047,2.33598 6.88166,0.82075 z");
  regions["12"] = map.path("m 236.25,352.94643 9.46429,-1.16072 8.39285,-3.66071 10.35715,20.71429 -13.03572,5.17857 -14.64286,1.78571 z");
  regions["11"] = map.path("m 255.80357,346.96429 7.32143,-5.89286 5.26786,-7.67857 18.03571,13.92857 -8.83928,11.875 -10.89286,8.57143 z");
  regions["10"] = map.path("m 244.89886,402.26774 9.91212,-2.0203 8.71257,-2.52539 -6.566,-22.03395 -7.26047,2.33598 -6.88166,0.82075 z");
  regions["9"] = map.path("m 265.80357,396.78571 11.78572,-5.17857 10.625,-6.78571 L 275,365.89286 l -3.39286,2.05357 2.67858,5.71428 -8.83929,4.46429 -2.94643,-4.91071 -3.57143,1.51785 z");
  regions["8"] = map.path("m 289.55357,349.91071 16.78572,12.85715 -1.78572,1.51785 -0.17857,2.58929 0.71429,0.89286 -6.51786,7.67857 -8.48214,8.66071 -13.66072,-19.28571 7.14286,-6.69643 z");
  regions["7"] = map.path("M 269.55357,332.05357 287.58929,345.89286 308.75,316.07143 290.26786,303.83929 Z");
  regions["6"] = map.path("m 312.41072,274.82143 18.30357,11.875 L 310,314.82143 291.96429,302.5 Z");
  regions["5"] = map.path("m 332.05357,285 6.42857,-9.28571 -18.39285,-11.96429 -6.69643,9.55357 z");
  regions["4"] = map.path("m 309.19643,362.05357 14.55357,-20.71428 -18.92857,-13.125 -14.28571,19.82142 z");
  regions["3"] = map.path("m 310.44643,321.16071 4.01786,3.125 5.80357,-8.125 -4.10714,-3.39285 3.21428,-4.375 19.01786,12.58928 -13.21429,18.30357 -18.66071,-12.41071 z");
  regions["2"] = map.path("m 320.625,306.875 13.48214,-18.57143 19.10715,12.41072 L 340,319.19643 Z");
  
  regions["1"] = map.path("m 354.15557,298.66329 6.42857,-9.28571 -18.39285,-11.96429 -6.69643,9.55357 z");
  */
  var oficial = map.path("m 229.04849,379.98468 6.07143,0.26786 5.26786,-0.26786 2.05357,22.67857 -7.85714,0.53572 -7.3061,0.074 z");

  var regions = [oficial,grada];

    for(var i = 0; i< regions.length; i++) {
      appendElement(regions[i]);
    }

    function appendElement(element) {

    element.click(function() {
      this.attr('fill', 'white');
      this.active = true;
    for(var i = 0; i< regions.length; i++) {
      if(regions[i] != this) {
        regions[i].active = false;
        regions[i].attr('fill', 'orange');
      }
    }
    });
    element.mouseover(function () {
      this.toFront();
        this.attr({
            cursor: 'pointer',
            fill: '#990000',
            stroke: '#fff',
            'stroke-width': '2'
        });
        this.animate({
            scale: '1.2'
        }, 200);
    });
    element.mouseout(function () {
      if(!this.active)
        this.attr('fill', 'orange');
      else
        this.attr('fill', 'white');
    });
    }
}//iff Estadio Águilas del Zulia




if ($('#map2').length == 1) { //Estadio Navegantes del Magallanes


}//iff Navegantes del Magallanes

if ($('#map3').length == 1) { //Estadio Leones del Caracas


}//iff Estadio Leones del Caracas


if ($('#map4').length == 1) { //Estadio Bravos de Margarita



}//iff Estadio Bravos de Margarita

});