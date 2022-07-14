import axios from "axios";
import "dotenv/config";

export async function getGithubUser(
  user: UserGithubSearch
): Promise<UserGithub> {
  return await axios
    .get(`https://api.github.com/users/${user.login}`, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    })
    .then((user) => user.data);
}
