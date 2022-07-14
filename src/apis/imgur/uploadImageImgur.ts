import Imgur from "imgur";
import "dotenv/config";

export const uploadImage = (anex: ParamsUploadImgur[]) =>
  new Promise((resolve) => {
    const linksImages = [];

    const imgur: Imgur = new Imgur({ clientId: process.env.IMGUR_TOKEN });

    anex.forEach(async (imageUrl) => {
      if (
        imageUrl.url.endsWith(".png") ||
        imageUrl.url.endsWith(".jpg") ||
        imageUrl.url.endsWith(".jpeg")
      ) {
        await imgur
          .upload({ type: "url", image: imageUrl.url })
          .then((json) => {
            linksImages.push(json.data.link);
          })
          .catch();
      }
      if (linksImages.length === anex.length) {
        resolve(linksImages);
      }
    });
  });
