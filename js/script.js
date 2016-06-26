var CenterX = 300;
var CenterY = 300;
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


$('canvas')
    .drawSlice({
        layer: true,
        name: 'blue-slice',
        groups: ['chart', 'slices'],
        fillStyle: 'blue',
        x: CenterX, y: CenterY,
        start: -45, end: 15,
        radius: 200,
        click: function(layer) {
            console.log("blue");
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
        rotate: -15
    })
    .drawSlice({
        layer: true,
        name: 'green-slice',
        groups: ['chart', 'slices'],
        fillStyle: 'green',
        x: CenterX, y: CenterY,
        start: 15, end: 90,
        radius: 200,
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
        name: 'red-slice',
        groups: ['chart', 'slices'],
        fillStyle: '#c33',
        x: CenterX, y: CenterY,
        start: -45, end: 15,
        radius: 100,
        click: function(layer) {
            console.log("red");
        }
    })
    .drawSlice({
        layer: true,
        name: 'grey-slice',
        groups: ['chart', 'slices'],
        fillStyle: 'grey',
        x: CenterX, y: CenterY,
        start: 15, end: 90,
        radius: 100,
    })
    .drawSlice({
        layer: true,
        name: 'orange-slice',
        groups: ['chart', 'slices'],
        fillStyle: 'orange',
        x: CenterX, y: CenterY,
        start: 90, end: -45,
        radius: 100,
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
        console.log(layer.x);
        console.log(layer.y);
        console.log(cartesian2Polar(layer.x, layer.y));
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
        var Label = $('canvas').getLayer('myLabel');
        Label.fillStyle = "Red";
    },
    mouseout: function(layer) {
        var Label = $('canvas').getLayer('myLabel');
        Label.fillStyle = '#36c';
    },
    // dragstart: function(layer) {
    //     console.log('dragstart');
    // },
    dblclick: function(layer) {
        console.log('dblclick');
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