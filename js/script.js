var CenterX = 300;
var CenterY = 300;
var bigRadius = 200;
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
    var difColor = (256-arColor[0])/numLayers;
    var red = arColor[0] + difColor;
    for(red; red <= 256; red = red + difColor){
        tempColor[0] = Math.floor(red);
        console.log(tempColor);
        console.log(red);
        arRBA[i] = hexArrayInRgbString(tempColor);
        i++;
    }
    return arRBA;
}

function createSector(data) {
    var arColors = changeColorLayers(data.color,data.numLayers);
    var i;
    for(i=1;i<=data.numLayers;i++){
        $('canvas').drawSlice({
            layer: true,
            name: 'slice'+i,
            groups: ['chart', 'slices'],
            fillStyle: arColors[i],
            x: CenterX, y: CenterY,
            start: data.beginAngle, end: data.endAngle,
            radius: bigRadius/i,
            strokeStyle: '#f60',
            strokeWidth: 3,
        })
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
            rotate: (data.beginAngle+data.endAngle)/2,
            dblclick: function(layer) {
                console.log("Sector");
                $('#pop_sector').css('display','block').attr('id',555);
            },
        });
}



$('canvas')
    .drawSlice({
        layer: true,
        name: 'blue-slice',
        groups: ['chart', 'slices'],
        fillStyle: 'blue',
        x: CenterX, y: CenterY,
        start: -45, end: 15,
        radius: 200,
        strokeStyle: '#f60',
        strokeWidth: 3,
        click: function(layer) {
            console.log("blue");
        }
    })
    .drawSlice({
        layer: true,
        name: 'red-slice',
        groups: ['chart', 'slices'],
        fillStyle: '#c33',
        x: CenterX, y: CenterY,
        start: -45, end: 15,
        radius: 100,
        strokeStyle: '#f60',
        strokeWidth: 3,
        click: function(layer) {
            console.log("red");
        }
    })
    .drawText({
        layer: true,
        fillStyle: '#c33',
        fontFamily: 'Trebuchet MS, sans-serif',
        fontSize: 18,
        text: 'Творчество',
        x: CenterX, y: CenterY,
        radius: 220,
        rotate: -15,
        dblclick: function(layer) {
            console.log("Sector");
            $('#pop_sector').css('display','block').attr('id',555);
        },
    })
    .drawSlice({
        layer: true,
        name: 'green-slice',
        groups: ['chart', 'slices'],
        fillStyle: 'green',
        x: CenterX, y: CenterY,
        start: 15, end: 90,
        radius: 200,
        strokeStyle: '#f60',
        strokeWidth: 3,
    })
    .drawText({
        layer: true,
        fillStyle: '#c33',
        fontFamily: 'Ubuntu, sans-serif',
        fontSize: 18,
        text: 'Семья',
        x: CenterX, y: CenterY,
        radius: 220,
        rotate: 55
    })
    .drawSlice({
        layer: true,
        name: 'black-slice',
        groups: ['chart', 'slices'],
        fillStyle: 'black',
        x: CenterX, y: CenterY,
        start: 90, end: -45,
        radius: 200,
        strokeStyle: '#f60',
        strokeWidth: 3,
    })
    .drawText({
        layer: true,
        fillStyle: '#c33',
        fontFamily: 'Ubuntu, sans-serif',
        fontSize: 18,
        text: 'Отдых',
        x: CenterX, y: CenterY,
        radius: 240,
        rotate: 200
    })
    .drawText({
        layer: true,
        fillStyle: '#c33',
        fontFamily: 'Ubuntu, sans-serif',
        fontSize: 18,
        text: 'Общее',
        x: CenterX, y: CenterY,
        radius: 220,
        rotate: 110
    })
    .drawText({
        layer: true,
        fillStyle: '#c33',
        fontFamily: 'Ubuntu, sans-serif',
        fontSize: 18,
        text: 'Виза',
        x: CenterX, y: CenterY,
        radius: 220,
        rotate: 200
    })
    .drawText({
        layer: true,
        fillStyle: '#c33',
        fontFamily: 'Ubuntu, sans-serif',
        fontSize: 18,
        text: 'Отель',
        x: CenterX, y: CenterY,
        radius: 220,
        rotate: 260
    })
    .drawSlice({
        layer: true,
        name: 'grey-slice',
        groups: ['chart', 'slices'],
        fillStyle: 'grey',
        x: CenterX, y: CenterY,
        start: 15, end: 90,
        radius: 100,
        strokeStyle: '#f60',
        strokeWidth: 3,
    })
    .drawSlice({
        layer: true,
        name: 'orange-slice',
        groups: ['chart', 'slices'],
        fillStyle: 'orange',
        x: CenterX, y: CenterY,
        start: 90, end: -45,
        radius: 100,
        strokeStyle: '#f60',
        strokeWidth: 3,
    });

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
    // dblclick: function(layer) {
    //     console.log('dblclick');
    // },
    // mousedown: function(layer) {
    //     console.log('mousedown');
    // },
    // mouseup: function(layer) {
    //     console.log('mouseup');
    // },
    // mousemove: function(layer) {
    //     console.log('mousemove');
    // },
    mouseover: function(layer) {
        var pol = cartesian2Polar(layer.x, layer.y);
        var dec = cartesian2Dec(bigRadius+30,pol.degr);
        $('canvas').drawArc({
                layer: true,
                strokeStyle: '#48D1CC',
                strokeWidth: 3,
                name: 'circle1',
                x: CenterX, y: CenterY,
                radius: pol.distance,
        });
        $('canvas').drawLine({
            strokeWidth: 3,
            name: 'line1',
            strokeStyle: '#48D1CC',
            x1: CenterX, y1: CenterY,
            x2: dec.X, y2: dec.Y,
        });
        var Label = $('canvas').getLayer('myLabel');
        Label.fillStyle = "Red";
    },
    mouseout: function(layer) {
        var Label = $('canvas').getLayer('myLabel');
        $('canvas').removeLayer('circle1');
        $('canvas').removeLayer('line1');
    },
    // dragstart: function(layer) {
    //     console.log('dragstart');
    // },
    dblclick: function(layer) {
        $('#pop_lable').css('display','block').attr('id',555);
    },
    // dragstop: function(layer) {
    //     console.log('dragstop');
    // },
    // touchstart: function(layer) {
    //     console.log('touchstart');
    // },
    // touchend: function(layer) {
    //     console.log('touchend');
    // },
    // touchmove: function(layer) {
    //     console.log('touchmove');
    // }
});

