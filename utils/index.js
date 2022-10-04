export const isObject = (val) => {
    return val != null && typeof val === 'object' && Array.isArray(val) === false
  }
  
  export const formatDate = (date) => {
    const selectedDate = new Date(date)
    let dd = selectedDate.getDate()
    let mm = selectedDate.getMonth() + 1
  
    const yyyy = selectedDate.getFullYear()
    if (dd < 10) {
      dd = `0${dd}`
    }
    if (mm < 10) {
      mm = `0${mm}`
    }
  
    return `${dd}.${mm}.${yyyy}`
  }
  
  export const splitArrayIntoChunksOfLength = (arr, len) => {
    if (!Array.isArray(arr) || !len) return []
    const chunks = []
    let i = 0
    const n = arr.length
  
    while (i < n) {
      chunks.push(arr.slice(i, (i += len)))
    }
    return chunks
  }
  
  export const formatPhoneNumber = (phoneNumberString) => {
    return phoneNumberString.replaceAll(/[^0-9]/gi, '')
  }
  
  export const beautifyPhoneNumber = (string) => {
    if (string) {
      const cleaned = formatPhoneNumber(string)
      const match = cleaned.match(/^(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})$/)
      return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`
    }
    return ''
  }
  
  export const findObjectInArray = (arr = [], param, query) => {
    if ((Array.isArray(arr) && arr.length === 0) || !param || !query) return {}
    const obj = arr.find((el) => el[param] === query)
    return (isObject(obj) && obj) || {}
  }
  
  export const formatPrice = (number, n, x, s, c) => {
    /**
     * Number.prototype.format(n, x, s, c)
     *
     * @param number      number: number to format
     * @param integer     n: length of decimal
     * @param integer     x: length of whole part
     * @param mixed       s: sections delimiter
     * @param mixed       c: decimal delimiter
     */
    const re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')'
    const num = number.toFixed(Math.max(0, ~~n))
  
    return (c ? num.replace('.', c) : num).replace(
      new RegExp(re, 'g'),
      '$&' + (s || ',')
    )
  }
  