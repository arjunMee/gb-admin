import { createStore, applyMiddleware, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as formReducer } from 'redux-form'

const dashboardSetting = {
  sidebarShow: false,
  authenticated: false,
}

const profileObject = {}

const dashboardReducer = (state = dashboardSetting, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    case 'login':
      return { ...state, ...rest }
    default:
      return state
  }
}

const profileReducer = (state = profileObject, { type, ...rest }) => {
  switch (type) {
    case 'profile':
      return { ...state, ...rest }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  dashboardState: dashboardReducer,
  profile: profileReducer,

  form: formReducer,
})

const persistConfig = {
  key: 'store',
  storage: storage,
  whitelist: ['profile', 'dashboardState'],
}

const pReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(pReducer, composeWithDevTools(applyMiddleware(logger)))
export const persistor = persistStore(store)

export default store
