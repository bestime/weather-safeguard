declare namespace AxiosHttp {
  /**
   * 服务器代理别名，方后期便统一替换
   * ```
   * @host_01 服务器01
   * ```
   */
  type ServerAlias = '@local' | '@host_01';

  interface RequestPage {
    /** 排序列 */
    orderByColumn?: string;

    /** 排序方式 */
    isAsc?: 'asc' | 'desc';

    /** 第几页 */
    pageNum?: number;

    /** 每页多少条 */
    pageSize?: number;

    /** 其它参数 */
    [key: string]: any;
  }

  interface AxiosResponse<T = any> {
    headers: Record<string, any>;
    data: T;
    status: number;
    statusText: string;
    proxyBaseUrl: ServerAlias;
  }

  interface RequestOption<T = any> {
    url: string;
    /** 请求控制器 */
    controller?: AbortController;

    /** 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream' */
    responseType?: 'text' | 'document' | 'json' | 'blob' | 'arraybuffer' | 'stream';

    /** 请求方式 */
    method?: 'GET' | 'POST' | 'DELETE' | 'PUT';

    baseURL: AxiosHttp.ServerAlias;

    /** 请求数据 */
    data?: T;

    /**
     * 请求类型
     * FORM_DATA - 表单
     * */
    dataType?: 'FORM_DATA';

    /** 超时时间：毫秒 */
    timeout?: number;

    /** 请求头，默认带有Authorization，需要的时候可以覆盖默认值 */
    headers?: {
      Authorization?: string | undefined;
      'Content-Type'?: string;
      [key: string]: string | undefined;
    };
  }

  interface ResponseRecords<T = any> {
    data: {
      current: number;
      total: number;
      records: T[];
    };
    code: number;
    msg: string;
  }

  interface ResponseData<T = any> {
    code: number;
    msg: string;
    error: string;
    data: T;
  }
}
