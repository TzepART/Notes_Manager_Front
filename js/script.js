var CenterX = 300;
var CenterY = 300;
var bigRadius = 200;
var colorRayAndCircleByLable = '#48D1CC';
/**
 * Из декартовой в полярную систему координат.
 *
 * @param {float} x
 * @param {float} y
 * @returns {object}
 */
function cartesian2Polar(x, y) {
    var upX = (x-CenterX);
    var upY = (y-CenterY);
    distance = Math.sqrt(upX * upX + upY * upY);
    radians = Math.atan2(upY, upX);
    degr = radians*180/Math.PI+90;
    polarCoor = {distance: distance, degr: degr};
    return polarCoor;
}

/**
 * From polar in dec
 *
 * @param {float} radius
 * @param {float} degr
 * @returns {object}
 */
function cartesian2Dec(radius, degr) {
    radians = (degr-90)*(Math.PI/180);
    if(degr >= 0 && degr <= 180){
        tan  = Math.tan(radians);
        x = Math.sqrt((radius*radius)/(tan*tan+1));
        y = x*tan;
    }else{
        tan  = Math.tan(-radians);
        x = -Math.sqrt((radius*radius)/(tan*tan+1));
        y = -x*tan;
    }
    decCoor = {X: x+CenterX, Y: y+CenterY};
    return decCoor;
}

/**
*function for convert HEX -> rgba
 * */

function hexInArray(h){
    var m = h.slice(1).match(/.{2}/g);
    m[0]=parseInt(m[0], 16);
    m[1]=parseInt(m[1], 16);
    m[2]=parseInt(m[2], 16);
    return m;
};

function hexArrayInRgbString(m) {
    var rgb = 'rgb('+m[0]+', '+m[1]+', '+m[2]+')';
    return rgb;
}

function changeColorLayers(color,numLayers) {
    var arColor = hexInArray(color);
    var tempColor = arColor;
    var arRBA = [];
    var i = 0;
    var difColorRed = (256-arColor[0])/numLayers;
    var difColorGreen = (arColor[1])/(numLayers-1);
    var difColorBlue = (arColor[2])/(numLayers-1);
    var red = arColor[0] + difColorRed;
    var green = arColor[1];
    var blue = arColor[2];
    for(red; red <= 256; red = red + difColorRed){
        tempColor[0] = Math.floor(red);
        tempColor[1] = Math.floor(green);
        tempColor[2] = Math.floor(blue);
        arRBA[i] = hexArrayInRgbString(tempColor);
        green = green - difColorGreen;
        blue = blue - difColorBlue;
        i++;
    }
    return arRBA;
}

function createSector(data) {
    var arColors = changeColorLayers(data.color,data.numLayers);
    var i;
    var difRadius = bigRadius/data.numLayers;
    var radius = bigRadius;
    for(i=1;i<=data.numLayers;i++){
        $('canvas').drawSlice({
            layer: true,
            name: 'slice'+data.id+i,
            groups: ['chart', 'slices'],
            fillStyle: arColors[i-1],
            x: CenterX, y: CenterY,
            start: data.beginAngle, end: data.endAngle,
            radius: radius,
            strokeStyle: '#f60',
            strokeWidth: 3,
            dblclick: function(layer) {
                $('#pop_create_sector').css('display','block').attr('id',555);
            },   
            click: function(layer) {
                $('#pop_sector').css('display','block').attr('id',555);
            },
        });
        radius = radius - difRadius;
    }
    $('canvas')
        .drawText({
            layer: true,
            fillStyle: '#c33',
            fontFamily: 'Trebuchet MS, sans-serif',
            fontSize: 18,
            text: data.name,
            x: CenterX, y: CenterY,
            radius: bigRadius+20,
            rotate: (data.beginAngle<data.endAngle)?(data.beginAngle+data.endAngle)/2:(data.beginAngle+data.endAngle+360)/2,
            dblclick: function(layer) {
                $('#pop_sector').css('display','block').attr('id',555);
            },
        });
}

