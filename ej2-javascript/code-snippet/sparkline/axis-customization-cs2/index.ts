


import { Sparkline } from '@syncfusion/ej2-charts';

let sparkline: Sparkline = new Sparkline({
    height: '150px',
    width: '130px',
    dataSource: [
            { x: 0, xval: 'Robert', yval: 60 },
            { x: 1, xval: 'Andrew', yval: 65 },
            { x: 2, xval: 'Suyama', yval: 70 },
            { x: 3, xval: 'Michael', yval: 80 },
            { x: 4, xval: 'Janet', yval: 55 },
            { x: 5, xval: 'Davolio', yval: 90 },
            { x: 6, xval: 'Fuller', yval: 75 },
            { x: 7, xval: 'Nancy', yval: 85 }
        ],
    // Assign the dataSource values to series of sparkline 'xName and yName'
    xName: 'xval', yName: 'yval',
    // Assign the 'Column' as type of the sparkline
    type:'Column',
    // Assign the  "Category" as value type of the sparkline
    valueType: 'Category'
});
sparkline.appendTo("#element");



