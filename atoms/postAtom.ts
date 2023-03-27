import { atom } from "recoil";

export const handlePostState = atom({
    key: 'handlePostState',
    default: false,
});

export const useSSRPostState = atom({
    key: 'useSSRPostState',
    default: false,
});


export const getPostState = atom({
    key: 'getPostState',
    default: {},
});