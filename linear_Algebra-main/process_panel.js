//excepltinos : when string1 = 0, (flip the order of the equations),
//flip the equations to mach the order of the functions,
//examples : string1  starts with 0 or all the equations stat with 0

var string1 = "4x + 4y + 7z = 3";
var string2 = "4x + 7y + 7z = 40";
var string3 = "3x + 4y + 3z = 1";

var reuslt = [];
reuslt = solve_matrix(string1, string2, string3);

function solve_matrix(string1, string2, string3) {
  let e11, e12, e13, e21, e22, e23, e31, e32, e33, l1, l2, l3;
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
}
function matrix_parse(e11, e12, e13, e21, e22, e23, e31, e32, e33,l1,l2,l3) {
  let matrix = [e11, e12, e13, l1, e21, e22, e23, l2, e31, e32, e33, l3];
}
function convert_to_reduce_echlone_form(d_row1, d_row2, d_row3) {
  d_row1 = convert_entity_to_1(d_row1, 0);
  d_row2 = convert_entity_to_0(d_row1, d_row2, 0);
  d_row3 = convert_entity_to_0(d_row1, d_row3, 0);

  d_row2 = convert_entity_to_1(d_row2, 1);
  d_row1 = convert_entity_to_0(d_row2, d_row1, 1);
  d_row3 = convert_entity_to_0(d_row2, d_row3, 1);

  d_row3 = convert_entity_to_1(d_row3, 2);
  d_row1 = convert_entity_to_0(d_row3, d_row1, 2);
  d_row2 = convert_entity_to_0(d_row3, d_row2, 2);

  echlone_matrix = [d_row1, d_row2, d_row3];
  return echlone_matrix;
}
function convert_entity_to_1(matrix, index) {
  var revert = true;
  while (revert) {
    if (matrix[index] > 1) {
      matrix = math.divide(matrix, matrix[index]);
      revert === false;
    } else if ((matrix[index] = 1)) {
      matrix[index] = 1;
    } else if (matrix[index] > 1 && matrix[index] != 0) {
      matrix = math.multiply(matrix, -1);
      matrix = math.divide(matrix, matrix[index]);
    }
    revert = false;
  }
  return matrix;
}
// 4x + 7y + 7z = 40
function convert_entity_to_0(matrix1, matrix2, index) {
  var temp_matrix1 = [];
  var Incomplete = true;
  while (Incomplete) {
    if ((matrix2[index] = 0)) {
      Incomplete = false; // exception under construction
    } else if (matrix2[index] < 1) {
      matrix1 = math.multiply(matrix1, matrix2[index]);
      matrix2 = math.subtract(matrix2, matrix1);
      Incomplete = false;
    } else if (matrix2[index] > 1) {
      temp_matrix1 = math.multiply(-1, matrix1);
      matrix2 = math.subtract(matrix2, temp_matrix1);
      Incomplete = false;
    }
  }
  return matrix2;
}

//  console.log(lcm_two_numbers(3,15));
//  console.log(lcm_two_numbers(10,2));
//add row and pivot operations to convert the matrix into eclon form
