"use client";

import { Tldraw, TldrawEditor, Editor } from "@tldraw/tldraw";
import { trpc } from "@/utils/trpc";
import { useState, useCallback } from "react";
import debounce from "lodash.debounce";
import "tldraw/tldraw.css";

export default function EditorPage() {
  const { data } = trpc.getData.useQuery();
  const saveData = trpc.saveData.useMutation();
  const [editor, setEditor] = useState<TldrawEditor | null>(null);

  const debouncedSave = useCallback(
    debounce((editorInstance: typeof TldrawEditor) => {
      const snapshot = editorInstance.store.getSnapshot();
      saveData.mutate({ data: snapshot });
    }, 1000),
    [saveData]
  );

  const handleMount = useCallback(
    (editorInstance: TldrawEditor) => {
      setEditor(editorInstance);

      if (data) {
        editorInstance.store.loadSnapshot(data);
      }

      editorInstance.store.listen(() => {
        debouncedSave(editorInstance);
      });
    },
    [data, debouncedSave]
  );

  return (
    <div className='grid grid-rows-12 h-screen'>
      <div className='flex row-span-1 w-full justify-center p-4 bg-gray-100'>
        <button className='text-white bg-gray-900 hover:bg-gray-700 p-4'>
          Modify Shape
        </button>
      </div>
      <div className='row-span-11 border-4 border-black p-4rounded-lg'>
        <Tldraw onMount={handleMount} className='rounded-lg' />
      </div>
    </div>
  );
}
