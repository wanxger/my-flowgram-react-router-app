import {
  EditorRenderer,
  FreeLayoutEditorProvider,
} from "@flowgram.ai/free-layout-editor";

import "@flowgram.ai/free-layout-editor/index.css";
import { Minimap } from "./components/minimap";
import { NodeAddPanel } from "./components/node-add-panel";
import { Tools } from "./components/tools";
import { useEditorProps } from "./hooks/use-editor-props";
import "./index.css";

export const Editor = () => {
  const editorProps = useEditorProps();
  return (
    <FreeLayoutEditorProvider {...editorProps}>
      <div className="demo-free-container">
        <div className="demo-free-layout">
          <NodeAddPanel />
          <EditorRenderer className="demo-free-editor" />
        </div>
        <Tools />
        <Minimap />
      </div>
    </FreeLayoutEditorProvider>
  );
};
