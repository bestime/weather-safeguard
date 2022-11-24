export interface PagerConfig {
  size: number,
  sizes: number[],
  current: number,
  total: number
}

export default class PagerData {

  

  // 用参数包装是为了视图可以相应更新
  private _config: PagerConfig = {
    total: 0,
    size: 0,
    sizes: [],
    current: 1
  }

  constructor(sizes: number[]) {
    this._config.sizes = sizes
    this._config.size = sizes[0]
  }

  get elPlusViewsQuery (): PagerConfig {
    return this._config
  }

  update (total: number, current: number) {
    this._config.total = total
    this._config.current = current
    return this;
  }

  javaQuery() {
    return {
      pageNum: Math.max(1, this._config.current),
      pageSize: this._config.size
    };
  }
}