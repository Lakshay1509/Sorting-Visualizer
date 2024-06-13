import React from "react";
import { useState } from "react";
import {getMergeSortAnimations} from "../SortingAlgo/mergeSort.js"

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

  function MergeSort(){

    const animations = getMergeSortAnimations(arr);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? 'red' : 'white';
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

  function QuickSort(){

  }

  function BubbleSort(){

  }

  return (
    <>
      <div>
        <div className="flex justify-center mb-20">
        {arr.map((value, idx) => (
          <div
            className="array-bar w-[4px] inline-block mr-[1px]"
            key={idx}
            style={{
              height: `${value}px`,
              backgroundColor: "white",
              
            }}
          ></div>
        ))}
        </div>

        <div className="flex justify-evenly text-white">
        <button onClick={resetArr} className="text-white">Generate New Array</button>
        <button onClick={MergeSort} className="text-white">Merge Sort</button>
        <button onClick={QuickSort}>Quick Sort</button>
        <button onClick={BubbleSort}>Bubble Sort</button>
        </div>

      </div>
    </>
  );
}

export default Sorting;
