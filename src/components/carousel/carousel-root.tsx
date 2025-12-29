import {
  component$,
  useId,
  useSignal,
  useContextProvider,
  Slot,
  type Signal,
  createContextId,
  type PropsOf,
} from "@qwik.dev/core";
import { Render } from "../render/render";

type CarouselContext = {
  localId: string;
  isTitle: Signal<boolean>;
};

export const carouselContextId = createContextId<CarouselContext>(
  "qui-carousel-context"
);

export const CarouselRoot = component$((props: PropsOf<"div">) => {
  const { align: _align, ...rest } = props;

  // core state
  const localId = useId();
  const isTitle = useSignal(false);
  const titleId = `${localId}-title`;

  const context: CarouselContext = {
    localId,
    isTitle,
  };

  useContextProvider(carouselContextId, context);

  return (
    <Render
      {...rest}
      fallback="div"
      id={localId}
      aria-labelledby={isTitle.value ? titleId : undefined}
    >
      <Slot />
    </Render>
  );
});
