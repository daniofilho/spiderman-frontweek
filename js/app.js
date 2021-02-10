document.addEventListener("DOMContentLoaded", () => {
  let tl = new TimelineMax();

  tl.fromTo(
    ".bg-loader", // classe
    1, // tempo
    { width: "100%" }, // from
    { width: "0%", delay: 5, ease: Expo.easeInOut } //to
  )
    .fromTo(
      ".bg-video",
      2,
      { width: "0%", opacity: 0 },
      { width: "100%", opacity: 1, ease: Expo.easeInOut },
      "-=1" // adia a animação 1s
    )

    .fromTo(
      ".logo",
      0.7,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, ease: Back.easeOut.config(1.7) },
      "-=0.5"
    )

    .fromTo(
      ".nav-list",
      0.7,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, ease: Back.easeOut.config(1.7) },
      "-=0.5"
    )

    .fromTo(
      ".nav-social",
      0.7,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, ease: Back.easeOut.config(1.7) },
      "-=0.5"
    )

    .fromTo(
      ".item-1",
      0.7,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, ease: Back.easeOut.config(1.7) },
      "-=0.5"
    )

    .fromTo(
      ".item-2",
      0.7,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, ease: Back.easeOut.config(1.7) },
      "-=0.5"
    )

    .fromTo(
      ".item-3",
      0.7,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, ease: Back.easeOut.config(1.7) },
      "-=0.5"
    )

    .fromTo(
      ".item-4",
      0.7,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, ease: Back.easeOut.config(1.7) },
      "-=0.5"
    )

    .fromTo(
      ".item-5",
      0.7,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, ease: Back.easeOut.config(1.7) },
      "-=0.5"
    );
});