$('canvas').drawArc({
    layer: true,
    draggable: true,
    name: 'myLabel2',
    fillStyle: '#36c',
    x: CenterX+40, y: 200,
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
    // dblclick: function(layer) {
    //     console.log('dblclick');
    // },
    // mousedown: function(layer) {
    //     console.log('mousedown');
    // },
    // mouseup: function(layer) {
    //     console.log('mouseup');
    // },
    // mousemove: function(layer) {
    //     console.log('mousemove');
    // },
    mouseover: function(layer) {
        var pol = cartesian2Polar(layer.x, layer.y);
        var dec = cartesian2Dec(bigRadius+30,pol.degr);
        $('canvas').drawArc({
            layer: true,
            strokeStyle: '#48D1CC',
            strokeWidth: 3,
            name: 'circle2',
            x: CenterX, y: CenterY,
            radius: pol.distance,
        });
        $('canvas').drawLine({
            strokeWidth: 3,
            name: 'line2',
            strokeStyle: '#48D1CC',
            x1: CenterX, y1: CenterY,
            x2: dec.X, y2: dec.Y,
        });
        var Label = $('canvas').getLayer('myLabel2');
        Label.fillStyle = "Red";
    },
    mouseout: function(layer) {
        var Label = $('canvas').getLayer('myLabel2');
        $('canvas').removeLayer('circle2');
        $('canvas').removeLayer('line2');
    },
    // dragstart: function(layer) {
    //     console.log('dragstart');
    // },
    dblclick: function(layer) {
        $('#pop_lable').css('display','block').attr('id',555);
    },
    // dragstop: function(layer) {
    //     console.log('dragstop');
    // },
    // touchstart: function(layer) {
    //     console.log('touchstart');
    // },
    // touchend: function(layer) {
    //     console.log('touchend');
    // },
    // touchmove: function(layer) {
    //     console.log('touchmove');
    // }
});