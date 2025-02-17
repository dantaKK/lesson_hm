// hooks params use 好用
import { useParams } from "react-router-dom"
import { useEffect } from "react"
const PostShow = () => {
    const { postID } = useParams()
    console.log(postID)
    useEffect(() => {
        document.title = `文章id为${postID}`
    }, [])
    return (
        <div>
            <h1>PostShow</h1>
        </div>
    )
}
export default PostShow