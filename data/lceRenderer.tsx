import {LCE, CONTENT, NOT_REQUESTED, LOADING, ERROR} from "./LCE";

export type LceRendererProps<T> = {
  lce: LCE<T>,
  notRequested: (notRequested: NOT_REQUESTED<T>) => JSX.Element | null,
  loading: (loading: LOADING<T>) => JSX.Element | null,
  content: (content: CONTENT<T>) => JSX.Element | null,
  error: (error: ERROR<T>) => JSX.Element | null,
};

export const LceRenderer = <T extends any>(props: LceRendererProps<T>) => {

  switch(props.lce.stage)
  {
    case "NOT_REQUESTED":
      return props.notRequested(props.lce);
    case "LOADING": 
      return props.loading(props.lce);
    case "CONTENT":
      return props.content(props.lce);
    case "ERROR":
      return props.error(props.lce);
  }
}
