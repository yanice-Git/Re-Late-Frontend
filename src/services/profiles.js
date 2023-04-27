import { makeRequest } from "./makeRequest"

export function getProfiles() {
    return makeRequest("/profiles")
}

export function getPost(id) {
    return makeRequest(`/posts/${id}`)
}