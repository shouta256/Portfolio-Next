import { getList } from '@/libs/client';

export async function getWork() {
  const works = await getList();
  console.log(works);
  return works;
}
