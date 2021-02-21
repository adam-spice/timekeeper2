import { render } from '@redwoodjs/testing'

import CustomNumberField from './CustomNumberField'

describe('CustomNumberField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CustomNumberField />)
    }).not.toThrow()
  })
})
