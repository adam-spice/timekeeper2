import { render } from '@redwoodjs/testing'

import NavMenu from './NavMenu'

describe('NavMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavMenu />)
    }).not.toThrow()
  })
})
