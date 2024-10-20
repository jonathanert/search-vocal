/** 
  Tolong buatkan 
  - pencarian huruf vocal pada string 
  - berikan validasi input tidak boleh special character & number
*/

"use client";

import { useState } from "react";

function Input() {
  const [input, setInput] = useState("");
  const [vocal, setVocal] = useState(["a", "i", "u", "e", "o"]);

  function filterVocal(param) {
    let result = [];

    for (let i = 0; i < param.length; i++) {
      const search = vocal.filter((item) => item.includes(param[i]));
      result.push(search);
    }

    return result;
  }

  function searchVocal(param) {
    const joinParam = param.join("").split("");
    console.log(joinParam);

    const arrayTanpaDuplikat = joinParam.reduce((unique, item) => {
      if (!unique.includes(item)) {
        unique.push(item);
      }
      return unique;
    }, []);

    return arrayTanpaDuplikat;
  }

  const searchVocalVal = filterVocal(input.toLowerCase().split(""));

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      {/\d+/g.test(input) ? (
        <p>Tidak boleh angka</p>
      ) : /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g.test(input) ? (
        <p>Tidak boleh spesial character</p>
      ) : null}
      <div>
        <label htmlFor="">Input: {input}</label>
      </div>
      <div>
        <label htmlFor="">Vocal: {searchVocal(searchVocalVal)}</label>
      </div>
      <div>
        <label htmlFor="">Vocal berdasarkan input: {searchVocalVal}</label>
      </div>
    </div>
  );
}

export default Input;