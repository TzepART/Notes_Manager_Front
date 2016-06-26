$('canvas')
    .drawSlice({
        layer: true,
        name: 'blue-slice',
        groups: ['chart', 'slices'],
        fillStyle: 'blue',
        x: 300, y: 300,
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
        x: 300, y: 300,
        radius: 220,
        rotate: -15
    })
    .drawSlice({
        layer: true,
        name: 'green-slice',
        groups: ['chart', 'slices'],
        fillStyle: 'green',
        x: 300, y: 300,
        start: 15, end: 90,
        radius: 200,
    })
    .drawText({
        layer: true,
        fillStyle: '#c33',
        fontFamily: 'Ubuntu, sans-serif',
        fontSize: 18,
        text: 'Семья',
        x: 300, y: 300,
        radius: 220,
        rotate: 55
    })
    .drawSlice({
        layer: true,
        name: 'black-slice',
        groups: ['chart', 'slices'],
        fillStyle: 'black',
        x: 300, y: 300,
        start: 90, end: -45,
        radius: 200,
    })
    .drawText({
        layer: true,
        fillStyle: '#c33',
        fontFamily: 'Ubuntu, sans-serif',
        fontSize: 18,
        text: 'Отдых',
        x: 300, y: 300,
        radius: 220,
        rotate: 200
    })
    .drawSlice({
        layer: true,
        name: 'red-slice',
        groups: ['chart', 'slices'],
        fillStyle: '#c33',
        x: 300, y: 300,
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
        x: 300, y: 300,
        start: 15, end: 90,
        radius: 100,
    })
    .drawSlice({
        layer: true,
        name: 'orange-slice',
        groups: ['chart', 'slices'],
        fillStyle: 'orange',
        x: 300, y: 300,
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
    fillStyle: '#36c',
    x: 300, y: 150,
    radius: 10,
    data: {'id':22},
    dragstop: function(layer) {
        console.log(layer.x);
        console.log(layer.y);
        this.x1 = 150;
        this.y1 = 200;
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
    // mouseover: function(layer) {
    //     console.log('mouseover');
    // },
    // mouseout: function(layer) {
    //     console.log('mouseout');
    // },
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