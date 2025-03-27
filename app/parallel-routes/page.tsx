import { Boundary } from '#/ui/boundary';

export default function Page() {
  return (
    <Boundary labels={['parallel-routes/page.tsx']} size="small">
      <div className="prose prose-sm prose-invert max-w-none">
        <h2 className="text-lg font-bold">Parallel Routes</h2>
        <ul>
          <li>
            Parallel Routes allow you to simultaneously or conditionally render
            multiple pages, with independent navigation, in the same layout.
          </li>
          <li>
            Try using the tabs in one parallel route to navigate. Notice the URL
            changes but the unaffected parallel route is preserved.
          </li>
          <li>
            Try using the browser&apos;s backwards and forwards navigation.
            Notice the browser&apos;s URL history state and active UI state is
            correctly synced.
          </li>
          <li>
            Try navigating to a tab in one parallel route and refreshing the
            browser. Notice you can choose what UI to show parallel routes that
            don&apos;t match the initial URL.
          </li>
        </ul>
      </div>
    </Boundary>
  );
}
