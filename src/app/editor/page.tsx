"use client";

import { Tldraw, Editor, getSnapshot, loadSnapshot } from "tldraw";
import { trpc } from "@/utils/trpc";
import { useState, useCallback, useEffect } from "react";
import debounce from "lodash.debounce";
import "tldraw/tldraw.css";

export default function EditorPage() {
  const { data: initialData } = trpc.getData.useQuery();
  const saveData = trpc.saveData.useMutation();
  const [editor, setEditor] = useState<Editor | null>(null);

  const debouncedSave = useCallback(
    debounce((editorInstance: Editor) => {
      const snapshot = getSnapshot(editorInstance.store);
      saveData.mutate({ data: snapshot });
    }, 1000),
    [saveData]
  );

  const handleMount = useCallback(
    (editorInstance: Editor) => {
      setEditor(editorInstance);

      if (initialData) {
        loadSnapshot(editorInstance.store, initialData);
      }

      editorInstance.store.listen(() => {
        debouncedSave(editorInstance);
      });
    },
    [initialData, debouncedSave]
  );

  useEffect(() => {
    if (editor && initialData) {
      loadSnapshot(editor.store, initialData);
    }
  }, [editor, initialData]);

  return (
    <div className='grid grid-rows-12 h-screen'>
      <div className='flex row-span-1 w-full justify-center p-4 bg-gray-100'>
        <button className='text-white bg-gray-900 hover:bg-gray-700 p-4'>
          Modify Shape
        </button>
      </div>

      <div className='row-span-11 border-4 border-black p-4 rounded-lg'>
        <Tldraw onMount={handleMount} className='rounded-lg' />
      </div>
    </div>
  );
}
