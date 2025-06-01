import service from "./request";

export function getContentPost(data) {
    return service.post('/api/get-content',data)
}
