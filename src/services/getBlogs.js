import { checkError, client } from './client';

//added additional syntax for calling authors from foreign key table
export async function getBlogs() {
  const resp = await client.from('blogs').select(`
  *,
  authors (
    name
  )
  `);

  return checkError(resp);
}
