export default class PenSBT {
  _layer: any
  constructor (map: any) {
    this._layer = new maptalks.VectorLayer(bestime.uuid()).addTo(map)
  }

  setGeoJson (data: any) {
    // console.log("色斑图", data)
    const oGeos: any[] = []
    maptalks.GeoJSON.toGeometry(data, (item: any) => {
      // console.log("item", item)
      const color = item.properties.color
      item.updateSymbol({
        lineColor: color,
        lineWidth: 2,
        polygonFill: color,
        polygonFillOpacity: 1
      });
      oGeos.push(item)
    })
    this._layer.clear().hide().addGeometry(oGeos);
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