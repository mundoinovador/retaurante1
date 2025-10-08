import { AspectRatio } from "@components/ui/aspect-ratio";

function ContainerImage() {
  return (
    <AspectRatio
      ratio={16 / 9}
      className="bg-muted rounded-[.5rem] md:rounded-[2rem]"
    >
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        className="h-full w-full rounded-[.5rem] md:rounded-[2rem] object-cover dark:brightness-[0.2] dark:grayscale"
      />
    </AspectRatio>
  );
}

export { ContainerImage };
