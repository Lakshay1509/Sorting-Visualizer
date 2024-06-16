import React from "react";
import { useState } from "react";
import { getMergeSortAnimations } from "../SortingAlgo/mergeSort.js";

import { getBubbleSortAnimations } from "../SortingAlgo/bubbleSort.js";

import { getQuickSortAnimations } from "../SortingAlgo/quickSort.js";

import Button from "../assets/Button";

const animationSpeed = 20;

function Sorting() {
  const [arr, setArr] = useState([]);
  const [size, setSize] = useState(150);
  const [speed, setSpeed] = useState(5);

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function resetArr() {
    let newArr = [];
    for (let i = 0; i < size; i++) {
      newArr.push(randomIntFromInterval(5, 500));
    }
    setArr(newArr);
  }

  function setArraySize(e){

    setSize(e);
    resetArr();

  }

  function MergeSort() {
    const animations = getMergeSortAnimations(arr);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? "red" : "white";
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * (animationSpeed / speed));
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * (animationSpeed / speed));
      }
    }
  }

  function QuickSort() {
    const animations = getQuickSortAnimations(arr);

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;

      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? "red" : "white";
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * (animationSpeed / speed));
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * (animationSpeed / speed));
      }
    }
  }

  function BubbleSort() {
    const animations = getBubbleSortAnimations(arr);

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;

      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? "red" : "white";
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * (animationSpeed / speed));
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * (animationSpeed / speed));
      }
    }
  }

  return (
    <>
      <div>
        <div className="flex justify-evenly items-center w-full">
          <div className="flex justify-evenly items-center text-white mb-10 w-full">
            <label
              for="minmax-range"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white  "
            >
              Adjust Array Size
            </label>
            <input
              id="minmax-range"
              type="range"
              min="5"
              max="200"
              onChange={(e)=>setArraySize(e.target.value)}
              value={size}
              className="w-40 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            ></input>
            <label
              for="minmax-range"
              className="mb-2 text-lg font-medium text-gray-900 dark:text-white  "
            >
              {size}
            </label>
          </div>
          <div className="flex justify-evenly items-center text-white mb-10 w-full">
            <label
              for="minmax-range"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white  "
            >
              Adjust Speed
            </label>
            <input
              id="minmax-range"
              type="range"
              min="1"
              max="20"
              onChange={(e) => {
                setSpeed(e.target.value);
              }}
              value={speed}
              className="w-40 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            ></input>
            <label
              for="minmax-range"
              className="mb-2 text-lg font-medium text-gray-900 dark:text-white  "
            >
              {speed}
            </label>
          </div>
        </div>
        <div className="flex-row justify-center mb-10  text-center">
          {arr.map((value, idx) => (
            <div
              className="array-bar w-[4px] mr-[1px] inline-flex"
              key={idx}
              style={{
                height: `${value}px`,
                backgroundColor: "white",
              }}
            ></div>
          ))}
        </div>

        <div className="flex justify-evenly text-white">
          <Button text="Generate New Array" onClick={resetArr}></Button>
          <Button text="Merge Sort" onClick={MergeSort}></Button>
          <Button text="Quick Sort" onClick={QuickSort}></Button>
          <Button text="Bubble Sort" onClick={BubbleSort}></Button>
        </div>
      </div>
    </>
  );
}

export default Sorting;
