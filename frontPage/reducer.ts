import { notRequested, content, error, loading } from "../data/LCE";
import { FrontPageActions } from "./actions";

const initialState = {
  posts: notRequested(),
}

export const frontPage = (state = initialState, action) => {
  if (action.type === FrontPageActions.success) {
    const newPosts = action.posts.data.children.map((post) => {
      return post.data.title;
    });

    return {
      ...state,
      posts: content(newPosts),
    }
  }

  if (action.type === FrontPageActions.error) {
    return {
      ...state,
      posts: error(action.error)
    }
  }

  if (action.type === FrontPageActions.start) {
    return {
      ...state,
      posts: loading()
    }
  }

  return state;
};

