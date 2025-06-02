import service from "./request";

export function generateIdeas(data) {
    return service.post('/api/post-ideas',data)
}
export function generateListIdeasPost(data) {
    return service.post('/api/generate-list-ideas',data)
}
export function saveIdea(data) {
    return service.post('/api/save-ideas',data)
}
export function unSavePost(id) {
    return service.delete('/api/unsave/' + id)
}

