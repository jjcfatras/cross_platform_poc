// import { useEffect, useState } from "react";
// import DropDownPicker, {
//   type DropDownPickerProps,
//   type ItemType,
//   type ValueType,
// } from "react-native-dropdown-picker";
// import { withUnistyles } from "react-native-unistyles";
// import { StyleSheet, UnistylesRuntime } from "react-native-unistyles";

// const UniDropDown = withUnistyles(DropDownPicker, (theme) => ({
//   containerStyle: {
//     backgroundColor: theme.colors.bad,
//     width: 100,
//   },
// }));

// type PickerProps = DropDownPickerProps<ValueType>;

// export const Picker = ({
//   items,
//   multiple,
//   onChangeValue,
//   open,
//   setOpen,
//   setValue,
//   value,
//   ...rest
// }: PickerProps) => {
//   // const [open, setOpen] = useState(false);
//   // const [value, setValue] = useState(null);
//   const [_items, setItems] = useState(items);

//   console.group("Picker");
//   console.log(JSON.stringify({ open }, null, "\t"));
//   console.log(JSON.stringify({ value }, null, "\t"));
//   console.log(JSON.stringify({ _items }, null, "\t"));
//   console.groupEnd();

//   useEffect(() => {
//     if (value === "light") {
//       UnistylesRuntime.setTheme("light");
//     }
//     if (value === "dark") {
//       UnistylesRuntime.setTheme("dark");
//     }
//   }, [value]);

//   return multiple ? (
//     <DropDownPicker
//       // containerStyle={{  }}
//       items={_items}
//       labelStyle={styles.test}
//       multiple
//       // onChangeValue={onChangeValue}
//       open={open}
//       schema={{ label: "label", value: "value" }}
//       setItems={setItems}
//       setOpen={setOpen}
//       setValue={setValue}
//       value={value}
//       {...rest}
//     />
//   ) : (
//     <DropDownPicker
//       // containerStyle={{  }}
//       items={_items}
//       labelStyle={styles.test}
//       multiple={false}
//       // onChangeValue={onChangeValue}
//       open={open}
//       setItems={setItems}
//       setOpen={setOpen}
//       setValue={setValue}
//       value={value}
//       {...rest}
//     />
//   );
// };

// const styles = StyleSheet.create((theme) => ({
//   picker: {
//     backgroundColor: theme.colors.bad,
//   },
//   test: {
//     color: theme.colors.bad,
//   },
// }));
