import { render } from '@redwoodjs/testing'

import CustomSelect from './CustomSelect'

describe('CustomSelect', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CustomSelect />)
    }).not.toThrow()
  })
})
