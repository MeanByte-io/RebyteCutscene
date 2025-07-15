# 🎬 RebyteCutscene

**RebyteCutscene** is a lightweight JavaScript library for displaying cutscenes based on images, complete with cinematic transitions and optional background music. Ideal for games and interactive projects that need impactful, story-driven visuals with minimal setup.

---

## 🚀 Features

* ✅ Simple and intuitive API
* 🎞️ Multiple cinematic transitions
* 🎵 Optional background music
* 🧩 Custom duration for each frame
* 📢 Event triggered on cutscene completion
* ⚡ Fully standalone and lightweight

---

## 📦 Installation

No installation required. Just include the library in your HTML file:

```html
<script src="rebytecutscene.js"></script>
```

---

## 🧠 Usage

```javascript
rebyte.NewCutscene(imagesArray, time, transition, music);
```

### Parameters:

| Parameter     | Type     | Description                                                         |
| ------------- | -------- | ------------------------------------------------------------------- |
| `imagesArray` | `Array`  | Array of image URLs to display in order                             |
| `time`        | `Number` | Time per image in **milliseconds**                                  |
| `transition`  | `String` | Name of the transition to apply (`\"fade\"`, `\"slideLeft\"`, etc.) |
| `music`       | `String` | (Optional) Path or URL of background music (MP3, OGG, etc.)         |

---

## 🎞️ Available Transitions

* `fade`
* `slideLeft`
* `slideRight`
* `zoomIn`
* `zoomOut`
* `rotate`

More can be added easily if needed.

---

## 🧪 Example

```javascript
const images = [
  'cutscene1.png',
  'cutscene2.png',
  'cutscene3.png',
];

rebyte.NewCutscene(images, 3000, 'fade', 'cutscene-theme.mp3');
```

---

## 📢 Event: Detecting End of Cutscene

You can listen for the end of the cutscene like this:

```javascript
document.addEventListener('rebyteCutsceneEnd', () => {
  console.log('Cutscene finished!');
  // Start next game action here
});
```

---

## 🧰 Requirements

* Works in any modern browser
* Pure JavaScript (no dependencies)
