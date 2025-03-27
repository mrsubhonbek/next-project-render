import { Breadcrumbs } from '../../_components/breadcrumbs';

export default async function Page(props: {
  params: Promise<{
    all: string[];
  }>;
}) {
  const params = await props.params;

  const { all } = params;

  const items = [
    {
      text: 'Home',
      href: '/patterns/breadcrumbs',
    },
    ...all.map((param) => ({
      text: param,
      href: `/patterns/breadcrumbs/${param}`,
    })),
  ];
  return <Breadcrumbs items={items} />;
}
