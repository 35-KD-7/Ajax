/**
 * 处理带传递的参数
 * @param{data} 需要发送到服务器的数据对象
 * @returns {string} 返回拼接好的查询字符串
 */

function resolveData(data) {
  const arr = [];
  for (let k in data) {
    arr.push(`${k}=${data[k]}`);
  }
  return arr.join("&");
}

/**
 * 定义自己的Ajax函数
 * @param {options} 对 xhr 进行设置的对象
 * options = {
 *  method:
 *  url:
 *  data:
 *  success:
 * }
 */
function myAjax(options) {
  // 查询字符串
  const qs = resolveData(options.data);

  const xhr = new XMLHttpRequest();

  // 根据 options.method 来判断请求
  if (options.method.toUpperCase() === "GET") {
    xhr.open(options.method, options.url + "?" + qs);
    xhr.send();
  } else if (options.method.toUpperCase() === "POST") {
    xhr.open(options.method, options.url);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(qs);
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let res = JSON.parse(xhr.responseText);
      options.success(res);
    }
  };
}
