export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return animations;
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
}

function quickSortHelper(array, low, high, animations) {
    if (low < high) {
        let pi = partition(array, low, high, animations);
        quickSortHelper(array, low, pi - 1, animations);
        quickSortHelper(array, pi + 1, high, animations);
    }
}

function partition(array, start, end, animations) {
    let pivot = array[start];
    let count = 0;

    for (let i = start + 1; i <= end; i++) {
        if (array[i] <= pivot) {
            count++;
        }
    }

    let pivotIdx = start + count;
    // Pivot swap animation
    animations.push([start, pivotIdx]);
    animations.push([start, pivotIdx]);
    animations.push([start, array[pivotIdx]]);
    animations.push([pivotIdx, pivotIdx]); 
    animations.push([pivotIdx, pivotIdx]);
    animations.push([pivotIdx, array[start]]);

    [array[start], array[pivotIdx]] = [array[pivotIdx], array[start]];

    let i = start, j = end;

    while (i < pivotIdx && j > pivotIdx) {
        while (array[i] <= pivot) {
            // Comparison animation
            animations.push([i, i]);
            animations.push([i, i]);
            animations.push([i, array[i]]);
            i++;
        }
        while (array[j] > pivot) {
            // Comparison animation
            animations.push([j, j]);
            animations.push([j, j]);
            animations.push([j, array[j]]);
            j--;
        }
        if (i < pivotIdx && j > pivotIdx) {
            // Swap animation
            animations.push([i, j]);
            animations.push([i, j]);
            animations.push([i, array[j]]);
            animations.push([i, j]);
            animations.push([i, j]);
            animations.push([j, array[i]]);
            [array[i], array[j]] = [array[j], array[i]];
            i++;
            j--;
        }
    }

    return pivotIdx;
}
