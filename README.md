## SPA App - Reactive Web Front

1. React.js 15.3.2 버전 사용 중
2. Boilerplate로 react-create-app 사용
 - server-side-rendering 지원 x

component, action, reducer 네임 정리

#### Component: 일반적으로 알아보기 쉬운 형태

getItems :: (get) /items
createItem :: (post) /items

getItem :: (get) /items/3
updateItem :: (put) /items/3
deleteItem :: (delete) /items/3

#### Action: component 에서 dispatch 할 'creator' 와 'thunk' 두가지 필요

LogIn 로직

login(component) -> \_login(thunk) -> requestLogIn -> receiveLogin

Item 로직
(post 요청 통일 // response를 구분할 필요가 없음, complete 여부만 구분)
getItem(component) -> \_getItem(thunk) -> requestItem -> receiveItem

createItem(component) -> \_createItem(thunk) -> postItem -> completeItem

updateItem(component) -> \_updateItem(thunk) -> postItem -> completeItem

deleteItem(component) -> \_deleteItme(thunk) -> postItem -> completeItem

#### Reducer: 스토어의 이름, 크게는 route 이름으로 한 뒤, 페이지의 상태에 따라 depth 를 늘리는 방향으로 한다.

Counter: {increment, decrement, diff}
Login: {onRequest, refreshToken, jwToken, user}
