import { serverURL } from "@/request"

export default class PenMarker {
  _layer: any
  _onMarkerClick: (data: any) => void
  constructor (map: any, options: {
    onMarkerClick: (data: any) => void
  }) {
    this._onMarkerClick = options.onMarkerClick
    this._layer = new maptalks.VectorLayer(bestime.uuid()).hide().addTo(map)
  }

  setGeoJson (data: any) {
    // console.log("色斑图", data)
    const markerList: any[] = []
    data.features.forEach((item: any)=> {
      const oMarker = new maptalks.Marker(item.properties.center, {
        'symbol' : {
          'markerFile'   : serverURL('@local', '/static/images/tobacco.png'),
          'markerWidth'  : 30,
          'markerHeight' : 30,
          'markerDx'     : 0,
          'markerDy'     : 0,
          'markerOpacity': 1
        }
      })
      oMarker.on('click', () => {
        this._onMarkerClick(item)
      })
      markerList.push(oMarker)
    })
    this._layer.clear().addGeometry(markerList);
  }

  show () {
    this._layer.show()
  }

  hide () {
    this._layer.hide()
  }

  clear () {
    this._layer.clear()
  }

  dispose () {
    this.clear()
    this._layer.remove()
  }
}