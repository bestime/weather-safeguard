import axios from "axios";

const iAxios = axios.create({
  baseURL: '', // 只允许为空
  timeout: 1000 * 60,
})

function removeLastPath (prefix: string) {
  return prefix.replace(/\/$/, '')
}

/**
 * 这里不同开发环境，工作在不同服务器下
 * @param
 */
 export function serverURL(alias: AxiosHttp.ServerAlias, path: string): string {
  const config: Record<AxiosHttp.ServerAlias, string> = {
    '@host_01': import.meta.env.VITE_SERVER_01,
    '@local': import.meta.env.BASE_URL,
  }
  const isRelativeUrl = /^\//.test(path)
  const url = !alias || !isRelativeUrl? path : removeLastPath(config[alias]) + path
  // console.log("url", url)
  return url
}

export default async function request (options: AxiosHttp.RequestOption) {
  return iAxios({
    url: serverURL(options.baseURL, options.url)
  })
}

export async function requestFileFromLocal<T> (relativePath: string):Promise<T> {
  return request({
    url: relativePath,
    baseURL: '@local'
  }).then(function (res) {
    return res.data
  })
}