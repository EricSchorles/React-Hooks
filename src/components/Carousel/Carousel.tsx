import { useState, useRef, useEffect } from 'react'
import './Carousel.css'
const Carousel = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const RefBar = useRef<HTMLImageElement>(null)

  function handleClickAppBar(event: any) {
    const isClickOutside = RefBar.current && !RefBar.current.contains(event.target)

    if (isClickOutside) {
      menuOpen ? setMenuOpen(true) : setMenuOpen(false)
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClickAppBar)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [RefBar])
  return (
    <div className={'Carousel-parent'}>
      <div className={'Carousel-items'}>
        <div className={'Carousel-item1'} />
        <div className={'Carousel-item2'} />
        <div className={'Carousel-item3'} />
        <div className={'Carousel-item4'} />
      </div>
      <div className="Carousel-arrow-left">esquerdinha</div>
      <div className="Carousel-arrow-right">direitinha</div>
    </div>
  )
}

export default Carousel
