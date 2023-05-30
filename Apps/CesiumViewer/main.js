// (function() {
//    "use strict";

// Cesium ionのアクセストークン
// Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyZDQ4YThlNy05MGRiLTRmMTItOGExMy0zOTVmMDRlOWYxNjIiLCJpZCI6MTMwNTUyLCJpYXQiOjE2Nzk3ODc5NzB9.2s_IRnq5u_tJXLPb8v1aVd6KP9oUEiX3ZmtXUCNarO8';
// var viewer = new Cesium.Viewer("cesium");

// Cesium ViewerをcesiumContainerというIDのHTML要素に初期化
const viewer = new Cesium.Viewer('cesiumContainer', {
    terrainProvider: Cesium.createWorldTerrain(),
});

// OpenStreetMapの建物を追加
viewer.scene.primitives.add(Cesium.createOsmBuildings());

// 初期表示時のカメラ位置
viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(138, 29, 25000000),
});

document.getElementById('fly').addEventListener('click', function () {
    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(139.765, 35.66, 1000.0),
        orientation: {
            heading: Cesium.Math.toRadians(0),
            pitch: Cesium.Math.toRadians(-20),
        },
    });
});