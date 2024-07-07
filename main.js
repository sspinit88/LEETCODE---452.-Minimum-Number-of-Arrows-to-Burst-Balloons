/*
452. Minimum Number of Arrows to Burst Balloons

There are some spherical balloons taped onto a flat wall that represents the XY-plane. 
The balloons are represented as a 2D integer array points where points[i] = [xstart, xend] 
denotes a balloon whose horizontal diameter stretches between xstart and xend. You do not know the exact y-coordinates of the balloons.

Arrows can be shot up directly vertically (in the positive y-direction) from different points along the x-axis. 
A balloon with xstart and xend is burst by an arrow shot at x if xstart <= x <= xend. There is no limit to the number of arrows that can be shot. 
A shot arrow keeps traveling up infinitely, bursting any balloons in its path.

Given the array points, return the minimum number of arrows that must be shot to burst all balloons.

 

Example 1:

Input: points = [[10,16],[2,8],[1,6],[7,12]]
Output: 2
Explanation: The balloons can be burst by 2 arrows:
- Shoot an arrow at x = 6, bursting the balloons [2,8] and [1,6].
- Shoot an arrow at x = 11, bursting the balloons [10,16] and [7,12].

Example 2:

Input: points = [[1,2],[3,4],[5,6],[7,8]]
Output: 4
Explanation: One arrow needs to be shot for each balloon for a total of 4 arrows.

Example 3:

Input: points = [[1,2],[2,3],[3,4],[4,5]]
Output: 2
Explanation: The balloons can be burst by 2 arrows:
- Shoot an arrow at x = 2, bursting the balloons [1,2] and [2,3].
- Shoot an arrow at x = 4, bursting the balloons [3,4] and [4,5].


Ваша задача - вернуть минимальное количество стрел, которые должны быть выпущены, чтобы взорвать все шары.

Вот шаги, которые мы будем следовать:

1. Сортируем массив шаров по их конечной точке.
2. Инициализируем переменную для отслеживания конца текущего шара.
3. Проходим по каждому шару в массиве. 
   Если начало текущего шара больше конца предыдущего шара, 
   увеличиваем счетчик стрел и обновляем конец текущего шара.
4. Возвращаем количество стрел.

Your task is to return the minimum number of arrows that must be shot to burst all balloons.

Here are the steps we will follow:

1. Sort the array of balloons by their end point.
2. Initialize a variable to track the end of the current balloon.
3. Go through each balloon in the array. 
   If the start of the current balloon is greater than the end of the previous balloon, 
  increase the arrow counter and update the end of the current balloon.
4. Return the number of arrows.

*/

function findMinArrowShots(points) {
  // Если массив пуст, возвращаем 0
  // If the array is empty, return 0
  if (points.length === 0) {
    return 0;
  }

  // Сортируем массив шаров по их конечной точке
  // Sort the array of balloons by their end point
  points.sort((a, b) => a[1] - b[1]);

  // Инициализируем переменную для отслеживания конца текущего шара и счетчик стрел
  // Initialize a variable to track the end of the current balloon and the arrow counter
  let end = points[0][1];
  let arrows = 1;

  // Проходим по каждому шару в массиве
  // Go through each balloon in the array
  for (let i = 1; i < points.length; i++) {
    // Если начало текущего шара больше конца предыдущего шара
    // If the start of the current balloon is greater than the end of the previous balloon
    if (points[i][0] > end) {
      // Увеличиваем счетчик стрел и обновляем конец текущего шара
      // Increase the arrow counter and update the end of the current balloon
      arrows++;
      end = points[i][1];
    }
  }

  // Возвращаем количество стрел
  // Return the number of arrows
  return arrows;
}
