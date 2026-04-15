import linkedinIcon from "./assets/linkedin.svg";
import githubIcon from "./assets/github.svg";

const $links = document.getElementById("links");
const $socials = document.getElementById("socials");
const $name = document.querySelector("h1");
const $nickname = document.querySelector("h2");
const $description = document.querySelector("p");
const $avatar = document.getElementById("avatar");

const data = {
  name: "Santiago Patiño Hoyos",
  nickname: "Santipa",
  description:
    "Soy un desarrollador frontend con experiencia en creación de interfaces web, desarrollo de plantillas de email marketing y gestión de contenido en CMS. Durante los últimos años he trabajado construyendo y adaptando emails responsivos en HTML/CSS, integrándolos y ejecutando campañas en plataformas como Salesforce Marketing Cloud, Oracle Responsys, HubSpot y ActiveCampaign.",
  Socials: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/santiago-pati%C3%B1o-994bb8206/",
      username: "santiago-patiño-994bb8206",
      icon: linkedinIcon,
    },
    {
      name: "github",
      url: "https://github.com/Santipa21",
      username: "Santipa21",
      icon: githubIcon,
    },
  ],
  links: [
    {
      name: "blog",
      url: "https://example.com/",
      color: "red",
      emoji: "📖",
    },
    {
      name: "podcast",
      url: "https://example.com/",
      color: "yellow",
      emoji: "💬",
    },
  ],
  footer: "Made with Love on Colombia",
};

const main = () => {
  let name = document.createTextNode(data?.name);
  let nickname = document.createTextNode(data?.nickname);
  let description = document.createTextNode(data?.description);
  let links = data?.links
    ?.map((link) => {
      return ` <div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
          <a class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer"
            href="${link.url}" target="_blank">
            ${link.name}
          </a>
          <span> ${link.emoji}</span>
        </div>`;
    })
    .join("");
  let socials = data?.Socials?.map((social) => {
    return `<a href="${social.url}" target="_blank">
                <img src="${social.icon}" class="w-6 h-6 cursor-pointer text-gray-400 hover:text-[#98CA3F] fill-current" alt="${social.name}">
              </a>`;
  }).join("");
  let newItem = document.createElement("section");
  newItem.innerHTML = links;
  $socials.innerHTML = socials;
  $links.appendChild(newItem);
  $name.appendChild(name);
  $nickname.appendChild(nickname);
  $description.appendChild(description);
  $avatar.setAttribute("src", data.avatar);
};

main();
