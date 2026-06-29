<div align="center">

# 🎯 Sorting Algorithm Visualizer

### Watch sorting algorithms come to life — one comparison and swap at a time.



![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)




![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)




![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)




![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)



[Live Demo](https://sorting-algorithm-visualizer-lac.vercel.app) · [Report Bug](#) · [Request Feature](#)

</div>

---

## ✨ Overview

A **Sorting Algorithm Visualizer** built to make algorithm behavior intuitive and visible — instead of just seeing a sorted array appear instantly, you watch every comparison and swap happen in real time, color-coded and animated bar by bar.

Built as a hands-on way to understand how sorting algorithms actually work, not just their time complexity on paper.

---

## 🚀 Features

| Feature | Description |
|---|---|
| 🔀 5 Algorithms | Bubble, Selection, Insertion, Merge, and Quick Sort |
| 🎨 Color-Coded Animation | Visually distinct states for comparing, swapping, and sorted bars |
| 📊 Live Statistics | Real-time comparison and swap counters as the algorithm runs |
| 📐 Adjustable Array Size | Control how many bars are generated |
| ⏱️ Adjustable Speed | Control the delay between each animation step |
| 🎲 Random Array Generator | Instantly generate a new dataset to sort |
| 📖 Algorithm Info Card | Best / average / worst time, space complexity, stability and in-place status |

---

## 🎨 Color Legend

| Color | Meaning |
|---|---|
| 🔵 Blue | Default / untouched |
| 🟡 Yellow | Currently comparing |
| 🔴 Red | Currently swapping |
| 🟢 Green | Sorted / finalized |

---

## 🛠️ Tech Stack

- **React** — component-based UI
- **Vite** — fast dev server and build tool
- **JavaScript ES6+** — algorithm logic and state management
- **CSS** — styling and animation transitions

---

## 📂 Project Structure

```
src/
├── algorithms/
│   ├── bubbleSort.js
│   ├── selectionSort.js
│   ├── insertionSort.js
│   ├── mergeSort.js
│   └── quickSort.js
├── components/
│   ├── Navbar.jsx
│   ├── Controls.jsx
│   ├── Visualizer.jsx
│   └── AlgorithmInfo.jsx
├── data/
│   └── algorithmDetails.js
├── styles/
│   ├── Navbar.css
│   ├── Controls.css
│   ├── Visualizer.css
│   └── AlgorithmInfo.css
├── utils/
│   ├── generateArray.js
│   └── sleep.js
├── App.jsx
├── index.css
└── main.jsx
```

---

## ⚡ Getting Started

### Prerequisites
- Node.js v16+
- npm

### Installation

```bash
git clone https://github.com/devidasari666-beep/sorting-algorithm-visualizer.git
cd sorting-algorithm-visualizer
npm install
```

### Run locally

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### Build for production

```bash
npm run build
npm run preview
```

---

## 🧠 How It Works

Each algorithm runs as an async function that:
1. Works on a copy of the array
2. Marks elements as comparing or swapping as it processes them
3. Updates React state after every meaningful step
4. Waits a configurable delay using sleep() before the next step

This step by step state update — rather than computing the final result instantly — is what produces the animation.

---

## 📊 Algorithm Complexity Reference

| Algorithm | Best | Average | Worst | Space | Stable | In-place |
|---|---|---|---|---|---|---|
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) | ✅ | ✅ |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) | ❌ | ✅ |
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) | ✅ | ✅ |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) | ✅ | ❌ |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) | ❌ | ✅ |

---

## 🔮 Future Improvements

- [ ] Pause / Resume / Reset mid-sort
- [ ] Invert speed slider so higher value = faster animation
- [ ] Support array sizes up to 200+ bars
- [ ] Step counter / progress bar
- [ ] Mobile-responsive layout improvements
- [ ] Dark mode toggle

---

## 📄 License

Open for personal and educational use.

---

<div align="center">

Made with ⚡ by Dasari Devi

</div>