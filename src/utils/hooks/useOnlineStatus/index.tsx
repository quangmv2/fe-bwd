import { useState, useEffect } from 'react'

export function useOnlineStatus() {
  const [online, setOnline] = useState(true)

  function handler(event) {
    setOnline(navigator.onLine)

    if (event.type === 'online') {
      // handle stuffs when browser resume online
      console.log('Đã khôi phục kết nối Internet.')
      window.location.reload()
    } else {
      // handle stuffs when browser goes offline
      console.log('Mất kết nối internet.')
      const rootElement = document.getElementById('root')
      rootElement.classList.add('pointer-disabled')
    }
  }

  function rightClickHandler(e) {
    if (!online) {
      console.log('right click offline')
      e.stopPropagation()
      e.preventDefault()
      e.stopImmediatePropagation()
      return false
    }
    return true
  }

  // function leftClickHandler(e) {
  //   if (!online) {
  //     console.log('left click offline')
  //     e.stopPropagation()
  //     e.preventDefault()
  //     e.stopImmediatePropagation()
  //   }
  // }

  useEffect(() => {
    window.addEventListener('online', handler)
    window.addEventListener('offline', handler)
    // window.addEventListener('click', leftClickHandler)
    window.addEventListener('contextmenu', rightClickHandler)

    // cleanup
    return () => {
      window.removeEventListener('online', handler)
      window.removeEventListener('offline', handler)
      // window.removeEventListener('click', leftClickHandler)
      window.removeEventListener('contextmenu', rightClickHandler)
    }
  })

  return { online }
}
