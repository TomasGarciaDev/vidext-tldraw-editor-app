import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HomePage: React.FC = () => {
  return (
    <div className='flex justify-center p-6'>
      <div className='max-w-3xl bg-white border-2 border-gray-600 rounded-lg p-8 text-center'>
        <h1 className='text-4xl font-bold text-gray-800 mb-4'>
          Welcome to Your Creative Canvas
        </h1>
        <p className='text-gray-600 leading-relaxed mb-6'>
          Unleash your creativity with our easy-to-use drawing editor. Design,
          edit, and transform shapes effortlessly, whether you're brainstorming
          ideas, sketching prototypes, or exploring new possibilities. Perfect
          for creative thinkers and problem-solvers alike.
        </p>

        <h2 className='text-2xl font-semibold text-gray-800 mb-3'>
          How to Use
        </h2>

        <div className='mx-auto px-8'>
          <ul className='flex flex-col list-disc gap-4 text-gray-600 mb-6 text-left'>
            <li>
              Click on the <strong>Go to Editor</strong> button to access the
              editor.
            </li>
            <li>
              Create shapes and manipulate them using the tools available.
            </li>
            <li>
              Randomly modify a shape using the <strong>Modify Shape</strong>{" "}
              button. To use it, select a shape and click on the button.
            </li>
            <li>Your progress is automatically saved as you work.</li>
          </ul>
        </div>

        <Link href='/editor' passHref>
          <Button
            size='lg'
            className=' bg-blue-600 text-white hover:bg-blue-700 '
          >
            Go to Editor
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
