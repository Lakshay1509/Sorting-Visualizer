export function getBubbleSortAnimations(array){


    const animations = [];
    if (array.length <= 1) return array;
    bubbleSortHelper(array, animations);
    return animations;
}


function bubbleSortHelper(array, animations){
    
    let n = array.length;

    for(let i =0; i<n;i++){

        for(let j =0; j<n-i-1;j++){

            //change colours
            animations.push([j,j+1]);

            //revert colours
            animations.push([j,j+1]);

            if(array[j]> array[j+1]){

                animations.push([j,array[j+1]]);
                animations.push([j+1,j+1]);
                animations.push([j+1,j+1]);
                animations.push([j+1,array[j]]);
                [array[j],array[j+1]] = [array[j+1],array[j]];
            }
            else{
                animations.push([j,array[j]]);
                animations.push([j+1,j+1]);
                animations.push([j+1,j+1]);
                animations.push([j+1,array[j+1]]);
            }

        }
    }
}