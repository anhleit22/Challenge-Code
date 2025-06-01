import service from "./request";

export function loginWithCodePhone(data) {
    return service.post('/login',data)
  }