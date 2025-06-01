import service from "./request";

export function generateIdeas(data) {
    return service.post('/api/post-ideas',data)
}
export function generateListIdeasPost(data) {
    return service.post('/api/generate-list-ideas',data)
}
