import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'

import { makeStore } from '../../app/store'
import Thumbnails from './Thumbnails'

describe('<Thumbnails />', () => {
  it('renders the component', () => {
    const store = makeStore()

    render(
      <Provider store={store}>
        <Thumbnails />
      </Provider>,
    )

    expect(screen.getByText('Loading')).toBeInTheDocument()
  })
})
