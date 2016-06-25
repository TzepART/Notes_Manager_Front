$('canvas')
    .drawSlice({
        layer: true,
        name: 'blue-slice',
        groups: ['chart', 'slices'],
        fillStyle: 'blue',
        x: 200, y: 200,
        start: -45, end: 15,
        radius: 200,
        click: function(layer) {
            console.log("blue");
        }
    })
    .drawSlice({
        layer: true,
        name: 'green-slice',
        groups: ['chart', 'slices'],
        fillStyle: 'green',
        x: 200, y: 200,
        start: 15, end: 90,
        radius: 200,
    })
    .drawSlice({
        layer: true,
        name: 'black-slice',
        groups: ['chart', 'slices'],
        fillStyle: 'black',
        x: 200, y: 200,
        start: 90, end: -45,
        radius: 200,
    })
    .drawSlice({
        layer: true,
        name: 'red-slice',
        groups: ['chart', 'slices'],
        fillStyle: '#c33',
        x: 200, y: 200,
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
        x: 200, y: 200,
        start: 15, end: 90,
        radius: 100,
    })
    .drawSlice({
        layer: true,
        name: 'orange-slice',
        groups: ['chart', 'slices'],
        fillStyle: 'orange',
        x: 200, y: 200,
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
    x: 200, y: 150,
    radius: 10,
    data: {'id':22},
    click: function(layer) {
        console.log(layer.x1);
        console.log(layer);
        this.x1 = 150;
        this.y1 = 200;
    }
});