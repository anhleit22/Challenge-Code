import service from "./request";

export function generatePost(data) {
    return service.post('/api/generate-post-captions',data)
}
export function savePost(data) {
    return service.post('/api/save',data)
}