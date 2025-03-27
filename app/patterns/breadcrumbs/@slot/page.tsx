import { Breadcrumbs } from '../_components/breadcrumbs';

export default function Page() {
  const items = [
    {
      text: 'Home',
      href: '/patterns/breadcrumbs',
    },
  ];
  return <Breadcrumbs items={items} />;
}
