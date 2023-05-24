//Initialize Sparkline component
var sparklineInstance = new ej.charts.Sparkline({
     height: '150px',
    width: '130px',
    dataSource: [
            { x: 1, xval: 2010, yval: 190 },
            { x: 2, xval: 2011, yval: 165 },
            { x: 3, xval: 2012, yval: 158 },
            { x: 4, xval: 2013, yval: 175 },
            { x: 5, xval: 2014, yval: 200 },
            { x: 6, xval: 2015, yval: 180 },
            { x: 7, xval: 2016, yval: 210 }
        ],
    // Assign the dataSource values to series of sparkline 'xName and yName'
    xName: 'x', yName: 'yval',
    // Assign the 'Column' as type of Sparkline
    type:'Column',
    // Assign the value type as 'Numeric' to the sparkline
    valueType: 'Numeric'
});
//Render initialized Sparkline
sparklineInstance.appendTo("#element");

