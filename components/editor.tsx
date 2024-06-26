'use client'

import {useCallback} from 'react'
import {useTheme} from 'next-themes'
import {BlockNoteEditor, PartialBlock} from '@blocknote/core'
import {useCreateBlockNote} from '@blocknote/react'
import {BlockNoteView} from '@blocknote/mantine'
import '@blocknote/core/style.css'
import '@blocknote/mantine/style.css'

import {useEdgeStore} from '@/lib/edgestore'

interface EditorProps {
  onChange: (content: string) => void
  initialContent?: string
  editable?: boolean
}

const Editor = ({onChange, initialContent, editable}: EditorProps) => {
  const {resolvedTheme} = useTheme()
  const {edgestore} = useEdgeStore()

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({
      file,
    })

    return response.url
  }

  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
    uploadFile: handleUpload,
  })

  const uploadToDatabase = useCallback(() => {
    if (onChange) {
      setTimeout(() => {
        onChange(JSON.stringify(editor.document))
      }, 1000)
    }
  }, [editor, onChange])

  return (
    <div>
      <BlockNoteView
        editable={editable}
        editor={editor}
        onChange={uploadToDatabase}
        theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
      />
    </div>
  )
}

export default Editor
