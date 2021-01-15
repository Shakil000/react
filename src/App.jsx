import React from "react";
import {add,sub,mul,div} from './Calc';

function App(){
    return(
    <>
 <ul>
    <li>sum of two number is = {add(10,20)}</li>
    <li>sub of two number is = {sub(10,20)}</li>
    <li>mul of two number is = {mul(10,20)}</li>
    <li>div of two number is = {div(100,20)}</li>
    </ul>
  </>
    );
}

export default App;