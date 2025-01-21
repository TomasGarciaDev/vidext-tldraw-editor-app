"use client";

import { Button } from "@/components/ui/button";
import { Tldraw, Editor, getSnapshot, loadSnapshot, TLShapeId } from "tldraw";
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

  const modifyShape = useCallback(() => {
    if (editor) {
      const shapes = editor.getSelectedShapes();

      if (shapes.length) {
        const shape = shapes[0];

        if (shape.type === "geo") {
          const shapeCycle = [
            "cloud",
            "rectangle",
            "ellipse",
            "triangle",
            "diamond",
            "pentagon",
            "hexagon",
            "octagon",
            "star",
            "rhombus",
            "rhombus-2",
            "oval",
            "trapezoid",
            "arrow-right",
            "arrow-left",
            "arrow-up",
            "arrow-down",
            "x-box",
            "check-box",
            "heart",
          ];

          const nextShape =
            shapeCycle[Math.floor(Math.random() * shapeCycle.length)];

          editor.updateShape({
            id: shape.id as TLShapeId,
            type: "geo",
            props: {
              ...shape.props,
              geo: nextShape,
            },
          });

          const snapshot = getSnapshot(editor.store);
          saveData.mutate({ data: snapshot });
        } else {
          alert("Selected shape is not a geometric shape.");
        }
      } else {
        alert("No selected shape to modify.");
      }
    }
  }, [editor, saveData]);

  return (
    <div className='grid grid-rows-12 h-full gap-4'>
      <div className='flex row-span-1 w-full justify-center items-center'>
        <Button
          onClick={modifyShape}
          variant='default'
          size='lg'
          className='hover:bg-gray-700'
        >
          Modify Shape
        </Button>
      </div>

      <div className='row-span-11 border-4 border-black rounded-lg'>
        <Tldraw onMount={handleMount} className='rounded-lg' />
      </div>
    </div>
  );
}
