export const Home = ({ active }: { active?: boolean }) => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <path
      className={active ? 'fill-white' : 'fill-primary'}
      strokeWidth={2}
      stroke="currentColor"
      d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
    />
    <path
      className={active ? 'stroke-white' : 'stroke-blue-500'}
      strokeWidth="2"
      fill="black"
      d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"
    />
  </svg>
);
