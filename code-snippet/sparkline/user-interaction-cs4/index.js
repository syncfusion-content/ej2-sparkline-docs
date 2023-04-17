//Initialize Sparkline component
var sparklineInstance = new ej.charts.Sparkline({
    height: '200px',
    width: '500px',
    axisSettings: {
        minX: -1, maxX: 46, maxY: 10, minY: -1
    },
    fill: '#033e96',
    dataSource:   [5, 3, 4, 6, 8, 7, 9, 1, 3, 5, 3, 4, 6, 8, 7, 9, 1, 3, 5, 2, 4, 6, 7, 9, 5, 8, 3, 6, 1, 7, 4, 2, 5, 2, 4, 6, 7, 9, 5, 8, 3, 6, 1, 7, 4, 2],
    // To enable tooltip template for sparkline with fill color, border radius and padding customization
    tooltipSettings: {
        trackLineSettings: {
            visible: true,
            color: '#033e96',
            width: 1
        }
    }
});
//Render initialized Sparkline
sparklineInstance.appendTo("#element");

