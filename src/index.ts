let finalPosition: number[];
let currentPosition: number[];

function changePosition(initialPosition: number[], vector: [string, number]) {
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
}