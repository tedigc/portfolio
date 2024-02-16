import { Heading } from '@/components/Heading';

const skills = [
  { label: 'Javascript', href: '' },
  { label: 'Typescript', href: '' },
  { label: 'React', href: '' },
  { label: 'Next.js', href: '' },
  { label: 'Vite', href: '' },
  { label: 'Jest', href: '' },
  { label: 'React testing library', href: '' },
  { label: 'Cypress', href: '' },
  { label: 'Playwright', href: '' },
  { label: 'Selenium', href: '' },
  { label: 'SASS', href: '' },
  { label: 'CSS modules', href: '' },
  { label: 'Tailwind', href: '' },
  { label: 'Styled components', href: '' },
  { label: 'Node.js', href: '' },
  { label: 'NestJS', href: '' },
  { label: 'Express', href: '' },
  { label: 'Apollo GraphQL', href: '' },
  { label: 'Git', href: '' },
  { label: 'Bash', href: '' },
  { label: 'Python', href: '' },
  { label: 'C#', href: '' },
  { label: 'CircleCI', href: '' },
];

export default function Page() {
  return (
    <main>
      <Heading>Home</Heading>

      <div className="max-w-2xl">
        <ul className="flex flex-wrap">
          {skills.map((skill, index) => (
            <li key={index} className="mb-2 mr-2">
              <a
                className="block cursor-pointer rounded-full bg-slate-100 px-4 py-2 text-sm transition-colors hover:bg-slate-200"
                href={skill.href}
              >
                {skill.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
