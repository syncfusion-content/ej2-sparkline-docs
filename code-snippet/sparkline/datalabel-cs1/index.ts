

import { Sparkline } from '@syncfusion/ej2-charts';

let sparkline: Sparkline = new Sparkline({
    height: '200px',
    width: '350px',
    axisSettings: {
        minX: -1, maxX: 7, maxY: 7, minY: -1
    },
    fill: 'blue',
    dataSource:   [0, 6, 4, 1, 3, 2, 5],
    // To enable data label for all points
    dataLabelSettings: {
        visible: ['All']
    },
});
sparkline.appendTo("#element");



