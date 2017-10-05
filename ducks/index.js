import React from 'react'
import withRedux from 'next-redux-wrapper'

import { initStore } from './createStore'

export default (mapStateToProps, mapDispatchToProps) => (Comp) => {
  const PagesLayout = props => (
    <div>
      <Comp {...props} />
    </div>
  )

  PagesLayout.getInitialProps = async (data) => {
    if (Comp.getInitialProps) {
      await Comp.getInitialProps(data)
    }
  }

  return withRedux(
    initStore,
    mapStateToProps,
    mapDispatchToProps
  )(PagesLayout)
}
