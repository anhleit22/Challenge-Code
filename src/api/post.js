import service from "./request";

export function savePost(data) {
    return service.post('/api/save',data)
}