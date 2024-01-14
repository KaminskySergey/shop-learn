// import * as React from 'react';
// import {
//     Unstable_NumberInput as BaseNumberInput,
//     NumberInputProps,
// } from '@mui/base/Unstable_NumberInput';
// import RemoveIcon from '@mui/icons-material/Remove';
// import AddIcon from '@mui/icons-material/Add';


// const StyledInputRoot = {
//     fontFamily: 'IBM Plex Sans, sans-serif',
//     fontWeight: 400,
//     color: '#333', // Ваш цвет текста
//     display: 'flex',
//     flexFlow: 'row nowrap',
//     justifyContent: 'center',
//     alignItems: 'center',
// };

// const StyledInput = {
//     fontSize: '0.875rem',
//     fontFamily: 'inherit',
//     fontWeight: 400,
//     lineHeight: 1.375,
//     color: '#666', // Ваш цвет текста
//     background: '#fff', // Ваш цвет фона
//     border: '1px solid #ccc', // Ваш цвет границы
//     boxShadow: '0px 2px 4px rgba(0,0,0, 0.05)',
//     borderRadius: '8px',
//     margin: '0 8px',
//     padding: '10px 12px',
//     outline: '0',
//     minWidth: 0,
//     width: '4rem',
//     textAlign: 'center',

//     '&:hover': {
//         borderColor: '#99f', // Ваш цвет при наведении
//     },

//     '&:focus': {
//         borderColor: '#99f', // Ваш цвет при фокусе
//         boxShadow: '0 0 0 3px rgba(0,0,255,0.2)', // Ваш цвет тени при фокусе
//     },

//     '&:focus-visible': {
//         outline: '0',
//     },
// };

// const StyledButton = {
//     fontFamily: 'IBM Plex Sans, sans-serif',
//     fontSize: '0.875rem',
//     boxSizing: 'border-box',
//     lineHeight: 1.5,
//     border: '1px solid #ccc', // Ваш цвет границы
//     borderRadius: '999px',
//     background: '#eee', // Ваш цвет фона
//     color: '#333', // Ваш цвет текста
//     width: '32px',
//     height: '32px',
//     display: 'flex',
//     flexFlow: 'row nowrap',
//     justifyContent: 'center',
//     alignItems: 'center',
//     transitionProperty: 'all',
//     transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
//     transitionDuration: '120ms',

//     '&:hover': {
//         cursor: 'pointer',
//         background: '#99f', // Ваш цвет при наведении
//         borderColor: '#66f', // Ваш цвет границы при наведении
//         color: '#fff', // Ваш цвет текста при наведении
//     },

//     '&:focus-visible': {
//         outline: '0',
//     },

//     '&.increment': {
//         order: 1,
//     },
// };

// const NumberInput = React.forwardRef(function CustomNumberInput(
//     props: NumberInputProps,
//     ref: React.ForwardedRef<HTMLDivElement>,
// ) {
//     return (
//         <BaseNumberInput
//             //   className={styled.inputRoot}
//             slots={{
//                 root: StyledInputRoot,
//                 input: StyledInput,
//                 incrementButton: StyledButton,
//                 decrementButton: StyledButton,
//             }}
//             slotProps={{
//                 incrementButton: {
//                     children: <AddIcon fontSize="small" />,
//                     className: 'increment',
//                 },
//                 decrementButton: {
//                     children: <RemoveIcon fontSize="small" />,
//                 },
//             }}
//             {...props}
//             ref={ref}
//         />
//     );
// });

// export default function QuantityInput() {
//     return <NumberInput aria-label="Quantity Input" min={1} max={99} />;
// }