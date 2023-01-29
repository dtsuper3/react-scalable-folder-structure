import { AddBlog, BlogList } from "features/blog";

function Home() {
    return (
        <div>
            <AddBlog />
            <BlogList />
        </div>
    )
}

export { Home };