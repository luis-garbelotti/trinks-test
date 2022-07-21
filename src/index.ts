let finalPosition: number[];
let currentPosition: number[];

function changePosition(initialPosition: number[], vector: [string, number]) {
  let finalPosition: string;
  currentPosition = initialPosition;

  const acceptedDirection = {
    N(): number[] {
      return currentPosition = [currentPosition[0], currentPosition[1] + vector[1]];
    },
    S(): number[] {
      return currentPosition = [currentPosition[0], currentPosition[1] - vector[1]];
    },
    L(): number[] {
      return currentPosition = [currentPosition[0] + vector[1], currentPosition[1]];
    },
    O(): number[] {
      return currentPosition = [currentPosition[0] - vector[1], currentPosition[1]];
    }
  }

  const direction: string = vector[0].toUpperCase();
  const applyCordinates = acceptedDirection[direction];
  applyCordinates()
  finalPosition = `(${currentPosition[0]}, ${currentPosition[1]})`; 
  
  return finalPosition;
}