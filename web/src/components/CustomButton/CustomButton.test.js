import { render } from '@redwoodjs/testing'

import CustomButton from './CustomButton'

describe('CustomButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CustomButton />)
    }).not.toThrow()
  })
})
