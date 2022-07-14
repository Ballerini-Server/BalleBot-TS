import axios from "axios";
import "dotenv/config";

export async function searchGithubUsers(
  search: string
): Promise<UserGithubSearch[]> {
  const queryString = `q=${encodeURIComponent(search)}+in:user`;
  return await axios
    .get(`https://api.github.com/search/users?${queryString}`, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    })
    .then((res) => res.data.items);
}
