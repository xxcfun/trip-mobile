/**
 * 用户名称脱敏处理
 * @param name 用户名称
 * @returns {string|*} 用***
 */
function unameFormat (name) {
  if (name) {
    return name.substr(0, 1) + '***'
  } else {
    return name
  }
}

export {
  unameFormat
}
