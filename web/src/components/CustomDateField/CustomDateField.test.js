import { render } from '@redwoodjs/testing'

import CustomDateField from './CustomDateField'

describe('CustomDateField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CustomDateField />)
    }).not.toThrow()
  })
})
