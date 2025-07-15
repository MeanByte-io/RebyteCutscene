/**
 * RebyteCutscene - Lightweight cutscene engine
 * Usage: rebyte.NewCutscene(images, time, transition, music);
 * Events: document.dispatchEvent(new Event('rebyteCutsceneEnd'));
 */

const rebyte = (function () {
  let container, audio;
  const transitions = {
    fade: (el) => {
      el.style.opacity = 0;
      el.style.transition = 'opacity 1s';
      requestAnimationFrame(() => (el.style.opacity = 1));
    },
    slideLeft: (el) => {
      el.style.transform = 'translateX(100%)';
      el.style.transition = 'transform 1s';
      requestAnimationFrame(() => (el.style.transform = 'translateX(0)'));
    },
    slideRight: (el) => {
      el.style.transform = 'translateX(-100%)';
      el.style.transition = 'transform 1s';
      requestAnimationFrame(() => (el.style.transform = 'translateX(0)'));
    },
    zoomIn: (el) => {
      el.style.transform = 'scale(0.5)';
      el.style.transition = 'transform 1s';
      requestAnimationFrame(() => (el.style.transform = 'scale(1)'));
    },
    zoomOut: (el) => {
      el.style.transform = 'scale(1.5)';
      el.style.transition = 'transform 1s';
      requestAnimationFrame(() => (el.style.transform = 'scale(1)'));
    },
    rotate: (el) => {
      el.style.transform = 'rotate(360deg)';
      el.style.transition = 'transform 1.5s';
      requestAnimationFrame(() => (el.style.transform = 'rotate(0deg)'));
    },
  };

  function createContainer() {
    container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100vw';
    container.style.height = '100vh';
    container.style.backgroundColor = 'black';
    container.style.zIndex = '9999';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    document.body.appendChild(container);
  }

  function playImageSequence(images, time, transition, music) {
    let index = 0;
    createContainer();

    if (music) {
      audio = new Audio(music);
      audio.loop = false;
      audio.play();
    }

    const img = document.createElement('img');
    img.style.maxWidth = '100%';
    img.style.maxHeight = '100%';
    img.style.transition = 'all 1s ease';
    container.appendChild(img);

    function nextImage() {
      if (index >= images.length) {
        if (audio) audio.pause();
        document.body.removeChild(container);
        document.dispatchEvent(new Event('rebyteCutsceneEnd'));
        return;
      }
      img.src = images[index];
      img.style.opacity = 0;
      img.style.transform = 'none';
      if (transitions[transition]) {
        transitions[transition](img);
      }
      index++;
      setTimeout(nextImage, time);
    }

    nextImage();
  }

  return {
    NewCutscene: playImageSequence,
  };
})();
