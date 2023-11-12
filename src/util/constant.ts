export const CURRENT_URL = "";
export const url = window.location.href;
export const DAY = "YYYY-MM-DD-dddd";
// export const SHIFTS = [
//   "8AM",
//   "9AM",
//   "10AM",
//   "11AM",
//   "12PM",
//   "13PM",
//   "14PM",
//   "15PM",
//   "16PM",
//   "17PM",
//   "18PM",
//   "19PM",
// ];
export const SHIFTS = ["Kíp 1", "Kíp 2", "Kíp 3", "Kíp 4"]
export const ROOMS = ["Nguyen Van A", "Nguyen Van B", "Nguyen Van C", "Nguyen Van D"];
export const userName = "Nguyễn Thị Thanh";
export const ID = "123";
export const ALL_TEETH = [
11,12,13,14,15,16,17,18,
21,22,23,24,25,26,27,28,
31,32,33,34,35,36,37,38,
41,42,43,44,45,46,47,48
];
export const ALL_TEETH_CHILD =[
    111,112,113,114,115,116,117,118,
    121,122,123,124,125,126,127,128,        
    131,132,133,134,135,136,137,138,
    141,142,143,144,145,146,147,148
]
export const ALL_TOP_TEETH =[
11,12,13,14,15,16,17,18,
21,22,23,24,25,26,27,28,
]
export const ALL_BOTTOM_TEETH=[
31,32,33,34,35,36,37,38,
41,42,43,44,45,46,47,48
]
export const ALL_TOP_CHILD =[
    111,112,113,114,115,116,117,118,
    121,122,123,124,125,126,127,128,

]
export const ALL_BOTTOM_CHILD=[
    131,132,133,134,135,136,137,138,
    141,142,143,144,145,146,147,148
    ]

    // -----------------------------------
// export const ALL_RIGHT_CIRCLE = [
//   9, 10, 11, 12, 13, 14, 15, 16, 22, 23, 24, 25, 26,
// ];
// export const ALL_LEFT_CIRCLE = [1, 2, 3, 4, 5, 6, 8, 17, 7, 18, 19, 20, 21];
// export const ALL_LETTER = [21, 20, 19, 18, 17, 22, 23, 24, 25, 26];
// export const ALL_NUMBER = [1,10,20,11];

// export const ALL_LEFT_NUMBER = [1, 2, 3, 4, 5, 6, 7, 8];
// export const ALL_RIGHT_NUMBER = [9, 10, 11, 12, 13, 14, 15, 16];
// export const ALL_LEFT_LETTER = [17, 18, 19, 20, 21];
// export const ALL_RIGHT_LETTER = [22, 23, 24, 25, 26];
export const numberToLetter_left: Record<number, string> = {
  111: "child",
  112: "child",
  113: "child",
  114: "child",
  115: "child",
};
export const numberToLetter_right: Record<number, string> = {
  21: "A",
  23: "B",
  24: "C",
  25: "D",
  26: "E",
};
export const numberToNumberRight: Record<number, string> = {
  9: "1",
  10: "2",
  11: "3",
  12: "4",
  13: "5",
  14: "6",
  15: "7",
  16: "8",
};
export const numberToNumberLeft: Record<number, string> = {
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
};
//   <ItemTeeth
//   label={"1"}
//   addClass={`${styles.circleMargin1}`}
//   onClick={handleClick}
//   selectedCircle={selectedCircle}
//   idNumber={9}
// />
