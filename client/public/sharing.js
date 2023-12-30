const shareBtn = document.querySelector(".share-btn");

shareBtn.addEventListener("click", () => {
  if (navigator.share) {
    navigator.share({
      title: "MedHelp",
      "sizes": "512x512",
      url: "https://ricksmorty.vercel.app/",
    });
  }
});