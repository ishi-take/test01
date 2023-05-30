// Cesium ionのアクセストークン
//Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5MDljNDJmZS01OTc5LTQxMWQtODc5ZC1kNTEzOTUyNjNhZDAiLCJpZCI6MTMwNTUyLCJpYXQiOjE2ODQ4MTU1NDF9.qTowPjwpNdcB2f4WQthPcCWxrZ-J9EYbN-bQzcmDG6k';

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