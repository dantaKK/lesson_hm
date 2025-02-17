import {Route } from 'react-router-dom'
import PostIndex from './PostIndex'
import PostShow from './PostShow'
export const postRoutes=(
    <>
    <Route path="posts" element={<PostIndex/>}></Route>
    <Route path="posts/:postID" element={<PostShow/>}></Route>
    </>
)
