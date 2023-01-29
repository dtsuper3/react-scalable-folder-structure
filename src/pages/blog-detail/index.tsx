import { AdsList } from "features/ads"
import { BlogDetail } from "features/blog"

function BlogDetailPage() {
    return (
        <div>
            <div>
                <BlogDetail />
            </div>
            <div>
                <AdsList />
            </div>
        </div>
    )
}

export {
    BlogDetailPage
}