import {BlockNoteEditor, Theme} from '@blocknote/core'

export type BlockNoteViewProps = {
  editor: BlockNoteEditor
  editable?: boolean
  onSelectionChange?: () => void
  onChange?: () => void
  theme?:
    | 'light'
    | 'dark'
    | Theme
    | {
        light: Theme
        dark: Theme
      }
  formattingToolbar?: boolean
  linkToolbar?: boolean
  sideMenu?: boolean
  slashMenu?: boolean
  filePanel?: boolean
  tableHandles?: boolean
  children?: React.ReactNode
}
