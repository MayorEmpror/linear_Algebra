//excepltinos : when string1 = 0, (flip the order of the equations),
//flip the equations to mach the order of the functions,
//examples : string1  starts with 0 or all the equations stat with 0
var string1 = "4x + 4y + 7z = 3";
var string2 = "4x + 7y + 7z = 40";
var string3 = "3x + 4y + 0z = 1";
let e11, e12, e13, e21, e22, e23, e31, e32, e33, l1, l2, l3;
var reuslt = [];
reuslt = solve_matrix(string1, string2, string3);
console.log(reuslt)
function solve_matrix(string1, string2, string3) {
  const numbers_plane_one = string1.split(" ");
  const numbers_plane_two = string2.split(" ");
  const numbers_plane_three = string3.split(" ");
  e11 = parseInt(numbers_plane_one[0]); //1
  e21 = parseInt(numbers_plane_two[0]); //2
  e31 = parseInt(numbers_plane_three[0]); //3
  l1 = parseInt(numbers_plane_one[6]); //3
  e12 = parseInt(numbers_plane_one[2]); //4
  e22 = parseInt(numbers_plane_two[2]); //5
  e32 = parseInt(numbers_plane_three[2]); //6
  l2 = parseInt(numbers_plane_two[6]); //2
  e13 = parseInt(numbers_plane_one[4]); //7
  e23 = parseInt(numbers_plane_two[4]); //8
  e33 = parseInt(numbers_plane_three[4]); //9
  l3 = parseInt(numbers_plane_three[6]); //1
  var row1 = [e11, e12, e13, l1];
  var row2 = [e21, e22, e23, l2];
  var row3 = [e31, e32, e33, l3];
  matrix_parse(e11, e12, e13, l1, e21, e22, e23, l2, e31, e32, e33, l3);
  return convert_to_reduce_echlone_form(row1, row2, row3);

  //console.log(convert_to_reduce_echlone_form(row1, row2, row3));
}

function matrix_parse(e11, e12, e13, e21, e22, e23, e31, e32, e33) {
  let matrix = [e11, e12, e13, l1, e21, e22, e23, l2, e31, e32, e33, l3];
  console.table(matrix);
}
//dumy display
// convert_entity_to_1(row1, e11);
//lcm methods
function lcm_two_numbers(x, y) {
  if (typeof x !== "number" || typeof y !== "number") return false;
  return !x || !y ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
}
function gcd_two_numbers(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}
var Incomplete = true;
// const reusltant = math.add(row1,row2)
// console.log(reusltant);;
function convert_to_reduce_echlone_form(d_row1, d_row2, d_row3) {
  convert_entity_to_1(d_row1, 0);
  convert_entity_to_0(d_row1, d_row2, 0);
  convert_entity_to_0(d_row1, d_row3, 0);
  //change of column
  convert_entity_to_1(d_row2, 1);
  convert_entity_to_0(d_row2, d_row1, 1);
  convert_entity_to_0(d_row2, d_row3, 1);
  //change of column
  convert_entity_to_1(d_row3, 2);
  convert_entity_to_0(d_row3, d_row1, 2);
  convert_entity_to_0(d_row3, d_row2, 2);
  echlone_matrix = [d_row1, d_row2, d_row3];
  return echlone_matrix;
}
function convert_entity_to_1(matrix, index) {
  var revert = true;
  while (revert) {
    if (matrix[index] > 1) {
      console.log(matrix +" yeha");
      matrix = math.divide(matrix, matrix[index]);
      console.log("row1 /" + matrix[index]);
      console.log(matrix + "thr");
      revert === false;
    } else if ((matrix[index] = 1)) {
      matrix[index] = 1;
      console.log("option1");
    } else if (matrix[index] > 1 && matrix[index] != 0) {
      matrix = math.multiply(matrix[index], -1);
      matrix = math.divide(matrix, matrix[index]);
      console.log(matrix);
     //there is no condition for matrix[index < 1]
    }
    revert = false;
  }
  return matrix;
}
function convert_entity_to_0(matrix1, matrix2, index) {
  var temp_matrix = [];
  var Incomplete = true;
  while (Incomplete) {
    if ((matrix2[index] = 0)) {
      Incomplete = false;
    } else if (matrix2[index] > 1) {
      temp_matrix1 = math.multiply(matrix[index], matrix1);
      matrix2 = math.subtract(matrix2, temp_matrix1);
      Incomplete = false
    } else if (matrix2[index] < 1) {
      temp_matrix = math.multiply(-2, matrix1);
      matrix2 = math.add(matrix2, temp_matrix);
      Incomplete = false
    }
  }
}

//  console.log(lcm_two_numbers(3,15));
//  console.log(lcm_two_numbers(10,2));
//add row and pivot operations to convert the matrix into eclon form
