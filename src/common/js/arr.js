export function getDefaultIndex (arr) {
  let id = -1
  arr.forEach((item, index) => {
    if (item.default) {
      id = index
    }
  })
  return id
}

// debounce是一个限制操作频率的函数
export function debounce (func, delay) {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

export function getData (el, name, val) {
  const prefix = 'data-'
  name = prefix + name
  if (val) {
    return el.setAttribute(name, val)
  } else {
    return el.getAttribute(name)
  }
}
