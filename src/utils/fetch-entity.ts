const cmsHost = 'https://cdn.contentful.com';
const cmsPath = '/spaces/xx8e0o49dnr9/environments/master/entries/';
const accessToken = 'aLNnWaTINSZx2qytytYeAynU0YscNShPsLX0wIBdZy4';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchEntity<T = any>(entityId: string): Promise<T> {
  const url = new URL(cmsHost + cmsPath + entityId);
  url.searchParams.append('access_token', accessToken);

  return fetch(url.toString()).then((res) => res.json());
}
