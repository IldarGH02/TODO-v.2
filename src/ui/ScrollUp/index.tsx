import { useState } from 'react'
import { FiArrowUpCircle } from "react-icons/fi"

const ScrollUp = () => {
  const [isStatus, setStatus] = useState(false)

  const scrollFunc = () => {
    let windowY = window.scrollY
    let allY = document.documentElement.clientHeight

    windowY > allY ? setStatus(true) : setStatus(false)
  }

  const toUp = () => {
    let windowY = window.scrollY

    if (windowY > 0) {
      window.scrollBy(0, -10000)
    }
  }

  window.addEventListener('scroll', scrollFunc)

  return (
    <button
      onClick={() => toUp()}
      className={isStatus ? 'scroll__to-top show__scroll-top' : 'scroll__to-top'}
    >
      <FiArrowUpCircle/>
    </button>
  )
}

export default ScrollUp
