import {
  component$,
  type PropsOf,
  Slot,
  useContext,
  useTask$,
} from "@qwik.dev/core";
import { Render } from "../render/render";
import { carouselContextId } from "./carousel-root";

/** Used to distinguish accessible label from other carousels */
export const CarouselTitle = component$<PropsOf<"div">>(
  (props: PropsOf<"div">) => {
    const context = useContext(carouselContextId);
    const titleId = `${context.localId}-title`;

    useTask$(() => {
      context.isTitle.value = true;
    });

    return (
      <Render {...props} fallback="div" id={titleId}>
        <Slot />
      </Render>
    );
  }
);
