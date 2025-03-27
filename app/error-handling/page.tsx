import { BuggyButton } from '#/ui/buggy-button';

export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">Error Handling</h1>

      <ul>
        <li>
          <code>error.js</code> defines the error boundary for a route segment
          and the children below it. It can be used to show specific error
          information, and functionality to attempt to recover from the error.
        </li>
        <li>
          Trying navigation pages and triggering an error inside nested layouts.
          Notice how the error is isolated to that segment, while the rest of
          the app remains interactive.
        </li>
      </ul>

      <BuggyButton />

    </div>
  );
}