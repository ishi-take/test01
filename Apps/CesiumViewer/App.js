
var viewer = new Cesium.Viewer("cesiumContainer");

      var point = viewer.entities.add({
      name:"豊明市", //レイヤ名
      description:"ここは豊明市です。",　//レイヤの説明
        position : Cesium.Cartesian3.fromDegrees(137.01307,35.05388,0), //経度,緯度,高さ
        point : {
            pixelSize : 10, //ポイントのサイズ
            color : Cesium.Color.BLUE //ポイントの色
        }
    });

    viewer.zoomTo(viewer.entities);　//レイヤにズーム