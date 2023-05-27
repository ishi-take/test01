var viewer = new Cesium.Viewer('cesiumContainer');
//add a point
var point = viewer.entities;

point.add({
    position:Cesium.Cartesian3.fromDegrees(-75.59777,40.03883),
    point:{
        pixelsize:10,
        color:Cesium.Color.YELLOW
    }
});