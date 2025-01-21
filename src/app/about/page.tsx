import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className='min-h-screen p-6'>
      <div className='max-w-4xl mx-auto bg-white border-2 border-gray-600 rounded-lg p-10'>
        <h1 className='text-3xl font-bold text-gray-800 mb-4'>
          About This App
        </h1>
        <p className='text-gray-600 leading-relaxed mb-6'>
          This app is a versatile drawing and shape-editing tool designed to
          make creativity effortless. With an intuitive interface and powerful
          features, it’s perfect for sketching ideas, prototyping designs, or
          exploring creative concepts. Bring your vision to life with ease and
          precision.
        </p>

        <h2 className='text-2xl font-semibold text-gray-800 mb-3'>Features</h2>
        <div className='mx-auto px-8'>
          <ul className='flex flex-col list-disc gap-4 text-gray-600 mb-6 text-left'>
            <li>
              Create various geometric shapes, including rectangles, ellipses,
              triangles, and more.
            </li>
            <li>
              Modify selected shapes by randomly cycling through different
              geometric forms.
            </li>
            <li>Auto-save feature ensures your work is never lost.</li>
            <li>
              Responsive and user-friendly interface with dynamic controls.
            </li>
          </ul>
        </div>

        <h2 className='text-2xl font-semibold text-gray-800 mb-3'>
          Technologies Used
        </h2>
        <div className='mx-auto px-8'>
          <ul className='flex flex-col list-disc gap-4 text-gray-600 mb-6 text-left'>
            <li>
              <strong>
                <a
                  href='https://nextjs.org'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Next.js
                </a>
              </strong>
              : Provides the app's structure and handles routing, server-side
              rendering, and API routes for saving and retrieving data.
            </li>
            <li>
              <strong>
                <a
                  href='https://reactjs.org'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  React
                </a>
              </strong>
              : Powers the component-based user interface, ensuring a responsive
              and interactive experience.
            </li>
            <li>
              <strong>
                <a
                  href='https://trpc.io'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  tRPC
                </a>
              </strong>
              : Enables type-safe communication between the frontend and
              backend, ensuring seamless data flow.
            </li>
            <li>
              <strong>
                <a
                  href='https://nodejs.org/en'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Node.js
                </a>
              </strong>
              : Provides the runtime for backend logic.
            </li>
            <li>
              <strong>
                <a
                  href='https://zod.dev'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Zod
                </a>
              </strong>
              : A powerful TypeScript-first schema validation library used for
              validating and parsing API inputs and outputs.
            </li>
            <li>
              <strong>
                <a
                  href='https://tailwindcss.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  TailwindCSS
                </a>
              </strong>
              : Facilitates rapid styling and ensures a clean and modern design.
            </li>
            <li>
              <strong>
                <a
                  href='https://ui.shadcn.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Shadcn/UI
                </a>
              </strong>
              : Adds a collection of beautifully designed and reusable
              components, enhancing the app's visual appeal and usability.
            </li>
            <li>
              <strong>
                <a
                  href='https://tldraw.dev/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Tldraw
                </a>
              </strong>
              : Provides the core drawing and shape-editing functionality,
              enabling users to create and manipulate shapes in real-time.
            </li>
            <li>
              <strong>
                <a
                  href='https://lodash.com/docs/4.17.15#debounce'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Debounce (Lodash)
                </a>
              </strong>
              : Reduces redundant API calls by debouncing auto-save
              functionality, ensuring optimal performance.
            </li>
          </ul>
        </div>

        <p className='text-gray-600 mt-6'>
          This app demonstrates the potential of integrating modern web
          technologies to build a feature-rich and intuitive drawing tool. It
          leverages frameworks like Next.js, React, tRPC, TailwindCSS, and
          Shadcn/UI to showcase best practices in development, from seamless
          frontend-backend communication to clean, responsive design and
          reusable components. It's a practical example for developers exploring
          scalable and maintainable application architectures.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
