npm install redux redux-logger redux-thunk redux-freeze

`src/redux/store.js`

```
import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import freeze from 'redux-freeze'
import _ from 'lodash'
import rootReducer from './rootReducer'

/* eslint-disable import/no-mutable-exports */

let storeInitialized = false
let store = null

if (!storeInitialized) {
  storeInitialized = true
  const logger = createLogger()
  const middlewares = _.compact([thunk, freeze, logger])
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  store = createStoreWithMiddleware(rootReducer)
}

export default store
```


`src/redux/rootReducer.js`

```
import { combineReducers } from 'redux'
import reportParameters from './reducers/posts'

const rootReducer = combineReducers({
  posts: posts,
})

export default rootReducer
```


`src/redux/reducers/posts.js`

```
const initialState = { }

export default posts(state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

```

`app.js`

add

```
import { Provider } from 'react-redux'
import store from '../../redux/store'
```

npm install react-redux

put `<Provider store={store}>` around component
