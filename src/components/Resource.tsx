import { Splide, SplideSlide } from "@splidejs/react-splide";
import type { CollectionEntry } from "astro:content";
import "@splidejs/react-splide/css"

export default function Resource({ data: { name, description, links } }: CollectionEntry<"resources">) {
  return <section>
    <h2 className="text-xl text-red">{name}</h2>
    <p className="text-lg italic pb-4">{description}</p>
    <Splide
      className="pb-10"
      role="group"
      aria-labelledby={`splide-${name}-label`}
      options={{
        perPage: 3,
        gap: "2em",
        pagination: false,
        arrows: links.length > 3,
        breakpoints: {
          768: {
            perPage: 2,
            arrows: links.length > 2,
          },
          640: {
            perPage: 1,
            arrows: links.length > 1,
          }
        }
      }}
    >
      {links.map(({ name, link, image, description }, i) => (
        <SplideSlide key={i}>
          <a className="overflow-hidden rounded-xl object-center" href={link} target="_blank" rel="noopener noreferrer">
            <img
              src={image.src}
              height={image.height}
              width={image.width}
              alt={name}
              className="aspect-3/2 object-cover rounded-lg"
            />
            <div className="rounded-lg absolute inset-0 flex flex-col justify-end bg-black/45 hover:bg-black/35 text-white pl-4 pb-4">
              <span className="font-semibold">{name}</span>
              <span className="text-sm italic">{description}</span>
            </div>
          </a>
        </SplideSlide>
      ))}
    </Splide>
  </section>;
}
