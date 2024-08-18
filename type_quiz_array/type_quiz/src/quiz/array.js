var array1_1 = [1];
var array1_2 = [1, 2, 3, 4, 5];
// @ts-expect-error string is not allowed for the `Array1`.
var array1_3 = ["string", "is", "not", "allowed"];
var array2_1 = [1, "string", 2, "is", 3, "allowed"];
// @ts-expect-error boolean is not allowed for the `Array2`.
var array2_2 = [true, false, true, false];
var tuple1_1 = [1, "string is here"];
// @ts-expect-error too many elements.
var tuple1_2 = [1, "this is bad", 3, 4, 5];
// @ts-expect-error types are not matched.
var tuple1_3 = ["string", 1];
