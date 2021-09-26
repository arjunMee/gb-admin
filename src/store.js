import { createStore, applyMiddleware, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as formReducer } from 'redux-form'

const dashboardSetting = {
  sidebarShow: false,
  authenticated: true,
}

const inital = {
  access: 'admin',
  admin_user_id: 2,
  contact_number: '8876543210',
  token: '0f059b9c3f7a5ff46f06702e1c385139ed5a13f8',
  user: {
    email: 'email2@email.com',
    first_name: 'firstname2',
    id: 6,
    last_name: 'lastname2',
    username: 'adminuser2',
  },
}

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

const profileReducer = (state = inital, { type, ...rest }) => {
  const { profileObject } = rest
  switch (type) {
    case 'profile':
      return { ...inital, ...profileObject }
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
const store = createStore(
  pReducer,
  // composeWithDevTools(),
  // applyMiddleware(),
  // logger
)
export const persistor = persistStore(store)

export default store
