import { Button, ButtonProps, Grid } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import logo from '../../assets/logo.svg'
import color from '../../styles/themes'
import './AppBar.css'

type TabsProps = { name: string; tabProps?: ButtonProps }

interface IAppBarProps {
  tabs?: TabsProps[]
}

const InitialTabs: TabsProps[] = [
  { name: 'Home', tabProps: { href: '/' } },
  { name: 'Products', tabProps: { href: '/list-products' } },
  { name: 'About', tabProps: { href: '/about' } },
]

const AppBar = ({ tabs = InitialTabs }: IAppBarProps) => {
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
    <>
      <header>
        <div className="App-header">
          <img className="App-logo" onClick={() => setMenuOpen(!menuOpen)} src={logo} ref={RefBar} alt="logo" />
          <p className={'App-title'}>React Hooks</p>
        </div>
        <div className={menuOpen ? 'App-tab active' : 'App-tab'}>
          <img className="App-logo" src={logo} alt="tabLogo" />

          {tabs.map((tab) => (
            <Grid key={tab.name} bgcolor={color.white} m={1} height={{ xs: 60, lg: 80 }}>
              <Button fullWidth {...tab?.tabProps} sx={{ height: '100%' }}>
                {tab.name}
              </Button>
            </Grid>
          ))}
        </div>
      </header>
    </>
  )
}

export default AppBar
