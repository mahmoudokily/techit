import { EditorState, convertToRaw } from "draft-js"
import draftToHtml from "draftjs-to-html"
import { Editor } from "react-draft-wysiwyg"
// import { useUploadImage } from "../hooks/useUploadImage"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

type RichTextProps = {
  onEditorStateChange: any
  setEditorStateR: any
  editorStateR: any
  placeholder: string
}

const RichText: React.FC<RichTextProps> = ({
  onEditorStateChange,
  setEditorStateR,
  editorStateR,
  placeholder
}) => {
  //   const { execute } = useUploadImage()

  const uploadImageCallBack = (file: any) => {
    return new Promise((resolve, reject) => {
      const data = new FormData()
      data.append("image", file)
      // execute({ data });
    })
  }
  // to get the current data and review it
  // const getEditorData = (state: EditorState) => {
  //   return parse(draftToHtml(convertToRaw(state.getCurrentContent())));
  // };

  // get currnet data and send it as string to backend
  //   const description = JSON.stringify(
  //     draftToHtml(convertToRaw(editorStateR.getCurrentContent()))
  //   );

  return (
    <Editor
      placeholder={placeholder}
      onEditorStateChange={onEditorStateChange}
      toolbarClassName="toolbarClassName"
      wrapperClassName="demo-wrapper"
      editorClassName="demo-editor"
      toolbar={{
        inline: { inDropdown: true },
        list: { inDropdown: true },
        textAlign: { inDropdown: true },
        link: { inDropdown: true },
        history: { inDropdown: true },

        image: {
          uploadCallback: uploadImageCallBack,
          alt: { present: true, mandatory: true }
        }
      }}
      mention={{
        separator: " ",
        trigger: "@",
        suggestions: [
          { text: "APPLE", value: "apple", url: "apple" },
          { text: "BANANA", value: "banana", url: "banana" },
          { text: "CHERRY", value: "cherry", url: "cherry" },
          { text: "DURIAN", value: "durian", url: "durian" },
          { text: "EGGFRUIT", value: "eggfruit", url: "eggfruit" },
          { text: "FIG", value: "fig", url: "fig" },
          { text: "GRAPEFRUIT", value: "grapefruit", url: "grapefruit" },
          { text: "HONEYDEW", value: "honeydew", url: "honeydew" }
        ]
      }}
      hashtag={{}}
    />
  )
}

export default RichText
