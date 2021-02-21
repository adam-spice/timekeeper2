import { render } from '@redwoodjs/testing'

import CustomInputField from './CustomInputField'

describe('CustomInputField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CustomInputField />)
    }).not.toThrow()
  })
})
