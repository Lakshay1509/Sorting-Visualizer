import React from "react";
import { useState } from "react";
import { getMergeSortAnimations } from "../SortingAlgo/mergeSort.js";

import { getBubbleSortAnimations } from "../SortingAlgo/bubbleSort.js";

import { getQuickSortAnimations } from "../SortingAlgo/quickSort.js";

import  Button from "../assets/Button"

const ANIMATION_SPEED_MS = 10;

function Sorting() {
  const [arr, setArr] = useState([]);

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function resetArr() {
    let newArr = [];
    for (let i = 0; i < 200; i++) {
      newArr.push(randomIntFromInterval(5, 500));
    }
    setArr(newArr);
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
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
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
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
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
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  return (
    <>
      <div>
        <div className="flex-row justify-center mb-20 text-center">

          
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
          <Button text="Generate New Array" onClick={resetArr} ></Button>
          <Button text="Merge Sort" onClick={MergeSort} ></Button>
          <Button text="Quick Sort" onClick={QuickSort} ></Button>
          <Button text="Bubble Sort" onClick={BubbleSort} ></Button>
        </div>
      </div>
    </>
  );
}

export default Sorting;
