import Link from "next/link";

const technologies: { title: string; description: string; href: string }[] = [
  {
    title: "Next.js",
    description:
      "Provides the app's structure and handles routing, server-side rendering, and API routes for saving and retrieving data.",
    href: "https://nextjs.org",
  },
  {
    title: "React",
    description:
      "Powers the component-based user interface, ensuring Link responsive and interactive experience.",
    href: "https://react.dev/",
  },
  {
    title: "tRPC",
    description:
      "Enables type-safe communication between the frontend and backend, ensuring seamless data flow.",
    href: "https://trpc.io/",
  },
  {
    title: "Node.js",
    description: "Provides the runtime for backend logic.",
    href: "https://nodejs.org/en",
  },
  {
    title: "Zod",
    description:
      "A powerful TypeScript-first schema validation library used for validating and parsing API inputs and outputs.",
    href: "https://zod.dev/",
  },
  {
    title: "TailwindCSS",
    description:
      "Facilitates rapid styling and ensures a clean and modern design.",
    href: "https://tailwindcss.com/",
  },
  {
    title: "Shadcn/UI",
    description:
      "Adds a collection of beautifully designed and reusable components, enhancing the app's visual appeal and usability.",
    href: "https://ui.shadcn.com/",
  },
  {
    title: "Tldraw",
    description:
      "Provides the core drawing and shape-editing functionality, enabling users to create and manipulate shapes in real-time.",
    href: "https://tldraw.dev/",
  },
  {
    title: "Debounce (Lodash)",
    description:
      " Reduces redundant API calls by debouncing auto-save functionality, ensuring optimal performance.",
    href: "https://lodash.com/docs/4.17.15#debounce",
  },
];

export const TechDescription = ({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) => {
  return (
    <li>
      <Link
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className='hover:underline font-bold'
      >
        {title}
      </Link>
      : {description}
    </li>
  );
};

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
            {technologies.map(({ title, description, href }) => (
              <TechDescription
                title={title}
                description={description}
                href={href}
                key={title}
              />
            ))}
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
