Setup
1. Node and npm
2. Create react app via cli
3. React dev tool chrome extension
4. Visuo studio code extension
5. Import react libraries  
    a. `npm i react-icons`  
    b. 
6. State is passed down and actions get passed up
7. Popular js in react 
    1. `Anonymous inner functions and arrow functions` 
    2. `Ternary operators` eg conditon && action `let name = age > 10 && "Jess"`
    3. `Objects` (a) destracturing from props (b) if name of object element key is same as the variable name for the value in the key value pair, just put the name  
        `objects1 -> naming inside objects`  
        `objects2 -> updating objects inside state`   
    4. `Array functions -> map(), filter(), reduce()`  
    5. `Async-await, callback vs Promises, Fetch` -> https://www.youtube.com/watch?v=PoRJizFvM7s  
8. Npm serve tool -> `serve -s build -p 5000`
9. Json server for mock backend 

## React hooks
LINK https://www.youtube.com/watch?v=TNhaISOUy6Q   
LINK 2 - https://www.youtube.com/playlist?list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h   
`useState()` - used to update state. Has an array with two elements; the reactive value and the set method to update the value. Other usecasess requires use of the function version of useState() when initializing the value   `useState(() -> return 4)`    .     
`useCallback()it’s` -  STORES THE MEMOIZED FUNCTION   .   
`useMemo()` -  cache result of function call `memoization` . Only used with expensiove calculations. STORES THE MEMOIZED DATA. A fucntion is called only when the memoized data changes  .    
`useEffect()` - react components updates everytime the state changes. That's why we handle `useEffect` to control this for https requests. Pass array of dependnecies. Doing cleanups in useEffect() hooks

```
    useEffect(() => {
        fetch('/foo').then(() => setLoaded(true))
        }, []
    )
```

`useRef()` - allow us to create a mutable object that keeps the same reference between renders. That means the UI doesn't re-render when state changes. Only used when we want to grab an element from the DOM
```
function App() {
    const myBtn = useRef(null)
    const clickIt = () => myBtn.current.click()
    
    return (
        <button ref={myBtn}></button>
    )
}
```
`useContext()` -  share data without prop drilling   
`useReducer()`  - 
   
1. You cannot put hooks inside if statements or loops. They cannot be nested in any way
2. useMemo() only returns the value of the duntion
3. useCallback() hook returns the function hence you can call it somewhere else and even pass arguments
## Handling events

## React forms
We use `Formik` react lirary to help with:  
1. Two way data binding
2. Handling form submission
3. Validations using `yup`

## Todos
1. Use formik library
2. Use context API for state management

