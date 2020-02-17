import {RootState } from "../data/bootstrap";

export const getPosts = (state: RootState) => state.frontPage.posts;