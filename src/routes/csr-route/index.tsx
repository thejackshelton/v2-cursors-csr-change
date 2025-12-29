import { component$ } from "@qwik.dev/core";
import type { DocumentHead } from "@qwik.dev/router";
import { Carousel } from "../../components/carousel";

export default component$(() => {
  return (
    <Carousel.Root data-testid="root">
      <Carousel.Title>Carousel Title</Carousel.Title>
    </Carousel.Root>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
