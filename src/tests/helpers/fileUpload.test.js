import { fileUpload } from "../../helpers/fileUpload";
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: "drcq2kx3u",
  api_key: "866284555429616",
  api_secret: "8QZEFSmDM5nS1_XDh-PU0Y2XufA",
});

describe("Pruebas en fileUpload", () => {
  test("Debe de cargar un archivo y retornar el URL", async () => {
    const resp = await fetch(
      "https://kinsta.com/es/wp-content/uploads/sites/8/2020/10/tipos-de-archivos-de-imagen.png"
    );
    const blob = await resp.blob();
    const file = new File([blob], "foto.png");
    const url = await fileUpload(file);

    expect(typeof url).toBe("string");

    const segments = url.split("/");
    const imageId = segments[segments.length - 1].replace(".png", "");

    await cloudinary.v2.api.delete_resources(imageId, {}, () => {});
  });

  test("Debe de retornar un error", async () => {
    const file = new File([], "foto.png");
    const url = await fileUpload(file);

    expect(url).toBe(null);
  });
});
