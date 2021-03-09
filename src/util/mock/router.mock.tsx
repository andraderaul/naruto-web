import { ThemeProvider } from 'styled-components'
import { render as defaultRender } from '@testing-library/react'
import { RouterContext } from 'next/dist/next-server/lib/router-context'
import { NextRouter } from 'next/router'
import { theme } from '../../styles/GlobalStyles'

export * from '@testing-library/react'

type DefaultParams = Parameters<typeof defaultRender>
type RenderUI = DefaultParams[0]
type RenderOptions = DefaultParams[1] & { router?: Partial<NextRouter> }

export function render(
  ui: RenderUI,
  { wrapper, router, ...options }: RenderOptions = {}
) {
  if (!wrapper) {
    // eslint-disable-next-line react/display-name
    wrapper = ({ children }) => (
      <RouterContext.Provider value={{ ...mockRouter, ...router }}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </RouterContext.Provider>
    )
  }

  return defaultRender(ui, { wrapper, ...options })
}

const mockRouter: NextRouter = {
  basePath: '/',
  pathname: '/',
  route: '/',
  query: {},
  asPath: '/',
  push: jest.fn(() => Promise.resolve(true)),
  replace: jest.fn(() => Promise.resolve(true)),
  reload: jest.fn(() => Promise.resolve(true)),
  prefetch: jest.fn(() => Promise.resolve()),
  back: jest.fn(() => Promise.resolve(true)),
  beforePopState: jest.fn(() => Promise.resolve(true)),
  isFallback: false,
  isReady: true,
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn()
  }
}
