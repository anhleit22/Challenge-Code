import service from "./request";

export function loginWithCodePhone(data) {
    return service.post('/api/login',data)
}
export function validateCode(data) {
    return service.post('/api/login/validate',data)
}