var numLayers = 4;

var data1 = {
    id:1,
    numLayers:numLayers,
    color:'#8FBC8F',
    beginAngle:10,
    endAngle:90,
    name:'Example1'
};

var data2 = {
    id:2,
    numLayers:numLayers,
    color:'#FFD700',
    beginAngle:90,
    endAngle:200,
    name:'Example2'
};
var data3 = {
    id:3,
    numLayers:numLayers,
    color:'#BA55D3',
    beginAngle:200,
    endAngle:10,
    name:'Example3'
};

createSector(data1);
createSector(data2);
createSector(data3);


/*$('canvas').drawLine({
    layer: true,
    draggable: true,
    strokeStyle: '#000',
    strokeWidth: 5,
    rounded: true,
    x1: 150, y1: 200,
    x2: 150, y2: 0,
    restrictDragToAxis: 'x',
    click: function(layer) {
        console.log(layer.x1);
        console.log(layer);
        this.x1 = 150;
        this.y1 = 200;
    }
});*/

function rayAndCircleByLabel(layer,id) {
    var pol = cartesian2Polar(layer.x, layer.y);
    var dec = cartesian2Dec(bigRadius+30,pol.degr);
    var Label = $('canvas').getLayer('myLabel');
    Label.fillStyle = "Red";
    $('canvas').drawArc({
        layer: true,
        strokeStyle: colorRayAndCircleByLable,
        strokeWidth: 3,
        name: 'circleByLabel'+id,
        x: CenterX, y: CenterY,
        radius: pol.distance,
    });
    $('canvas').drawLine({
        layer: true,
        strokeWidth: 3,
        name: 'lineByLabel'+id,
        strokeStyle: colorRayAndCircleByLable,
        x1: CenterX, y1: CenterY,
        x2: dec.X, y2: dec.Y,
    });
}

function delRayAndCircleByLabel(id) {
    $('canvas').removeLayer('circleByLabel'+id);
    $('canvas').removeLayer('lineByLabel'+id);
}

$('canvas').drawArc({
    layer: true,
    draggable: true,
    name: 'myLabel',
    fillStyle: '#36c',
    x: CenterX, y: 150,
    radius: 10,
    data: {'id':22},
    dragstop: function(layer) {
        console.log('X - '+layer.x);
        console.log('Y - '+layer.y);
        var pol = cartesian2Polar(layer.x, layer.y);
        console.log(pol);
        var dec = cartesian2Dec(pol.distance,pol.degr);
        console.log(dec);
    },
    mouseover: function(layer) {
        rayAndCircleByLabel(layer,layer.data.id);
    },
    mouseout: function(layer) {
        var Label = $('canvas').getLayer('myLabel');
        Label.fillStyle = "#36c";
        delRayAndCircleByLabel(layer.data.id);
    },
    dblclick: function(layer) {
        $('#pop_lable').css('display','block').attr('id',layer.data.id);
    },
});

$('canvas').drawArc({
    layer: true,
    draggable: true,
    name: 'myLabel2',
    fillStyle: '#36c',
    x: CenterX+40, y: 200,
    radius: 10,
    data: {'id':12},
    dragstop: function(layer) {
        console.log('X - '+layer.x);
        console.log('Y - '+layer.y);
        var pol = cartesian2Polar(layer.x, layer.y);
        console.log(pol);
        var dec = cartesian2Dec(pol.distance,pol.degr);
        console.log(dec);
    },
    mouseover: function(layer) {
        rayAndCircleByLabel(layer,layer.data.id);
        var Label = $('canvas').getLayer('myLabel2');
        Label.fillStyle = "Red";
    },
    mouseout: function(layer) {
        var Label = $('canvas').getLayer('myLabel2');
        Label.fillStyle = "#36c";
        delRayAndCircleByLabel(layer.data.id);
    },
    dblclick: function(layer) {
        $('#pop_lable').css('display','block').attr('id',layer.data.id);
    },
});