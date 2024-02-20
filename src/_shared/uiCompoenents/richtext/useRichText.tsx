import { convertToRaw, EditorState } from "draft-js"
import { useState } from "react"
import parse from "html-react-parser"
import draftToHtml from "draftjs-to-html"
import RichText from "./RichText"
export const UseRichText = () => {
  const [editorStateR, setEditorStateR] = useState(() =>
    EditorState.createEmpty()
  )
  const getEditorData = (state: EditorState) => {
    return parse(draftToHtml(convertToRaw(state.getCurrentContent())))
  }
  const onEditorStateChange = (name: string) => (editorState: EditorState) => {
    setEditorStateR(editorState)
  }

  return {
    getEditorData,
    onEditorStateChange,
    RichText
  }
}
